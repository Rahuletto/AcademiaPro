import { Sidebar } from "@/components/Sidebar";
import DayOrder from "@/components/Sidebar/Badges/DayOrder";
import ProfileBadge from "@/components/Sidebar/ProfileBadge";
import Loading from "@/components/States/Loading";
import { demo as json } from "@/mock";
import type { UserInfo } from "@/types/User";
import React, { Suspense } from "react";
import Timetable from "../academia/components/Timetable";
import Attendance from "../academia/components/Attendance";
import type { Schedule } from "@/types/Timetable";
import type { AllResponse } from "@/types/Response";
import Marks from "../academia/components/Marks";
import type { Mark } from "@/types/Marks";
import type { Course } from "@/types/Course";
import ColorPicker from "@/components/themes/ColorPicker";

export default function Demo() {
	const marks: Mark[] = json.courses.courses.map((c) => {
		const testCount = Math.floor(Math.random() * 3) + 2;
		const testPerformance = Array.from({ length: testCount }, (_, i) => {
			const total = [5, 10, 15, 20][Math.floor(Math.random() * 4)];
			const testType = total === 5 ? "PT" : "FT";
			return {
				test: `${testType}-${i + 1}`,
				marks: {
					scored: (
						Math.random() * (total * 0.8 - total * 0.5) +
						total * 0.5
					).toFixed(2),
					total: total.toFixed(2),
				},
			};
		});

		const totalScored = testPerformance.reduce(
			(sum, test) => sum + Number.parseFloat(test.marks.scored),
			0,
		);
		const totalPossible = testPerformance.reduce(
			(sum, test) => sum + Number.parseFloat(test.marks.total),
			0,
		);

		return {
			courseCode: c.code,
			courseName: c.title,
			courseType: c.slotType,
			overall: {
				marks: totalScored.toFixed(2),
				total: totalPossible.toFixed(2),
			},
			testPerformance,
		};
	});

	return (
		<div className="h-screen shrink-0 w-full flex flex-row bg-light-background-normal lg:p-2 transition-all duration-150 text-light-color dark:bg-dark-background-normal dark:text-dark-color">
			<div id="attendance-predict" className="z-30" />
            <div className="border-4 border-light-warn-color dark:border-dark-warn-color fixed pointer-events-none w-screen h-screen top-0 left-0 z-100 rounded-lg" />
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen z-100">
            <div className="bg-light-warn-color dark:bg-dark-warn-color rounded-b-2xl px-5 py-1">
                <h2 className="font-semibold text-light-error-background dark:text-dark-error-background">Builder Mode</h2>
            </div>
        </div>
			<ColorPicker />
			<Sidebar
				dayorder={<DayOrder />}
				mini={
					<DayOrder
						mini
						className="fixed hidden right-9 md:flex items-center justify-center"
					/>
				}
				profile={
					<ProfileBadge user={json?.user as UserInfo} subscribed={false} />
				}
			/>
			<div
				id="content"
				className={
					"fixed h-full w-full flex-1 transform duration-150 md:relative md:w-full"
				}
				style={{ marginLeft: "var(--sidebar-width)" }}
			>
				<main
					className={
						"m-0.5 p-5 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth rounded-2xl bg-light-background-light transition-all duration-150  dark:bg-dark-background-dark"
					}
				>
					<div style={{ height: "-webkit-fill-available" }}>
						<div id="items" className="flex flex-col gap-12 relative">
							<Suspense fallback={<Loading size="xl" />}>
								<Timetable
									ophours={[]}
									schedule={json.timetable?.schedule as Schedule[]}
								/>
							</Suspense>
							<Suspense fallback={<Loading size="xl" />}>
								<Attendance data={json as unknown as AllResponse} />
							</Suspense>
							<Suspense fallback={<Loading size="xl" />}>
								<Marks
									marks={marks}
									courses={json.courses?.courses as Course[]}
								/>
							</Suspense>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
