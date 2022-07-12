/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        baseOrange: 'rgb(243,115,32)',
        baseBlue: 'rgb(80,133,250)',
        baseGray: 'rgb(76,83,93)',
        lightGray: '#131B4280',
      }
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
}
