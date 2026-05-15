import { motion } from "framer-motion";
import { projects } from "../constants";
import { styles } from "../styles";
import ProjectPoster from "./ProjectPoster";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M12 .5C5.648.5.5 5.648.5 12A11.5 11.5 0 0 0 8.36 22.08c.577.106.788-.25.788-.558 0-.276-.01-1.008-.016-1.978-3.183.692-3.854-1.534-3.854-1.534-.52-1.318-1.27-1.67-1.27-1.67-1.04-.712.08-.698.08-.698 1.15.08 1.754 1.18 1.754 1.18 1.02 1.748 2.676 1.244 3.328.952.104-.74.398-1.245.724-1.53-2.542-.29-5.214-1.271-5.214-5.658 0-1.25.446-2.27 1.178-3.07-.118-.29-.51-1.456.112-3.035 0 0 .96-.307 3.145 1.173A10.94 10.94 0 0 1 12 6.03c.977.004 1.962.132 2.882.387 2.184-1.48 3.143-1.173 3.143-1.173.624 1.579.232 2.745.114 3.035.734.8 1.176 1.82 1.176 3.07 0 4.398-2.676 5.364-5.227 5.648.41.353.776 1.05.776 2.116 0 1.528-.014 2.762-.014 3.138 0 .31.208.67.794.556A11.502 11.502 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
  </svg>
);

// Vertical case-study gallery with editorial image cards and concise metadata.
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
          Six projects across AI, productivity, civic-tech, and real-time collaboration — each with source and live context.
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
            {(() => {
              const liveUrl = p.liveLink || p.link || "#";
              const repoUrl = p.repoLink || "#";
              const isLiveExternal = liveUrl.startsWith("http");
              const isRepoExternal = repoUrl.startsWith("http");
              return (
                <>
                  <a
                    href={liveUrl}
                    target={isLiveExternal ? "_blank" : undefined}
                    rel={isLiveExternal ? "noreferrer noopener" : undefined}
                    className="block"
                  >
                    <div className="relative overflow-hidden bg-ink aspect-[16/10] border border-wire transition-colors group-hover:border-paper">
                      <ProjectPoster
                        index={p.index}
                        name={p.name}
                        sub={p.sub}
                        year={p.year}
                        stack={p.stack}
                        image={p.image}
                        imageAlt={p.imageAlt}
                      />
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
                  </a>

                  <div className="mt-6 flex flex-col gap-3">
                    <p className="body-lg text-bone max-w-prose">{p.description}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-paper/80">
                      {p.stack.map((s) => (
                        <span key={s} className="mono-sm text-ash">· {s}</span>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <a
                        href={liveUrl}
                        target={isLiveExternal ? "_blank" : undefined}
                        rel={isLiveExternal ? "noreferrer noopener" : undefined}
                        className="kicker text-paper inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        VIEW LIVE <span aria-hidden="true">↗</span>
                      </a>
                      <a
                        href={repoUrl}
                        target={isRepoExternal ? "_blank" : undefined}
                        rel={isRepoExternal ? "noreferrer noopener" : undefined}
                        aria-label={`Open ${p.name} GitHub repository`}
                        title="View repository"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-wire text-paper/90 hover:text-paper hover:border-paper transition-colors"
                      >
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Works;
