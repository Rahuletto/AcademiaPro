import { priorityUrl, urls } from "@/misc/links";

export default function useSearch({ searchQuery }: { searchQuery: string }) {
	const priority = priorityUrl.filter((url) => {
		if (!searchQuery) return true;
		return (
			includesSubstring(url.site, searchQuery) ||
			includesSubstring(url.description, searchQuery)
		);
	});

	const officials = urls.filter((url) => {
		if (!searchQuery) return url.type === "official";
		if (url.type !== "official") return false;
		return (
			includesSubstring(url.site, searchQuery) ||
			includesSubstring(url.description, searchQuery)
		);
	});

	const others = urls.filter((url) => {
		if (!searchQuery) return url.type === "unofficial";
		if (url.type !== "unofficial") return false;
		return (
			includesSubstring(url.site, searchQuery) ||
			includesSubstring(url.description, searchQuery)
		);
	});

	return { priority, officials, others };
}
function includesSubstring(str: string, query: string) {
	return str.toLowerCase().includes(query.toLowerCase());
}
