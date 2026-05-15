// Real content for Tanmay Kala's portfolio.
// All facts and metrics sourced from his resume (Oct 2025 version) and
// github.com/tanmayai23. Numbers and dates are verbatim.

export const profile = {
  firstName: "TANMAY",
  lastName: "KALA",
  role: "GENERATIVE AI · NLP ENGINEER",
  tagline: "FOUNDER · NAXATRA AI",
  location: "VIT BHOPAL · INDIA",
  est: "EST. 2024",
  monogram: "T—K",
  photo: "/me.png",
  resume: "/resume.pdf",
  phone: "+91 95301 73355",
  socials: {
    linkedin:  "https://www.linkedin.com/in/tanmay-kala",
    github:    "https://github.com/tanmayai23",
    email:     "mailto:tanmaykala171206@gmail.com",
    phone:     "tel:+919530173355",
    instagram: "https://instagram.com/tanmayekaala__",
    youtube:   "https://youtube.com/@techtalks-14",
    resume:    "/resume.pdf",
  },
};

export const navLinks = [
  { id: "about",   title: "ABOUT" },
  { id: "skills",  title: "SKILLS" },
  { id: "works",   title: "WORKS" },
  { id: "contact", title: "CONTACT" },
];

export const ribbonText = "GENERATIVE AI · NLP · LLMs · RAG · WHISPER";

export const aboutCopy = {
  eyebrow: "01 — ABOUT",
  paragraph:
    "Generative AI and NLP engineer with 5 shipped products, a Top-25 finish out of 400+ teams at Hack For Green Bharat, and Oracle Cloud Generative AI Professional certification. Founder of Naxatra AI. B.Tech in CS (AI & ML) at VIT Bhopal. I work end-to-end — Python, LLMs, RAG, prompt engineering, Hugging Face, Gemini — and I ship in public.",
  cta: "SEE THE WORK",
};

export const localeBlock = {
  eyebrow: "02 — TRACK RECORD",
  word: "SHIPPED",
  meta: {
    studio: "FOUNDER @ NAXATRA AI · STUDENT @ VIT BHOPAL",
    available: "OPEN TO INTERNSHIPS · COLLABORATIONS · 2026",
    capacity: "GENERATIVE AI · NLP · FULL-STACK",
  },
};

// Hard numbers straight from the resume.
export const stats = [
  { value: "05",   label: "SHIPPED AI PRODUCTS" },
  { value: "T-25", label: "OF 400+ NATIONAL TEAMS" },
  { value: "12",   label: "PUBLIC GITHUB REPOS" },
  { value: "05",   label: "CERTIFICATIONS HELD" },
];

// Skills mirror the resume's "Technical Skills" block, organized for the page.
export const skillGroups = [
  {
    heading: "AI · ML",
    items: [
      { name: "GENERATIVE AI",  note: "PRODUCTION SHIPS" },
      { name: "NLP",            note: "CLASSIFICATION · QA" },
      { name: "LLMs",           note: "GEMINI · OPENAI" },
      { name: "RAG",            note: "RETRIEVAL · VECTOR DB" },
      { name: "FINE-TUNING",    note: "LLM ADAPTATION" },
      { name: "PROMPT ENG.",    note: "AGENTS · CHAINS" },
      { name: "HUGGING FACE",   note: "TRANSFORMERS" },
      { name: "TENSORFLOW",     note: "DEEP LEARNING" },
    ],
  },
  {
    heading: "SPEECH · VISION · WEB",
    items: [
      { name: "WHISPER AI",     note: "95% TRANSCRIPTION" },
      { name: "OPENCV",         note: "FACE AUTH · CV" },
      { name: "PYTTSX3",        note: "TEXT-TO-SPEECH" },
      { name: "SNOWBOY",        note: "HOTWORD <500MS" },
      { name: "FLASK · FASTAPI",note: "API SERVICES" },
      { name: "GRADIO",         note: "ML DEMOS" },
      { name: "STREAMLIT",      note: "DASHBOARDS" },
      { name: "REACT · TS",     note: "FRONTEND" },
    ],
  },
  {
    heading: "LANGUAGES · CLOUD",
    items: [
      { name: "PYTHON",         note: "PRIMARY" },
      { name: "TYPESCRIPT",     note: "WEB STACK" },
      { name: "C · C++",        note: "SYSTEMS · DSA" },
      { name: "SQL",            note: "MYSQL · SQLITE" },
      { name: "ORACLE OCI",     note: "GENAI PRO CERT" },
      { name: "AWS · GCP",      note: "DEPLOYMENT" },
      { name: "VERCEL",         note: "EDGE HOSTING" },
      { name: "GIT · GITHUB",   note: "VERSION CONTROL" },
    ],
  },
];

// Real timeline — 2024 onward.
export const experiences = [
  {
    year: "2025",
    company: "NAXATRA AI",
    role: "FOUNDER · GENERATIVE AI ENGINEER",
    location: "INDIA · REMOTE",
    points: [
      "Founded Naxatra AI to ship intelligent products targeting civic and student problems.",
      "Delivered six public-facing AI/web products across speech, travel, civic-tech, collaboration, and student productivity.",
      "Architected SwachhVan — placed Top 25 of 400+ teams nationally at Hack For Green Bharat.",
      "Published 21 build-in-public posts on LinkedIn (avg. 538+ impressions); audience grew to 439 followers.",
    ],
  },
  {
    year: "2025",
    company: "ORACLE · CERTIFICATIONS",
    role: "GENAI PROFESSIONAL · AI FOUNDATIONS ASSOCIATE",
    location: "ONLINE",
    points: [
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional (Oct 2025 – Oct 2027).",
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Oct 2025).",
      "Studied: LLM architectures, RAG, prompt engineering, model deployment on OCI.",
    ],
  },
  {
    year: "2024 – 2025",
    company: "HACKATHONS · OPEN BUILDING",
    role: "AI ENGINEER · TEAM LEAD",
    location: "INDIA",
    points: [
      "Hack For Green Bharat — Top 25 of 400+ national teams with SwachhVan AI sanitation platform.",
      "Summer of Codefest '25 — placed with VibeHub (consolidated 6 modules + NLP chatbot) among 50+ teams.",
      "Maintained 12 public GitHub repositories spanning GenAI, NLP, computer vision, and full-stack TypeScript.",
    ],
  },
  {
    year: "2024",
    company: "VIT BHOPAL · B.TECH CS (AI & ML)",
    role: "STUDENT · BUILDER",
    location: "BHOPAL, INDIA",
    points: [
      "Started B.Tech in Computer Science with specialization in AI & Machine Learning (Sep 2024 – Sep 2028).",
      "Coursework: Machine Learning, Deep Learning, NLP, Computer Vision, DSA, DBMS, Probability & Statistics.",
      "Earned: AI for Beginners (HP LIFE), MATLAB Onramp (MathWorks), Oracle Cloud Application Foundation.",
    ],
  },
];

// Curated project lineup for portfolio showcase order.
export const projects = [
  {
    index: "01",
    name: "WHISPER AI TRANSCRIBE",
    sub: "AUDIO-TO-TEXT TOOL",
    year: "JAN 2025",
    description:
      "Audio transcription app built on OpenAI Whisper with 95%+ accuracy across multiple formats. Includes auto language detection, translation support, and export outputs for practical content workflows.",
    stack: ["python", "whisper", "gradio", "nlp", "translation"],
    liveLink: "https://huggingface.co/spaces/TANMAY-555/Whisper_AI",
    repoLink: "https://github.com/tanmayai23/Whisper_AI_Transcription",
    image: "/projects/whisper-ai.png",
    imageAlt: "Whisper AI Transcribe interface preview",
  },
  {
    index: "02",
    name: "AI TRAVEL ASSIST",
    sub: "NLP GEOLOCATION DISCOVERY",
    year: "OCT 2025",
    description:
      "NLP-powered geolocation assistant that surfaces nearby points of interest and organizes recommendations in real time. Combines Gemini + web signals to improve relevance and planning quality for trips.",
    stack: ["python", "gemini", "serpapi", "nlp", "geolocation"],
    liveLink: "https://aitravelassist.vercel.app/",
    repoLink: "https://github.com/tanmayai23/AI-Travel-Assist",
    image: "/projects/ai-travel-assist.svg",
    imageAlt: "AI Travel Assist application screenshot",
  },
  {
    index: "03",
    name: "NEXUS CALCULATOR",
    sub: "ADVANCED COMPUTATIONAL INTERFACE",
    year: "2026",
    description:
      "Modern calculator experience focused on fast, clean interaction and advanced computation workflows. Built as a polished, high-contrast interface with practical productivity-first UX.",
    stack: ["react", "typescript", "ui", "calculator", "vercel"],
    liveLink: "https://nexus-calculator-b8qy.vercel.app/",
    repoLink: "https://github.com/tanmayai23/NEXUS-CALCULATOR",
    image: "/projects/nexus-calculator.svg",
    imageAlt: "Nexus Calculator interface screenshot",
  },
  {
    index: "04",
    name: "SWACHHVAN",
    sub: "AI SMART SANITATION",
    year: "FEB 2025",
    description:
      "Production AI urban sanitation platform — Top 25 of 400+ teams at Hack For Green Bharat. Engineered an AI demand forecasting engine that cut manual dispatch planning 60% across three city zones. Real-time GPS tracking, smart booking, and cleanliness rating, all in one full-stack TypeScript app on Vercel. Validated end-to-end with 100+ simulated bookings — zero cloud cost on the Vercel free tier.",
    stack: ["typescript", "ai-forecasting", "gps", "vercel"],
    liveLink: "https://swachhvan.vercel.app/",
    repoLink: "https://github.com/tanmayai23/HACK-FOR-GREEN-BHARAT",
    image: "/projects/swachhvan.svg",
    imageAlt: "SwachhVan application screenshot",
  },
  {
    index: "05",
    name: "YOUTUBE WATCH TOGETHER",
    sub: "REAL-TIME SYNCED VIEWING",
    year: "SEP 2025",
    description:
      "Real-time YouTube synchronization app for shared watching sessions with low-latency playback alignment and collaborative room-based experience.",
    stack: ["typescript", "realtime", "youtube-api", "websockets", "ui"],
    liveLink: "https://github.com/tanmayai23/Youtube-Watch-Together",
    repoLink: "https://github.com/tanmayai23/Youtube-Watch-Together",
    image: "/youtube-watch-together.svg",
    imageAlt: "YouTube Watch Together GitHub project preview",
  },
  {
    index: "06",
    name: "VIBEHUB",
    sub: "COLLEGE LIFE PLATFORM",
    year: "JUN 2025",
    description:
      "Student productivity platform consolidating modules for courses, assignments, attendance, mood, complaints, and community. Includes an NLP chatbot for faster campus navigation and support.",
    stack: ["python", "flask", "gradio", "nlp", "chatbot"],
    liveLink: "https://vibehub-liard.vercel.app/",
    repoLink: "https://github.com/tanmayai23/vibehub-campus-connect",
    image: "/projects/vibehub.png",
    imageAlt: "VibeHub application screenshot",
  },
];

// Real certifications, lifted from resume.
export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    period: "Oct 2025 – Oct 2027",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    period: "Oct 2025",
  },
  {
    title: "Oracle Cloud Application Foundation Certified Implementation Specialist",
    issuer: "Oracle",
    period: "2024",
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    period: "Jun 2024",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    period: "2024",
  },
];

// Manifesto line — italic words wrapped [i]...[/i]
export const manifestoLine =
  "Started in [i]2024[/i] with one repo. Two years, [i]five[/i] shipped products, and a Top-25 of 400+ later — voice, [i]vision[/i], language, in [i]public[/i].";

export const footerLinks = {
  contact: [
    { label: "EMAIL ME",   href: "mailto:tanmaykala171206@gmail.com" },
    { label: "CALL",       href: "tel:+919530173355" },
    { label: "LINKEDIN",   href: "https://www.linkedin.com/in/tanmay-kala" },
    { label: "GITHUB",     href: "https://github.com/tanmayai23" },
    { label: "INSTAGRAM",  href: "https://instagram.com/tanmayekaala__" },
    { label: "YOUTUBE",    href: "https://youtube.com/@techtalks-14" },
  ],
  navigate: [
    { label: "ABOUT",      href: "#about" },
    { label: "SKILLS",     href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "WORKS",      href: "#works" },
    { label: "CONTACT",    href: "#contact" },
    { label: "BACK TO TOP",href: "#top" },
  ],
  build: [
    { label: "DOWNLOAD RESUME (PDF)",      href: "/resume.pdf" },
    { label: "BUILT WITH REACT + VITE",    href: "#" },
    { label: "TYPE: ANTON · INSTRUMENT SERIF", href: "#" },
    { label: "STACK: TAILWIND · FRAMER · LENIS", href: "#" },
    { label: "VIEW SOURCE",                href: "https://github.com/tanmayai23" },
  ],
};
