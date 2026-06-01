/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f5f1ed",
        parchment: "#f9f6f3",
        ink: "#1a1a1a",
        gold: "#b8860b",
        "gold-light": "#d4a574",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
