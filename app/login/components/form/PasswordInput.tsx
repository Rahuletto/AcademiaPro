"use client";

import React, { useState, RefObject, Dispatch,SetStateAction } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

export default function PasswordInput({

    password,
    setPassword
}: {

    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <input
        type={visible ? "text" : "password"}
        value={password}
        className={`rounded-2xl rounded-tl-[6px] rounded-tr-[6px] bg-dark-input dark:text-dark-color text-light-color px-6 py-3 font-medium font-sans`}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passw*rd"
      />
      {password && (
        <span
          className="absolute bottom-[16px] right-0 pr-4 text-right dark:text-dark-accent text-light-accent"
          onClick={() => setVisible((e) => !e)}
        >
          {visible ? <BsEyeSlashFill /> : <BsEyeFill />}
        </span>
      )}
    </>
  );
}
