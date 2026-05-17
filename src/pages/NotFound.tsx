// src/pages/NotFound.tsx
import { motion } from "framer-motion";

interface NotFoundProps {
  isDark: boolean;
}

export function NotFound({ isDark }: NotFoundProps) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center ${
        isDark ? "bg-[#0A0A0F] text-white" : "bg-[#F8F8FC] text-gray-900"
      }`}
    >
      {/* Grid bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(56,189,248,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.03) 1px,transparent 1px)"
            : "linear-gradient(rgba(56,189,248,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.06) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center gap-6 max-w-md"
      >
        {/* Big 404 */}
        <div
          className="text-[120px] font-black leading-none tracking-[-6px] select-none"
          style={{
            background: "linear-gradient(135deg, #38BDF8, #A78BFA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>

        <h1
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Page Not Found
        </h1>

        <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Looks like this page doesn't exist. Head back to the portfolio and
          let's build something great together.
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm"
          style={{
            background: "linear-gradient(135deg, #38BDF8, #A78BFA)",
            boxShadow: "0 8px 30px rgba(56,189,248,0.3)",
          }}
        >
          ← Back to Portfolio
        </motion.a>
      </motion.div>
    </div>
  );
}
