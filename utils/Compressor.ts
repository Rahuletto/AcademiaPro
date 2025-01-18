import {
	compressToEncodedURIComponent,
	decompressFromEncodedURIComponent,
} from "lz-string";
import { Decrypt, Encrypt } from "./encrypt";

export class Compressor {
	protected key: string;

	// biome-ignore lint/style/useNamingConvention: <explanation>
	constructor(env: { ENCRPT: string }) {
		this.key = env.ENCRPT;
		if (!this.key) {
			throw new Error("Encryption key is not defined.");
		}
	}

	public compressString = (str: object) => {
		const jsonString = JSON.stringify(str);
		const compressedData = compressToEncodedURIComponent(jsonString);
		const encrypted = Encrypt(compressedData, this.key);

		return encrypted;
	};

	public decompressString = (str: string) => {
		const decryptedData = Decrypt(str, this.key);
		const decompressedData = decompressFromEncodedURIComponent(decryptedData);
		return JSON.parse(decompressedData);
	};
}
