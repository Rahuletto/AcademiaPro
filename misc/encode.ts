const ALPHABET =
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function encodeString(str: string): string {
	const buffer = Buffer.from(str, "utf-8");
	let num = BigInt(`0x${buffer.toString("hex")}`);
	let encoded = "";

	while (num > 0) {
		encoded = ALPHABET[Number(num % BigInt(62))] + encoded;
		num = num / BigInt(62);
	}

	return encoded.padStart(11, "0");
}

export function decodeString(encoded: string): string {
	let num = BigInt(0);

	for (let i = 0; i < encoded.length; i++) {
		num = num * BigInt(62) + BigInt(ALPHABET.indexOf(encoded[i]));
	}

	const hex = num.toString(16);
	const buffer = Buffer.from(
		hex.padStart(2 * Math.ceil(hex.length / 2), "0"),
		"hex",
	);

	return buffer.toString("utf-8");
}
