"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const initialTheme = {
  isDark: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialTheme);
export function useTheme() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return { isDark, toggleTheme };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(initialTheme.isDark);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (
      localStorage.getItem("theme") === "light" ||
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDark(event.matches);
      });
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const props = useMemo(() => {
    const toggleTheme = () => {
      setIsDark(!isDark);
    };
    return { isDark, toggleTheme };
  }, [isDark]);

  return (
    <ThemeContext.Provider value={props}>{children}</ThemeContext.Provider>
  );
}
