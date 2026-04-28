# Project Memory — kuwait-trivia

## Workflow preferences

- **Auto-commit per feature.** Whenever the user introduces a new feature, change, or fix in this app, create a git commit for it with a clear, descriptive message. Do not wait to be asked. Group related edits into a single coherent commit when they belong together; otherwise commit each feature on its own.
- **Commit message style.** Use conventional, present-tense, imperative subject lines (under ~70 chars), e.g.:
  - `feat: add trivia section with 5 multiple-choice questions`
  - `feat(trivia): move quiz above the fold, after hero`
  - `fix(geo): correct malformed Mubarak governorate label`
  - `chore: bump next to 15.1, react to stable 19`
  When useful, add a short body explaining the *why*, not the *what*.
- **Push policy.** Commit locally on every feature; only push when the user asks (or when the feature is clearly complete and the user has previously asked to push).
- **Never commit secrets** (`.env`, keys, tokens). Respect `.gitignore`.

## Repo

- Remote: `git@github.com:aiappdev6-art/kuwait-trivia.git` (SSH)
- Default branch: `main`
- Identity: `aiappdev6-art <aiappdev6@joincoded.com>`

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- No CSS framework — hand-written `app/globals.css` with editorial palette (gold/navy/sand/emerald)
- Animations: CSS keyframes + Intersection Observer (`RevealController.tsx`)
- Components live in `app/components/`
