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

	const generatePWAIcons = async (svgDoc: Document) => {
		const canvas = document.createElement('canvas');
		const sizes = [192, 384, 512];
		const icons = [];

		for (const size of sizes) {
			canvas.width = size;
			canvas.height = size;
			const ctx = canvas.getContext('2d');
			if (!ctx) continue;

			// Convert SVG to data URL
			const svgData = new XMLSerializer().serializeToString(svgDoc);
			const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
			const url = URL.createObjectURL(svgBlob);

			// Draw SVG to canvas
			const img = new Image();
			await new Promise((resolve) => {
				img.onload = resolve;
				img.src = url;
			});

			ctx.drawImage(img, 0, 0, size, size);
			URL.revokeObjectURL(url);

			// Convert canvas to blob
			const blob = await new Promise<Blob | null>(resolve => 
				canvas.toBlob(resolve, 'image/png')
			);
			if (!blob) continue;

			// Store icon data
			icons.push({
				src: URL.createObjectURL(blob),
				sizes: `${size}x${size}`,
				type: 'image/png'
			});
		}

		return icons;
	};

	const updateFavicon = async () => {
		try {
			const response = await fetch("/icons/icon.svg");
			const svgText = await response.text();

			const parser = new DOMParser();
			const svgDoc = parser.parseFromString(svgText, "image/svg+xml");

			const rect = svgDoc.querySelector("rect");
			const path = svgDoc.querySelector("path");

			if (rect && path) {
				const bgColor = getComputedStyle(document.documentElement)
					.getPropertyValue("--background-normal")
					.trim();
				const accentColor = getComputedStyle(document.documentElement)
					.getPropertyValue("--accent")
					.trim();

				rect.setAttribute("fill", `rgb(${bgColor})`);
				path.setAttribute("fill", `rgb(${accentColor})`);

				// Update favicon
				const svgData = new XMLSerializer().serializeToString(svgDoc);
				const faviconUrl = `data:image/svg+xml;base64,${btoa(svgData)}`;

				const link = (document.querySelector("link[rel*='icon']") ||
					document.createElement("link")) as HTMLLinkElement;
				link.type = "image/svg+xml";
				link.rel = "icon";
				link.href = faviconUrl;
				document.head.appendChild(link);

				// Generate and update PWA icons
				const icons = await generatePWAIcons(svgDoc);
				
				// Update manifest
				const manifestUpdate = {
					icons: icons.map(icon => ({
						src: icon.src,
						sizes: icon.sizes,
						type: icon.type,
						purpose: 'any maskable'
					}))
				};

				// If manifest exists, update it
				if ('serviceWorker' in navigator) {
					try {
						const registration = await navigator.serviceWorker.ready;
						if (registration.active) {
							registration.active.postMessage({
								type: 'UPDATE_MANIFEST',
								manifest: manifestUpdate
							});
						}
					} catch (error) {
						console.error('Error updating manifest:', error);
					}
				}
			}
		} catch (error) {
			console.error("Error updating icons:", error);
		}
	};

	useEffect(() => {
		if (theme === "") return;
		const properties = Themes.find((t) => t.title === theme);

		const root = window.document.documentElement;
		localStorage.setItem("theme", theme);
		if (theme === "Batman") {
			document.documentElement.style.filter = "grayscale(100%)";
		} else document.documentElement.style.filter = "none";

		if (properties) {
			for (const [key, value] of Object.entries(properties.properties)) {
				root.style.setProperty(`--${key}`, value.toString());
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

		// Update favicon after theme properties are set
		updateFavicon();
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
