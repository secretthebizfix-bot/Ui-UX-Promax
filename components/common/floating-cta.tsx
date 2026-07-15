"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Sparkles } from "lucide-react";

/** A pill CTA that floats in after the hero and follows the user down-page. */
export function FloatingCta() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setVisible(v > 0.16 && v < 0.92));
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-glow-lg"
          >
            <Sparkles className="size-4 transition-transform duration-300 group-hover:rotate-12" />
            Get a free growth audit
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
