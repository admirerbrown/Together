/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Pacifico': ['Pacifico', 'cursive'],
        'Kalam': ['Kalam', 'cursive'],
        'Open-Sans': ["Open Sans",'sans-serif'],
      },
      backgroundImage: {
      "bg_image": "url('https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-concert-performance-3_1562-629.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais')",
      }
    },
  },
  plugins: [require('daisyui')],
}