# Nasif Parvez — Software QA Portfolio

A responsive personal portfolio for Nasif Parvez, an aspiring Software Quality Assurance Engineer in Dhaka, Bangladesh. Built with **React + Vite**, with a transparent distinction between completed learning, practical projects, and skills still being learned.

**Live website:** https://portfolio-eight-navy-86.vercel.app/

## Current QA profile

- **Manual testing:** Completed learning the fundamentals; practice in test scenarios, cases, execution, smoke, regression, retesting, exploratory testing, and bug reporting.
- **API testing:** Completed learning API testing fundamentals, including REST, HTTP, responses, status codes, and Postman checks.
- **SQL:** Able to write SQL queries.
- **Automation testing:** Recently started learning; no completed automation project is claimed.
- **Education:** B.Sc. in CSE at Southeast University, Dhaka — **ongoing**, one semester remaining, **current CGPA 3.66 / 4.00**.

## Projects

### OrangeHRM Manual Testing — Practice / Demo

A self-directed practice project for applying structured manual QA, including scenario design, test cases, test execution, bug reporting and retesting concepts. It is **not** presented as client work or professional experience. Supporting documentation links can be enabled once the actual documents are publicly available.

### Technical work

- **Contact Book** — Python contact-management and CRUD practice.
- **University Management System (UMS)** — academic university-management project. The source repository and technical details have not yet been provided; no unverified technology or demo link is claimed.
- **Interactive 3D Smart Museum** — Computer Graphics (CSE 444) project in C++ and OpenGL/FreeGLUT. [GitHub source](https://github.com/nasifparvezst/Interactive-3d-smart-museum).
- **FindBack — Smart Lost & Found Platform** — **completed full-stack project** built with **Next.js, React, TypeScript, Supabase and PostgreSQL**. Designed for campus lost/found reports, listing searches, smart item matches, ownership-claim workflows, authentication, notifications and administrative management. The [public GitHub repository](https://github.com/nasifparvezst/FindBack) currently contains an **earlier frontend version**, not the completed full-stack source. Update the GitHub link/label when the latest code is pushed.

## Features

- Original-inspired layout, familiar NP / Nasif Parvez header, and original-style Inter typography
- Repeating hero name typewriter: 105 ms per character, 3-second complete-name pause; respects reduced-motion settings
- Rectangular 4:5 portrait with subtle animated orbit rings, a soft glow and floating QA badges
- Scroll-triggered reveal transitions for section headings, cards and contact content
- Gentle 3D hover depth on skill, project, workflow and education cards
- Mouse-controlled portrait tilt (retains the vertical 4:5 rectangular image) and a very soft mouse spotlight, disabled for touch and reduced-motion users
- Scroll-triggered count-up for the QA-project total and academic/technical project total
- Four academic/technical project cards. The museum links to its public source; FindBack links to an earlier GitHub version with an explicit version note; UMS source is intentionally left unlinked
- Animated learning timeline and current-step pulse
- Responsive layout for phones, tablets and desktops
- Light / dark mode with saved preference
- Sticky navigation and active section highlighting
- Project case study with accessible details dialog
- QA workflow and honest learning journey
- Education with current (not final) CGPA
- Email contact form with validation and fallback email link
- Copy-email action, Facebook and other social links, and click-to-call phone links
- Back-to-top and scroll progress
- SEO metadata, favicon, sitemap and social preview
- Modular React components and centralized portfolio content

## Project structure

```text
.
├── index.html
├── public/
│   ├── images/
│   ├── favicon.svg
│   ├── social-preview.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── AnimatedCount.jsx
│   │   ├── CursorSpotlight.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Icons.jsx
│   │   ├── ProjectModal.jsx
│   │   └── SectionHeading.jsx
│   ├── data/site.js
│   ├── styles/main.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── vercel.json
```

## Run locally

Requires **Node.js 20 or newer**.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal (usually `http://localhost:5173/`). To verify the production build:

```bash
npm run build
npm run preview
```

## Update existing GitHub + Vercel site

1. Back up the existing repository or create a new branch.
2. Copy the contents of this package **into the existing `Portfolio` repository root**, replacing previous root `index.html`, `style.css`, `script.js`, and `README.md` as necessary. The old root `style.css` and `script.js` should be deleted because the new React app uses `src/`.
3. Install dependencies and test locally with `npm install` then `npm run dev`.
4. Commit and push to the production branch. Example:

   ```bash
   git add -A
   git commit -m "Modernize QA portfolio with React and update profile"
   git push origin main
   ```

5. Vercel should automatically deploy from `main` if Git integration is configured. This repository contains `vercel.json` specifying `npm run build` and the `dist` output. Verify **Project → Settings → Build & Deployment** in Vercel if the first new framework build fails.

**Important:** Upload this project into the existing GitHub repository, not as a new repository, if you want to keep the existing Vercel auto-deployment connection and URL.

## Customize content

Nearly all text, URLs, QA project data and education are in **`src/data/site.js`**. Update that file when new work is completed. The visible layout is in `src/App.jsx` and component files. Styling is in `src/styles/main.css`.

### Resume button

A real resume PDF was not supplied. **No dummy PDF or broken Download CV button is included.** After adding an actual `Nasif_Parvez_CV.pdf` file to `public/`, set `resumeUrl: '/Nasif_Parvez_CV.pdf'` in `src/data/site.js`. The hero automatically switches from **Request my CV** to **Download CV** when a real resume URL is configured. Do not publish an invented CV.

### QA case-study documentation

When the real OrangeHRM test cases, results, screenshots or bug reports are published, add the actual URL to the `documentationUrl` field in `src/data/site.js`. The dialog will show a working "View documentation" button instead of a note.

### Profile image

The existing portrait is referenced through the original public repository's `ForCV.png` file. To make the site fully self-contained, copy the authentic original `ForCV.png` into `public/images/ForCV.png` and set `photoUrl: '/images/ForCV.png'` in `src/data/site.js`. Until then, an initials fallback displays if the remote image is unavailable.

### Contact form: activation required

The contact form sends requests to the **FormSubmit** service using the email address listed in `src/data/site.js`. A one-time verification/activation email from FormSubmit must be confirmed by the owner before form submissions will reliably reach the inbox. Test it after deploying. The form includes validation, a basic honeypot, timeout handling, and an alternate email-app link. You can later replace the FormSubmit integration with your own API if preferred. **Never publish API secrets in frontend code.**

### SEO/social preview

Both `public/social-preview.svg` and a 1200×630 PNG are provided. The `og:image` metadata uses the PNG for compatibility with social previews.

## Contact

- **Name:** Nasif Parvez
- **Email:** nasifparvez732@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/nniloy/
- **GitHub:** https://github.com/nasifparvezst
- **Facebook:** https://www.facebook.com/nniloy732/
- **Phone:** +8801882461759 (click-to-call enabled in the Hero, Contact section and Footer).

---

© 2026 Nasif Parvez. All rights reserved.
