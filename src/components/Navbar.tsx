// src/components/Navbar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import type { Theme } from "@/hooks";

interface NavbarProps {
  active: string;
  theme: Theme;
  onToggleTheme: () => void;
  onNavClick: (id: string) => void;
}
//onToggleTheme
export function Navbar({ active, theme , onNavClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl ${
          isDark
            ? "bg-dark-bg/85 border-dark-border"
            : "bg-light-bg/85 border-light-border"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="font-black text-xl tracking-tight gradient-text hover:opacity-80 transition-opacity"
          >
            YS<span className="text-brand-cyan">.</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                  active === link.id
                    ? "text-brand-cyan"
                    : isDark
                    ? "text-dark-text-muted hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-brand-cyan/10"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {/* <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl text-base transition-all duration-200 ${
                isDark
                  ? "bg-white/8 hover:bg-white/12"
                  : "bg-black/6 hover:bg-black/10"
              }`}
            >
              {isDark ? "☀️" : "🌙"}
            </button> */}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-900"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-900"} ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-900"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-16 left-0 right-0 z-40 border-b p-4 ${
              isDark
                ? "bg-dark-bg/95 border-dark-border"
                : "bg-light-bg/95 border-light-border"
            } backdrop-blur-xl`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all duration-200 block ${
                  active === link.id
                    ? "bg-brand-cyan/10 text-brand-cyan"
                    : isDark
                    ? "text-gray-400 hover:text-white hover:bg-white/5"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
