import React from "react";

export default function Indicator({
	type,
	extended,
	separator,
}: {
	type: "Practical" | "Theory" | "Lab";
	extended?: boolean;
	separator?: boolean;
}) {
	return separator ? (
		<div
			className="ml-3 flex w-full max-w-[97%] select-none items-center gap-3"
			aria-hidden="true"
			style={{ WebkitUserSelect: "none" }}
		>
			<span
				className={`flex items-start justify-start rounded-full text-xs font-semibold ${type === "Practical" || type === "Lab" ? "text-light-success-color dark:text-practical" : "text-light-warn-color dark:text-theory"}`}
			>
				{type}
			</span>
			<hr
				className={` ${type == "Theory" ? "border-theory" : "border-practical"} w-full opacity-40`}
				style={{
					borderColor:
						type === "Practical" || type === "Lab" ? "#6AE069" : "#F2D869",
				}}
			/>
		</div>
	) : (
		<span
			title={type}
			aria-label={type}
			aria-hidden="true"
			style={{ WebkitUserSelect: "none" }}
			className={`${extended ? "px-2 py-0.5" : "max-h-5 min-h-5 min-w-5 max-w-5 p-1"} flex scale-90 select-none items-center justify-center rounded-full text-xs font-semibold ${type === "Practical" || type === "Lab" ? "bg-light-success-background text-light-success-color dark:bg-dark-success-background dark:text-practical" : "bg-light-warn-background text-light-warn-color dark:bg-dark-warn-background dark:text-theory"}`}
		>
			{extended
				? type === "Practical" || type === "Lab"
					? "Practical"
					: "Theory"
				: type === "Practical" || type === "Lab"
					? "P"
					: "T"}
		</span>
	);
}
