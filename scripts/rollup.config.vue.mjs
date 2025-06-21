import fs from "fs";
import esbuild from "rollup-plugin-esbuild";
import license from "rollup-plugin-license";
import bundleSize from "@atomico/rollup-plugin-sizes";

const getRollupPlugins = (pkg, minify) => [
  esbuild({ minify }),
  license({ banner: `${pkg.name} v${pkg.version} - ${pkg.license}` }),
  bundleSize(),
];

const pkg = JSON.parse(
  fs.readFileSync("./packages/icons-vue/package.json", "utf-8")
);

const packageName = "@myna/icons-vue";
const outputFileName = "myna-icons-vue";
const outputDir = "./packages/icons-vue/dist";
const inputs = ["./packages/icons-vue/src/myna-icons-vue.js"];
const bundles = [
  {
    format: "umd",
    inputs,
    outputDir,
    minify: true,
  },
  {
    format: "umd",
    inputs,
    outputDir,
  },
  {
    format: "cjs",
    inputs,
    outputDir,
  },
  {
    format: "es",
    inputs,
    outputDir,
  },
  {
    format: "esm",
    inputs,
    outputDir,
    preserveModules: true,
  },
];

const configs = bundles
  .map(({ inputs, outputDir, format, minify, preserveModules }) =>
    inputs.map((input) => ({
      input,
      plugins: getRollupPlugins(pkg, minify),
      external: ["vue"],
      output: {
        name: packageName,
        ...(preserveModules
          ? {
              dir: `${outputDir}/${format}`,
            }
          : {
              file: `${outputDir}/${format}/${outputFileName}${
                minify ? ".min" : ""
              }.js`,
            }),
        format,
        sourcemap: true,
        preserveModules,
        globals: {
          vue: "Vue",
        },
      },
    }))
  )
  .flat();

export default configs;
