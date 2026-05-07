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
    className="relative bg-ink text-paper overflow-hidden hairline-top hairline-bottom py-12 sm:py-16"
  >
    <div className="px-6 sm:px-12 lg:px-20">
      <h2 className="display-lg text-paper text-balance leading-[0.95]">
        {renderMixed(manifestoLine)}
      </h2>
    </div>
  </section>
);

export default Manifesto;
