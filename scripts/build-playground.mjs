#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS_FOLDER = path.join(__dirname, "../icons");
const ICONS_SOLID_FOLDER = path.join(__dirname, "../icons-solid");
const playgroundFile = path.join(__dirname, "../icons-playground.html");

const generateHTML = (regularIcons, solidIcons, size = 42, stroke = 1.5, format = 'Regular') => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Icons Playground</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; }
    .controls { margin: 20px; display: flex; align-items: center; gap: 20px; }
    .icons-container { width: 100%; display: flex; flex-wrap: wrap; gap: 10px; }
    svg { width: ${size}px; height: ${size}px; stroke-width: ${stroke}px; }
    svg * { stroke-width: inherit; }
    label { display: flex; align-items: center; margin-right: 15px; }
    #sizeValue, #strokeValue { margin-left: 5px; min-width: 30px; text-align: left; }
    .icon-set { display: none; }
    .icon-set.active { display: flex; flex-wrap: wrap; gap: 10px; }
    button { padding: 5px 10px; }
  </style>
</head>
<body>
  <div class="controls">
    <h3>Icons Playground</h3>
    <label for="size">Size:
      <input type="range" id="size" name="size" min="4" max="62" value="${size}">
      <span id="sizeValue">${size}</span>
    </label>
    <label for="stroke">Stroke:
      <input type="range" id="stroke" name="stroke" min="0" max="2.5" step="0.1" value="${stroke}">
      <span id="strokeValue">${stroke}</span>
    </label>
    <button id="toggleFormatBtn">Switch to Solid</button>
    <button id="randomize">Randomize</button>
  </div>
  <div class="icons-container">
    <div id="regularIcons" class="icon-set ${format === 'Regular' ? 'active' : ''}">
      ${regularIcons.join('\n')}
    </div>
    <div id="solidIcons" class="icon-set ${format === 'Solid' ? 'active' : ''}">
      ${solidIcons.join('\n')}
    </div>
  </div>
  <script>
    const sizeInput = document.getElementById('size');
    const strokeInput = document.getElementById('stroke');
    const sizeValue = document.getElementById('sizeValue');
    const strokeValue = document.getElementById('strokeValue');
    const randomizeBtn = document.getElementById('randomize');
    const toggleFormatBtn = document.getElementById('toggleFormatBtn');
    const regularIconsDiv = document.getElementById('regularIcons');
    const solidIconsDiv = document.getElementById('solidIcons');
    let currentFormat = '${format}';

    sizeInput.addEventListener('input', (event) => {
      const value = event.target.value + 'px';
      document.querySelectorAll('svg').forEach(svg => {
        svg.style.width = value;
        svg.style.height = value;
      });
      sizeValue.textContent = event.target.value;
    });

    strokeInput.addEventListener('input', (event) => {
      const value = event.target.value;
      document.querySelectorAll('svg').forEach(svg => {
        svg.style.strokeWidth = value;
      });
      strokeValue.textContent = event.target.value;
    });

    randomizeBtn.addEventListener('click', () => {
      const container = document.querySelector('.icons-container .icon-set.active');
      const icons = Array.from(container.children);
      for (let i = icons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(icons[j]);
      }
    });

    toggleFormatBtn.addEventListener('click', () => {
      if (currentFormat === 'Regular') {
        regularIconsDiv.classList.remove('active');
        solidIconsDiv.classList.add('active');
        toggleFormatBtn.textContent = 'Switch to Regular';
        currentFormat = 'Solid';
      } else {
        solidIconsDiv.classList.remove('active');
        regularIconsDiv.classList.add('active');
        toggleFormatBtn.textContent = 'Switch to Solid';
        currentFormat = 'Regular';
      }
    });
  </script>
</body>
</html>
`;

const generateIconsPage = async () => {
  const size = 42;
  const stroke = 1.5;
  const format = 'Regular';

  const [regularSvgFiles, solidSvgFiles] = await Promise.all([
    fs.readdir(ICONS_FOLDER),
    fs.readdir(ICONS_SOLID_FOLDER)
  ]);

  const [regularIcons, solidIcons] = await Promise.all([
    Promise.all(
      regularSvgFiles.filter(file => file.endsWith('.svg')).map(file =>
        fs.readFile(path.join(ICONS_FOLDER, file), 'utf-8')
      )
    ),
    Promise.all(
      solidSvgFiles.filter(file => file.endsWith('.svg')).map(file =>
        fs.readFile(path.join(ICONS_SOLID_FOLDER, file), 'utf-8')
      )
    )
  ]);

  const htmlContent = generateHTML(regularIcons, solidIcons, size, stroke, format);
  await fs.writeFile(playgroundFile, htmlContent);
  console.log(picocolors.green('HTML file generated: icons-playground.html'));
};

generateIconsPage();
