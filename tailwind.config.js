const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '0px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
        RobotoMono: ['Roboto Mono'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
