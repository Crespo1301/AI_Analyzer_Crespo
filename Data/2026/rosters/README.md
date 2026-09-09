# Player / Roster Tracking

Player-level info this project cares about is narrow. We are not building a fantasy-football database. We only need enough player context to grade props and reason about matchups.

## What we track

Per team, at `Data/2026/rosters/<team-slug>.json`:

- Starting QB and backup (props and full-game reads depend on this)
- Primary running back and change-of-pace back
- Top two receivers by target share (approximated)
- Top tight end
- Kicker
- Short position-depth lists (top 4-6 per skill position, with jersey number and current injury status when ESPN reports it)
- `prop_watchlist` for players models frequently pick at
- `changes_log` for material updates over the season (trades, injury replacements, benchings)

## Initial population, 2026-09-09

All 32 team files were populated automatically before Week 1 kickoff by fetching ESPN's public roster endpoint:

```
https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/<abbr>/roster
```

Run `node scripts/fetch-team-rosters.js` from the repo root to regenerate all 32 files. The script writes each team's file with the fetch timestamp under `last_verified`, and stamps a `changes_log` entry noting the auto-populate.

### Auto-populate limitations

- Ordering inside each position uses jersey number as a weak starter heuristic. That is roughly right for teams with a stable QB1 who wears a low number, and clearly wrong for teams where the actual starter wears a higher number than the backup (e.g. a veteran coming back from injury). Manually correct any team where the auto-pick is wrong, log it in `changes_log`.
- Injury status only reflects what ESPN's roster JSON reports at fetch time. Verify against the team's official injury designations before locking props.
- `prop_watchlist` is left blank on auto-populate. Fill it manually for players models frequently pick at.

## Schema

```json
{
  "team": "Buffalo Bills",
  "season": 2026,
  "last_verified": "2026-09-09",
  "source": "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/buf/roster",
  "offense": {
    "qb1": { "player": "", "note": "" },
    "qb2": { "player": "", "note": "" },
    "rb1": { "player": "", "note": "" },
    "rb2": { "player": "", "note": "" },
    "wr1": { "player": "", "note": "" },
    "wr2": { "player": "", "note": "" },
    "te1": { "player": "", "note": "" }
  },
  "special_teams": {
    "k": { "player": "", "note": "" }
  },
  "depth": {
    "qbs": [{ "name": "", "jersey": 0, "note": "" }],
    "rbs": [{ "name": "", "jersey": 0, "note": "" }],
    "wrs": [{ "name": "", "jersey": 0, "note": "" }],
    "tes": [{ "name": "", "jersey": 0, "note": "" }]
  },
  "prop_watchlist": [
    { "player": "", "position": "", "why": "" }
  ],
  "changes_log": [
    { "date": "", "change": "", "source": "" }
  ]
}
```

## Rules

- `changes_log` is what makes these files useful over time. Every material change (trade, injury replacement, benching) gets a dated entry with a source.
- The rendered game pages do not read from here yet. This is intake used by prompts and by manual grading, not by public output.
- Prompts under `Prompts/2026/templates/` should reference the relevant team file when reasoning about props.
