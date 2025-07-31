/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: '880px', 
       'midRange': { min: '880px', max: '1136px' }
      },
    },
  },
  plugins: [],
}

