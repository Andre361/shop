const colors = require('tailwindcss/colors');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
module.exports = {
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
