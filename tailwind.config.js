/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#006056" /* Dark Teal Green */,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"] /* For body text */,
        heading: ["Manrope", "sans-serif"] /* For headlines */,
      },
    },
  },
  plugins: [],
};
