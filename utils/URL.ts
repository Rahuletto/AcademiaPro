const serverUrls = [
  "https://newscrape.rameshrahul1974.workers.dev"
];

export default function rotateUrl(): string {
  const timestamp = Date.now();
  const index = timestamp % serverUrls.length;
  return serverUrls[index];
}