// src/sections/index.tsx
// All portfolio sections — import individually in App.tsx

import { useState } from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { personal, stats, skills,  projects,  internships,  education,  certifications,  achievements,
} from "@/data/portfolio";
import { SectionLabel, AnimatedSection, Badge, GlowOrb } from "@/components/ui";
import { useTypewriter } from "@/hooks";

// ─── Shared types ────────────────────────────────────────────
interface SectionProps {
  isDark: boolean;
}

// ─── HERO ────────────────────────────────────────────────────
export function HeroSection({ isDark }: SectionProps) {
  const typed = useTypewriter(personal.taglines);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <GlowOrb color="#38BDF8" size={500} top="10%" left="5%" />
      <GlowOrb color="#A78BFA" size={400} bottom="15%" right="5%" />

      <div className="max-w-4xl w-full text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/8 mb-8"
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-brand-cyan block"
          />
          <span className="text-xs font-semibold text-brand-cyan tracking-wide">
            Available for Opportunities · {personal.targetLocation}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={`text-[clamp(52px,9vw,100px)] font-black tracking-[-4px] leading-none mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {personal.name}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[clamp(22px,3vw,36px)] font-bold mb-6 h-12 flex items-center justify-center gap-1"
        >
          <span className="gradient-text">{typed}</span>
          <span className="text-brand-cyan typing-cursor">|</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-lg leading-relaxed max-w-2xl mx-auto mb-12 ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          {personal.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button onClick={() => scrollTo("contact")} className="btn-primary">
            Hire Me ✦
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className={`btn-outline ${isDark ? "border-white/10 text-white" : "border-gray-200 text-gray-700"}`}
          >
            View Projects →
          </button>
          <a
            href={personal.resumeUrl}
            download
            className={`px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border ${isDark ? "border-white/10 text-gray-400 hover:text-white" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
          >
            Download CV ↓
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-12 justify-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className={`text-xs font-medium mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────
export function AboutSection({ isDark }: SectionProps) {
  const highlights = [
    { icon: "⚛", label: "React Ecosystem", desc: "TypeScript, Vite, Hooks, Context" },
    { icon: "🔐", label: "Secure Systems", desc: "JWT, RBAC, Bcrypt, OAuth" },
    { icon: "🤖", label: "AI Integration", desc: "ML models in production apps" },
    { icon: "🗄", label: "Database Design", desc: "SQL, NoSQL, Prisma ORM" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionLabel label="About Me" />
            <h2 className={`text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight mt-4 mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
              Building the web,{" "}
              <span className="gradient-text">one API at a time.</span>
            </h2>
            <p className={`leading-relaxed mb-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {personal.summaryLong}
            </p>
            <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              As President of the Coders Club and a hackathon competitor, I thrive at the intersection of leadership and engineering. Currently seeking opportunities in{" "}
              <strong className={isDark ? "text-white" : "text-gray-900"}>
                {personal.targetLocation}
              </strong>{" "}
              to contribute to real-world product development.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <motion.div
                  key={h.label}
                  whileHover={{ scale: 1.03 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                    isDark
                      ? "bg-dark-card border-dark-border hover:border-brand-cyan/20"
                      : "bg-white border-light-border hover:border-brand-cyan/30 shadow-sm"
                  }`}
                >
                  <div className="text-3xl mb-3">{h.icon}</div>
                  <div className={`font-bold text-sm mb-1.5 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {h.label}
                  </div>
                  <div className={`text-xs leading-relaxed ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    {h.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────
export function SkillsSection({ isDark }: SectionProps) {
  return (
    <section
      id="skills"
      className={`section-padding ${isDark ? "bg-dark-card" : "bg-gray-50"}`}
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionLabel label="Technical Skills" />
          <h2 className={`text-[clamp(28px,4vw,44px)] font-black tracking-tight mt-4 mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
            Tools I work with
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skills.map((cat, i) => (
            <AnimatedSection key={cat.category} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border h-full transition-all duration-300 ${
                  isDark
                    ? "bg-dark-bg border-dark-border"
                    : "bg-white border-light-border shadow-sm"
                }`}
                style={{
                  "--hover-border": cat.color + "40",
                } as React.CSSProperties}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = cat.color + "40")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)")
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: cat.color + "18", color: cat.color }}
                >
                  {cat.icon}
                </div>
                <div className={`font-bold text-sm mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge key={item} label={item} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────
export function ProjectsSection({ isDark }: SectionProps) {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionLabel label="Projects" />
          <h2 className={`text-[clamp(28px,4vw,44px)] font-black tracking-tight mt-4 mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
            Things I've built
          </h2>
        </AnimatedSection>
        <div className="flex flex-col gap-8">
          {projects.map((proj, i) => (
            <AnimatedSection key={proj.id} delay={i * 0.15}>
              <ProjectCard proj={proj} isDark={isDark} reverse={i % 2 === 1} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj, isDark, reverse }: { proj: typeof projects[0]; isDark: boolean; reverse: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`grid md:grid-cols-2 rounded-3xl overflow-hidden border transition-all duration-400 ${
        isDark ? "bg-dark-card border-dark-border" : "bg-white border-light-border shadow-md"
      }`}
      style={{
        borderColor: hovered ? proj.color + "40" : undefined,
        boxShadow: hovered ? `0 24px 60px ${proj.color}14` : undefined,
      }}
    >
      {/* Visual Panel */}
      <div
        className={`${reverse ? "md:order-last" : ""} p-12 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden`}
        style={{ background: `linear-gradient(135deg, ${proj.color}16, ${proj.color}06)` }}
      >
        <motion.div
          animate={{ opacity: hovered ? 0.25 : 0.12 }}
          className="absolute text-[140px] font-black leading-none select-none"
          style={{ color: proj.color }}
        >
          {proj.number}
        </motion.div>
        <div className="relative z-10 flex flex-wrap gap-3 justify-center">
          {proj.tech.slice(0, 5).map((t) => (
            <Badge key={t} label={t} color={proj.color} size="md" />
          ))}
        </div>
      </div>

      {/* Info Panel */}
      <div className={`p-10 ${reverse ? "md:order-first" : ""}`}>
        <p
          className="text-xs font-bold tracking-[2px] uppercase mb-3"
          style={{ color: proj.color }}
        >
          {proj.subtitle}
        </p>
        <h3 className={`text-2xl font-black tracking-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          {proj.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          {proj.description}
        </p>
        <ul className="flex flex-col gap-2.5 mb-7">
          {proj.features.map((f) => (
            <li key={f} className={`flex items-start gap-3 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: proj.color }}
              />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105"
            style={{
              background: proj.color + "18",
              color: proj.color,
              borderColor: proj.color + "30",
            }}
          >
            GitHub ↗
          </a>
          <a
            href={proj.live}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
              isDark ? "border-white/10 text-gray-400" : "border-gray-200 text-gray-400"
            }`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────
export function ExperienceSection({ isDark }: SectionProps) {
  return (
    <section
      id="experience"
      className={`section-padding ${isDark ? "bg-dark-card" : "bg-gray-50"}`}
    >
      <div className="section-container max-w-3xl">
        <AnimatedSection>
          <SectionLabel label="Experience" />
          <h2 className={`text-[clamp(28px,4vw,44px)] font-black tracking-tight mt-4 mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
            Where I've worked
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan to-brand-violet opacity-30" />

          <div className="flex flex-col gap-10">
            {internships.map((intern, i) => (
              <AnimatedSection key={intern.company} delay={i * 0.15}>
                <div className="pl-14 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className="absolute left-3 top-4 w-5 h-5 rounded-full"
                    style={{
                      background: intern.color,
                      boxShadow: `0 0 12px ${intern.color}60`,
                    }}
                  />
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`p-7 rounded-2xl border transition-all duration-300 ${
                      isDark
                        ? "bg-dark-bg border-dark-border"
                        : "bg-white border-light-border shadow-sm"
                    }`}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = intern.color + "40")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)")
                    }
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <div className={`font-black text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                          {intern.role}
                        </div>
                        <div className="font-semibold text-sm" style={{ color: intern.color }}>
                          {intern.company}
                        </div>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: intern.color + "18", color: intern.color }}
                      >
                        {intern.period}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      {intern.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {intern.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                            isDark ? "bg-dark-card border-dark-border text-gray-400" : "bg-gray-50 border-gray-200 text-gray-500"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EDUCATION ────────────────────────────────────────────────
export function EducationSection({ isDark }: SectionProps) {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionLabel label="Education & Certifications" />
          <h2 className={`text-[clamp(28px,4vw,44px)] font-black tracking-tight mt-4 mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
            Academic background
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <AnimatedSection>
            <div className={`p-9 rounded-2xl border relative overflow-hidden h-full ${isDark ? "bg-dark-card border-dark-border" : "bg-white border-light-border shadow-md"}`}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />
              <div className="text-5xl mb-6">🎓</div>
              <div className={`font-black text-xl mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                {education.degree}
              </div>
              <div className="text-brand-cyan font-semibold mb-2">
                {education.college}
              </div>
              <div className="inline-flex items-baseline gap-2 px-5 py-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>CGPA</span>
                <span className="text-3xl font-black text-brand-cyan">{education.cgpa}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col gap-4">
              <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                Certifications
              </div>
              {/* //cert, i */}
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ x: 6 }}
                  className={`p-5 rounded-xl border flex items-center gap-4 transition-all duration-200 ${
                    isDark ? "bg-dark-card border-dark-border" : "bg-white border-light-border shadow-sm"
                  }`}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = cert.color + "40")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)")
                  }
                >
                  <div className="text-3xl">{cert.icon}</div>
                  <div>
                    <div className={`font-bold text-sm ${isDark ? "text-white" : "text-gray-900"}`}>
                      {cert.title}
                    </div>
                    <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      {cert.issuer} · {cert.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────
export function AchievementsSection({ isDark }: SectionProps) {
  return (
    <section
      id="achievements"
      className={`section-padding ${isDark ? "bg-dark-card" : "bg-gray-50"}`}
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionLabel label="Achievements" />
          <h2 className={`text-[clamp(28px,4vw,44px)] font-black tracking-tight mt-4 mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
            Leadership & Recognition
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`p-8 rounded-2xl border h-full transition-all duration-300 ${
                  isDark ? "bg-dark-bg border-dark-border" : "bg-white border-light-border shadow-md"
                }`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = a.color + "40";
                  e.currentTarget.style.boxShadow = `0 16px 40px ${a.color}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="text-5xl mb-5">{a.icon}</div>
                <div className={`font-black text-lg mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {a.title}
                </div>
                <div className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {a.description}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────
export function ContactSection({ isDark }: SectionProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate API call — wire up EmailJS or Formspree here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const contactItems = [
    { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: "✉" },
    { label: "Phone", value: personal.phone, href: `tel:${personal.phone}`, icon: "📞" },
    { label: "LinkedIn", value: "LinkedIn Profile", href: personal.linkedin, icon: "💼" },
    { label: "GitHub", value: "GitHub Profile", href: personal.github, icon: "🐙" },
  ];

  const inputClass = `w-full px-5 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all duration-200 ${
    isDark
      ? "bg-dark-bg border-dark-border text-white placeholder-gray-600 focus:border-brand-cyan"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-cyan focus:bg-white"
  }`;

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionLabel label="Contact" />
          <h2 className={`text-[clamp(28px,4vw,44px)] font-black tracking-tight mt-4 mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
            Let's work together
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <AnimatedSection>
            <p className={`text-lg leading-relaxed mb-10 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              I'm actively looking for full-stack developer roles in{" "}
              <strong className="text-brand-cyan">{personal.targetLocation}</strong>.
              Whether you have a project in mind or just want to connect — my inbox is always open.
            </p>
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 no-underline ${
                    isDark
                      ? "bg-dark-card border-dark-border hover:border-brand-cyan/30"
                      : "bg-white border-light-border hover:border-brand-cyan/30 shadow-sm"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className={`text-xs font-medium ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      {item.label}
                    </div>
                    <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.15}>
            <div className={`p-10 rounded-2xl border ${isDark ? "bg-dark-card border-dark-border" : "bg-white border-light-border shadow-md"}`}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-10 text-center"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <div className={`text-2xl font-black mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Message Sent!
                  </div>
                  <div className={isDark ? "text-gray-400" : "text-gray-500"}>
                    I'll get back to you soon.
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div>
                    <label className={`block text-xs font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Your Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={submit}
                    disabled={loading}
                    className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </motion.button>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────
export function Footer({ isDark }: SectionProps) {
  return (
    <footer
      className={`border-t py-8 px-6 ${isDark ? "border-dark-border" : "border-light-border"}`}
    >
      <div className="section-container flex flex-wrap items-center justify-between gap-4">
        <span className="font-black text-lg gradient-text">{personal.name}</span>
        <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          © {new Date().getFullYear()} · Built with React & ♥ in Tamil Nadu
        </span>
        <div className="flex gap-5">
          {[
            ["GitHub", personal.github],
            ["LinkedIn", personal.linkedin],
            ["Portfolio", personal.portfolio],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`text-sm transition-colors duration-200 no-underline ${
                isDark
                  ? "text-gray-500 hover:text-brand-cyan"
                  : "text-gray-400 hover:text-brand-cyan"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
