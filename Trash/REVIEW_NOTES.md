# Trash Review Notes — 2026-08-07

Nothing in this folder was deleted. Everything here is moved aside for you to
review manually and delete yourself if you agree. Nothing here is linked from
the live site anymore.

## Superseded/incorrect Sports_Pages (moved here during the Aug 2026 redesign)

- **`vikings_lions_interactive.html`**, **`packers_panthers_interactive.html`**,
  **`texans_broncos_interactive.html`** — replaced by the regenerated versions
  at `Sports_Pages/vikings-lions.html`, `packers-panthers.html`,
  `texans-broncos.html`. The old Texans-Broncos page had a real data error:
  it credited one anonymized "Model 3" with hitting *both* the Broncos
  UNDER 19.5 team-total bet and the Stroud UNDER 231.5 passing-yards bet.
  Per the verified CSV, those are two different models' bets (Gemini made
  the team-total bet, ChatGPT made the Stroud bet) — ChatGPT actually went
  2-for-2 on its own. The new page shows the corrected, real attribution.

- **`bills_buccaneers_interactive.html`** — replaced by
  `Sports_Pages/bills-buccaneers.html`. The old file's title said "Bills vs
  Buccaneers" but its podium scores, model labels ("Mentioned UNDER",
  "Duplicate Response"), and result banner were a leftover copy-paste of the
  Packers-Panthers page content — none of it reflected the real Bills-
  Buccaneers game (Bills won 44-32) or the real bets in the verified CSV.

- **`vikings_lions_week9.html`** — an earlier, superseded draft of the same
  Vikings-Lions game already covered by `vikings-lions.html`. Not a distinct
  game; safe to delete once you've confirmed you don't want to keep it for
  historical/draft reference.

- **`model_comparison_modern.html`** (pre-existing in Trash/, not moved by
  this pass) — the original Ravens vs Dolphins **pre-game-only** analysis
  page (predictions with no result, from before the game was played). The
  new `Sports_Pages/ravens-dolphins.html` now has the actual final score
  (Ravens 28, Dolphins 6, verified vs. ESPN) and the real graded bets, so
  this pre-game version is now fully superseded. Kept here for reference in
  case you want the original "blind" predictions for a before/after
  writeup.

## Duplicate CSV files (not moved, still in Docs/GRADING ANALYSIS/)

`Carlos_NFL_Model_Summary_FINAL_VERIFIED (1).csv` and
`Carlos_NFL_Weekly_Summary_FINAL_VERIFIED (1).csv` are byte-for-byte
identical to the non-`(1)` versions (verified with `diff`, no output). They
look like duplicate-download artifacts. Safe to delete once you confirm —
left in place for now since they weren't part of the Trash/ cleanup scope.

## What replaced all of this

`assets/nfl-data.js` is now the single source of truth for every bet, game,
and score on the site — model rankings, prompt performance, and each game
page's podium are all computed from it at render time instead of being
hand-typed per page. That's a direct fix for the root cause described in
`Docs/GRADING ANALYSIS/Carlos_NFL_Data_Integrity_Report.md` (systematic
model-assignment errors from manually re-entering the same numbers in
multiple places). Next season, update `assets/nfl-data.js` and re-run
`node scripts/build-game-pages.js` — don't hand-edit the generated
`Sports_Pages/*.html` files directly.
