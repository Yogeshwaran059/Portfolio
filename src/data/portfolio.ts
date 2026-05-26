// src/data/portfolio.ts
// All portfolio content in one place — edit here to update everywhere

export const personal = {
  name: "Yogeshwaran S",
  firstName: "Yogeshwaran",
  role: "Full Stack Developer | React • TypeScript • Node.js",

  taglines: [
    "Full Stack Developer",
    "React + TypeScript Engineer",
    "REST API & Backend Developer",
    "CI/CD & DevOps Enthusiast",
    "AI-Integrated Application Builder",
    "Building Scalable Enterprise Applications",
  ],

  summary:
    "Aspiring Full Stack Developer with hands-on experience building scalable web applications using React, TypeScript, Node.js, and Express.js. Skilled in REST API development, JWT authentication, RBAC, database design, testing, and CI/CD workflows.",

  summaryLong:
    "I'm a Full Stack Developer passionate about designing production-ready applications with clean architecture and enterprise-grade practices. I enjoy building secure authentication systems, REST APIs, AI-integrated applications, and scalable full-stack platforms using modern technologies. From frontend interfaces to backend systems and deployment pipelines, I focus on creating reliable and impactful digital products.",

  email: "syogeshwaran2005@gmail.com",
  phone: "+91 6374911893",
  location: "Tamil Nadu",
  targetLocation: "Bangalore",

  linkedin: "https://www.linkedin.com/in/yogeshwaranofficial/",
  github: "https://github.com/yogeshwaranofficial",
  portfolio: "https://yogeshwaranofficial.github.io/Portfolio/",

  resumeUrl: "/Yogeshwaran_Resume.docx",
};

export const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "8.83", label: "CGPA" },
  { value: "2+", label: "AI Integrated Apps" },
  { value: "10+", label: "Core Technologies" },
];

export const skills = [
  {
    category: "Frontend",
    icon: "⬡",
    color: "#38BDF8",

    items: [
      "React.js (Vite)",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "React Hook Form",
      "Framer Motion",
    ],
  },

  {
    category: "Backend",
    icon: "⚙",
    color: "#A78BFA",

    items: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "Bcrypt",
      "Prisma ORM",
      "Sequelize ORM",
      "Zod Validation",
      "Winston Logging",
      "Swagger",
      "Postman",
    ],
  },

  {
    category: "Databases",
    icon: "◈",
    color: "#34D399",

    items: [
      "PostgreSQL",
      "MySQL",
      "MS SQL Server",
      "MongoDB",
    ],
  },

  {
    category: "Testing",
    icon: "🧪",
    color: "#22C55E",

    items: [
      "Jest",
      "Supertest",
      "Playwright",
      "Selenium",
      "Unit Testing",
      "Integration Testing",
      "E2E Testing",
    ],
  },

  {
    category: "DevOps & Tools",
    icon: "◇",
    color: "#FB923C",

    items: [
      "Docker",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Linux",
      "Git",
      "GitHub",
      "Jenkins",
      "Nginx"
    ],
  },

  {
    category: "Core Concepts",
    icon: "◻",
    color: "#F472B6",

    items: [
      "MVC Architecture",
      "RBAC",
      "OTP Authentication",
      "GPS Auto Location",
      "AI Integration",
      "Microservices Basics",
      "REST API Design",
    ],
  },

  {
    category: "Design",
    icon: "✦",
    color: "#60A5FA",

    items: [
      "Figma",
      "Adobe XD",
    ],
  },
];

export const projects = [

{
id:"nexus-commerce",
number:"01",

title:"Nexus Commerce",
subtitle:"Full Stack E-Commerce Platform",

description:
"Production-grade e-commerce application with complete product catalog, cart system, order management, authentication, and admin dashboard.",

longDescription:
"Built a scalable enterprise-level e-commerce platform featuring JWT authentication, RBAC authorization, Zod schema validation, Docker containerization, CI/CD workflows, and comprehensive REST API architecture. Implemented automated testing pipelines with high code coverage.",

tech:[
"React",
"TypeScript",
"Node.js",
"Express",
"PostgreSQL",
"Sequelize",
"JWT",
"Bcrypt",
"Docker",
"GitHub Actions",
"Jest",
"Supertest",
"Tailwind"
],

features:[
"JWT authentication with role-based access control",
"Admin and customer permission system",
"Swagger API documentation",
"Zod validation for API safety",
"Docker containerization",
"GitHub Actions CI/CD",
"95%+ unit and integration test coverage"
],

color:"#38BDF8",

github:"https://github.com/YogeshwaranOfficial/Nexus-Commerce",
live:"https://nexus-commerce-2026.vercel.app/",

featured:true
},

{
id:"lexiguard",
number:"02",

title:"LexiGuard DocTrust",
subtitle:"AI Legal Analysis Platform",

description:
"Secure AI-powered document verification and legal analysis system with automated risk detection.",

longDescription:
"Built an enterprise-grade document trust platform integrating AI models for legal analysis. Implemented Prisma schema design, structured Winston logging, audit trails, secure authentication, and PostgreSQL storage.",

tech:[
"React",
"TypeScript",
"Node.js",
"Express",
"PostgreSQL",
"Prisma ORM",
"JWT",
"Winston",
"Zod",
"AI Integration"
],

features:[
"AI-powered legal document analysis",
"Automated risk detection",
"Audit trail management",
"Structured Winston logging",
"Prisma ORM schema design",
"Secure authentication flow"
],

color:"#A78BFA",

github:"https://github.com/YogeshwaranOfficial/Lexiguard-Doctrust",
live:"https://lexiguard-doctrust.vercel.app/",

featured:true
},

{
id:"task-management",
number:"03",

title:"Task Management System",
subtitle:"Collaborative Team Workspace",

description:
"Role-based collaborative task management system supporting Admin, Manager and Employee workflows.",

longDescription:
"Developed a real-world project management platform with task assignment, progress tracking, deadline handling, API documentation and CI/CD automation.",

tech:[
"React",
"TypeScript",
"Node.js",
"Express",
"PostgreSQL",
"JWT",
"RBAC",
"GitHub Actions",
"Jest"
],

features:[
"Task assignment workflow",
"Progress tracking",
"Deadline management",
"Swagger API docs",
"GitHub Actions pipeline",
"Automated testing"
],

color:"#34D399",

github:"https://github.com/YogeshwaranOfficial/Task-Management-System",
live:"https://task-management-system-by-yogeshwaran.vercel.app/",

featured:true
},

{
id:"employee-management",
number:"04",

title:"Employee Management System",
subtitle:"RBAC + Secure Authentication",

description:
"Full-stack employee management platform implementing secure authentication and enterprise access control.",

longDescription:
"Developed a secure RBAC system with Admin, HR, and Employee roles using Prisma ORM, JWT authentication, schema validation and unit testing.",

tech:[
"React",
"TypeScript",
"Node.js",
"Express",
"MS SQL",
"Prisma",
"JWT",
"Bcrypt",
"Swagger"
],

features:[
"Admin / HR / Employee roles",
"JWT authentication",
"Prisma ORM integration",
"Swagger APIs",
"Bcrypt password hashing",
"Unit testing with Jest"
],

color:"#F97316",

github:"https://github.com/YogeshwaranOfficial/Employee-Management-System",
live:"https://employee-management-system-by-yogeshwaran.vercel.app/",

featured:false
},

{
id:"food-ai",
number:"05",

title:"AI Food Recommendation Platform",
subtitle:"OTP + GPS + AI",

description:
"AI-powered recommendation platform using demographic inference and location-aware personalization.",

longDescription:
"Integrated AI age/gender detection with OTP authentication and GPS-based auto-location to generate personalized recommendations.",

tech:[
"React",
"Spring Boot",
"MySQL",
"Cloudinary",
"AI",
"OTP Authentication"
],

features:[
"Age & gender prediction",
"AI recommendation engine",
"OTP login system",
"GPS auto-location",
"Cloudinary image pipeline"
],

color:"#EC4899",

github:"https://github.com/YogeshwaranOfficial/Rasoi_frontend",
live:"https://rasoifrontend.vercel.app/",

featured:true
}

];

export const internships = [
   {
    company: "Ufours IT Solutions Pvt Ltd",
    role: "Software Developer Training",
    period: "Apeil 2026",
    type: "Training",
    description:
      "Full-Stack Engineering: Architected and deployed production-grade web applications utilizing the PERN (PostgreSQL, Express.js, React, Node.js) stack, ensuring robust end-to-end performance.",
    tech: ["React", "Express", "PostgreSQL", "full stack development"],
    color: "#38BDF8",
  },
  {
    company: "NoviTech R&D Pvt Ltd",
    role: "Data Analyst Intern",
    period: "Feb 2025",
    type: "Internship",
    description:
      "Developed backend logic using Python for data processing, worked with SQL databases, and optimized complex queries for performance.",
    tech: ["Python", "SQL", "Data Processing", "Query Optimization"],
    color: "#38BDF8",
  },
  {
    company: "Internship Studio",
    role: "Data Science Intern",
    period: "Mar 2025",
    type: "Internship",
    description:
      "Worked on data preprocessing pipelines and built ML models using Python scientific libraries for predictive analytics.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "NumPy"],
    color: "#A78BFA",
  },
];

export const education = {
  degree: "B.E. Computer Science and Engineering (CSE)",
  college: "Mangayarkarasi College of Engineering, Madurai",
  period: "2022 – 2026",
  cgpa: "8.83",
};

export const certifications = [
  {
    title: "PGDCA",
    issuer: "Tamilnadu Computer Software College",
    year: "2026",
    icon: "🎓",
    color: "#38BDF8",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "NoviTech R&D Pvt Ltd",
    year: "2025",
    icon: "🤖",
    color: "#A78BFA",
  },
  {
    title: "Python for Data Science",
    issuer: "CognitiveClass.ai",
    year: "2025",
    icon: "🐍",
    color: "#34D399",
  },
];

export const achievements = [
  {
    icon: "👑",
    title: "Coders Club President",
    description:
      "Leading the developer community at Mangayarkarasi College of Engineering — organizing hackathons, workshops, and coding sessions.",
    color: "#FB923C",
  },
  {
    icon: "🏆",
    title: "Project Expo '25 — 1st Prize",
    description:
      "Won first place at the college-level Project Exposition '25 conducted by MCE for building an innovative software solution.",
    color: "#38BDF8",
  },
  {
    icon: "⚡",
    title: "National Hackathon Participant",
    description:
      "Represented the college at iTech Hackfest '25 — a National Level Hackathon, competing against teams from across India.",
    color: "#A78BFA",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
