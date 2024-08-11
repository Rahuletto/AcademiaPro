import React from "react";
import { BiError } from "react-icons/bi";

export default function Error({ component }: { component: string }) {
  return (
    <div className="flex h-full max-h-[80vh] min-w-full animate-fadeIn flex-col items-center justify-center gap-2 rounded-2xl bg-light-error-background p-8 text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color">
      <BiError className="mb-3 text-4xl" />
      <h1 className="text-2xl font-medium text-light-error-color dark:text-dark-error-color">
        Error.
      </h1>
      <p className="text-md text-light-error-color opacity-90 dark:text-dark-error-color">
        Oops, an error occured at <code>{component}</code>.
      </p>
    </div>
  );
}
