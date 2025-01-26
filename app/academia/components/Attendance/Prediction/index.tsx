"use client";
import type { AllResponse } from "@/types/Response";
import React, { useEffect, useState } from "react";
import { PiBrainBold } from "react-icons/pi";
import Predictor from "./Predictor";
import type { Calendar } from "@/types/Calendar";
import { createPortal } from "react-dom";
import type { CategorizedDateRange } from "@/types/Attendance";

export default function Prediction({
	data,
	cal,
	calendar,
}: {
	data: AllResponse;
	cal: {
		date: string;
		month: number;
		order: string;
		dateObj: Date;
	}[];
	calendar: Calendar[];
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [titleSuffix, setTitleSuffix] = useState<HTMLDivElement | null>(null);
	const [categorizedRanges, setCategorizedRanges] = useState<CategorizedDateRange[]>([]);

	useEffect(() => {
		setTitleSuffix(document.getElementById("attendance-title-suffix") as HTMLDivElement);
	}, []);

	return (
		<>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				type="button"
				className="p-1 rounded-lg transition-all duration-150 hover:bg-light-button dark:hover:bg-dark-button"
			>
				<PiBrainBold className="text-lg text-light-accent dark:text-dark-accent cursor-pointer" />
			</button>
			<Predictor
				data={data}
				cal={cal}
				calendar={calendar}
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				categorizedRanges={categorizedRanges}
				setCategorizedRanges={setCategorizedRanges}
			/>
			{titleSuffix && createPortal(
				categorizedRanges.length > 0 && (
					<span className="text-2xl font-semibold">
						- Predicted
					</span>
				),
				titleSuffix
			)}
		</>
	);
}
