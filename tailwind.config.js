/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-primary': '#202124',
      'dark-second': '#303134',
      'dark-link': '#8AB4F8',
      'dark-white': '#f1f3f4',
      'dark-gray': '#969ba1',
      'dark-gray-second': '#9AA0A6',
    },
    fontFamily: {
      sans: [ 'Roboto', 'sans-serif' ],
      serif: [ 'Roboto Slab', 'serif' ],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
