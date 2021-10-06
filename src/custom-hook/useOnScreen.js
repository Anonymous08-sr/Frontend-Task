import { useCallback, useRef } from "react";

export default function useOnScreen(count, cbFn) {
  const observerRef = useRef(null);
  const lastBookElementRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && count < 100) {
          cbFn();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [count, cbFn]
  );
  return lastBookElementRef;
}
