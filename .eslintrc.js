module.exports = {
  'root': true,
  'ignorePatterns': ['*.js'],
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    // After commenting this line `npx eslint src` should error:
    // "Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser."
    'project': ['tsconfig.*?.json'],
  },
  'plugins': ['@typescript-eslint'],
  'rules': {
    "@typescript-eslint/dot-notation": ["error"],
    "@typescript-eslint/array-type": "error"
  },
};
