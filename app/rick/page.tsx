"use client";
import { Sidebar } from "@/components/Sidebar";
import React, { useEffect } from "react";
import Image from "next/image";
import { colors } from "@/utils/ProfileColor";

export default function Papers() {
  useEffect(() => {
    const audio = new Audio("/audio/secret.mp3");
    audio.muted = true;
    audio.loop = true;
    audio
      .play()
      .then(() => {
        audio.muted = false;
      })
      .catch((error) => {});

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <Sidebar>
      <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-12">
        <Image src="/anim.gif" alt="papers" width={700} height={700} />
        <p className="mx-3 font-sans text-sm font-medium text-light-color dark:text-dark-color dark:opacity-60">
          Thank you <span style={{ color: colors[0] }}>Darshan 🥚</span>,{" "}
          <span style={{ color: colors[1] }}>Harshan</span>,{" "}
          <span style={{ color: colors[2] }}>Pranav</span>,{" "}
          <span style={{ color: colors[5] }}>Jeff stuart</span>,{" "}
          <span style={{ color: colors[8] }}>Arul kumaran 🗿</span>,{" "}
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
