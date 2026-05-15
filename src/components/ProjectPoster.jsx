const ProjectPoster = ({ index, name, sub, year, stack = [], image, imageAlt }) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <img
        src={image}
        alt={imageAlt || `${name} preview`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,12,14,0.12) 0%, rgba(10,12,14,0.72) 68%, rgba(10,12,14,0.9) 100%)",
        }}
      />
      <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-l from-black/20 to-transparent" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7 text-paper">
        <div className="flex items-start justify-between gap-3">
          <span className="kicker tracking-widest text-paper/95">N° {index}</span>
          <span className="kicker tracking-widest text-paper/80">{year}</span>
        </div>

        <div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
            {stack.slice(0, 4).map((s) => (
              <span key={s} className="mono-sm text-paper/80">· {s}</span>
            ))}
          </div>
          <h3
            className="display-md text-paper leading-[0.92] text-balance"
            style={{ fontSize: "clamp(1.7rem, 3.6vw, 3.2rem)" }}
          >
            {name}
          </h3>
          {sub && <p className="kicker text-paper/80 mt-2">{sub}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectPoster;
