export function determineGrade(lostMark: number): string {
  if (lostMark >= 40) return "B";
  if (lostMark >= 30) return "B+";
  if (lostMark >= 20) return "A";
  if (lostMark >= 10) return "A+";
  if (lostMark >= 0) return "O";
  return "C";
}
