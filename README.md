# PSYKATA — Martial Arts Training Platform
**Frontend Starter v1.0 — August 2026**

---

## What this is

A complete, production-ready frontend for the Psykata online martial arts training platform. Three pages, a shared design system, no frameworks, no build step.

**Repository:** github.com/PaulMack430/psykata

---

## Pages

| File | Page | Description |
|---|---|---|
| `index.html` | Landing Page | Hero, brand manifesto, level strips (Beginner / Intermediate / Advanced), CTA |
| `videos.html` | Training Library | Tabbed video library with featured + grid layout per level |
| `login.html` | Member Login | Split-panel form with email/password, Google auth button placeholder |

---

## How to open it

No install needed. Double-click `index.html` in any browser.

For local development (avoids file-protocol browser restrictions):

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Visit `http://localhost:8000`

---

## File structure

```
psykata/
├── index.html          Landing page
├── videos.html         Training library
├── login.html          Member login
├── README.md           This file
├── css/
│   └── styles.css      All shared styles — design tokens, layout, components
└── js/
    └── main.js         Tab switching, nav state, login form (stubbed)
```

---

## Design system

**Typefaces** (Google Fonts — requires internet connection to render correctly):
- **Cormorant Garamond** — display headlines (hero, section pull quotes)
- **Barlow Condensed** — labels, tabs, stat numbers, badges
- **Barlow** — body copy, navigation, buttons, forms

**Colour tokens** (all defined in `css/styles.css :root`):

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--bg` | #F0EBE3 | #110F09 | Page background |
| `--surface` | #E4DED6 | #1C1A12 | Cards, panels |
| `--text` | #1A1410 | #EDE8DE | Body text |
| `--muted` | #7A7068 | #7A7068 | Secondary text |
| `--crimson` | #B32318 | #C8281C | Primary accent |
| `--bronze` | #9B7A45 | #B8924A | Label hierarchy |

Both light and dark themes are fully supported. Theme switches automatically with the user's OS preference (`prefers-color-scheme`) and can be overridden with a `data-theme="dark"` attribute on the root element.

---

## What is already wired up

- [x] All three pages with working navigation between them
- [x] Video library tab switching (Beginner / Intermediate / Advanced)
- [x] `?level=beginner` URL parameter for deep-linking to a level
- [x] Login form with client-side validation
- [x] Fully responsive layout (mobile, tablet, desktop)
- [x] Light and dark theme
- [x] Git repository with initial commit

---

## What still needs to be built (Phase 2)

| Item | Priority | Notes |
|---|---|---|
| User authentication | Required | Replace stub in `js/main.js → initLogin()` with a real API call. Supabase Auth recommended. |
| Video hosting | Required | Replace placeholder thumbnails with real embeds. Vimeo Pro or Mux recommended. |
| Members area | Required | Post-login dashboard or gated video player. |
| Progress tracking | Required | Per-user lesson completion. Needs a database. |
| Payments / membership | Required | Stripe Checkout is the standard choice. |
| Content management | Later | For adding videos without editing HTML directly. |
| SEO / metadata | Later | Open Graph tags, sitemap, structured data. |

---

## Recommended stack for Phase 2

- **Auth + Database:** Supabase (free tier, Postgres, email + Google login)
- **Video:** Vimeo Pro (members-only embeds) or Mux (purpose-built video platform)
- **Payments:** Stripe
- **Hosting:** Vercel or Netlify (connects to this GitHub repo, auto-deploys on push, free tier)
- **Domain:** Connect `psykata.com` via Vercel/Netlify DNS — takes about 10 minutes

---

## Browser support

All modern browsers (Chrome, Firefox, Safari, Edge). No polyfills required.

---

## Pushing updates to GitHub

```bash
# Configure remote with your Personal Access Token
git remote set-url origin https://YOUR_TOKEN@github.com/PaulMack430/psykata.git

# Stage changes and push
git add .
git commit -m "description of changes"
git push
```

Generate a token at: **GitHub → Settings → Developer settings → Personal access tokens** (needs `repo` scope).
