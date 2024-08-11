import React, { ComponentProps } from "react";
import { Link as ALink } from "next-view-transitions";
import type NextLink from "next/link";

export default function SidebarLink({
  children,
  ...props
}: ComponentProps<typeof NextLink>) {
  return (
    <ALink
      tabIndex={0}
      {...props}
      className={`font-semibold ${props.href === window.location.pathname && window.location.pathname === "/papers" ? "text-[#786CFF] bg-[#786CFF1e] hover:text-[#786CFF] dark:text-[#857aff] dark:bg-[#786CFF1e] dark:hover:text-[#857aff]" : props.href === window.location.pathname ? "bg-light-side text-light-accent dark:bg-dark-side dark:text-dark-accent" : props.className ? props.className : "hover:bg-light-side hover:text-light-accent hover:opacity-70 dark:hover:bg-dark-side dark:hover:text-dark-accent"} text-color flex flex-row-reverse items-center justify-between rounded-xl px-4 py-2 text-lg transition duration-150 hover:scale-[0.98]`}
    >
      {children}
    </ALink>
  );
}
