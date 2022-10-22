const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      72: "18rem",
      84: "21rem",
      96: "24rem",
      108: "27rem",
      120: "30rem",
      132: "33rem",
      154: "36rem",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        xl: "0.3em",
        "2xl": "0.6em",
        "3xl": "0.9em",
        "4xl": "1.2em",
      },
      inset: {
        "1/8": "12.5%",
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem",
        132: "33rem",
        154: "36rem",
        166: "39rem",
        178: "42rem",
      },
      colors: {
        primary: "#60FFC9",
        secondary: "#A177FF",
        red: "#ff6767",
        yellow: "#ffff00",
        "accents-0": "#212121",
        "accents-1": "#CACACA",
        "accents-2": "#E9E9E9",
        ...colors
      },
      maxWidth: {
      }
    },
  },
};
