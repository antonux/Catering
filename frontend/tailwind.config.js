/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_sixty : "#e0e2db",
        bg_thirty : "#191716",
        bg_ten : "#e6af2e"
      },
    },
  },
  plugins: [],
}

