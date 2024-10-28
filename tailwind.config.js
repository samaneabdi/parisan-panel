/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "parisan-color-1":"#6c0056",
        "parisan-color-2":"#ae0085",
        "parisan-color-3":"#ff580c",
        "parisan-color-4":"#ffd8f6",
        "parisan-color-5":"#f9a5c4",
        "light-purple":"#FAF4FA", 
        "dark-green":"#389999",
        "light-green": "#0FD036",
        "purple":"#A15AA1",
        "orange":"#E97854",
        "dirty-yellow":"#FFBB30",
        "red":"#FF0000",
    }
  },
  plugins: [],
  }
}

