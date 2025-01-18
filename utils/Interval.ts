import { useRef, useEffect } from "react";

export function useInterval(callback: () => void, delay: number | null) {
	const intRef = useRef<number | NodeJS.Timer | null>(null);
	const cb = useRef(callback);

	useEffect(() => {
		cb.current = callback;
	}, [callback]);

	useEffect(() => {
		if (typeof delay === "number") {
			intRef.current = window.setInterval(() => cb.current(), delay);

			return () => window.clearInterval(intRef.current as number);
		}
	}, [delay]);

	return intRef;
}
