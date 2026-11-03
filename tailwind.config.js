export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#252632", purple: "#8055F5", blue: "#387DEB",
        lavender: "#F5F3FC", mist: "#D9D7E8",
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', '"Noto Sans Devanagari"', "system-ui", "sans-serif"] },
      backgroundImage: { brand: "linear-gradient(90deg,#8055F5,#387DEB)" },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } } },
      animation: { float: "float 5s ease-in-out infinite" },
    },
  },
  plugins: [],
};
