/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      screens: {
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
