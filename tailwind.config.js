/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "red": "hsl(0, 100%, 66%)",
        "lightViolet":" hsl(270, 3%, 87%)",
        "darkViolet":" hsl(279, 6%, 55%)",
        "veryDarkViolet":" hsl(278, 68%, 11%)"
        // Linear gradient (active input border): hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
      }
    },
  },
  plugins: [],
}

