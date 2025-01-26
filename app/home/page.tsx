import { Link } from "next-view-transitions";
import { FaBookOpen } from "react-icons/fa";
import ThemeToggle from "@/components/themes/ThemeToggle";
import { cookies } from "next/headers";
import { VscMegaphone } from "react-icons/vsc";
import Image from "next/image";

export default async function Academia() {
	const cookie = (await cookies()).get("key");
	return (
		<main className="flex relative flex-col items-center justify-start gap-4 bg-light-background-normal p-4 pt-24 dark:bg-dark-background-dark w-screen h-screen overflow-hidden">
			<div className="flex absolute top-4 left-0 w-screen justify-between px-4 pl-8">
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
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
			<Link
				href="https://marban.hashnode.dev/classpro-v3"
				className="text-sm md:text-base font-mono text-center opacity-50 flex items-center justify-center gap-4 mb-4 text-light-color dark:text-dark-color"
			>
				<VscMegaphone className="-rotate-12 text-xl" /> Read about ClassPro v3
			</Link>

			<h1 className="md:text-6xl text-4xl md:max-w-3xl max-w-md mx-2 text-center font-semibold text-light-color dark:text-dark-color">
				Better way to manage
				<br />
				your academics.
			</h1>
			<p className="text-xl font-medium text-center opacity-70 text-light-color dark:text-dark-color">
				View, predict, and strategize your success.
			</p>
			<div className="flex gap-3 items-center justify-center mt-8">
				{cookie?.value ? (
					<Link
						href="/academia"
						className="text-md flex w-auto transform items-center justify-center rounded-2xl border-2 border-transparent bg-light-accent px-5 py-2 text-lg font-semibold text-light-background-light transition-all duration-150  dark:bg-dark-accent dark:text-dark-background-darker hover:opacity-80"
					>
						Dashboard
					</Link>
				) : (
					<Link
						href="/auth/login"
						className="text-md flex w-auto transform items-center justify-center rounded-2xl border-2 border-transparent bg-light-accent px-5 py-2 text-lg font-semibold text-light-background-light transition-all duration-150  dark:bg-dark-accent dark:text-dark-background-darker hover:opacity-80"
					>
						Login
					</Link>
				)}
				<Link
					href="https://academia.srmist.edu.in"
					className="text-md flex w-auto transform items-center justify-center rounded-2xl border-2 border-light-accent px-5 py-2 text-lg font-semibold text-light-accent dark:text-dark-accent transition-all duration-150 dark:border-dark-accent"
				>
					SRM Academia
				</Link>
			</div>

			<Image
				src="/screenshots/wide/academia.webp"
				className="aspect-video z-20 hidden lg:block rounded-2xl shadow-2xl mt-20 mx-20"
				alt="Hero"
				width={1200}
				height={940}
			/>
			<Image
				src="/screenshots/phone/academia.webp"
				className="z-20 lg:hidden block rounded-2xl shadow-2xl mt-20 mx-20"
				alt="Hero"
				width={430}
				height={932}
			/>
		</main>
	);
}
