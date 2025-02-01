"use client";
import type { AllResponse } from "@/types/Response";
import React, { Suspense, useState } from "react";
import { PiBrainBold } from "react-icons/pi";
import Predictor from "./Predictor";
import type { Calendar } from "@/types/Calendar";
import Loading from "@/components/States/Loading";

export default function Prediction({
	data,
	cal,
	calendar,
	subscribed
}: {
	data: AllResponse;
	cal: {
		date: string;
		month: number;
		order: string;
		dateObj: Date;
	}[];
	calendar: Calendar[];
	subscribed: boolean;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				type="button"
				className="p-1 rounded-lg transition-all duration-150 hover:bg-light-button dark:hover:bg-dark-button"
			>
				<PiBrainBold className="text-lg text-light-accent dark:text-dark-accent cursor-pointer" />
			</button>
			<Suspense fallback={<Loading size="xl" />}>
				<Predictor
					subscribed={subscribed}
					data={data}
					cal={cal}
					calendar={calendar}
					setIsOpen={setIsOpen}
					isOpen={isOpen}
				/>
			</Suspense>
		</>
	);
}
