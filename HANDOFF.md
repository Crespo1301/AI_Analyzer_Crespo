# Handoff, v3.0.0

Date: 2026-09-09 (Season 2 kickoff night).

## What just shipped

A full design, usability, and launch-readiness overhaul. See `CHANGELOG.md` for the itemized list. The site is a static HTML / CSS / JS bundle. GitHub Pages target.

## Where the source of truth still lives

Unchanged. `assets/nfl-data.js` remains the canonical public data source for games, bets, and corrections. `assets/nfl-predictions-2026.js` is the pre-game archive for Season 2, currently empty until fresh prompts land. Team metadata continues to come from `Data/2026/teams.json`.

## What to run before touching the site

```
node scripts/verify-nfl-data.js
node scripts/verify-2026-schedule.js
node scripts/summarize-experiment.js
node scripts/build-game-pages.js
git diff --check
python3 -m http.server 4173
```

Then check `/`, `/nfl-2026.html`, `/nfl-2025.html`, `/bet-database.html`, `/schedule.html`, `/models.html`, `/methodology.html`, `/about.html`, `/404.html`, and one `/Sports_Pages/*.html` route.

Screenshot verification: `/home/cresp3/scripts/visual-check.sh`, mobile + desktop, per project VISUAL-QA policy.

## Immediate open work

- Run the new prompts against ChatGPT, Claude, Codex, and Gemini for tonight's Week 1 slate. Save raw responses in `Docs/Responses/2026/week-01/game-NN-slug/`.
- Extract structured picks into `NFL_PREDICTIONS_2026` before kickoff. The strip and the season hub will pick them up automatically.
- Post-final: promote the graded games into `NFL_GAMES` and the graded bets into `NFL_BETS` in `assets/nfl-data.js`, then regenerate Sports_Pages.

## Custom domain

`Docs/2026/custom-domain-checklist.md` has the full switch. Origin default is `https://crespo1301.github.io/AI_Analyzer_Crespo`. Search for that string across the repo to swap it when you have the domain.

## Session note

Baseline before/after screenshots were skipped intentionally to save time on the launch push. If you want them for a Portfolio blog post later, git history has the pre-redesign commit at `321cde6`.
