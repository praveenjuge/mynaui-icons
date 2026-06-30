import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {},
  },
  {
    ignores: [
      'node_modules/**',
      'packages/icons/icons/**',
      'packages/icons/icons-solid/**',
      'packages/icons-react/dist/**',
      'packages/icons-react/src/icons.js',
      'packages/icons-react/src/icons-solid.js',
      'packages/icons-react/src/icons/**',
      'packages/icons-react/src/icons-solid/**',
    ],
  },
];
