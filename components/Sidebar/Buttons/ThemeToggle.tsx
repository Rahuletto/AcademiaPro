import useLongPress from "@/hooks/useLongPress";
import { useTheme } from "@/provider/ThemeProvider";
import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { isDark, toggleTheme, setBw } = useTheme();
  const [onStart, onEnd] = useLongPress(() => {
    setBw();
  }, 1000);

  return (
    <button
      onClick={toggleTheme}
      onTouchStart={onStart}
      onTouchEnd={onEnd}
      onMouseDown={onStart}
      onMouseUp={onEnd}
      title="Toggle Theme (Ctrl+Shift+P)"
      className="text-md rounded-full p-2 opacity-60 transition duration-200 hover:bg-light-background-dark active:-rotate-45 dark:hover:bg-dark-background-dark"
    >
      {isDark ? <LuMoon /> : <LuSun />}
    </button>
  );
}
