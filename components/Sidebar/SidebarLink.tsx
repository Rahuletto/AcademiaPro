import React, { ComponentProps } from "react";
import { Link as ALink } from "next-view-transitions";
import NextLink from "next/link";

export default function Link({ children, ...props }: ComponentProps<typeof NextLink>) {
  return (
    <ALink
      {...props}
      className={`
        ${props.href === window.location.pathname ? "bg-light-side dark:bg-dark-side text-light-accent dark:text-dark-accent" : ""}
        px-4 py-2 rounded-xl flex items-center text-color hover:text-accent dark:hover:text-dark-accent transition justify-between flex-row-reverse ${props.className} `}
    >
      {children}
    </ALink>
  );
}
