import createReactComponent from './createReactComponent';

// Back-compat re-export: delegates to the unified factory with the solid
// variant so existing generated components and public exports keep working.
export default (iconName, iconNamePascal, iconNode) =>
  createReactComponent(iconName, iconNamePascal, iconNode, 'solid');
