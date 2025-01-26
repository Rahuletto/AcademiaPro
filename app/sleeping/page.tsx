"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiServerStack } from "react-icons/hi2";
import { RiZzzFill } from "react-icons/ri";

export default function Sleeping() {
	const router = useRouter();
	return (
		<main className="h-screen w-screen bg-light-info-background flex-col dark:bg-dark-info-background flex items-center justify-center">
			<div className="flex w-fit flex-col items-center justify-center relative">
				<HiServerStack className="text-8xl text-light-info-color dark:text-dark-info-color" />
				<RiZzzFill className="text-4xl text-light-info-color dark:text-dark-info-color absolute top-0 right-0 -mr-9 rotate-12 opacity-60" />
			</div>
			<div className="flex items-center flex-col mt-4 gap-2 justify-center text-light-color dark:text-dark-color">
				<h1 className="text-2xl font-semibold">Waking up..</h1>
				<p className="font-mono opacity-70 max-w-(--breakpoint-md) text-center mx-3">
					Our servers were busy sleeping.. We are waking them up now. Please
					wait for sometime and try again later.
				</p>

				<button
					type="button"
					onClick={() => router.refresh()}
					className="bg-light-info-color mt-12 dark:bg-dark-info-color text-light-background-normal dark:text-dark-background-normal p-2 px-5 rounded-xl font-semibold hover:bg-light-button-hover dark:hover:bg-dark-button-hover"
				>
					Retry
				</button>
			</div>
		</main>
	);
}
