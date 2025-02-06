import { ImageResponse } from "next/og";
import { Day } from "@/types/Calendar";
import { fetchCalendar } from "@/hooks/fetchCalendar";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export async function GET(request: Request) {
	const geist = await fetch(
		new URL("../../../public/fonts/Geist.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());

	try {
		const calendar = await fetchCalendar()
		const params = new URL(request.url).searchParams;
		const monthParam = params.get("month");
		const monthIndex = monthParam ? (Number.parseInt(monthParam) >= calendar.calendar.length  ? calendar.index : Number.parseInt(monthParam)) : calendar.index;
		if (!calendar)
			return new Response(
				JSON.stringify({
					message:
						"Hmm, An error occured while grabbing your calendar data. Logout and login again.",
					fix: "Logout and retry. Its better be old expired cookies 🍪",
				}),
				{
					status: 500,
					headers: {
						"content-type": "application/json",
					},
				},
			);

		const month = calendar.calendar[monthIndex]?.month;
		const days = calendar.calendar[monthIndex]?.days;

		const getFirstDayIndex = () => weekdays.indexOf(days[0]?.day);

		return new ImageResponse(
			(
				<div tw="bg-[#0a0d12] flex flex-col items-center justify-center h-screen w-screen">

					<div
						tw="my-8 flex items-baseline min-w-[220px] justify-start ml-48 w-full"
					>
						<h1 tw="font-semibold text-[#FFF] mt-3 text-6xl">
							{months[monthIndex]}
						</h1>
						<p tw="text-3xl text-[#FFF] -mt-2 font-medium md:font-semibold ml-2 opacity-60">
							20{month.split("'")[1]}
						</p>
					</div>

					<div tw="max-w-[2000px] flex text-center font-bold bg-[#06090d]">
						{weekdays.map((weekday) => (
							<div
								key={weekday}
								tw="w-[285px] h-[56px] text-lg p-2 font-medium text-center text-white flex items-center justify-center"
							>
								{weekday}
							</div>
						))}
					</div>
					<div tw="bg-[#0a0d12] text-center flex flex-row flex-wrap max-w-[2000px] w-screen">
						{Array.from({ length: getFirstDayIndex() }, (_, index) => (
							<div tw="flex w-[285px] h-[370px] border-[#1E232B] border opacity-20" key={`empty-${index}`} />
						))}
						{days
							.filter((a: any) => a.dayOrder.length <= 1)
							.map((day, index: number) => (
								<DayCell key={index} day={day} />
							))}
					</div>
				</div>
			),
			{
				width: 2100,
				height: 2500,
				fonts: [
					{
						name: "Geist",
						data: geist,
						style: "normal",
					},
				],
				headers: {
					"Accept-Encoding": "gzip, deflate, br, zstd",
					"cache-control": "private, maxage=86400",
				},
			},
		);
	} catch (err: any) {
		console.warn(err);
		return new Response(
			JSON.stringify({
				error: err.stack,
			}),
			{
				status: 500,
				statusText: "Server Error",
			},
		);
	}
}
export const runtime = "edge";

function DayCell({ day }: { day: Day }) {
	const isErrorDay = day.dayOrder === "-";

	return (
		<div
			aria-label={day.date}
			title={`${day.date} - Day Order: ${day.dayOrder}`}
			tw={
				`${isErrorDay ? "bg-[#1D0C0C]" : ""} flex max-w-[285px] h-[370px] w-full flex-col justify-between border m-0 border-[#1E232B] p-4 items-end`
			}
		>
			<DateDisplay
				date={day.date}
				day={day?.day}
				isToday={false}
				isErrorDay={isErrorDay}
			/>
			<EventDisplay holiday={day.event || ""} isErrorDay={isErrorDay} />
			<DayOrderDisplay dayOrder={day.dayOrder} isToday={false} />
		</div>
	);
}

interface DateDisplayProps {
	date: string;
	day: string;
	isToday: boolean;
	isErrorDay: boolean;
}

const DateDisplay: React.FC<DateDisplayProps> = ({
	date,
	isToday,
	isErrorDay,
}) => (
	<div tw={`flex ${isErrorDay && !isToday ? "text-[#F75B5B]" : "text-white opacity-70"}`}>
		<h2 tw="rounded-full flex text-right text-3xl font-bold">{date}</h2>
	</div>
);

interface EventDisplayProps {
	holiday: string | null;
	isErrorDay: boolean;
}

const EventDisplay: React.FC<EventDisplayProps> = ({
	holiday,
	isErrorDay,
}) => {
	if (!holiday) return null;
	return (
		<p
			style={{ whiteSpace: "break-spaces" }}
			tw={`text-left pr-1 -mb-0.5 -mx-2 text-base ${isErrorDay ? "text-[#F75B5B]" : "rounded-md border-l-2 border-r-0 border-[#7CB3EB] bg-[#1B1D2B] px-1 py-0.5 pl-2 text-[#7CB3EB] opacity-70"}`}
		>
			{holiday.replaceAll(",", ", ")}
		</p>
	);
};

interface DayOrderDisplayProps {
	dayOrder: string;
	isToday: boolean;
}

const DayOrderDisplay: React.FC<DayOrderDisplayProps> = ({
	dayOrder,
}) => {
	if (dayOrder === "-") return null;
	return (
		<h2 tw="w-full pl-1 -mb-0.5 text-xl text-white opacity-70 font-medium text-left">
			Day Order{" "}
			<span tw={`ml-2 font-bold`}>
				{dayOrder}
			</span>
		</h2>
	);
};