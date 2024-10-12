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
        bg_secondary: "#BC7D11",
        text_color_light: '#D1D5DB',
        text_color_dark: '#9CA3AF'
      }
    },
  },
  plugins: [require('daisyui')],
}

