import { Sidebar } from "@/components/Sidebar";
import React from "react";
import Image from "next/image";
import { colors } from "@/utils/ProfileColor";

export default function Papers() {
  return (
    <Sidebar>
      <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-12">
        <Image src="/anim.gif" alt="papers" width={700} height={700} />
        <p className="mx-3 font-sans text-sm font-medium text-light-color dark:opacity-60 dark:text-dark-color">
          Thank you <span style={{ color: colors[0] }}>Darshan 🥚</span>,{" "}
          <span style={{ color: colors[1] }}>Harshan</span>,{" "}
          <span style={{ color: colors[2] }}>Pranav</span>,{" "}
          <span style={{ color: colors[5] }}>Jeff stuart</span>,{" "}
          <span style={{ color: colors[8] }}>Arulkumaran</span>,{" "}
          <span style={{ color: colors[12] }}>Ravindra</span>,{" "}
          <span style={{ color: colors[10] }}>Nitheesh</span> for huntin{" "}
          <span className="text-light-error-color dark:text-dark-error-color">
            bugs
          </span>{" "}
          in the wild.
        </p>
      </div>
    </Sidebar>
  );
}
