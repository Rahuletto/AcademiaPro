import { useTheme } from "@/provider/ThemeProvider";
import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
    const {isDark, toggleTheme} = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="active:-rotate-45 text-md rounded-full p-2 opacity-60 transition duration-200 hover:bg-light-background-dark dark:hover:bg-dark-background-dark"
    >
      {isDark ? <LuMoon /> : <LuSun />}
    </button>
  );
}
