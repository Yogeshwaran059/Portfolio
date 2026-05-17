// src/data/portfolio.ts
// All portfolio content in one place — edit here to update everywhere

export const personal = {
  name: "Yogeshwaran S",
  firstName: "Yogeshwaran",
  role: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "React + Node.js Engineer",
    "REST API Architect",
    "UI/UX Enthusiast",
  ],
  summary:
    "Aspiring Full Stack Developer with hands-on experience in building scalable web applications using React, TypeScript, Node.js, and Express. Strong knowledge in REST API development, JWT authentication, and database management using Prisma and SQL.",
  summaryLong:
    "I'm a Full Stack Developer based in Madurai, Tamil Nadu, passionate about creating seamless digital experiences. From architecting secure RBAC systems to integrating AI models into production apps — I bring both depth and breadth to every project I work on.",
  email: "syogeshwaran2005@gmail.com",
  phone: "+91 6374911893",
  location: "Madurai, Tamilnadu",
  targetLocation: "Bangalore",
  linkedin: "https://www.linkedin.com/in/yogeshwaranofficial/",
  github: "https://github.com/yogeshwaranofficial",
  portfolio: "https://yogeshwaranofficial.github.io/Portfolio/",
  resumeUrl: "/resume.pdf", // place your resume PDF in public/
};

export const stats = [
  { value: "2+", label: "Projects Built" },
  { value: "8.83", label: "CGPA" },
  { value: "2", label: "Internships" },
  { value: "3+", label: "Certifications" },
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
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    icon: "⚙",
    color: "#A78BFA",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Auth",
      "Prisma ORM",
      "Spring Boot",
    ],
  },
  {
    category: "Databases",
    icon: "◈",
    color: "#34D399",
    items: ["MS SQL", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Cloud",
    icon: "◇",
    color: "#FB923C",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Thunder Client",
      "Swagger",
      "Figma",
      "Adobe XD",
      "Cloudinary",
    ],
  },
  {
    category: "Concepts",
    icon: "◻",
    color: "#F472B6",
    items: [
      "MVC Architecture",
      "RBAC",
      "REST API Design",
      "JWT Security",
      "Data Structures",
    ],
  },
];

export const projects = [
  {
    id: "emp-mgmt",
    number: "01",
    title: "Employee Management System",
    subtitle: "RBAC + Secure Authentication",
    description:
      "A full-stack enterprise-grade employee management platform with role-based access control, secure JWT authentication, and a clean React TypeScript frontend backed by a robust Express/Node.js API layer.",
    longDescription:
      "Built to demonstrate real-world system design, this project features a multi-role permission system where Admins, Managers, and Employees each have distinct capabilities. The API is fully RESTful with Swagger documentation, and the database layer uses Prisma ORM for type-safe queries against MS SQL.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma ORM",
      "MS SQL",
      "JWT",
      "Bcrypt",
    ],
    features: [
      "Role-Based Access Control (RBAC) with 3 permission levels",
      "JWT Authentication & token refresh mechanism",
      "RESTful API with Swagger documentation",
      "Password hashing with Bcrypt",
      "Prisma ORM for type-safe database operations",
    ],
    color: "#38BDF8",
    github: "https://github.com/yogeshwaranofficial",
    live: "#",
    featured: true,
  },
  {
    id: "food-ai",
    number: "02",
    title: "AI Food Recommendation Platform",
    subtitle: "AI-Powered + OTP Authentication",
    description:
      "An intelligent food recommendation platform powered by AI models for age and gender detection, featuring OTP-based secure login, built with React and Spring Boot with MySQL + Cloudinary integration.",
    longDescription:
      "This platform uses a machine learning model to detect the user's apparent age group and gender, then serves personalized food recommendations accordingly. The backend is a Spring Boot REST API connected to MySQL, with Cloudinary managing food images.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Cloudinary",
      "AI / ML",
      "OTP Auth",
      "Java",
    ],
    features: [
      "AI model for real-time age & gender detection",
      "OTP-based secure login and verification",
      "Personalized food recommendation engine",
      "Cloudinary image management pipeline",
      "Spring Boot REST API with MySQL backend",
    ],
    color: "#A78BFA",
    github: "https://github.com/yogeshwaranofficial",
    live: "#",
    featured: true,
  },
];

export const internships = [
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
  status: "Final Year",
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
