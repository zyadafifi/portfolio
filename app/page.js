"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowRight,
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Award,
  Calendar,
  MapPin,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    { name: "React.js", icon: Code, level: 90 },
    { name: "Next.js", icon: Globe, level: 85 },
    { name: "JavaScript (ES6)", icon: Code, level: 90 },
    { name: "HTML5 & CSS3", icon: Palette, level: 95 },
    { name: "Redux", icon: Database, level: 80 },
    { name: "Bootstrap", icon: Palette, level: 85 },
    { name: "Git & GitHub", icon: Code, level: 85 },
    { name: "REST APIs", icon: Database, level: 80 },
    // Added Shopify skill
    {
      name: "Shopify (Liquid Customization)",
      icon: Globe,
      level: 80,
      description:
        "Ability to modify Liquid code for custom design and functionality.",
    },
    {
      name: "Tutor LMS",
      icon: Database,
      level: 75,
      description:
        "Experience working with Tutor LMS for e-learning solutions.",
    },
  ];

  const projects = [
    {
      title: "Speech Recognition & Pronunciation Scoring",
      description:
        "A game-based learning platform with score tracking and animation using JavaScript. Features speech recognition and pronunciation scoring system.",
      tech: ["JavaScript", "HTML5", "CSS3", "Speech Recognition API"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/zyadafifi/speech-recognition-game",
      live: "https://semi-final-game.netlify.app/",
      featured: true,
    },
    {
      title: "Product Management System",
      description:
        "Admin dashboard with CRUD operations, charts, dark/light mode, and responsive layout for efficient product management.",
      tech: ["React.js", "JavaScript", "Bootstrap", "Chart.js"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/zyadafifi/product-management",
      live: "https://pro-management-sys.netlify.app/",
      featured: true,
    },
    {
      title: "Online Store",
      description:
        "E-commerce website with search functionality, product filtering, and shopping cart features for seamless online shopping.",
      tech: ["React.js", "JavaScript", "Bootstrap", "Local Storage"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/zyadafifi/online-store",
      live: "https://online-store-pro.netlify.app/",
      featured: true,
    },
    // New placeholder project for Dossier-inspired shop
    {
      title: "Dossier-Inspired Perfume Shop (Placeholder)",
      description:
        "A luxury perfume e-commerce platform inspired by the Dossier brand, featuring designer-inspired scents, modern UI, and seamless shopping experience. Brand name to be determined.",
      tech: ["Shopify"],
      image: "/api/placeholder/400/250",

      live: "https://bvdjev-f9.myshopify.com/?_ab=0&_fd=0&_sc=1",
      featured: true,
    },
    {
      title: "Gym Website",
      description:
        "Responsive fitness website with contact forms, pricing tables, and animated UI for gym services and membership.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/zyadafifi/gym-website",
      live: "https://gym-website-interface.netlify.app/",
      featured: false,
    },
    {
      title: "Pop Quiz App",
      description:
        "Interactive quiz application with timed questions, real-time score updates, and responsive design for engaging learning experiences.",
      tech: ["React.js", "JavaScript", "CSS3", "Local Storage"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/zyadafifi/pop-quiz",
      live: "https://pop-quiz-project.netlify.app/",
      featured: false,
    },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "LeadInTop",
      period: "Jan 2025 - Present",
      location: "Cairo, Egypt",
      description:
        "Developing responsive user interfaces and integrating frontend with PHP-based backend systems.",
      achievements: [
        "Developed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap",
        "Integrated frontend with PHP-based backend to build speech recognition and scoring system",
        "Participated in sprint planning, code reviews, and Agile ceremonies",
        "Currently building performance-optimized pages using Next.js for better routing and SEO",
      ],
    },
    {
      title: "React Development Trainee",
      company: "Information Technology Institute (ITI)",
      period: "Training Program",
      location: "Cairo, Egypt",
      description:
        "Completed intensive hands-on training in React.js development and modern frontend tools.",
      achievements: [
        "Completed intensive hands-on training in React.js, component lifecycle, hooks, and state management",
        "Learned frontend performance optimization techniques",
        "Developed real-world applications using modern frontend tools and Git workflows",
        "Gained expertise in component-based architecture and modern JavaScript (ES6)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-dark-700">
        <div className="container-custom px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Zyad Afifi
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a
                href="#about"
                className="hover:text-primary-600 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-primary-600 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-primary-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-primary-600 transition-colors"
              >
                Experience
              </a>
              <a
                href="#education"
                className="hover:text-primary-600 transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                className="hover:text-primary-600 transition-colors"
              >
                Contact
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-dark-700"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="hover:text-primary-600 transition-colors py-2"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={closeMobileMenu}
                  className="hover:text-primary-600 transition-colors py-2"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={closeMobileMenu}
                  className="hover:text-primary-600 transition-colors py-2"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  onClick={closeMobileMenu}
                  className="hover:text-primary-600 transition-colors py-2"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  onClick={closeMobileMenu}
                  className="hover:text-primary-600 transition-colors py-2"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="hover:text-primary-600 transition-colors py-2"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Zyad Afifi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Frontend Web Developer specialized in React.js and Next.js,
              building modern, responsive, and high-performance web
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center gap-2">
                <Download size={20} />
                <a href="https://www.linkedin.com/in/zyad-ahmed-afify/overlay/1752930272578/single-media-viewer/?type=DOCUMENT&profileId=ACoAADFpkLkB9igE-fW-Vv5j5Ue4Fc5ua7JMExU">
                  Download Resume
                </a>
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <a href="https://github.com/zyadafifi?tab=repositories">
                  View Projects
                </a>
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Results-driven Frontend Developer skilled in building modern,
              responsive, and high-performance web applications. Specialized in
              React.js and Next.js with strong understanding of HTML, CSS,
              JavaScript (ES6), and component-based architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Code size={20} />
                    Frontend web development
                  </li>
                  <li className="flex items-center gap-3">
                    <Palette size={20} />
                    Responsive design & UI/UX
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe size={20} />
                    React.js & Next.js applications
                  </li>
                  <li className="flex items-center gap-3">
                    <Database size={20} />
                    REST API integration
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">My Journey</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Graduated with a BSc in Computers & Artificial Intelligence
                  from Banha University, I've specialized in frontend
                  development with hands-on training at ITI and currently
                  working as a Frontend Developer at LeadInTop.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">My Approach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I focus on writing clean, maintainable code and creating
                  intuitive user experiences. Experienced in Agile environments,
                  Git version control, and cross-functional team collaboration.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I work with a variety of technologies to create robust and
              scalable applications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="card text-center group hover:scale-105 transition-transform"
              >
                <skill.icon
                  size={40}
                  className="mx-auto mb-4 text-primary-600"
                />
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="section-padding bg-white dark:bg-dark-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className="card group"
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                      <Code size={60} className="text-primary-600" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.github ? (
                        <a
                          href={project.github}
                          className="btn-primary text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      ) : null}
                      <a href={project.live} className="btn-secondary text-sm">
                        <ExternalLink size={16} />
                        Live
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-primary">
              <a href="https://github.com/zyadafifi?tab=repositories">
                View All Projects
              </a>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and the companies I've had the privilege
              to work with.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experience.map((job, index) => (
              <motion.div key={index} variants={fadeInUp} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-primary-600 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Award
                        size={16}
                        className="text-primary-600 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="section-padding bg-white dark:bg-dark-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic background and specialized training in technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    BSc in Computers & Artificial Intelligence
                  </h3>
                  <p className="text-primary-600 font-medium">
                    Faculty of Computers and AI, Banha University
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    June 2023
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    Cairo, Egypt
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Graduated with a comprehensive understanding of computer science
                fundamentals, artificial intelligence concepts, and practical
                programming skills.
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
                  Graduation Project
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>
                    Brain Tumor Detection using Deep Learning on MRI Scans
                  </strong>{" "}
                  - Developed an AI-powered system for automated brain tumor
                  detection and classification using deep learning algorithms
                  and medical imaging techniques.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:zyad90879@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                >
                  <Mail size={24} className="text-primary-600" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      zyad90879@gmail.com
                    </div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/zyad-ahmed-afify"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                >
                  <Linkedin size={24} className="text-primary-600" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      linkedin.com/in/zyad-ahmed-afify
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/zyadafifi"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                >
                  <Github size={24} className="text-primary-600" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      github.com/zyadafifi
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 rounded-lg">
                  <MapPin size={24} className="text-primary-600" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Cairo, Egypt
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-8">
        <div className="container-custom text-center">
          <p>&copy; 2025 Zyad Afifi. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
