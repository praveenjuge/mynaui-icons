export default {
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
        attrs: [
          "clip-rule",
          "data-name",
          "fill",
          "path:stroke",
          "circle:stroke",
          "stroke-miterlimit",
          "transform"
        ],
      },
    },
    // Custom plugin which resets the SVG attributes to explicit values
    {
      name: "explicitAttrs",
      type: "visitor",
      params: {
        attributes: {
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
};
