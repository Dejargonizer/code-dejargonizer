#!/usr/bin/env node
// Builds glossary-data.js from GLOSSARY.md (the single source of truth for
// the dictionary's text) plus glossary-tone.json (presentation-only "good"/
// "look" badge hints that don't belong in the readable glossary prose).
//
// Run manually with: node scripts/build-glossary-data.mjs
// Runs automatically on every push to main that touches GLOSSARY.md or
// glossary-tone.json - see .github/workflows/sync-glossary-data.yml

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const GLOSSARY_PATH = join(ROOT, 'GLOSSARY.md');
const TONE_PATH = join(ROOT, 'glossary-tone.json');
const OUTPUT_PATH = join(ROOT, 'glossary-data.js');

function stripMd(s) {
  return s
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .trim();
}

function cleanAka(s) {
  return stripMd(s).replace(/^(or|aka|a\.k\.a\.?|also)\s+/i, '').trim();
}

function parseGlossary(text) {
  const lines = text.split('\n');
  const sections = [];
  let current = null;
  let buf = [];

  function flush() {
    if (current && buf.length) {
      current._raw.push(buf.join('\n'));
      buf = [];
    }
  }

  for (const line of lines) {
    const secMatch = line.match(/^##\s+(\d+)\.\s+(.+)$/);
    if (secMatch) {
      flush();
      current = { n: secMatch[1], title: secMatch[2].trim(), _raw: [] };
      sections.push(current);
      buf = [];
      continue;
    }
    if (!current) continue;
    if (line.trim() === '---') continue;
    buf.push(line);
  }
  flush();

  return sections.map((sec) => {
    const raw = sec._raw.join('\n');
    const blocks = raw
      .split(/\n\s*\n/)
      .map((b) => b.trim())
      .filter(Boolean);
    const terms = [];
    let blurb = '';
    for (const block of blocks) {
      const firstLine = block.split('\n')[0];
      if (/^\*\*/.test(firstLine)) terms.push(block);
      else if (!blurb && terms.length === 0) blurb = block;
    }
    return { n: sec.n, title: sec.title, blurb, termBlocks: terms };
  });
}

function parseTermBlock(block, toneMap) {
  const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
  const header = lines[0];
  const headerMatch = header.match(/^\*\*(.+?)\*\*\s*(.*)$/);
  let boldContent = headerMatch ? headerMatch[1] : header;
  let rest = headerMatch ? headerMatch[2] : '';

  let term = boldContent;
  const akaParts = [];

  const parenInBold = boldContent.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (parenInBold) {
    term = parenInBold[1].trim();
    akaParts.push(cleanAka(parenInBold[2]));
  }

  if (rest) {
    let m;
    if ((m = rest.match(/—\s*also called\s*(?:a|an)?\s*(.+)$/i))) {
      akaParts.push(cleanAka(m[1]));
    } else if ((m = rest.match(/\(also:\s*(.+?)\)/i))) {
      akaParts.push(cleanAka(m[1]));
    } else if ((m = rest.match(/\(agents may say (.+?)\)/i))) {
      akaParts.push(cleanAka(m[1]));
    }
  }

  const aka = akaParts.filter(Boolean).join(', ').trim();

  const body = lines.slice(1);
  const meaningLines = [];
  let picture = '';
  const noteParts = [];
  let mode = 'meaning';

  for (const l of body) {
    const pMatch = l.match(/^\*Picture:\*\s*(.+)$/i);
    if (pMatch) {
      picture = stripMd(pMatch[1]);
      mode = 'after';
      continue;
    }
    const labelMatch = l.match(/^\*([^*]+?):\*\s*(.+)$/);
    if (labelMatch) {
      noteParts.push(stripMd(labelMatch[2]));
      mode = 'after';
      continue;
    }
    if (mode === 'meaning') meaningLines.push(l);
    else noteParts.push(stripMd(l));
  }

  const meaning = stripMd(meaningLines.join(' '));
  const note = noteParts.join(' ').trim();
  const t = stripMd(term);
  const tone = toneMap[t];

  const out = { t, m: meaning, p: picture };
  if (aka) out.aka = aka;
  if (note) out.note = note;
  if (tone) out.tone = tone;
  return out;
}

function build() {
  const glossaryText = readFileSync(GLOSSARY_PATH, 'utf8');
  let toneMap = {};
  try {
    toneMap = JSON.parse(readFileSync(TONE_PATH, 'utf8'));
  } catch {
    console.warn('No glossary-tone.json found (or it is invalid) - continuing without tone badges.');
  }

  const sections = parseGlossary(glossaryText);
  const data = sections.map((sec) => ({
    n: sec.n,
    title: sec.title,
    blurb: stripMd(sec.blurb),
    terms: sec.termBlocks.map((b) => parseTermBlock(b, toneMap)),
  }));

  const totalTerms = data.reduce((a, s) => a + s.terms.length, 0);
  if (totalTerms === 0) {
    throw new Error('Parsed zero terms from GLOSSARY.md - refusing to overwrite glossary-data.js. Check the markdown structure.');
  }

  const header = [
    '// AUTO-GENERATED FILE - do not edit by hand.',
    '// Source of truth: GLOSSARY.md (content) + glossary-tone.json (presentation hints).',
    '// Regenerate with: node scripts/build-glossary-data.mjs',
    '// This also happens automatically via .github/workflows/sync-glossary-data.yml',
    '// whenever GLOSSARY.md or glossary-tone.json change on main.',
    '',
    'window.GLOSSARY_DATA = ',
  ].join('\n');

  const output = header + JSON.stringify(data, null, 2) + ';\n';
  writeFileSync(OUTPUT_PATH, output, 'utf8');
  console.log('Wrote ' + OUTPUT_PATH + ' - ' + data.length + ' sections, ' + totalTerms + ' terms.');
}

build();
