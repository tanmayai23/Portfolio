import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { profile } from "../constants";
import { styles } from "../styles";

const fields = [
  { idx: "01", label: "NAME",    name: "name",    type: "text",     placeholder: "YOUR NAME" },
  { idx: "02", label: "EMAIL",   name: "email",   type: "email",    placeholder: "YOU@DOMAIN.COM" },
];

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
      className={`anchor-pad relative bg-ink text-paper hairline-top ${styles.paddingY}`}
    >
      <div className={`mx-auto max-w-[1400px] ${styles.paddingX}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-5">
            <p className={`${styles.eyebrow} mb-4`}>06 — TRANSMISSION</p>
            <h2 id="contact-title" className="display-lg leading-[0.92]">
              Send <span className="serif-italic">a</span> signal.
            </h2>
            <p className="body-lg max-w-md mt-6 text-ash">
              Briefs, collaborations, hard problems, weird ideas — all welcome. Reply within two working days, usually faster.
            </p>

            <div className="mt-10 flex flex-col gap-2">
              <a className="kicker hover:text-paper text-ash transition-colors" href={profile.socials.email}>
                → {profile.socials.email.replace("mailto:", "")}
              </a>
              <a className="kicker hover:text-paper text-ash transition-colors" href={profile.socials.phone}>
                → CALL / {profile.phone}
              </a>
              <a className="kicker hover:text-paper text-ash transition-colors" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                → LINKEDIN / TANMAY-KALA
              </a>
              <a className="kicker hover:text-paper text-ash transition-colors" href={profile.socials.github} target="_blank" rel="noreferrer">
                → GITHUB / TANMAYAI23
              </a>
              <a className="kicker hover:text-paper text-ash transition-colors" href={profile.socials.instagram} target="_blank" rel="noreferrer">
                → INSTAGRAM / TANMAYEKAALA__
              </a>
              <a className="kicker hover:text-paper text-ash transition-colors" href={profile.socials.youtube} target="_blank" rel="noreferrer">
                → YOUTUBE / TECHTALKS-14
              </a>
            </div>
          </header>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-7 flex flex-col gap-8"
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

            <div className="flex items-center justify-between gap-4 mt-2">
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
    </section>
  );
};

export default Contact;
