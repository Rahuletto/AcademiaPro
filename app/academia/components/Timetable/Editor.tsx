import type { Schedule } from "@/types/Timetable";
import type React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function OptionalHours({
	optionals,
	setOptionals,
	timetable,
}: {
	optionals: string[];
	setOptionals: React.Dispatch<React.SetStateAction<string[]>>;
	timetable: Schedule[];
}) {
	const handleDayChange = (index: number, day: string) => {
		const [, hourSlot] = optionals[index].split("-");
		const newOptionals = [...optionals];
		newOptionals[index] = `${day}-${hourSlot}`;
		setOptionals(newOptionals);
	};

	const handleHourChange = (index: number, hour: string) => {
		const [dayorder, _] = optionals[index].split("-");
		const newOptionals = [...optionals];
		newOptionals[index] = `${dayorder}-${hour}`;
		setOptionals(newOptionals);
	};

	return (
		<div className="flex flex-col gap-4 w-full items-start justify-center">
			{optionals.map((hour, i) => {
				const [dayorder, hourSlot] = hour.split("-");

				return (
					<div
						key={i}
						className="flex items-start flex-col lg:flex-row justify-start gap-2 "
					>
						<div className="flex items-center flex-row-reverse lg:flex-row justify-start gap-2 ">
							<button
								type="button"
								className="aspect-square bg-light-error-background dark:bg-dark-error-background text-light-error-color dark:text-dark-error-color rounded-lg p-2"
								onClick={() => {
									const newOptionals = optionals.filter(
										(_, index) => index !== i,
									);
									setOptionals(newOptionals);
								}}
							>
								<FaTrashAlt />
							</button>

							<select
								className="text-base font-normal bg-light-input dark:bg-dark-input p-2 px-3 rounded-lg"
								value={dayorder}
								onChange={(e) => handleDayChange(i, e.target.value)}
							>
								{[...Array(5)].map((_, index) => (
									<option
										key={index}
										value={`D${index + 1}`}
									>{`Day ${index + 1}`}</option>
								))}
							</select>
						</div>
						<select
							className="text-base font-normal bg-light-input dark:bg-dark-input p-2 px-3 rounded-lg max-w-[250px] truncate"
							value={hourSlot}
							onChange={(e) => handleHourChange(i, e.target.value)}
						>
							{timetable[
								Number(optionals[i].split("-")[0].replace("D", "")) - 1
							].table.map(
								(slot, index) =>
									slot && (
										<option
											key={index}
											disabled={!slot}
											value={`H${index + 1}`}
											className="truncate"
										>
											{slot?.name || `Hour ${index + 1}`}
										</option>
									),
							)}
						</select>
					</div>
				);
			})}
			<button
				type="button"
				className="bg-light-accent dark:bg-dark-accent text-light-background-light dark:text-dark-background-dark rounded-xl p-2 px-4 w-fit font-semibold mt-2"
				onClick={() => setOptionals([...optionals, "D1-H1"])}
			>
				Add Field
			</button>
		</div>
	);
}

export default function Editor({
	timetable,
	ophours,
}: { timetable: Schedule[]; ophours: string[] }) {
	const [optionals, setOptionals] = useState(ophours);
	return (
		<div className="w-full flex mt-6 left-0 items-center justify-center px-4 absolute z-20">
			<div className="bg-light-background-normal dark:bg-dark-background-normal shadow-lg text-light-color dark:text-dark-color rounded-2xl p-4 px-6 min-w-[300px] max-w-[450px] w-full">
				<h2 className="text-xl font-medium">Optional hours</h2>
				<p className="text-sm font-normal opacity-60 mb-6">
					Set optional hours so you don&apos;t have to confuse yourself for
					timetable
				</p>
				<OptionalHours
					optionals={optionals}
					setOptionals={setOptionals}
					timetable={timetable}
				/>
			</div>
		</div>
	);
}
