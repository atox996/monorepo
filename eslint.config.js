import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";

const extraFileExtensions = [".vue"];

export default tseslint.config(
  { ignores: ["**/dist/**"] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: [
          "./tsconfig.json",
          "./apps/*/tsconfig.json",
          "./packages/*/tsconfig.json",
        ],
        extraFileExtensions,
      },
    },
  },
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  pluginVue.configs["flat/recommended"],
  prettierConfig,
);
