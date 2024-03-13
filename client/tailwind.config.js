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
        colorCcc: '#ccc',
        colorYellow: '#febb02',
        colorDadada: '#dadada',
        colorBgPage: '#f5f5f5',
        colorOrange: '#f60'
      }
    },
  },
  plugins: [],
}

