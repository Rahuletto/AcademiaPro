"use client";
import React, { useEffect, useRef, useState } from "react";
import type { Schedule } from "@/types/Timetable";
import { TbPencil } from "react-icons/tb";
import { createPortal } from "react-dom";
import OptionalEditor from "./OptionalEditor";

export default function EditTimetable({
	timetable,
	ophours,
}: { timetable: Schedule[]; ophours: string[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const editBox = useRef<HTMLDivElement>(null);

	useEffect(() => {
		editBox.current = document.getElementById(
			"edit-timetable",
		) as HTMLDivElement;

		return () => {
			editBox.current = null;
		};
	}, []);

	useEffect(() => {
		if (isOpen && editBox.current) {
			editBox.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [isOpen, editBox]);

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="p-1 rounded-lg transition-all duration-150 hover:bg-light-button dark:hover:bg-dark-button"
			>
				<TbPencil className="text-lg text-light-accent dark:text-dark-accent cursor-pointer" />
			</button>
			{editBox.current &&
				isOpen &&
				createPortal(
					<OptionalEditor
						timetable={timetable}
						ophours={ophours[ophours.length - 1] === "" ? [] : ophours}
					/>,
					editBox.current,
				)}
		</>
	);
}
