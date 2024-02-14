/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-text": "#868D96",
        DEFAULT: "#E7EDF2",
        "header-bg": "#1F2937",
        "bg-color": "#171B21",
        "border-color": "#31363C",
      },
    },
  },
  plugins: [],
};
