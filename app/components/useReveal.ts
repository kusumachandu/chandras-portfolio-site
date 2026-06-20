"use client";

import { useEffect, useRef, useState, RefCallback } from "react";

export function useReveal(threshold = 0.08): [RefCallback<HTMLElement>, boolean] {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref: RefCallback<HTMLElement> = (node) => {
    if (observerRef.current) observerRef.current.disconnect();
    if (!node) return;
    observerRef.current = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observerRef.current.observe(node);
  };

  return [ref, visible];
}
