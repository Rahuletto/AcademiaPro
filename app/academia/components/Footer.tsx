import React, { useEffect } from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center text-sm opacity-60">
      Made by{" "}
      <div className="px-2 underline hover:cursor-pointer">
        <a href="https://marban.is-a.dev/">Marban</a>
      </div>{" "}
      &{" "}
      <div className="px-2 underline hover:cursor-pointer">
        <a href="https://www.linkedin.com/in/srivishal-sivasubramanian-1a09b9240/">
          root-daemon
        </a>
      </div>
    </div>
  );
}
