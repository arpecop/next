module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {

    "react/no-unknown-property": "off",

    "lint/a11y/useKeyWithClickEvents": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "no-multiple-empty-lines": ["error", { max: 0 }],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "unused-imports"],
};
