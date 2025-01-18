"use client"; // Error components must be Client Components

import { Link } from "next-view-transitions";
import { useEffect } from "react";
import { BiError } from "react-icons/bi";

export default function ErrorComponent({ error }: { error: Error | string }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="h-screen p-4">
			<div className="h-full w-full rounded-2xl bg-dark-background-dark p-2">
				<div className="flex h-full animate-fadeIn flex-col items-center justify-center gap-2 rounded-xl bg-light-error-background p-8 text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color">
					<BiError className="mb-3 text-4xl" />
					<h1 className="text-2xl font-medium text-light-error-color dark:text-dark-error-color">
						Error.
					</h1>
					<p className="text-md max-w-[500px] text-center italic text-light-error-color opacity-90 dark:text-dark-error-color">
						*intense crash sound*
					</p>

					<pre className="lg:text-md mx-2 mt-4 max-h-[500px] w-[80vw] overflow-auto rounded-2xl border-2 border-dashed border-light-error-color p-3 text-xs text-light-error-color opacity-90 md:text-sm dark:border-dark-error-color dark:text-dark-error-color">
						<code>{typeof error === "string" ? error : error.stack}</code>
					</pre>
				</div>
			</div>
			<div className="absolute bottom-12 left-0 flex w-screen flex-wrap items-center justify-center gap-3 text-light-error-color opacity-90 dark:text-dark-error-color">
				<span className="text-sm opacity-70">
					Frequent errors? Try resetting (It logs you out tho)
				</span>
				<Link
					href="/auth/logout"
					className="rounded-full bg-light-error-color px-3 py-0.5 font-semibold text-light-error-background dark:bg-dark-error-color dark:text-dark-error-background"
				>
					Clear cookies
				</Link>
			</div>
		</div>
	);
}
