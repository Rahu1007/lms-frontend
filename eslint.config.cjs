
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
      js,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    settings: {
      react: {
        version: "detect", // Auto-detects React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Fix React import issue
    },
  },
];
