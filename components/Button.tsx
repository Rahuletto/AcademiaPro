import React, { ComponentProps } from "react";

export default function Button({
	children,
	...props
}: ComponentProps<"button">) {
	return (
		<button
			{...props}
			className={`${props.className?.includes("w-") ? "" : "w-fit"} px-4 py-2 rounded-xl font-medium transition-all duration-150 transform text-light-background-dark dark:bg-dark-accent bg-light-accent ${
				props.className
			} dark:text-dark-background-dark ${
				props.disabled
					? "opacity-70 cursor-not-allowed"
					: "hover:scale-95 active:scale-90 hover:shadow-lg hover:opacity-80"
			}`}
		>
			{children}
		</button>
	);
}
