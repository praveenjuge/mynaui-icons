// Shared SVGO configuration factory.
//
// The regular and solid pipelines are identical except for two things:
//   1. which attributes are stripped (`removeAttrs`)
//   2. the explicit attribute set written back onto the root <svg> element
//
// The tables below are copied verbatim from the previous standalone configs
// so optimized SVG output stays byte-for-byte identical.

const removeAttrsByVariant = {
  regular: [
    "clip-rule",
    "data-name",
    "fill",
    "path:stroke",
    "circle:stroke",
    "stroke-miterlimit",
    "transform",
  ],
  solid: [
    "clip-rule",
    "data-name",
    "fill",
    "stroke",
    "stroke-linejoin",
    "stroke-linecap",
    "stroke-width",
    "path:stroke",
    "circle:stroke",
    "stroke-miterlimit",
    "transform",
  ],
};

const explicitAttrsByVariant = {
  regular: {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    xmlns: "http://www.w3.org/2000/svg",
  },
  solid: {
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
};

export const createSvgoConfig = (variant) => ({
  multipass: true,
  js2svg: {
    pretty: false,
    eol: "lf",
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeUnknownsAndDefaults: {
            keepRoleAttr: true,
          },
          removeViewBox: false,
        },
      },
    },
    // The next plugins are included in svgo but are not part of preset-default,
    // so we need to enable them separately
    "cleanupListOfValues",
    "convertShapeToPath",
    "mergePaths",
    {
      name: "removeAttrs",
      params: {
        attrs: removeAttrsByVariant[variant],
      },
    },
    // Custom plugin which resets the SVG attributes to explicit values
    {
      name: "explicitAttrs",
      type: "visitor",
      params: {
        attributes: explicitAttrsByVariant[variant],
      },
      fn(_root, params) {
        if (!params.attributes) {
          return null;
        }

        return {
          element: {
            enter(node, parentNode) {
              if (node.name === "svg" && parentNode.type === "root") {
                // We set the `svgAttributes` in the order we want to,
                // hence why we remove the attributes and add them back
                node.attributes = {};
                for (const [key, value] of Object.entries(params.attributes)) {
                  node.attributes[key] = value;
                }
              }
            },
          },
        };
      },
    },
  ],
});
