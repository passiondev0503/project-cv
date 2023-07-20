/**
 * 

 
 
  @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-black': '#18191B',
        'grey-color': '#8B8C8D',
        'pruple-color': '#9B7EDB',
        'light-grey': '#E7E8E9',
      },
    },
  },
  plugins: [],
});