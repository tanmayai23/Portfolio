import { motion } from "framer-motion";
import { projects } from "../constants";
import { styles } from "../styles";
import ProjectPoster from "./ProjectPoster";

// Vertical case-study scroll. Each project: full-width B&W image, project
// name in display type overlaid, short description, stack tags as small caps.
const Works = () => (
  <section
    id="works"
    aria-labelledby="works-title"
    className={`anchor-pad relative bg-ink text-paper ${styles.paddingY} hairline-top`}
  >
    <div className={`mx-auto max-w-[1400px] ${styles.paddingX}`}>
      <header className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className={`${styles.eyebrow} mb-4`}>05 — SELECTED WORKS</p>
          <h2 id="works-title" className="display-lg">
            What he <span className="serif-italic">made</span>.
          </h2>
        </div>
        <p className="body-lg max-w-md text-ash">
          Four projects that taught me more than four years of tutorials. Code, papers, deploys — all in one place.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-12">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className={`group lg:col-span-6 ${i % 2 === 1 ? "lg:translate-y-24" : ""}`}
          >
            <a
              href={p.link}
              target={p.link?.startsWith("http") ? "_blank" : undefined}
              rel={p.link?.startsWith("http") ? "noreferrer noopener" : undefined}
              className="block"
            >
              <div className="relative overflow-hidden bg-ink aspect-[4/5] border border-wire transition-colors group-hover:border-paper">
                <ProjectPoster index={p.index} name={p.name} sub={p.sub} year={p.year} stack={p.stack} />
                {/* subtle shimmer on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(245,243,238,0.07), transparent 60%)",
                  }}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <p className="body-lg text-bone max-w-prose">{p.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-paper/80">
                  {p.stack.map((s) => (
                    <span key={s} className="mono-sm text-ash">· {s}</span>
                  ))}
                </div>
                <span className="kicker mt-2 text-paper inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  VIEW PROJECT <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Works;
