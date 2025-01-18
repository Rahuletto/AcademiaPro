import { compress, decompress } from "lz-string";

const Storage = {
	set: <T>(key: string, value: T): void => {
		if (typeof window === "undefined") {
			return;
		}
		try {
			const serialized = JSON.stringify(value);
			const compressed = compress(serialized);
			localStorage.setItem(key, compressed);
		} catch (error) {
			console.error("Error setting localStorage item:", error);
		}
	},

	get: <T>(key: string, defaultValue: T): T => {
		try {
			if (typeof window === "undefined") {
				return defaultValue;
			}
			const compressed = localStorage.getItem(key);
			if (compressed) {
				const decompressed = decompress(compressed);
				return decompressed ? JSON.parse(decompressed) : defaultValue;
			}
			return defaultValue;
		} catch (error) {
			console.error("Error getting localStorage item:", error);
			return defaultValue;
		}
	},

	remove: (key: string): void => {
		if (typeof window === "undefined") {
			return;
		}
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error("Error removing localStorage item:", error);
		}
	},
	clear: () => {
		if (typeof window === "undefined") {
			return;
		}
		try {
			localStorage.clear();
		} catch (error) {
			console.error("Error clearing localStorage:", error);
		}
	},
};

export default Storage;
