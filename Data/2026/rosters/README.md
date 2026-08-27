# Player / Roster Tracking

Player-level info this project cares about is narrow. We are not building a
fantasy-football database. We only need enough player context to grade props
and reason about matchups.

## What to track

For each team, in `Data/2026/rosters/<team-slug>.json`:

- Starting QB and backup (props and full-game reads depend on this)
- Primary running back and change-of-pace back
- Top two receivers by target share
- Top tight end
- Any player currently on a prop card that models frequently pick

## Schema

```json
{
  "team": "Buffalo Bills",
  "season": 2026,
  "last_verified": "",
  "source": "",
  "offense": {
    "qb1": { "player": "", "note": "" },
    "qb2": { "player": "", "note": "" },
    "rb1": { "player": "", "note": "" },
    "rb2": { "player": "", "note": "" },
    "wr1": { "player": "", "note": "" },
    "wr2": { "player": "", "note": "" },
    "te1": { "player": "", "note": "" }
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

- Only create a roster file for teams whose games we are actually running
  prompts on that week. Do not scaffold all 32 preemptively.
- `changes_log` is what makes this useful over time. Every material change
  (trade, injury replacement, benching) gets a dated entry with a source.
- The rendered game pages do not read from here yet. This is intake used by
  prompts and by manual grading, not by public output.
