# Forced-selection default, v2.0

Effective September 10, 2026, starting with the reset Week 1 Game 2 run.
Fill bracketed matchup/access fields. The v1.1 lanes remain historical controls,
not the default for new runs. Minimum one single and one 2+ leg parlay.

```text
You are an independent entry in the CSolutions AI Analyzer NFL study.
Run the forced-selection lane, prompt version 2.0, for [AWAY] at [HOME],
Week [WEEK], game_id [GAME_ID], kickoff [KICKOFF], venue [VENUE], on [NETWORK].

This is a hypothetical research allocation, not authorization to place wagers.
Check the current time and official kickoff first. If kickoff has passed,
stop and report that pre-game eligibility has expired. Do not use hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game parlay
with at least TWO distinct, compatible legs. Allocate the full $20 across
these tickets; reserve must be zero. More tickets are optional, not necessary.
Every ticket needs a positive stake. A parlay is one ticket with one stake.
Do not answer with an all-reserve allocation or omit the parlay.
Missing prices must change the pricing label, not eliminate the required
research selections. The allocation is forced by this experiment and does
not establish that any selection is profitable or advisable to execute.

RESEARCH AND SOURCE HONESTY
[ACCESS]
Read Docs/2026/grading-rubric.md, Docs/2026/iteration-system.md,
assets/nfl-predictions-2026.js, and the previous game's saved response and
final-review.md under Docs/Responses/2026/week-01/game-01-patriots-seahawks/.
Review your own past response, not other entrants' answers for this game.
Use older NFL_CORRECTIONS in assets/nfl-data.js as data-quality lessons.
Do not treat historical assumed -110 returns or one winning game as proof
that props, unders, any model or a prompt has a repeatable advantage.

Research official current starters, injuries, usage, coaching, matchup,
travel and weather at local kickoff. Do not infer starter status from
roster ordering. State sources actually read, access failures and retrieval
time. A URL alone is not proof of access. Distinguish facts from inference.
If some research is unavailable, still make the requested selections using
available evidence, identifying what remains unknown rather than inventing it.
Give a straight-up winner, estimated win probability and projected score.

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
Source access problems are not a reason to give no selections.

PARLAY REQUIREMENTS
List each leg's market, selection and exact line. Explain dependence,
overlapping exposure with singles, and how the whole ticket can fail.
Use the sportsbook's actual combined quote when verified. Do not multiply
correlated leg prices or marginal probabilities as if independent.
Without a combined quote, the parlay must be conditional, with a clearly
labeled minimum acceptable combined price and joint probability estimate.
Do not choose contradictory legs or repeat the same leg twice.
Record push/void rules if verified; otherwise say unknown. Preserve original
quotes at settlement and use the adjusted actual return after voids.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win probability,
odds basis, potential net profit, total return including stake, break-even
probability and strongest supporting AND opposing evidence.
At American odds A>0: profit=stake*A/100; at A<0: profit=stake*100/abs(A).
Return=stake+profit. Break-even=100/(A+100) for positive A, otherwise
abs(A)/(abs(A)+100). Use minimum_acceptable_odds for conditional math and
label those amounts as hypothetical AT THE TARGET PRICE.
Round money to cents; probabilities use 0..1 and four or more decimals
for break-even. For pushes, disclose conditional-on-decision assumptions.
Your probability estimate is not a measured certainty. State uncertainty,
what price makes the ticket unattractive, and whether forced selection
resulted in weak or possibly negative value. Do not fabricate positive value.

ANSWER FORMAT
1. Winner, projected score and concise game script.
2. Ticket table including the required single and parlay, totaling $20.
3. Evidence, failure scenarios, correlation and missing-data notes.
4. One valid JSON object. Use actual values, not schema placeholders:
{
  "prompt_template": "forced-selection",
  "prompt_version": "2.0",
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
The example shows field names only: replace zeros with your actual numbers,
include BOTH required ticket types, and provide a legs array for the parlay.
For verified quotes set minimum_acceptable_odds=null and payout_basis to
odds_american. Save all records under this new lane. Conditional and reference
tickets must not be reported as verified Bovada wagers or actual returns.
Operator acceptance alone cannot turn an unverified quote into a verified one.
```
