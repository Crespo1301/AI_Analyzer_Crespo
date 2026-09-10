# Forced-selection lane, v2.1

Effective 2026-09-10, Week 1 Game 2 onward. Every model in every access lane answers under this template. Two changes from v2.0: an explicit Season 1 study step, and a player-prop shape guardrail based on what actually worked in the 2025 sample.

Fill bracketed matchup and access fields before sending. The v1.x lanes remain in the repo as historical controls only, not the default for new runs.

## What Season 1 actually taught us (the model must read this before picking)

The 2025 sample was 84 graded bets across Weeks 9 and 11, three models, thirteen prompts. Overall the sample lost -$70.90 at -9.2% ROI. Blindly copying Season 1 tactics is not the goal. Learning from the top three prompts is.

**Top-performing Season 1 prompts.**

| Prompt | Game | Record | P/L | Shape |
|---|---|---|---|---|
| Week 11 Prompt 7 | Commanders vs Dolphins | 8-0 | +$80 | UNDER 47.5 + Achane rush attempts OVER + WAS RB carries OVER + Longest FG UNDER 47.5 + 1Q UNDER 7.5 |
| Week 11 Prompt 11 | Cowboys vs Raiders | 8-1 | +$69 | Team Total OVER Cowboys + QB pass yds OVER + kicker Made FG OVER + Longest FG OVER/UNDER + Prescott Pass TDs OVER |
| Week 11 Prompt 3 | Lions vs Eagles | 3-1 | +$19 | Total UNDER 47.5 + Eagles spread -1.5 |

**Common shape of what worked.** Volume-anchored props (rush attempts, kicker FGs Made, longest FG, 1Q totals) beat ceiling props (single-player OVER pass yds, anytime sack, receiving yards on a specific WR). Team Total OVER on the favored offense worked. Short-hook spreads on the sharper side worked. UNDER on inflated Week-later totals worked when both teams had game-script constraints.

**Common shape of what failed.** Standalone player-prop OVERs on QB pass yds, WR receiving yds, and edge sacks lost the most money and generated 6 of 11 Season 1 corrections when the box score arrived (Nix O205.5, Bonitto sack, Herbert O252.5, McConkey rec, Stroud O1.5 pass TDs, Sutton O58.5 rec). Spreads went 6-10-1. Every parlay/SGP/1H the sample recorded lost 100%.

**Playable rules the new template enforces.**
- Player props are welcome, but bet the constraint (UNDER on a floor stat, or a volume-anchored OVER where the target line is below the player's usage floor), not the ceiling.
- Team Totals, Totals, and short-hook Spreads are the highest-signal families outside props.
- Parlays are required by this experiment, but must be built on legs with real correlation (game-script pair, same-team OVER + opponent Team Total UNDER) not stacked independent conviction.

## Prompt (copy from here down)

```text
You are an independent entry in the CSolutions AI Analyzer NFL study.
Run the forced-selection lane, prompt version 2.1, for [AWAY] at [HOME],
Week [WEEK], game_id [GAME_ID], kickoff [KICKOFF], venue [VENUE], on [NETWORK].

This is a hypothetical research allocation, not authorization to place wagers.
Check the current time and official kickoff first. If kickoff has passed,
stop and report that pre-game eligibility has expired. Do not use hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game parlay
with at least TWO distinct, compatible legs. Allocate the full $20 across
these tickets; reserve must be zero. More singles are optional. Every
ticket needs a positive stake. A parlay is one ticket with one stake.
Do not answer with an all-reserve allocation or omit the parlay.

STUDY STEP (mandatory before picking)
Read these repository files first and cite what you found:
1. Docs/2026/grading-rubric.md, Docs/2026/iteration-system.md.
2. assets/nfl-data.js: NFL_BETS and NFL_CORRECTIONS. In particular, filter
   NFL_BETS to prompt=7 and prompt=11 and prompt=3 in week 11, and to
   prompt=3 in week 9. Those are the four highest-P/L prompts in the 2025
   sample. Note the SHAPE of what they picked (volume-anchored props, team
   totals, short-hook spreads, UNDER on inflated totals). Do not mimic
   specific players or lines, mimic the ticket SHAPE.
3. NFL_CORRECTIONS: all 11 entries. The pattern of Season 1 losses is
   single-player OVER props on QB pass yds, WR yds, edge sacks. Do not
   repeat that shape.
4. assets/nfl-predictions-2026.js and Docs/Responses/2026/week-01/ for any
   already-locked game 1 responses. Do not copy them, but review your own
   game 1 response if it exists.
5. Data/2026/rosters/<away-slug>.json and <home-slug>.json. The auto-populate
   uses a jersey-number heuristic that is sometimes wrong. Verify starters
   independently against the team's own depth chart page.

RESEARCH AND SOURCE HONESTY
[ACCESS]
Research official current starters, injuries, usage, coaching, matchup,
travel and weather at local kickoff. State sources actually read, access
failures and retrieval time. A URL alone is not proof of access. Distinguish
facts from inference. If some research is unavailable, still make the
requested selections using available evidence, identifying what remains
unknown rather than inventing it. Give a straight-up winner, estimated win
probability and projected score.

BOVADA PRICING
Carlos uses Bovada: https://www.bovada.lv/sports/football/nfl.
Try to obtain current event-specific Bovada prices. Do not log in, request
credentials, bypass access controls or place bets.
Classify EVERY ticket as exactly one of:
- bovada_verified: exact line and current Bovada price actually retrieved
  or supplied in a timestamped screenshot.
- reference_market: exact line and price verified at another named book;
  NOT a verified Bovada offer.
- conditional: exact proposed line and minimum acceptable American odds,
  derived from your probability/value assessment; NOT an observed quote.

If Bovada is inaccessible, use verified reference-market prices where
available. If those are also unavailable, provide conditional selections.
Never label a proposed target price as a real quote. Never assume -110.
For a conditional ticket, odds_american, sportsbook, odds_source and
odds_captured_at must be null; populate minimum_acceptable_odds instead.
Explain how the minimum follows from estimated probability and uncertainty.

PICK-SHAPE GUARDRAILS (informed by Season 1)
Prefer, in this order, when the research supports them:
1. Team Total OVER on the favored offense against a below-average defense.
2. Game Total UNDER when both teams have RB1 injuries, weather, short
   week, or a paceless offense.
3. Short-hook Spread through a key number (3, 7) on the sharper side.
4. Volume-anchored props: rush attempts OVER on a bell-cow, kicker Made FG
   OVER, 1Q total UNDER, longest completion UNDER on a check-down offense.
Avoid, unless a specific defensible stat-line profile supports it:
- Single-player OVER pass yds, OVER receiving yds, OVER anytime TD, OVER
  anytime sack without a coverage-scheme or workload-share justification.
- Parlays whose legs are independent conviction stacks (do not multiply
  independent probabilities).

PARLAY REQUIREMENTS
List each leg's market, selection and exact line. Explain dependence,
overlapping exposure with singles, and how the whole ticket can fail.
Prefer correlated legs: same-team spread + Team Total OVER, or game UNDER
+ opponent Team Total UNDER, or favorite ML + game UNDER. Use the
sportsbook's actual combined quote when verified. Do not multiply
correlated leg prices as if independent. Without a combined quote, the
parlay must be conditional with a labeled minimum acceptable combined
price and joint probability estimate. Do not choose contradictory legs.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win probability,
odds basis, potential net profit, total return including stake, break-even
probability and strongest supporting AND opposing evidence.
At American odds A>0: profit=stake*A/100; at A<0: profit=stake*100/abs(A).
Return=stake+profit. Break-even=100/(A+100) for positive A, otherwise
abs(A)/(abs(A)+100). Use minimum_acceptable_odds for conditional math and
label those amounts as hypothetical AT THE TARGET PRICE.
Round money to cents; probabilities use 0..1 and four or more decimals
for break-even. Your probability estimate is not a measured certainty.
State uncertainty, what price makes the ticket unattractive, and whether
forced selection resulted in weak or possibly negative value.

ANSWER FORMAT
1. Winner, projected score and concise game script.
2. Season 1 study notes: which of the top prompts you read, and which SHAPE
   pattern from them you are applying (or intentionally not applying) here.
3. Ticket table including the required single and parlay, totaling $20.
4. Evidence, failure scenarios, correlation and missing-data notes.
5. One valid JSON object. Use actual values, not schema placeholders:
{
  "prompt_template": "forced-selection",
  "prompt_version": "2.1",
  "model_role": "your model family",
  "model_version": "actual known version, or unknown",
  "generated_at": "actual ISO timestamp with timezone",
  "lock_at": null,
  "week": [WEEK],
  "game_id": "[GAME_ID]",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "season_one_study": {
    "prompts_reviewed": ["W11P7", "W11P11", "W11P3", "W9P3"],
    "shape_pattern_applied": "one sentence naming which shape you leaned on",
    "shape_pattern_avoided": "one sentence naming which shape you avoided"
  },
  "bets": [
    {
      "type": "straight",
      "market": "actual market",
      "line": "exact selection and threshold",
      "stake": 0,
      "pricing_status": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": 0,
      "sportsbook": null,
      "odds_source": null,
      "odds_captured_at": null,
      "payout_basis": "minimum_acceptable_odds",
      "max_loss": 0,
      "potential_net_profit": 0,
      "potential_total_return": 0,
      "break_even_probability": 0,
      "estimated_win_probability": 0,
      "value_reasoning": "price, probability and uncertainty",
      "reason_wins": "specific supporting factor",
      "reason_loses": "specific failure scenario",
      "settlement_rules": "verified rules or unknown",
      "legs": []
    }
  ],
  "sources": [],
  "reasoning_summary": "concise evidence-based summary"
}
For verified quotes set minimum_acceptable_odds=null and payout_basis to
odds_american. Save all records under this new lane. Conditional and
reference tickets must not be reported as verified Bovada wagers or
actual returns. Operator acceptance alone cannot turn an unverified quote
into a verified one.
```
