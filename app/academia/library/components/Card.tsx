import type { CoursePapers } from "../library";
import CourseCode from "./Code";
import PaperLink from "./PaperLink";

export default function Card({ result }: { result: CoursePapers }) {
	return (
		<div className="flex flex-col border-b-4 border-b-light-accent/50  dark:border-b-dark-accent/50 gap-2 border border-light-button dark:border-dark-button bg-light-background-light dark:bg-dark-background-darker rounded-xl p-4 px-6">
			<h2 className="text-xl font-medium text-light-color dark:text-dark-color w-fit capitalize">
				{result.name}
			</h2>

			<div className="flex flex-col gap-6">
				{result.urls.map((urlGroup) => (
					<div
						key={urlGroup.semester}
						className="flex items-start justify-start flex-col gap-2"
					>
						<div className="flex items-center justify-start gap-2">
							<CourseCode code={result.code ?? ""} />
							<span className="rounded-full px-3 py-0.5 bg-light-button dark:bg-dark-button border border-dark-background-dark/5 dark:border-light-background-light/5 text-dark-color/40 dark:text-light-color/40 font-medium text-sm">
								Semester {urlGroup.semester}
							</span>
						</div>
						<div className="flex flex-col gap-2 border-l-2 border-light-accent dark:border-dark-accent ml-2 p-2 border-dashed rounded-bl-lg">
							{urlGroup.urls.map((url) => (
								<PaperLink
									key={url.period}
									link={url.raw}
									period={url.period}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
