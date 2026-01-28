/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // We put "Plus Jakarta Sans" FIRST. This makes it the default.
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        // We keep Inter for specific "body" text if you ever need it
        body: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}