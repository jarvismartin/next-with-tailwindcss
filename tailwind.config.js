/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#70C4BB",
        purple: "#C985FF",
        blue: "#5B8AF0",
        orange: "#EB8F24",
        lightgray: "#9DA7BE",
      },
    },
  },
  plugins: [],
};
