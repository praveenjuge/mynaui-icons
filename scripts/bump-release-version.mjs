#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageFiles = [
  'packages/icons/package.json',
  'packages/icons-react/package.json',
];

const readPackage = async (file) => {
  const absolute = path.join(root, file);
  return [absolute, JSON.parse(await fs.readFile(absolute, 'utf8'))];
};

const entries = await Promise.all(packageFiles.map(readPackage));
const versions = new Set(entries.map(([, pkg]) => pkg.version));

if (versions.size !== 1) {
  throw new Error(`Package versions are not lockstep: ${[...versions].join(', ')}`);
}

const current = entries[0][1].version;
const match = current.match(/^(\d+)\.(\d+)\.(\d+)$/);

if (!match) {
  throw new Error(`Cannot patch-bump non-standard version: ${current}`);
}

const next = `${match[1]}.${match[2]}.${Number(match[3]) + 1}`;

for (const [absolute, pkg] of entries) {
  pkg.version = next;
  delete pkg.gitHead;
  await fs.writeFile(absolute, `${JSON.stringify(pkg, null, 2)}\n`);
}

if (process.env.GITHUB_OUTPUT) {
  await fs.appendFile(process.env.GITHUB_OUTPUT, `version=${next}\n`);
}

console.log(next);
