#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
/**
 * @param {String} input
 * @returns {String}
 */
function toPascalCase(input) {
  let arr = input.split('-');
  let up = arr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return up.join('');
}

async function makeAvaloniaDictionary(icons_path, suffix = '') {
  let contents = `<ResourceDictionary xmlns="https://github.com/avaloniaui" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n`;
  const icons = await import(path.resolve(__dirname, icons_path));
  for (let icon in icons) {
    contents += `<StreamGeometry x:Key="${toPascalCase(icon) + suffix}">${icons[icon][0]}</StreamGeometry>\n`;
  }
  contents += `</ResourceDictionary>`;
  return contents;
}

(async () => {
  try {
    const outlined = await makeAvaloniaDictionary('../packages/icons/mynaui.json');
    const outlinedOut = path.resolve(__dirname, '../packages/icons/mynaui.axaml')
    await fs.writeFile(
      outlinedOut,
      outlined,
    );
    console.log("[OK] Wrote to " + outlinedOut)
    const solid = await makeAvaloniaDictionary('../packages/icons/mynaui-solid.json', "Solid");
    const solidOut = path.resolve(__dirname, '../packages/icons/mynaui-solid.axaml')
    await fs.writeFile(
      solidOut,
      solid,
    );
    console.log("[OK] Wrote to " + solidOut)
    console.log("Successfully generated Avalonia resource dictionaries.")
  } catch {
    console.error("Failed to generate Avalonia resource dictionaries. Did you run build:svgtofont-outlined and build:svgtofont-solid before this?");
  }
})();
