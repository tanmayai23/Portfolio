import { motion } from "framer-motion";
import { aboutCopy, profile, ribbonText } from "../constants";
import { styles } from "../styles";
import CurvedText from "./CurvedText";

// Section just below the hero. Curved-text ribbon, then editorial bio.
// Mirrors the "A JOURNEY THROUGH GENIUS" ribbon + bio paragraph in the reference.
const About = () => (
  <section
    id="about"
    aria-labelledby="about-title"
    className={`anchor-pad relative bg-ink text-paper ${styles.paddingY} hairline-top`}
  >
    {/* Ribbon — wrapped in overflow-hidden + max-w-full so the SVG never causes
        horizontal scroll on phones narrower than its 420px diameter. */}
    <div className="relative flex justify-center mb-16 sm:mb-20 text-paper max-w-full overflow-hidden">
      <CurvedText text={ribbonText} size={420} />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="display-md text-paper">{profile.monogram}</span>
        <span className="kicker text-ash mt-2">EST. 2026</span>
      </div>
    </div>

    {/* Editorial bio */}
    <div className={`mx-auto max-w-[1100px] ${styles.paddingX} text-center`}>
      <p className={`${styles.eyebrow} mb-6`}>{aboutCopy.eyebrow}</p>

      <motion.h2
        id="about-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="display-lg text-paper text-balance"
      >
        Building <span className="serif-italic">AI</span> that listens,
        <br className="hidden sm:block" />learns, and <span className="serif-italic">ships</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="body-lg max-w-[640px] mx-auto mt-8 text-bone"
      >
        {aboutCopy.paragraph}
      </motion.p>

      <a
        href="#works"
        className="inline-flex items-center gap-2 mt-10 border border-paper px-7 py-3 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors"
      >
        {aboutCopy.cta}
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
);

export default About;
