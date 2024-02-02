/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        cards: '#E9E9E9',
        search: '#F6F6F6'
      },
      colors: {
        headerColor: '#3C4242',
        borderColor: '#8A33FD',
      }
    },
  },
  plugins: [],
}