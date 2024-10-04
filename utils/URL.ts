const serverUrls = ["https://newscrape.rameshrahul1974.workers.dev"];

export const revalUrl = serverUrls[0];

export default function rotateUrl(): string {
  const timestamp = Date.now();
  const index = timestamp % serverUrls.length;
  return serverUrls[index];
}