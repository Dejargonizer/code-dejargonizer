#!/usr/bin/env node
// Reads a "term-suggestion" issue and tracks how many independent people
// have suggested each glossary term in candidate-terms.json. Once a term
// crosses the threshold, this drafts a pending entry at the bottom of
// GLOSSARY.md and signals the workflow to open a PR for a maintainer to
// review. Nothing here is ever merged into the real glossary automatically
// - a human always reviews and files the draft before it counts.

import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'node:fs';

const repo = process.env.GITHUB_REPOSITORY;
const issueNumber = process.env.ISSUE_NUMBER;
const token = process.env.GITHUB_TOKEN;

if (!repo || !issueNumber || !token) {
  console.error('Missing GITHUB_REPOSITORY, ISSUE_NUMBER, or GITHUB_TOKEN.');
  process.exit(1);
}

const apiUrl = 'https://api.github.com/repos/' + repo + '/issues/' + issueNumber;
const res = await fetch(apiUrl, {
  headers: {
    'Authorization': 'Bearer ' + token,
    'Accept': 'application/vnd.github+json',
  },
});
if (!res.ok) {
  console.error('Failed to fetch issue:', res.status, await res.text());
  process.exit(1);
}
const issue = await res.json();
const title = issue.title || '';
const body = issue.body || '';

const looksLikeSuggestion = title.indexOf('Glossary term:') === 0
  || (issue.labels || []).some(function (l) { return (l.name || l) === 'term-suggestion'; });

if (!looksLikeSuggestion) {
  console.log('Issue #' + issueNumber + ' does not look like a term suggestion - skipping.');
  process.exit(0);
}

function field(label) {
  const re = new RegExp('\\*\\*' + label + ':\\*\\*\\s*(.+)');
  const m = body.match(re);
  return m ? m[1].trim() : '';
}

const term = field('Term');
const meaning = field('Meaning');
const picture = field('Picture');
const note = field('When your agent says it');

if (!term || !meaning) {
  console.log('Issue #' + issueNumber + ' is missing a Term or Meaning field - skipping.');
  process.exit(0);
}

const CANDIDATES_PATH = 'candidate-terms.json';
const GLOSSARY_PATH = 'GLOSSARY.md';

const store = existsSync(CANDIDATES_PATH)
  ? JSON.parse(readFileSync(CANDIDATES_PATH, 'utf8'))
  : { threshold: 3, candidates: [] };

const glossaryText = readFileSync(GLOSSARY_PATH, 'utf8');
const termKey = term.trim().toLowerCase();
const escaped = termKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const alreadyPublished = new RegExp('^\\*\\*' + escaped + '\\b', 'im').test(glossaryText);

let entry = store.candidates.find(function (c) { return c.term.trim().toLowerCase() === termKey; });
if (!entry) {
  entry = { term: term, meaning: meaning, picture: picture, note: note, count: 0, issues: [], status: 'pending' };
  store.candidates.push(entry);
}

const issueNum = Number(issueNumber);
if (entry.issues.indexOf(issueNum) === -1) {
  entry.issues.push(issueNum);
  entry.count += 1;
}
entry.meaning = meaning || entry.meaning;
entry.picture = picture || entry.picture;
entry.note = note || entry.note;

let shouldDraftPR = false;

if (alreadyPublished) {
  entry.status = 'already-in-glossary';
} else if (entry.count >= store.threshold && entry.status === 'pending') {
  entry.status = 'drafted';
  shouldDraftPR = true;
}

writeFileSync(CANDIDATES_PATH, JSON.stringify(store, null, 2) + '\n');

if (shouldDraftPR) {
  const heading = '## Suggested new terms (pending review)';
  const lines = ['**' + term + '**', meaning];
  if (picture) lines.push('*Picture:* ' + picture);
  if (note) lines.push('*When your agent says it:* ' + note);
  const block = lines.join('\n');

  let updated;
  if (glossaryText.indexOf(heading) !== -1) {
    updated = glossaryText.replace(/\s*$/, '') + '\n\n' + block + '\n';
  } else {
    updated = glossaryText.replace(/\s*$/, '') + '\n\n---\n\n' + heading + '\n\n'
      + '_Proposed independently by ' + store.threshold + '+ people via the "Suggest a term" form. '
      + 'A maintainer still needs to review the wording and move each entry into the right numbered '
      + 'section above before it counts as official._\n\n'
      + block + '\n';
  }
  writeFileSync(GLOSSARY_PATH, updated);
  console.log('Drafted pending entry for: ' + term);
} else {
  console.log('Tracked suggestion for "' + term + '" (' + entry.count + '/' + store.threshold + ').');
}

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, 'drafted=' + shouldDraftPR + '\n');
  appendFileSync(process.env.GITHUB_OUTPUT, 'term=' + term.replace(/\n/g, ' ') + '\n');
}
