# Data Verification Notes

Date: 2026-08-25

Scope:

- Verified all 15 current 2025 game records against ESPN box-score data.
- Replaced remaining generic ESPN scoreboard URLs with direct box-score URLs.
- Corrected home/away metadata where the final score was right but team order was
  wrong.
- Rechecked all 11 correction-layer prop rows against ESPN box-score stat lines.

## Files Updated

- `assets/nfl-data.js`
- `scripts/verify-nfl-data.js`
- `scripts/summarize-experiment.js`
- `Docs/GRADING ANALYSIS/README_NFL_DATA.md`
- `Docs/2026/original-experiment-lessons.md`

## Corrections Confirmed

The verifier now checks:

- Lamar Jackson rushing yards vs Dolphins: 14 yards, under 35.5, loss.
- C.J. Stroud passing touchdowns vs Broncos: 0 TD, under 1.5, loss.
- Bo Nix passing yards vs Texans: 173 yards, under 205.5, loss.
- Nik Bonitto anytime sack vs Texans: 0 sacks, loss.
- Courtland Sutton receiving yards vs Texans: 30 yards, under 58.5, loss.
- James Cook rushing yards vs Buccaneers: 48 yards, under both tracked lines,
  loss.
- Drake Maye passing touchdowns vs Jets: 1 TD, under 1.5, loss.
- Josh Allen interceptions vs Buccaneers: 2 INT, over 0.5, win.
- Baker Mayfield longest completion vs Bills: 28 yards, under 38.5, loss.
- D'Andre Swift rushing yards vs Vikings: 90 yards, over 65.5, loss for the
  under.

## Metadata Fixes

These game records now match ESPN home/away ordering:

- Panthers 16 at Packers 13
- Broncos 18 at Texans 15
- Jets 14 at Patriots 27
- Buccaneers 32 at Bills 44

## Current Verification Command

```bash
node scripts/verify-nfl-data.js
```

Expected result:

```json
{
  "gamesChecked": 15,
  "betsChecked": 86,
  "correctionsChecked": 11,
  "correctedRows": 11,
  "issues": []
}
```

## Current Performance Snapshot

Run:

```bash
node scripts/summarize-experiment.js
```

Current corrected overall result:

- 84 graded bets
- 39 wins
- 44 losses
- 1 push
- -$70.90 P/L
- -9.2% ROI

This is the baseline to use before building the 2026 season tracker.
