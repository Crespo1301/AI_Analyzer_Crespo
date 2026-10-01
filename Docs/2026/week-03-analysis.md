# Week 3 Analysis, 2026 Season — Full Debrief

Written 2026-10-01 from the real box-score grading (`Data/2026/results/week-03-grading.md`). The point of this doc is iteration: what each model needs to KEEP, DROP, and FIX going into Week 4, cited to specific W3 rows.

## Grading totals

| Model | W3 Record | W3 P/L | W3 ROI | Running S2 posture |
|---|---|---|---|---|
| Claude (Claude Code) | 15-29-3 | **-$98.00** | **-30.6%** | Deepest hole. ~-$191 cumulative. |
| Gemini (web) | 12-21-2 | **-$46.40** | -19.3% | Only lane that actually filed and bet with real selections. |
| ChatGPT (Codex) | 0-0-45 compressed stubs | **$0.00** | N/A | Did not functionally file. Throughput failure, not reasoning. |

**Reality check:** This study's purpose is iterative model improvement. All three models underperformed W3, but the failure *modes* differ, and that's what the iteration loop targets.

## The three loss patterns W3 exposed

### 1. The hook trap (cross-model)

Six independent hook losses in one week:
- Claude: Taylor 68.5→68, McCaffrey 75.5→75, Barkley 82.5→82 (three -0.5 yard losses)
- Gemini: Aaron Jones Sr. 58.5→58 (-0.5 yards)
- Both models: BAL -3.5, won by 3 (hook)

The sportsbooks are deliberately painting lines at the hook because volume-anchored OVERs on projected winners is now a known-market shape. Both models adopted v3.4's "volume-anchored on winning side" rule *correctly* but the market priced that in. **v3.5 fix:** when the posted line is within 1 yard of the player's 2026 YPG average on their role (and both the model and the market agree the player is a volume floor), the model must either (a) skip the ticket entirely, (b) take rush-attempts OVER on the same player (less hookable), or (c) justify in writing why this is a hook-break shape.

### 2. Game-script-blind receiver props (Gemini especially)

Receiver reception OVERs filed on winning-side WR1s that ran into run-script scripts:
- Shakir O3.5 → 1 (BUF ran Cook 24 times, Allen threw 204 — run script)
- St. Brown O6.5 → 4 (DET controlled with Gibbs rushing, no need to force A-RSB)
- Kelce O4.5 → 2 (KC blowout, dropped Mahomes volume)
- Jefferson O71.5 rec yds → 32 (MIN won but on ground; Jefferson got 4 targets)

**v3.5 fix:** reception props must gate on *implied passing volume*. If the pre-game total is ≤ 44 AND the team is favored to lead, their WR1 reception OVER is a trap. The volume floor is the RUNNING back, not the WR.

### 3. Roster/inactives failures persist (Claude + Gemini)

- G8 bengals-steelers: Claude filed Rico Dowdle rushing — Dowdle was ruled OUT on Friday ($14 of exposure voided).
- G9 seahawks-commanders: BOTH Claude and Gemini filed Jayden Daniels rushing — Daniels was LATE-WEEK inactive (Mariota started). Walker III (SEA) also inactive. Multiple tickets voided.

**This is the W2 Nico Collins / Rico Dowdle pattern recurring.** The v3.3/v3.4 Roster Sanity Gate works for Wednesday reports but breaks on game-day inactives announced 90 min before kickoff. **v3.5 fix:** add a "late-breaking inactives check" — model must state the ISO-8601 time it last confirmed the player's game-day active status; if the file is more than 2 hours before kickoff, the leg must be scratchable or hedged.

## What hit — shapes that confirmed under v3.4

### Volume RB rush-yards OVER on winning side (Claude 5-for-5)
Judkins 70>55.5, Gibbs 99>65.5, K.Williams 88>68.5, Henry 89>85.5, Cook 154>60.5. The shape works when the LINE is a role floor and NOT at the hook. All five lines were ≥ 5 yards below the player's 2026 role average.

### Workhorse rush-attempt OVER (Gemini 2-for-2)
Skattebo 20>15.5, McCaffrey 15>13.5. More reliable than rush-yards because it's less hookable.

### Favorite ML + Under total on defensive matchups (Claude 6-for-6)
G2 BUF+U51.5, G3 CLE+U39.5, G5 IND+U44.5, G6 KC+U46.5, G7 NYG+U41.5, G10 JAX+U41.5. Line pre-game total ≤ 46. Game script: controlled winner, both defenses have real snap data.

### WR1 rec-yards OVER vs weakened secondary (Gemini)
Chase 98>72.5 (PIT missing Porter + Dean), McBride 75>58.5. Shape requires named-injury edge on the matchup.

### Multi-WR reception SGP on target-funnel games
Flowers O4.5 + Lamb O5.5 (both hit at 5/7, +225 odds). Both teams' WR1 with 25%+ target share.

## Model-specific iteration notes for W4

### Claude (Claude Code) — needs most prompt-side work

**STOP:**
- Hook-margin player-prop OVERs when the line is within 1 yd of role average.
- Ceiling-anchored passing-yards OVERs on either side (losing OR winning — Mahomes O245.5 missed in a game KC won easily because the pass game wasn't needed).
- Game-level ML+Under SGP on games with pre-game total ≥ 48 (five losses in W3 on this filter).
- Trusting Wednesday roster snapshot without a Sunday morning inactives recheck.

**KEEP:**
- Volume RB rush-yards OVER on projected winner when line is a role floor (not hook).
- Favorite ML + Under total SGP on games with pre-game total ≤ 46.
- Team Total OVER on dominant projected winner (BAL 34 vs TT 27.5).

### Gemini (web app) — honesty + script-awareness

**STOP:**
- Self-record fabrication. W3G1 said "1-1 -$1.80 / 7-7 -$9.36." G13 said "8-7-0 +$12.10 / 15-15-0 +$34.35." Both can't be true. v3.5 enforces: model must read `research/bet-ledger.html` and quote the exact P/L row for its own prior weeks.
- Reception OVERs on receivers whose QB isn't volume-passing (filter: pre-game total ≥ 46 and projected pass volume ≥ 32 attempts).
- Backing big home favorites laying ≥ 6.5 (confirmed again: KC -10.5 miss, WSH -3.5 miss by hook).

**KEEP:**
- Workhorse rush-attempt OVER (more reliable than yards).
- Dog spread covers on inflated numbers (ARI +8.5, MIN -2.5, NYG -2.5 all hit).
- WR1 rec-yards OVER vs secondary with named CB injuries.

### ChatGPT (Codex) — structural, not prompt-side

Codex compressed-stub pattern recurred in W3 (W2 was mid-batch expirations). The v3.4 prompt is fine; the tool invocation is the problem. Operator-side fixes:

1. Run Codex sequentially — one `/game-NN` prompt at a time, with explicit `write && confirm` after each.
2. For W4, if Codex still can't throughput 16 games, hand half to Claude Code (sequential), half to Codex. Document the handoff in `Docs/ops/AI-WORKFLOW.md`.
3. Grade Codex W3 as "filed stubs, no gradable selections" — $0 stake, $0 P/L. Do not inflate the loss column with hypothetical bets.

## v3.5 prompt deltas (ready for W4)

See `Docs/2026/iteration-system.md` section "v3.5" (to be added). Summary of hard-rule changes vs v3.4:

1. **Hook-margin gate:** no player-prop OVER where line is within 1 yd of role 2026 YPG average. Use rush-attempts OVER instead when available.
2. **Script-aware receiver filter:** no reception OVER on winning-side WR1 if pre-game total ≤ 44 AND projected pass attempts ≤ 30.
3. **Game-day inactives timestamp:** model must state the ISO-8601 time of its last inactives check. If > 2 hours before kickoff, flag the player leg as "pre-inactives unconfirmed" and reduce stake by 50% OR skip.
4. **Game-level Under filter:** ML+Under SGP only when pre-game total ≤ 46. Above that, use team total OVER on the winner instead.
5. **Self-record quote-or-report-unknown:** model must either quote its own P/L row verbatim from `research/bet-ledger.html` or write "unknown, not fabricated." No synthesizing numbers.
6. **Codex throughput note (operator):** sequential single-game execution with disk confirmation per game, OR hand lanes to Claude Code.

## Website / Sports_Pages work

Updates needed (hand to Codex as a build brief):
- `assets/nfl-data.js` S2W3 block: 16 games, every graded ticket with per-model row.
- `Sports_Pages/*.html` for all 16 W3 games: fill in final scores + per-model graded picks (currently only `game-01-falcons-packers.html` is done).
- `bet-database.html`: refresh.
- Site deploy via GitHub Pages after Codex commits.

See `Docs/ops/CODEX_W3_BUILD_BRIEF.md` for the exact handoff.
