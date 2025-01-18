export const Time = {
	start: [
		"08:00",
		"08:50",
		"09:45",
		"10:40",
		"11:35",
		"12:30",
		"13:25",
		"14:20",
		"15:10",
		"16:00",
	],
	end: [
		"08:50",
		"09:40",
		"10:35",
		"11:30",
		"12:25",
		"13:20",
		"14:15",
		"15:10",
		"16:00",
		"16:50",
	],
};

export function timeConvert(time: string) {
	let convertedTime: (string | number)[] = time
		.toString()
		.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

	if (convertedTime.length > 1) {
		convertedTime = convertedTime.slice(1);
		convertedTime[0] = +convertedTime[0] % 12 || 12;
	}
	return convertedTime.join("");
}

export const getIstTime = (): Date => {
	const currentTime = new Date();
	const currentOffset = currentTime.getTimezoneOffset();
	const istOffset = 330;
	return new Date(currentTime.getTime() + (istOffset + currentOffset) * 60000);
};
