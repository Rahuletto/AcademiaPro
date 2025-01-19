self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("manifest-cache").then((cache) => {
			return cache.addAll([
				"/manifest.json",
				// Add other assets you want to cache during installation
			]);
		}),
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== "manifest-cache") {
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
	self.clients.claim();
});

self.addEventListener("message", (event) => {
	if (event.data.type === "UPDATE_MANIFEST") {
		// Update manifest in cache
		caches.open("manifest-cache").then((cache) => {
			const manifestResponse = new Response(
				JSON.stringify(event.data.manifest),
				{ headers: { "Content-Type": "application/json" } },
			);
			cache.put("/manifest.json", manifestResponse);
		});
	}
});

// ... rest of your service worker code ...
