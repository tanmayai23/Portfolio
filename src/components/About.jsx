import { motion } from "framer-motion";
import { aboutCopy } from "../constants";
import { styles } from "../styles";

const TERMINAL_FEED = [
  "[INIT] about/section booting...",
  "[SCAN] profile.skills -> Python, LLMs, RAG",
  "[CERT] OCI Generative AI Professional verified",
  "[TEAM] Founder @ Naxatra AI",
  "[BUILD] shipped products: 5",
  "[RANK] Hack For Green Bharat: Top-25 / 400+",
  "[MODE] build-in-public enabled",
];

const CODE_LINES = [
  "const builder = {",
  "  headline: 'Building AI that listens, learns, and ships.',",
  "  role: 'Generative AI + NLP Engineer',",
  "  shippedProducts: 5,",
  "  hackathonRank: 'Top-25 / 400+',",
  "  founder: 'Naxatra AI',",
  "  degree: 'B.Tech CS (AI & ML), VIT Bhopal',",
  "  stack: ['Python', 'LLMs', 'RAG', 'Prompt Eng', 'HF', 'Gemini'],",
  "};",
  "deploy(builder);",
];

const ABOUT_SUMMARY_LINES = [
  "const profileSummary = {",
  `  bio: \`${aboutCopy.paragraph}\`,`,
  "  mission: 'ship useful AI systems end-to-end',",
  "};",
];

const About = () => (
  <section
    id="about"
    aria-labelledby="about-title"
    className={`anchor-pad relative overflow-hidden bg-ink text-paper ${styles.paddingY} hairline-top`}
  >
    <div aria-hidden="true" className="code-grid-bg" />
    <div aria-hidden="true" className="code-grid-glow" />
    <div aria-hidden="true" className="code-scanline" />

    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="absolute left-0 top-0 h-full w-[22%] border-r border-wire/70 bg-ink/45 p-5">
        <div className="space-y-2 mono-sm code-dim">
          {TERMINAL_FEED.map((line) => (
            <div key={`left-${line}`} className="terminal-float">{`> ${line}`}</div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-[22%] border-l border-wire/70 bg-ink/45 p-5">
        <div className="space-y-2 mono-sm code-dim">
          {TERMINAL_FEED.map((line) => (
            <div key={`right-${line}`} className="terminal-float">{`> ${line}`}</div>
          ))}
        </div>
      </div>
    </div>

    <div className={`relative z-10 mx-auto max-w-[1400px] ${styles.paddingX}`}>
      <p className={`${styles.eyebrow} mb-8`}>{aboutCopy.eyebrow}</p>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="xl:col-span-7"
        >
          <h2
            id="about-title"
            className="display-lg text-paper text-balance leading-[0.9]"
          >
            Building <span className="serif-italic">AI</span> that listens,
            <br className="hidden sm:block" />
            learns, and <span className="serif-italic">ships</span>.
          </h2>

          <div className="mt-7 rounded-2xl code-shell-soft p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="mono-sm code-dim ml-3">about.ts</span>
            </div>
            <div className="space-y-1">
              {ABOUT_SUMMARY_LINES.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.16 * i, ease: "easeOut" }}
                  className="mono-sm leading-7 code-text break-words code-typing-line"
                >
                  <span className="code-dim mr-3">{String(i + 1).padStart(2, "0")}</span>
                  <span className={line.startsWith("const ") ? "code-keyword" : ""}>{line}</span>
                </motion.p>
              ))}
            </div>
          </div>

          <a
            href="#works"
            className="inline-flex items-center gap-2 mt-8 border border-paper px-7 py-3 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            {aboutCopy.cta}
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="xl:col-span-5 rounded-2xl code-shell overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-wire px-5 py-3">
            <span className="kicker code-dim">BUILD LOG</span>
            <span className="mono-sm code-success">LIVE</span>
          </div>
          <div className="p-5 sm:p-6 space-y-2">
            {CODE_LINES.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i, duration: 0.35 }}
                className="mono-sm code-text leading-7"
              >
                <span className="code-dim mr-3">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
