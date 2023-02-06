/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      main: ["Inter", "sans-serif"],
      second: ["Roboto Slab", "serif"],
    },
    colors: {
      "main-color": "#212121",
      "second-color": "#2979FF",
    },
    screens: {
      340: "340px",
      400: "400px",
      600: "600px",
      800: "800px",
      lg: "1024px",
      xl: "1224px",
    },
    fontSize: {
      sm: "0.625rem",
      "17px": "1.0625rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    letterSpacing: {
      tightest: ".02em",
    },

    extend: {
      spacing: {
        "30px": "30px",
      },
      padding: {
        "30px": "30px",
      },
      content: {
        arrowUpRight: "url('/public/images/arrow-up-right.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "16px" },
      });
    }),
  ],
};
