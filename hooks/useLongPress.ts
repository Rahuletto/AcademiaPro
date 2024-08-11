import { useCallback, useRef } from "react";

export default function useLongPress(callback: () => any, ms = 500) {
  const timerRef = useRef<number>(0);

  const endTimer = () => {
    clearTimeout(timerRef.current || 0);
    timerRef.current = 0;
  };

  const onStartLongPress = useCallback(
    (e: any) => {
      endTimer();

      timerRef.current = window.setTimeout(() => {
        callback();
        endTimer();
      }, ms);
    },
    [callback, ms],
  );

  const onEndLongPress = useCallback(() => {
    if (timerRef.current) {
      endTimer();
      callback();
    }
  }, [callback]);

  return [onStartLongPress, onEndLongPress, endTimer];
}
