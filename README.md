# Yogeshwaran S — Developer Portfolio

A premium, production-ready developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Clone or extract the project
cd yogesh-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173
```

---

## 📁 Project Structure

```
yogesh-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Place your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      ← Sticky nav with active highlighting
│   │   └── ui/
│   │       └── index.tsx   ← SectionLabel, Badge, GlowOrb, etc.
│   ├── sections/
│   │   └── index.tsx       ← All 8 page sections
│   ├── hooks/
│   │   └── index.ts        ← useTheme, useTypewriter, useScrollProgress, useActiveSection
│   ├── data/
│   │   └── portfolio.ts    ← ALL content lives here — edit to update portfolio
│   ├── assets/             ← Images, icons
│   ├── App.tsx             ← Root component
│   ├── main.tsx            ← Entry point
│   └── index.css           ← Tailwind + custom animations
├── index.html              ← SEO meta tags + Google Fonts
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## ✏️ Customizing Content

All portfolio content is in **one file**: `src/data/portfolio.ts`

Edit these exports to update your portfolio:
- `personal` — name, role, contact links, summary
- `skills` — technical skills by category
- `projects` — project details, tech stack, features
- `internships` — work experience
- `education` — degree and CGPA
- `certifications` — certificates
- `achievements` — awards and leadership

---

## 🎨 Customizing Design

**Colors** — Edit `tailwind.config.ts`:
```ts
brand: {
  cyan: "#38BDF8",    // Primary accent
  violet: "#A78BFA",  // Secondary accent
  emerald: "#34D399",
  orange: "#FB923C",
}
```

**Fonts** — Change the Google Fonts link in `index.html` and update `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ["'Your Font'", "system-ui", "sans-serif"],
}
```

---

## 📧 Connecting the Contact Form

The form currently simulates a send. To connect EmailJS:

```bash
npm install @emailjs/browser
```

In `src/sections/index.tsx`, find the `ContactSection` and replace the simulated call:

```ts
import emailjs from "@emailjs/browser";

// In submit():
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { from_name: form.name, from_email: form.email, message: form.message },
  "YOUR_PUBLIC_KEY"
);
```

---

## 📦 Build for Production

```bash
npm run build
# Output: dist/
```

---

## 🚀 Deployment

### Vercel (Recommended — 1 command)
```bash
npm install -g vercel
vercel
# Follow prompts — auto-detects Vite ✓
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
# OR connect GitHub repo for auto-deploy
```

### GitHub Pages
```bash
# vite.config.ts — add base:
export default defineConfig({
  base: "/your-repo-name/",
  ...
})

npm run build
# Deploy dist/ to gh-pages branch
```

---

## 🧩 Adding More Sections

1. Add your data to `src/data/portfolio.ts`
2. Create a new section component in `src/sections/index.tsx`
3. Import and add it to `src/App.tsx`
4. Add the section id to the `SECTIONS` array in `App.tsx`
5. Add a nav link in `src/data/portfolio.ts` → `navLinks`

---

## 📱 Features

- ✅ Dark / Light theme toggle (persisted to localStorage)
- ✅ Typing animation in hero
- ✅ Scroll progress bar
- ✅ Active section highlighting in navbar
- ✅ Framer Motion page animations
- ✅ Intersection Observer lazy reveal
- ✅ Responsive / mobile-first
- ✅ SEO meta tags + Open Graph
- ✅ Type-safe throughout (TypeScript)
- ✅ Reusable component architecture
- ✅ All content separated from UI

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons | Emoji (swap for Lucide if preferred) |
| Fonts | DM Sans + JetBrains Mono |
| Build | Vite |

---

Built by Yogeshwaran S · [Portfolio](https://yogeshwaranofficial.github.io/Portfolio/)
