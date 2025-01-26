import { Link } from "next-view-transitions";
import React from "react";
import { GrSatellite } from "react-icons/gr";

export default function offline() {
	return (
		<main className="h-screen w-screen bg-light-warn-background flex-col dark:bg-dark-warn-background flex items-center justify-center">
			<div className="flex w-fit flex-col items-center justify-center relative">
				<GrSatellite className="text-8xl text-light-warn-color dark:text-dark-warn-color" />
			</div>
			<div className="flex items-center flex-col mt-4 gap-2 justify-center text-light-color dark:text-dark-color">
				<h1 className="text-2xl font-semibold">No Internet.</h1>
				<p className="font-mono opacity-70 max-w-(--breakpoint-sm) text-center mx-3">
					Seems like you are offline, which sucks. Please check your internet
					connection and try again.
				</p>

				<Link
					href="/academia"
					className="bg-light-warn-color mt-12 dark:bg-dark-warn-color text-light-background-normal dark:text-dark-background-normal p-2 px-5 rounded-xl font-semibold hover:bg-light-button-hover dark:hover:bg-dark-button-hover"
				>
					Go back
				</Link>
			</div>
		</main>
	);
}
