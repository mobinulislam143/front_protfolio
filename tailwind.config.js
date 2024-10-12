/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "light",
  theme: {
    extend: {
      colors:{
        bg_primary: "#111827",
        bg_secondary: "#BC7D11"
      }
    },
  },
  plugins: [require('daisyui')],
}

