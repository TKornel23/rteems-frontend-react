/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'dashboardwhite': "url('src/assets/images/background.svg')"
      },
    },
  },
  plugins: [],
}

