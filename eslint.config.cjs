
const globals = require("globals");
const js = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "simple-import-sort"
      js,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    settings: {
      react: {
        version: "detect", // Auto-detects React version
      },
    },
    rules: {
      "simple-import-sort/imports":"errors",
      "react/react-in-jsx-scope": "off", // Fix React import issue
    },
  },
];
