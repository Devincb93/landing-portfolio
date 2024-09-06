/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'game-of-squids': ['Game of Squids', 'sans-serif'],
      },
    },
  },
  plugins: [],
}