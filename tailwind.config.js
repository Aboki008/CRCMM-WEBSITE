
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2188C',     // Deep Magenta / Royal Pink
        secondary: '#F48FB1',   // Soft Pink
        accent: '#6A1B9A',      // Purple Plum
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}