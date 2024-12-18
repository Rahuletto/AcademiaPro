"use client";
import React, { useCallback, useState } from "react";
import UidInput from "./form/UidInput";
import PasswordInput from "./form/PasswordInput";
import { Cookie as cookies } from "@/utils/Cookies";
import rotateUrl, { revalUrl } from "@/utils/URL";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { token } from "@/utils/Tokenize";
import { fetcher, useData } from "@/provider/DataProvider";
import useSWR from "swr";
import SvgForm from "./SvgForm";

export default function Form() {
  const router = useRouter();
  const { mutate } = useSWR(`${revalUrl}/getData`);

  const [uid, setUid] = useState("");
  const [pass, setPass] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [response, setResponse] = useState<any>(null);

  const [error, setError] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const handleCaptcha = useCallback(async () => {
    setError(-1);

    const r = await fetch(`${rotateUrl()}/login/captcha`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${token()}`,
        Connection: "keep-alive",
        "content-type": "application/json",
        Origin: "https://academia-pro.vercel.app",
      },
      body: JSON.stringify({
        account: uid.replaceAll(" ", "").replace("@srmist.edu.in", ""),
        password: pass,
        captcha: captcha,
        identifier: response.identifier,
        digest: response.digest,
        cdigest: response.cdigest,
      }),
    });

    if (!r.ok) {
      setError(1);
      setMessage("Server down.");
    }
    const res = await r.json();
    if (res.authenticated) {
      setError(2);
      cookies.set("key", res.cookies);
      router.push("/academia");
    } else if (res?.message) {
      setError(1);
      setMessage(res?.message);
    }
  }, [captcha, uid, pass, router, response]);

  const handleLogin = useCallback(async () => {
    setError(-1);

    try {
      const response = await fetch(`${rotateUrl()}/login`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token()}`,
          Connection: "keep-alive",
          "content-type": "application/json",
          Origin: "https://academia-pro.vercel.app",
        },
        body: JSON.stringify({
          account: uid.replaceAll(" ", "").replace("@srmist.edu.in", ""),
          password: pass,
        }),
      });
      if (!response.ok) {
        setError(1);
        setMessage("Server down.");
      }

      const res = await response.json();

      if (res.cookies && res.cookies?.includes("undefined")) {
        setError(1);
        setMessage("Session invalid?");
      }
      if (res.captcha) {
        setResponse(res);
      } else if (res?.message?.includes("HIP")) {
        if (res?.localized_message) {
          setError(1);
          setMessage(res.localized_message);
        } else {
          setError(1);
          setMessage(res?.message);
        }
      } else if (res.authenticated) {
        setError(2);
        setMessage("Loading data...");
        cookies.set("key", res.cookies);
        setTimeout(() => {
          fetcher(`${revalUrl}/update`, res.cookies, true).then((data) => {
            mutate(data, {
              optimisticData: data,
              revalidate: false,
              populateCache: true,
            }).then(() => router.push("/academia"));
          });
        }, 100);
      } else if (res?.message) {
        setError(1);
        setMessage(res?.message);
      }
    } catch (error) {
      console.warn(error);
    } finally {
      setTimeout(() => setError(0), 6000);
    }
  }, [uid, pass, router]);

  return (
    <SvgForm />
    
  );
}
