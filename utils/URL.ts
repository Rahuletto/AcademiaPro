const serverUrls = ['http://localhost:8008' ]

export const revalUrl = serverUrls[0];

export default function rotateUrl(): string {
  const timestamp = Date.now();
  const index = timestamp % serverUrls.length;
  return serverUrls[index] ?? "";
}
