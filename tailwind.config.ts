import type { Config } from "tailwindcss";
import { Themes } from "./theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
    },
    fontWeight: {
      normal: "500",
      medium: "500",
      semibold: "600",
      bold: "700",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out forwards",
        fadeOut: "fadeOut 0.4s ease-in-out forwards",
      },
      colors: {
        background: "var(--background)",
        backgroundDark: "var(--background-dark)",
        backgroundDarker: "var(--background-darker)",
        backgroundLight: "var(--background-light)",
        buttons: "var(--buttons)",
        sideActive: "var(--side-active)",
        accent: "var(--accent)",
        theory: "var(--theory)",
        theoryLight: "#f3d86a1a",
        yellow: "var(--yellow)",
        practical: "var(--practical)",
        practicalLight: "#70fa701a",
        green: "var(--green)",
        red: "var(--red)",
        color: "var(--color)",
        yellowLight: "#ffca630e",
        ...(Themes as any),
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
  plugins: [],
};
export default config;
