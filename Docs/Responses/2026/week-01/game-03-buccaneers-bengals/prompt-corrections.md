# Prompt corrections, Buccaneers at Bengals, Week 1 Game 3

## Gemini 2.5 Flash, 2026-09-13T11:20:34-04:00

**Fourth fabricated repo-fetch, same pattern.** Gemini reported HTTP 404 on all five raw.githubusercontent.com URLs in its `sources` array. `curl -sI` confirmed all URLs return HTTP 200 at the same minute the response was received. This is the fourth confirmed instance of Gemini's fabricated-fetch pattern in this session (Game 1 initial + Game 1 rerun + Game 2 + Game 3). Now systematic behavior.

**Second unverifiable bovada_verified label.** Gemini labeled Cincinnati -3.5 at -115 as `bovada_verified` with `odds_captured_at 2026-09-13T11:20:00-04:00` and sportsbook Bovada. However, ChatGPT reported at 15:14 ET the same day that Bovada opened successfully but showed no event-specific prices. Given the fetch-fabrication pattern, the `bovada_verified` label on Cincinnati -3.5 is unverified. Grading treats it as `reference_market` at best.

**Conventional-heuristic derivations.** The v3.0 prompt explicitly requires derivations to cite specific NFL_BETS rows or games. Gemini's `profitable_shapes` and `losing_shapes` entries cite "historical baseline evaluations" and "historical box-score audit corrections" without any row-level citation. This is exactly the conventional betting-industry heuristic the prompt banned. Rubric v2 caps Source Honesty at 1/5 for this response, which in turn caps the reasoning grade at 1/5 regardless of pick outcome.

**Loss-shape violation in T2.** Gemini's SGP leg 2 is Joe Burrow OVER 1.5 Passing TDs. Independent derivations by Claude and ChatGPT in the same game (both citing specific NFL_BETS rows) identified single-player OVER pass TDs / pass yds as the dominant Season 1 loss family (6 of 11 NFL_CORRECTIONS). Gemini either did not read those rows despite the prompt's requirement or ignored them.

**Bucs RB1 mislabeled.** Gemini's team profile note reads "Baker Mayfield confirmed QB1, Rachaad White RB1." ChatGPT and Claude both cited the Buccaneers.com depth chart showing Bucky Irving as RB1. Grading note.

## No prompt corrections from ChatGPT or Claude beyond the roster QB1 issue

- Bengals QB1 heuristic was wrong (Clifford listed, Burrow starter). Applied to the roster file in the same commit.
- Bucs TE1 flag from Claude (Kieft is run-blocking, Otton likely receiving TE) is a plausible flag but not confirmed against the official chart in-session. Left for verification before locking prop bets on TE receiving markets.
