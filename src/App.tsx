// src/App.tsx
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  AchievementsSection,
  ContactSection,
  Footer,
} from "@/sections";
import { useTheme, useScrollProgress, useActiveSection } from "@/hooks";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CursorEffect } from "@/components/ui/CursorEffect";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const SECTIONS = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "achievements",
  "contact",
];

function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${progress}%`,
        background: "linear-gradient(90deg, #38BDF8, #A78BFA)",
        zIndex: 9999,
        transition: "width 0.1s linear",
      }}
    />
  );
}

function GridBackground({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: isDark
          ? "linear-gradient(rgba(56,189,248,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.03) 1px,transparent 1px)"
          : "linear-gradient(rgba(56,189,248,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.06) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { theme, toggle, isDark } = useTheme();
  const progress = useScrollProgress();
  const active = useActiveSection(SECTIONS);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Loading screen — shows once on first visit */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Custom cursor — desktop only */}
      <CursorEffect />

      {/* Scroll to top button */}
      <ScrollToTop />

      <div
        className={`${
          isDark ? "dark bg-dark-bg text-white" : "bg-light-bg text-gray-900"
        } min-h-screen transition-colors duration-300`}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        <ScrollProgress progress={progress} />
        <GridBackground isDark={isDark} />

        <Navbar
          active={active}
          theme={theme}
          onToggleTheme={toggle}
          onNavClick={scrollTo}
        />

        <main className="relative z-10">
          <HeroSection isDark={isDark} />
          <AboutSection isDark={isDark} />
          <SkillsSection isDark={isDark} />
          <ProjectsSection isDark={isDark} />
          <ExperienceSection isDark={isDark} />
          <EducationSection isDark={isDark} />
          <AchievementsSection isDark={isDark} />
          <ContactSection isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}
