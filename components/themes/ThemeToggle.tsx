"use client";
import { Themes } from "@/misc/theme";
import { useTheme } from "@/provider/ThemeProvider";
import { Link } from "next-view-transitions";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { BiBrush } from "react-icons/bi";

export default function ThemeToggle({
	className,
}: {
	className?: string;
}) {
	const { theme: actualtheme, setTheme } = useTheme();
	const [open, setOpen] = useState(false);
	const selectRef = React.useRef<HTMLSelectElement>(null);

	// Sort themes: "Light" and "Dark" first, followed by others in alphabetical order
	const sortedThemes = [
		...Themes.filter((theme) => theme.title === "Light" || theme.title === "Dark"),
		...Themes.filter((theme) => theme.title !== "Light" && theme.title !== "Dark").sort((a, b) =>
			a.title.localeCompare(b.title)
		),
	];

	const handleButtonClick = () => {
		setOpen((prev) => !prev);
		if (selectRef.current) {
			selectRef.current.focus();
			selectRef.current.size = sortedThemes.length;
		}
	};

	return (
		<>
			<div className={className ?? ""}>
				<div className="relative">
					<button
						type="button"
						onClick={handleButtonClick}
						title="Toggle Theme (Ctrl+Shift+P)"
						className={
							"text-md rounded-full p-2 opacity-60 transition duration-150 text-light-color dark:text-dark-color hover:bg-light-background-dark active:-rotate-45 dark:hover:bg-dark-background-dark"
						}
					>
						<BiBrush className="text-lg" />
					</button>
				</div>
			</div>
			{open &&
				createPortal(
					<div
						onClick={() => setOpen(false)}
						onKeyDown={(event) => {
							if (event.key === "Escape") {
								setOpen(false);
							}
						}}
						className="fixed transition-all duration-75 animate-fadeIn inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30 dark:bg-black/30"
					>
						<div
							onClick={(e) => {
								e.stopPropagation();
							}}
							onKeyDown={() => {}}
							className="relative max-h-[80vh] overflow-auto max-w-96 w-full rounded-3xl p-2 shadow-lg bg-light-background-normal dark:bg-dark-background-normal"
						>
							<ul
								className="p-1 text-sm text-light-color dark:text-dark-color flex flex-col gap-0.5"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="options-menu"
							>
								{Themes.sort((a, b) => {
									if (a.title === "Dark" || a.title === "Light") return -1;
									if (b.title === "Dark" || b.title === "Light") return 1;
									return a.title.localeCompare(b.title);
								}).map((theme) => (
									// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
									<li
										key={theme.title}
										className={`cursor-pointer flex items-center justify-start gap-5 select-none rounded-xl font-semibold relative py-2 pl-3 pr-9 hover:bg-light-input dark:hover:bg-dark-input ${actualtheme === theme.title ? "bg-light-input dark:bg-dark-input" : ""}`}
										onClick={() => {
											setTheme(theme.title);
										}}
									>
										<ColorPalette properties={theme.properties} /> {theme.title}
									</li>
								))}
								<Link
									href="https://github.com/rahuletto/classpro/blob/ssr/CONTRIBUTING.md#theming"
									target="_blank"
									className={
										"cursor-pointer flex bg-light-accent dark:bg-dark-accent items-center justify-start gap-5 select-none rounded-xl font-semibold relative py-2 mt-4 px-6 text-light-background-light dark:text-dark-background-darker"
									}
								>
									Bring your theme
								</Link>
							</ul>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}

function ColorPalette({
	properties,
}: {
	properties: Record<string, string>;
}) {
	return (
		<div className="flex gap-1 rounded-full p-0.5 bg-black/10 dark:bg-white/10">
			{["background-normal", "background-light", "accent", "color"].map(
				(key, index) => (
					<div
						key={key}
						className={"w-4 h-4  rounded-lg"}
						style={{
							backgroundColor: `rgb(${properties[key]})`,
							marginLeft: index !== 0 ? "-8px" : "0px",
						}}
					/>
				),
			)}
		</div>
	);
}
