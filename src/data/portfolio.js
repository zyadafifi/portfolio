export const HERO = {
  name: "Zyad Ahmed Afifi",
  role: "Frontend Web Developer",
  headline:
    "Frontend Developer crafting modern, responsive, and impactful web experiences.",
  description:
    "I build clean, accessible interfaces with React and Tailwind. Focused on performance, UX, and scalable architecture.",
  cta: {
    projects: { label: "View Projects", href: "#projects" },
    resume: { label: "Download Resume", href: "/resume.pdf" },
    contact: { label: "Contact", href: "#contact" },
  },
  techBadges: ["React", "Tailwind", "TypeScript", "Firebase"],
};

export const ABOUT = {
  summary:
    "Frontend developer focused on building clean, responsive and user-friendly interfaces using React and Tailwind. Recently started integrating Firebase instead of relying only on local storage to build more scalable and data-driven applications.",
  highlights: [
    {
      title: "Frontend Specialization",
      description: "Deep expertise in React, component architecture, and modern CSS.",
    },
    {
      title: "Modern Stack",
      description: "TypeScript, Tailwind, Redux Toolkit, Firebase integration.",
    },
    {
      title: "UI Architecture",
      description: "Scalable components, design systems, and maintainable code.",
    },
    {
      title: "Performance Mindset",
      description: "Optimized renders, lazy loading, and efficient data flow.",
    },
  ],
};

export const SKILLS = [
  { groupKey: "languages", items: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { groupKey: "frameworks", items: ["React", "Tailwind", "Redux Toolkit"] },
  { groupKey: "data", items: ["Firebase", "REST APIs", "Firestore basics", "Local Storage"] },
  { groupKey: "tools", items: ["Git", "GitHub", "Vercel", "DevTools", "Postman"] },
];

export const EXPERIENCE = [
  {
    company: "LeadInTop",
    role: "Frontend Developer",
    location: "Cairo, Egypt",
    period: "Jan 2025 – Present",
    responsibilities: [
      "React UI development",
      "Tailwind styling",
      "Component architecture",
      "State management",
      "Performance optimization",
      "Git collaboration",
    ],
  },
];

export const PROJECTS = [
  {
    title: "SNA Learning Tools",
    description:
      "Interactive English-learning tools platform designed with responsive UI and smooth navigation.",
    href: "https://sna-learning-tools.netlify.app/",
    tags: ["React", "Tailwind"],
    badgeKey: "bestOnMobile",
    gradient: "from-primary/25 via-primary/5 to-transparent",
  },
  {
    title: "SNA Final Test",
    description:
      "Interactive online English testing experience with structured UI and dynamic behavior. Originally relied on local storage but has recently begun integrating Firebase for more scalable data handling.",
    href: "https://sna-final-test.netlify.app/",
    tags: ["React", "Tailwind", "Firebase"],
    badgeKey: null,
    gradient: "from-secondary/25 via-secondary/5 to-transparent",
  },
  {
    title: "Coupons App",
    description:
      "Coupon and store discovery platform built using React, TypeScript, and Firebase. Features responsive UI, structured data display and scalable frontend architecture.",
    href: "https://couponsapp.netlify.app/",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    badgeKey: "bestOnMobile",
    gradient: "from-primary/20 via-secondary/10 to-transparent",
  },
  {
    title: "My Dashboard",
    description:
      "Clean dashboard interface demonstrating structured UI layout and modern frontend management patterns.",
    href: "https://mydashoard.netlify.app/",
    tags: ["React", "Tailwind"],
    badgeKey: null,
    gradient: "from-secondary/20 via-primary/5 to-transparent",
  },
];

export const GITHUB = {
  username: "zyadafifi",
  profileUrl: "https://github.com/zyadafifi",
  statsUrl: "https://github-readme-stats.vercel.app/api",
  topLangsUrl: "https://github-readme-stats.vercel.app/api/top-langs",
};

export const CONTACT = {
  email: "zyad90879@gmail.com",
  location: "Cairo, Egypt",
  links: [
    { label: "GitHub", href: "https://github.com/zyadafifi", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zyad-ahmed-afify",
      icon: "linkedin",
    },
  ],
  formspreeId: "YOUR_FORMSPREE_ID",
};

export const FOOTER = {
  name: "Zyad Ahmed Afifi",
  tagline: "Frontend Web Developer",
  year: new Date().getFullYear(),
};
