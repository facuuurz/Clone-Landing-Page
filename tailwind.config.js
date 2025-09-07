/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],       // Poppins será el default de font-sans
        playfair: ["Playfair Display", "serif"] // Fuente alternativa
      },
    },
  },
  plugins: [],
}
