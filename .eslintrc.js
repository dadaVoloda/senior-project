module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'react/require-default-props': 'off',
    'object-curly-newline': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-wrap-multilines': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    semi: [2, 'never'],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'i18next/no-literal-string': [
      2,
      { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
    ],
    'max-len': [2, { ignoreComments: true, code: 100 }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: { 'i18next/no-literal-string': 'off', 'max-len': 'off' },
    },
  ],
}
