# Abraham Tikuye — portfolio

Personal portfolio and CV hub. Next.js 16, React 19, TypeScript, Tailwind CSS 4. No database, no CMS, no analytics.

The project brief (`CLAUDE.md`) and the list of facts still to be confirmed (`CONTENT_VERIFICATION.md`)
are working notes kept locally and are not part of the public repository.

## Run it

Requires Node.js 22.18 or newer (the CV script runs TypeScript directly).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run cv` | Regenerates the three CV PDFs in `public/cv` |
| `npm run build` | Regenerates the PDFs, then builds for production |
| `npm start` | Serves the production build |
| `npm run lint` / `npm run typecheck` | Checks |
| `npm run check` | Lint, typecheck and build in one go |

The npm cache is kept in `.npm-cache` inside the project (see `.npmrc`) because the C: drive on the
development machine is nearly full. Delete that line on a machine where this is not a problem.

## Change the content

All text lives in `src/content`. Pages and PDFs read from it, so they cannot drift apart.

| File | Holds |
| --- | --- |
| `profile.ts` | Name, links, headline, intro per lens, story, About text, education |
| `experience.ts` | The two roles. Organisation context is separate from personal bullets |
| `projects.ts` | Case studies and additional projects, with built and planned features kept apart |
| `skills.ts` | Skills, each with an evidence label and where it was used |
| `cv.ts` | The three CV variants: order, emphasis and bullets |
| `types.ts` | The content model |

Rules that keep the site honest:

- Do not put anything in `implementedFeatures` that is not built.
- Leave a field empty rather than guessing. Empty fields render nothing.
- After editing, run `npm run cv` and read the PDFs.

To add a case study, add a project with `featured: true` in `projects.ts`. It gets a page at
`/projects/<id>` automatically.

## How the site works

- **Lens.** The visitor picks AI & Technology, Product & Engineering or Technical Marketing. The choice is
  stored on `<html data-lens>` and in `localStorage`; CSS shows the matching text, so nothing re-renders
  and the site works without JavaScript. See `src/components/lens.tsx` and the lens section of
  `src/app/globals.css`.
- **Theme.** Light and dark, following the system until the visitor chooses. Tokens are in `globals.css`.
- **Menu and search.** `Ctrl K` (or `/`) opens a command palette. On small screens it is the menu.
- **CV PDFs.** `scripts/build-cv.mts` writes plain, single-column, text-based PDFs that applicant tracking
  systems can read.

## Deploy

Any Node host works. On Vercel, import the repository and set one environment variable:

```
NEXT_PUBLIC_SITE_URL=https://your-domain
```

It is used for the sitemap, canonical links and social preview images.
