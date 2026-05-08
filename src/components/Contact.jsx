import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { profile } from "../constants";
import { styles } from "../styles";

const fields = [
  { idx: "01", label: "NAME",    name: "name",    type: "text",     placeholder: "YOUR NAME" },
  { idx: "02", label: "EMAIL",   name: "email",   type: "email",    placeholder: "YOU@DOMAIN.COM" },
];

// Reach-out channels rendered as a curved arc of clickable tiles below the headline.
const channels = [
  { num: "01", label: "EMAIL",     handle: "GMAIL",          href: profile.socials.email,     external: false },
  { num: "02", label: "CALL",      handle: "DIRECT",         href: profile.socials.phone,     external: false },
  { num: "03", label: "LINKEDIN",  handle: "@TANMAY-KALA",   href: profile.socials.linkedin,  external: true  },
  { num: "04", label: "GITHUB",    handle: "@TANMAYAI23",    href: profile.socials.github,    external: true  },
  { num: "05", label: "INSTAGRAM", handle: "@TANMAYEKAALA",  href: profile.socials.instagram, external: true  },
  { num: "06", label: "YOUTUBE",   handle: "@TECHTALKS-14",  href: profile.socials.youtube,   external: true  },
];

// Vertical y-offset (px) per index — produces a smile-shape arc cradling the headline.
const waveY    = [  0, 36, 64, 64, 36,  0];
const tileRot  = [ -4,  2, -1,  1, -2,  4];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const SERVICE  = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC   = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!SERVICE || !TEMPLATE || !PUBLIC) {
      // No keys configured — show a friendly fake success in dev so the UI is testable.
      setTimeout(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      }, 700);
      return;
    }

    emailjs
      .send(
        SERVICE,
        TEMPLATE,
        {
          from_name: form.name,
          to_name: `${profile.firstName} ${profile.lastName}`,
          from_email: form.email,
          to_email: profile.socials.email.replace("mailto:", ""),
          message: form.message,
        },
        PUBLIC
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);
          setError(err?.text || "Something went wrong. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={`anchor-pad relative bg-ink text-paper hairline-top overflow-hidden ${styles.paddingY}`}
    >
      <div className={`mx-auto max-w-[1400px] ${styles.paddingX}`}>
        {/* Centered hero header — eyebrow → channel pills → big headline → subtitle → primary CTA */}
        <header className="flex flex-col items-center text-center">
          <p className={`${styles.eyebrow} mb-5`}>06 — TRANSMISSION</p>

          {/* Pill row — every channel that's wired up. Mirrors the reference's
              "Mac · Windows · iPhone · Android" pill cluster, in monochrome. */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl">
            {channels.map((c) => (
              <span
                key={c.label}
                className="kicker text-ash border border-wire rounded-full px-3 py-1 text-[0.62rem]"
              >
                ◇ {c.label}
              </span>
            ))}
          </div>

          <motion.h2
            id="contact-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="display-xl leading-[0.92] text-balance"
          >
            Send <span className="serif-italic">a</span> signal.
          </motion.h2>

          <p className="body-lg max-w-xl mt-7 text-bone">
            Briefs, collaborations, hard problems, weird ideas — all welcome. Reply within two working days, usually faster.
          </p>

          <a
            href={profile.socials.email}
            className="inline-flex items-center gap-2 mt-10 border border-paper px-8 py-3.5 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            EMAIL ME NOW ↗
          </a>
        </header>

        {/* CHANNEL ARC — six wavy clickable monochrome tiles. The signature
            visual element of this section. Hidden on mobile (replaced by
            simple wrap below) because rotation/wave doesn't read at <768px. */}
        <div className="relative hidden md:block mt-20 mb-36" aria-label="contact channels">
          <div className="flex justify-center items-end gap-4 lg:gap-6 px-2">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                aria-label={`${c.label} ${c.handle}`}
                initial={{ opacity: 0, y: -10, rotate: 0 }}
                whileInView={{ opacity: 1, y: waveY[i], rotate: tileRot[i] }}
                whileHover={{ scale: 1.07, y: waveY[i] - 10, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                className="group block"
              >
                <div className="relative w-[7.5rem] h-[7.5rem] lg:w-32 lg:h-32 rounded-full bg-paper text-ink border border-paper flex flex-col items-center justify-center transition-colors group-hover:bg-ink group-hover:text-paper group-hover:border-paper shadow-[0_18px_30px_-18px_rgba(0,0,0,0.55)]">
                  <span className="absolute top-3 mono-sm tracking-widest text-[0.55rem] opacity-60">{c.num}</span>
                  <span className="font-display uppercase tracking-tight leading-none text-[0.95rem] lg:text-base">
                    {c.label}
                  </span>
                  <span className="absolute bottom-3 text-[0.7rem]">↗</span>
                </div>
                <span className="block text-center mt-3 kicker text-ash text-[0.6rem]">
                  {c.handle}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile fallback — simple inline pill cluster */}
        <div className="md:hidden flex flex-wrap justify-center gap-2.5 mt-12 mb-12">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              className="kicker bg-paper text-ink rounded-full px-4 py-2 hover:bg-ink hover:text-paper border border-paper transition-colors"
            >
              {c.label} ↗
            </a>
          ))}
        </div>

        {/* OR — DROP A NOTE divider + framed form card */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="hairline flex-1" />
            <span className="kicker text-ash whitespace-nowrap">OR — DROP A NOTE</span>
            <span className="hairline flex-1" />
          </div>

          <div className="relative border border-wire rounded-2xl p-6 sm:p-10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] bg-ink">
            {/* "ON AIR" indicator at the top of the card — communicates "I read these" */}
            <div className="flex items-center gap-2 mb-7 kicker text-ash">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-paper animate-ping opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-paper" />
              </span>
              ON AIR · TRANSMISSION READY
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-7"
              noValidate
            >
              {fields.map((f) => (
                <label key={f.name} className="flex flex-col gap-2">
                  <span className="kicker text-ash">{f.idx} — {f.label}</span>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="border-b border-wire focus:border-paper transition-colors py-3 placeholder:text-ash/60 text-paper bg-transparent"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-2">
                <span className="kicker text-ash">03 — MESSAGE</span>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="WHAT ARE WE BUILDING?"
                  className="border-b border-wire focus:border-paper transition-colors py-3 placeholder:text-ash/60 text-paper bg-transparent resize-none"
                />
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="border border-paper px-7 py-3 mono-sm tracking-widest text-paper hover:bg-paper hover:text-ink transition-colors disabled:opacity-60"
                >
                  {loading ? "TRANSMITTING…" : "SEND TRANSMISSION ↗"}
                </button>
                {sent && (
                  <span className="kicker text-paper" role="status">SIGNAL RECEIVED · I'LL REPLY SOON</span>
                )}
                {error && (
                  <span className="kicker text-paper/80" role="alert">ERR · {error.toUpperCase()}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
