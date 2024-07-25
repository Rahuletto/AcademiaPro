import React from "react";
import { RiLoader3Fill } from "react-icons/ri";

export default function Loading() {
  return (
    <div className="flex h-full max-h-[80vh] min-w-full animate-fadeIn flex-col items-center justify-center rounded-2xl bg-light-button p-12 text-light-accent dark:bg-dark-button dark:text-dark-accent">
      <RiLoader3Fill
        title="loading"
        className="animate-spin text-5xl font-medium text-light-accent dark:text-dark-accent"
      />
    </div>
  );
}
