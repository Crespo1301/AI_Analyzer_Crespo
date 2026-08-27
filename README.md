# AI Analyzer Crespo

Static public showcase tool for comparing AI model performance across analysis pages.

## Role In The Business

- This repo is one of the public showcase projects listed in `Portfolio/src/data/projects.ts`.
- It demonstrates product thinking, information design, and results presentation.
- It is not a weekly business-critical repo, but it still supports credibility and range.

## Shared Docs

- `CLAUDE.md`
- `AI-WORKFLOW.md`
- `SECURITY-CHECKLIST.md`

## Structure

- `index.html` is the main hub: lists all 15 game pages plus the Bet Database
- `bet-database.html` is a filterable table of all 86 verified bets plus prompt/model performance
- `assets/nfl-data.js` is the **single source of truth** for every bet, game, and score on the site
- `assets/styles.css` / `assets/site.js` are the shared design system and rendering helpers used by every page
- `scripts/build-game-pages.js` generates every `Sports_Pages/*.html` game page from `assets/nfl-data.js`
- `scripts/verify-nfl-data.js` verifies direct ESPN box-score links, scores, and the correction layer
- `scripts/summarize-experiment.js` prints corrected model, prompt, and bet-type performance
- `Sports_Pages/` contains the generated per-game pages (auto-generated: see below, don't hand-edit)
- `Docs/` holds summaries and grading-analysis material (source CSVs live in `Docs/GRADING ANALYSIS/`)
- `Docs/2026/` holds the next-season grading rubric, weekly template, season operations calendar, iteration system, original-experiment context, and `data-workflow.md` explaining how the 2026 data files feed each other
- `Prompts/2026/` holds reusable prompt templates and week-by-week prompt workspaces
- `Data/2026/teams.json` is the canonical 32-team + divisions reference
- `Data/2026/team-context.json` is the fillable per-team season context (HC/OC/DC/QB1)
- `Data/2026/schedule/week-XX.json` are per-week schedule scaffolds (18 files, empty until filled from NFL/ESPN)
- `Data/2026/intake/` holds the weekly intake template + filled weekly intake files (injuries, weather, lines, matchup notes)
- `Data/2026/rosters/` holds per-team key-player files for prop grading
- `Docs/Responses/2026/week-XX/<model>/` is where raw model responses land before bets are extracted
- `scripts/verify-2026-schedule.js` validates the 2026 schedule scaffolds
- `Docs/AI-Analyzer.gif` is the committed demo asset for showing the analyzer experience in portfolio/docs contexts
- `analysis_template.html` is a static starting point for a one-off page outside the data-driven system
- `Trash/REVIEW_NOTES.md` explains what was retired during the Aug 2026 redesign and why

## Adding a New Season/Week (data-driven pages)

1. Fill prompts from `Prompts/2026/templates/` for each game.
2. Save every raw model response under `Docs/Responses/2026/week-XX/`.
3. Add the new games to `NFL_GAMES` and the new bets to `NFL_BETS` in `assets/nfl-data.js`.
4. Run `node scripts/verify-nfl-data.js` to catch score, box-score URL, and correction-layer problems.
5. Run `node scripts/build-game-pages.js` to regenerate every game page in `Sports_Pages/`.
6. Run `node scripts/summarize-experiment.js` when comparing prompt/model performance.
7. Add the game(s) to `index.html`'s hub grid: it renders automatically from `nfl-data.js` via `nflRenderGameCards()`, no manual card HTML needed.
8. Do not hand-edit generated files in `Sports_Pages/`: edits will be lost the next time the script runs. Edit `assets/nfl-data.js` instead.

## Local Development

Serve the repo locally:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Data checks:

```bash
node scripts/verify-nfl-data.js
node scripts/summarize-experiment.js
node scripts/build-game-pages.js
```

## Working Rules

- Keep the home hub aligned with whatever analyses actually exist.
- If you add a new analysis page, also update the landing page and summary docs.
- Treat docs and screenshots as part of the product surface.

## Security Notes

Run `SECURITY-CHECKLIST.md` before publishing new analysis data. The main risks here are stale exports, accidental exposure of raw data files, and broken public links.
