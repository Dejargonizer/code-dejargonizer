#!/usr/bin/env node
// Builds data/metrics.json - the numbers behind the impact page.
//
// Everything in here is measured, not asserted. Two questions only:
//   1. How much of the language agents actually use can this dictionary explain?
//   2. Which words does it still miss? (that list is the work queue)
//
// Ground truth lives in data/corpus.json: real agent status lines with the
// jargon marked by hand - the words a capable person with no coding background
// would trip on. We resolve each marked word against GLOSSARY.md and count.
//
// Run manually with: node scripts/build-metrics.mjs
// Runs automatically - see .github/workflows/build-metrics.yml

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const GLOSSARY_PATH = join(ROOT, 'GLOSSARY.md');
const CORPUS_PATH = join(ROOT, 'data', 'corpus.json');
const OUTPUT_PATH = join(ROOT, 'data', 'metrics.json');

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

  const bare = term.replace(/["'']/g, '');
  add(bare);
  add(bare.replace(/\([^)]*\)/g, ''));           // "Production (prod)" -> "Production"
  add(bare.replace(/^(a|an|the)\s+/i, ''));       // "A warning that..." -> "warning that..."

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
    const first = block.split('\n')[0].trim();

    const heading = first.match(/^## (\d+)\. (.+)$/);
    if (heading) {
      current = { n: Number(heading[1]), title: heading[2].trim(), terms: [] };
      sections.push(current);
      continue;
    }
    if (first.startsWith('## ')) { current = null; continue; }
    if (!current || !first.startsWith('**')) continue;

    // **Term** (also: a, b)   |   **Term (aka)**   |   **Term** - also called x
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

    current.terms.push({ term, aka, keys: keysFor(term, aka) });
  }
  return sections;
}

const glossary = parseGlossary(readFileSync(GLOSSARY_PATH, 'utf8'));
const corpus = JSON.parse(readFileSync(CORPUS_PATH, 'utf8'));

// key -> { term, section }
const lookup = new Map();
let aliasCount = 0;
for (const s of glossary) {
  for (const t of s.terms) {
    aliasCount += t.aka ? t.aka.split(',').filter(Boolean).length : 0;
    for (const k of t.keys) if (!lookup.has(k)) lookup.set(k, { term: t.term, section: s.n });
  }
}

const DECISION_SECTION = 10;   // phrases that mean a decision got made for you
const TELL_SECTION = 17;       // signs the work was not actually checked

function resolve(word) {
  const n = norm(word);
  if (lookup.has(n)) return { ...lookup.get(n), how: 'exact' };
  // Fall back to a contained match, counted separately so it never inflates "exact".
  for (const [k, v] of lookup) {
    if (k.length >= 4 && (n.includes(k) || k.includes(n))) return { ...v, how: 'partial' };
  }
  return null;
}

let exact = 0, partial = 0;
const misses = new Map();
const lineResults = [];

for (const entry of corpus.lines) {
  const marked = entry.jargon || [];
  let hit = 0;
  let flagsDecision = false;
  let flagsTell = false;

  for (const word of marked) {
    const r = resolve(word);
    if (!r) { misses.set(norm(word), word); continue; }
    hit++;
    if (r.how === 'exact') exact++; else partial++;
    if (r.section === DECISION_SECTION) flagsDecision = true;
    if (r.section === TELL_SECTION) flagsTell = true;
  }

  lineResults.push({
    source: entry.source,
    marked: marked.length,
    explained: hit,
    complete: marked.length > 0 && hit === marked.length,
    flagsDecision,
    flagsTell
  });
}

const totalMarked = lineResults.reduce((a, l) => a + l.marked, 0);
const totalExplained = exact + partial;
const pct = (n, d) => (d === 0 ? 0 : Math.round((n / d) * 1000) / 10);

const metrics = {
  generatedAt: new Date().toISOString().slice(0, 10),
  method: 'Every number here is computed by scripts/build-metrics.mjs from GLOSSARY.md and data/corpus.json. Nothing is entered by hand. "Explained" means a word marked as jargon resolves to a glossary entry.',
  dictionary: {
    terms: glossary.reduce((a, s) => a + s.terms.length, 0),
    sections: glossary.length,
    aliases: aliasCount,
    decisionPhrases: (glossary.find((s) => s.n === DECISION_SECTION) || { terms: [] }).terms.length,
    tells: (glossary.find((s) => s.n === TELL_SECTION) || { terms: [] }).terms.length
  },
  coverage: {
    lines: lineResults.length,
    markedWords: totalMarked,
    explained: totalExplained,
    exact,
    partial,
    coveragePct: pct(totalExplained, totalMarked),
    linesFullyExplained: lineResults.filter((l) => l.complete).length,
    linesFullyExplainedPct: pct(lineResults.filter((l) => l.complete).length, lineResults.length)
  },
  review: {
    linesCarryingADecision: lineResults.filter((l) => l.flagsDecision).length,
    linesCarryingATell: lineResults.filter((l) => l.flagsTell).length,
    linesCarryingEither: lineResults.filter((l) => l.flagsDecision || l.flagsTell).length
  },
  // The honest half: what the dictionary cannot explain yet.
  gaps: [...misses.values()].sort(),
  notProven: [
    'Coverage is measured against our own corpus, which we assembled and marked ourselves. A bigger corpus contributed by other people would be a harder and fairer test.',
    'Whether builders ship fewer defects with this installed. No study run.',
    'Whether agents comply with the rules over long sessions. Not measured.',
    'Any aggregate effect across users. We collect nothing, so we cannot claim it.'
  ]
};

writeFileSync(OUTPUT_PATH, JSON.stringify(metrics, null, 2) + '\n');

console.log('data/metrics.json written');
console.log('  dictionary: ' + metrics.dictionary.terms + ' terms in ' + metrics.dictionary.sections + ' sections');
console.log('  coverage:   ' + metrics.coverage.explained + '/' + metrics.coverage.markedWords + ' marked words explained (' + metrics.coverage.coveragePct + '%)');
console.log('  gaps:       ' + metrics.gaps.length + ' words with no entry yet');
