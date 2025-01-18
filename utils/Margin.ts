export function calculateMargin(present: number, total: number) {
	const pMin = 75;
	if ((present / total) * 100 >= pMin)
		return Math.floor((present - 0.75 * total) / 0.75);

	let requiredClassesToAttend = 0;
	while (
		((present + requiredClassesToAttend) / (total + requiredClassesToAttend)) *
			100 <
		pMin
	) {
		requiredClassesToAttend++;
	}
	return -requiredClassesToAttend;
}
