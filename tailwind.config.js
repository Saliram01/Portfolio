/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%' : {
            'transform': 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%' : {
            'transform': 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
      },
      animation: {
        'animation': 'bounce 1s infinite',
      },
    },  
  },
  plugins: [],
}

