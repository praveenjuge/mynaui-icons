import fs from "fs-extra";
import path from "path";
import { PACKAGES_DIR, readSvgs } from "./helpers.mjs";
import { stringify } from "svgson";
import bundleSize from "@atomico/rollup-plugin-sizes";
import license from "rollup-plugin-license";
import esbuild from "rollup-plugin-esbuild";
import picocolors from "picocolors";

export const buildIcons = ({
  name,
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  extension = "js",
  key = true,
  pascalCase = false,
}) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name),
    svgFiles = readSvgs();

  let index = [];
  let typings = [];

  svgFiles.forEach((svgFile, i) => {
    const children = svgFile.obj.children
      .map(({ name, attributes }, i) => {
        if (key) {
          attributes.key = `svg-${i}`;
        }

        if (pascalCase) {
          attributes.strokeWidth = attributes["stroke-width"];
          delete attributes["stroke-width"];
        }

        return [name, attributes];
      })
      .filter((i) => {
        const [name, attributes] = i;
        return !attributes.d || attributes.d !== "M0 0h24v24H0z";
      });

    let component = componentTemplate({
      name: svgFile.name,
      namePascal: svgFile.namePascal,
      children,
      stringify,
      svg: svgFile,
    });

    let filePath = path.resolve(
      DIST_DIR,
      "src/icons",
      `${svgFile.namePascal}.${extension}`
    );

    console.log(
      picocolors.green(
        `Building Typings ${i}/${svgFiles.length}: ${svgFile.name.padEnd(42)}\r`
      )
    );

    fs.writeFileSync(filePath, component, "utf-8");

    index.push(
      indexItemTemplate({
        name: svgFile.name,
        namePascal: svgFile.namePascal,
      })
    );

    typings.push(
      indexTypeTemplate({
        name: svgFile.name,
        namePascal: svgFile.namePascal,
      })
    );
  });

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/icons.js`),
    index.join("\n"),
    "utf-8"
  );

  fs.ensureDirSync(path.resolve(DIST_DIR, `./dist/`));
  fs.writeFileSync(
    path.resolve(DIST_DIR, `./dist/myna-${name}.d.ts`),
    typeDefinitionsTemplate() + "\n" + typings.join("\n"),
    "utf-8"
  );
};

export const getRollupPlugins = (pkg, minify) => {
  return [
    esbuild({
      minify,
    }),
    license({
      banner: `${pkg.name} v${pkg.version} - ${pkg.license}`,
    }),
    bundleSize(),
  ].filter(Boolean);
};
