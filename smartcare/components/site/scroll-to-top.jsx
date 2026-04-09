"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// SVG circle math — computed once, never changes
const SIZE = 56;
const STROKE = 3;
const RADIUS = (SIZE - STROKE * 2) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  // Ref to the progress ring circle — we mutate it directly, no re-render needed
  const ringRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0; // 0–1

      // Update ring directly via DOM — zero React re-render
      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset =
          CIRCUMFERENCE - progress * CIRCUMFERENCE;
      }

      // Only flip visible state when crossing threshold (rare → cheap)
      setVisible((prev) => {
        const shouldShow = scrollTop > 150;
        return prev === shouldShow ? prev : shouldShow;
      });

      rafRef.current = null;
    }

    function onScroll() {
      // Throttle: fire update at most once per animation frame
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // init on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 16 }}
          transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
          style={{ width: SIZE, height: SIZE }}
        >
          {/* Progress Ring SVG — ring arc updated via ref, no re-render */}
          <svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="absolute inset-0 -rotate-90"
            aria-hidden="true"
          >
            {/* Track ring */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="oklch(0.98 0 0 / 0.10)"
              strokeWidth={STROKE}
            />
            {/* Progress ring — mutated directly via ringRef */}
            <circle
              ref={ringRef}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="url(#scrollGrad)"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE} /* starts empty */
              style={{ transition: "stroke-dashoffset 0.12s linear" }}
            />
            <defs>
              <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.75 0.17 200)" />
                <stop offset="100%" stopColor="oklch(0.58 0.19 250)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner circle button */}
          <span
            className="relative z-10 flex items-center justify-center rounded-full"
            style={{
              width: SIZE - STROKE * 2 - 6,
              height: SIZE - STROKE * 2 - 6,
              background:
                "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.46 0.16 262))",
              boxShadow:
                "0 0 20px oklch(0.55 0.18 250 / 0.5), 0 4px 12px oklch(0.08 0.04 260 / 0.35)",
            }}
          >
            <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
