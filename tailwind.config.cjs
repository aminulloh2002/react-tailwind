// /** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      leftToRight: {
        '0%': { marginLeft: '-25px' },
        '100%': { left: '0' },
      },
      rightToLeft: {
        '0%': { marginLeft: '25px' },
        '100%': { left: '0' },
      },
      mobileMenu: {
        '0%': { top: '-10rem' },
        '100%': { top: '3.5rem' }
      }
    },
    animation: {
      fadeInFromLeft: 'leftToRight 1s ease-out',
      fadeInFromRight: 'rightToLeft 1s ease-out',
      mobileMenu: 'mobileMenu .8s ease-in-out',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,69%)',
        brightRedSupLight: 'hsl(12,88%,95%)',
        darkBlue: 'hsl(228,39%,23%)',
        darkGreyishBlue: 'hsl(227,12%,61%)',
        veryDarkBlue: 'hsl(233,12%,13%)',
        veryPaleRed: 'hsl(13,100%,96%)',
        veryLightGray: 'hsl(0,0%,98%)',
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-child)')
    })
  ],
}
