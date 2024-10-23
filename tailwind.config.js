/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        main: ["Bebas Neue"],
        sub: ["Spectral"],
      },
      colors: {
        "dark-gray": "#353535",
      },
      backgroundImage: {
        "hero-mobile-background": "url('/src/assests/Image/hero-mobile.jpg')",
        "hero-tab-background": "url('/src/assests/Image/hero-tab.jpg')",
        "hero-desktop-background": "url('/src/assests/Image/hero.jpg')",
      },
      keyframes: {
        roll: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveInLeft: {
          "0% ": { transform: "translateX(-100px)", opacity: 0 },
          "60%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        moveInTop: {
          "0%": { transform: "translateY(-100px)", opacity: 0 },
          "60%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        moveInRight: {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "60%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        moveInBottom: {
          "0%": { transform: "translateY(3rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        ping: {
          "75%": { transform: "scale(1.1)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 0 },
        },
        fadeInGradient: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        buttonHover: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        textShadowPulse: {
          "0%": { textShadow: "0 0 0 rgba(0, 0, 0, 0)" },
          "50%": { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" },
          "100%": { textShadow: "0 0 0 rgba(0, 0, 0, 0)" },
        },
        backgroundZoom: {
          "0%": { backgroundSize: "100%" },
          "100%": { backgroundSize: "105%" },
        },
        gradientPulse: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        flipInY: {
          "0%": { opacity: 0, transform: "rotateY(-90deg)" },
          "100%": { opacity: 1, transform: "rotateY(0deg)" },
        },
        flipOutY: {
          "0%": { opacity: 1, transform: "rotateY(0deg)" },
          "100%": { opacity: 0, transform: "rotateY(90deg)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 2s ease-out",
        moveInLeft: "moveInLeft 2s ease-out",
        moveInRight: "moveInRight 2s ease-out",
        moveInBottom: "moveInBottom 2s ease-out",
        moveInTop: "moveInTop 2s ease-out",
        animatePing: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        backgroundZoom: "backgroundZoom 30s infinite alternate",
        gradientPulse: "gradientPulse 15s linear infinite",
        roll: "roll 2s ease-in-out forwards",
        flipInY: "flipInY 0.3s forwards",
        flipOutY: "flipOutY 0.3s forwards",
      },
    },
  },
  plugins: [],
};
