/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'jomolhari': ['Jomolhari', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'ephesis': ['Ephesis', 'cursive'],
      },
    },
  },
  plugins: [],
}