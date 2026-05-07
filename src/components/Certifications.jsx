import { motion } from "framer-motion";
import { certifications } from "../constants";
import { styles } from "../styles";

const Certifications = () => (
  <section
    id="certifications"
    aria-labelledby="cert-title"
    className={`anchor-pad relative bg-ink text-paper ${styles.paddingY} hairline-top`}
  >
    <div className={`mx-auto max-w-[1400px] ${styles.paddingX}`}>
      <header className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className={`${styles.eyebrow} mb-4`}>05 — CREDENTIALS</p>
          <h2 id="cert-title" className="display-lg">
            Papers <span className="serif-italic">on</span> file.
          </h2>
        </div>
        <p className="body-lg max-w-md text-ash">
          Five issued certifications — heaviest is the Oracle Cloud GenAI Professional, valid through October 2027.
        </p>
      </header>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-wire border border-wire">
        {certifications.map((c, i) => (
          <motion.li
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="bg-ink p-6 sm:p-8 flex flex-col gap-3 transition-colors hover:bg-paper hover:text-ink group"
          >
            <span className="kicker text-ash group-hover:text-ink/70">
              N° {String(i + 1).padStart(2, "0")} · {c.issuer.toUpperCase()}
            </span>
            <h3 className="display-md text-paper group-hover:text-ink leading-[0.95]" style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)" }}>
              {c.title}
            </h3>
            <span className="mono-sm text-ash group-hover:text-ink/70 mt-auto">
              {c.period.toUpperCase()}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Certifications;
