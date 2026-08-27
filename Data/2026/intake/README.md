# Weekly Intake

`weekly-intake-template.json` is the structured shape every weekly research
file follows. Copy it to `Data/2026/intake/week-XX-intake.json` at the start
of each week and fill it in as research happens.

## Why JSON instead of the existing markdown template

`Docs/2026/week-template.md` is the human-readable weekly write-up. This JSON
file is the machine-readable input that gets fed into prompt templates. Keeping
them separate means:

- The markdown stays useful for scanning and blogging.
- The JSON stays useful for scripts (prompt filling, validation, later
  analysis of which factors actually mattered).

## Fill order

1. Copy this template to `week-XX-intake.json`.
2. Fill `games[]` with the confirmed slate from
   `Data/2026/schedule/week-XX.json`.
3. Fill `injuries` by Wednesday (official practice reports start Wednesday).
4. Fill `weather` no earlier than Friday for Sunday games (forecast noise
   before then is not useful).
5. Fill `lines` at three snapshot points if possible: open, Wednesday, lock.
6. Fill `questions_the_prompt_must_address` last, based on what the research
   surfaced.

## Rules

- Every non-obvious fact needs a `source` URL.
- Leave a field blank rather than guess. Blank is a signal to check later.
- Injury statuses use official NFL codes: `Q` questionable, `D` doubtful,
  `O` out, `IR` injured reserve.
- Weather is null for domed stadiums (`indoor: true`).
- `moneyline_away` / `moneyline_home` are integer American odds.
