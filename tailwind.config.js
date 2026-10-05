/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#09BFD7',
          DEFAULT: '#087FA8',
          dark: '#005B78',
        },
        sand: {
          light: '#F5C96A',
          DEFAULT: '#E9A94A',
        },
        food: {
          light: '#F36B35',
          DEFAULT: '#D94B2B',
        },
        accent: {
          DEFAULT: '#FFE08A'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
