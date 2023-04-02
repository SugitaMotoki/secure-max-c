module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    "eslint:all",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-var": "error",
    "one-var": ["error", "never"],
    "sort-imports": "off",
    "sort-keys": "off",
    "init-declarations": "off",
    "class-methods-use-this": "off",
    "no-magic-numbers": "off",
    "no-useless-constructor": "off",
    "no-return-await": "off",
    "line-comment-position": "off",
    "no-inline-comments": "off",
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "new-cap": ["error", {
        "capIsNewExceptionPattern": "@*", // Decoratorだけ許可
    }],
  },
};
