"use client";

import { useEffect } from "react";
import { BiError } from "react-icons/bi";

export default function ErrorComponent({
	error,
}: {
	error: Error & { digest?: string };
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="h-screen w-screen absolute top-0 bg-light-error-background p-8 text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color">
			<div className="h-full w-full rounded-2x">
				<div className="flex h-full animate-fadeIn flex-col items-center justify-center gap-2">
					<BiError className="mb-3 text-5xl" />
					<h1 className="text-2xl font-medium text-light-error-color dark:text-dark-error-color">
						Error.
					</h1>
					<p className="text-md max-w-[500px] text-center italic text-light-error-color opacity-90 dark:text-dark-error-color">
						Uhmm *crash noise*
					</p>

					<pre className="lg:text-md mx-2 mt-4 max-h-[500px] w-[80vw] overflow-auto rounded-2xl border-2 border-dashed border-light-error-color p-3 text-xs text-light-error-color opacity-90 md:text-sm dark:border-dark-error-color dark:text-dark-error-color">
						<code>{error.stack}</code>
					</pre>
				</div>
			</div>
		</div>
	);
}
