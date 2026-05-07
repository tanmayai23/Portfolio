import { motion } from "framer-motion";
import { experiences } from "../constants";
import { styles } from "../styles";

// Editorial timeline. Year on the left in display caps, role + company + bullets on the right.
const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-title"
    className={`anchor-pad relative bg-ink text-paper ${styles.paddingY} hairline-top`}
  >
    <div className={`mx-auto max-w-[1400px] ${styles.paddingX}`}>
      <header className="mb-12">
        <p className={`${styles.eyebrow} mb-4`}>04 — TRACK RECORD</p>
        <h2 id="experience-title" className="display-lg">
          A short <span className="serif-italic">history</span> of work.
        </h2>
      </header>

      <ol className="flex flex-col">
        {experiences.map((e, i) => (
          <motion.li
            key={`${e.year}-${e.company}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="grid grid-cols-12 gap-6 sm:gap-10 py-10 hairline-top last:hairline-bottom"
          >
            <div className="col-span-12 md:col-span-3">
              <div className="display-md text-paper">{e.year}</div>
              <div className="mono-sm text-ash mt-2">{e.location}</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="display-md text-paper leading-[0.95]">{e.company}</h3>
              <div className="mono-sm tracking-widest text-paper/85 mt-2">{e.role}</div>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                {e.points.map((p, j) => (
                  <li key={j} className="body-lg text-bone leading-snug pl-4 relative">
                    <span aria-hidden="true" className="absolute left-0 top-2 h-px w-2 bg-paper/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
