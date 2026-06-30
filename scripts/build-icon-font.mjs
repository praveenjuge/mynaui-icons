#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodeFs from 'node:fs';

const sortDirEntries = (entries) =>
  [...entries].sort((a, b) => {
    const nameA = typeof a === 'string' ? a : a.name;
    const nameB = typeof b === 'string' ? b : b.name;
    return nameA.localeCompare(nameB);
  });

const nativeReaddirSync = nodeFs.readdirSync.bind(nodeFs);
nodeFs.readdirSync = (...args) => sortDirEntries(nativeReaddirSync(...args));

const { default: fs } = await import('fs-extra');
const extraReaddirSync = fs.readdirSync.bind(fs);
fs.readdirSync = (...args) => {
  const entries = extraReaddirSync(...args);
  return sortDirEntries(entries);
};

const { default: svgtofont } = await import('svgtofont');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'packages/icons');
const FONT_TIMESTAMP = '0';
const STYLE_EXTENSIONS = ['css', 'less', 'module.less', 'scss', 'styl'];

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
  outSVGVue: false,
  outSVGPath: true,
  svg2ttf: {
    ts: FONT_TIMESTAMP,
  },
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
});

await Promise.all(
  STYLE_EXTENSIONS.map(async (extension) => {
    const file = path.join(DIST, `${font.fontName}.${extension}`);
    const content = await fs.readFile(file, 'utf8');
    await fs.writeFile(
      file,
      content.replaceAll(/}\n{3,}(?=\.|:global)/g, '}\n\n\n'),
    );
  }),
);
