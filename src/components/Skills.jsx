import { motion } from "framer-motion";
import { skillGroups } from "../constants";
import { styles } from "../styles";

const Skills = () => (
  <section
    id="skills"
    aria-labelledby="skills-title"
    className={`anchor-pad relative bg-ink text-paper ${styles.paddingY} hairline-top`}
  >
    <div className={`mx-auto max-w-[1400px] ${styles.paddingX}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-12">
        <div>
          <p className={`${styles.eyebrow} mb-4`}>03 — STACK</p>
          <h2 id="skills-title" className="display-lg text-paper">
            What he builds <span className="serif-italic text-ash">with</span>.
          </h2>
        </div>
        <p className="body-lg max-w-md text-ash">
          Tools chosen for fit, not fashion — whatever quietly survives a year in production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
        {skillGroups.map((group, gi) => (
          <div key={group.heading}>
            <h3 className="kicker text-ash mb-6 hairline-bottom pb-3">{group.heading}</h3>
            <ul>
              {group.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (gi * 6 + i) * 0.03, duration: 0.45 }}
                  className="group flex items-baseline justify-between border-b border-wire py-3 transition-colors hover:bg-paper hover:text-ink"
                >
                  <span className="display-md text-paper group-hover:text-ink leading-none">{item.name}</span>
                  <span className="mono-sm text-ash group-hover:text-ink/70">{item.note}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
