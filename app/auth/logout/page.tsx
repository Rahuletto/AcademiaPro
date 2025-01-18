"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { RiLoader3Fill } from "react-icons/ri";

export default function Logout() {
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const a = await fetch("/api/logout", {
				method: "DELETE",
			});

			const body = await a.json();
			console.info(body);
			if (a.ok) router.push("/");
		})();
	}, []);

	return (
		<main className="flex h-screen w-screen animate-fadeIn flex-col items-center justify-center p-12 text-light-accent dark:text-dark-accent">
			<RiLoader3Fill
				title="loading"
				className="animate-spin text-5xl font-medium text-light-accent dark:text-dark-accent"
			/>
			<h1 className="mt-4 text-xl font-medium">Logging out...</h1>
		</main>
	);
}
