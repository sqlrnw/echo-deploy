const js = require("@eslint/js");
const jest = require("eslint-plugin-jest");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs"
    },
    plugins: { jest },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules
    }
  }
];
