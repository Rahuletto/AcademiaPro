"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { BiError } from "react-icons/bi";

export default function ErrorComponent({ error }: { error: Error | string }) {
	useEffect(() => {
		console.group('Error Details');
		console.error('Error object:', error);
		if (error instanceof Error) {
			console.error('Stack trace:', error.stack);
			console.error('Error name:', error.name);
			console.error('Component stack:', (error as any).componentStack);
		}
		console.groupEnd();
	}, [error]);

	// Format error message for display
	const getErrorMessage = () => {
		if (typeof error === 'string') return error;
		if (error instanceof Error) {
			return `${error.name}: ${error.message}`;
		}
		return 'An unknown error occurred';
	};

	// Get additional debug info
	const getDebugInfo = () => {
		if (!(error instanceof Error)) return '';
		const debugInfo = [];
		
		if (error.stack) {
			const stackLines = error.stack.split('\n');
			// Extract the most relevant stack frames
			debugInfo.push('Stack Trace (most recent call first):');
			debugInfo.push(...stackLines.slice(0, 5));
		}

		if ((error as any).componentStack) {
			debugInfo.push('\nComponent Hierarchy:');
			debugInfo.push((error as any).componentStack);
		}

		return debugInfo.join('\n');
	};

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
						<code className="whitespace-pre-wrap">
							<div className="font-semibold mb-2">{getErrorMessage()}</div>
							<div className="opacity-80">{getDebugInfo()}</div>
						</code>
					</pre>
				</div>
			</div>
		</div>
	);
}
