/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chonburi: ["Chonburi", "sans-serif"],
        noto: ["Noto Sans Thai Looped" ,"Sans-serif"],
        Prompt: ["Prompt", "sans-serif"]
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};