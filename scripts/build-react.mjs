#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { parseSync } from "svgson";
import picocolors from "picocolors";

const getCurrentDirPath = () => path.dirname(fileURLToPath(import.meta.url));
const HOME_DIR = path.resolve(getCurrentDirPath(), "..");
const ICONS_DIR = path.resolve(HOME_DIR, "icons");
const ICONS_SOLID_DIR = path.resolve(HOME_DIR, "icons-solid");
const PACKAGES_DIR = path.resolve(HOME_DIR, "packages");

const readSvgDirectory = (directory) =>
  fs.readdirSync(directory).filter((file) => path.extname(file) === ".svg");

const readSvg = (fileName, directory) =>
  fs.readFileSync(path.join(directory, fileName), "utf-8");

const toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

const readSvgs = (dir) => {
  const svgFiles = readSvgDirectory(dir);
  return svgFiles.map((svgFile) => {
    const name = path.basename(svgFile, ".svg");
    const namePascal = toPascalCase(name);
    const contents = readSvg(svgFile, dir).trim();
    const filePath = path.resolve(dir, svgFile);
    const obj = parseSync(
      contents.replace(
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>',
        ""
      )
    );
    return { name, namePascal, contents, obj, path: filePath };
  });
};

// Define the buildIcons function
const buildIcons = ({
  name,
  componentTemplate,
  indexItemTemplate,
  indexTypeTemplate,
  extension = "js",
  key = true,
  pascalCase = false,
  inputDir,
  outputSubDir,
  nameSuffix = '',
}) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const svgFiles = readSvgs(inputDir);

  let index = [];
  let typings = [];

  svgFiles.forEach((svgFile, i) => {
    const children = svgFile.obj.children
      .filter(
        ({ attributes }) =>
          !attributes.d || attributes.d !== "M0 0h24v24H0z"
      )
      .map(({ name, attributes }, j) => {
        if (key) attributes.key = `svg-${j}`;
        if (pascalCase) {
          attributes.strokeWidth = attributes["stroke-width"];
          delete attributes["stroke-width"];
        }
        return [name, attributes];
      });

    const componentName = svgFile.namePascal + nameSuffix;

    fs.ensureDirSync(path.resolve(DIST_DIR, `src/${outputSubDir}`));

    fs.writeFileSync(
      path.resolve(
        DIST_DIR,
        `src/${outputSubDir}`,
        `${componentName}.${extension}`
      ),
      componentTemplate({
        name: svgFile.name,
        namePascal: componentName,
        children,
      }),
      "utf-8"
    );

    console.log(
      picocolors.green(
        `Building ${componentName} (${i + 1}/${svgFiles.length})\r`
      )
    );

    index.push(
      indexItemTemplate({
        name: svgFile.name,
        namePascal: componentName,
        outputSubDir,
      })
    );

    typings.push(
      indexTypeTemplate({
        name: svgFile.name,
        namePascal: componentName,
      })
    );
  });

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/${outputSubDir}.js`),
    index.join("\n"),
    "utf-8"
  );

  // Return the typings instead of writing them here
  return { typings };
};

// Define templates for regular icons
const componentTemplate = ({ name, namePascal, children }) => `\
import createReactComponent from '../createReactComponent';
export default createReactComponent('${name}', '${namePascal}', ${JSON.stringify(
  children
)});`;

const indexItemTemplate = ({ name, namePascal, outputSubDir }) =>
  `export { default as ${namePascal} } from './${outputSubDir}/${namePascal}';`;

const typeDefinitionsTemplate = () => `/// <reference types="react" />
import { SVGAttributes } from 'react'

declare module '@myna/icons-react'

export interface MynaIconsProps extends Partial<Omit<React.SVGProps<SVGSVGElement>, 'stroke'>> {
    size?: string | number,
    stroke?: string | number
}

export declare const createReactComponent: (iconName: string, iconNamePascal: string, iconNode: any[]) => (props: MynaIconsProps) => JSX.Element;

export type Icon = React.FC<MynaIconsProps>;

// Generated icons`;

const indexTypeTemplate = ({ namePascal }) =>
  `export declare const ${namePascal}: (props: MynaIconsProps) => JSX.Element;`;

// Define templates for solid icons
const solidComponentTemplate = ({ name, namePascal, children }) => `\
import createReactSolidComponent from '../createReactSolidComponent';
export default createReactSolidComponent('${name}', '${namePascal}', ${JSON.stringify(
  children
)});`;

// Build normal icons
const normalIconsResult = buildIcons({
  name: "icons-react",
  componentTemplate,
  indexItemTemplate,
  indexTypeTemplate,
  pascalCase: true,
  inputDir: ICONS_DIR,
  outputSubDir: "icons",
});

// Build solid icons
const solidIconsResult = buildIcons({
  name: "icons-react",
  componentTemplate: solidComponentTemplate,
  indexItemTemplate,
  indexTypeTemplate,
  pascalCase: true,
  inputDir: ICONS_SOLID_DIR,
  outputSubDir: "icons-solid",
  nameSuffix: "Solid",
});

// Combine typings from both builds
const allTypings = normalIconsResult.typings.concat(solidIconsResult.typings);

// Write combined type definitions file
const DIST_DIR = path.resolve(PACKAGES_DIR, "icons-react");

fs.ensureDirSync(path.resolve(DIST_DIR, "./dist/"));

fs.writeFileSync(
  path.resolve(DIST_DIR, `./dist/myna-icons-react.d.ts`),
  typeDefinitionsTemplate() + "\n" + allTypings.join("\n"),
  "utf-8"
);
