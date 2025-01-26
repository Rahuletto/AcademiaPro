import { Link } from "next-view-transitions";
import React from "react";
import { HiOutlineHandRaised } from "react-icons/hi2";

export default function ratelimit() {
	return (
		<main className="h-screen w-screen bg-light-error-background flex-col dark:bg-dark-error-background flex items-center justify-center">
			<div className="flex w-fit flex-col items-center justify-center relative">
				<HiOutlineHandRaised className="text-8xl text-light-error-color dark:text-dark-error-color" />
			</div>
			<div className="flex items-center flex-col mt-4 gap-2 justify-center text-light-color dark:text-dark-color">
				<h1 className="text-2xl font-semibold">Chill mate.</h1>
				<p className="font-mono opacity-70 max-w-(--breakpoint-md) text-center mx-3">
					Stop spamming our free tier servers, We are working tirelessly to make
					this as a free service, So try again after some time
				</p>

				<Link
					href="/academia"
					className="bg-light-error-color mt-12 dark:bg-dark-error-color text-light-background-normal dark:text-dark-background-normal p-2 px-5 rounded-xl font-semibold hover:bg-light-button-hover dark:hover:bg-dark-button-hover"
				>
					Go back
				</Link>
			</div>
		</main>
	);
}
