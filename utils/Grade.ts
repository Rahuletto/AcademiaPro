export function determineGrade(lostMark: number): string {
  if (lostMark >= 36) return "B";
  if (lostMark >= 27) return "B+";
  if (lostMark >= 18) return "A";
  if (lostMark >= 9) return "A+";
  if (lostMark >= 0) return "O";
  return "C";
}
