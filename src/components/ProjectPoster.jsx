// Typographic project "poster" — replaces photographic card images.
// Every project gets a distinct, deterministic monochrome composition based on
// its index, name, and stack. No assets to source, no screenshots required.
// Strokes/fills use CSS-var inline styles so the poster follows the active theme.
const PATTERNS = [
  // 0 — diagonal hatching
  (
    <pattern id="p-0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
      <line x1="0" y1="0" x2="0" y2="14" strokeWidth="1" strokeOpacity="0.18" style={{ stroke: "var(--paper)" }} />
    </pattern>
  ),
  // 1 — fine grid
  (
    <pattern id="p-1" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" strokeWidth="0.6" strokeOpacity="0.25" style={{ stroke: "var(--paper)" }} />
    </pattern>
  ),
  // 2 — concentric circles
  (
    <pattern id="p-2" width="120" height="120" patternUnits="userSpaceOnUse">
      <circle cx="60" cy="60" r="20" fill="none" strokeOpacity="0.25" style={{ stroke: "var(--paper)" }} />
      <circle cx="60" cy="60" r="40" fill="none" strokeOpacity="0.18" style={{ stroke: "var(--paper)" }} />
      <circle cx="60" cy="60" r="60" fill="none" strokeOpacity="0.12" style={{ stroke: "var(--paper)" }} />
    </pattern>
  ),
  // 3 — dots
  (
    <pattern id="p-3" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fillOpacity="0.35" style={{ fill: "var(--paper)" }} />
    </pattern>
  ),
  // 4 — vertical bars
  (
    <pattern id="p-4" width="28" height="28" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="2" height="28" fillOpacity="0.18" style={{ fill: "var(--paper)" }} />
    </pattern>
  ),
  // 5 — waveform
  (
    <pattern id="p-5" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M0 30 Q 15 0 30 30 T 60 30" fill="none" strokeOpacity="0.3" style={{ stroke: "var(--paper)" }} />
    </pattern>
  ),
];

const ProjectPoster = ({ index, name, sub, year, stack = [] }) => {
  const i = (parseInt(index, 10) - 1) % PATTERNS.length;

  return (
    <div className="absolute inset-0 bg-ink overflow-hidden">
      <svg
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>{PATTERNS[i]}</defs>
        <rect width="800" height="1000" style={{ fill: "var(--ink)" }} />
        <rect width="800" height="1000" fill={`url(#p-${i})`} />
        {/* huge faded number */}
        <text
          x="40"
          y="350"
          fontFamily="Anton, Impact, sans-serif"
          fontSize="380"
          fillOpacity="0.06"
          letterSpacing="-12"
          style={{ fill: "var(--paper)" }}
        >
          {index}
        </text>
        {/* Top ticks */}
        <line x1="40" y1="40" x2="120" y2="40" strokeOpacity="0.5" style={{ stroke: "var(--paper)" }} />
        <line x1="760" y1="40" x2="680" y2="40" strokeOpacity="0.5" style={{ stroke: "var(--paper)" }} />
      </svg>

      {/* Foreground composition */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7 text-paper">
        <div className="flex items-center justify-between">
          <span className="kicker tracking-widest text-paper">N° {index}</span>
          <span className="kicker tracking-widest text-ash">{year}</span>
        </div>

        <div>
          {/* Stack as small mono row */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
            {stack.slice(0, 4).map((s) => (
              <span key={s} className="mono-sm text-ash">· {s}</span>
            ))}
          </div>
          <h3
            className="display-md text-paper leading-[0.92] text-balance"
            style={{ fontSize: "clamp(1.7rem, 3.6vw, 3.2rem)" }}
          >
            {name}
          </h3>
          {sub && (
            <p className="kicker text-ash mt-2">{sub}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPoster;
