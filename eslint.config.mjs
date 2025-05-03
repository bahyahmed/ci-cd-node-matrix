import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"]
    }
  }
];
