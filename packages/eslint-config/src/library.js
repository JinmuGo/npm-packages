import tseslint from "typescript-eslint";

import { config as baseConfig } from "./base.js";

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: "Config typescript with rules",
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
    },
  },
];
