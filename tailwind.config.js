/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["OpenSans", "ui-sans-serif", "system-ui"],
        "openSans-condensed": [
          "OpenSans_Condensed",
          "ui-sans-serif",
          "system-ui",
        ],
        "openSans-semiCondensed": [
          "OpenSans_SemiCondensed",
          "ui-sans-serif",
          "system-ui",
        ],
      },
    },
  },
  plugins: [],
};
