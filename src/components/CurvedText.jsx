// SVG curved text rotating slowly around a circle.
const CurvedText = ({ text = "A JOURNEY THROUGH CODE & INTELLIGENCE", size = 520 }) => {
  const repeated = `${text}  ✦  ${text}  ✦  `;
  return (
    <div
      className="relative mx-auto animate-spin-slow"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 800 800" className="absolute inset-0 w-full h-full">
        <defs>
          <path
            id="ribbon-path"
            d="M 400,400 m -340,0 a 340,340 0 1,1 680,0 a 340,340 0 1,1 -680,0"
            fill="none"
          />
        </defs>
        <text
          fontFamily="'JetBrains Mono', monospace"
          fontSize="34"
          letterSpacing="6"
          fill="currentColor"
        >
          <textPath href="#ribbon-path" startOffset="0">{repeated}</textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedText;
