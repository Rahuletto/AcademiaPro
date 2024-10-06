const serverUrls = [
  process.env.NEXT_PUBLIC_API_URL_H,
  process.env.NEXT_PUBLIC_API_URL_EVEN,
  process.env.NEXT_PUBLIC_API_URL_NIGHT,
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NEXT_PUBLIC_API_URL_MORN,
  process.env.NEXT_PUBLIC_API_URL_2,
];

export const revalUrl = serverUrls[0];

export default function rotateUrl(): string {
  const timestamp = Date.now();
  const index = timestamp % serverUrls.length;
  return serverUrls[index] ?? "";
}
