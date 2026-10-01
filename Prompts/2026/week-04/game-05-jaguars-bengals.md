# Week 4, Game 5: Jacksonville Jaguars at Cincinnati Bengals

- Kickoff: 2026-10-04, 1:00 PM ET
- Venue: Paycor Stadium, Cincinnati OH
- Network: CBS
- Lane: forced-selection v3.5 (hook-aware, script-aware, inactives-timestamped)

Feed the same prompt below to Claude (Claude Code), ChatGPT (Codex CLI), and Gemini (web app). Save each raw response to `Docs/Responses/2026/week-04/game-05-jaguars-bengals/{claude,chatgpt,gemini}-picks.md`.

## v3.5 deltas (what changed vs v3.4; derived from W3 grading)

W3 grading (full ledger in `Data/2026/results/week-03-grading.md`, debrief in `Docs/2026/week-03-analysis.md`) exposed three cross-model loss patterns:

1. **Hook trap:** six -0.5 to -1 yd losses in one week (Taylor 68.5→68, McCaffrey 75.5→75, Barkley 82.5→82, Jones 58.5→58; BAL -3.5 lost by hook). Market painted lines at the hook because v3.4 "volume on winner" shape is now priced in.
2. **Script-blind receiver props:** winning-side WR1 reception OVERs missed when game script was ground-controlled (Shakir, St. Brown, Kelce, Jefferson — all 2-4 recs in run-script games).
3. **Game-day inactives failure:** Daniels, Walker III (G9) both OUT late; Dowdle (G8) OUT Friday — tickets filed on Wed-sourced rosters voided.

v3.5 hard-rule changes:

A. **Hook-margin gate.** Do NOT submit a player-prop OVER whose posted line is within 1 yard of the player's 2026 YPG average on their role. Either skip, or substitute rush-attempts OVER on the same player (less hookable).

B. **Script-aware receiver filter.** Reception OVER on a winning-side WR1 requires projected pass attempts ≥ 30 OR pre-game total ≥ 46. If game total ≤ 44 AND team is favored, the volume floor is the RB, not the WR — file rushing instead.

C. **Game-day inactives timestamp.** Each player-prop leg must state the ISO-8601 time the model last confirmed the player's game-day active status. If > 2 hours before kickoff, flag as "pre-inactives unconfirmed" and reduce stake by 50% OR skip the leg.

D. **Game-level Under filter.** ML + Under total SGP only when pre-game total ≤ 46. Above that, use team-total OVER on the projected winner instead.

E. **Self-record quote-or-report-unknown.** Model must quote its own W1/W2/W3 P/L verbatim from `research/bet-ledger.html` (web lane) or `Data/2026/results/week-03-grading.md` (local lane). No synthesizing numbers. Fabricated self-record caps reasoning at 1/5 (Gemini-flagged pattern from W2, W3G1, W3G13).

F. **Codex throughput note (operator-side, not prompt-side).** Codex W2 and W3 both filed as compressed stubs / mid-batch expirations. v3.5 does not try to fix this at the prompt layer; operator runs Codex sequentially one game at a time.

All v3.4 structural clauses carry over: 3+ tickets, 2+ player-prop-driven, $6 game-level cap, Roster Sanity Gate (a)(b)(c), Volume-vs-Ceiling shape rule, Big-Favorite Spread Trap, Bovada honesty, Volume-anchored usage share floor citation.

## The prompt (copy from here down)

```text
You are an independent entry in the CSolutions AI Analyzer NFL study,
Week 4, Jacksonville Jaguars at Cincinnati Bengals. Kickoff 2026-10-04 1:00 PM ET at
Paycor Stadium, Cincinnati OH, broadcast on CBS. game_id: jaguars-bengals.

This is a hypothetical research allocation, not authorization to
place wagers. Check the current time and official kickoff first.
If kickoff has passed, stop and report pre-game eligibility
expired. Do not use hindsight.

REQUIRED OUTPUT (v3.5 player-prop-forward, hook-aware allocation)
File AT LEAST THREE tickets totaling $20 exactly, reserve zero,
every ticket a positive stake. Composition:
  - >= 2 tickets player-prop-driven (straight prop, or SGP whose
    primary leg is a volume-anchored player prop).
  - Game-level exposure (ML/spread/total straight, or ML+total
    SGP with no player leg) capped at $6 of $20.
  - >= 1 straight/single; >= 1 parlay or SGP with 2+ legs.

V3.5 HARD RULES (new, derived from W3 grading)

(A) HOOK-MARGIN GATE. No player-prop OVER where the posted line
    is within 1 yard of the player's 2026 YPG average on their
    role. W3 evidence: Taylor 68.5→68, McCaffrey 75.5→75,
    Barkley 82.5→82, Jones 58.5→58 all lost by ≤ 0.5 yds. If the
    line is at the hook, EITHER skip, OR substitute rush-attempts
    OVER on the same player (less hookable; W3 proof: Skattebo
    15.5→20, McCaffrey 13.5→15 both hit comfortably).

(B) SCRIPT-AWARE RECEIVER FILTER. Reception OVER on winning-side
    WR1 requires projected pass attempts >= 30 OR pre-game total
    >= 46. W3 misses on this filter: Shakir O3.5→1 (BUF ran),
    St. Brown O6.5→4 (DET controlled with Gibbs), Kelce O4.5→2
    (KC blowout), Jefferson O71.5 rec yds→32 (MIN ran). Below the
    threshold, volume lives in the RB — file rushing instead.

(C) GAME-DAY INACTIVES TIMESTAMP. Each player-prop leg must
    state the ISO-8601 time you last confirmed the player's
    game-day active status. If > 2h before kickoff, label the leg
    "pre_inactives_unconfirmed" and reduce stake by 50% OR skip.
    W3 failures: Daniels and Walker III (G9) both DNP late;
    Dowdle (G8) OUT Friday. Models filed on Wednesday data.

(D) GAME-LEVEL UNDER FILTER. ML + Under total SGP ONLY when
    pre-game total <= 46. W3 confirmation: Claude 6-for-6 on this
    shape under 46 (G2 BUF+U51.5 WAIT this had 51.5 posted but
    actual total 40 hit — the filter is pre-game total, not
    actual; 51.5 would have blocked. Re-reading: W3 the UNDER
    totals that hit were posted at 41.5, 39.5, 44.5, 46.5, 42.5,
    41.5 — all <= 46.5. The UNDER totals that lost were posted
    at 48.5 or higher where real offenses collided.) Above 46,
    use team-total OVER on projected winner instead (W3 proof:
    BAL TT O27.5 → 34 hit).

(E) SELF-RECORD QUOTE-OR-REPORT-UNKNOWN. Quote your own W1/W2/W3
    P/L verbatim from research/bet-ledger.html (web lane) or
    Data/2026/results/week-03-grading.md (local lane). Do not
    synthesize numbers. Fabricated self-record caps reasoning
    at 1/5. (Gemini W3G13 reported "8-7 +$12.10 / 15-15 +$34.35"
    while W3G1 reported "1-1 -$1.80 / 7-7 -$9.36" — one of these
    is a fabrication.)

ALL V3.4 CLAUSES CARRY OVER: Roster Sanity Gate (a)(b)(c),
Volume-vs-Ceiling shape rule, Big-Favorite Spread Trap >= -6.5,
retro-grade honesty, /research/ URLs live, mandatory news +
deep-research pass, Bovada honesty labels (bovada_verified /
reference_market / conditional).

INDEPENDENT EVIDENCE REVIEW
Derive shape patterns from the raw graded rows (W1-W3 published),
not from any handoff doc. You MUST read:
  - Local lane: Data/2026/results/week-03-grading.md,
    Docs/2026/week-03-analysis.md, Docs/2026/week-02-analysis.md,
    Docs/2026/week-01-analysis.md,
    Docs/2026/grading-rubric.md, Data/2026/rosters/jacksonville-jaguars.json,
    Data/2026/rosters/cincinnati-bengals.json, assets/nfl-data.js.
  - Web lane: /research/week-03-analysis.html, /research/bet-ledger.html,
    /research/rubric.html, /research/teams/jacksonville-jaguars.html,
    /research/teams/cincinnati-bengals.html.

MATCHUP CONTEXT (Jacksonville Jaguars at Cincinnati Bengals, Week 4)
Pre-loaded 2026-10-01 hazards: verify against Wednesday/Friday
practice reports AND Sunday 11:30 AM ET inactives list before
locking any player-prop leg. Roster JSON season_record fields
are stale as of 2026-09-13 for most teams; cross-check ESPN
standings and injuries pages — in particular both teams' current
record, points-for/against, and latest OUT/IR/PUP additions.

MANDATORY NEWS + DEEP RESEARCH PASS
Before allocating:
  1. Jacksonville Jaguars official team-site injury report / inactives for Week 4.
  2. Cincinnati Bengals official team-site injury report / inactives for Week 4.
  3. One national deep-preview.
  4. Current spread, total, moneyline from a named sportsbook
     with ISO-8601 captured_at.
  5. At least three Bovada player-prop lines
     (https://www.bovada.lv/sports/football/nfl/player-props)
     OR a named alternate book, with line + price + ISO-8601.

ANSWER FORMAT
1. Winner, projected score, game script. State projected pass
   attempts for each side (clause B gate).
2. Team profile notes with season_record cross-check and
   health_snapshot as_of. Confirm Roster Sanity Gate for every
   named player.
3. 2026 usage-share table (target share, rush-att share, snap %,
   RZ touch share) for primary skill players both sides.
4. 2026 ROLE AVERAGE table (clause A gate): for each player you
   plan to bet, state their 2026 YPG average on that role
   (rushing yds / game, receiving yds / game, receptions / game).
   For every player-prop line, state the margin between posted
   line and role average. If margin < 1 yard: either skip, or
   substitute rush-attempts OVER.
5. Independent derivations citing specific graded rows, must
   include at least one W3 row from
   Data/2026/results/week-03-grading.md.
6. Self-reflection with your own W1/W2/W3 record quoted verbatim
   from the grading ledger (clause E).
7. Ticket table >= 3 tickets totaling $20. Composition compliance
   line. Per player-prop leg:
     - Roster Sanity Gate: PASS / SCRATCH
     - Usage-share anchor: "N.N% target share through 3 games"
     - Role average margin: "line X.X; 2026 avg Y.Y; margin Z.Z"
     - Inactives-check timestamp: ISO-8601
     - Game-day confidence: "confirmed_active" / "pre_inactives_unconfirmed"
8. Evidence, failure scenarios, correlation notes.
9. One valid JSON object:
   prompt_template ("forced-selection"), prompt_version ("3.5"),
   model_role, model_version, generated_at, week (4),
   game_id ("jaguars-bengals"), forced_allocation (true),
   bankroll (20), total_stake (20), reserve (0),
   composition {ticket_count, player_prop_driven_count,
     game_level_exposure_dollars},
   team_profiles_read [...], news_and_research_read [...],
   roster_sanity_gate_results [...],
   usage_share_table [...],
   role_average_margins (list of {player, line, role_avg,
     margin, verdict: "cleared"|"hook_trap_skipped"}),
   inactives_timestamps (list of {player, iso8601, status:
     "confirmed_active"|"pre_inactives_unconfirmed"|"out"}),
   independent_derivations {profitable_shapes [...] with
     at least one W3 row cite, losing_shapes [...] with at
     least one W3 row cite},
   self_reflection {week1_record_quoted, week1_pl_quoted,
     week2_record_quoted, week2_pl_quoted,
     week3_record_quoted, week3_pl_quoted,
     ledger_source: "research/bet-ledger.html" or
     "Data/2026/results/week-03-grading.md",
     pattern_kept, pattern_stopped},
   bets (per-ticket fields with ticket_class:
     "player_prop_driven"|"game_level"),
   sources (fetch_succeeded per URL),
   reasoning_summary.

Do not soften picks to match the market. Do not report a
conditional ticket as a verified Bovada offer. If your model
cannot read the W3 grading ledger (file not reachable), report
that explicitly and do NOT invent your W3 record.
```
