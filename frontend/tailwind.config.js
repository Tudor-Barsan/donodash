/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1D1D1D',
        white: '#FFFFFF',
        red: {
          100: '#ed0722',
        },
        blue: {
          100: '#004591',
        },
        green: {
          100: '#567044',
        },
        // Add all the default Tailwind CSS colors here
        // You can find the full list in the official Tailwind documentation
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
})

