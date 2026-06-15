#!/usr/bin/env node

import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageDirs = ['packages/icons', 'packages/icons-react'];

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
    ...options,
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed${result.stderr ? `\n${result.stderr}` : ''}`);
  }

  return result.stdout?.trim() ?? '';
}

function latestTag() {
  return run('git', ['describe', '--tags', '--abbrev=0', '--match', 'v*.*.*'], {
    capture: true,
  });
}

function packFiles(baseDir, packageDir) {
  const result = spawnSync('npm', ['pack', '--dry-run', '--json'], {
    cwd: path.join(baseDir, packageDir),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.status !== 0) {
    throw new Error(`npm pack failed in ${packageDir}\n${result.stderr}`);
  }

  const [pack] = JSON.parse(result.stdout);
  return pack.files.map((file) => file.path).sort();
}

async function hashFile(file) {
  const buffer = await fs.readFile(file);
  return createHash('sha256').update(buffer).digest('hex');
}

async function snapshot(baseDir) {
  const result = {};

  for (const packageDir of packageDirs) {
    const files = packFiles(baseDir, packageDir);
    result[packageDir] = {};

    for (const file of files) {
      result[packageDir][file] = await hashFile(path.join(baseDir, packageDir, file));
    }
  }

  return result;
}

function changedPackages(before, after) {
  return packageDirs.filter((packageDir) => {
    return JSON.stringify(before[packageDir]) !== JSON.stringify(after[packageDir]);
  });
}

const tag = process.argv[2] || latestTag();
const failOnChange = process.argv.includes('--fail-on-change');
const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'mynaui-release-'));
let worktreeAdded = false;

try {
  run('git', ['worktree', 'add', '--detach', '--quiet', tmp, tag]);
  worktreeAdded = true;

  const before = await snapshot(tmp);
  const after = await snapshot(root);
  const changed = changedPackages(before, after);
  const hasChanges = changed.length > 0;

  console.log(
    hasChanges
      ? `Package output changed since ${tag}: ${changed.join(', ')}`
      : `No package output changes since ${tag}.`,
  );

  if (process.env.GITHUB_OUTPUT) {
    await fs.appendFile(process.env.GITHUB_OUTPUT, `changed=${hasChanges}\n`);
    await fs.appendFile(process.env.GITHUB_OUTPUT, `packages=${changed.join(',')}\n`);
  }

  process.exit(hasChanges && failOnChange ? 1 : 0);
} finally {
  if (worktreeAdded) {
    run('git', ['worktree', 'remove', '--force', tmp]);
  }
}
