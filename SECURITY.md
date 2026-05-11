# Security Policy

Thanks for taking the time to look at the security of this project.

## Reporting a Vulnerability

If you believe you have found a security issue in this portfolio (the
source code or the deployed site at https://tanmaykala.dev), please
report it privately — do **not** open a public GitHub issue.

**Preferred channels:**

- **Email:** tanmaykala171206@gmail.com
- **GitHub Security Advisories:**
  https://github.com/tanmayai23/Portfolio/security/advisories/new
  (Click "Report a vulnerability" — the report stays private until I
  publish it.)

Please include:

1. A short description of the issue and its impact.
2. Steps to reproduce, or a proof-of-concept.
3. The affected URL / commit / file, if known.
4. Your name or handle, if you want credit in the fix notes.

## What to expect

- **Acknowledgement:** within 72 hours.
- **Triage and initial assessment:** within 7 days.
- **Fix or mitigation:** as soon as reasonably possible — usually a few
  days for a static-site issue, longer if it involves a third-party
  service (EmailJS, Vercel, etc.).
- **Coordinated disclosure:** I'll keep you in the loop and credit you
  in the commit / advisory once a fix is shipped, unless you prefer to
  stay anonymous.

## Scope

In scope:

- This repository's source code.
- The production deployment at https://tanmaykala.dev and any
  `*.vercel.app` preview deployments of this repo.

Out of scope:

- Third-party services (Vercel, GitHub, EmailJS, Google Fonts, Name.com)
  — please report those to the respective vendors directly.
- Findings that require physical access to a device, a compromised
  account, or social engineering of the owner.
- Issues with outdated browsers that no longer receive security updates.
- Reports generated solely by automated scanners with no demonstrated
  impact (e.g. "missing HTTP header" with no exploit path).

## Hardening already in place

- Strict Content-Security-Policy (no `'unsafe-inline'` for scripts),
  HSTS preload, X-Frame-Options DENY, X-Content-Type-Options nosniff,
  Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy
  disabling camera/microphone/geolocation. See `vercel.json`.
- Static site — no server, no database, no authentication on the host.
- `.env` and all secrets are git-ignored; verified never committed in
  history.
- EmailJS uses a public client key only; allowed origins are restricted
  in the EmailJS dashboard so the key cannot be reused off-domain.
- Dependabot alerts enabled on the GitHub repo.

Thank you.
