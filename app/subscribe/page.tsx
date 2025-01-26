// import { FaBookOpen } from "react-icons/fa";
// import ThemeToggle from "@/components/themes/ThemeToggle";
// import {
// 	BsFillCheckCircleFill,
// 	BsFillXCircleFill,
// 	BsShieldFillCheck,
// 	BsSlashCircleFill,
// } from "react-icons/bs";
// import { FaCrown } from "react-icons/fa6";
// import { fetchUserData } from "@/hooks/fetchUserData";
// import Button from "./Button";
// import Script from "next/script";
// import { supabase } from "@/utils/Database/supabase";

export default async function Subscribe() {
	return <div className="flex items-center justify-center h-full text-light-color dark:text-dark-color font-semibold text-5xl">Coming soon..</div>;

	// const { user } = await fetchUserData();

	// const { data, error } = await supabase
	// 	.from("goscrape")
	// 	.select("subscribed, subscribedSince")
	// 	.eq("regNumber", user?.regNumber)
	// 	.single();

	// if (error) {
	// 	console.warn("Cannot find");
	// }

	// const subscribed = data?.subscribed ?? false;
	// const subscribedSince = data?.subscribedSince ?? 0;

	// return (
	// 	<>
	// 		<Script
	// 			id="razorpay-checkout-js"
	// 			src="https://checkout.razorpay.com/v1/checkout.js"
	// 		/>
	// 		<main className="flex relative flex-col items-center justify-start gap-4 bg-light-background-normal p-4 pt-24 dark:bg-dark-background-dark w-screen min-h-screen">
	// 			<div className="flex absolute top-4 left-0 w-screen justify-between px-4 pl-8">
	// 				<div className="flex items-center justify-center gap-4">
	// 					<FaBookOpen className="text-2xl text-light-accent dark:text-dark-accent" />
	// 					<h2 className="text-xl hidden md:block font-semibold text-light-color dark:text-dark-color">
	// 						ClassPro.
	// 					</h2>
	// 				</div>
	// 				<ThemeToggle />
	// 			</div>

	// 			<div className="absolute inset-0 pointer-events-none opacity-60">
	// 				{Array.from({ length: 20 }).map((_, index) => (
	// 					<div
	// 						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
	// 						key={index}
	// 						className="absolute w-1 h-1 bg-light-accent dark:bg-dark-accent rounded-full"
	// 						style={{
	// 							top: `${Math.random() * 100}%`,
	// 							left: `${Math.random() * 100}%`,
	// 							opacity: Math.random(),
	// 							animation: `twinkle ${Math.random() * 2 + 2}s infinite, move ${Math.random() * 2 + 2}s infinite alternate`,
	// 						}}
	// 					/>
	// 				))}
	// 			</div>

	// 			<span
	// 				className="absolute animate-gradient top-0 left-0 bg-linear-to-br from-light-accent/10 dark:from-dark-accent/10 to-transparent"
	// 				style={{
	// 					width: "100%",
	// 					height: "100%",
	// 					pointerEvents: "none",
	// 				}}
	// 			/>
	// 			<p className="text-sm md:text-base font-mono text-center opacity-0 flex items-center justify-center gap-4 mb-4 text-light-color dark:text-dark-color">
	// 				Support the developer by subscribing.
	// 			</p>

	// 			<h1 className="md:text-6xl text-4xl md:max-w-3xl max-w-md mx-2 text-center font-semibold text-light-color dark:text-dark-color">
	// 				Become a supporter.
	// 			</h1>
	// 			<p className="text-xl font-medium text-center opacity-70 text-light-color dark:text-dark-color">
	// 				Unlock all features and fund me to keep this project alive.
	// 			</p>
	// 			<div className="flex gap-6 flex-col md:flex-row max-w-(--breakpoint-md) w-full mt-12">
	// 				<div
	// 					className={`bg-light-background-dark w-full md:w-1/2 dark:bg-dark-background-normal rounded-3xl p-8 px-10 border-2 ${!subscribed ? "dark:border-dark-accent border-light-accent" : "border-transparent"}`}
	// 				>
	// 					<h3 className="text-base opacity-40 text-light-color dark:text-dark-color text-center">
	// 						Free
	// 					</h3>
	// 					<h1 className="text-5xl mt-1 text-light-color dark:text-dark-color font-semibold text-center">
	// 						₹0
	// 					</h1>
	// 					<div className="flex flex-col gap-2 text-left items-start justify-start mx-3 mt-8">
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsShieldFillCheck className="text-light-success-color text-lg dark:text-dark-success-color" />{" "}
	// 							Encrypted data.
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillCheckCircleFill className="text-light-success-color text-lg dark:text-dark-success-color" />{" "}
	// 							View data.
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillCheckCircleFill className="text-light-success-color text-lg dark:text-dark-success-color" />{" "}
	// 							No ads.
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsSlashCircleFill className="text-light-warn-color text-lg dark:text-dark-warn-color" />{" "}
	// 							One-range Attendance Predict
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsSlashCircleFill className="text-light-warn-color text-lg dark:text-dark-warn-color" />{" "}
	// 							Manual Grade calculation
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillXCircleFill className="text-light-error-color text-lg dark:text-dark-error-color" />{" "}
	// 							900+ Previous year papers
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillXCircleFill className="text-light-error-color text-lg dark:text-dark-error-color" />{" "}
	// 							Faculties directory
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillXCircleFill className="text-light-error-color text-lg dark:text-dark-error-color" />{" "}
	// 							Download data
	// 						</p>
	// 					</div>
	// 				</div>
	// 				<div
	// 					className={`bg-light-background-dark scale-105 w-full md:w-1/2 dark:bg-dark-background-normal rounded-3xl pt-8 p-5 border-2 ${subscribed ? "dark:border-dark-accent border-light-accent" : "border-transparent"}`}
	// 				>
	// 					<h3 className="text-base opacity-40 text-light-color dark:text-dark-color text-center">
	// 						Supporter
	// 					</h3>
	// 					<h1 className="text-5xl mt-1 text-light-color dark:text-dark-color font-semibold text-center">
	// 						₹30<span className="opacity-80 text-sm">/month</span>
	// 					</h1>
	// 					<div className="flex flex-col gap-2 text-left items-start justify-start mx-3 mt-8 px-5">
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<FaCrown className="text-light-warn-color text-lg dark:text-dark-warn-color" />{" "}
	// 							Support the developer
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsShieldFillCheck className="text-light-success-color text-lg dark:text-dark-success-color" />{" "}
	// 							Encrypted data.
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-start justify-start gap-2 text-left opacity-80">
	// 							<BsFillCheckCircleFill className="text-light-success-color text-lg mt-1 dark:text-dark-success-color" />{" "}
	// 							Multi-date Attendance and ODML Predict
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillCheckCircleFill className="text-light-success-color text-lg dark:text-dark-success-color" />{" "}
	// 							Auto-GradeX
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillCheckCircleFill className="text-light-success-color text-lg dark:text-dark-success-color" />{" "}
	// 							900+ Previous year papers
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-center justify-start gap-2 text-left opacity-80">
	// 							<BsFillCheckCircleFill className="text-light-success-color text-lg dark:text-dark-success-color" />{" "}
	// 							Faculties directory
	// 						</p>
	// 						<p className="text-light-color dark:text-dark-color flex flex-row items-start justify-start gap-2 text-left opacity-80">
	// 							<BsFillCheckCircleFill className="text-light-success-color text-lg dark:text-dark-success-color mt-1" />{" "}
	// 							Download Timetable and Calendar
	// 						</p>
	// 					</div>

	// 					{subscribed ? (
	// 						<div className="rounded-full flex group justify-between items-center w-full px-5 py-2 font-semibold border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent mt-6 border-2">
	// 							Ends on{" "}
	// 							{new Date(
	// 								subscribedSince + 30 * 24 * 60 * 60 * 1000,
	// 							).toLocaleDateString(undefined, {
	// 								day: "numeric",
	// 								month: "long",
	// 							})}
	// 						</div>
	// 					) : (
	// 						<Button user={user} />
	// 					)}
	// 				</div>
	// 			</div>
	// 		</main>
	// 	</>
	// );
}
