"use client";

import React, { Dispatch, SetStateAction, RefObject, useState } from "react";

export default function UidInput({
  uid,
  setUid,
}: {
  uid: string;
  setUid: Dispatch<SetStateAction<string>>;
}) {
  return (
    <input
      value={uid}
      maxLength={20}
      className={`rounded-2xl rounded-bl-[6px] rounded-br-[6px] bg-dark-input dark:text-dark-color text-light-color px-6 py-3 font-medium font-sans`}
      onChange={(e) => setUid(e.target.value)}
      placeholder="User ID"
    />
  );
}
