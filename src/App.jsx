import { useEffect } from "react";
import {
  Navbar,
  Hero,
  About,
  Stats,
  Skills,
  Experience,
  Works,
  Certifications,
  Manifesto,
  Contact,
  Footer,
  Marquee,
  Grain,
  ScrollProgress,
} from "./components";
import { useLenis } from "./lib/useLenis";
import { profile } from "./constants";

const TOP_MARQUEE = [
  "TANMAY KALA",
  "AI ARCHITECT",
  "FOUNDER · NAXATRA AI",
  "INDIA · 2024–2026",
  "WHISPER · GEMINI · OPENCV",
  "BUILDING IN PUBLIC",
];

const App = () => {
  useLenis();

  useEffect(() => {
    document.title = `${profile.firstName} ${profile.lastName} — ${profile.role}`;
  }, []);

  return (
    <div className="relative bg-ink text-paper">
      <Grain />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        {/* Top status marquee — sets the rhythm before the bio */}
        <div className="bg-ink hairline-top hairline-bottom py-3 text-paper">
          <Marquee items={TOP_MARQUEE} speed="slow" />
        </div>

        <About />
        <Stats />
        <Skills />
        <Experience />
        <Works />
        <Certifications />

        {/* Reverse marquee for variety */}
        <div className="bg-ink hairline-top hairline-bottom py-3 text-paper">
          <Marquee items={TOP_MARQUEE} speed="normal" reverse />
        </div>

        <Manifesto />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
