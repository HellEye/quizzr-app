/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 100,
  tabs: true,
};
