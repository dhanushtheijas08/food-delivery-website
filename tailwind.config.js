/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeLight: "#fdf2e9",
        orangeDark: "#e67e22",
        btnHover: "#cf711f",
        textLigth: "#555",
        textDark: "#333",
        grayLight: "#ddd",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [],
};
