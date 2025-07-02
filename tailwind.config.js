/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'tab': '900px',
        'mobile': '426px'
      },
      fontFamily: {
        'logo': 'DM Serif Display',
        'title': 'League Spartan',
      }
    },
  },
  plugins: [],
}

