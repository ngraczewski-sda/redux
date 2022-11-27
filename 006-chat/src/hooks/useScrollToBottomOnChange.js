import { useEffect, useRef } from "react";

export const useScrollToBottomOnChange = (...dependencies) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [...dependencies]);

  return ref;
};
