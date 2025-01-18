import React, { type ComponentProps } from "react";
import { Link as Alink } from "next-view-transitions";
import type NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({
	children,
	...props
}: ComponentProps<typeof NextLink>) {
	const pathname = usePathname();
	return (
		<Alink
			tabIndex={0}
			{...props}
			className={`font-semibold  ${props.href === pathname ? "bg-light-side text-light-accent dark:bg-dark-side dark:text-dark-accent" : props.className ? props.className : "hover:bg-light-side hover:text-light-accent hover:opacity-70 dark:hover:bg-dark-side dark:hover:text-dark-accent"} text-color flex flex-row-reverse items-center justify-between rounded-xl px-4 py-2 text-lg transition duration-150 hover:scale-[0.98]`}
		>
			{children}
		</Alink>
	);
}
