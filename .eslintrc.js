/* eslint-disable no-undef */
module.exports = {
  root: true,
  extends: [
    "plugin:sonarjs/recommended",
    "eslint:recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:cypress/recommended",
  ],
  parser: "@babel/eslint-parser",
  plugins: ["sonarjs", "jest"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "react/jsx-key": 1,
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "no-unused-vars": 1,
    "import/no-unresolved": "off",
    "react/jsx-no-constructed-context-values": 0,
    "react/jsx-no-useless-fragment": 0,
    "sonarjs/no-nested-template-literals": 0,
    "react/no-unstable-nested-components": 0,
    "react/prop-types": 0,
    "import/no-cycle": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/no-named-as-default": 0,
    "no-plusplus": 0,
    "import/no-extraneous-dependencies": 0,
    "no-console": 1,
    "no-unsafe-optional-chaining": "off",
    "default-param-last": "off",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": 2,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "cypress/no-assigning-return-values": 0,
    "cypress/no-unnecessary-waiting": 0,
    "cypress/assertion-before-screenshot": 0,
    "cypress/no-force": 0,
    "cypress/no-async-tests": 0,
    "cypress/no-async-before": 0,
    "cypress/no-pause": 0,
    "cypress/unsafe-to-chain-command": 0,
    "jest/expect-expect": 0,
    "sonarjs/no-duplicate-string": 0,
  },
};
