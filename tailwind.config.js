/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      colors: {
        'primary-color': '#2AF4E8',
        'second-primary-color': '#2AF437',
        'white-color': '#FFFFFF'
      },
      fontFamily: {
        'primary-font':  'sans-serif'
      }
    },
  },
  plugins: [],
}