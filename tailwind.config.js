/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        'blueColor': '#124a66',
        'greenColor': '#0aa396',
        'redColor': '#e04c4d',
        'greyIsh': '#f1f4f8',
        'cardShadown': '#f7f8f9',
        'textColor': '#252b36',
        'inputColor': '#575acd',
        'white': '#ffffff'
      },
    },
  },
  plugins: [],
}

