"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaQuestion } from "react-icons/fa6";

export default function NotFoundPage() {
	const router = useRouter();
	return (
		<main className="h-screen w-screen bg-light-info-background flex-col dark:bg-dark-info-background flex items-center justify-center">
			<div className="flex w-fit flex-col items-center justify-center relative">
				<FaQuestion className="text-6xl text-light-info-color dark:text-dark-info-color" />
			</div>
			<div className="flex items-center flex-col mt-4 gap-2 justify-center text-light-color dark:text-dark-color">
				<h1 className="text-2xl font-semibold">Why you here?</h1>
				<p className="font-mono opacity-70 max-w-(--breakpoint-sm) text-center mx-3">
					We don&apos;t know what you were looking for, but it never existed.
					Don&apos;t worry, i gotchu.
				</p>

				<button
					type="button"
					onClick={() => router.back()}
					className="bg-light-info-color mt-12 dark:bg-dark-info-color text-light-background-normal dark:text-dark-background-normal p-2 px-5 rounded-xl font-semibold hover:bg-light-button-hover dark:hover:bg-dark-button-hover"
				>
					Go back
				</button>
			</div>
		</main>
	);
}
