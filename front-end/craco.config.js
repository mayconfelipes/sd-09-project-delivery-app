const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  style: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
};
