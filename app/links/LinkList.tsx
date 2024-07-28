import { Link, useTransitionRouter } from "next-view-transitions";
import React from "react";
import { DirLink } from "./links";

export default function LinkList({ url }: { url: DirLink }) {
  return (
    <Link href={url.url} target="_blank" className="relative w-fit">
      <Svg />
      <div className="ml-4 flex flex-col">
        <div className="flex items-center justify-start gap-3 pl-4">
          <Link href={url.url} target="_blank" className="text-lg font-medium">
            {url.site}
          </Link>
          <span className="hidden rounded-md bg-light-button p-0.5 px-1 text-xs font-medium opacity-70 md:block dark:bg-dark-button">
            {url.url}
          </span>
        </div>
        <p className="mb-4 ml-4 text-sm opacity-50">{url.description}</p>
      </div>
    </Link>
  );
}

function Svg() {
  return (
    <svg
      className="absolute -left-3 -top-4 opacity-80"
      width="40"
      height="30"
      viewBox="0 0 50 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0V63C6 103.869 39.1309 137 80 137H84"
        stroke="currentColor"
        stroke-width="12"
      />
    </svg>
  );
}
