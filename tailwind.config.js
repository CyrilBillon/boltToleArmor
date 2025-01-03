/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003E7E',
        'primary-light': '#0056b0',
        'primary-dark': '#002c5a',
      },
    },
  },
  plugins: [],
};