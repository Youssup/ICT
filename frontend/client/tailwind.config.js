/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

