import cryptoJs from "crypto-js";

export function Encrypt(text: string, key: string): string {
	return cryptoJs.AES.encrypt(JSON.stringify(text), key).toString();
}

export function Decrypt(text: string, key: string): string {
	const bytes = cryptoJs.AES.decrypt(text, key);
	return JSON.parse(bytes.toString(cryptoJs.enc.Utf8));
}
