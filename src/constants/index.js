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
      "Delivered the Hey Dude AI voice assistant from zero to production-ready in a 15-day sprint.",
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

// 5 real shipped products from the resume, in reverse-chronological order.
export const projects = [
  {
    index: "01",
    name: "HEY DUDE",
    sub: "AI VOICE ASSISTANT",
    year: "NOV 2025",
    description:
      "Production AI voice assistant delivered in a 15-day sprint. Unified voice recognition, biometric face authentication, and full system control inside one Python pipeline. Replaced a rule-based engine with the Gemini API to lift conversational accuracy 3× across 10+ command categories. OpenCV face embeddings on SQLite enable passwordless login in under 2 seconds. WhatsApp automation across 50+ contacts via voice cut task completion 80% with sub-500 ms hotword latency.",
    stack: ["python", "gemini", "opencv", "speech-rec", "sqlite", "snowboy"],
    link: "https://github.com/tanmayai23/Hey-Dude-Voice-Assistant",
  },
  {
    index: "02",
    name: "AI TRAVEL ASSIST",
    sub: "NLP GEOLOCATION DISCOVERY",
    year: "OCT 2025",
    description:
      "NLP-powered geolocation engine that surfaces hidden points of interest within a 10 km radius and auto-categorizes them into three priority states in real time. Combines the Gemini API with SerpAPI to lift recommendation relevance 40% over baseline search across three POI categories. Sole AI engineer in a six-member team; delivered the full project inside a four-week academic deadline.",
    stack: ["python", "gemini", "serpapi", "nlp", "geolocation"],
    link: "https://github.com/tanmayai23/AI-Travel-Assist",
  },
  {
    index: "03",
    name: "VIBEHUB",
    sub: "COLLEGE LIFE PLATFORM",
    year: "JUN 2025",
    description:
      "Student productivity platform consolidating six modules — courses, assignments, attendance, mood, complaints, and community. NLP-powered chatbot handles 100+ query types and removes the human-agent dependency for navigation. Smart Planner and Pomodoro Timer included. Placed at Summer of Codefest '25 hackathon among 50+ competing teams.",
    stack: ["python", "flask", "gradio", "nlp", "chatbot"],
    link: "https://github.com/tanmayai23/vibehub-campus-connect",
  },
  {
    index: "04",
    name: "SWACHHVAN",
    sub: "AI SMART SANITATION",
    year: "FEB 2025",
    description:
      "Production AI urban sanitation platform — Top 25 of 400+ teams at Hack For Green Bharat. Engineered an AI demand forecasting engine that cut manual dispatch planning 60% across three city zones. Real-time GPS tracking, smart booking, and cleanliness rating, all in one full-stack TypeScript app on Vercel. Validated end-to-end with 100+ simulated bookings — zero cloud cost on the Vercel free tier.",
    stack: ["typescript", "ai-forecasting", "gps", "vercel"],
    link: "https://github.com/tanmayai23/HACK-FOR-GREEN-BHARAT",
  },
  {
    index: "05",
    name: "WHISPER AI TRANSCRIBE",
    sub: "AUDIO-TO-TEXT TOOL",
    year: "JAN 2025",
    description:
      "Audio transcription app on OpenAI Whisper, achieving 95%+ accuracy across 5+ formats through a drag-and-drop Gradio interface. Auto language detection and translation for 50+ languages, with three output formats (TXT, SRT, JSON). Published as a public Colab-hosted app via pyngrok — zero-cost production deployment, no cloud infra required.",
    stack: ["python", "whisper", "flask", "gradio", "pyngrok"],
    link: "https://github.com/tanmayai23",
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
