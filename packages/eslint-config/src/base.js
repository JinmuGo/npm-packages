import unusedImports from "eslint-plugin-unused-imports";
import turboPlugin from "eslint-plugin-turbo";
import perfectionist from "eslint-plugin-perfectionist";
import packageJsonRecommended from "eslint-plugin-package-json/configs/recommended";
import importPlugin from "eslint-plugin-import";
import js from "@eslint/js/src/index.js";

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  {
    name: "Config Package JSON",
    ...packageJsonRecommended,
  },
  {
    name: "Config ESLint",
    ...js.configs.recommended,
    rules: {
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
    },
  },
  {
    name: "Config import plugin",
    ...importPlugin.flatConfigs.recommended,
    rules: {
      "import/no-named-as-default": "off",
      "import/order": [
        "error",
        {
          warnOnUnassignedImports: true,
          groups: [
            "builtin",
            "external",
            "internal",
            "object",
            ["parent", "sibling", "index"],
            "type",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "react*",
              group: "external",
              position: "before",
            },
            {
              pattern: "next",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "{.,..,@,*}/**/*.+(css|sass|less|scss|pcss|styl|svg)",
              group: "unknown",
              position: "after",
            },
          ],
          alphabetize: {
            order: "desc",
          },
          pathGroupsExcludedImportTypes: ["type"],
        },
      ],
    },
  },
  {
    name: "Config unused import plugin",
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    name: "Config turbo plugin",
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": [
        "warn",
        {
          allowList: ["NEXT_PUBLIC_*"],
        },
      ],
    },
  },
  {
    name: "Config ignore patterns",
    ignores: ["node_modules/**", "dist/**", "build/**", "storybook-static"],
  },
  {
    name: "Config My Rules",
    rules: {
      curly: ["error", "all"],
    },
  },
  {
    name: "Config Perfectionist",
    ...perfectionist.configs["recommended-natural"],
    plugins: {
      perfectionist,
    },
    ignores: ["package.json"],
    rules: {
      "perfectionist/sort-imports": "off",
    },
  },
];
