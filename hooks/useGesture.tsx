import { useEffect } from "react";

interface UseGesturesProps {
	onSwipeLeft: () => void;
	onSwipeRight: () => void;
}

export function useGestures({ onSwipeLeft, onSwipeRight }: UseGesturesProps) {
	useEffect(() => {
		let touchstartX = 0;
		let touchendX = 0;

		function handleGesture() {
			const screenWidth = window.innerWidth;
			const swipeThreshold = screenWidth / 3;

			if (touchendX < touchstartX - swipeThreshold) {
				onSwipeLeft();
			}

			if (touchendX > touchstartX + swipeThreshold) {
				onSwipeRight();
			}
		}

		function startTouch(event: TouchEvent) {
			touchstartX = event.changedTouches[0].screenX;
		}

		function stopTouch(event: TouchEvent) {
			touchendX = event.changedTouches[0].screenX;
			handleGesture();
		}

		window.addEventListener("touchstart", startTouch, false);
		window.addEventListener("touchend", stopTouch, false);

		return () => {
			window.removeEventListener("touchstart", startTouch);
			window.removeEventListener("touchend", stopTouch);
		};
	}, [onSwipeLeft, onSwipeRight]);
}
