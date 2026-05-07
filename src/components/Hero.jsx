import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "../constants";

// Hero composition: photo behind giant typography, à la "KANYE / WEST".
// Top half displays first name; bottom half displays last name. The portrait
// sits between them, so the letters appear to crop the figure.
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY    = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const photoScale= useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const titleY    = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <section
      id="top"
      ref={ref}
      aria-label="hero"
      className="relative w-full min-h-screen overflow-hidden bg-ink text-paper"
    >
      {/* Photo column, centered, behind text */}
      <motion.div
        style={{ y: photoY, scale: photoScale }}
        className="pointer-events-none absolute inset-x-0 top-[12vh] sm:top-[10vh] flex justify-center"
      >
        <div className="relative h-[78vh] w-[min(86vw,640px)]">
          <img
            src={profile.photo}
            alt={`${profile.firstName} ${profile.lastName}`}
            fetchpriority="high"
            loading="eager"
            decoding="sync"
            className="h-full w-full object-cover photo-bw-strong"
          />
          {/* Vignette feathers the portrait into the page bg in either theme (consumes --vignette) */}
          <div aria-hidden="true" className="hero-vignette" />
        </div>
      </motion.div>

      {/* Title block */}
      <motion.div
        style={{ y: titleY }}
        className="relative z-10 flex flex-col h-screen min-h-[680px] justify-between pt-[80px] sm:pt-[96px] pb-12 px-2 sm:px-6"
      >
        <div className="flex justify-center">
          <h1
            aria-label={`${profile.firstName} ${profile.lastName}`}
            className="display-xl text-paper text-center"
            style={{ fontSize: "clamp(5rem, 19vw, 22rem)", lineHeight: "0.84" }}
          >
            <span className="block">{profile.firstName}</span>
          </h1>
        </div>

        {/* Mid mono caption */}
        <div className="flex flex-col items-center gap-3 px-6">
          <span className="mono-sm tracking-widestest text-paper/90 text-center">
            {profile.role}
          </span>
          <span className="kicker text-ash text-center">
            {profile.tagline} · {profile.location} · {profile.est}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 border border-paper px-5 py-2 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors"
            >
              DOWNLOAD RESUME ↓
            </a>
            <a
              href="#works"
              className="inline-flex items-center gap-2 border border-wire px-5 py-2 mono-sm tracking-widest text-paper hover:border-paper transition-colors"
            >
              SEE WORK ↓
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <h1
            aria-hidden="true"
            className="display-xl text-paper text-center"
            style={{ fontSize: "clamp(5rem, 19vw, 22rem)", lineHeight: "0.84" }}
          >
            <span className="block">{profile.lastName}</span>
          </h1>
        </div>
      </motion.div>

      {/* Scroll indicator, top-of-page */}
      <a
        href="#about"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex flex-col items-center gap-2 text-paper"
        aria-label="Scroll to about"
      >
        <span className="kicker text-ash">SCROLL</span>
        <div className="w-px h-10 bg-paper/70 relative overflow-hidden">
          <motion.span
            initial={{ y: -40 }}
            animate={{ y: 40 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-px h-6 bg-paper"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
