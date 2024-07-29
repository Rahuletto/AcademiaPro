import React, { ComponentProps } from "react";
import { Link as ALink } from "next-view-transitions";
import NextALink from "next/link";
import NextLink from "next/link";

export default function Link({
  children,
  secondary,
  force,
  ...props
}: ComponentProps<typeof NextLink> & { secondary?: boolean; force?: boolean }) {
  return force ? (
    <NextALink
      {...props}
      tabIndex={0}
      className={`${
        secondary
          ? "bg-light-button text-light-color dark:bg-dark-button dark:text-dark-accent"
          : "w-min bg-light-accent text-light-background-dark dark:bg-dark-accent dark:text-dark-background-dark"
      } w-fit transform rounded-xl px-5 py-1 font-medium transition-all duration-300 hover:scale-105 hover:opacity-80 ${
        props.className
      }`}
    >
      {children}
    </NextALink>
  ) : (
    <ALink
      {...props}
      tabIndex={0}
      className={`${
        secondary
          ? "bg-light-button text-light-color dark:bg-dark-button dark:text-dark-accent"
          : "w-min bg-light-accent text-light-background-dark dark:bg-dark-accent dark:text-dark-background-dark"
      } w-fit transform rounded-xl px-5 py-1 font-medium transition-all duration-300 hover:scale-105 hover:opacity-80 ${
        props.className
      }`}
    >
      {children}
    </ALink>
  );
}
