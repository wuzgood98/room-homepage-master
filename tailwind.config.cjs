/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* dark gray */
        darkGray: "hsl(0, 0%, 63%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      backgroundImage: {
        mobileOne: "./src/assets/images/mobile-image-hero-1.jpg",
        mobileTwo: "./src/assets/images/mobile-image-hero-2.jpg",
        mobileThree: "./src/assets/images/mobile-image-hero-3.jpg",
        desktopOne: "./src/assets/images/desktop-image-hero-1.jpg",
        desktopTwo: "./src/assets/images/desktop-image-hero-2.jpg",
        desktopThree: "./src/assets/images/desktop-image-hero-3.jpg",
      },
    },
  },
  plugins: [],
};
