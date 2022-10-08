/* eslint-disable sort-keys-fix/sort-keys-fix */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    colors: {
      green: {
        25: "#F5FFFA",
        50: "#E8FAF0",
        100: "#D2F4E1",
        150: "#BBEFD2",
        200: "#A5EAC3",
        300: "#77DFA4",
        400: "#4AD586",
        500: "#1DCA77",
        600: "#17A270",
        650: "#0D8C66",
        700: "#117960",
        800: "#0C5140",
        900: "#093D30",
      },
      dark: {
        25: "#faf9fb",
        50: "#F4F3F7",
        75: "#E8E9F0",
        100: "#DBDEEA",
        200: "#b3b6cc",
        300: "#9599b3",
        400: "#7f84a0",
        500: "#6a6f8e",
        600: "#5b627e",
        700: "#4a4f67",
        800: "#393d51",
        900: "#26293a",
      },
    },
    extend: {},
  },
};
