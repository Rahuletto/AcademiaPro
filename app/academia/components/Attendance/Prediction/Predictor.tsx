import type { AllResponse } from "@/types/Response";
import React, {
	type Dispatch,
	type SetStateAction,
	Suspense,
	useEffect,
	useRef,
	useState,
} from "react";
import { LeaveODRangeCalendar } from "./RangeCalendar";
import type {
	AttendanceCourse,
	CategorizedDateRange,
} from "@/types/Attendance";
import List from "../List";
import { predictAttendance } from "./computePrediction";
import type { Calendar } from "@/types/Calendar";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import Loading from "@/components/States/Loading";

export default function Predictor({
	data,
	cal,
	calendar,
	setIsOpen,
	isOpen,
}: {
	data: AllResponse;
	calendar: Calendar[];
	cal: {
		date: string;
		month: number;
		order: string;
		dateObj: Date;
	}[];
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
}) {
	function onClose() {
		setIsOpen(false);
	}
	const original = data?.attendance?.attendance;
	const [attendance, setAttendance] = useState<AttendanceCourse[]>(original);
	const [categorizedDateRanges, setCategorizedDateRanges] = useState<
		CategorizedDateRange[]
	>([]);

	const [priority, setPriority] = useState<AttendanceCourse[] | undefined>([]);
	const [remaining, setRemaining] = useState<AttendanceCourse[] | undefined>(
		[],
	);

	const predictWindow = useRef<HTMLDivElement>(null);
	const list = useRef<HTMLDivElement>(null);

	useEffect(() => {
		predictWindow.current = document.getElementById(
			"attendance-predict",
		) as HTMLDivElement;

		list.current = document.getElementById("attendance-list") as HTMLDivElement;

		return () => {
			list.current = null;
			predictWindow.current = null;
		};
	}, []);

	useEffect(() => {
		if (categorizedDateRanges?.[0]) {
			const att = predictAttendance(
				original,
				data.timetable.schedule,
				cal,
				categorizedDateRanges,
			);

			setAttendance(att);
		} else {
			setAttendance(original);
		}
	}, [categorizedDateRanges, original]);

	useEffect(() => {
		if (attendance) {
			setPriority(
				attendance.filter(
					(course) => Number(course.attendancePercentage?.split(".")[0]) <= 75,
				) || [],
			);

			setRemaining(
				attendance.filter(
					(course) => Number(course.attendancePercentage?.split(".")[0]) > 75,
				) || [],
			);
		} else {
			setPriority([]);
			setRemaining([]);
		}
	}, [attendance]);

	return (
		<>
			{predictWindow.current &&
				isOpen &&
				createPortal(
					<div
						role="button"
						tabIndex={0}
						className="fixed inset-0 z-50 flex animate-fastfade items-center justify-center bg-black/50 backdrop-blur-xs transition duration-150"
						onKeyDown={(e) => {
							if (e.key === "Escape") onClose();
						}}
						onClick={onClose}
					>
						<div
							role="button"
							tabIndex={-1}
							onKeyDown={() => {}}
							onClick={(e) => {
								e.stopPropagation();
							}}
							className="w-[600px] max-h-[90vh] cursor-default rounded-2xl bg-light-background-normal p-1 text-white shadow-lg dark:bg-dark-background-normal"
						>
							<div className="flex mb-6 justify-between items-center p-3 pb-0">
								<div>
									<h2 className="text-2xl font-semibold capitalize text-light-color dark:text-dark-color">
										Predict Attendance
									</h2>
									<p className=" text-xs font-medium text-light-accent opacity-80 max-w-[90%] dark:text-dark-accent">
										Let&apos;s you predict the percentages with leaves and ODs
									</p>
								</div>

								<div className="flex flex-row-reverse gap-3 items-center justify-center">
									<button
										title="Close"
										aria-label="Close"
										type="button"
										onClick={onClose}
										className="rounded-full border-2 border-light-error-color bg-light-error-background p-2 text-lg text-light-error-color dark:border-dark-error-color dark:bg-dark-error-background dark:text-dark-error-color"
									>
										<FaXmark />
									</button>
								</div>
							</div>
							<Suspense fallback={<Loading size="xl" />}>
								<LeaveODRangeCalendar
									categorizedRanges={categorizedDateRanges}
									setCategorizedRanges={setCategorizedDateRanges}
									calendar={calendar}
								/>
							</Suspense>
						</div>
					</div>,
					predictWindow.current,
				)}
			{list.current &&
				createPortal(
					<div className="flex justify-center flex-col mt-4">
						{priority?.[0] && (
							<div className="-m-1 rounded-xl border-2 border-dashed p-1 border-light-info-color dark:border-dark-info-color bg-light-info-background dark:bg-dark-info-background">
								<p className="font-mono text-light-info-color dark:text-dark-info-color font-semibold pl-2 text-xs mb-2">
									Priority
								</p>
								<List list={priority} continuous />
							</div>
						)}

						{remaining?.[0] && (
							<div className="my-4">
								<List list={remaining} />
							</div>
						)}
					</div>,
					list.current,
				)}
		</>
	);
}
