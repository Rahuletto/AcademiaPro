import { useRef, useEffect } from 'react';

export function useInterval(callback: any, delay: number | null) {
  const intRef: any = useRef();
  const cb = useRef(callback);

  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      intRef.current = window.setInterval(() => cb.current(), delay);

      return () => window.clearInterval(intRef.current);
    }
  }, [delay]);

  return intRef;
}
