import { motion } from "framer-motion";
import { manifestoLine } from "../constants";

// Renders the bottom big-text band, mixing Anton (default) with Instrument
// Serif italic for emphasis words wrapped in [i]...[/i] in the source string.
// Like the reference's "From the south side of Chicago he rose…" with mixed styling.
const renderMixed = (str) => {
  const parts = str.split(/(\[i\][^[]+\[\/i\])/g);
  return parts.map((p, i) => {
    const m = p.match(/^\[i\](.+)\[\/i\]$/);
    if (m) {
      return (
        <span key={i} className="serif-italic text-paper" style={{ fontStyle: "italic" }}>
          {m[1]}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
};

const Manifesto = () => (
  <section
    aria-label="manifesto"
    className="relative bg-ink text-paper overflow-hidden hairline-top hairline-bottom py-14 sm:py-20"
  >
    <div aria-hidden="true" className="code-grid-bg" />
    <div aria-hidden="true" className="code-grid-glow" />
    <div aria-hidden="true" className="code-scanline" />

    <div className="relative z-10 px-6 sm:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl code-shell p-6 sm:p-10 lg:p-12"
      >
        <p className="mono-sm code-dim mb-5">{"// manifesto.ts"}</p>
        <h2 className="display-lg text-paper text-balance leading-[0.95]">
          {renderMixed(manifestoLine)}
        </h2>

        <div className="mt-7 rounded-xl code-metric-card p-4 sm:p-5">
          <p className="mono-sm code-text break-words">
            <span className="code-keyword">const</span> journey = [
            <span className="code-dim">'2024: one repo'</span>,
            <span className="code-dim">'2026: shipped in public'</span>
            ];
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Manifesto;
