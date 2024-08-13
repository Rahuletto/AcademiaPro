import React from "react";
import { IoRefreshOutline } from "react-icons/io5";
import { MutateOptions, useMutateAll } from "@/hooks/useMutate";

export default function Refresh({ type }: { type?: MutateOptions }) {
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
      className={`rounded-full p-1 text-sm text-light-color opacity-60 transition duration-200 hover:bg-light-background-dark active:-rotate-45 dark:text-dark-color dark:hover:bg-dark-background-dark`}
      onClick={clickHandler}
    >
      <IoRefreshOutline />
    </button>
  );
}
