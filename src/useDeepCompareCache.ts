import { useRef } from "react";
import isEqual from "fast-deep-equal/react";

/**
 * useDeepCompareCache
 *
 * @param obj
 */
export default function useDeepCompareCache<T>(obj: T): T {
  const ref = useRef<T>(obj);

  if (!isEqual(ref.current, obj)) {
    ref.current = obj;
  }

  return ref.current;
}
