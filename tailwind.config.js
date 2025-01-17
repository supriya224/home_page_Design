/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    variants: {
      extend: {
        translate: ['group-hover'],
      },
    },
    extend: {
      fontFamily: {
        customFont: ['Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [Myclass],
};
