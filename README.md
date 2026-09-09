# AI Analyzer, NFL

Independent, publicly auditable NFL model-comparison study. ChatGPT, Claude, Codex, and Gemini get the same weekly protocol, a $20 hypothetical bankroll per game, and their reasoning gets graded against the ESPN box score every week.

Season 2 (2026-27) is live tracking. Season 1 (2025) is preserved as the historical baseline.

Live site: currently `https://crespo1301.github.io/AI_Analyzer_Crespo/`. A custom domain is planned, see `Docs/2026/custom-domain-checklist.md`.

## Structure

- `index.html` landing page
- `nfl-2026.html` Season 2 hub (current week, week selector, matchup grid)
- `nfl-2025.html` Season 1 archive
- `nfl.html` NFL section index with season selector
- `schedule.html` all-season schedule
- `models.html` model roster and performance
- `bet-database.html` full results database with filters
- `methodology.html` prompt lanes, grading rubric, iteration system, honest limitations
- `about.html` independent status, no affiliations, contact, privacy note
- `404.html` useful 404
- `Sports_Pages/*.html` generated per-matchup analysis pages
- `assets/styles.css` and `assets/site.js` shared design system
- `assets/nfl-data.js` canonical bet, game, and corrections data
- `assets/nfl-predictions-2026.js` Season 2 pre-game archive
- `Data/2026/` team metadata, schedule scaffolds, intake files
- `Docs/2026/` grading rubric, iteration system, redesign direction, custom domain checklist
- `Prompts/2026/templates/` three current prompt lanes
- `scripts/` verify + generator scripts

## Local development

```
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Verify

```
node scripts/verify-nfl-data.js
node scripts/verify-2026-schedule.js
node scripts/summarize-experiment.js
node scripts/build-game-pages.js
git diff --check
```

Never hand-edit generated files under `Sports_Pages/`. Edit `assets/nfl-data.js` and regenerate.

## Visual QA

```
/home/cresp3/scripts/visual-check.sh --url http://localhost:4173/ --out .visual-checks/home-mobile.png
/home/cresp3/scripts/visual-check.sh --desktop --url http://localhost:4173/ --out .visual-checks/home-desktop.png
```

See `VISUAL-QA.md`.

## Weekly workflow

1. Confirm the week's slate. Update `Data/2026/schedule/week-NN.json` and `Data/2026/intake/week-NN.json` with cited sources.
2. Run the three prompt lanes (`Prompts/2026/templates/`) against each model. Save raw responses under `Docs/Responses/2026/week-NN/game-NN-slug/`.
3. Extract structured picks into `NFL_PREDICTIONS_2026` before kickoff.
4. Post-final: promote graded games into `NFL_GAMES` + `NFL_BETS`, run `node scripts/verify-nfl-data.js`, then `node scripts/build-game-pages.js`.
5. Commit, push, update the weekly signals bento on the season hub.

## Contribute

Open issues or PRs at [github.com/Crespo1301/AI_Analyzer_Crespo](https://github.com/Crespo1301/AI_Analyzer_Crespo).

## License

Source code: MIT. Data snapshots and editorial text kept for study use.
