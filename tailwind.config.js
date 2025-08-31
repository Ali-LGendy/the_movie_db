/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/primeng/**/*.{js,ts}",
    "./node_modules/tailwindcss-primeui/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
};
