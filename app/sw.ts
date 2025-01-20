import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
	interface WorkerGlobalScope extends SerwistGlobalConfig {
		__SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
	}
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
	precacheEntries: self.__SW_MANIFEST,
	skipWaiting: true,
	clientsClaim: true,
	navigationPreload: true,
	runtimeCaching: defaultCache,
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
