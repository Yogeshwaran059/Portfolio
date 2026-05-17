// src/components/ui/LoadingScreen.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar from 0 → 100 over ~1.4s
    const steps = 60;
    const intervalMs = 1400 / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += 100 / steps;
      setProgress(Math.min(current, 100));
      if (current >= 100) {
        clearInterval(interval);
        // Brief pause at 100% before fading out
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 500);
        }, 200);
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0F]"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative flex flex-col items-center gap-10">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="flex flex-col items-center gap-3"
            >
              {/* YS monogram */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black border"
                style={{
                  background: "rgba(56,189,248,0.08)",
                  borderColor: "rgba(56,189,248,0.25)",
                  // background:
                  //   "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(167,139,250,0.08))",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg, #38BDF8, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  YS
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-sm font-semibold tracking-[3px] uppercase text-gray-500"
              >
                Portfolio
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-3 w-56"
            >
              <div className="w-full h-px bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #38BDF8, #A78BFA)",
                    transition: "width 0.05s linear",
                  }}
                />
              </div>
              <span className="text-xs font-mono text-gray-600">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
