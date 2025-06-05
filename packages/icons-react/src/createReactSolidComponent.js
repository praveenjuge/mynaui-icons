import { forwardRef, createElement } from "react";
import PropTypes from "prop-types";

export default (iconName, iconNamePascal, iconNode) => {
  const Component = forwardRef(
    (
      { color = "currentColor", size = 24, children, ...rest },
      ref
    ) =>
      createElement(
        "svg",
        {
          ref,
          width: size,
          height: size,
          fill: color,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          ...rest,
        },
        [
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...(children || []),
        ]
      )
  );

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  Component.displayName = `${iconNamePascal}`;

  return Component;
};
