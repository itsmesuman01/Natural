/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-30px)",
          },
          "60%": {
            transform: "translateY(-15px)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLoading: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeftToRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRightToLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // FOR LOADER
        dots: {
          "0%": {
            content: '"."',
          },
          "33%": {
            content: '".."',
          },
          "66%": {
            content: '"..."',
          },
          "100%": {
            content: '"."',
          },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        fadeIn: "fadeIn 2s ease-in-out",
        fadeInLoading: "fadeIn 4s ease-in-out",
        fadeInLeftToRight: "fadeInLeftToRight 1s ease-in-out",
        fadeInRightToLeft: "fadeInRightToLeft 2s ease-in-out",
        spin: "spin 1s linear infinite",
        dots: "dots 1.5s steps(3, end) infinite",
      },
    },
  },
  plugins: [],
};
