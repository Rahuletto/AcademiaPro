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
  setBw: () => {},
};

const ThemeContext = createContext(initialTheme);
export function useTheme() {
  const { isDark, toggleTheme, setBw } = useContext(ThemeContext);
  return { isDark, toggleTheme, setBw };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [bw, setBlackAndWhite] = useState(false);

  useEffect(() => {
    const isStored = localStorage.getItem("theme");
    if (localStorage.getItem("theme") === "bw") {
      document.documentElement.classList.add("bw");
    } else if (
      localStorage.getItem("theme") === "dark" ||
      (!isStored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (
      localStorage.getItem("theme") === "light" ||
      (!isStored && window.matchMedia("(prefers-color-scheme: light)").matches)
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
    if (bw) {
      document.documentElement.classList.add("bw");
      localStorage.setItem("theme", "bw");
    }
  }, [bw]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("bw");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (isDark === false) {
      document.documentElement.classList.remove("bw");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const props = useMemo(() => {
    const toggleTheme = () => {
      setIsDark(!isDark);
    };
    const setBw = () => {
      setBlackAndWhite((prev) => !prev);
    };
    return { isDark: isDark || false, toggleTheme, setBw };
  }, [isDark]);

  return (
    <ThemeContext.Provider value={props}>{children}</ThemeContext.Provider>
  );
}
