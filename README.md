## Install
```
npm i
```

## Repro

1. Run

    ```
    npx eslint src
    ```
    Should throw 3 errors.

2. Comment out parserOptions.project property in `.eslintrc.js` file and run the eslint command again.
    Should throw error:
    ```
    Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated.
    You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
    ```
