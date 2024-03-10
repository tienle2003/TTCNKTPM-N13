/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#1266dd',
        colorSecondary: '#f73859',
        colorDark: '#181c31',
        colorLight: '#fff',
        ccc: '#ccc'
      }
    },
  },
  plugins: [],
}

