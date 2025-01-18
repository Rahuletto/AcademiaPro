function createToken(secretKey: string): string {
	const timestamp = Math.floor(Date.now() / 1000);
	const data = `${timestamp}.${secretKey}`;

	const encodedData = btoa(data);
	return encodedData;
}

export const token = () =>
	createToken(process.env.NEXT_PUBLIC_VALIDATION_KEY || "");
