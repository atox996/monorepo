/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  ignoreFiles: ["**/dist/**"],
  overrides: [
    {
      files: ["**/*.{html,vue}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.{css,less}"],
      customSyntax: "postcss-less",
    },
  ],
};
