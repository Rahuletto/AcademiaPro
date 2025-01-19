"use client";
import { Themes } from "@/misc/theme";
import React, {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const initialTheme = {
	theme: "dark",
	setTheme: (theme: string) => {},
};

const ThemeContext = createContext(initialTheme);
export function useTheme() {
	const { theme, setTheme } = useContext(ThemeContext);
	return { theme, setTheme };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState("");

	useEffect(() => {
		if (theme === "") return;
		const properties = Themes.find((t) => t.title === theme);
		const root = window.document.documentElement;
		localStorage.setItem("theme", theme);
		if (theme === "BW") {
			const dark = Themes.find((t) => t.title === "Dark");

			if (dark) {
				document.documentElement.classList.add("dark");
				document.documentElement.classList.remove("light");
				for (const [key, value] of Object.entries(dark.properties)) {
					root.style.setProperty(`--${key}`, value.toString());
				}
			}
			document.documentElement.style.filter = "grayscale(100%)";
		} else {
			document.documentElement.style.filter = "none";
			if (properties) {
				for (const [key, value] of Object.entries(properties.properties)) {
					root.style.setProperty(`--${key}`, value.toString());
				}
			}
		}

		if (properties?.mode === "dark") {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
		} else if (properties?.mode === "light") {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
		}

		if (properties?.mono) {
			document.documentElement.classList.add("mono");
		} else {
			document.documentElement.classList.remove("mono");
		}
	}, [theme]);

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}