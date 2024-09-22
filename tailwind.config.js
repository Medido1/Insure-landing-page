/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DMSerif": ["DM Serif Display", "serif"],
        "Karla": ["Karla", "sans-serif"],
      },
      colors: {
        // Primary Colors
        DarkViolet: "hsl(256, 26%, 20%)",
        GrayishBlue: "hsl(216, 30%, 68%)",
        
        // Neutral Colors
        VeryDarkViolet: "hsl(270, 9%, 17%)",
        DarkGrayishViolet: "hsl(273, 4%, 51%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      backgroundImage : {
        "navMenu" : "url('./src/assets/images/bg-pattern-mobile-nav.svg')",
        "mobileIntroLeft": "url('./src/assets/images/bg-pattern-intro-left-mobile.svg')",
        "mobileIntroRight": "url('./src/assets/images/bg-pattern-intro-right-mobile.svg')",
      }
    }
  },
  plugins: [],
}
