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

## Gemini 2.5 Flash, rerun 2026-09-09 (~4 hours after first attempt)

Rerun of the same prompt. Same pick (`$12 NE +3.5 (-118), confidence 8`, $8 reserve). Same claim that all eight `raw.githubusercontent.com` URLs returned "HTTP access restricted". `curl` shows they still return 200. Pattern confirmed as consistent Gemini behavior for this session and this tool. Flag lifted to iteration-log candidate: the `github-strength-gemini` template should probably require Gemini to paste a verifiable snippet from each fetched file so the fabricated-fetch shortcut fails a schema check. Do not ship that change without an entry in `Docs/2026/iteration-system.md`.

## Roster mispick, Seattle Seahawks QB1

Claude and Codex both independently flagged that `Data/2026/rosters/seattle-seahawks.json` lists Drew Lock as QB1 (jersey-number heuristic ordering). The actual Week 1 starter is Sam Darnold, confirmed by seahawks.com and the Patriots game preview page. Corrected in the same commit as this file. Every future roster auto-populate should be manually reviewed against team depth-chart pages before Wednesday of a game week.
