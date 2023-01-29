/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#212529',
        'accent':'#FE4848',
        'secondary-text':'#545759'
      }
    },
    fontFamily: {
      'custom': ['Khula', 'sans-serif'],
      
  },
  },
  plugins: [],
}
