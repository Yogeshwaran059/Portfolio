// src/components/ui/CursorEffect.tsx
// Renders a subtle glowing dot that follows the cursor.
// Only active on non-touch / desktop devices.
import { useEffect, useRef } from "react";

export function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't activate on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    // Glow trails with lerp
    const animate = () => {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.style.transform += " scale(2.5)";
      dot.style.background = "#A78BFA";
    };
    const onLeaveLink = () => {
      dot.style.background = "#38BDF8";
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    // Scale up dot on interactive elements
    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Small precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{
          background: "#38BDF8",
          boxShadow: "0 0 8px #38BDF8",
          transition: "background 0.2s, box-shadow 0.2s",
          willChange: "transform",
        }}
      />
      {/* Large trailing glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9997]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 65%)",
          willChange: "transform",
        }}
      />
    </>
  );
}
