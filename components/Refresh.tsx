import React from "react";
import { IoRefreshOutline } from "react-icons/io5";
import { MutateOptions, useMutateAll } from "@/hooks/useMutate";

export default function Refresh({ type, isOld }: { type?: MutateOptions; isOld?: boolean }) {
  const mutateAll = useMutateAll();
  const clickHandler = () => {
    const c = confirm(
      `Are you sure you want to refresh ${type ? "the particular component?" : "all data?"}`,
    );
    if (c) mutateAll(type);
  };

  return (
    <button
      tabIndex={0}
      className={`rounded-full p-1 text-sm group ${isOld ? "bg-light-info-color dark:bg-dark-info-color dark:text-light-color text-dark-color px-2" : "hover:bg-light-background-dark text-light-color opacity-60 dark:text-dark-color dark:hover:bg-dark-background-dark"}`}
      onClick={clickHandler}
    >
      <IoRefreshOutline className="group-active:-rotate-45 transition duration-200" />
    </button>
  );
}
