/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#6ffc03",
      },
      fontFamily: {
        sans: ["Syne", "Helvetica Neue", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 },                          to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(28px)" }, to: { opacity: 1, transform: "translateY(0)" } },
      },
      animation: {
        fadeIn:  "fadeIn .2s ease",
        slideUp: "slideUp .25s ease",
      },
    },
  },
  plugins: [],
};