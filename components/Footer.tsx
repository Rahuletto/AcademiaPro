import React from "react";

export default function Footer({ className = "" }) {
  return (
    <div
      className={`font-mono flex items-center justify-center text-center text-sm opacity-60 ${className}`}
    >
      Made by{" "}
      <div className="px-2 font-medium underline hover:cursor-pointer">
        <a href="https://marban.is-a.dev/">Marban</a>
      </div>{" "}
      &{" "}
      <div className="px-2 font-semibold underline hover:cursor-pointer">
        <a href="https://www.linkedin.com/in/srivishal-sivasubramanian-1a09b9240/">
          Vishal
        </a>
      </div>
    </div>
  );
}
