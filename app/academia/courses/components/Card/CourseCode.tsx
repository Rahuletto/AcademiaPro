import React from "react";

export default function CourseCode({
	code,
	className = "",
}: { code: string; className?: string }) {
	return (
		<span
			title={code}
			aria-hidden
			className={`${className} rounded-full bg-light-color px-3 py-0.5 text-sm font-semibold text-light-background-light opacity-80 dark:bg-dark-color dark:text-dark-background-darker`}
		>
			{code}
		</span>
	);
}
