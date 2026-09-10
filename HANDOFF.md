# Handoff, v3.2.0

September 10: Patriots-Seahawks is settled in a separate `result` object in
`assets/nfl-predictions-2026.js`. Original predictions and 2025 data are preserved.
Claude 3/3, Gemini 1/1, ChatGPT no bet. Missing Claude prices prevent combined ROI.
See the matchup response folder's `final-review.md` and run
`node scripts/verify-settlement.js` alongside the existing checks.

Date: 2026-09-09 (Season 2 kickoff night).

## What just shipped

A full design, usability, and launch-readiness overhaul. See `CHANGELOG.md` for the itemized list. The site is a static HTML / CSS / JS bundle. GitHub Pages target.

## Where the source of truth still lives

`assets/nfl-data.js` remains the canonical public data source for graded games, bets, and corrections. `assets/nfl-predictions-2026.js` contains the first Season 2 matchup with three model families, four picks, and an explicit ChatGPT reserve decision. `Data/2026/schedule/` holds the schedule source; the page generator publishes `assets/nfl-schedule-2026.js`. Week 1 has 16 scheduled games. Later weeks remain incomplete scaffolds. Team metadata continues to come from `Data/2026/teams.json`.

## What to run before touching the site

```
node scripts/verify-nfl-data.js
node scripts/verify-2026-schedule.js
node scripts/summarize-experiment.js
node scripts/build-game-pages.js
node scripts/verify-site.js
git diff --check
python3 -m http.server 4173
```

Then check `/`, `/nfl-2026.html`, `/nfl-2025.html`, `/bet-database.html`, `/schedule.html`, `/models.html`, `/methodology.html`, `/about.html`, `/404.html`, and one `/Sports_Pages/*.html` route.

Screenshot verification: `/home/cresp3/scripts/visual-check.sh`, mobile + desktop, per project VISUAL-QA policy.

## Immediate open work

- Continue the remaining Week 1 slate with ChatGPT, Claude, and Gemini. Codex is a ChatGPT execution interface in the current comparison, not a fourth independent model family. Save raw responses in `Docs/Responses/2026/week-01/game-NN-slug/`.
- Extract structured picks into `NFL_PREDICTIONS_2026` before kickoff. The strip and the season hub will pick them up automatically.
- Post-final: add verified settlement under the prediction's `result` object,
  preserve its original model responses, then regenerate Sports_Pages. The ledger
  uses `nflGradedBets2026()`; do not mix 2026 records into the 2025 arrays.

## Custom domain

The umbrella brand must support predictions beyond sports and build on
CSolutions / Carlos Crespo. NFL is the first published category. No new domain
has been selected or purchased during this pass.

`Docs/2026/custom-domain-checklist.md` has the full switch. Origin default is `https://crespo1301.github.io/AI_Analyzer_Crespo`. Search for that string across the repo to swap it when you have the domain.

## Session note

The follow-up pass includes browser checks at mobile, tablet, and desktop sizes,
team-logo loading and fallback checks, and screenshots in local `.visual-checks/`.
Portfolio media now uses this build's desktop and mobile screenshots. Data and
browser checks pass. Domain selection remains Carlos's next decision; see
`Docs/2026/brand-domain-plan.md`. No new domain is configured.

For a draft weekly content brief, run:

```bash
node scripts/content-brief.js patriots-seahawks
```

The output is a draft from recorded predictions, not permission to publish.
Verify precise lock timing and original sources before making pre-game claims.
Grade final results against box scores and review reasoning separately. Never
claim that the models improve automatically as weeks pass.
