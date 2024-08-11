import type { Config } from "tailwindcss";
import { Themes } from "./misc/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
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
      gridTemplateColumns: {
        marks: "repeat(auto-fill, minmax(18rem, 1fr))",
      },
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
        fastfade: "fadeIn 0.1s ease-in forwards",
        fadeOut: "fadeOut 0.4s ease-in-out forwards",
      },
      colors: {
        ...(Themes as any),
      },
      backgroundColor: {
        ...(Themes as any),
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
};
export default config;
