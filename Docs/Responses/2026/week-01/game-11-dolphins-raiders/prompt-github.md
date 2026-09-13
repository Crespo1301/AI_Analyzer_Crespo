# GitHub-access prompt v3.0, Week 1 Game 11: Miami Dolphins at Las Vegas Raiders

For: Gemini, or any model without local filesystem access.
Kickoff: 2026-09-13 4:25 PM ET at Allegiant Stadium, FOX.
Written: 2026-09-13. v3.0 is the independent-derivation lane.

Save the raw response next to this file as `gemini-picks.md`. Any
grading concerns (fabricated fetches, unverifiable pricing labels,
heuristic-only derivations) go inline in the picks file itself as a
"Grading concerns" section, not in a separate corrections doc.

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
$20 across these tickets; reserve must be zero. Every ticket needs a
positive stake. A parlay is one ticket with one stake.

INDEPENDENT EVIDENCE REVIEW (mandatory, this is the point of the study)
This study tracks real graded outcomes across two seasons. Do NOT
read any repository summary, review, or handoff doc that tells you
"what has worked" or "what to avoid" for betting shapes. That would
feed you our bias. The study is designed so you derive shape patterns
independently from the raw graded data.

You do not have local filesystem access. The study's tracked graded data
lives in a public repository at
https://github.com/Crespo1301/AI_Analyzer_Crespo. Try to fetch it. Try
any URL you can: raw.githubusercontent.com paths for the files listed
below, github.com blob paths, the live site at
https://crespo1301.github.io/AI_Analyzer_Crespo/, or any public mirror
you can reach. The paths that matter:

- assets/nfl-data.js  (contains NFL_BETS and NFL_CORRECTIONS)
- assets/nfl-predictions-2026.js
- Data/2026/rosters/<away-slug>.json and <home-slug>.json
- Docs/2026/grading-rubric.md  (grading rules only; safe to read)

Do NOT fetch any repository doc that summarizes shapes or gives
betting guidance. Specifically do not fetch any file named
what-has-worked.md, redesign-direction.md, or final-review.md when it
contains conclusions rather than raw data.

Absolute honesty rules on fetches:

- If a URL returns a real response you actually read, include in the
  sources block a short verbatim snippet from that response that is
  NOT present in this prompt body. Any snippet already visible in this
  prompt is not proof of a fetch.
- If a URL returns 404 or your tool refuses to fetch it, say so
  explicitly and set fetch_succeeded: false. Do NOT invent a snippet.
- If none of the repository URLs work for you at all, say so at the
  top of your response and derive your shape patterns from open-web
  sources ONLY (public betting-industry retrospectives, box-score
  archives, whatever you can actually verify). Cite each with a URL
  and a quoted snippet.

Grading rubric v2 caps reasoning at 1/5 when a citation is
fabricated. There is no upside to claiming a fetch you did not
perform.

Derive, on your own, and cite the specific games or rows that support
each derivation:

- Which pick shapes (bet types, market sides, sizing patterns) have
  generated the highest positive P/L in this study to date? Name the
  specific games and prompts where they cashed.
- Which pick shapes have generated the most losses or the most
  box-score-audit corrections? Name the specific games and rows.
- What is your own model's historical tendency? Filter the graded data
  to your own model_role and describe what you actually see.

Do not repeat conventional betting-industry heuristics unless the data
in this repository specifically supports them. Do not assume any pattern
holds without a citation to the actual rows. If the sample is too small
to support a derivation, say so.

TEAM PROFILE STEP
Read both team profiles and cite specific values in your reasoning:
- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/Data/2026/rosters/miami-dolphins.json
- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/Data/2026/rosters/las-vegas-raiders.json

Each profile contains: roster (offense skill positions, kicker, depth
tables), season_record (through the most recent graded game), and
health_snapshot (out / questionable / IR players as_of a specific
date). Name any health_snapshot player you are letting drive a pick.
If health_snapshot.as_of is older than 24 hours before kickoff, note
it as a staleness risk and verify against the team's own injury
report before locking your bet.

The auto-populated rosters use a jersey-number heuristic that has been
wrong before (Seahawks QB1, Rams QB1, 49ers QB1 all needed manual
correction). Verify starters independently against the team's own
depth chart page and flag any error.

SELF-REFLECTION
State how your derivations above and your own past behavior change
this week's allocation from a naive read of the market.

RESEARCH
Do open-web research on this specific matchup. Cite every source with
a full URL and a short snippet you actually read (not just a title).
At minimum verify the current spread, total, and moneyline and note
which sportsbook. Read each team's official injury report and depth
chart page. Look at weather if outdoors, rest and travel if relevant.
News about a team can update your priors on that team overall, not
just for one bet.

BOVADA PRICING HONESTY
Carlos places tickets on Bovada. Try to obtain current event-specific
Bovada prices from https://www.bovada.lv/sports/football/nfl. Do not
log in, request credentials, bypass access controls, or place bets.
Classify EVERY ticket as exactly one of:
- bovada_verified: exact line and current Bovada price actually
  retrieved. Include timestamped screenshot reference or the exact
  captured_at time in ISO 8601.
- reference_market: exact line and price verified at another named
  book; NOT a verified Bovada offer.
- conditional: exact proposed line and minimum acceptable American
  odds, derived from your probability and value assessment; NOT an
  observed quote.

Never label a proposed target as a real quote. Never assume -110.
Under grading rubric v2, an unverified bovada_verified label is
treated as a Source Honesty failure and caps your reasoning grade at
1/5.

GRADING PROCESS (Docs/2026/grading-rubric.md v2)
You will be graded on outcome first, then reasoning, then sizing,
then source honesty, then self-reflection. Outcome is primary.
- LOSS caps at 4/5 reasoning; default LOSS grade is 3/5.
- WIN with generic public reasoning caps at 2/5.
- Fabricated citation or fabricated fetch caps reasoning at 1/5
  regardless of outcome.
- Sizing (0-3), Source Honesty (0-3), Self-Reflection (0-2) are
  separate axes.
- Season ROI drives the primary ranking.

If you quote a snippet from a repository file to prove a fetch,
choose a snippet that is NOT present in this prompt body. Snippets
repeated verbatim from this prompt do not prove a fetch.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win
probability, odds basis, potential net profit, total return including
stake, break-even probability and strongest supporting AND opposing
evidence. Standard arithmetic (A>0: profit=stake*A/100; A<0:
profit=stake*100/abs(A); return=stake+profit; break-even=100/(A+100)
or abs(A)/(abs(A)+100)).

ANSWER FORMAT
1. Winner, projected score, concise game script.
2. Team profile notes: cite specific season_record and health_snapshot
   values used. Flag any roster heuristic error.
3. Independent derivations from the graded data: which shapes you
   derived as historically profitable in this study's data, which as
   historically losing, citing the specific rows. Do NOT rely on
   external betting-industry heuristics without a citation.
4. Self-reflection: which of your own past picks you read and how
   they changed this week's allocation.
5. Ticket table including the required single and parlay, totaling
   $20 with zero reserve.
6. Evidence, failure scenarios, correlation and missing-data notes.
7. One valid JSON object with fields:
   prompt_template ("forced-selection"), prompt_version ("3.0"),
   model_role, model_version, generated_at, week (1),
   game_id ("dolphins-raiders"), forced_allocation (true), bankroll (20),
   total_stake (20), reserve (0),
   team_profiles_read (list of {path, as_of, season_record,
     health_key_players}),
   independent_derivations {profitable_shapes: [...], losing_shapes:
     [...], each with a citation to specific games or rows},
   self_reflection {past_picks_reviewed, pattern_kept,
     pattern_stopped},
   bets (with the per-ticket fields per pricing-honesty spec),
   sources (with fetch_succeeded per URL and quoted snippet where
     applicable),
   reasoning_summary.

Do not soften picks to match the market. Do not report a conditional
ticket as a verified Bovada wager. Operator acceptance alone cannot
turn an unverified quote into a verified one.
```
