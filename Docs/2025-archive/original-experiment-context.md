# Original Experiment Context

Last updated: 2026-08-25

The 2025 version of this project is useful as proof that the idea is worth
building, but it should not be treated as a strong betting-learning dataset.
It was a senior-year experiment, run manually, with only 15 games and enough
data-integrity issues that the results needed multiple correction passes.

For the next NFL season, the main lesson is not "which model was best." The
lesson is that the process needs to be much cleaner from the start.

## What We Can Safely Take From It

- Raw model responses must be saved before any bet extraction.
- Every pick needs an exact game, market, line, stake, and timestamp.
- Every final grade needs a direct source, ideally the ESPN box score.
- Vague picks become low-quality evidence, even if they happen to win.
- End-of-season cleanup is too late. Grading needs to happen every week.

## What We Should Not Overlearn

- Do not crown a model from the old sample size.
- Do not assume one prompt type is best from a few strong weeks.
- Do not assume one bet market is profitable from tiny sample counts.
- Do not use the old CSV summaries as the current truth when they disagree
  with `assets/nfl-data.js`.

## Current Verification Baseline

The public data currently verifies cleanly:

```bash
node scripts/verify-nfl-data.js
```

Current expected result:

```json
{
  "gamesChecked": 15,
  "betsChecked": 86,
  "correctionsChecked": 11,
  "correctedRows": 11,
  "issues": []
}
```

That gives us a clean enough archive, but the 2026 system should be judged on
its own weekly records.

## 2026 Direction

The next version should be built around:

- Weekly repeatability.
- Easy prompt changes.
- Easy strategy changes.
- Easy grading changes.
- Full raw-response preservation.
- Clear public-facing summaries that explain what changed and why.

The goal is to improve the system as the season goes on, not to defend the old
experiment.
