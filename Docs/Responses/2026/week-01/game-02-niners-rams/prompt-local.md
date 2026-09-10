# Local-access forced-selection prompt, 49ers vs Rams, Week 1 Game 2

Lane: `forced-selection` v2.1
For: ChatGPT (via Codex CLI) or Claude. Both have local filesystem access.
Locked at: 2026-09-10, before 8:15 PM ET kickoff.

Save the raw response next to this file as `chatgpt-picks.md` or `claude-picks.md`. If the model flagged a factual issue in the prompt, save `prompt-corrections.md` alongside.

## The prompt (copy from here down)

```text
You are an independent entry in the CSolutions AI Analyzer NFL study.
Run the forced-selection lane, prompt version 2.1, for San Francisco 49ers
at Los Angeles Rams, Week 1, game_id niners-rams, kickoff 2026-09-10
8:15 PM ET, venue Melbourne Cricket Ground (Melbourne, Australia; NFL
Melbourne Game, international neutral site), on Netflix.

This is a hypothetical research allocation, not authorization to place
wagers. Check the current time and official kickoff first. If kickoff has
passed, stop and report that pre-game eligibility has expired. Do not use
hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game parlay
with at least TWO distinct, compatible legs. Allocate the full $20 across
these tickets; reserve must be zero. More singles are optional. Every
ticket needs a positive stake. A parlay is one ticket with one stake.
Do not answer with an all-reserve allocation or omit the parlay.

STUDY STEP (mandatory before picking)
You have direct read access to this repository. Use it. Read these files
first and cite what you found:

1. Docs/2026/grading-rubric.md, Docs/2026/iteration-system.md.
2. assets/nfl-data.js: NFL_BETS and NFL_CORRECTIONS. In particular, filter
   NFL_BETS to prompt=7 and prompt=11 and prompt=3 in week 11, and to
   prompt=3 in week 9. Those are the four highest-P/L prompts in the 2025
   sample. Note the SHAPE of what they picked, do not copy the specific
   players or lines:
     - W11 P7 (Commanders vs Dolphins): UNDER 47.5 + Achane rush attempts
       OVER + WAS RB carries OVER + Longest FG UNDER 47.5 + 1Q UNDER 7.5,
       finished 8-0 +$80.
     - W11 P11 (Cowboys vs Raiders): QB pass yds OVER + Team Total OVER
       Cowboys + kicker Made FG OVER + Longest FG OVER/UNDER + Prescott
       Pass TDs OVER, finished 8-1 +$69.
     - W11 P3 (Lions vs Eagles): Total UNDER 47.5 + Eagles -1.5 short hook,
       finished 3-1 +$19.
     - W9 P3 (Vikings vs Lions): OVER 47.5 total worked in a favorable
       game-script.
3. NFL_CORRECTIONS: all 11 entries. The pattern of Season 1 losses is
   single-player OVER props on QB pass yds, WR yds, edge sacks (Nix O205.5,
   Bonitto sack, Herbert O252.5, McConkey rec, Stroud O1.5 pass TDs,
   Sutton O58.5 rec, plus the Cook rush yds overs). Do not repeat that
   shape unless a specific defensible scheme or workload-share justifies
   it.
4. assets/nfl-predictions-2026.js and Docs/Responses/2026/week-01/
   game-01-patriots-seahawks/. Review your own game 1 response if it
   exists; do not copy other entrants' answers.
5. Data/2026/rosters/san-francisco-49ers.json and
   Data/2026/rosters/los-angeles-rams.json. The auto-populate uses a
   jersey-number heuristic that is sometimes wrong; verify starters
   against the team's own depth chart page.

RESEARCH AND SOURCE HONESTY
Research official current starters, injuries, usage, coaching, matchup,
travel and weather at local kickoff. This is a Melbourne neutral-site
game; body-clock and travel are load-bearing context. State sources
actually read, access failures and retrieval time. A URL alone is not
proof of access. Distinguish facts from inference. If some research is
unavailable, still make the requested selections using available
evidence, identifying what remains unknown rather than inventing it.
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

PICK-SHAPE GUARDRAILS (informed by Season 1)
Prefer, in this order, when the research supports them:
1. Team Total OVER on the favored offense against a below-average defense.
2. Game Total UNDER when both teams have RB1 injuries, weather, short
   week, international travel or a paceless offense.
3. Short-hook Spread through a key number (3, 7) on the sharper side.
4. Volume-anchored props: rush attempts OVER on a bell-cow, kicker Made
   FG OVER, 1Q total UNDER, longest completion UNDER on a check-down
   offense.
Avoid, unless a specific defensible stat-line profile supports it:
- Single-player OVER pass yds, OVER receiving yds, OVER anytime TD, OVER
  anytime sack without a coverage-scheme or workload-share justification.
- Parlays whose legs are independent conviction stacks.

PARLAY REQUIREMENTS
List each leg's market, selection and exact line. Explain dependence,
overlapping exposure with singles, and how the whole ticket can fail.
Prefer correlated legs: same-team spread + Team Total OVER, or game
UNDER + opponent Team Total UNDER, or favorite ML + game UNDER. Use the
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
2. Season 1 study notes: which of the top prompts you read, and which
   SHAPE pattern from them you are applying (or intentionally not applying)
   here.
3. Ticket table including the required single and parlay, totaling $20.
4. Evidence, failure scenarios, correlation and missing-data notes.
5. One valid JSON object exactly matching the schema in
   Prompts/2026/templates/forced-selection.md ("ANSWER FORMAT" step 5).
   Include the "season_one_study" block. Include the "sources" array and
   the "reasoning_summary" field.

Do not soften the pick to match the market. Do not report a conditional
ticket as a verified Bovada wager. Operator acceptance alone cannot turn
an unverified quote into a verified one.
```
