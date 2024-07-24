import React, { ComponentProps } from "react";
import { Link as ALink } from "next-view-transitions";
import NextLink from "next/link";

export default function Link({
  children,
  secondary,
  ...props
}: ComponentProps<typeof NextLink> & { secondary?: boolean }) {
  return (
    <ALink
      {...props}
      className={`${
        secondary
          ? "dark:bg-dark-button bg-light-button text-light-color dark:text-dark-color"
          : "dark:text-dark-background-dark w-min text-light-background-dark dark:bg-dark-accent bg-light-accent"
      } w-fit font-medium transition-all rounded-xl duration-300 transform hover:scale-105 hover:shadow-lg hover:opacity-80 px-5 py-1 ${
        props.className
      }`}
    >
      {children}
    </ALink>
  );
}
