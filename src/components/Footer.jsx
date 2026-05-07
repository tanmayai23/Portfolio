import { useEffect, useState } from "react";
import { footerLinks, profile } from "../constants";
import Marquee from "./Marquee";

const FOOTER_MARQUEE = [
  "OPEN FOR WORK",
  "AI ENGINEER",
  "TANMAY KALA",
  "INDIA · 2026",
  "BUILDING IN PUBLIC",
  "VOICE · VISION · LANGUAGE",
];

const useClock = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
};

const formatIST = (d) => {
  // Force IST regardless of viewer locale.
  return d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
};

const Footer = () => {
  const now = useClock();

  return (
    <footer className="relative bg-ink text-paper hairline-top overflow-hidden">
      {/* Marquee top band */}
      <div className="hairline-bottom py-4">
        <Marquee items={FOOTER_MARQUEE} speed="slow" />
      </div>

      {/* Editorial CTA strip */}
      <section
        aria-label="footer call-to-action"
        className="relative px-6 sm:px-12 lg:px-20 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1500px] grid grid-cols-12 gap-y-10 gap-x-8">
          {/* Left: huge declarative pull quote */}
          <div className="col-span-12 lg:col-span-8">
            <p className="kicker text-ash mb-4">07 — END OF FILE</p>
            <h3 className="display-lg leading-[0.92] text-paper text-balance">
              Got a hard <span className="serif-italic">problem</span>?
              <br />
              Let's <span className="serif-italic">build</span> it together.
            </h3>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={profile.socials.email}
                className="inline-flex items-center gap-2 border border-paper px-7 py-3 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                EMAIL ME ↗
              </a>
              <span className="kicker text-ash">
                tanmaykala171206@gmail.com
              </span>
            </div>
          </div>

          {/* Right: live status card */}
          <aside className="col-span-12 lg:col-span-4 lg:border-l lg:border-wire lg:pl-10 flex flex-col gap-5">
            <div>
              <span className="kicker text-ash block mb-2">STATUS</span>
              <span className="flex items-center gap-2 text-paper">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-paper animate-ping opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-paper" />
                </span>
                <span className="kicker text-paper">AVAILABLE FOR WORK · 2026</span>
              </span>
            </div>

            <div>
              <span className="kicker text-ash block mb-2">LOCAL TIME</span>
              <span className="display-md text-paper tabular-nums leading-none">
                {formatIST(now)}
              </span>
              <span className="kicker text-ash block mt-1">IST · ASIA / KOLKATA</span>
            </div>

            <div>
              <span className="kicker text-ash block mb-2">CURRENTLY</span>
              <span className="mono-sm text-paper">
                FOUNDER @ NAXATRA AI · STUDENT @ VIT BHOPAL
              </span>
            </div>
          </aside>
        </div>
      </section>

      {/* Massive monogram band — like the reference's giant city word */}
      <div className="relative hairline-top">
        <div
          aria-hidden="true"
          className="leading-none text-paper select-none whitespace-nowrap text-center px-2 py-6 sm:py-10"
          style={{
            fontFamily: "Anton, Impact, sans-serif",
            fontSize: "clamp(6rem, 28vw, 24rem)",
            letterSpacing: "-0.02em",
          }}
        >
          TANMAY KALA
        </div>
      </div>

      {/* Three-column link grid */}
      <div className="hairline-top px-6 sm:px-12 lg:px-20 py-12">
        <div className="mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10">
          <div>
            <h4 className="kicker text-ash mb-5">— REACH OUT</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.contact.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="group inline-flex items-center gap-2 mono-sm tracking-widest text-paper hover:text-ash transition-colors"
                  >
                    <span aria-hidden="true" className="text-ash group-hover:text-paper transition-colors">↗</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="kicker text-ash mb-5">— NAVIGATE</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.navigate.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="mono-sm tracking-widest text-paper hover:text-ash transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="kicker text-ash mb-5">— COLOPHON</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.build.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="mono-sm tracking-widest text-ash hover:text-paper transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom legal strip */}
      <div className="hairline-top px-6 sm:px-12 lg:px-20 py-6">
        <div className="mx-auto max-w-[1500px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="mono-sm text-ash uppercase tracking-widest">
            © 2026 TANMAY KALA — ALL WORKS RESERVED
          </span>
          <span className="mono-sm text-ash uppercase tracking-widest">
            DESIGNED · CODED · DEPLOYED FROM INDIA
          </span>
          <span className="mono-sm text-ash uppercase tracking-widest">
            v1.0 · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
