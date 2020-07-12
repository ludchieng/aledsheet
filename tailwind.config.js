const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '750': '#3c4658',
          '850': '#2c3348'
        }
      },
      inset: {
        '4': '1rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '5vw': '5vw'
      }
    }
  },
  variants: {},
  plugins: [],
}