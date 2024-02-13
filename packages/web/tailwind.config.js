/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-text": "#868D96",
        DEFAULT: "#e7edf2",
        "header-bg": "#1f2937",
        "bg-color": "#171b21",
      },
    },
  },
  plugins: [],
};
