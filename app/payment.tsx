import { Link } from "next-view-transitions";
import React from "react";
import { FaCrown } from "react-icons/fa6";

export default function PayRequired() {
	return (
		<main
			className="relative p-2 flex flex-col items-center justify-center gap-12 h-full"
		>
			<div className="flex w-fit flex-col items-center justify-center relative">
				<FaCrown className="text-light-warn-color dark:text-dark-warn-color text-7xl" />
				<div className="flex items-center flex-col mt-4 gap-2 justify-center text-light-color dark:text-dark-color">
					<h1 className="text-2xl font-semibold">Payment Required</h1>
					<p className="font-mono opacity-70 max-w-(--breakpoint-sm) text-center mx-3">
						This feature is only available to supporters only. Please support me by subscribing.
					</p>
				</div>
			</div>
			<Link href="/subscribe" className="bg-light-warn-color dark:bg-dark-warn-color text-light-warn-background dark:text-dark-warn-background rounded-xl p-2 px-4 w-fit font-semibold">

					Support

			</Link>
		</main>
	);
}
