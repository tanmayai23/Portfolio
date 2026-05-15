import { motion } from "framer-motion";
import { stats, localeBlock } from "../constants";
import { styles } from "../styles";

const Stats = () => {
  return (
    <section
      id="stats"
      aria-labelledby="stats-title"
      className={`anchor-pad relative overflow-hidden bg-ink text-paper ${styles.paddingY} hairline-top`}
    >
      <div aria-hidden="true" className="code-grid-bg" />
      <div aria-hidden="true" className="code-scanline" />

      <div className={`relative z-10 mx-auto max-w-[1400px] ${styles.paddingX}`}>
        <p className={`${styles.eyebrow} mb-4`}>{localeBlock.eyebrow}</p>

        <motion.h2
          id="stats-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="display-xl text-paper/90 leading-[0.8]"
        >
          {localeBlock.word}
        </motion.h2>

        <div className="mt-10 rounded-2xl code-shell p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-xl code-metric-card p-4 sm:p-5 flex flex-col items-center text-center"
              >
                <span className="mono-sm code-dim">[METRIC_{String(i + 1).padStart(2, "0")}]</span>
                <span
                  className="mt-2 font-display tracking-tightest code-text leading-none"
                  style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)" }}
                >
                  {s.value}
                </span>
                <span className="mt-2 mono-sm code-dim">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl code-shell-soft px-5 py-6 sm:px-8">
          <div className="flex flex-col items-start gap-2">
            <span className="kicker text-paper">{localeBlock.meta.studio}</span>
            <span className="mono-sm code-dim">{localeBlock.meta.available}</span>
            <span className="mono-sm code-dim">{localeBlock.meta.capacity}</span>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-paper px-6 py-2 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors"
            >
              BOOK A CALL
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
