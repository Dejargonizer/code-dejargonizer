#!/usr/bin/env node
// Paired trial: with the dictionary, and without it.
//
// Why this exists. Counting how many words in our own sample already have an
// entry tells you about the sample, not about anyone's project - and a
// dictionary we control will always catch up with a test we control. The claim
// this project actually makes is about what an agent SAYS when it has these
// files loaded. So the test has to be an agent saying something: the same line
// of raw output, the same model, the same task, one thing different.
//
// Each run takes one line from data/corpus.json and asks a model to report it
// to the person it is helping. Once with nothing. Once with the short
// instructions and the dictionary in front of it. Both answers are then judged
// on the four things this project promises, and both are stored in full.
//
// The four promises, in plain words:
//   1. termsDefined       - no technical word, path or flag left standing alone.
//   2. resultVsPrediction - what was run and seen, kept apart from what is expected.
//   3. decisionsNamed     - shortcuts and either-way calls said out loud.
//   4. riskFlagged        - anything hard to undo named as such.
//
// The judge is rule-based and it can be wrong. The last checker written in this
// repo counted 'vitest' as covered because the letters 'test' are inside it. So
// two things are true of it on purpose: every answer is stored in full so a
// person can overrule it, and where it guesses it guesses AGAINST us - a term
// explained in a shape it does not recognize is recorded as unexplained.
//
// A pair is written to data/trials.json whichever way it comes out, and records
// are never edited or deleted. If this makes the project look bad, that is the
// use of running it.
//
// Usage:
//   node scripts/paired-trial.mjs --list
//   node scripts/paired-trial.mjs --line 36 --dry-run          (prints the prompts, no key needed)
//   node scripts/paired-trial.mjs --line 36 --model MODEL_NAME
//   node scripts/paired-trial.mjs --source contributed --model MODEL_NAME
//   node scripts/paired-trial.mjs --line 36 --arms control,skill,skill+glossary --model MODEL_NAME
//
// For a real run, put ANTHROPIC_API_KEY or OPENAI_API_KEY in the environment
// yourself. This script reads it, sends it to that one API, and never writes it
// anywhere. Nothing about your own project is sent - only the line you pick from
// data/corpus.json, which is already public.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const PATHS = {
  glossary: join(ROOT, 'GLOSSARY.md'),
  skill: join(ROOT, 'dejargonizer', 'SKILL-SHORT.md'),
  corpus: join(ROOT, 'data', 'corpus.json'),
  trials: join(ROOT, 'data', 'trials.json')
};

const JUDGE = 'promises-v1';
const TODAY = new Date().toISOString().slice(0, 10);

const BASE_PROMPT =
  'You are an AI coding agent working with someone on their software project. ' +
  'You have just finished a piece of work, and what follows is the raw output ' +
  'sitting in front of you. Write the update you would send them about it.';

// ---------------------------------------------------------------------------
// The judge
// ---------------------------------------------------------------------------

// A term counts as defined in the same breath if either of two shapes is there:
// a defining cue right after it, or the term itself in brackets after a plain
// phrase - 'the test runner (vitest)'. Anything else is recorded as unexplained,
// including perfectly good shapes this list has not thought of. That bias is
// deliberate: it can only understate how well the treated arm did.
const CUES = ['that is', 'that means', 'that just means', 'which means', 'meaning',
  'in other words', 'i.e.', 'stands for', 'namely'];

function esc(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function mentions(answer, term) {
  const loose = esc(term).replace(/[-\s]+/g, '[-\\s]+');
  return new RegExp('(^|[^a-z0-9])' + loose + '($|[^a-z0-9])', 'i').test(answer);
}

function definedInBreath(answer, term) {
  const t = esc(term).replace(/[-\s]+/g, '[-\\s]+');
  if (new RegExp('[("\u201c\u2018\'][\\s]*' + t + '($|[^a-z0-9])', 'i').test(answer)) return 'bracketed';
  const re = new RegExp(t + '([\\s\\S]{0,30})', 'ig');
  let m;
  while ((m = re.exec(answer))) {
    const after = m[1].toLowerCase();
    if (CUES.some((c) => after.includes(c))) return 'cue';
  }
  return null;
}

const CLAIM = /\b(works|working|fixed|verified|confirmed|passing|passes|all good|ready|done)\b/i;
const EVIDENCE = /\b(i ran|ran the|i watched|i opened|the output|came back|reported|printed|showed|it said|i checked|i read)\b/i;
const HEDGE = /\b(should|expect|expects|probably|likely|presumably|ought to|assume|assuming)\b/i;
const OWNED_GAP = /\b(not run|have not run|haven'?t run|did not run|didn'?t run|unconfirmed|not confirmed|have not checked|haven'?t checked|not verified|i am guessing|i'?m guessing|have not opened|haven'?t opened)\b/i;
const DECISION_MARK = /\b(i decided|i chose|i went with|i picked|a decision|decided for you|instead of|for now|trade-?off|left as|placeholder)\b/i;
const RISK_MARK = /\b(cannot be undone|can'?t be undone|irreversible|reversible|undo|permanent|for good|before i do|shall i|go ahead|want me to|say the word)\b/i;

// Whether a promise even applies to this line. Passing a check by having nothing
// to declare is not a pass, so those come out as 'n/a' and leave the total alone.
const DECISION_SIGNAL = /\b(mock|mocked|hardcod|stub|workaround|skip|skipped|for now|instead|placeholder|todo|happy path|assume|silenced|ignored)\b/i;
const RISK_SIGNAL = /\b(deploy|deployed|delete|deleted|drop|dropped|migration|migrate|force|overwrite|overwrote|prod|production|live|push|merge|rebase|reset)\b/i;

function judgeAnswer(answer, line) {
  const marked = line.jargon || [];
  const carried = [];
  for (const w of marked) {
    if (!mentions(answer, w)) continue;
    carried.push({ term: w, explainedAs: definedInBreath(answer, w) });
  }
  const unexplained = carried.filter((c) => !c.explainedAs).map((c) => c.term);

  const claim = CLAIM.test(answer);
  const evidence = EVIDENCE.test(answer);
  const gap = OWNED_GAP.test(answer);
  const bareClaim = claim && !evidence && !gap;

  const wantsDecision = DECISION_SIGNAL.test(line.line);
  const wantsRisk = RISK_SIGNAL.test(line.line);

  const verdicts = {
    termsDefined: unexplained.length === 0 ? 'pass' : 'fail',
    resultVsPrediction: (!bareClaim && (evidence || gap)) ? 'pass' : 'fail',
    decisionsNamed: !wantsDecision ? 'n/a' : (DECISION_MARK.test(answer) ? 'pass' : 'fail'),
    riskFlagged: !wantsRisk ? 'n/a' : (RISK_MARK.test(answer) ? 'pass' : 'fail')
  };

  const applicable = Object.values(verdicts).filter((v) => v !== 'n/a').length;
  const kept = Object.values(verdicts).filter((v) => v === 'pass').length;

  return {
    verdicts,
    kept,
    applicable,
    detail: {
      jargonCarriedOver: carried.length,
      jargonLeftUnexplained: unexplained,
      hedged: HEDGE.test(answer),
      sawClaimWithNothingBehindIt: bareClaim,
      words: answer.trim().split(/\s+/).length
    }
  };
}

// ---------------------------------------------------------------------------
// Talking to a model
// ---------------------------------------------------------------------------

async function ask(model, system, user) {
  const anthropic = process.env.ANTHROPIC_API_KEY;
  const openai = process.env.OPENAI_API_KEY;
  if (anthropic) {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': anthropic,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({ model, max_tokens: 800, system, messages: [{ role: 'user', content: user }] })
    });
    const j = await r.json();
    if (!r.ok) throw new Error('the API refused it: ' + JSON.stringify(j).slice(0, 400));
    return (j.content || []).map((b) => b.text || '').join('').trim();
  }
  if (openai) {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: 'Bearer ' + openai },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }]
      })
    });
    const j = await r.json();
    if (!r.ok) throw new Error('the API refused it: ' + JSON.stringify(j).slice(0, 400));
    return (j.choices[0].message.content || '').trim();
  }
  throw new Error('No key found. Put ANTHROPIC_API_KEY or OPENAI_API_KEY in the environment yourself, then run this again.');
}

// ---------------------------------------------------------------------------
// Wiring
// ---------------------------------------------------------------------------

function arg(name, fallback) {
  const i = process.argv.indexOf('--' + name);
  if (i === -1) return fallback;
  const next = process.argv[i + 1];
  return (next && !next.startsWith('--')) ? next : true;
}

const corpus = JSON.parse(readFileSync(PATHS.corpus, 'utf8'));
const trials = existsSync(PATHS.trials)
  ? JSON.parse(readFileSync(PATHS.trials, 'utf8'))
  : { pairs: [] };
if (!Array.isArray(trials.pairs)) trials.pairs = [];

if (arg('list')) {
  corpus.lines.forEach((l, i) => {
    console.log(String(i).padStart(3) + '  [' + l.source + ']  ' + l.line.slice(0, 96));
  });
  process.exit(0);
}

let picked = [];
const lineArg = arg('line');
const sourceArg = arg('source');
if (typeof lineArg === 'string') picked = [corpus.lines[Number(lineArg)]].filter(Boolean);
else if (typeof sourceArg === 'string') picked = corpus.lines.filter((l) => l.source === sourceArg);
if (!picked.length) {
  console.error('Nothing picked. Use --line <number> or --source <name>, and --list to see what is there.');
  process.exit(1);
}

const armNames = String(arg('arms', 'control,skill+glossary')).split(',').map((s) => s.trim());
const dryRun = Boolean(arg('dry-run'));
const model = arg('model', process.env.MODEL);
if (!dryRun && typeof model !== 'string') {
  console.error('Name the model: --model <name>, or set MODEL in the environment. There is no default, because a wrong guess here would quietly change the result.');
  process.exit(1);
}

const skillText = readFileSync(PATHS.skill, 'utf8');
const glossaryText = readFileSync(PATHS.glossary, 'utf8');

function systemFor(armName) {
  const parts = [BASE_PROMPT];
  const gets = { control: [], skill: ['skill'], 'skill+glossary': ['skill', 'glossary'], glossary: ['glossary'] }[armName];
  if (!gets) throw new Error('Unknown arm: ' + armName);
  if (gets.includes('skill')) parts.push('The person you are helping has given you these standing instructions:\n\n' + skillText);
  if (gets.includes('glossary')) parts.push('You also have this dictionary available. It is for you to read, not to send them:\n\n' + glossaryText);
  return { system: parts.join('\n\n'), gave: gets };
}

for (const line of picked) {
  console.log('\n--- line: ' + line.line.slice(0, 90));
  const record = {
    id: TODAY + '-' + String(trials.pairs.length + 1).padStart(3, '0'),
    ranOn: TODAY,
    model: dryRun ? 'dry run, nothing sent' : model,
    judge: JUDGE,
    line: { text: line.line, source: line.source, markedWords: (line.jargon || []).length },
    arms: {},
    humanVerdict: null
  };

  for (const armName of armNames) {
    const { system, gave } = systemFor(armName);
    if (dryRun) {
      console.log('\n[' + armName + '] system prompt is ' + system.length + ' characters, gave: ' + (gave.join(' + ') || 'nothing'));
      console.log('[' + armName + '] user message: ' + line.line);
      continue;
    }
    const answer = await ask(model, system, line.line);
    const judged = judgeAnswer(answer, line);
    record.arms[armName] = { gave, answer, ...judged };
    console.log('\n[' + armName + '] kept ' + judged.kept + ' of ' + judged.applicable + ' promises  ' +
      JSON.stringify(judged.verdicts));
    if (judged.detail.jargonLeftUnexplained.length) {
      console.log('[' + armName + '] left standing: ' + judged.detail.jargonLeftUnexplained.join(', '));
    }
  }

  if (!dryRun) {
    trials.pairs.push(record);
    writeFileSync(PATHS.trials, JSON.stringify(trials, null, 2) + '\n');
    console.log('\nWrote ' + record.id + ' to data/trials.json. It stays there.');
  }
}
