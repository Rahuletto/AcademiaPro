import React from "react";
import { IoRefreshOutline } from "react-icons/io5";
import { MutateOptions, useMutateAll } from "@/hooks/useMutate";

export default function Refresh({ type }: {type?: MutateOptions}) {
  const mutateAll = useMutateAll();
  return (
    <button
      tabIndex={0}
      className={`rounded-full p-1 text-sm opacity-60 transition duration-200 hover:bg-light-background-dark active:-rotate-45 dark:hover:bg-dark-background-dark dark:text-dark-color text-light-color`}
      onClick={() => mutateAll(type)}
    >
      <IoRefreshOutline />
    </button>
  );
}
