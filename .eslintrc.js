module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    production: {
      rules: {
        "no-console": "error",
        "no-unused-vars": [
          "error",
          { vars: "all", args: "after-used", ignoreRestSiblings: true },
        ],
        "no-unused-imports": "error",
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "lint/a11y/useKeyWithClickEvents": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
};
