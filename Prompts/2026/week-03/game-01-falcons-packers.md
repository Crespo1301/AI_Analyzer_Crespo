# Week 3, Game 1: Atlanta Falcons at Green Bay Packers

- Kickoff: 2026-09-24, 8:15 PM ET
- Venue: Lambeau Field, Green Bay WI
- Network: Prime Video (TNF)
- Lane: forced-selection v3.3 (independent-derivation, roster-hardened)

Feed the same prompt below to Claude (Claude Code), ChatGPT (Codex CLI), and Gemini (web app). Save each raw response to `Docs/Responses/2026/week-03/game-01-falcons-packers/{claude,chatgpt,gemini}-picks.md`. Inline any grading concerns; do not create a separate corrections doc.

## What changed vs. v3.1/v3.2 (for the operator, not the model)

Adjustments carried in from the Week 1 and Week 2 analyses (`Docs/2026/week-01-analysis.md`, `Docs/2026/week-02-analysis.md`):

1. **Hard roster sanity gate.** Two Week 2 Claude losses were roster-data failures, not reasoning failures (Rico Dowdle bet in a PIT-NE game; Nico Collins bet while officially inactive). The prompt now REQUIRES a player-on-team + active-for-this-week check before any player-prop leg is submitted.
2. **Volume-vs-ceiling shape rule is now enforced, not suggested.** Volume-anchored legs on the projected winning offense are the study's sharpest edge (Jeanty, Hall, Kelce/Taylor). Ceiling-anchored legs on trailing offenses have failed repeatedly (Achane rush yds, Barkley/Henry rush att, Burrow pass TDs). The prompt bans ceiling-OVER legs on the projected losing side.
3. **Big-favorite spread trap.** The study's data has punished spreads ≥ -6.5 in both Week 1 (LAC -9.5, JAX -8.5 as a shape) and Week 2 (KC -6.5, WSH +4.5 mis-sided). Prompt now flags this as a known trap.
4. **Retro-grade honesty clause.** Gemini has fabricated graded results for games not yet finished in self-reflection blocks. The prompt now bans that outright and cites the specific pattern.
5. **`/research/` URLs are live and reachable.** Gemini fabricated 15 of 16 `research/` 404s in Week 2. The prompt lists the specific pages, tells Gemini they resolve, and treats a fabricated 404 as a Source Honesty failure.
6. **Mandatory news + deep-research pass.** All three models must read at least one national deep-preview + both teams' official injury reports + one sharp market write-up before locking picks.

## The prompt (copy from here down)

```text
You are an independent entry in the CSolutions AI Analyzer NFL study,
Week 3, Atlanta Falcons at Green Bay Packers. Kickoff 2026-09-24
8:15 PM ET at Lambeau Field, Green Bay WI, broadcast on Prime Video
(TNF). game_id: falcons-packers.

This is a hypothetical research allocation, not authorization to
place wagers. Carlos does not personally participate in these model
allocations unless explicitly stated elsewhere. Check the current
time and official kickoff first. If kickoff has passed, stop and
report that pre-game eligibility has expired. Do not use hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game
parlay with at least TWO distinct, compatible legs. Allocate the
full $20 across these tickets, reserve must be zero. Every ticket
needs a positive stake. A parlay is one ticket with one stake.

INDEPENDENT EVIDENCE REVIEW (the point of the study)
The study tracks real graded outcomes across two seasons. Do NOT
read any repository summary or handoff doc that tells you "what has
worked" or "what to avoid" for betting shapes as a shortcut. Derive
shape patterns yourself from the raw graded rows and cite the rows.
You may (and should) read the Week 1 and Week 2 analysis docs for
CONTEXT and roster-hazard flags, but every derivation you claim must
also cite the specific graded row it comes from.

LANE-SPECIFIC RESEARCH GUIDANCE
The information below exists in the study's records. Where and how
you retrieve it is up to you. Do not skip it, and do not summarize
from memory when the actual data is available.

  What you must look up before you allocate:
    - Every Season 1 graded row and correction (bet-type, market
      side, sizing, outcome, and P/L). Shape-derivation source.
    - Every Season 2 Week 1 AND Week 2 pick with its result and
      grade, including your own model's tickets. Your own record
      and the shapes inside your own winning and losing rows should
      shape what you repeat and what you drop.
    - Both team profiles for this matchup, current as of kickoff:
      season record (ATL 0-2 through Week 2, points_for 16,
      points_against 54; GB 1-1 through Week 2, points_for 42,
      points_against 56), verified starters, depth chart, and
      health snapshot with an as_of date.
    - Current grading rubric so you know how reasoning, sizing,
      source honesty, and self-reflection score.
    - Every model's raw Week 1 and Week 2 response for reference
      (yours and the other two).

  How you can retrieve it:
    - Local-file lane (Claude via Claude Code, ChatGPT via Codex
      CLI): you have filesystem access to
      /home/cresp3/AI_Analyzer_Crespo. Read the repo directly. Do
      not skip files to save tokens. Cite specific rows or blocks
      with a short quoted snippet actually pulled from the file.
      Priority files:
        Data/2026/rosters/atlanta-falcons.json
        Data/2026/rosters/green-bay-packers.json
        Data/2026/schedule/week-03.json
        Docs/2026/week-01-analysis.md
        Docs/2026/week-02-analysis.md
        Docs/2026/grading-rubric.md
        Docs/Responses/2026/week-01/**
        Docs/Responses/2026/week-02/**
        assets/nfl-data.js
    - Web lane (Gemini): the same corpus is published as browseable
      HTML under https://crespo1301.github.io/AI_Analyzer_Crespo/
      research/ . These URLs resolve and return 200. Fetch them.
      Cite each source you actually reach with a URL and a quoted
      snippet. Reachable pages include:
        /research/index.html
        /research/rubric.html
        /research/week-01-analysis.html (or week-01.html)
        /research/week-02-analysis.html
        /research/bet-ledger.html
        /research/teams/atlanta-falcons.html
        /research/teams/green-bay-packers.html
      Do not attempt raw.githubusercontent.com paths; they have not
      resolved for the web lane in this study.
    - If a page you tried actually refuses (real error, not
      assumed), say so, set fetch_succeeded: false for that URL,
      and do not invent a snippet. Historical note: in Week 2, 15
      of 16 Gemini responses claimed the /research/ URLs 404'd when
      they in fact resolved. A fabricated 404 on a page that in
      reality resolves is a Source Honesty failure that caps
      reasoning at 1/5.

ABSOLUTE HONESTY RULES ON FETCHES AND GRADING
  - Snippets you quote must appear in the source. Fabricated snippets
    cap reasoning at 1/5 under the Source Honesty axis.
  - Do NOT report a graded outcome for any game that has not yet
    been played and settled. Do NOT fabricate a self-record for a
    week or game whose grading is still pending. Doing so is a
    Source Honesty axis failure. (Gemini Week 2 pattern: claiming
    graded results for Sunday-late and MNF games while responses
    were being generated during the 1 PM slate.)
  - Do NOT quote a spread/total/moneyline price without naming the
    sportsbook and a captured_at ISO-8601 timestamp.

MANDATORY NEWS + DEEP RESEARCH PASS
Before allocating, read at least all of the following for THIS
matchup (Falcons at Packers, Week 3):
  1. Falcons official team-site injury report / practice-report for
     Week 3 vs GB (or the closest equivalent official ATL source).
  2. Packers official team-site injury report / practice-report for
     Week 3 vs ATL.
  3. One national deep-preview (ESPN, The Athletic, NFL.com, PFF,
     Sharp Football Analysis, Establish The Run, or Action Network).
  4. One current market read: current spread, total, and moneyline
     from a named sportsbook, with captured_at ISO-8601 timestamp.
Cite each with URL + short quoted snippet. Verify every stat you
plan to use in reasoning against ESPN or NFL.com and cite the URL.

ROSTER SANITY GATE (hard rule, added after Week 2 errors)
Before submitting ANY player-prop leg you must satisfy all three:
  (a) The named player must appear on the correct team's active
      roster / current depth chart. A player who is on the OTHER
      team, or not on either team, is an automatic scratch. (Week 2
      example failure: Rico Dowdle bet in a PIT-NE game; Dowdle
      plays for CAR.)
  (b) The named player must NOT be on that team's official Week 3
      inactives / OUT list, IR, PUP-R, or Reserve/Commissioner's
      Exempt List for this game. (Week 2 example failure: Nico
      Collins OVER 6.5 recs while Collins was ruled OUT.)
  (c) The named player must have a plausible role in the projected
      game script for that side (see next section).
If any of (a)-(c) fails, scratch the leg or replace the ticket.
Known 2026-09-23 hazards for THIS matchup:
  - Green Bay: Josh Jacobs is on Reserve/Commissioner's Exempt List.
    Do not bet Jacobs props. Jayden Reed is OUT (neck). Aaron Banks
    is OUT (toe). Zach Bako-Bewele is OUT (season-ending patellar
    tendon tear). Micah Parsons is on PUP-R.
  - Atlanta: DE Samson Ebukam OUT (hamstring). CB Billy Bowman Jr.
    QUESTIONABLE (Achilles). CB A.J. Terrell Jr. on IR (groin).
    Verify the ATL Wednesday practice report before locking picks
    that lean on the Falcons secondary or ATL pass-rush.

VOLUME-VS-CEILING SHAPE RULE (hard rule, upgraded)
The study's data has treated these two shapes very differently:
  - Volume-anchored legs on the projected WINNING side (rush
    attempts, red-zone touch role, target volume) have hit
    repeatedly across both seasons (Jeanty 23 att, Hall 22 att,
    Kelce 5+ recs, Jonathan Taylor 62.5+ rush yds).
  - Ceiling-anchored legs (passing-TD OVERs, receiving-yard OVERs,
    anytime-TD on trailing-side skill players) have failed
    repeatedly when the game script goes against them (Burrow O1.5
    pass TDs, Achane rush yds while trailing 27-13, Barkley 17.5
    rush att when PHI abandoned the run, Bijan 16.5 rush att in a
    34-3 blowout).

RULE: Do NOT submit a ceiling-anchored player-prop OVER on the
projected losing side. If the leg is on the projected losing side,
it must be a volume floor on a role player (short-yardage back,
possession WR target floor, checkdown floor with the caveat that
trailing teams frequently abandon the RB checkdown). Anytime-TD on
a trailing-side RB is treated as ceiling, not volume.

BIG-FAVORITE SPREAD TRAP (hard rule)
Spreads of -6.5 or larger have punished this study in Week 1 (LAC
-9.5 blowup) and Week 2 (KC -6.5, WSH +4.5 mis-sided). If you take
a spread of magnitude >= 6.5, name the specific rows that support
it and explain why THIS matchup breaks the trap pattern. Otherwise
prefer shorter numbers (through the hook: -1.5, -2.5, -3, -3.5) or
a moneyline + total-direction SGP.

BET-TYPE COVERAGE (mandatory reflection)
Look at your own Week 1 and Week 2 bet mix. If you filed almost
entirely game-level picks (spreads, moneylines, totals, favorite-ML
+ total SGPs) and few player-level picks despite team profiles
carrying roster, depth chart, and health data, name that. Then
consider whether a defensible volume-anchored player-level leg fits
this matchup better than a reflex game-level SGP. If you stay
game-level, explicitly say you considered a player-level angle and
why you rejected it.

BOVADA PRICING HONESTY
Use Bovada only as an odds-review reference when it is reachable;
do not imply Carlos is placing these tickets there. Try to obtain
current event-specific Bovada prices from
https://www.bovada.lv/sports/football/nfl. Do not log in, request
credentials, bypass access controls, or place bets. Classify EVERY
ticket as exactly one of:
  - bovada_verified: exact line and current Bovada price actually
    retrieved. Include the exact captured_at time in ISO 8601. If
    you could not reach bovada.lv, do NOT use this label.
  - reference_market: exact line and price verified at another
    named book, NOT a verified Bovada offer. Alternate books
    accepted for this label: DraftKings, FanDuel, BetMGM, Caesars,
    ESPN BET, Fanatics. Name the book and include a captured_at.
  - conditional: exact proposed line and minimum acceptable
    American odds derived from your probability and value
    assessment, NOT an observed quote.

Never label a proposed target as a real quote. Never assume -110.
An unverified bovada_verified label is a Source Honesty failure and
caps reasoning at 1/5.

SELF-REFLECTION
State your own Week 1 and Week 2 P/L. State which of your own
picks you actually read. State which shapes from your own picks
you are keeping and which you are dropping this week. If you have
no reliable P/L number and cannot verify it from the corpus,
report "unknown, not fabricated" instead of guessing.

Standing Week-2 record snapshot (for calibration only, verify
against your own reading of the graded rows):
  - ChatGPT (Codex CLI): 6-2, +$50.99, but only filed 4 of 15
    graded games; expired mid-batch.
  - Gemini (web app): 15-15, +$34.35 across 15 of 15 games.
  - Claude (Claude Code): 5-13-1, -$93.16, two hard roster errors
    (Rico Dowdle team-mismatch, Nico Collins bet while OUT).

GRADING (rubric v2, published under /research/rubric.html or in
Docs/2026/grading-rubric.md)
Outcome first, then reasoning, then sizing, then source honesty,
then self-reflection. LOSS caps at 4/5 reasoning (default 3/5). WIN
with generic public reasoning caps at 2/5. Fabricated citation,
fabricated fetch, fabricated 404 on a live URL, or fabricated
graded-result on an unfinished game each cap reasoning at 1/5.
Sizing 0-3, Source Honesty 0-3, Self-Reflection 0-2 on separate
axes. Season ROI drives the primary ranking.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win
probability, odds basis, potential net profit, total return
including stake, break-even probability, and strongest supporting
AND opposing evidence. Standard arithmetic: A>0 profit =
stake*A/100, A<0 profit = stake*100/abs(A), return = stake +
profit, break-even = 100/(A+100) or abs(A)/(abs(A)+100).

ANSWER FORMAT
1. Winner, projected score, concise game script (name who trails,
   who leans on volume, expected pace).
2. Team profile notes: cite specific season_record and
   health_snapshot values used, with as_of dates. Explicitly
   confirm that every named player on both sides passes the Roster
   Sanity Gate (a), (b), (c). Flag any roster heuristic error you
   caught in the JSON.
3. Independent derivations from the graded data: which shapes you
   derived as historically profitable, which as historically
   losing, citing specific rows.
4. Self-reflection: your Week 1 and Week 2 record and P/L, which of
   your own past picks you read, and how they changed this week's
   allocation.
5. Ticket table including the required single and parlay, totaling
   $20 with zero reserve. For each player-prop leg, include a
   one-line Roster Sanity Gate result: player on team? active this
   week? role plausible in projected script? (yes/yes/yes or scratch).
6. Evidence, failure scenarios, correlation, and missing-data notes.
7. One valid JSON object with fields:
   prompt_template ("forced-selection"), prompt_version ("3.3"),
   model_role, model_version, generated_at, week (3),
   game_id ("falcons-packers"), forced_allocation (true),
   bankroll (20), total_stake (20), reserve (0),
   team_profiles_read (list of {path_or_url, as_of, season_record,
     health_key_players}),
   news_and_research_read (list of {url, captured_at, one-line
     quote}),
   roster_sanity_gate_results (list of {player, team, on_team,
     active_this_week, role_plausible, verdict}),
   independent_derivations {profitable_shapes: [...],
     losing_shapes: [...], each with a citation to specific games
     or rows},
   self_reflection {week1_record, week1_pl, week2_record,
     week2_pl, past_picks_reviewed, pattern_kept, pattern_stopped},
   bets (with per-ticket fields per pricing-honesty spec),
   sources (with fetch_succeeded per URL and quoted snippet where
     applicable),
   reasoning_summary.

Do not soften picks to match the market. Do not report a
conditional ticket as a verified Bovada offer. Operator acceptance
alone cannot turn an unverified quote into a verified one.
```
