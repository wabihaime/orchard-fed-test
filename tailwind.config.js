/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        accent: "#BD2E37",
      },
      fontFamily: {
        fontFamily: {
          "open-sans": ["OpenSans", "ui-sans-serif", "system-ui"],
          "open-sans-condensed": [
            "OpenSansCondensed",
            "ui-sans-serif",
            "system-ui",
          ],
          "open-sans-semicondensed": [
            "OpenSansSemiCondensed",
            "ui-sans-serif",
            "system-ui",
          ],
        },
      },
    },
  },
  plugins: [],
};
