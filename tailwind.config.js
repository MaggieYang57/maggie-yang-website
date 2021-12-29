const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      emerald: colors.emerald,
      indigo: colors.indigo,
      rose: colors.rose
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      spacing: {
        'r': '50%'
      },
      
      keyframes:
      {
        'fadeIn':{
          '0%':{opacity: '0%'},
          '100%':{opacity:'100%'}
        }
      },
      animation:{
        fadeIn: 'fadeIn 5s ease-in-out',
      }
    },
  },
  variants: {
    scale: ['active', 'responsive', 'hover', 'focus', 'group-hover'],
    extend: {
      textColor: ['active', 'responsive', 'hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
}