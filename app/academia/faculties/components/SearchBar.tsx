"use client";
import React, { useEffect, useRef } from "react";
import { LuSquareSlash } from "react-icons/lu";

interface SearchBarProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
	const searchbox = useRef<HTMLInputElement>(null);
	const [isMounted, setIsMounted] = React.useState(false);

	useEffect(() => {
		function keyHandler(e: KeyboardEvent) {
			if (e.metaKey && e.key === "k") {
				e.preventDefault();
				searchbox.current?.focus();
			} else if (e.key === "/") {
				e.preventDefault();
				searchbox.current?.focus();
			}
			if (e.key === "Escape" && searchbox.current) {
				searchbox.current.blur();
			}
		}

		setIsMounted(true);
		window.addEventListener("keydown", keyHandler);

		return () => {
			window.removeEventListener("keydown", keyHandler);
		};
	}, []);

	if (!isMounted) return null;
	return (
		<div className="sticky z-50 bottom-6 left-0 flex w-full items-center justify-center duration-200 focus-within:mb-8 focus-within:scale-105 active:mb-8 active:scale-105">
					<input
						tabIndex={0}
						ref={searchbox}
						type="text"
						placeholder="Search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="relative z-10 w-[250px] animate-fastfade rounded-xl bg-light-button px-4 py-2 text-lg font-medium shadow-lg outline-hidden backdrop-blur-lg dark:backdrop-blur-lg transition-all duration-200 md:w-[350px] dark:bg-dark-button"
					/>
					<div className="relative right-8 z-10 text-xl opacity-50">
						<LuSquareSlash />
					</div>
				</div>
	);
}
