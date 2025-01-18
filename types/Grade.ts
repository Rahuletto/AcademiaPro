export const gradePoints: { [key: string]: number } = {
	// biome-ignore lint/style/useNamingConvention: <explanation>
	O: 91,
	"A+": 81,
	// biome-ignore lint/style/useNamingConvention: <explanation>
	A: 71,
	"B+": 61,
	// biome-ignore lint/style/useNamingConvention: <explanation>
	B: 56,
	// biome-ignore lint/style/useNamingConvention: <explanation>
	C: 50,
};

export function getGrade(marks: number): string {
	if (marks >= 91) return "O";
	if (marks >= 81) return "A+";
	if (marks >= 71) return "A";
	if (marks >= 61) return "B+";
	if (marks >= 56) return "B";
	if (marks >= 50) return "C";
	return "F";
}
