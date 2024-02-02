/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        search: '#F6F6F6',
        buttonBg: '#8A33FD'
      },
      colors: {
        headerColor: '#3C4242',
        borderColor: '#8A33FD',
        buttonBorder: '#333333',
        authBorder: '#3C4242',
        paragrapghText: '#807D7E'
      },
      width: {
        formWidth: '600px'
      },
      height: {
        authHeight: '50vh'
      }
    },
  },
  plugins: [],
}