import { useRef, useEffect, MutableRefObject } from "react";

export function useInterval(callback: Function, delay: number | null) {
  const intRef: MutableRefObject<number | NodeJS.Timer | undefined> = useRef();
  const cb = useRef(callback);

  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === "number") {
      intRef.current = window.setInterval(() => cb.current(), delay);

      return () => window.clearInterval(intRef.current as number);
    }
  }, [delay]);

  return intRef;
}
