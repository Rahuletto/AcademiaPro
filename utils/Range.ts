export function timeRange(now: Date, timeRange: string) {
	const [startTime, endTime] = timeRange.split("-");
	const [startHour, startMinute] = startTime.split(":").map(Number);
	const [endHour, endMinute] = endTime.split(":").map(Number);

	const currentHour = now.getHours();
	const currentMinute = now.getMinutes();

	if (
		currentHour > startHour ||
		(currentHour === startHour && currentMinute >= startMinute)
	) {
		if (
			currentHour < endHour ||
			(currentHour === endHour && currentMinute < endMinute)
		) {
			return true;
		}
	}
	return false;
}
