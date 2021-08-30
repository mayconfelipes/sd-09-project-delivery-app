require('tailwindcss');
require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
};
