#!/usr/bin/env node
// Installs The Dejargonizer as a personal Codex skill.
//
// Default target:
//   ~/.codex/skills/dejargonizer/SKILL.md
//
// Run:
//   node scripts/install-codex-skill.mjs
//   node scripts/install-codex-skill.mjs --dry-run
//   node scripts/install-codex-skill.mjs --target /path/to/.codex

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const targetIndex = args.indexOf('--target');
const targetRoot = resolve(
  targetIndex >= 0 && args[targetIndex + 1]
    ? args[targetIndex + 1]
    : process.env.CODEX_HOME || join(homedir(), '.codex'),
);

function fail(message) {
  console.error(message);
  process.exit(1);
}

function assertFile(path, label) {
  if (!existsSync(path)) fail('Missing ' + label + ': ' + path);
}

const sourceSkillDir = join(ROOT, 'dejargonizer');
const sourceSkill = join(sourceSkillDir, 'SKILL.md');
const sourceShort = join(sourceSkillDir, 'SKILL-SHORT.md');
const sourceLocalGlossary = join(sourceSkillDir, 'local-glossary.md');
const sourceGlossary = join(ROOT, 'GLOSSARY.md');

assertFile(sourceSkill, 'full skill file');
assertFile(sourceShort, 'short skill file');
assertFile(sourceLocalGlossary, 'local glossary template');
assertFile(sourceGlossary, 'main glossary');

const skillText = readFileSync(sourceSkill, 'utf8');
if (!/^---\nname:\s*dejargonizer\n/m.test(skillText)) {
  fail('SKILL.md does not declare name: dejargonizer in its front matter.');
}
if (!skillText.includes('../GLOSSARY.md')) {
  fail('SKILL.md no longer points to ../GLOSSARY.md; update this installer before using it.');
}

const codexSkillsDir = join(targetRoot, 'skills');
const targetSkillDir = join(codexSkillsDir, 'dejargonizer');
const writes = [
  [sourceSkill, join(targetSkillDir, 'SKILL.md'), 'full skill instructions'],
  [sourceShort, join(targetSkillDir, 'SKILL-SHORT.md'), 'short paste-anywhere version'],
  [sourceGlossary, join(codexSkillsDir, 'GLOSSARY.md'), 'glossary where SKILL.md expects it'],
  [sourceGlossary, join(targetSkillDir, 'GLOSSARY.md'), 'backup glossary inside the skill folder'],
];

const localGlossaryTarget = join(targetSkillDir, 'local-glossary.md');

console.log((dryRun ? 'Would install' : 'Installing') + ' Dejargonizer Codex skill into ' + targetSkillDir);

if (!dryRun) {
  mkdirSync(targetSkillDir, { recursive: true });
}

for (const [from, to, label] of writes) {
  console.log((dryRun ? 'Would copy ' : 'Copying ') + label + ': ' + to);
  if (!dryRun) copyFileSync(from, to);
}

if (existsSync(localGlossaryTarget)) {
  console.log('Keeping existing personal glossary: ' + localGlossaryTarget);
} else {
  console.log((dryRun ? 'Would create ' : 'Creating ') + 'personal glossary template: ' + localGlossaryTarget);
  if (!dryRun) copyFileSync(sourceLocalGlossary, localGlossaryTarget);
}

if (!dryRun) {
  assertFile(join(targetSkillDir, 'SKILL.md'), 'installed skill');
  assertFile(join(codexSkillsDir, 'GLOSSARY.md'), 'installed glossary');
  console.log('Installed. Start a new Codex task, then ask: "How many Dejargonizer rules are you following, and what is rule 11?"');
} else {
  console.log('Dry run only. No files were changed.');
}
