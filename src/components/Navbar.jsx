import { useEffect, useState } from "react";
import { navLinks, profile } from "../constants";

const getInitialTheme = () => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
};

const ThemeToggle = ({ theme, onToggle, className = "" }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    className={`relative inline-flex h-7 w-7 items-center justify-center text-paper hover:text-ash transition-colors ${className}`}
  >
    {theme === "dark" ? (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
      </svg>
    )}
  </button>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (_) { /* storage blocked */ }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-ink/80 backdrop-blur-sm hairline-bottom" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between text-paper">
        {/* Left links (hidden on mobile) */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.slice(0, 2).map((n) => (
            <li key={n.id}>
              <a className="kicker text-ash hover:text-paper transition-colors" href={`#${n.id}`}>{n.title}</a>
            </li>
          ))}
        </ul>

        {/* Center monogram */}
        <a href="#top" className="display-md text-paper text-xl sm:text-2xl tracking-tightest absolute left-1/2 -translate-x-1/2">
          {profile.monogram}
        </a>

        {/* Right links (hidden on mobile) */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.slice(2).map((n) => (
            <li key={n.id}>
              <a className="kicker text-ash hover:text-paper transition-colors" href={`#${n.id}`}>{n.title}</a>
            </li>
          ))}
          <li>
            <a
              className="kicker text-ash hover:text-paper transition-colors"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >LINKEDIN</a>
          </li>
          <li>
            <a
              className="kicker text-paper hover:text-ash transition-colors"
              href={profile.resume}
              download
            >RESUME ↓</a>
          </li>
          <li>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="md:hidden ml-auto flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            className="kicker text-paper"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-ink transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-start gap-8 px-8 py-12">
          {navLinks.map((n) => (
            <li key={n.id}>
              <a
                onClick={() => setOpen(false)}
                href={`#${n.id}`}
                className="display-md text-paper hover:text-bone"
              >
                {n.title}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() => setOpen(false)}
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="display-md text-paper hover:text-bone"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpen(false)}
              href={profile.resume}
              download
              className="display-md text-paper hover:text-bone"
            >
              RESUME ↓
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
