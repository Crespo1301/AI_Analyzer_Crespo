# 2026 Data Workflow

How the 2026 data files fit together, week by week.

## The files

| File | Purpose | When it changes |
|---|---|---|
| `assets/nfl-data.js` | Public results archive: played games, graded bets, corrections. Read by the site. | Only after a game is played and graded. |
| `Data/2026/teams.json` | All 32 teams, divisions, conferences. Reference for schedule validation and prompt copy. | Rarely (division realignment, relocation, rebrand). |
| `Data/2026/team-context.json` | HC / OC / DC / QB1 per team, plus notable questions. Feeds prompt context. | Pre-season, then on any material change. |
| `Data/2026/schedule/week-XX.json` | Upcoming or in-progress week's slate. Not shown on the site until games play. | Weekly, updated on flex changes. |
| `Data/2026/rosters/<team>.json` | Per-team key players for prop grading. Only for teams whose games we run. | On any material roster change. |
| `Data/2026/intake/week-XX-intake.json` | Injuries, weather, lines, matchup notes for one week. Feeds prompt fill and later grading. | Daily during the week. |
| `Docs/2026/week-XX.md` | Human-readable weekly write-up. | Weekly. |
| `Docs/Responses/2026/week-XX/game-YY-<slug>/` | One folder per game. Holds `prompt.md`, `claude-picks.md`, `gpt-picks.md`, `gemini-picks.md`, `result.md`. | Prompt file at slate-lock. Model files as responses land. `result.md` after final whistle. |
| `Prompts/2026/templates/` | Unfilled prompt starting points. Filled copies live in the per-game folder above, not in a parallel `Prompts/2026/week-XX/` tree (retired 2026-09-08). | On prompt-strategy change only. |

## Weekly flow (target Tuesday-to-Tuesday)

1. **Tuesday setup**
   - Fill `Data/2026/schedule/week-XX.json` from the NFL / ESPN weekly page.
   - Run `node scripts/verify-2026-schedule.js`.
   - Copy `Data/2026/intake/weekly-intake-template.json` to
     `Data/2026/intake/week-XX-intake.json` and stub the games from schedule.
   - Copy `Docs/2026/week-template.md` to `Docs/2026/week-XX.md`.
   - Create `Prompts/2026/week-XX/` and `Docs/Responses/2026/week-XX/{chatgpt,claude,gemini}/`.

2. **Wednesday research + prompt run**
   - Fill injuries and matchup notes in the intake JSON.
   - Fill prompt files from `Prompts/2026/templates/`, substituting intake
     fields.
   - Run each model. Save every raw response verbatim in the model folder.
   - Extract candidate bets. Flag anything vague or without a line as
     `UNGRADABLE` immediately, not later.

3. **Friday to Sunday**
   - Update `weather` and `lines` in intake as they firm up.
   - Lock bets per `Docs/2026/season-operations-calendar.md`.

4. **Tuesday debrief**
   - Promote played games from `Data/2026/schedule/week-XX.json` into
     `NFL_GAMES` in `assets/nfl-data.js` with final `awayScore` /
     `homeScore` and a direct `espn` box-score URL.
   - Append bet rows to `NFL_BETS`.
   - Add any grading overrides to `NFL_CORRECTIONS`.
   - Run `node scripts/verify-nfl-data.js` and
     `node scripts/build-game-pages.js`.
   - Write the weekly `Docs/2026/week-XX.md` recap.
   - Commit and push.

## What must never happen

- Never promote an unplayed game into `assets/nfl-data.js`. That file is a
  results archive.
- Never grade a bet from memory or from a headline. Grade from the ESPN box
  score.
- Never overwrite a raw model response. Save a new file if the model is
  re-run.
- Never delete a bad week from the record. The misses are part of the
  project.

## Adding a new data source later

If a new intake source becomes useful (Vegas Insider line movement charts,
Next Gen Stats, a specific weather API), add:

1. A field to `weekly-intake-template.json` with a `source` sibling field.
2. A one-paragraph note in this doc explaining what the field is and when to
   fill it.
3. A validator rule in `scripts/verify-2026-schedule.js` (or a new script) if
   the field is required.

Do not add a source just because it exists. It has to actually change a bet.
