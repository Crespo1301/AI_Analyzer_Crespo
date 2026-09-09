# Prompt corrections, Patriots at Seahawks, Week 1

Log every factual issue a model reported about the prompt itself. Do not edit the original `prompt-*.md` files.

## Gemini 2.5 Flash, 2026-09-09

**Reported:** all eight `raw.githubusercontent.com` URLs in `prompt-github.md` returned 404 or a misc access error at fetch time.

**Verified:** those URLs all return HTTP 200. Confirmed at 2026-09-09 ~15:35 ET, minutes after Gemini's response, with `curl -sI` on each URL:

- `Docs/2026/grading-rubric.md` &rarr; 200
- `assets/nfl-data.js` &rarr; 200
- `Data/2026/rosters/seattle-seahawks.json` &rarr; 200
- `Data/2026/schedule/week-01.json` &rarr; 200
- `Data/2026/intake/week-01.json` &rarr; 404 (expected, file has not been created yet, prompt anticipates this)

**Interpretation:** Gemini did not actually fetch the repo URLs. The `sources_fetched_from_repo` block is a fabricated citation. Gemini's `self_reflection` claim that it "reviewed repository instructions" is not supported by an actual fetch. The reasoning underneath came from open-web research (VSiN, OddsShopper, Seahawks.com injury report) only.

**Grading note for the reasoning rubric:** treat Gemini's Week 1 game 1 self-reflection as ungrounded. Score it accordingly under "Source honesty" in `Docs/2026/grading-rubric.md`. The pick itself (NE +3.5 for $12) is graded on outcome and reasoning normally.

**Follow-up:** when running Gemini again for future games, watch for the same fabricated-fetch pattern. If it repeats, log another entry here and consider whether the `github-strength-gemini` prompt template should require Gemini to quote a specific line from each fetched file so we can verify the fetch actually happened. That change would need an entry in `Docs/2026/iteration-system.md` before it ships.
