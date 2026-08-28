export const projectsData = [
  {
    id: "urban-nest",
    title: "UrbanNest — Residential Society Management",
    tagline: "A full-stack residential community web application with visitor gate passes, notice broadcasts, and maintenance billing.",
    category: "Web Applications",
    featured: true,
    year: "2026",
    role: "Full-Stack Developer",
    tech: ["React", "Django", "MongoDB", "Tailwind CSS", "Render"],
    metrics: {
      framework: "React + Django REST",
      database: "MongoDB Atlas",
      deployment: "Vercel (Frontend) & Render (Backend)"
    },
    summary: "An intuitive society management platform designed to replace manual visitor logbooks with fast digital gate passes, streamline monthly maintenance fee tracking, and broadcast important society notices in real time.",
    architecture: [
      "Django REST framework backend deployed on Render handling authenticated API endpoints and MongoDB transactions",
      "Digital visitor pass generator with rapid QR / pass validation and status updates",
      "Dynamic noticeboard timeline with priority filters and maintenance tracking dashboards",
      "Modern responsive UI styled with Tailwind CSS for seamless resident and security guard workflows"
    ],
    github: null, // Private repository
    isPrivateRepo: true,
    demo: "https://urban-nest-in.vercel.app",
    badge: "Full-Stack",
    accentColor: "#0284C7",
    interactivePreview: "nest"
  },
  {
    id: "hd-bank",
    title: "HD Bank — Online Banking Web Application",
    tagline: "A modern banking dashboard with real-time balance tracking, transaction search, and interactive transfer simulator.",
    category: "Web Applications",
    featured: true,
    year: "2026",
    role: "Full-Stack Developer",
    tech: ["React", "Django", "MongoDB", "Tailwind CSS"],
    metrics: {
      framework: "React + Django REST",
      database: "MongoDB Atlas",
      security: "JWT Auth & Account Validation"
    },
    summary: "A modern online banking application engineered with React, Django REST framework, and MongoDB. Features real-time balance calculations, wire transfer simulator, categorized transaction search, and debit card security controls.",
    architecture: [
      "Django REST backend managing user accounts, ledger state, and transactional consistency",
      "Modular transaction ledger with instant multi-field search and category filtering",
      "Interactive debit card security controls with one-click freeze states and spending limit previews",
      "Clean, tactile dashboard layout optimized across mobile and desktop viewpoints"
    ],
    github: "https://github.com/harshdholakiya21/HD-Bank",
    demo: "https://hd-bank-in.vercel.app",
    badge: "Full-Stack",
    accentColor: "#059669",
    interactivePreview: "bank"
  },
  {
    id: "youtube-automation",
    title: "YouTube Video Automation Pipeline",
    tagline: "Python-powered automated content generator that creates AI scripts, voiceovers, and dynamic subtitle videos.",
    category: "Python & Automation",
    featured: true,
    year: "2026",
    role: "Python Developer",
    tech: ["Python", "MoviePy", "TTS", "LLM APIs", "YouTube Data API"],
    metrics: {
      language: "Python",
      automation: "Script Gen, Voice Synthesis & Compositing"
    },
    summary: "An automated Python pipeline that converts video topic ideas into fully rendered video shorts. It utilizes LLM APIs to generate engaging video scripts, converts text to voiceover audio, overlays timed dynamic subtitles, and connects to YouTube Data API for scheduled publishing.",
    architecture: [
      "End-to-end Python pipeline connecting LLM prompt generation, TTS audio synthesis, and video clip compositing",
      "MoviePy engine rendering dynamic subtitle overlays synchronized with audio waveform timestamps",
      "YouTube Data API integration for scheduled uploads, category tagging, and metadata automation"
    ],
    github: "https://github.com/harshdholakiya21",
    demo: "https://github.com/harshdholakiya21",
    badge: "Python Tool",
    accentColor: "#EF4444",
    interactivePreview: "ai_bot"
  },
  {
    id: "keyvault",
    title: "KeyVault — Cryptographic Password Manager",
    tagline: "A client-side cryptographic credential manager with customizable password generation and instant strength entropy scoring.",
    category: "Tools",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
    tech: ["React", "Web Crypto API", "Tailwind CSS"],
    metrics: {
      security: "Client-Side Cryptography",
      features: "Custom Entropy Scoring & 1-Click Copy"
    },
    summary: "A practical, privacy-first security tool that generates cryptographically strong, customizable passwords with real-time entropy evaluation, custom character sets, and copy protection.",
    architecture: [
      "Real-time entropy mathematical scoring algorithm evaluating password strength against dictionary attacks",
      "Secure random byte generation utilizing the browser native Web Crypto API (`crypto.getRandomValues`)",
      "1-click clipboard copy integration with instant visual toast notifications"
    ],
    github: "https://github.com/harshdholakiya21",
    demo: "https://github.com/harshdholakiya21",
    badge: "Security Tool",
    accentColor: "#8B5CF6",
    interactivePreview: "vault"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio & Dev Console",
    tagline: "A tactile, minimalist developer portfolio featuring interactive project simulators, command palette (⌘K), and dark mode.",
    category: "Web Applications",
    featured: false,
    year: "2026",
    role: "Frontend Developer",
    tech: ["React", "Tailwind CSS", "Vite", "JavaScript (ES6+)"],
    metrics: {
      framework: "React + Vite",
      styling: "Tailwind CSS + Blueprint Theme",
      interactivity: "Live Project Simulators & ⌘K Palette"
    },
    summary: "My personal developer portfolio designed with an editorial, blueprint aesthetic. Includes interactive project sandboxes, a keyboard-driven command palette (⌘K), responsive design, and contact form handling.",
    architecture: [
      "Custom interactive simulators embedded within project modal previews for immediate hands-on testing",
      "Global Command Palette (⌘K) providing keyboard navigation across all sections, links, and projects",
      "Fully responsive CSS architecture with dark obsidian and light paper themes"
    ],
    github: "https://github.com/harshdholakiya21/Portfolio",
    demo: "https://harshdholakiya-portfolio.vercel.app",
    badge: "Portfolio",
    accentColor: "#D97706",
    interactivePreview: "editor"
  }
];

export const projectCategories = ["All", "Web Applications", "Python & Automation", "Tools"];
