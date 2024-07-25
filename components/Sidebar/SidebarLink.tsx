import React, { ComponentProps } from "react";
import { Link as ALink } from "next-view-transitions";
import type NextLink from "next/link";

export default function Link({
  children,
  ...props
}: ComponentProps<typeof NextLink>) {
  return (
    <ALink
      {...props}
      className={` ${props.href === window.location.pathname ? "bg-light-side text-light-accent dark:bg-dark-side dark:text-dark-accent" : props.className ? props.className : "hover:bg-light-side hover:text-light-accent hover:opacity-70 dark:hover:bg-dark-side dark:hover:text-dark-accent"} text-color flex flex-row-reverse items-center justify-between rounded-xl px-4 py-2 text-lg transition hover:scale-[0.98]`}
    >
      {children}
    </ALink>
  );
}
