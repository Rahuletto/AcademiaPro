import { Link } from "next-view-transitions";
import React from "react";
import type { DirLink } from "@/misc/links";

export default function LinkList({ url }: { url: DirLink }) {
	return (
		<Link href={url.url} target="_blank" className="relative w-fit">
			<Svg />
			<div
			tabIndex={0}
				role="link"
				title={url.site}
				aria-label={url.site}
				className="ml-4 flex flex-col"
			>
				<div className="flex items-center justify-start gap-3 pl-4">
					<span
						className="text-lg font-medium text-light-color dark:text-dark-color"
					>
						{url.site}
					</span>
					<span
						aria-label={url.url}
						title={url.url}
						className="hidden rounded-md bg-light-button p-0.5 px-1 text-xs font-medium opacity-70 md:block dark:bg-dark-button"
					>
						{url.url}
					</span>
				</div>
				<p className="mb-4 ml-4 text-sm opacity-50">{url.description}</p>
			</div>
		</Link>
	);
}

function Svg() {
	return (
		<svg
			aria-hidden
			className="absolute -left-3 -top-4 opacity-80"
			width="40"
			height="30"
			viewBox="0 0 50 150"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Decorative Line</title>
			<path
				d="M6 0V63C6 103.869 39.1309 137 80 137H84"
				stroke="currentColor"
				strokeWidth="12"
			/>
		</svg>
	);
}
