#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Paths that, if changed since the last release tag, mean the published
// package output (fonts, stylesheets, react components, metadata) could
// differ too. Most build output is not committed, so this checks build
// inputs instead of diffing every built artifact. Keep this list in sync
// if a new build script or source directory is added later.
//
// scripts/generate-tags.mjs is intentionally NOT listed: it's a manual,
// offline AI-tagging step (bun run generate:ai-tags), not part of
// release:build. It only matters once someone reruns it and commits the
// resulting tags.json, which is already covered by the 'tags.json' entry.
const RELEVANT_PATH_PREFIXES = [
  'icons/',
  'icons-solid/',
  'tags.json',
  'package.json',
  'packages/icons/package.json',
  'packages/icons-react/package.json',
  'packages/icons-react/src/createReactComponent.js',
  'packages/icons-react/src/createReactSolidComponent.js',
  'packages/icons-react/src/myna-icons-react.js',
  'scripts/build-',
  'scripts/svgo',
  'scripts/lib/',
  'scripts/rollup.config.mjs',
];

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed${result.stderr ? `\n${result.stderr}` : ''}`);
  }

  return result.stdout.trim();
}

function latestTag() {
  return run('git', ['describe', '--tags', '--abbrev=0', '--match', 'v*.*.*']);
}

function changedFilesSince(tag) {
  const output = run('git', ['diff', '--name-only', `${tag}..HEAD`]);
  return output ? output.split('\n') : [];
}

const tag = process.argv[2] || latestTag();
const failOnChange = process.argv.includes('--fail-on-change');

const changedFiles = changedFilesSince(tag);
const relevantChanges = changedFiles.filter((file) =>
  RELEVANT_PATH_PREFIXES.some((prefix) => file.startsWith(prefix)),
);
const hasChanges = relevantChanges.length > 0;

console.log(
  hasChanges
    ? `Release-relevant changes since ${tag}:\n${relevantChanges.join('\n')}`
    : `No release-relevant changes since ${tag}.`,
);

if (process.env.GITHUB_OUTPUT) {
  await fs.appendFile(process.env.GITHUB_OUTPUT, `changed=${hasChanges}\n`);
}

process.exit(hasChanges && failOnChange ? 1 : 0);
