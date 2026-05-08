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

        {/* Top status marquee — rotated tape, color-inverted from the page.
            overflow-hidden parent clips the rotated ends off-screen for the
            'thrown on the page' editorial poster feel. */}
        <div className="relative overflow-hidden py-10 sm:py-14">
          <div className="-rotate-[2deg] origin-center w-[112%] -ml-[6%] bg-paper text-ink py-4 sm:py-5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
            <Marquee
              items={TOP_MARQUEE}
              speed="slow"
              itemClassName="font-display uppercase tracking-tight text-[clamp(1.6rem,3.4vw,3rem)] leading-none"
            />
          </div>
        </div>

        <About />
        <Stats />
        <Skills />
        <Experience />
        <Works />
        <Certifications />

        {/* Reverse-direction tape, tilted the other way — natural visual rhyme */}
        <div className="relative overflow-hidden py-10 sm:py-14">
          <div className="rotate-[2deg] origin-center w-[112%] -ml-[6%] bg-paper text-ink py-4 sm:py-5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
            <Marquee
              items={TOP_MARQUEE}
              speed="normal"
              reverse
              itemClassName="font-display uppercase tracking-tight text-[clamp(1.6rem,3.4vw,3rem)] leading-none"
            />
          </div>
        </div>

        <Manifesto />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
