module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   softPearl: "#F0EAE5"
    // },
    extend: {
      backgroundImage: theme => ({
        'pizzaHome': "url('./img/pizza-home.jpg')",
        'settingBG': "url('./img/neon-pizza.jpg')",
        'pizzaLBG': "url('./img/pizza-left.jpg')",
        'pizzaMBG': "url('./img/pizza-mid.jpg')",
        'pizzaRBG': "url('./img/pizza-right.jpg')",
        'pizzaMobileBG': "url('./img/neon-pizza.jpg')"
      })
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      textColor: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}