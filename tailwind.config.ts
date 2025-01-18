import type { Config } from "tailwindcss";
import { Themes } from "./misc/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector", // Custom dark mode
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
        marks: "repeat(auto-fill, minmax(18rem, 1fr))", // Custom column grid
      },
      keyframes: {
        textPopUp: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        textSlideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        textSlideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        textSlideLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        textSlideRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        expandHeight: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shrink: {
          "0%": { width: "99vw", height: "99vh" },
          "100%": { width: "80vw", height: "80vh" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out forwards",
        fastfade: "fadeIn 0.1s ease-in forwards",
        shimmer: "shimmer 2s infinite linear",
        fadeOut: "fadeOut 0.4s ease-in-out forwards",
        slowSpin: "spin 5s linear infinite",
        expandHeight: "expandHeight 0.5s ease-in-out forwards",
        "slide-right": "slideRight 0.5s ease-in-out forwards",
        "slide-left": "slideLeft 0.5s ease-in-out forwards",
        "text-pop-up": "textPopUp 0.5s ease-in-out forwards",
        "text-slide-up":
          "textSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "text-slide-down": "textSlideDown 0.5s ease-in-out forwards",
        "text-slide-left": "textSlideLeft 0.5s ease-in-out forwards",
        "text-slide-right": "textSlideRight 0.5s ease-in-out forwards",
        shrink: "shrink 1s ease forwards",
      },
      colors: {
        theory: "rgb(var(--theory))",
        practical: "rgb(var(--practical))",
        light: {
          theory: "rgb(var(--theory))",
          practical: "rgb(var(--practical))",
          background: {
            normal: "rgb(var(--background-normal))",
            light: "rgb(var(--background-light))",
            dark: "rgb(var(--background-dark))",
            darker: "rgb(var(--background-darker))",
          },
          input: "rgb(var(--input))",
          button: "rgb(var(--button))",
          side: "rgb(var(--side))",
          accent: "rgb(var(--accent))",
          color: "rgb(var(--color))",
          error: {
            background: "rgb(var(--error-background))",
            color: "rgb(var(--error-color))",
          },
          warn: {
            background: "rgb(var(--warn-background))",
            color: "rgb(var(--warn-color))",
          },
          success: {
            background: "rgb(var(--success-background))",
            color: "rgb(var(--success-color))",
          },
          info: {
            background: "rgb(var(--info-background))",
            color: "rgb(var(--info-color))",
          },
        },
        dark: {
          theory: "rgb(var(--theory))",
          practical: "rgb(var(--practical))",
          background: {
            normal: "rgb(var(--background-normal))",
            light: "rgb(var(--background-light))",
            dark: "rgb(var(--background-dark))",
            darker: "rgb(var(--background-darker))",
          },
          input: "rgb(var(--input))",
          button: "rgb(var(--button))",
          side: "rgb(var(--side))",
          accent: "rgb(var(--accent))",
          color: "rgb(var(--color))",
          error: {
            background: "rgb(var(--error-background))",
            color: "rgb(var(--error-color))",
          },
          warn: {
            background: "rgb(var(--warn-background))",
            color: "rgb(var(--warn-color))",
          },
          success: {
            background: "rgb(var(--success-background))",
            color: "rgb(var(--success-color))",
          },
          info: {
            background: "rgb(var(--info-background))",
            color: "rgb(var(--info-color))",
          },
        }
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Custom easing
      },
    },
  },
  plugins: [], // Add Tailwind plugins here if needed
};
export default config;
