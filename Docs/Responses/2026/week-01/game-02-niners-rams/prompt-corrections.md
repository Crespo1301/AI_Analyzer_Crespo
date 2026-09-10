# Prompt corrections, 49ers vs Rams (Melbourne), Week 1 Game 2

## ChatGPT (Codex CLI, GPT-6), 2026-09-10

Three real corrections flagged in ChatGPT's response. All applied in the same commit.

**Kickoff time.** Prompt attachment cited 8:15 PM ET. Official Rams schedule confirms 5:35 PM PT / **8:35 PM ET**. Updated in `assets/nfl-predictions-2026.js` and `Data/2026/schedule/week-01.json` (kept the schedule-file `kickoff_et` at `20:35` where it already was, and added a `kickoff_note` documenting the source).

**W9 P3 mischaracterization.** The v2.1 forced-selection template listed W9 P3 alongside W11 P7 / P11 / P3 as one of the "four highest P/L prompts in the 2025 sample." That was wrong. W9 P3's OVER 47.5 total won, but the prompt group finished **1-2, -$12 overall**. ChatGPT correctly kept it out of its shape-pattern application and named the correction explicitly in `shape_pattern_avoided`. Claude's Game 2 response also listed W9 P3 in its studied set but did not similarly warn — Claude gets a lower reasoning grade on that specific point.

The v2.1 template body has been left as-is (fixing it retroactively would rewrite prompt history the responses were graded against). A future template revision should demote W9 P3 to a "study, do not mimic" reference and only cite W11 P7 / P11 / P3 as the P/L-positive shape references. That change belongs in `Docs/2026/iteration-system.md` before a v2.2 ships.

**Validator pinned to v2.0.** `scripts/validate-forced-response.js` still asserted `prompt_version === '2.0'`, which would reject every v2.1 response. Fixed to accept both versions and to require the `season_one_study` block on v2.1. Also widened the parlay-type set to accept `same_game_parlay` in addition to `parlay` and `sgp` so Claude's `same_game_parlay` label parses.

## Claude (claude-opus-4-7), 2026-09-10

No factual prompt corrections beyond the Rams roster fixes already applied to `Data/2026/rosters/los-angeles-rams.json` in the previous commit. Claude did include W9 P3 in its `season_one_study` block without demoting it. Not fatal but worth a grading note under Source Honesty.

## Roster corrections (both models)

- **49ers roster**, flagged by ChatGPT: QB1 Purdy (not the heuristic pick Mac Jones), WR1 Jauan Jennings (Pearsall + Kirk on IR), TE1 George Kittle. Applied to `Data/2026/rosters/san-francisco-49ers.json` with a `changes_log` entry.
- **Rams roster**, flagged earlier by Claude: QB1 Stafford (not IR'd Caldwell), RB1 Kyren Williams, WR1 Puka Nacua, RB2 Blake Corum. Applied in the previous commit.
