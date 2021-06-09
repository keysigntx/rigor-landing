import { useEffect } from "react";

export default function useOutsideAlerter(ref, callback) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(false);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

export const Breakpoints = {
  xs: 320,
  sm: 768,
  md: 1200,
  lg: 1600,
};
