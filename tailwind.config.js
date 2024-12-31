/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", 
        secondary: "#9333EA", 
      },
      boxShadow: {
        custom: "0px 10px 30px rgba(0, 0, 0, 0.1)", 
        "purple-glow": "0 4px 30px rgba(147, 51, 234, 0.5)", 
      },
      animation: {
        gradient: "gradient 5s ease infinite", 
        bounceSlow: "bounce 2s infinite", 
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
