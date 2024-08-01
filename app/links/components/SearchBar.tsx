"use client";
import React, { useEffect, useRef } from "react";
import { LuSquareSlash } from "react-icons/lu";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  const searchbox = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function keyHandler(e: KeyboardEvent) {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        searchbox.current?.focus();
      } else if (e.key === "/") {
        e.preventDefault();
        searchbox.current?.focus();
      }
      if (e.key === "Escape") searchbox.current?.blur();
    }
    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div className="absolute bottom-8 left-0 z-20 flex w-full items-center justify-center duration-200 focus-within:mb-8 focus-within:scale-105 active:mb-8 active:scale-105">
      <input
        tabIndex={0}
        ref={searchbox}
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ WebkitBackdropFilter: "blur(12px)" }}
        className="relative z-10 md:w-[350px] w-[250px] animate-fastfade rounded-xl bg-light-button bg-opacity-80 px-4 py-2 text-lg font-medium shadow-lg outline-none backdrop-blur-md transition-all duration-200 dark:bg-dark-button"
      />
      <div className="relative right-8 z-10 text-xl opacity-50">
        <LuSquareSlash />
      </div>
    </div>
  );
}
