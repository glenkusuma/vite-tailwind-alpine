/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // don't forget to add other files and directories 
    "./nested/*.{html,js}",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

