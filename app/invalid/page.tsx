import { Link } from "next-view-transitions";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import { VscSquirrel } from "react-icons/vsc";

export default function invalid() {
	return (
		<main className="h-screen w-screen bg-light-background-normal flex-col dark:bg-dark-background-normal flex items-center justify-center">
			<div className="flex w-fit flex-col items-center justify-center relative">
				<VscSquirrel className="text-8xl text-light-accent dark:text-dark-accent" />
				<FaQuestion className="text-4xl text-light-accent dark:text-dark-accent absolute top-0 right-0 -mr-9 rotate-12 opacity-60" />
			</div>
			<div className="flex items-center flex-col mt-4 gap-2 justify-center text-light-color dark:text-dark-color">
				<h1 className="text-2xl font-semibold">Session expired/invalid</h1>
				<p className="font-mono opacity-70 max-w-(--breakpoint-md) text-center mx-3">
					Our squirrels (delulu) found out you have an invalid or expired
					session token, Because SRM didn&apos;t return us the page with your
					token, we want you to reset and login again
				</p>

				<Link
					href="/auth/logout"
					className="bg-light-accent mt-12 dark:bg-dark-accent text-light-background-normal dark:text-dark-background-normal p-2 px-5 rounded-xl font-semibold hover:bg-light-button-hover dark:hover:bg-dark-button-hover"
				>
					Reset
				</Link>
			</div>
		</main>
	);
}
