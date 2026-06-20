export const meta = {
  name: "Chandra Shekar",
  roles: [
    "Frontend Developer",
    "MERN Stack Developer",
    "Software Development Engineer I",
    "Next.js Specialist",
    "Full Stack Developer",
  ],
  tagline:
    "I build fast, scalable web applications end-to-end — from pixel-perfect UIs to production-ready APIs. 4+ years turning product ideas into shipped software.",
  currentRole: "SDE I @ Jaagruk Bharat",
  currentRoleSub: "Currently building gov-tech",
  stats: [
    { num: "4+", label: "Years experience" },
    { num: "20+", label: "Projects shipped" },
    { num: "10+", label: "Happy clients" },
  ],
  email: "chandrashekar@email.com",
  linkedin: "https://linkedin.com/in/chandrashekar",
  github: "https://github.com/chandrashekar",
  resume: "#",
};

export const about = {
  paragraphs: [
    "I'm Chandra Shekar, a Frontend-leaning Full Stack Developer with 4+ years of experience building web applications from the ground up. I care deeply about code quality, performance, and building things that actually solve user problems.",
    "Currently working as a Software Development Engineer I at Jaagruk Bharat — a government benefits discovery platform — where I architect features end-to-end: Next.js App Router, auth systems, SEO pipelines, backend integrations, and everything in between.",
    "When I'm not coding, I'm thinking about product, design, and how to make complex things feel effortlessly simple for users.",
  ],
  tags: [
    "Problem solver",
    "Product-minded",
    "Detail-oriented",
    "Fast learner",
    "Team player",
  ],
};

export const skills = [
  {
    icon: "⚛️",
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "Tailwind",
      "Redux",
      "Zustand",
      "Chakra Ui",
      "Figma",
    ],
  },
  {
    icon: "⚙️",
    name: "Backend",
    items: ["Node.js", "Express", "NestJS", "REST APIs", "NextAuth"],
  },
  {
    icon: "🗄️",
    name: "Database & Cloud",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Firebase Storage",
      "Azure",
      "Google Cloud",
      "MySQL",
    ],
  },
  {
    icon: "🛠️",
    name: "Tools & Practices",
    items: ["Git", "Docker", "CI/CD", "SEO", "Performance"],
  },
];

export const projects = [
  {
    emoji: "🇮🇳",
    bg: "linear-gradient(135deg,#1a1f35 0%,#1e1b4b 100%)",
    badge: "Live · Production",
    tags: ["Next.js", "TypeScript", "NestJS", "Chakra UI"],
    title: "Jaagruk Bharat",
    desc: "Government benefits discovery platform serving 500K+ citizens. Built the full App Router migration, SEO architecture, auth system, and service flows end-to-end.",
    meta: "500K+ users",
    href: "https://jaagrukbharat.com",
  },
  {
    emoji: "📊",
    bg: "linear-gradient(135deg,#0f1f18 0%,#052e16 100%)",
    badge: "SaaS · Dashboard",
    tags: ["React", "Node.js", "MongoDB", "Sheets API"],
    title: "Leads Dashboard",
    desc: "Per-service leads dashboard powered by Google Sheets. Dynamic column definitions, sortable/filterable tables, and service-specific config — zero manual data entry.",
    meta: "Real-time sync",
    href: "https://portal.jaagrukbharat.com",
  },
  {
    emoji: "🏢",
    bg: "linear-gradient(135deg,#1c1206 0%,#2d1c06 100%)",
    badge: "Gov-Tech · CMS Platform",
    tags: ["React", "Next.js", "TypeScript", "CMS"],
    title: "Content Management System",
    desc: "Developed a custom Content Management System enabling internal teams to create, manage, and publish articles, services, schemes, FAQs, and dynamic website content without developer intervention. Integrated role-based access, content workflows, SEO management, and real-time publishing to the production website.",
    meta: "CMS · SEO · Content Publishing",
    href: "https://jaagrukbharat.com/content-management",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    type: "Full-time",
    company: "🏛️ Jaagruk Bharat",
    role: "Software Development Engineer I",
    blurb:
      "Leading frontend architecture and full-stack feature development for India's largest government benefits discovery platform.",
    bullets: [
      "Migrated entire platform from Pages Router to Next.js App Router — zero downtime",
      "Architected SEO system using generateMetadata and JSON-LD, improving search visibility",
      "Built Google Sheets-powered leads dashboard with dynamic per-service config",
      "Designed and shipped multi-step MSME registration flow with Cashfree payment integration",
      "Refactored auth system with NextAuth + Google OAuth, resolving SSR/CSR hydration bugs",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "NestJS",
      "NextAuth",
      "Firebase",
    ],
  },
  {
    period: "2023 — 2024",
    type: "Full-time",
    company: "💼 Freelancer",
    role: "MERN Stack Developer",
    blurb:
      "Built and maintained full-stack web applications for clients across e-commerce, logistics, and SaaS sectors.",
    bullets: [
      "Developed 10+ client-facing React applications with custom UI component libraries",
      "Built RESTful APIs using Node.js and Express with MongoDB and PostgreSQL",
      "Improved application performance by 40% through code splitting and lazy loading",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redux"],
  },
  {
    period: "2021 — 2023",
    type: "Junior",
    company: "🚀 Masai/Zvoid",
    role: "Frontend Developer",
    blurb:
      "Started my professional journey building React UIs, learning production-grade development practices alongside senior engineers.",
    bullets: [
      "Built responsive web interfaces using React and vanilla JavaScript",
      "Integrated REST APIs and managed application state with Redux",
      "Contributed to internal component library used across 5+ projects",
    ],
    stack: ["React", "TypeScript", "HTML/CSS", "Redux", "tailwind css"],
  },
];
