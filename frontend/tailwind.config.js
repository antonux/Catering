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
        'sail': ['Sail', 'cursive'],
        'tillana': ['Tillana', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}