/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'open':["Open Sans"],
        'paprika':["Paprika, system-ui"],
      },
      colors:{
        'primary':"#1BBF00",
        'secondary':"#160c6d80",
        'third':"#141135",
        'four':"#726E9E",
        'five':"#FDFDFD",
        'six':"#CBC8F0",
        "seven":"#FAFAFE",
        'darkBlue':"#6B62C5",
      },
      maxWidth:{
        'container':"1170px",
      },
      backgroundImage:{
        'banner':"url('./assets/banner.png')",
      },
    },
  },
  plugins: [],
}