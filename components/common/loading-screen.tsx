"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/layout/logo";

/**
 * Brand loading screen shown on first paint. Uses sessionStorage so it only
 * appears once per session, never blocking repeat navigation.
 */
export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bbs-loaded")) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("bbs-loaded", "1");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo />
          </motion.div>
          <div className="h-[3px] w-48 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full rounded-full bg-gradient-to-r from-secondary via-accent to-highlight"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
