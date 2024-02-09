/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gradient-1': '#29243D',
        'gradient-2': '#17181C',
        'light-bg': '#272339',
      },
    },
  },
  plugins: [],
};
