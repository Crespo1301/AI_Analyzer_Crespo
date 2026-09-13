# Local-access prompt, Week 1 Game 11: Miami Dolphins at Las Vegas Raiders

For: Claude, or ChatGPT via the Codex CLI. Both have local filesystem access.
Kickoff: 2026-09-13 4:25 PM ET at Allegiant Stadium, FOX.
Written: 2026-09-12, from Docs/2026/what-has-worked.md v1.

Save the raw response next to this file as `claude-picks.md` or
`chatgpt-picks.md`. If the model flagged a factual issue in the prompt,
save `prompt-corrections.md` alongside.

## The prompt (copy from here down)

```text
You are an independent entry in the CSolutions AI Analyzer NFL
study, Week 1, Miami Dolphins at Las Vegas Raiders. Kickoff 2026-09-13 4:25 PM ET at Allegiant Stadium,
broadcast on FOX. game_id: dolphins-raiders.

This is a hypothetical research allocation, not authorization to place
wagers. Check the current time and official kickoff first. If kickoff
has passed, stop and report that pre-game eligibility has expired. Do
not use hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game
parlay with at least TWO distinct, compatible legs. Allocate the full
$20 across these tickets; reserve must be zero. More singles are
optional. Every ticket needs a positive stake. A parlay is one ticket
with one stake.

TEAM PROFILE STEP (mandatory)
Read both team profiles and cite specific values from them:
- Data/2026/rosters/miami-dolphins.json
- Data/2026/rosters/las-vegas-raiders.json

Each profile contains: roster (offense skill positions, kicker, depth
tables), season_record (through the most recent graded game), and
health_snapshot (out / questionable / IR players as_of a specific
date). Name any health_snapshot player you are letting drive a pick.
If health_snapshot.as_of is older than 24 hours before kickoff, note
it as a staleness risk and verify against the team's own injury
report before locking your bet.

The auto-populated rosters use a jersey-number heuristic that has
been wrong before (Seahawks QB1, Rams QB1, 49ers QB1 all needed
manual correction in Week 1). Verify starters independently and flag
any error you find.

WHAT HAS WORKED IN THIS STUDY, AS OF 2026-09-12
(Source: Docs/2026/what-has-worked.md, anchored in NFL_BETS across
Seasons 1 and 2. This is not template boilerplate; it is the current
evidence.)

Season 1 (2025) had exactly three P/L-positive prompts. Every other
prompt was net negative.

- W11 P7 Commanders vs Dolphins, 8-0 +$80. MIA won 16-13 OT (total 29
  vs 47.5 line). Winning shape: game UNDER + volume-anchored
  rush-attempts OVER + Longest FG UNDER + 1Q UNDER. Pattern: bet the
  constraint. Once game-script is limited, every downstream market
  (kicker, first-quarter, RB volume) inherits the limit.
- W11 P11 Cowboys vs Raiders, 8-1 +$69. DAL won 33-16. Winning shape:
  Cowboys Team Total OVER + QB pass yds OVER + kicker Made FG OVER +
  Prescott Pass TDs OVER. Pattern: when the favored team is genuinely
  better AND wins, correlated same-side markets all cash.
- W11 P3 Lions vs Eagles, 3-1 +$19. PHI won 16-9 (total 25 vs 47.5
  line). Shape: UNDER + short-hook favorite spread.

Season 1 losing pattern: 6 of 11 corrections in NFL_CORRECTIONS were
single-player OVER props on QB pass yds, WR rec yds, or edge sacks
(Nix, Herbert, Sutton, Stroud, Bonitto, McConkey). Do not repeat that
shape.

Season 2 Week 1 to date:

- Game 1 SEA 13 NE 10. Claude 3-0 with UNDER 44.5 + NE +3.5 + Kupp
  UNDER 4.5 rec. Gemini won NE +3.5 at -118 for +$10.17. ChatGPT
  reserved fully. Winning shape: game UNDER + key-number hook +
  UNDER-side prop on a demoted target-share player.
- Game 2 SF 27 LAR 7. Claude and Gemini both cashed the game UNDER
  (Claude 45.5, Gemini 48.5; total finished 34). ChatGPT went all-in
  on LAR Team Total OVER + LAR ML SGP because he applied W11P11's
  "favored team scores" shape to a team that turned out not to be
  better. Full $20 lost. Also: Kyren Williams OVER 16.5 rush att lost
  (11 attempts, script abandoned). Season 1's Cook rush yds pattern
  repeated exactly.

Parlays and SGPs are 0-6 across the study. If you build one, the legs
must be causally correlated, not independent conviction stacks.

REPEAT THIS WEEK, in evidence order:
1. Game total UNDER when both offenses have real script constraints
   (RB1 out, weather, short week, thin WR room, aging QB, division-
   rival defense).
2. Short-hook spread through 3 or 7 on the sharper QB / better
   defense side.
3. UNDER-side props on demoted target-share players (Kupp UNDER 4.5
   is the model).
4. Team Total OVER on the favored offense ONLY when the favored team
   is genuinely better AND actually favored to win. Not "favored by
   number." Genuinely better.

AVOID THIS WEEK:
1. Single-player OVER pass yds, rec yds, anytime TD, anytime sack
   without a specific coverage-scheme or workload-share justification.
2. Volume-anchored props on the projected losing team.
3. Stacking the same team-side exposure across a single and an SGP.
4. Parlays whose legs are independent conviction stacks.
5. bovada_verified labels without a screenshot; grade as unverified.
6. Fabricated repo fetches. A "read this file" citation must include
   a snippet that is not repeated in this prompt body.

Grading rubric v2 (Docs/2026/grading-rubric.md):
- Outcome is primary. Season ROI drives the ranking.
- LOSS caps at 4/5 reasoning; default LOSS grade is 3/5.
- WIN with generic public reasoning caps at 2/5.
- Fabricated citation or fetch caps reasoning at 1/5 regardless of
  outcome.
- Sizing (0-3), Source Honesty (0-3), and Self-Reflection (0-2) are
  separate axes.

SELF-REFLECTION STEP
Read assets/nfl-data.js NFL_BETS filtered to your own model name.
Read Docs/Responses/2026/week-01/game-01-patriots-seahawks/ and
game-02-niners-rams/ for your own prior responses this season. Name a
specific pattern in your own past behavior and change this week's
allocation because of it.

BOVADA PRICING
Carlos uses Bovada. Try to obtain current event-specific Bovada prices
from https://www.bovada.lv/sports/football/nfl. Do not log in or
bypass access controls. Label EVERY ticket as one of:
- bovada_verified: exact line and current Bovada price actually
  retrieved. Include a timestamped screenshot reference or the exact
  captured_at time.
- reference_market: exact line and price verified at another named
  book; NOT a verified Bovada offer.
- conditional: exact proposed line and minimum acceptable American
  odds, derived from your probability/value assessment.

Do not label a proposed target as a real quote. Never assume -110.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win probability,
odds basis, potential net profit, total return including stake,
break-even probability and strongest supporting AND opposing evidence.
Standard arithmetic (A>0: profit=stake*A/100; A<0: profit=stake*100/
abs(A); return=stake+profit; break-even=100/(A+100) or
abs(A)/(abs(A)+100)).

ANSWER FORMAT
1. Winner, projected score, concise game script.
2. Team profile notes: cite specific season_record and health_snapshot
   values you are using. Flag any roster heuristic error.
3. Which SHAPE from "What has worked" above you are applying, which
   you are intentionally avoiding, and why.
4. Self-reflection: which of your own past picks you read and how
   they changed this week's allocation.
5. Ticket table including the required single and parlay, totaling $20.
6. Evidence, failure scenarios, correlation and missing-data notes.
7. One valid JSON object with fields: prompt_template ("forced-selection"),
   prompt_version ("2.2"), model_role, model_version, generated_at,
   week (1), game_id ("dolphins-raiders"), forced_allocation (true), bankroll
   (20), total_stake (20), reserve (0), team_profiles_read (with
   as_of, season_record, health_key_players), shape_applied,
   shape_avoided, self_reflection, bets (with the required fields for
   each ticket per v2.1 spec), sources (with fetch_succeeded), and
   reasoning_summary.

Do not soften the pick to match the market. Do not report a
conditional ticket as a verified Bovada wager. If you quote a snippet
from a repo file to prove a fetch, choose a snippet that is not in
this prompt body itself.
```
