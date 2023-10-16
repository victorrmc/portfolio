/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple auto fit grid
        'autofit': 'repeat( auto-fit, minmax(40px, 1fr))',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

