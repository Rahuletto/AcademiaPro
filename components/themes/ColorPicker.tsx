"use client";

import React, { useEffect, useState } from "react";
import { Themes } from "@/misc/theme";
import { HiColorSwatch } from "react-icons/hi";
import { HexColorPicker } from "react-colorful";
import { rgbToHex, hexToRgb } from "@/utils/color";
import { useTheme } from "@/provider/ThemeProvider";
import { IoCloseCircle } from "react-icons/io5";

const ColorPicker = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { theme } = useTheme();
	const [colorInputs, setColorInputs] = useState<Record<string, string>>({});
	const [activeColor, setActiveColor] = useState({ key: "", value: "" });
	const [selectedTheme, setSelectedTheme] = useState<any>(null);
	const [showDialog, setShowDialog] = useState(false);

	useEffect(() => {
		const selectedTheme = Themes.find((t) => t.title === theme) ?? Themes[0];
		setSelectedTheme(selectedTheme);
	}, [theme]);

	useEffect(() => {
		if (!selectedTheme) return;
		const initialInputs: Record<string, string> = {};
		for (const [key, value] of Object.entries(selectedTheme.properties)) {
			if (!value) return;
			initialInputs[key] = (value as string)
				.split(",")
				.map((v) => v.trim())
				.join(" ");
		}

		setColorInputs(initialInputs);
	}, [selectedTheme]);

	const handleColorChange = (propertyName: string, value: string) => {
		const root = document.documentElement;
		root.style.setProperty(`--${propertyName}`, value);
	};

	const handleHexColorChange = (hex: string) => {
		if (!activeColor.key) return;
		const rgb = hexToRgb(hex);
		if (rgb) {
			const rgbStr = `${rgb.r} ${rgb.g} ${rgb.b}`;
			handleColorChange(activeColor.key, rgbStr);
			setSelectedTheme((prev: { properties: any }) => ({
				...prev,
				properties: {
					...prev.properties,
					[activeColor.key]: rgbStr,
				},
			}));
		}
	};

	return (
		<div className="fixed bottom-4 right-4 z-100">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="bg-light-warn-color dark:bg-dark-warn-color text-light-warn-background dark:text-dark-warn-background cursor-pointer p-3 rounded-full shadow-lg hover:opacity-80 transition-opacity"
			>
				<HiColorSwatch className="text-2xl" />
			</button>

			{isOpen && (
				<div className="absolute bottom-16 right-0 w-80 max-h-[80vh] overflow-y-auto bg-light-background-normal dark:bg-dark-background-normal rounded-2xl shadow-xl p-4 px-6">
					<h3 className="text-light-accent dark:text-dark-accent text-lg font-semibold mb-4">
						Theme Colors
					</h3>
					<div className="space-y-4 text-light-color dark:text-dark-color">
						{Object.entries(selectedTheme.properties).map(([key, value]) => (
							<div key={key} className="flex flex-col gap-2">
								{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
								<label className="text-sm font-medium capitalize">
									{key.replaceAll("-", " ")}
								</label>
								<div className="flex items-center gap-2">
									<input
										type="text"
										value={colorInputs[key] || ""}
										onChange={(e) => {
											const inputValue = e.target.value;

											// Update the input value immediately for editing
											setColorInputs((prev) => ({
												...prev,
												[key]: inputValue,
											}));

											// Validate and apply color if it matches RGB format
											const rgbRegex =
												/^\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})(?:\s*\/\s*(0|1|0\.\d+))?\s*$/;
											const match = inputValue.match(rgbRegex);

											if (match) {
												const [_, r, g, b, a] = match;
												if (
													Number(r) <= 255 &&
													Number(g) <= 255 &&
													Number(b) <= 255
												) {
													const rgbValue = `${r}, ${g}, ${b}`;
													handleColorChange(key, rgbValue);
													setSelectedTheme((prev: { properties: any }) => ({
														...prev,
														properties: {
															...prev.properties,
															[key]: rgbValue,
														},
													}));
												}
											}
										}}
										className="flex-1 bg-light-background-dark dark:bg-dark-background-dark rounded-sm px-2 py-1 text-sm"
									/>
									<button
										type="button"
										onClick={() => {
											const rgbValues = (value as string)
												.split(" ")
												.map((v) => Number.parseInt(v.trim()));
											setActiveColor({
												key,
												value: `${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}`,
											});
										}}
										className="w-8 h-8 rounded-lg border border-light-background-dark dark:border-dark-background-dark overflow-hidden"
									>
										<div
											className="w-full h-full"
											style={{ backgroundColor: `rgb(${value})` }}
										/>
									</button>
								</div>
							</div>
						))}
					</div>

					<button
						type="button"
						onClick={() => {
							const title = prompt("Enter theme title:");
							if (!title) return;
							selectedTheme.title = title;
							// setIsOpen(false);
							setShowDialog(true);
						}}
						className="w-full mt-4 bg-light-accent dark:bg-dark-accent text-light-background-light dark:text-dark-background-darker py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity"
					>
						Generate Theme
					</button>

					{showDialog && (
						<ThemeDialog
							themeConfig={{
								title: selectedTheme.title,
								mode: selectedTheme.mode,
								properties: selectedTheme.properties,
							}}
							onClose={() => setShowDialog(false)}
						/>
					)}
					{activeColor.key && (
						<div className="fixed bottom-20 right-86">
							<HexColorPicker
								color={rgbToHex(activeColor.value) ?? ""}
								onChange={handleHexColorChange}
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ColorPicker;

const ThemeDialog = ({
	themeConfig,
	onClose,
}: { themeConfig: any; onClose: () => void }) => (
	// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
	<div
		onClick={onClose}
		className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm"
	>
		{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
		<div
			onClick={(e) => e.stopPropagation()}
			className="relative max-w-2xl w-full bg-light-background-normal dark:bg-dark-background-normal rounded-3xl p-4 shadow-xl"
		>
			<h3 className="text-light-accent dark:text-dark-accent text-lg font-semibold mb-4">
				Theme Configuration
			</h3>
			<pre className="bg-light-background-dark dark:bg-dark-background-dark p-4 rounded-xl overflow-auto font-mono text-sm text-light-color dark:text-dark-color">
				{JSON.stringify(themeConfig, null, 2)}
			</pre>
			<button
				type="button"
				className="absolute top-4 right-4 hover:opacity-70 text-3xl text-light-error-color dark:text-dark-error-color"
				onClick={onClose}
			>
				<IoCloseCircle />
			</button>
		</div>
	</div>
);
