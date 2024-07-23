"use client";
import React, { useCallback, useState } from "react";
import UidInput from "./form/UidInput";
import PasswordInput from "./form/PasswordInput";
import { Cookie as cookies } from "@/utils/Cookies";
import { ProscrapeURL } from "@/utils/URL";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [uid, setUid] = useState("");
  const [pass, setPass] = useState("");

  const [error, setError] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const handleLogin = useCallback(async () => {
    setError(-1);

    try {
      const response = await fetch(`${ProscrapeURL}/api/login`, {
        method: "POST",
        headers: {
          Connection: "keep-alive",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          account: uid,
          password: pass.replaceAll(" ", "").replace("@srmist.edu.in", ""),
        }),
      });

      const res = await response.json();
      if (res.cookies) {
        setError(2);
        cookies.set("token", res.cookies);
        router.push("/academia");
      } else if (res.message) {
        setError(1);
        setMessage(res.message);
      }
    } catch (error) {
      console.warn(error);
      setError(1);
    } finally {
      setTimeout(() => setError(0), 6000);
    }
  }, [uid, pass, router]);

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      {error === 1 && (
        <p className="px-4 py-2 dark:bg-dark-error-background bg-light-error-background rounded-2xl dark:text-dark-error-color text-light-error-color">
          {message}
        </p>
      )}
      <div className="relative flex flex-col gap-1">
        <UidInput uid={uid} setUid={setUid} />
        <PasswordInput password={pass} setPassword={setPass} />
      </div>

      <Button
        disabled={!uid || !pass}
        className={
          error === -1
            ? "dark:bg-dark-warn-background border bg-light-warn-background dark:text-dark-warn-color text-light-warn-color dark:border-dark-warn-color border-light-warn-color"
            : error === 2
            ? "dark:bg-dark-success-background border bg-light-success-background dark:text-dark-success-color text-light-success-color dark:border-dark-success-color border-light-success-color"
            : error === 1
            ? "dark:bg-dark-error-background border bg-light-error-background dark:text-dark-error-color text-light-error-color dark:border-dark-error-color border-light-error-color"
            : ""
        }
        type="submit"
        onClick={handleLogin}
      >
        {error === -1 ? "Authenticating" : "Login"}
      </Button>
    </form>
  );
}
