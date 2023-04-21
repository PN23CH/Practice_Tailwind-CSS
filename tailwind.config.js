/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.php',
            './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        thaisa: "Sarabun"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

