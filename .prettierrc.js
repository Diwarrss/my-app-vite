module.exports = {
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  semi: true,
  bracketSpacing: true,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
  plugins: [require("prettier-plugin-tailwindcss")],
};
