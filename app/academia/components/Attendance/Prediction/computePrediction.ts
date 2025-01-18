import type {
	AttendanceCourse,
	CategorizedDateRange,
} from "@/types/Attendance";
import type { Schedule } from "@/types/Timetable";

export function predictAttendance(
	attendance: AttendanceCourse[],
	timetable: Schedule[],
	cal: {
		date: string;
		month: number;
		order: string;
		dateObj: Date;
	}[],
	ranges: CategorizedDateRange[],
) {
	const today = new Date();

	const absents = ranges.filter((range) => range.category === "Leave");
	const ods = ranges.filter((range) => range.category === "OD");

	const firstAbsentRange = absents.sort(
		(a, b) => new Date(a?.from)?.getTime() - new Date(b?.from)?.getTime(),
	)[0];
	const datesBetweenTodayAndFirstAbsent = betweenDates(
		today,
		new Date(firstAbsentRange?.from),
	);
	const datesBetweenAbsents = [...datesBetweenTodayAndFirstAbsent];

	for (let i = 0; i < absents.length - 1; i++) {
		const endCurrent = new Date(absents[i].to);
		const startNext = new Date(absents[i + 1]?.from);
		if (endCurrent < startNext) {
			const inBetweenDates = betweenDates(
				new Date(endCurrent.setDate(endCurrent.getDate() + 1)),
				new Date(startNext.setDate(startNext.getDate() - 1)),
			);
			datesBetweenAbsents.push(...inBetweenDates);
		}
	}

	const filteredDatesBetweenAbsents = datesBetweenAbsents.filter((date) => {
		const month = date.getMonth();
		const day = date.getDate();
		const mappedDay = cal.find(
			(calDay) => calDay.date === day.toString() && calDay.month === month,
		);
		return mappedDay && mappedDay.order !== "-";
	});

	const absentDates =
		absents.length > 0
			? absents.flatMap((absent) =>
					betweenDates(new Date(absent?.from), new Date(absent?.to)),
				)
			: [];
	const odDates =
		ods.length > 0
			? ods.flatMap((od) => betweenDates(new Date(od?.from), new Date(od.to)))
			: [];

	const dayOrders = absentDates
		.map((date) => {
			const month = date.getMonth();
			const day = date.getDate();
			const mappedDay = cal.find(
				(calDay) => calDay.date === day.toString() && calDay.month === month,
			);
			return mappedDay ? { date: day, month, dayOrder: mappedDay.order } : null;
		})
		.filter((dayOrder) => dayOrder !== null || dayOrder === "-");

	const betweenDayOrders = filteredDatesBetweenAbsents.map((date) => {
		const month = date.getMonth();
		const day = date.getDate();
		const mappedDay = cal.find(
			(calDay) => calDay.date === day.toString() && calDay.month === month,
		);
		return mappedDay ? { date: day, month, dayOrder: mappedDay.order } : null;
	});

	const tempAttendance = structuredClone(attendance);

	for (const dayOrder of dayOrders) {
		if (dayOrder) {
			for (const course of tempAttendance) {
				const timetableDay = timetable.find(
					(item) => item.day === Number(dayOrder?.dayOrder),
				);
				const slots = timetableDay?.table.filter(
					(slot) =>
						slot?.code === course.courseCode &&
						slot.courseType === course.category,
				);
				if (slots && slots.length > 0) {
					for (const _ of slots) {
						course.hoursConducted = String(Number(course.hoursConducted) + 1);
						course.hoursAbsent = String(Number(course.hoursAbsent) + 1);
					}
					course.attendancePercentage = (
						((Number(course.hoursConducted) - Number(course.hoursAbsent)) /
							Number(course.hoursConducted)) *
						100
					).toFixed(2);
				}
			}
		}
	}
	const odDayOrders = odDates
		.map((date) => {
			const month = date.getMonth();
			const day = date.getDate();
			const mappedDay = cal.find(
				(calDay) => calDay.date === day.toString() && calDay.month === month,
			);
			return mappedDay ? { date: day, month, dayOrder: mappedDay.order } : null;
		})
		.filter((dayOrder) => dayOrder !== null || dayOrder === "-");

	for (const dayOrder of betweenDayOrders) {
		if (dayOrder) {
			for (const course of tempAttendance) {
				const timetableDay = timetable.find(
					(item) => item.day === Number(dayOrder?.dayOrder),
				);
				const slots = timetableDay?.table.filter(
					(slot) =>
						slot?.code === course.courseCode &&
						slot.courseType === course.category,
				);
				if (slots && slots.length > 0) {
					for (const _ of slots) {
						course.hoursConducted = String(Number(course.hoursConducted) + 1);
					}
					course.attendancePercentage = (
						((Number(course.hoursConducted) - Number(course.hoursAbsent)) /
							Number(course.hoursConducted)) *
						100
					).toFixed(2);
				}
			}
		}
	}

	for (const dayOrder of odDayOrders) {
		if (dayOrder) {
			for (const course of tempAttendance) {
				const timetableDay = timetable.find(
					(item) => item.day === Number(dayOrder?.dayOrder),
				);
				const slots = timetableDay?.table.filter(
					(slot) =>
						slot?.code === course.courseCode &&
						slot.courseType === course.category,
				);
				if (slots && slots.length > 0) {
					for (const _ of slots) {
						course.hoursAbsent = String(
							Math.max(Number(course.hoursAbsent) - 1, 0),
						);
					}
					course.attendancePercentage = (
						((Number(course.hoursConducted) - Number(course.hoursAbsent)) /
							Number(course.hoursConducted)) *
						100
					).toFixed(2);
				}
			}
		}
	}

	return tempAttendance;
}

const betweenDates = (start: Date, end: Date) => {
	const dates = [];
	const currentDate = new Date(start);
	while (currentDate <= end) {
		dates.push(new Date(currentDate));
		currentDate.setDate(currentDate.getDate() + 1);
	}
	return dates;
};
