"use client";
import { Themes } from "@/misc/theme";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

const initialTheme = {
    theme: "dark",
    setTheme: (theme: string) => { },
};

const ThemeContext = createContext(initialTheme);
export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    return { theme, setTheme };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if(theme === "") return;
        const root = window.document.documentElement;
        localStorage.setItem("theme", theme);
        if (theme === 'BW') {
            const properties = Themes.find(t => t.title === 'Dark')
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            if (properties) {
                Object.entries(properties.properties).forEach(([key, value]) => {
                    root.style.setProperty(`--${key}`, value.toString());
                });
            }
            document.documentElement.style.filter = 'grayscale(100%)';
        } else {
            document.documentElement.style.filter = 'none';
            const properties = Themes.find(t => t.title === theme)
            if (properties) {
                Object.entries(properties.properties).forEach(([key, value]) => {
                    root.style.setProperty(`--${key}`, value.toString());
                });
            }
        }

        if (theme === "Dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else if (theme === "Light") {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }

    }, [theme]);

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme);
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    );
}
