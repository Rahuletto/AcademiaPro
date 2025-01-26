// biome-ignore lint/a11y/useSemanticElements: <explanation>
"use client";

import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Popup() {
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		const isAcknowledged = localStorage.getItem("popup");
		if (!isAcknowledged) setOpened(true);
	}, []);

	function clicked() {
		setOpened(false);
		localStorage.set("popup", true);
	}

	return (
		opened && (
			<div

				role="button"
				tabIndex={0}
				className="fixed inset-0 z-50 flex animate-fastfade items-center justify-center bg-black/30 backdrop-blur-xs transition duration-150"
			>
				<div
					role="button"
					tabIndex={-1}
					onKeyDown={() => {}}
					onClick={(e) => {
						e.stopPropagation();
					}}
					className="relative md:w-[30%] w-[25%] min-w-[350px] max-w-[400px] text-light-color dark:text-dark-color cursor-default items-center justify-center flex flex-col rounded-[42px] bg-light-background-normal p-4 pb-20 shadow-lg dark:bg-dark-background-normal"
				>
					<div className="mb-6 flex flex-col items-center justify-center gap-5 p-2">
						<FaBookOpen
							style={{ filter: "drop-shadow(0px 0px 0.7px var(--accent))" }}
							className="text-4xl text-light-accent dark:text-dark-accent"
						/>
						<h2 className="text-2xl -mb-3 font-semibold capitalize text-light-color dark:text-dark-color">
							ClassPro
						</h2>
						{/* <p className="-mt-3 text-sm underline text-light-color dark:text-dark-color decoration-light-accent opacity-40 dark:decoration-dark-accent">
            AcademiaPro is now ClassPro
          </p> */}
					</div>
					<p className="mx-2 text-center opacity-50 text-light-color dark:text-dark-color">
						This free,{" "}
						<Link
							href={"https://github.com/rahuletto/classpro"}
							className="underline decoration-dashed"
						>
							open-source
						</Link>{" "}
						platform is entirely developed by students, operates independently,
						without any direct connection or endorsement from the university.
					</p>
					<button
						type="button"
						onClick={clicked}
						className="absolute bottom-0 left-0 flex h-12 w-full items-center justify-center rounded-b-[42px] bg-light-accent font-medium text-light-background-light dark:text-dark-background-darker"
					>
						Accept and Continue
					</button>
				</div>
			</div>
		)
	);
}
