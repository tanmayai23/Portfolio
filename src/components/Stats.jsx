import { motion } from "framer-motion";
import { stats, localeBlock } from "../constants";
import { styles } from "../styles";

const Stats = () => {
  return (
    <section
      id="stats"
      aria-labelledby="stats-title"
      className={`anchor-pad relative overflow-hidden bg-ink text-paper ${styles.paddingY}`}
    >
      <div className={`mx-auto max-w-[1400px] ${styles.paddingX}`}>
        <p className={`${styles.eyebrow} mb-4`}>{localeBlock.eyebrow}</p>

        {/* The huge ghost word, à la "ATLANTA" */}
        <motion.h2
          id="stats-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="display-xl text-paper/85 leading-[0.8]"
        >
          {localeBlock.word}
        </motion.h2>

        {/* Countdown-style stat row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 hairline-top hairline-bottom py-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <span
                className="font-display tracking-tightest text-paper leading-none"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)" }}
              >
                {s.value}
              </span>
              <span className="mt-2 mono-sm text-ash">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Locale meta — three small mono lines like the reference's "MERCEDES-BENZ STADIUM / THURSDAY 05 …" */}
        <div className="mt-10 flex flex-col items-center gap-1.5 text-center">
          <span className="kicker text-paper">{localeBlock.meta.studio}</span>
          <span className="mono-sm text-ash">{localeBlock.meta.available}</span>
          <span className="mono-sm text-ash">{localeBlock.meta.capacity}</span>
          <a
            href="#contact"
            className="mt-5 inline-block border border-paper px-6 py-2 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
