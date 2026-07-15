"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Custom animated cursor: a precise dot plus a soft glow ring that lags
 * behind and expands over interactive elements. Desktop / fine-pointer only.
 */
export function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });

  useEffect(() => {
    if (!finePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const target = e.target as HTMLElement;
      setActive(!!target.closest('a, button, [role="button"], input, textarea, select, label'));
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.body.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [finePointer, x, y]);

  if (!finePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <motion.div
        style={{ x, y }}
        animate={{ scale: active ? 0 : 1, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute -ml-1 -mt-1 size-2 rounded-full bg-secondary mix-blend-difference"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: active ? 1.6 : 1, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute -ml-5 -mt-5 size-10 rounded-full border border-accent/70 bg-accent/10 backdrop-blur-[1px]"
      />
    </div>
  );
}
