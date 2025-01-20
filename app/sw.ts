import { Serwist } from "serwist";


declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
	skipWaiting: true,
	clientsClaim: true,
	navigationPreload: true,
	disableDevLogs: true,
	offlineAnalyticsConfig: true,
	fallbacks: {
		entries: [
			{
				url: "/offline",
				matcher({ request }) {
					return request.destination === "document";
				},
			},
		],
	},
	precacheOptions: {
		cleanupOutdatedCaches: true,
		concurrency: 20,
	},
});

// Notification Handler
self.addEventListener("push", (event) => {
	const options = {
		body: event.data?.text() ?? "No payload",
		icon: "/icon.png",
		vibrate: [100, 50, 100],
	};

	event.waitUntil(
		self.registration.showNotification("Push Notification", options),
	);
});

// Cache
self.addEventListener("fetch", (event) => {
	if (event.request.url === "/academia") {
		return false;
	}
});

serwist.addEventListeners();
