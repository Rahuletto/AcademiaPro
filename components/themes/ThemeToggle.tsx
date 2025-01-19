"use client";
import { Themes } from "@/misc/theme";
import { useTheme } from "@/provider/ThemeProvider";
import React, { useState } from "react";
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
				{open && (
					<div className="absolute z-50 mt-2 w-32 top-8 right-0 rounded-lg shadow-lg bg-light-background-light dark:bg-dark-background-darker">
						<ul
							className="p-1 text-sm text-light-color dark:text-dark-color flex flex-col gap-0.5"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="options-menu"
						>
							{sortedThemes.map((theme) => (
								<li
									key={theme.title}
									className={`cursor-pointer select-none rounded-lg font-semibold relative py-2 pl-3 pr-9 hover:bg-light-input dark:hover:bg-dark-input ${actualtheme === theme.title ? "bg-light-input dark:bg-dark-input" : ""}`}
									onClick={() => {
										setTheme(theme.title);
										setOpen(false);
									}}
								>
									{theme.title}
								</li>
							))}
							<li
								key={"BW"}
								className={`cursor-pointer select-none rounded-lg font-semibold relative py-2 pl-3 pr-9 hover:bg-light-input dark:hover:bg-dark-input ${actualtheme === "BW" ? "bg-light-input dark:bg-dark-input" : ""}`}
								onClick={() => {
									setTheme("BW");
									setOpen(false);
								}}
							>
								Batman
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
