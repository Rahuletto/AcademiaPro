import React from "react";
import LinkList from "./LinkList";
import type { DirLink } from "@/misc/links";

interface UrlSectionProps {
	title: string;
	urls: DirLink[];
	className?: string;
	special?: boolean;
}

export function UrlSection({
	title,
	urls,
	className,
	special,
}: UrlSectionProps) {
	return (
		<div>
			<h3
				title={title}
				aria-label={title}
				className={`text-2xl font-semibold ${className} ${special ? "underline dark:decoration-dark-info-color decoration-light-info-color" : ""}`}
			>
				{title}
			</h3>
			<div
				className={`${special ? "dark:text-dark-info-color text-light-info-color" : ""} ml-6 mt-4 flex flex-col gap-3`}
			>
				{urls.map((url, i) => (
					<LinkList url={url} key={i} />
				))}
			</div>
		</div>
	);
}
