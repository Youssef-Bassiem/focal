/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "900px",
        xl: "1080px",
      },
      fontFamily: {
        "zurich-extended": ["Zurich Extended", "sans-serif"],
      },
    },
  },
};
