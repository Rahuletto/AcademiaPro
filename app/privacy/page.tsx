import { FaBookOpen } from "react-icons/fa";
import { Link } from "next-view-transitions";
import ThemeToggle from "@/components/themes/ThemeToggle";
import Image from "next/image";

export default async function Privacy() {
	return (
		<main className="flex relative flex-col items-center justify-start gap-8 bg-light-background-normal p-6 pt-40 dark:bg-dark-background-dark w-screen pb-48 overflow-hidden min-h-screen">
			<div className="flex absolute top-8 left-0 w-screen justify-between px-8">
				<div className="flex items-center justify-center gap-4">
					<FaBookOpen className="text-2xl text-light-accent dark:text-dark-accent" />
					<h2 className="text-xl hidden md:block font-semibold text-light-color dark:text-dark-color">
						ClassPro.
					</h2>
				</div>
				<ThemeToggle />
			</div>

			<div className="absolute inset-0 pointer-events-none opacity-60">
				{Array.from({ length: 20 }).map((_, index) => (
					<div
						key={index}
						className="absolute w-1 h-1 bg-light-accent dark:bg-dark-accent rounded-full"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							opacity: Math.random(),
							animation: `twinkle ${Math.random() * 2 + 2}s infinite, move ${Math.random() * 2 + 2}s infinite alternate`,
						}}
					/>
				))}
			</div>

			<span
				className="absolute animate-gradient top-0 left-0 bg-linear-to-br from-light-accent/10 dark:from-dark-accent/10 to-transparent"
				style={{
					width: "100%",
					height: "100%",
					pointerEvents: "none",
				}}
			/>
			<div className="mx-auto flex max-w-4xl w-full flex-col gap-16 leading-relaxed">
				<header className="flex flex-col gap-2">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-light-color underline decoration-light-accent dark:text-dark-color dark:decoration-dark-accent">
						Privacy Policy
					</h1>
					<p className="text-light-accent opacity-60 text-lg dark:text-dark-accent">
						Last Updated: 14 November 2024
					</p>
				</header>

				<section className="text-lg text-light-color dark:text-dark-color leading-relaxed">
					<p className="opacity-90">
						ClassPro (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
						committed to safeguarding your privacy. This{" "}
						<span className="underline decoration-light-accent dark:decoration-dark-accent">
							Privacy Policy
						</span>{" "}
						describes how we collect, use, and protect the minimal data
						necessary for our services. By using ClassPro, you agree to the
						practices outlined below.
					</p>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-4">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						1. Who We Are
					</h2>
					<p className="opacity-90 text-lg">
						ClassPro is an independent app designed to enhance your access to
						university-related information like timetables, delivering a simple,
						efficient, and visually engaging experience.{" "}
						<strong className="underline decoration-light-accent dark:decoration-dark-accent">
							We are not affiliated with, endorsed by, or connected to SRM
							University, Zoho, or any other organization.
						</strong>
					</p>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-6">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						2. Data We Collect and Store
					</h2>
					<p className="opacity-90 text-lg">
						ClassPro collects and securely stores academic data, including:
					</p>
					<ul className="list-disc pl-8 space-y-3 text-lg">
						<li>
							<span className="underline decoration-light-accent dark:decoration-dark-accent">
								Timetable Data:
							</span>{" "}
							Information about your class schedules, which is actively used
							within the app for generating personalized timetables.
						</li>
						<li>
							<span className="underline decoration-light-accent dark:decoration-dark-accent">
								Attendance Data:
							</span>{" "}
							Your attendance records, securely stored but treated as cached
							information, used to improve app performance.
						</li>
						<li>
							<span className="underline decoration-light-accent dark:decoration-dark-accent">
								User Data:
							</span>{" "}
							General account information, which is securely stored but only
							used as cache.
						</li>
					</ul>
					<p className="opacity-90 text-lg">
						Although these types of data are stored on our servers, only the
						timetable data is actively utilized. All other data functions as
						temporary cache and is automatically erased daily.
					</p>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-6">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						3. Data Security and Encryption
					</h2>
					<p className="opacity-90 text-lg">
						Your data is protected with AES-256 encryption both in transit and
						at rest on our Supabase servers, ensuring it remains private and
						secure. Not even the ClassPro team can access your data thanks to
						these high security measures.
					</p>
					<p className="opacity-90 text-lg">
						Each day, our system performs an automatic data cleanup process,
						erasing cached information to maintain privacy and ensure that data
						is retained only temporarily. This process allows you to retain full
						control over your data, with no additional steps required if you
						choose to stop using the app.
					</p>

					<div className="mt-8">
						<p className="opacity-90 text-lg mb-4">
							Still skeptical? Here is our database screenshot. (No one will
							ever do this)
						</p>
						<div className="rounded-lg overflow-hidden shadow-lg">
							<Image
								src="/images/database.png"
								width={800}
								height={400}
								alt="Database Screenshot"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-6">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						4. Data Retention and User Control
					</h2>
					<p className="opacity-90 text-lg">
						Timetable, attendance, and user data are stored temporarily to
						support app functionality and improve performance. However, data is
						erased automatically each day, effectively removing long-term
						records. By choosing not to use the app, you automatically opt out
						of data retention without any further action.
					</p>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-6">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						5. Third-Party Services
					</h2>
					<p className="opacity-90 text-lg">
						ClassPro does not share your data with any third parties. Any
						third-party services used comply with our security standards and do
						not have access to your data.
					</p>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-6">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						6. Open Source and Transparency
					</h2>
					<p className="opacity-90 text-lg">
						ClassPro is open-source, developed by a team of two. Our codebase is
						open for public review, ensuring transparency in data handling. You
						are welcome to explore or contribute via our official repository:{" "}
						<Link
							className="underline decoration-light-accent dark:decoration-dark-accent"
							target="_blank"
							href="https://github.com/Rahuletto/ClassPro"
						>
							Github
						</Link>
					</p>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-6">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						7. Policy Changes
					</h2>
					<p className="opacity-90 text-lg">
						We may periodically update this Privacy Policy. Any updates will be
						posted here, so please review regularly.
					</p>
				</section>

				<section className="text-base text-light-color dark:text-dark-color leading-relaxed space-y-6">
					<h2 className="text-3xl font-semibold text-light-accent dark:text-dark-accent">
						8. Contact Us
					</h2>
					<p className="opacity-90 text-lg">
						For any questions or concerns regarding this Privacy Policy, please
						contact us on WhatsApp.
					</p>
				</section>
			</div>
		</main>
	);
}
