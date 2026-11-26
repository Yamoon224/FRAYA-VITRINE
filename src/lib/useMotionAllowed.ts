"use client";

import { useEffect, useState } from "react";

export function useMotionAllowed() {
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowed(!query.matches);
    const onChange = () => setAllowed(!query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return allowed;
}
