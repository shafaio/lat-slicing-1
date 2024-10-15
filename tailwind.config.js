import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: "1130px",
        },
      },
      colors: {
        primary: "#5313CA",
        secondary: "#FF9736",
        tertiary: "#75F1F1",
        black: "#050729",
      },
      fontFamily: {
        clash: ["Clash Display"],
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      boxShadow: {
        custom: "0 0 50px -2px rgba(5, 7, 41, 0.11)",
      },
    },
  },
  plugins: [],
};
