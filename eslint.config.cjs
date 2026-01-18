const js = require("@eslint/js");
const jest = require("eslint-plugin-jest");
const globals = require("globals");

module.exports = [
  // Base JS + Node
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },
    plugins: { jest },
    rules: {
      ...js.configs.recommended.rules
    }
  },

  // Jest tests
  {
    files: ["test/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  }
];

