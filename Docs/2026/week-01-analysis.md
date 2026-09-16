# Week 1 Analysis, 2026 Season

## Final leaderboard
| Rank | Model | Record | P/L | Staked | ROI | Note |
| :--: | ----- | ------ | --- | ------ | --- | ---- |
| 1 | ChatGPT (via Codex CLI) | 18-12 | +$114.18 | $300 | +38.1% | Sole model to file for all 16 games. |
| 2 | Gemini (web app) | 12-9 | +$56.18 | $212 | +26.5% | 4 games expired without a response. |
| 3 | Claude (via Claude Code) | 17-17 | +$13.23 | $311 | +4.3% | Rescued by MNF SGP hit. |

## What actually worked

- **Short-favorite spreads through the hook.** Steelers -5.5, Ravens -3, Bears -3, MIN -4, KC -3.5 all cashed. When the projected winning team is decisively better and the number is not a big-favorite trap, this shape hit repeatedly.
- **Home-favorite ML + game UNDER SGPs on defensive matchups.** Claude's MNF Chiefs ML + UNDER 44.5 (+$14.40) and Falcons-Steelers UNDER 42.5 SGP (+$11.20). ChatGPT's Bills ML + OVER 44.5 in the shootout also cashed for the right structural reason (correlated home offense on the winning side, matched with the total direction).
- **Team-Total OVER on the projected winning offense against a compromised opponent.** Claude's Bears TT OVER 24.5 (Bears scored 59, +$10.91) and DET TT OVER 27.5 (+$10.91) both delivered clean.
- **Volume-anchored rush attempts on the projected winning side.** Gemini's Ashton Jeanty OVER 15.5 rush att in Game 11 (Jeanty had 23) and Breece Hall OVER 15.5 in Game 5 (Hall had 22). Not a random single-player OVER, a *volume* leg on the winning team is different from a *ceiling* leg on either team.

## What didn't work

- **Big-favorite spreads.** LAC -9.5 in Game 14 got obliterated when the Chargers lost outright to Arizona. Jaguars -8.5 hit but only because JAX blew Cleveland out; the shape has been unreliable in the study data.
- **Contrarian home dogs at key numbers.** Claude's HOU +3 (BUF won by 5), MIN -4 for less (fine), and DAL -3 SNF (NYG upset by 8) each cost -$20 as ticket pairs. Just because the number is right doesn't mean the side is right.
- **Single-player OVER props that lived on ceiling, not volume.** Gemini's Burrow OVER 1.5 pass TDs in Game 3 (Burrow threw 1). Achane OVER 68.5 rush yds in Game 11 (36 rush yds because the Dolphins were losing 27-13 and abandoned the run). If the player has to *ceiling* to hit and the game script goes against them, they miss.
- **UNDER-heavy SGPs in Week 1 offenses running hot.** Every UNDER-legged SGP that had OVER hit lost the whole ticket. Vikings 39 vs Packers 22 (61 total) crushed three SGPs alone.

## What the data-side observation is for Week 2

**All three models leaned almost entirely on game-level wagers**: spread + moneyline + game total. Almost no player-level analysis surfaced in reasoning, despite the team profiles carrying roster, depth chart, prop_watchlist, and health_snapshot for exactly that purpose.

- ChatGPT: **0** player-prop legs across 32 tickets.
- Claude: **0** player-prop legs across 32 tickets. Only exception was a Cowboys TT OVER 24.5 which is team-level, not player-level.
- Gemini: **5** player-prop legs across the 21 tickets it filed (Burrow pass TDs, Gibbs anytime TD, Hall rush att, Achane rush yds, Williams pass TDs). Two of those were the *ceiling* shape (Burrow, Achane) and lost. Three were *volume* on projected winning side (Jeanty, Hall, and to a lesser extent Williams TDs which is technically ceiling but at a low-bar 2+) and hit.

The takeaway is not "more player props", it's that a defensible **volume-anchored** player leg (rush attempts, red-zone role, target volume) on the projected winning side has been the sharpest edge in the study so far, and the models are systematically under-using it in favor of a reflex `spread + ML/total SGP` pattern.

## What's staying in Week 2 prompts

1. `forced-selection v3.0` template, unchanged in bones, one straight, one parlay, $20 forced allocation.
2. Independent-derivation lane preserved. Models still derive shapes from graded rows, not from summary docs.
3. `bovada_verified` / `reference_market` / `conditional` pricing honesty labels unchanged.
4. Grading rubric v2 unchanged.

## What's being adjusted for Week 2

1. **Explicit bet-type coverage note.** Prompt now flags that Week 1 was game-level heavy and prompts each model to at least consider a player-level angle grounded in the team profile data before defaulting to a game-level SGP. This is not a mandate, it's a required reflection point.
2. **Volume vs ceiling distinction.** Prompt now names the shape distinction (rush attempts / red-zone role vs. TD ceiling / passing OVER) so models can reason about which they're actually taking.
3. **Season records are live.** Both teams' `season_record` blocks reflect Week 1 outcomes so post-Week-1 momentum reads are grounded, not "0-0 season opener" as they were last week.

## Standing grading concerns (Gemini)

Gemini's Week 1 grading includes **12 fabricated `raw.githubusercontent.com` 404 claims** (the repo is public and returns 200 on every path), plus multiple **player-team hallucinations** (Kyler Murray as Vikings QB1, Quinnen Williams as Cowboys DT1, a fabricated Fernando Mendoza Heisman/#1-pick backup QB claim). These are Source Honesty axis failures under rubric v2. They are recorded per-ticket and don't reduce outcome credit, but they cap reasoning grades at 1/5 on those rows.

There is no fix on our side. If Gemini wants a clean Source Honesty grade in Week 2, it can either fetch the raw URLs correctly (they work) or truthfully report that its tool cannot fetch them and derive from open-web sources only. The prompt already tells it that.
