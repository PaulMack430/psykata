# Psykata — Martial Arts Training Platform

Frontend starter for the Psykata online training platform. Three pages, shared design system, no dependencies or build step required.

---

## What's here

```
psykata/
├── index.html        Landing page
├── videos.html       Training library (Beginner / Intermediate / Advanced)
├── login.html        Member login
├── css/
│   └── styles.css    Complete design system (tokens, layout, components)
└── js/
    └── main.js       Tab switching, nav state, login form stub
```

---

## How to run it

No server or install needed. Just open `index.html` in any browser.

If you want to run it through a local server (recommended for development):

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Design system

**Typefaces** (loaded from Google Fonts — requires internet connection):
- Cormorant Garamond — display headlines
- Barlow Condensed — labels, stats, tabs
- Barlow — body copy, UI

**Colour tokens** (defined in `css/styles.css` `:root`):
- `--bg`, `--surface`, `--surface-2` — ground and card backgrounds
- `--text`, `--text-2`, `--muted` — type hierarchy
- `--crimson` — primary accent (used sparingly)
- `--bronze` — secondary hierarchy marker

Light and dark themes are fully supported via `prefers-color-scheme` and `data-theme` attribute.

---

## What's wired up

| Feature | Status |
|---|---|
| Landing page | Done |
| Video library (3 levels, tabs) | Done — placeholder thumbnails |
| Member login (form + validation) | Done — UI only, no backend |
| Responsive layout (mobile/tablet/desktop) | Done |
| Dark mode | Done |
| `?level=beginner` URL param on videos page | Done |

---

## What still needs to be built

- **Backend / authentication** — the login form submits but has no server. Replace the `setTimeout` stub in `js/main.js` → `initLogin()` with a real API call (e.g. Supabase, Firebase Auth, or a custom endpoint).
- **Video hosting** — placeholder thumbnails need real video embeds (YouTube, Vimeo, or self-hosted via `<video>`).
- **Members area** — a post-login dashboard or gated video player page.
- **Database** — user accounts, progress tracking, lesson completion.
- **CMS or admin panel** — for adding/editing video content without touching HTML.

---

## Browser support

All modern browsers (Chrome, Firefox, Safari, Edge). No polyfills needed.

---

## Contact

Questions? Reach out to the Psykata team before making structural changes to the CSS token system, as all three pages share the same design tokens.
