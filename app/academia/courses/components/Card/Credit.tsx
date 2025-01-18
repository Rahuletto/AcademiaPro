import React from "react";

export default function Credit({
	credit,
	className,
}: { credit: number; className?: string }) {
	return (
		<h4
			title={`Credit: ${credit}`}
			aria-label={`Credit: ${credit}`}
			className={
				`${className} text-sm font-medium text-light-accent dark:text-dark-accent`
			}
		>
			Credit:{" "}
			<span
				className={`font-semibold ml-1 text-sm ${credit === 0 ? "" : "text-light-info-color dark:text-dark-info-color"}`}
			>
				{credit}
			</span>
		</h4>
	);
}
