module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        serif: ["Volkhov", "serif"],
      },
    },
  },
  plugins: [],

  theme: {
    extend: {
      screens: {
        sm: "640px",
      },
      colors: {
        "whatsapp-green": "#25d366",
        ascent: "#8b5cf6 ",
        primary: "#F65E21",
        accent_1: "E6A559",
        primary_1: "#FFB85F",
        text: "#232323",
        textwhite: "#F7F7F7",
        textblackblue: "#181E41",
        cta1: "rgba(246, 94, 33, 0.2)",
        bg: "#F76E11",
      },

      boxShadow: {
        floating:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        shadowfeature:
          "0px 0px 4px 0px rgba(0,0,0,0.2),0px 0px 4px 0px rgba(0,0,0,0.2),0px 0px 4px 0px rgba(0,0,0,0.2)",
      },
      transform: {
        gpu: "translateZ(0)",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        infiniteslider: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  variants: { animation: ["motion-safe"] },
  plugins: [],
};
