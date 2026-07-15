"use client";

import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

/** Tracks the global pointer position (throttled to animation frames). */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        frame.current = null;
      });
    };
    window.addEventListener("pointermove", handle);
    return () => {
      window.removeEventListener("pointermove", handle);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return position;
}
