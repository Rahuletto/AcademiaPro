function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

const colors: string[] = [
  '#64f58d',
  '#FFAC81',
  '#FF928B',
  '#EFE9AE',
  '#8BCAE5',
  '#7EC8BD',
  '#E0FE9A',
  '#9CA3DB',
  '#8789AB',
  '#EA8592',
];

export function getColor(registrationNumber: string): string {
  const hash = hashString(registrationNumber);
  const colorIndex = hash % colors.length;
  return colors[colorIndex];
}
