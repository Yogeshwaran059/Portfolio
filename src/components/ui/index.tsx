// src/components/ui/index.tsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ── Section Label ────────────────────────────────────────────
export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="section-label mb-4">
      <div className="w-6 h-0.5 bg-gradient-brand rounded-full" />
      {label}
    </div>
  );
}

// ── Animated Section ─────────────────────────────────────────
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Badge ────────────────────────────────────────────────────
interface BadgeProps {
  label: string;
  color?: string;
  size?: "sm" | "md";
}

export function Badge({ label, color = "#38BDF8", size = "sm" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold border transition-all duration-200 ${
        size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
      }`}
      style={{
        background: color + "18",
        color,
        borderColor: color + "30",
      }}
    >
      {label}
    </span>
  );
}

// ── Glow Orb (decorative) ────────────────────────────────────
interface GlowOrbProps {
  color: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export function GlowOrb({
  color,
  size = 400,
  top,
  left,
  right,
  bottom,
}: GlowOrbProps) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}14 0%, transparent 70%)`,
        filter: "blur(40px)",
        top,
        left,
        right,
        bottom,
      }}
    />
  );
}

// ── Scroll CTA arrow ─────────────────────────────────────────
export function ScrollIndicator({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`flex flex-col items-center gap-1 text-xs font-medium ${isDark ? "text-gray-600" : "text-gray-400"}`}
    >
      <span>Scroll</span>
      <div className={`w-px h-8 ${isDark ? "bg-gradient-to-b from-gray-600 to-transparent" : "bg-gradient-to-b from-gray-400 to-transparent"}`} />
    </motion.div>
  );
}
