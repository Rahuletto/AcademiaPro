export function isDateInRange(date: Date, range: DateRange) {
	return date >= range.from && date <= range.to;
}

export function isDateInRanges(date: Date, ranges: DateRange[]) {
	return ranges.some((range) => isDateInRange(date, range));
}

export type DateRange = {
	from: Date;
	to: Date;
};
