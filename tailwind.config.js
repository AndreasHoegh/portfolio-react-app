/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      colors: {
        customPurple: "#0000FF",
      },
    },
  },
  plugins: [],
};
