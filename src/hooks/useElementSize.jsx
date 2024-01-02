import { useCallback, useState } from "react";

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useEventListener } from "./useEventListener";

export function useElementSize() {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      height: ref?.offsetHeight || 0,
      width: ref?.offsetWidth || 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener("resize", handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size];
}
