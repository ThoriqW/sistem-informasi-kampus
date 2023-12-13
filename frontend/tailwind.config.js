/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sub-font": "#6D7588",
        "white-color": "#FFFDFA",
        "primary-color": "#0EA861",
        "primary-gradient-color": "#1AC978",
        "secondary-color": "#EAEFF2",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

