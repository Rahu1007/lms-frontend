import { compat } from "@eslint/compat";
import airbnb from "eslint-config-airbnb";
import react from "eslint-plugin-react";

module.exports = {
  extends: ["airbnb"],
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};


