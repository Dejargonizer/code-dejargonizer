#!/usr/bin/env node
// Builds data/metrics.json - the numbers behind the impact page.
//
// The trap this script is built to avoid:
// a dictionary that keeps growing will eventually "cover" any test you hold it
// against, because you write the missing entry the moment the test finds a gap.
// A coverage number produced that way measures nothing. It only says that we
// noticed the gap and closed it, which we already knew.
//
// So scoring is sealed. Every line in data/corpus.json is scored exactly once,
// on the day it arrives, against the dictionary as it stood that day. The result
// goes into data/ledger.json and is never recomputed. Writing an entry later
// fixes the dictionary; it does not change the score, and never will.
//
// Three consequences worth stating plainly:
//   1. The headline number can go down. Add ten lines full of words we have
//      never covered and first-look coverage falls. That is the point.
//   2. Deleting an embarrassing line does not help. Ledger records are kept
//      after a line leaves the sample, and still count.
//   3. Term count is inventory, not a result. It is reported at the bottom.
//
// One exception to the sealing rule, and it only ever cuts one way. If the
// matching rule itself turns out to be wrong - if it was calling words covered
// that are not - every record is re-scored under the corrected rule, and the
// new result is kept only where it is the same or worse. A correction can lower
// a past score. It can never raise one. Each affected record keeps a note
// saying what moved, so a drop is recorded rather than quietly absorbed.
//
// Run manually with: node scripts/build-metrics.mjs
// Runs automatically - see .github/workflows/build-metrics.yml

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const GLOSSARY_PATH = join(ROOT, 'GLOSSARY.md');
const CORPUS_PATH = join(ROOT, 'data', 'corpus.json');
const LEDGER_PATH = join(ROOT, 'data', 'ledger.json');
const OUTPUT_PATH = join(ROOT, 'data', 'metrics.json');

const TODAY = new Date().toISOString().slice(0, 10);

// The matching rule, versioned. Bump the string when the rule changes and say
// why, right here, so a change in the headline number always has a reason
// written next to it.
//
// substring-v1: a marked word counted as covered if an entry name appeared
//   anywhere inside it as raw text. That scored 'vitest' as covered because the
//   letters t-e-s-t are inside it, 'clean' as covered by the entry for 'I
//   refactored while I was in there', 'validate' as covered by 'I verified it',
//   and 'worker pool' as covered by 'Subagent'. Four words the dictionary could
//   not actually explain, counted as explained, on the strength of a substring.
// whole-word-v2: an entry name has to line up with whole words. 'vitest' no
//   longer matches 'test'. 'repository root' still matches 'repository', which
//   is a real match rather than a lucky one.
const MATCHER = 'whole-word-v2';

// Same normalisation on both sides of every comparison, so a match means a match.
function norm(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/\+/g, ' plus ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// One glossary entry can be reachable by several names. Collect all of them:
// the full term, each half of a "Deploy / deployment" style pair, whatever is
// in brackets ("(PR)", "(prod)"), and every listed alias.
function keysFor(term, aka) {
  const keys = new Set();
  const add = (s) => { const n = norm(s); if (n) keys.add(n); };

  const bare = term.replace(/["'\u2018\u2019]/g, '');
  add(bare);
  add(bare.replace(/\([^)]*\)/g, ''));
  add(bare.replace(/^(a|an|the)\s+/i, ''));

  const inBrackets = bare.match(/\(([^)]*)\)/g) || [];
  for (const b of inBrackets) {
    for (const part of b.replace(/[()]/g, '').split(/\bor\b|,/)) add(part);
  }
  for (const part of bare.replace(/\([^)]*\)/g, '').split('/')) add(part);
  for (const a of String(aka || '').split(',')) add(a);

  keys.delete('');
  return [...keys];
}

function parseGlossary(md) {
  const sections = [];
  let current = null;

  for (const block of md.split(/\n\s*\n/)) {
    const lines = block.trim().split('\n');
    const first = (lines[0] || '').trim();

    const heading = first.match(/^## (\d+)\. (.+)$/);
    if (heading) {
      current = { n: Number(heading[1]), title: heading[2].trim(), terms: [] };
      sections.push(current);
      continue;
    }
    if (first.startsWith('## ')) { current = null; continue; }
    if (!current || !first.startsWith('**')) continue;

    let term = '';
    let aka = '';
    const bold = first.match(/^\*\*(.+?)\*\*(.*)$/);
    if (!bold) continue;
    term = bold[1].trim();
    const rest = bold[2] || '';

    const also = rest.match(/\(also:\s*([^)]*)\)/i)
      || rest.match(/\(agents may say\s*([^)]*)\)/i)
      || rest.match(/also called\s*\*?([^*.]+)\*?/i);
    if (also) aka = also[1].replace(/\*/g, '').trim();

    const inner = term.match(/^(.+?)\s*\(([^)]+)\)$/);
    if (inner && !aka) { aka = inner[2].trim(); }

    // An entry is only finished when it carries all three parts: a plain
    // meaning, something to picture, and what to do when the agent says it.
    const hasPicture = lines.some((l) => /^\*Picture:/.test(l.trim()));
    // Match the shape, not one exact wording. Some entries lead with the phrase
    // the agent would use - *When your agent says "it is green":* - and an earlier
    // version of this check looked for a single literal string, declared 57 finished
    // entries unfinished, and got 23 of them a second guidance line they did not need.
    const hasAction = lines.some((l) => /^\*When your agent says/.test(l.trim()));

    current.terms.push({ term, aka, hasPicture, hasAction, keys: keysFor(term, aka) });
  }
  return sections;
}

const glossary = parseGlossary(readFileSync(GLOSSARY_PATH, 'utf8'));
const corpus = JSON.parse(readFileSync(CORPUS_PATH, 'utf8'));
const ledger = existsSync(LEDGER_PATH)
  ? JSON.parse(readFileSync(LEDGER_PATH, 'utf8'))
  : { note: 'Created automatically. See scripts/build-metrics.mjs.', entries: [] };

const termCount = glossary.reduce((a, s) => a + s.terms.length, 0);

// key -> { term, section }
const lookup = new Map();
let aliasCount = 0;
for (const s of glossary) {
  for (const t of s.terms) {
    aliasCount += t.aka ? t.aka.split(',').filter(Boolean).length : 0;
    for (const k of t.keys) if (!lookup.has(k)) lookup.set(k, { term: t.term, section: s.n });
  }
}

const DECISION_SECTION = 10; // phrases that mean a decision got made for you
const TELL_SECTION = 17;     // signs the work was not actually checked

function wordsOf(s) {
  const n = norm(s);
  return n ? n.split(' ') : [];
}

// Does one run of whole words appear inside another, in order?
function containsRun(hay, needle) {
  if (!needle.length || needle.length > hay.length) return false;
  for (let i = 0; i <= hay.length - needle.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) {
      if (hay[i + j] !== needle[j]) { ok = false; break; }
    }
    if (ok) return true;
  }
  return false;
}

function resolve(word) {
  const n = norm(word);
  if (lookup.has(n)) return { ...lookup.get(n), how: 'exact' };
  const w = wordsOf(word);
  for (const [k, v] of lookup) {
    const kw = k.split(' ');
    if (kw.join('').length < 4) continue;
    if (containsRun(w, kw) || containsRun(kw, w)) return { ...v, how: 'whole-word' };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Sealing: score any line the ledger has not seen before, then leave it alone
// forever. The ledger is keyed on the exact text of the line, so editing a line
// creates a new record rather than reopening an old one.
// ---------------------------------------------------------------------------
const corpusByLine = new Map(corpus.lines.map((l) => [l.line, l]));
const sealed = new Map(ledger.entries.map((e) => [e.line, e]));
let sealedThisRun = 0;

for (const entry of corpus.lines) {
  if (sealed.has(entry.line)) continue;
  const marked = entry.jargon || [];
  const record = {
    line: entry.line,
    source: entry.source,
    sealedOn: TODAY,
    matcher: MATCHER,
    termsAtSeal: termCount,
    markedWords: marked,
    marked: marked.length,
    missed: marked.filter((w) => !resolve(w))
  };
  ledger.entries.push(record);
  sealed.set(entry.line, record);
  sealedThisRun++;
}

// Matcher correction. Records sealed under an older rule get re-scored once.
// The new miss list is merged with the old one, so a word that was counted as
// explained can move to missed, and a word that was missed can never quietly
// become explained. Scores go down here or they stay put.
const corrections = [];
for (const e of ledger.entries) {
  if (e.matcher === MATCHER) continue;
  const src = corpusByLine.get(e.line);
  const marked = e.markedWords || (src ? src.jargon : null);
  if (!marked) {
    e.matcherNote = 'Sealed under ' + (e.matcher || 'substring-v1') + '. This line has left the sample and its marked words were never written down, so it cannot be re-scored. Left exactly as sealed.';
    continue;
  }
  const was = (e.missed || []).slice();
  const fresh = marked.filter((w) => !resolve(w));
  const merged = [...new Set([...was, ...fresh])];
  if (merged.length > was.length) {
    corrections.push({
      line: e.line,
      missedWas: was.length,
      missedNow: merged.length,
      movedToMissed: merged.filter((w) => !was.includes(w))
    });
  }
  e.missed = merged;
  e.markedWords = marked;
  if (!e.source && src) e.source = src.source;
  e.matcherWas = e.matcher || 'substring-v1';
  e.matcher = MATCHER;
  e.rescoredOn = TODAY;
  e.matcherNote = 'Re-scored when the matching rule was corrected. Kept because the result is the same or worse than the sealed one; a correction is never allowed to improve a past score.';
}
ledger.matcher = MATCHER;

const inCorpus = new Set(corpus.lines.map((l) => l.line));
for (const e of ledger.entries) e.retired = !inCorpus.has(e.line);

writeFileSync(LEDGER_PATH, JSON.stringify(ledger, null, 2) + '\n');

// ---------------------------------------------------------------------------
// The score. Computed over every record ever sealed, retired ones included.
// ---------------------------------------------------------------------------
const pct = (n, d) => (d === 0 ? 0 : Math.round((n / d) * 1000) / 10);

const scored = ledger.entries;
const markedWords = scored.reduce((a, e) => a + e.marked, 0);
const missedWords = scored.reduce((a, e) => a + e.missed.length, 0);
const explained = markedWords - missedWords;
const linesClean = scored.filter((e) => e.missed.length === 0).length;

// Every word that has ever been missed on first sight. This list only grows.
const everMissed = new Map();
for (const e of scored) {
  for (const w of e.missed) {
    const k = norm(w);
    if (!everMissed.has(k)) everMissed.set(k, { word: w, firstMissedOn: e.sealedOn });
    else if (e.sealedOn < everMissed.get(k).firstMissedOn) everMissed.get(k).firstMissedOn = e.sealedOn;
  }
}
const everMissedList = [...everMissed.values()]
  .map((m) => ({ ...m, writtenSince: Boolean(resolve(m.word)) }))
  .sort((a, b) => a.word.localeCompare(b.word));

// What the dictionary still cannot explain, as of right now. This is the work
// queue, not a score - closing it changes nothing above.
// Coverage split by where the line came from. Lines we wrote ourselves are an
// easier test than lines somebody else's agent produced, and the split shows it.
const bySource = {};
for (const e of scored) {
  const key = e.source || 'unrecorded';
  if (!bySource[key]) bySource[key] = { lines: 0, markedWords: 0, explained: 0, missed: 0 };
  const b = bySource[key];
  b.lines += 1;
  b.markedWords += e.marked;
  b.missed += e.missed.length;
  b.explained += e.marked - e.missed.length;
}
for (const k of Object.keys(bySource)) bySource[k].coveragePct = pct(bySource[k].explained, bySource[k].markedWords);

const openGaps = [];
for (const entry of corpus.lines) {
  for (const w of entry.jargon || []) if (!resolve(w) && !openGaps.includes(w)) openGaps.push(w);
}

// Entry quality: an entry that gives you a meaning but never tells you what to
// do when the agent says it is half an entry. Counting terms hides that.
const allTerms = glossary.flatMap((s) => s.terms);
const unfinished = allTerms.filter((t) => !t.hasPicture || !t.hasAction);

const contributedCount = corpus.lines.filter((l) => l.source === 'contributed').length;

const sources = {};
for (const l of corpus.lines) sources[l.source] = (sources[l.source] || 0) + 1;

const metrics = {
  generatedAt: TODAY,
  rule: 'Every line is scored once, on the day it arrives, against the dictionary as it stood that day. The result is frozen in data/ledger.json and never recomputed. Writing an entry afterwards fixes the dictionary but cannot change a past score. Records are kept even after a line leaves the sample, so nothing improves by deletion.',
  method: 'Computed by scripts/build-metrics.mjs from GLOSSARY.md, data/corpus.json and data/ledger.json. Nothing on the page is typed in by hand.',

  firstLook: {
    linesScored: scored.length,
    linesRetiredButStillCounted: scored.filter((e) => e.retired).length,
    markedWords,
    explained,
    missed: missedWords,
    coveragePct: pct(explained, markedWords),
    linesFullyExplained: linesClean,
    linesFullyExplainedPct: pct(linesClean, scored.length),
    sealedThisRun,
    lowestTermCountAtSeal: scored.length ? Math.min(...scored.map((e) => e.termsAtSeal)) : 0,
    highestTermCountAtSeal: scored.length ? Math.max(...scored.map((e) => e.termsAtSeal)) : 0,
    bySource
  },

  matcherCorrections: {
    rule: MATCHER,
    note: 'A correction to the matching rule is the only thing allowed to reopen a sealed record, and it can only make the score the same or worse.',
    recordsLowered: corrections.length,
    wordsMovedToMissed: corrections.reduce((a, c) => a + c.movedToMissed.length, 0),
    detail: corrections
  },

  everMissed: everMissedList,
  openGaps,

  entryQuality: {
    entries: allTerms.length,
    withPicture: allTerms.filter((t) => t.hasPicture).length,
    withAction: allTerms.filter((t) => t.hasAction).length,
    finished: allTerms.length - unfinished.length,
    finishedPct: pct(allTerms.length - unfinished.length, allTerms.length),
    unfinished: unfinished.map((t) => t.term).sort()
  },

  sample: {
    lines: corpus.lines.length,
    bySource: sources,
    fromOutsideThisProject: corpus.lines.filter((l) => l.source === 'contributed').length
  },

  inventory: {
    note: 'Inventory, not a result. A dictionary can grow all day without getting more useful. Kept here because it is worth knowing, not because it proves anything.',
    terms: termCount,
    sections: glossary.length,
    aliases: aliasCount,
    decisionPhrases: (glossary.find((s) => s.n === DECISION_SECTION) || { terms: [] }).terms.length,
    tells: (glossary.find((s) => s.n === TELL_SECTION) || { terms: [] }).terms.length
  },

  notProven: [
    contributedCount + ' of ' + corpus.lines.length + ' lines came from outside this project. That is a start, not a sample. The rest we wrote or chose ourselves, which makes them the easier half of the test.',
    'The sample is small. ' + corpus.lines.length + ' lines is enough to find missing words and nowhere near enough to describe how agents talk in general.',
    'Whether builders ship fewer defects with this installed. No study run.',
    'Whether agents keep following the rules over long sessions. Not measured.',
    'Any aggregate effect across users. We collect nothing, so we cannot claim it.'
  ]
};

writeFileSync(OUTPUT_PATH, JSON.stringify(metrics, null, 2) + '\n');

console.log('data/metrics.json written');
console.log('  first look: ' + explained + '/' + markedWords + ' marked words explained on arrival (' + metrics.firstLook.coveragePct + '%)');
console.log('  sealed this run: ' + sealedThisRun + ' new line(s)');
console.log('  matcher ' + MATCHER + ': ' + corrections.length + ' record(s) lowered by the correction');
console.log('  ever missed: ' + everMissedList.length + ' word(s), of which ' + everMissedList.filter((m) => !m.writtenSince).length + ' still have no entry');
console.log('  entry quality: ' + metrics.entryQuality.finished + '/' + allTerms.length + ' entries carry both a picture and an action (' + metrics.entryQuality.finishedPct + '%)');
console.log('  inventory: ' + termCount + ' terms in ' + glossary.length + ' sections');
