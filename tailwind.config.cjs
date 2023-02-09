/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customfontname: [
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    colors: {
      primary: "#1d4ed8",
      secondary: "#3b82f6",
      gray: colors.gray,
      danger: colors.rose,
      bdr: "#cbd5e1",
      white: "#ffffff",
    },
  },
  plugins: [],
};
