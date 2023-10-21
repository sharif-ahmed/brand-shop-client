/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgReview: "url('./assets/img/homeReviews.jpg')",
        chevronDown: "url('./assets/img/chevron-down.png')",
        bannerBg: "url('./assets/img/1.jpg')",
        borderDownBg: "url('./assets/img/chevron_down.png')",
        bannerBG_With_Overlay:
          "linear-gradient(rgba(17, 17, 17, 0.01),rgba(17, 17, 17, 0.1)), url(./assets/img/1.jpg)",
        bgOverlay:
          "linear-gradient(rgba(17, 17, 17, 0.08),rgba(17, 17, 17, 0.6))",
      },
    },
  },
  plugins: [require("daisyui")],
};
