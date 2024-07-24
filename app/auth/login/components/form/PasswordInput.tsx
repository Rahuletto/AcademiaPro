"use client";

import React, {
  useState,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
} from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

export default function PasswordInput({
  password,
  setPassword,
}: {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) {
  const [visible, setVisible] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "p") {
      e.preventDefault();
      setVisible((prev) => !prev);
    }
  };

  return (
    <>
      <input
        type={visible ? "text" : "password"}
        value={password}
        onKeyDown={handleKeyDown}
        className={`rounded-2xl rounded-tl-[6px] rounded-tr-[6px] bg-dark-input dark:text-dark-color text-light-color px-6 py-3 font-medium font-sans`}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passw*rd"
      />
      {password && (
        <button
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="absolute bottom-[16px] right-0 pr-4 text-right dark:text-dark-accent text-light-accent"
          onClick={() => setVisible((e) => !e)}
        >
          {visible ? <BsEyeSlashFill /> : <BsEyeFill />}
        </button>
      )}
    </>
  );
}
