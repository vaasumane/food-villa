/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    container:{
      padding:{
        DEFAULT:"15px",
      },
    },
  },
  plugins: [],
}