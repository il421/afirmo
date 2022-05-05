module.exports = {
  plugins: [
    require("tailwindcss-animatecss")({
      classes: [
        "animate__animated",
        "animate__fadeIn",
        "animate__bounceIn",
        "animate__lightSpeedOut"
      ],
      settings: {
        animatedSpeed: 500,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ["responsive", "hover", "reduced-motion"]
    })
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./ui-components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins"]
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      blue: "#1d7be7",
      pink: "#fac7c7",
      gray: "#515151",
      red: "#ec4300"
    }
  }
};
