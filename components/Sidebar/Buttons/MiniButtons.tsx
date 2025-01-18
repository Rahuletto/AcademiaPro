import React, { type ComponentProps, type ReactNode } from "react";
import type NextLink from "next/link";
import { Link } from "next-view-transitions";

export default function MiniButtons({
	icon,
	...props
}: ComponentProps<typeof NextLink> & {
	icon: ReactNode;
}) {
	return (
		<Link
			target="_blank"
			{...props}
			tabIndex={0}
			className={`text-md rounded-full p-2 opacity-60 transition duration-150 hover:bg-light-background-dark active:-rotate-45 dark:hover:bg-dark-background-dark ${props.className}`}
		>
			{icon}
		</Link>
	);
}
