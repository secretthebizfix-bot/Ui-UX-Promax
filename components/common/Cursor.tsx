"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom animated cursor + glow. Only renders on fine-pointer (desktop) devices
 * and hides on touch. Native cursor is preserved for accessibility fallback.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 900, damping: 40 });
  const dotY = useSpring(y, { stiffness: 900, damping: 40 });
  const ringX = useSpring(x, { stiffness: 180, damping: 22 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest("a, button, [role='button'], input, textarea, select, label")
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[300] hidden lg:block" aria-hidden="true">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute -ml-4 -mt-4"
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.5 : 0.9 }}
          transition={{ duration: 0.2 }}
          className="h-8 w-8 rounded-full border border-brand-600/70 dark:border-cyanic/70"
        />
      </motion.div>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute -ml-1 -mt-1"
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          className="h-2 w-2 rounded-full bg-brand-600 dark:bg-cyanic"
        />
      </motion.div>
    </div>
  );
}
