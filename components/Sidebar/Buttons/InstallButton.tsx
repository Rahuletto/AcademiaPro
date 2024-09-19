'use client'
import { GrInstallOption } from "react-icons/gr";
import { usePwa } from "@dotmind/react-use-pwa";
import { useCallback, useEffect, useRef } from "react";

export default function InstallButton({
  ref,
  anchor,
}: {
  ref: any;
  anchor?: boolean;
}) {
  const deferredPrompt = useRef<any>(null)

  useEffect(() => {
    const handlePrompt = (e: any) => {
      e.preventDefault()
      deferredPrompt.current = e
    }

    window.addEventListener('beforeinstallprompt', handlePrompt)
    return () => window.removeEventListener('beforeinstallprompt', handlePrompt)
  })

  const installPWA = () => {
    try {
    if (!deferredPrompt.current) return
    deferredPrompt.current.prompt()
    deferredPrompt.current.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        deferredPrompt.current = null;
      }
    })
  } catch {
    alert("Seems like this isnt supported")
  }
  }

  return (
    (
      <>
      <button
        ref={ref}
        type="button"
        name="Open navbar"
        className={`fixed bottom-[5.14rem] flex items-center justify-start gap-3 rounded-full p-3 transition-all duration-100 lg:bottom-36 ${anchor ? "right-[2.1rem] lg:left-8" : "lg:right-7"} bg-light-background-light dark:bg-dark-background-light`}
        onClick={installPWA}
      >
        <GrInstallOption
          className={`text-xl text-light-color transition-all duration-75 dark:text-dark-color`}
        />
        {anchor && <p className="m-0 hidden font-semibold lg:block">Install</p>}
      </button>
      </>
    )
  );
}
