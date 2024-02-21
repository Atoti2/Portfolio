/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveIn: {
          from: {
            opacity: 0 
          },
          to: {
            opacity: 1
          }
        },
        moveOut: {
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        }
      }
    },
  },
}