#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';

const readdirSync = fs.readdirSync.bind(fs);
fs.readdirSync = (...args) => {
  const entries = readdirSync(...args);
  return [...entries].sort((a, b) => {
    const nameA = typeof a === 'string' ? a : a.name;
    const nameB = typeof b === 'string' ? b : b.name;
    return nameA.localeCompare(nameB);
  });
};

const { default: svgtofont } = await import('svgtofont');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'packages/icons');
const FONT_TIMESTAMP = '0';

const fonts = {
  regular: {
    src: path.join(ROOT, 'regular-icon-temp'),
    fontName: 'mynaui',
  },
  solid: {
    src: path.join(ROOT, 'icons-solid'),
    fontName: 'mynaui-solid',
  },
};

const variant = process.argv[2];
const font = fonts[variant];

if (!font) {
  console.error(
    `Usage: bun ./scripts/build-icon-font.mjs ${Object.keys(fonts).join('|')}`,
  );
  process.exit(1);
}

await svgtofont({
  src: font.src,
  dist: DIST,
  fontName: font.fontName,
  css: {
    hasTimestamp: FONT_TIMESTAMP,
  },
  outSVGReact: true,
  outSVGReactNative: false,
  outSVGVue: true,
  outSVGPath: true,
  svg2ttf: {
    ts: FONT_TIMESTAMP,
  },
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
});
