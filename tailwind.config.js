/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundDark: "var(--background-dark)",
        backgroundDarker: "var(--background-darker)",
        backgroundLight: "var(--background-light)",
        buttons: "var(--buttons)",
        sideActive: "var(--side-active)",
        accent: "var(--accent)",
        theory: "var(--theory)",
        yellow: "var(--yellow)",
        practical: "var(--practical)",
        green: "var(--green)",
        red: "var(--red)",
        color: "var(--color)",
        yellowLight: "#ffca630e",
      },
    },
  },
  plugins: [],
};
