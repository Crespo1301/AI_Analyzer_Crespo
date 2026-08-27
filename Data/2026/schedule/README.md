# 2026 NFL Schedule Intake

One JSON file per regular-season week (`week-01.json` through `week-18.json`).
Each file starts as an empty scaffold and gets filled from a cited source
before the week's first kickoff.

## Source rules

- Primary source: https://www.nfl.com/schedules/2026/reg/ or the ESPN weekly
  scoreboard, e.g. https://www.espn.com/nfl/schedule/_/week/1/year/2026/seasontype/2
- Every game entry must record its `source` field with the URL used.
- Kickoff times: use ET, 24-hour format.
- If a game is flexed or its kickoff moves, update the file and add a note in
  `notes` with the change date.

## File schema

```json
{
  "season": 2026,
  "week": 1,
  "window": { "start": "2026-09-09", "end": "2026-09-14" },
  "last_verified": "",
  "source": "",
  "games": [
    {
      "id": "",
      "date": "",
      "kickoff_et": "",
      "away": "",
      "home": "",
      "venue": "",
      "neutral_site": null,
      "network": "",
      "espn_game_id": null,
      "espn_boxscore": null,
      "notes": ""
    }
  ]
}
```

Field notes:

- `id`: short kebab slug used later by `assets/nfl-data.js` (e.g. `bills-cowboys`).
- `away` / `home`: full team names as they appear in `Data/2026/teams.json`.
- `venue`: only fill if it differs from the home team's default stadium (see
  `NFL_TEAMS` in `assets/nfl-data.js`). Otherwise leave blank.
- `neutral_site`: string with the neutral-site venue and city if applicable,
  otherwise `null`. International games always get this.
- `espn_game_id` / `espn_boxscore`: fill after game IDs are published; the
  boxscore URL is `https://www.espn.com/nfl/boxscore/_/gameId/<id>`.
- `notes`: flex changes, weather forecast concerns, revenge angles, etc.

## Validation

Run:

```bash
node scripts/verify-2026-schedule.js
```

It checks JSON validity, required fields, team names against `teams.json`,
duplicate slugs, and simple date-window consistency. It does not verify game
IDs are real (that's ESPN's job at boxscore-fetch time).

## Promotion into `nfl-data.js`

Only after games complete and box scores are final:

1. Copy each played game into `NFL_GAMES` in `assets/nfl-data.js` with its
   final `awayScore` / `homeScore` and direct `espn` boxscore URL.
2. Append bet rows to `NFL_BETS` from the week's response folder.
3. Add any grading overrides to `NFL_CORRECTIONS`.
4. Run `node scripts/verify-nfl-data.js` then `node scripts/build-game-pages.js`.

Do not promote unplayed games into `nfl-data.js`. That file is a results
archive, not a preview.
