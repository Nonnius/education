/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 
  theme: {
    extend: {
      screens: {
        'exact-md': '768px',
        'max844': {'max': '852px'},
        'min845': {'min': '853px'},
      },
    },
  },
  plugins: [],
}

