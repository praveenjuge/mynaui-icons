// Shared helpers for reading SVG icon directories.
// Both return file names (not paths), filtered to `.svg` and sorted by name.

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";

const isSvg = (file) => path.extname(file).toLowerCase() === ".svg";
const byName = (a, b) => a.localeCompare(b);

export const readSvgFilesSync = (dir) =>
  fs.readdirSync(dir).filter(isSvg).sort(byName);

export const readSvgFiles = async (dir) =>
  (await fsp.readdir(dir)).filter(isSvg).sort(byName);
