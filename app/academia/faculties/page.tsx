"use client";
import { Link } from "next-view-transitions";
import React, { useEffect, useState, useRef } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchUrl, urls, type UrlSearchResult } from "@/misc/faculties";

export default function FacultyPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [results, setResults] = useState<UrlSearchResult[]>([]);
	const [visibleItems, setVisibleItems] = useState(20);
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		setResults(searchUrl(searchQuery));
	}, [searchQuery]);

	useEffect(() => {
		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setVisibleItems((prevVisibleItems) => prevVisibleItems + 20);
			}
		});

		const load = document.querySelector("#load-more");
		if (load) {
			observer.current.observe(load);
		}

		return () => observer.current?.disconnect();
	}, [results]);

	const displayedResults = results?.[0] ? results.slice(0, visibleItems) : [];
	const defUrl = urls.slice(0, visibleItems);

	return (
		<div className="flex flex-col gap-12 h-screen">
			<section id="links" className="flex flex-col gap-6">
				<div>
					<h1 className="text-2xl font-semibold">Faculties</h1>
					<p className="text-sm opacity-50">
						<strong className="font-semibold">
							{results?.[0] ? results.length : urls.length}
						</strong>{" "}
						out of <strong className="font-semibold">{urls.length}</strong>{" "}
						faculties
					</p>
				</div>

				<div className="ml-2 border-l border-light-color/30 dark:border-dark-color/30 flex flex-col gap-10 md:ml-10">
					{displayedResults?.[0]
						? displayedResults.map((result, i) => (
								<Link
									href={result.url.url}
									target="_blank"
									key={i}
									className="flex w-fit flex-col cursor-pointer gap-1 before:content-[''] before:w-2 before:h-2 dark:before:bg-dark-accent before:bg-light-accent before:rounded-full before:mr-2 before:absolute pl-4 md:pl-6 relative before:-left-0.5 before:-ml-0.5 before:top-[10px]"
								>
									<p className=" rounded-md w-fit bg-light-button p-0.5 px-2 text-xs font-medium opacity-70 block dark:bg-dark-button">
										Similarity {result.similarity.toFixed(2)}
									</p>
									<h2 className="text-xl font-semibold capitalize">
										{result.url.title}
									</h2>
									<p className="opacity-50 text-sm">{result.url.url}</p>
								</Link>
							))
						: defUrl.map((url, i) => (
								<Link
									href={url.url}
									target="_blank"
									key={i}
									className="flex w-fit flex-col cursor-pointer gap-1 before:content-[''] before:w-2 before:h-2 dark:before:bg-dark-accent before:bg-light-accent before:rounded-full before:mr-2 before:absolute pl-4 md:pl-6 relative before:-left-0.5 before:-ml-0.5 before:top-[10px]"
								>
									<h2 className="text-xl font-semibold capitalize">
										{url.title}
									</h2>
									<p className="opacity-50 text-sm">{url.url}</p>
								</Link>
							))}
					<div id="load-more" className="h-10" />
				</div>
			</section>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
		</div>
	);
}
