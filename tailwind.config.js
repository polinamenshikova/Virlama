/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#2B2B2B",
          2: "#FFFFFF",
          3:  "#586544",
          4: "#B5B5B5",
          5: "#EBC9B9",
     
        },
        screens: {
          'lg-xl': { 'min': '1024px', 'max': '1279px' }, // Define the range
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#586544",
          2: "#E3B59F",
          3: "#2B2B2B",
          4: "#2B2B2B",
          5: "#EBC9B9",
          6: "F7E7E0",
          7: "#DBDED1",
          8: "#FBF9F7",
          9: "#FFFFFF",
          10: "#F7E7E0",
          11: "#EEEAE8",
          12: "#ffe9d1",
        },
      },
      fontFamily: {
        sans: ["var(--font-nanum)", ...fontFamily.sans],
        code: "var(--font-mulish)",
        allison: "var(--font-allison)",
        gistesy: "var(--font-gistesy)",
        logo: "var(--font-logo)"
      },
      gridTemplateColumns: {
        'custom-layout': '1fr auto 1fr',
      },
    },
  },
  plugins: [],
}

