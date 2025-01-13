import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

import { config as libraryConfig } from "./library.js";

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  ...libraryConfig,
  {
    name: "Config react plugin",
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/jsx-curly-brace-presence": [
        "error",
        { children: "never", props: "never" },
      ],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    name: "Config react hook plugin",
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react-hooks/exhaustive-deps": [
        "warn",
        {
          additionalHooks: "useIsomorphicLayoutEffect",
        },
      ],
    },
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    name: "Config LanguageOption For React",
  },
];
