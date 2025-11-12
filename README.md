# BuildIQ Website

This repository contains the BuildIQ marketing site and case-studies demo built with Next.js (App Router). It's a small design + engineering studio site combining 3D scenes (Spline), Framer Motion animations, and Tailwind CSS.

---

## Table of contents

- Project overview
- Repo structure
- Local setup (Windows PowerShell)
- Development commands
- Conventions and aliases
- Adding case studies / routes
- Troubleshooting (common issues and fixes)
- Branching and contribution notes

---

## Project overview

BuildIQ is a micro-site showcasing services (web architecture, UX systems, brand design, AI automation) and case studies. The site uses:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animation
- Spline for 3D scenes
- Small UI primitives in `components/ui`

This repository is organized to keep case study pages as individual routes under `/app/case-studies/*`.

---

## Repository structure (important files/folders)

```
buildiq/
 app/
   page.tsx              # Homepage (App Router)
   layout.tsx            # Global layout
   case-studies/
      conversiq/         # ConversIQ route (page.tsx should live here)
      voxai/             # VoxAI route
      flowbridge/        # FlowBridge route
 components/
   CaseStudiesSection.tsx
   ui/
      card.tsx
      splite.tsx
      spotlight.tsx
 lib/
   utils.ts              # `cn` helper (clsx + tailwind-merge)
 public/
   scene.splinecode
 tsconfig.json
 package.json
 README.md                # <-- you are here
```

Note: some files may be created or edited as you work (for example `app/case-studies/*/page.tsx`).

---

## Local setup (Windows PowerShell)

1. Ensure Node.js is installed (recommended LTS 18+ or 20+). Confirm with:

```powershell
node -v
npm -v
```

2. Install dependencies:

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

Open the local site at the URL shown (default http://localhost:3000). If 3000 is in use, Next will choose another port.

---

## Development commands

- Start dev server: `npm run dev`
- Run TypeScript check: `npx tsc --noEmit`
- Install packages: `npm install <package>`
- Run tests/lints (if added): follow package.json scripts

---

## Conventions and aliases

- Path alias `@` is defined in `tsconfig.json` as `@/*`  `./*`. Use `@/components/...` or `@/lib/utils` in imports.
- `lib/utils.ts` contains `cn(...)` used to merge Tailwind classes (uses `clsx` + `tailwind-merge`).
- UI primitives live in `components/ui` (card, spotlight, splite/spline wrapper, custom cursor).

---

## Adding case studies (routes)

Each case study lives in its own folder under `app/case-studies/<name>` and should export a `page.tsx` default component. Example:

```
app/case-studies/conversiq/page.tsx -> accessible at /case-studies/conversiq
```

When adding a case study:
- Create the folder `app/case-studies/<name>/`
- Add `page.tsx` and export a default React component
- Optionally add images to `public/` and reference them as `/your-image.png`

---

## Troubleshooting (common issues and fixes)

- Cannot find module '@/lib/utils' or similar:
  - Ensure `lib/utils.ts` exists and exports the named function (e.g. `export function cn(...)`).
  - Confirm `tsconfig.json` contains `baseUrl` and `paths` (alias). In this repo it's configured as:
    ```json
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
    ```
  - Restart TypeScript server in VS Code (Ctrl+Shift+P  "TypeScript: Restart TS Server").

- Turbopack / webpack config error when running `next dev`:
  - If you see a message about "Turbopack with a webpack config", check `next.config.ts` for experimental/webpack settings. You can switch to the stable webpack dev server by setting `experimental` or adjusting your config, or run `next dev --turbo=false`.

- Click on "View Project" does nothing:
  - Make sure the `link` property exists on the case study object and points to a valid route (internal `/case-studies/conversiq` or external `https://...`).
  - Inspect with browser devtools to see if an overlay or `pointer-events: none` element is blocking clicks. Try increasing the link's z-index as a temporary test.

- If your dev server fails, delete `.next` and restart:

```powershell
rm -r -Force .next
npm run dev
```

---

## Branching & contribution notes

- Current work on branch: `UPDATE-1` (pushed to `origin/UPDATE-1`).
- Recommended workflow:
-  1. Create a feature branch off `UPDATE-1` or `main`.
-  2. Make focused changes and add tests (if applicable).
-  3. Push and open a PR back to `main`.

Create branch example:

```powershell
git checkout -b feature/your-feature
# make changes
git add .
git commit -m "feature: description"
git push -u origin feature/your-feature
```

---

## Notes & next steps

- The repo includes placeholder Spline scenes. If you replace them, place the `.splinecode` in `public/` and update the `SplineScene` component props.
- If you'd like, I can:
  - Add a `README` section with deployment instructions (Vercel, Netlify).
  - Create page stubs for each case study folder (page.tsx placeholders).
  - Add a `CONTRIBUTING.md` and PR template.

---

If anything in this README should be expanded or corrected, tell me what you'd like and I'll update it and push a follow-up commit to `UPDATE-1`.
