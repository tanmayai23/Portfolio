// Infinite horizontal marquee. The track is a flex of two identical groups
// with width: max-content; CSS @keyframes "marquee" translates -50% to loop seamlessly.
const Marquee = ({
  items,
  speed = "normal",         // 'fast' | 'normal' | 'slow'
  reverse = false,
  separator = "✦",
  className = "",
  itemClassName = "",
}) => {
  const animClass = {
    fast: "animate-marquee-fast",
    normal: "animate-marquee",
    slow: "animate-marquee-reverse",
  }[speed] || "animate-marquee";

  const dir = reverse ? "animate-marquee-reverse" : animClass;

  const Group = () => (
    <div className="flex shrink-0 items-center gap-10 sm:gap-16 px-5 sm:px-8" aria-hidden="false">
      {items.map((it, i) => (
        <span key={i} className={`flex items-center gap-10 sm:gap-16 ${itemClassName}`}>
          <span>{it}</span>
          <span className="text-ash">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className}`} aria-label="marquee">
      <div className={`marquee-track ${dir}`}>
        <Group />
        <Group />
      </div>
    </div>
  );
};

export default Marquee;
