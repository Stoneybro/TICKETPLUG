/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      Gilroy: ['Gilroy-Regular','cursive'],
      Gilroybold:['Gilroy-Bold','cursive'],
      Gilroymedium:['Gilroy-Medium','cursive'],
      BebasNeue:['BebasNeue-Regular','cursive'],
      BebasNeuebold:['BebasNeue-Bold','cursive']
    },
    extend: {
      colors: {
        'primary': '#212529',
        'accent':'#FE4848',
        'secondary-text':'#545759'
      }
    },

  },
  plugins: [],
}
