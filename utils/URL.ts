const serverUrls = [process.env.NEXT_PUBLIC_URL, process.env.NEXT_PUBLIC_URL_GOAT, process.env.NEXT_PUBLIC_URL_ONE];

export const revalUrl = serverUrls[0];
export const filesUrl = process.env.NEXT_PUBLIC_FILES_URL;

export default function rotateUrl(): string {
	const timestamp = Date.now();
	const index = timestamp % serverUrls.length;
	return serverUrls[index] ?? "";
}
