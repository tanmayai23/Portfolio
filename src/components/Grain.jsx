// SVG turbulence grain overlay — fixed, non-interactive, 4% opacity.
const Grain = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.06] mix-blend-overlay"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="grain-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain-noise)" />
  </svg>
);

export default Grain;
