import { forwardRef, createElement } from 'react';
import PropTypes from 'prop-types';

export default (iconName, iconNamePascal, iconNode, variant = 'outline') => {
  const isSolid = variant === 'solid';

  const Component = forwardRef(
    ({ color = 'currentColor', size = 24, children, ...rest }, ref) => {
      let attrs;
      if (isSolid) {
        // Solid icons are filled and ignore stroke styling; any caller-provided
        // props (including `stroke`) pass straight through via `...rest`, which
        // matches the behaviour of the original standalone solid factory.
        attrs = {
          ref,
          width: size,
          height: size,
          fill: color,
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          ...rest,
        };
      } else {
        const { stroke = '1.5', ...outlineRest } = rest;
        attrs = {
          ref,
          width: size,
          height: size,
          fill: 'none',
          stroke: color,
          strokeWidth: stroke,
          viewBox: '0 0 24 24',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          xmlns: 'http://www.w3.org/2000/svg',
          ...outlineRest,
        };
      }

      return createElement('svg', attrs, [
        ...iconNode.map(([tag, elementAttrs]) =>
          createElement(tag, elementAttrs),
        ),
        ...(children || []),
      ]);
    },
  );

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // `stroke` only affects outline icons, so it is not advertised for solid.
    ...(isSolid
      ? {}
      : { stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) }),
  };

  Component.displayName = `${iconNamePascal}`;

  return Component;
};
