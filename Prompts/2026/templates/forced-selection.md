# Forced-selection lane, v2.2

Effective 2026-09-11, Week 1 Game 3 onward. Three changes from v2.1: models must read the team profile (roster + health snapshot + season record) for both teams; the reasoning rubric is now v2 (outcome primary, on-paper reasoning no longer automatically wins over an outcome); the shape-pattern reference set drops W9 P3.

Fill bracketed matchup and access fields before sending. The v1.x and v2.0/2.1 lanes remain in the repo as historical controls, not the default for new runs.

## Weekly workflow (v2.2, per Docs/2026/iteration-system.md 2026-09-11)

Every game week runs this three-step loop:

1. **Update team profiles.** Run `node scripts/update-team-profiles.js` so `season_record` reflects graded results through the most recent game. Then hand-edit `health_snapshot.out`, `.questionable`, `.ir`, and `.notes` for the two teams playing, dated `as_of`. The health block is the single load-bearing piece of context each week; get it right or the whole run is downstream of a stale injury list.
2. **Create prompts.** Fill this template for the game using the two updated profiles as the single source of team truth.
3. **Run prompts.** Save raw responses under `Docs/Responses/2026/week-XX/game-YY-<slug>/`, extract structured picks into `NFL_PREDICTIONS_2026`, grade post-final, promote graded rows into `NFL_GAMES` + `NFL_BETS`, rerun the profile updater so the next week starts from current records.

## What Season 1 actually taught us (unchanged from v2.1 minus W9 P3)

The 2025 sample was 84 graded bets across Weeks 9 and 11, three models, thirteen prompts. Overall the sample lost -$70.90 at -9.2% ROI. The top three P/L-positive prompts:

| Prompt | Game | Record | P/L | Shape |
|---|---|---|---|---|
| Week 11 Prompt 7 | Commanders vs Dolphins | 8-0 | +$80 | UNDER 47.5 + Achane rush attempts OVER + WAS RB carries OVER + Longest FG UNDER 47.5 + 1Q UNDER 7.5 |
| Week 11 Prompt 11 | Cowboys vs Raiders | 8-1 | +$69 | Team Total OVER Cowboys + QB pass yds OVER + kicker Made FG OVER + Longest FG OVER/UNDER + Prescott Pass TDs OVER |
| Week 11 Prompt 3 | Lions vs Eagles | 3-1 | +$19 | Total UNDER 47.5 + Eagles spread -1.5 |

W9 P3 was in the v2.1 reference set. Actual record was 1-2 -$12 overall; ChatGPT correctly caught this on Week 1 Game 2. Removed from the reference set. Study, do not mimic.

## Grading rubric v2 (new, effective 2026-09-11)

Outcome is the primary axis. Reasoning grade is bounded by outcome:

- A LOSS caps at 4/5. Default LOSS grade is 3. Plausible-on-paper losses are the modal outcome in sports betting.
- A WIN with generic public reasoning caps at 2/5.
- Fabricated citation or fabricated fetch caps reasoning at 1/5 regardless of outcome.
- Season ROI is the primary ranking. Reasoning, Sizing, Source Honesty, and Self-Reflection are secondary axes explaining how the model got there.

Full rubric: `Docs/2026/grading-rubric.md`.

## Prompt (copy from here down)

```text
You are an independent entry in the CSolutions AI Analyzer NFL study.
Run the forced-selection lane, prompt version 2.2, for [AWAY] at [HOME],
Week [WEEK], game_id [GAME_ID], kickoff [KICKOFF], venue [VENUE], on [NETWORK].

This is a hypothetical research allocation, not authorization to place wagers.
Check the current time and official kickoff first. If kickoff has passed,
stop and report that pre-game eligibility has expired. Do not use hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game parlay
with at least TWO distinct, compatible legs. Allocate the full $20 across
these tickets; reserve must be zero. More singles are optional. Every
ticket needs a positive stake. A parlay is one ticket with one stake.

TEAM PROFILE STEP (new in v2.2, mandatory before picking)
Read the two team-profile files first. Each profile is Data/2026/rosters/
<team-slug>.json and contains the current-season roster (with correction
history), a season_record block (W-L, PF-PA, last game), and a
health_snapshot block (out / questionable / IR players at the time the
profile was last updated). Cite specific values from both profiles in
your reasoning:

- [AWAY_PROFILE_PATH]
- [HOME_PROFILE_PATH]

Name any player from either team's health_snapshot that you are letting
influence a pick. If the health_snapshot as_of date is older than 24
hours before kickoff, note it as a staleness risk. If either team has
zero graded games this season, note that your priors are 2025-derived
and treat them as weaker.

SEASON 1 STUDY STEP (mandatory before picking)
Read Docs/2026/grading-rubric.md (grading rubric v2, effective
2026-09-11: outcome is primary; on-paper reasoning does not beat a
wrong outcome), Docs/2026/iteration-system.md, and assets/nfl-data.js.
In NFL_BETS, filter to prompt=7 and prompt=11 in week 11, and to
prompt=3 in week 11. Those are the three highest-P/L prompts in the
2025 sample:

  - W11 P7 (Commanders vs Dolphins): UNDER 47.5 + Achane rush attempts
    OVER + WAS RB carries OVER + Longest FG UNDER 47.5 + 1Q UNDER 7.5,
    finished 8-0 +$80.
  - W11 P11 (Cowboys vs Raiders): QB pass yds OVER + Team Total OVER
    Cowboys + kicker Made FG OVER + Longest FG OVER/UNDER + Prescott
    Pass TDs OVER, finished 8-1 +$69.
  - W11 P3 (Lions vs Eagles): Total UNDER 47.5 + Eagles -1.5 short hook,
    finished 3-1 +$19.

NFL_CORRECTIONS: all 11 entries. Pattern of Season 1 losses is
single-player OVER props on QB pass yds, WR yds, edge sacks. Do not
repeat that shape unless a defensible scheme or workload-share justifies
it.

SELF-REFLECTION STEP
Filter NFL_BETS to rows labeled with your own model name. Read every
pick, its stake, its outcome, and its corrected value if a correction
exists. Read your prior weeks in NFL_PREDICTIONS_2026 too. Name a
pattern in your own past behavior and change this week's allocation
based on it.

RESEARCH AND SOURCE HONESTY (grading rubric v2)
Research official current starters, injuries, usage, coaching, matchup,
travel and weather at local kickoff. State sources actually read,
access failures and retrieval time. A URL alone is not proof of access.
Distinguish facts from inference. If you have an access failure, still
make the requested selections using available evidence, identifying
what remains unknown rather than inventing it. Give a straight-up
winner, estimated win probability and projected score.

Under rubric v2, fabricated citations or fabricated fetch reports cap
your reasoning grade at 1/5 regardless of pick outcome. A verified
price label (bovada_verified) requires an actual retrieval; assume
your claims will be checked against curl output at grading time.

BOVADA PRICING
Carlos uses Bovada: https://www.bovada.lv/sports/football/nfl.
Try to obtain current event-specific Bovada prices. Do not log in,
request credentials, bypass access controls or place bets.
Classify EVERY ticket as exactly one of: bovada_verified,
reference_market, or conditional per the v2.1 spec. Never assume -110.
Never label a proposed target as a real quote.

PICK-SHAPE GUARDRAILS (informed by Season 1 and Game 2 loss patterns)
Prefer, in this order, when the research supports them:
1. Team Total OVER on the favored offense against a below-average defense
   AND the favored team is projected to actually win (not just cover).
   Week 1 Game 2 showed the risk of a Team Total OVER when the favorite
   loses badly.
2. Game Total UNDER when both teams have RB1 injuries, weather, short
   week, international travel or a paceless offense.
3. Short-hook Spread through a key number (3, 7) on the sharper side.
4. Volume-anchored props: rush attempts OVER on a bell-cow on the winning
   side (a losing team abandons the run; Kyren Williams finished with 11
   attempts in Week 1 Game 2 when the Rams got blown out). Kicker Made
   FG OVER, 1Q total UNDER, longest completion UNDER on a check-down
   offense.
Avoid:
- Single-player OVER pass yds, OVER receiving yds, OVER anytime TD,
  OVER anytime sack, without a coverage-scheme or workload-share
  justification.
- Stacking the same team-side exposure across a single and an SGP
  (Week 1 Game 2 both ChatGPT's tickets shared "Rams 24+" and both lost).
- Parlays whose legs are independent conviction stacks.

PARLAY REQUIREMENTS
List each leg's market, selection and exact line. Explain dependence,
overlapping exposure with singles, and how the whole ticket can fail.
Prefer correlated legs whose correlation does not concentrate all
exposure on a single premise. Use the sportsbook's actual combined
quote when verified. Without a combined quote, the parlay must be
conditional with a labeled minimum acceptable combined price.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win probability,
odds basis, potential net profit, total return including stake,
break-even probability and strongest supporting AND opposing evidence.
Standard arithmetic (A>0: profit=stake*A/100; A<0: profit=stake*100/abs(A);
return=stake+profit; break-even=100/(A+100) or abs(A)/(abs(A)+100)).

ANSWER FORMAT
1. Winner, projected score and concise game script.
2. Team profile notes: cite specific season_record and health_snapshot
   values you are using from the two profile files, including as_of
   staleness if any.
3. Season 1 study notes: which top prompts you read, which SHAPE pattern
   you are applying, which you are intentionally avoiding.
4. Self-reflection: which of your own past picks you read and how they
   changed this week's allocation.
5. Ticket table including the required single and parlay, totaling $20.
6. Evidence, failure scenarios, correlation and missing-data notes.
7. One valid JSON object matching the forced-selection v2.2 schema.
   New required blocks in v2.2:
     "team_profiles_read": [{ "path": "...", "as_of": "...",
       "season_record": { wins, losses, points_for, points_against },
       "health_key_players": [...] }, ...]
     "season_one_study": as v2.1, plus prompt_version: "2.2"
     "self_reflection": as v2.1

Do not soften the pick to match the market. Do not report a conditional
ticket as a verified Bovada wager. If you quote a snippet from a repo
file to prove a fetch, choose a snippet that is not in this prompt body
itself (Gemini's v2.1 workaround of quoting the W11 P7 line straight
from the prompt is closed under v2.2).
```
