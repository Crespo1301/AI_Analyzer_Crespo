# Week 3, Game 14: Las Vegas Raiders at New Orleans Saints

- Kickoff: 2026-09-27, 4:25 PM ET
- Venue: Caesars Superdome, New Orleans LA
- Network: CBS
- Lane: forced-selection v3.4 (player-prop-forward, roster-hardened)

Feed the same prompt below to Claude (Claude Code), ChatGPT (Codex CLI), and Gemini (web app). Save each raw response to `Docs/Responses/2026/week-03/raiders-saints/{claude,chatgpt,gemini}-picks.md`. Inline any grading concerns; do not create a separate corrections doc.

## What changed vs. v3.3 (for the operator, not the model)

Adjustment carried in from Week 3 Game 1 (falcons-packers TNF) grading (`Docs/2026/week-03-analysis.md`):

W3G1 outcome: **ATL 35, GB 14** as a road dog. All three models filed only game-level tickets (spread / ML / total / ML+total SGP) and went 0-for-2 combined. The money on the field was in **volume-anchored player props on the winning side** — Bijan Robinson 29 att / 194 yds / 2 TDs, Drake London 9 rec / 194 yds. This mirrors the Week 1-2 pattern (Jeanty 23 att, Hall 22 att, Kelce 5+ recs, Jonathan Taylor 62.5+ rush yds) already in the record.

The v3.3 "BET-TYPE COVERAGE (mandatory reflection)" clause was too soft — every model reflected and still filed game-level. v3.4 makes player-prop coverage structural:

1. **Ticket-count floor is 3 tickets, not 2.**
2. **At least 2 tickets must be player-prop-driven** (a straight player prop, or an SGP whose primary leg is a volume-anchored player prop).
3. **Game-level exposure (straight ML / spread / total, or an ML+total SGP with no player leg) is capped at $6 of the $20 bankroll.** The other $14+ must ride on player-anchored tickets.
4. **Volume-anchored floor requirement.** Every player leg must cite (a) 2026 usage share (target share, rush-attempt share, snap %), (b) that the number is a floor the role guarantees, not a ceiling the player has to reach, (c) whether the player is on the projected winning side.
5. **Bovada player-prop board is a required attempt.** `https://www.bovada.lv/sports/football/nfl/player-props` should be tried alongside the game-line board. A fabricated prop line/price is a Source Honesty failure that caps reasoning at 1/5.
6. All v3.3 clauses carry over: Roster Sanity Gate, Volume-vs-Ceiling shape rule, Big-Favorite Spread Trap, Retro-Grade Honesty, `/research/` URLs live, mandatory news + deep-research pass.

## The prompt (copy from here down)

```text
You are an independent entry in the CSolutions AI Analyzer NFL study,
Week 3, Las Vegas Raiders at New Orleans Saints. Kickoff 2026-09-27 4:25 PM ET at
Caesars Superdome, New Orleans LA, broadcast on CBS. game_id: raiders-saints.

This is a hypothetical research allocation, not authorization to
place wagers. Carlos does not personally participate in these model
allocations unless explicitly stated elsewhere. Check the current
time and official kickoff first. If kickoff has passed, stop and
report that pre-game eligibility has expired. Do not use hindsight.

REQUIRED OUTPUT (v3.4 player-prop-forward allocation)
File AT LEAST THREE tickets that total $20 exactly, reserve zero,
every ticket a positive stake. Composition rules:
  - At least TWO of the tickets must be player-prop-driven. A
    ticket is "player-prop-driven" if it is either (i) a straight
    player prop, or (ii) an SGP/parlay whose primary leg is a
    volume-anchored player prop and the correlated leg supports it.
  - Straight ML / spread / total tickets, and ML+total SGPs with no
    player leg, count as "game-level exposure". Total game-level
    exposure across all tickets is capped at $6 of the $20 bankroll.
  - At least one ticket must be a straight/single (may be a
    straight player prop, which then also counts toward the two
    player-prop-driven tickets).
  - At least one ticket must be a parlay or SGP with two or more
    distinct, compatible legs.
The three-ticket / $14-player-side / $6-game-level structure is a
direct response to W3G1 (falcons-packers TNF, 2026-09-24) where all
three models filed only game-level tickets and went 0-for-2 while
Bijan Robinson (29 att / 194 yds / 2 TD) and Drake London (9 rec /
194 yds) were the actual print. Cite that game as row context in
your derivations.

INDEPENDENT EVIDENCE REVIEW (the point of the study)
The study tracks real graded outcomes across two seasons. Do NOT
read any repository summary or handoff doc that tells you "what has
worked" or "what to avoid" for betting shapes as a shortcut. Derive
shape patterns yourself from the raw graded rows and cite the rows.
You may (and should) read the Week 1, Week 2, and Week 3 analysis
docs for CONTEXT and roster-hazard flags, but every derivation you
claim must also cite the specific graded row it comes from.

LANE-SPECIFIC RESEARCH GUIDANCE
The information below exists in the study's records. Where and how
you retrieve it is up to you. Do not skip it, and do not summarize
from memory when the actual data is available.

  What you must look up before you allocate:
    - Every Season 1 graded row and correction. Shape-derivation
      source.
    - Every Season 2 Week 1, Week 2, and Week 3 Game 1 pick with
      its result and grade, including your own model's tickets.
      W3G1 (falcons-packers) is the specific in-corpus row that
      motivated v3.4; read all three models' W3G1 responses.
    - Both team profiles for this matchup, current as of kickoff:
      season record (from the roster JSON's season_record block,
      cross-checked against ESPN standings for post-W2 games),
      verified starters, depth chart, 2026 usage share metrics
      (target share, rush-attempt share, snap %), and health
      snapshot with an as_of date.
    - Current grading rubric so you know how reasoning, sizing,
      source honesty, and self-reflection score.
    - Every model's raw Week 1, Week 2, and W3G1 responses.

  How you can retrieve it:
    - Local-file lane (Claude via Claude Code, ChatGPT via Codex
      CLI): you have filesystem access to
      /home/cresp3/AI_Analyzer_Crespo. Read the repo directly. Do
      not skip files to save tokens. Cite specific rows or blocks
      with a short quoted snippet actually pulled from the file.
      Priority files:
        Data/2026/rosters/las-vegas-raiders.json
        Data/2026/rosters/new-orleans-saints.json
        Data/2026/schedule/week-03.json
        Docs/2026/week-01-analysis.md
        Docs/2026/week-02-analysis.md
        Docs/2026/week-03-analysis.md
        Docs/2026/grading-rubric.md
        Docs/Responses/2026/week-01/**
        Docs/Responses/2026/week-02/**
        Docs/Responses/2026/week-03/game-01-falcons-packers/**
        assets/nfl-data.js
    - Web lane (Gemini): the same corpus is published as browseable
      HTML under https://crespo1301.github.io/AI_Analyzer_Crespo/
      research/ . These URLs resolve and return 200. Fetch them.
      Cite each source you actually reach with a URL and a quoted
      snippet. Reachable pages include:
        /research/index.html
        /research/rubric.html
        /research/week-01-analysis.html
        /research/week-02-analysis.html
        /research/week-03-analysis.html
        /research/bet-ledger.html
        /research/teams/las-vegas-raiders.html
        /research/teams/new-orleans-saints.html
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
    Source Honesty axis failure.
  - Do NOT quote a spread/total/moneyline/prop price without naming
    the sportsbook and a captured_at ISO-8601 timestamp. This
    applies to player-prop lines and prices too — a fabricated prop
    number caps reasoning at 1/5, same as a fabricated spread.

MANDATORY NEWS + DEEP RESEARCH PASS
Before allocating, read at least all of the following for THIS
matchup (Las Vegas Raiders at New Orleans Saints, Week 3):
  1. Las Vegas Raiders official team-site injury report / practice-report for
     Week 3 (or the closest equivalent official source).
  2. New Orleans Saints official team-site injury report / practice-report for
     Week 3.
  3. One national deep-preview (ESPN, The Athletic, NFL.com, PFF,
     Sharp Football Analysis, Establish The Run, or Action Network).
  4. One current market read: current spread, total, and moneyline
     from a named sportsbook, with captured_at ISO-8601 timestamp.
  5. One current player-prop board read: at least three specific
     props from Bovada's NFL player-prop page
     (https://www.bovada.lv/sports/football/nfl/player-props) OR a
     named alternate book (DraftKings / FanDuel / BetMGM / Caesars
     / ESPN BET / Fanatics) if Bovada is unreachable, with each
     prop's line, price, and captured_at ISO-8601 timestamp.
Cite each with URL + short quoted snippet. Verify every stat you
plan to use in reasoning against ESPN or NFL.com and cite the URL.

ROSTER SANITY GATE (hard rule)
Before submitting ANY player-prop leg you must satisfy all three:
  (a) The named player must appear on the correct team's active
      roster / current depth chart. A player who is on the OTHER
      team, or not on either team, is an automatic scratch.
  (b) The named player must NOT be on that team's official Week 3
      inactives / OUT list, IR, PUP-R, or Reserve/Commissioner's
      Exempt List for this game.
  (c) The named player must have a plausible role in the projected
      game script for that side.
If any of (a)-(c) fails, scratch the leg or replace the ticket.

Pre-loaded 2026-09-25 hazards for THIS matchup (verify against the
Wednesday/Friday practice reports before locking):
  - Las Vegas Raiders (1-0-0 (PF 27, PA 13), health as_of 2026-09-13):
    - No pre-loaded OUT/IR/PUP/Reserve/QUESTIONABLE flags in roster JSON; verify against ESPN team injuries page before locking.
  - New Orleans Saints (0-1-0 (PF 30, PA 31), health as_of 2026-09-13):
    - No pre-loaded OUT/IR/PUP/Reserve/QUESTIONABLE flags in roster JSON; verify against ESPN team injuries page before locking.

VOLUME-VS-CEILING SHAPE RULE (hard rule, v3.4 sharpened)
The study's data has treated these two shapes very differently:
  - Volume-anchored legs on the projected WINNING side have hit
    repeatedly: Jeanty 23 att, Hall 22 att, Kelce 5+ recs, Jonathan
    Taylor 62.5+ rush yds, and now W3G1 Bijan 29 att and Drake
    London 9 rec (both on ATL, the projected winner none of the
    three models correctly sided with).
  - Ceiling-anchored legs on trailing offenses have failed
    repeatedly: Burrow O1.5 pass TDs, Achane rush yds while
    trailing 27-13, Barkley 17.5 rush att when PHI abandoned the
    run, Bijan 16.5 rush att in a 34-3 blowout as the losing side.

RULES:
  - Do NOT submit a ceiling-anchored player-prop OVER on the
    projected losing side. If the leg is on the projected losing
    side, it must be a possession-WR reception floor with a 2026
    target share >= 22%, or a short-yardage-back rush-attempt floor
    (with the caveat that trailing teams frequently abandon the RB
    checkdown; anytime-TD on a trailing-side RB is treated as
    ceiling, not volume).
  - For every player leg, state the 2026 usage share you are
    anchoring to (e.g. "target share 26.1% through 2 games",
    "rush-attempt share 68% Week 1, 71% Week 2"), and state that
    the number is a floor the role guarantees, not a ceiling.

BIG-FAVORITE SPREAD TRAP (hard rule)
Spreads of -6.5 or larger have punished this study in Week 1 (LAC
-9.5), Week 2 (KC -6.5, WSH +4.5 mis-sided), and Week 3 Game 1
(GB -4.5 was on the acceptable side of the threshold but still
crushed; the underlying pattern is that home-favorite ML on a short
week is not the free money the market implies). If you take a
spread of magnitude >= 6.5, name the specific rows that support it
and explain why THIS matchup breaks the trap pattern.

BET-TYPE COVERAGE (v3.4: structural, not reflective)
Look at your own Week 1, Week 2, and W3G1 bet mix. If you filed
almost entirely game-level tickets, name that. Then MEET the
composition rules in REQUIRED OUTPUT: at least two player-prop-
driven tickets, at most $6 of game-level exposure. Do not talk
around the rule; satisfy it. If you cannot find two defensible
player legs for this matchup, say so explicitly and then explain
which game-level ticket you are keeping to $6 or less.

BOVADA PRICING HONESTY
Use Bovada only as an odds-review reference when it is reachable;
do not imply Carlos is placing these tickets there. Try to obtain
current event-specific Bovada prices from
https://www.bovada.lv/sports/football/nfl and the player-prop board
at https://www.bovada.lv/sports/football/nfl/player-props. Do not
log in, request credentials, bypass access controls, or place bets.
Classify EVERY ticket as exactly one of:
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
State your own Week 1, Week 2, and W3G1 P/L. State which of your
own picks you actually read. State which shapes from your own picks
you are keeping and which you are dropping this week. If you have
no reliable P/L number and cannot verify it from the corpus, report
"unknown, not fabricated" instead of guessing.

Standing snapshot after W3G1 (for calibration only, verify against
your own reading of the graded rows):
  - ChatGPT (Codex CLI): W1 +$38.10-ish, W2 filed 4-of-15 +$50.99,
    W3G1 filed 0-of-2 for -$20.00. Structural throughput problem.
  - Gemini (web app): W2 filed 15-of-15 +$34.35, W3G1 filed 0-of-2
    but the Golden O3.5 rec leg hit inside a losing SGP for -$10.
    Source-honesty is the weakest axis (fabricated self-record on
    W3G1 as well).
  - Claude (Claude Code): W2 5-13-1 -$93.16 with two roster errors,
    W3G1 filed 0-of-2 for -$20.00 (UNDER 42.5 and GB ML + UNDER
    parlay both wrong direction).

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
3. 2026 usage-share table for the projected primary skill players
   on both sides (target share, rush-attempt share, snap %, red-
   zone touch share where available). Cite the source per row.
4. Independent derivations from the graded data: which shapes you
   derived as historically profitable, which as historically
   losing, citing specific rows (must include at least one row
   from W3G1 falcons-packers).
5. Self-reflection: your Week 1, Week 2, and W3G1 record and P/L,
   which of your own past picks you read, and how they changed
   this week's allocation.
6. Ticket table with AT LEAST THREE tickets totaling $20.
   Composition compliance line: "player-prop-driven tickets: N,
   game-level exposure: $X (cap $6)". For each player-prop leg,
   include a one-line Roster Sanity Gate result and a one-line
   usage-share anchor.
7. Evidence, failure scenarios, correlation, and missing-data notes.
8. One valid JSON object with fields:
   prompt_template ("forced-selection"), prompt_version ("3.4"),
   model_role, model_version, generated_at, week (3),
   game_id ("raiders-saints"), forced_allocation (true),
   bankroll (20), total_stake (20), reserve (0),
   composition {ticket_count, player_prop_driven_count,
     game_level_exposure_dollars},
   team_profiles_read (list of {path_or_url, as_of, season_record,
     health_key_players}),
   news_and_research_read (list of {url, captured_at, one-line
     quote}),
   roster_sanity_gate_results (list of {player, team, on_team,
     active_this_week, role_plausible, verdict}),
   usage_share_table (list of {player, team, target_share,
     rush_att_share, snap_pct, rz_touch_share, source, as_of}),
   independent_derivations {profitable_shapes: [...],
     losing_shapes: [...], each with a citation to specific games
     or rows including at least one W3G1 row},
   self_reflection {week1_record, week1_pl, week2_record, week2_pl,
     w3g1_record, w3g1_pl, past_picks_reviewed, pattern_kept,
     pattern_stopped},
   bets (with per-ticket fields per pricing-honesty spec, plus
     ticket_class: "player_prop_driven" | "game_level"),
   sources (with fetch_succeeded per URL and quoted snippet where
     applicable),
   reasoning_summary.

Do not soften picks to match the market. Do not report a
conditional ticket as a verified Bovada offer. Operator acceptance
alone cannot turn an unverified quote into a verified one.
```
