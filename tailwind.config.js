module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'settingBG': "url('./img/neon-pizza.jpg')",
        'pizzaLBG': "url('./img/pizza-left.jpg')",
        'pizzaMBG': "url('./img/pizza-mid.jpg')",
        'pizzaRBG': "url('./img/pizza-right.jpg')",
        'pizzaMobileBG': "url('./img/pizza-landscape.jpg')"
      })
    },
  },
  variants: {
    extend: {
      // fill: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}