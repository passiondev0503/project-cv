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
        'light-black': '#252628',
        'home-white-smoke': '#F1F1F1',
        'light-grey': '#8E939D',
        'AiInput-color': '#9AA8B7',
        'InputBorder-color': '#FF65C5',
      },
    },
  },
  plugins: [],
});