import CryptoJS from "crypto-js";

export function Encrypt(text: string, key: string): string {
  return CryptoJS.AES.encrypt(JSON.stringify(text), key).toString();
}

export function Decrypt(text: string, key: string): string {
  const bytes = CryptoJS.AES.decrypt(text, key);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
