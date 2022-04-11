module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  // "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    indent: ["error", 2],
    semi: [0, "always"],
    quotes: ["off", "double"],
    "no-unused-vars": 0,
    "no-console": ["off"],
    "no-undef": ["off"]
    // indent: "off"
  }
};
