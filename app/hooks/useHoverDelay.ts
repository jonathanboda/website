import { useRef, useCallback } from 'react';

export function useHoverDelay(delay: number = 300) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const delayedClose = useCallback(
    (callback: () => void) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(callback, delay);
    },
    [delay]
  );

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return { delayedClose, cancel };
}
