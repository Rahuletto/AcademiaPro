import React from "react";
import { IoRefreshOutline } from "react-icons/io5";
import { MutateOptions, useMutateAll } from "@/hooks/useMutate";

export default function Refresh({
  type,
  isOld,
}: {
  type?: MutateOptions;
  isOld?: boolean;
}) {
  const mutateAll = useMutateAll();

  const clickHandler = () => {
    if (navigator.vibrate) {
      navigator.vibrate(20); // Vibrate for 50ms
    }

    const c = confirm(
      `Are you sure you want to refresh ${type ? "the particular component?" : "all data?"}`,
    );

    if (c) {
      mutateAll(type);
    }
  };

  return (
    <button
      tabIndex={0}
      className={`group rounded-full p-1 text-sm ${isOld ? "bg-light-info-color px-2 text-dark-color dark:bg-dark-info-color dark:text-light-color" : "text-light-color opacity-60 hover:bg-light-background-dark dark:text-dark-color dark:hover:bg-dark-background-dark"}`}
      onClick={clickHandler}
    >
      <IoRefreshOutline className="transition duration-200 group-active:-rotate-45" />
    </button>
  );
}
