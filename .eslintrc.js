module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
  },
};
