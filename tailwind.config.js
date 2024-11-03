/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./src/img/background.png')",
      },
    },
  },
  plugins: [],
}

