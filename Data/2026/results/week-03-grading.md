# Week 3 2026 — Full Grading Ledger

Source: ESPN box scores (fetched 2026-10-01). Scores file: `Data/2026/results/week-03.json`.

## Totals

| Model | Record | Staked | P/L | ROI | Notes |
|---|---|---|---|---|---|
| Claude (Claude Code) | 15-29-3 | $320.00 | -$98.00 | -30.6% | Three hook losses (-0.5 yd margins) + two roster/DNP voids |
| Gemini (web) | 12-21-2 | $240.00 | -$46.40 | -19.3% | Three player-prop hits + one DNP void (SGP collapsed) |
| ChatGPT (Codex) | 0-0-45 | $0.00 | $0.00 | N/A | Compressed-stub batching: all 45 tickets filed as `conditional` with NULL selections — not gradable. G16 (MNF) did not file. |

**Season 2 running P/L (after W3):**

- Gemini: W1 +$12.10 or +$56.18 (project-ledger discrepancy — Gemini self-reports differed in W3 responses), W2 +$34.35, W3 -$46.40.
- Claude: W1 ~0, W2 -$93.16, W3 -$98.00. **Running: ~ -$191.** Weakest lane.
- ChatGPT: W1 +$38.10 (filed), W2 +$50.99 (filed 4-of-15), W3 $0 (did not functionally file). **Throughput problem is now a two-week pattern.**

## Claude W3 shape-level attribution

### Winning shapes to KEEP (W3 proof)
- **Volume RB rush-yards OVER on projected winner, line < actual role floor:** Judkins 55.5→70 (G3), Gibbs 65.5→99 (G4), K.Williams 68.5→88 (G15), Henry 85.5→89 (G13), Cook 60.5→154 (G2). 5-for-5 on this shape.
- **Game-level favorite ML + Under total SGP on low-scoring defensive matchups:** G2 BUF ML+U51.5 (40 total), G3 CLE ML+U39.5 (39), G5 IND ML+U44.5 (36), G6 KC ML+U46.5 (34), G7 NYG ML+U41.5 (19), G10 JAX ML+U41.5 (41). 6-for-6 — strongest shape in the entire W3 Claude ledger.
- **Team Total OVER on dominant projected winner:** BAL TT O27.5 → 34 (G13).

### Losing shapes to DROP
- **Hook-margin player-prop OVERs (line at exactly N.5 near market median):** Taylor 68.5→68 (G5), McCaffrey 75.5→75 (G11), Barkley 82.5→82 (G16). **Three -0.5 yard losses in one week.** When the line is at the hook, OVER needs a real volume outlier — not just "projected winning side."
- **Ceiling-anchored passing-yards OVERs on trailing offenses:** Lawrence O219.5 → 182 in a 35-6 win (he coasted, trailing side didn't matter — JAX won easy and ran out clock), Mahomes O245.5 inside G6 SGP (KC won easy, didn't need to pass), Mayfield O244.5 → 217 while TB trailed-then-lost. All three ignored the fact that game script determines pass volume regardless of raw QB talent.
- **Roster failures / game-day inactives:** G8 Rico Dowdle OUT (voided $14 of exposure), G9 Jayden Daniels OUT (Mariota started WSH; voided $8). Both were known questionable late-week; Claude filed anyway. **This is the W2 Nico Collins pattern recurring.**
- **Game-level ML + Under on defensive-looking but offensive-popping matchups:** G4 DET ML+U48.5 (55 total), G8 PIT ML+U41.5 (57), G9 WSH ML+U44.5 (64), G11 SF ML+U43.5 (66), G14 LV ML+U42.5 (62). **Five misses on the exact same shape that printed 6-of-6 elsewhere.** The split: UNDER won where both teams scored ≤25; UNDER lost where either team scored 30+. Prompt needs a filter: pre-game total implied by Team Totals < 46 → OVER-trap-safe; ≥ 48 → fade the Under.

## Gemini W3 shape-level attribution

### Winning shapes to KEEP (W3 proof)
- **Workhorse rush-attempt OVER with clear backfield monopoly:** Skattebo O15.5→20 (G7), McCaffrey O13.5→15 (G11). Both hit comfortably — this is more reliable than rush-yards hooks.
- **WR1 receiving yards OVER vs weakened secondary:** Chase O72.5→98 (G8 vs PIT missing CBs), McBride O58.5→75 (G11).
- **Ground-game RB + game Under SGP on low totals:** Pollard O55.5+U38.5 (G7, +220 odds, hit — Pollard 74, total 19).
- **Multi-WR reception SGP on target-funnel games:** Flowers O4.5 + Lamb O5.5 (G13, +225, both hit at 5/7).
- **Dog spread covers on inflated lines:** ARI +8.5 at SF (G11), MIN -2.5 at TB (G12), NYG -2.5 (G7).

### Losing shapes to DROP
- **Reception OVER on receivers whose QB isn't volume-passing in a run-script game:** Shakir O3.5→1 (BUF ran for 154 w/ Cook, Allen threw 204), St. Brown O6.5→4, Kelce O4.5→2, Jefferson O71.5 rec yds→32. **Fade reception props when the opposing D forces a run script or when the game total is < 45.**
- **Hook losses:** Jones Sr. O58.5→58 (G12, -0.5), BAL -3.5 → BAL won by 3 (hook, G13).
- **Big dog +10.5+ on blowout-threat matchups:** MIA +10.5 at KC in a game where MIA was 0-2 and compromised — covered the trap but didn't cover the number.
- **Roster failures:** Walker III and Daniels both DNP on same game (G9); SGP with WSH ML collapsed to a $3.43 single-leg win, but the straight Walker ticket voided for $0.
- **Self-record fabrication:** In G13 ravens-cowboys, Gemini reported Week 1 "8-7 +$12.10" and Week 2 "15-15 +$34.35" — the first number contradicts its own W3G1 response ("1-1 -$1.80"). **Source Honesty cap-to-1/5 continues from W2/W3G1 patterns.** Prompt-side enforcement in v3.5 needed.

## ChatGPT (Codex) W3 structural attribution

Not a reasoning failure — a tooling failure. Codex filed ALL 15 games (02-15) as compressed stubs with `null` selections and `conditional` pricing. These are structurally compliant with "file something" but ungradable because no concrete market was selected. G16 was skipped entirely (MNF).

This is the SAME pattern as W2 mid-batch expirations (filed 4-of-15 that week). **The v3.4 prompt cannot fix a Codex throughput problem.** Operator-side fixes:

- Run Codex sequentially one game at a time with explicit flush-to-disk after each file.
- Reduce Codex's cognitive load by letting Claude Code handle lanes where Codex is throughput-bound.
- Treat "Codex compressed-stub" as a known filing state in the grading rubric — $0 effective stake, filed but ungradable.

## Hook-margin discovery (cross-model)

**Six separate hook losses in W3** (OVER filed, missed by ≤ 1 yd):
- Claude: Taylor 68.5→68, McCaffrey 75.5→75, Barkley 82.5→82
- Gemini: Jones Sr. 58.5→58
- Spread hook: BAL -3.5 (both models), BAL won by 3

This is a signal that the sportsbooks are painting these lines precisely at the hook because they know the models are leaning OVER on volume floors. **v3.5 should force: when the posted line is within 1 yd of the player's 2026 YPG average on the role, DEMAND the model justify why this isn't a hook trap. Preferred alternative: take rush attempts OVER on the same player (which is less hookable).**

## Per-game P/L summary

| Game | Claude P/L | Gemini P/L | Codex P/L |
|---|---|---|---|
| G1 falcons-packers | -$20.00 | -$10.00 (previous ledger: -$10 on Golden SGP) | -$20.00 (previously logged) |
| G2 chargers-bills | -$4.00 | -$20.00 | $0 (stub) |
| G3 panthers-browns | +$2.00 | -$5.00 | $0 (stub) |
| G4 jets-lions | -$4.00 | -$6.00 | $0 (stub) |
| G5 texans-colts | -$14.00 | -$20.00 | $0 (stub) |
| G6 chiefs-dolphins | -$8.00 | -$20.00 | $0 (stub) |
| G7 titans-giants | -$14.00 | +$25.49 | $0 (stub) |
| G8 bengals-steelers | -$6.00 (-$14 of stake voided) | -$5.04 | $0 (stub) |
| G9 seahawks-commanders | -$12.00 ($8 void) | -$6.00 ($14 of stake voided) | $0 (stub) |
| G10 patriots-jaguars | -$8.00 | $0 (did not file) | $0 (stub) |
| G11 cardinals-niners | -$8.00 | +$20.98 | $0 (stub) |
| G12 vikings-buccaneers | -$20.00 | -$8.64 | $0 (stub) |
| G13 ravens-cowboys | +$20.00 | +$17.71 | $0 (stub) |
| G14 raiders-saints | -$8.00 | $0 (did not file) | $0 (stub) |
| G15 rams-broncos | -$4.00 | $0 (did not file) | $0 (stub) |
| G16 eagles-bears | -$20.00 | $0 (did not file) | $0 (not filed) |
| **TOTAL** | **-$98.00** | **-$46.40** | **$0** |

## Online verification pass (2026-10-01)

All 16 final scores cross-verified against CBS Sports Week 3 2026 schedule page (independent of the ESPN scoreboard that produced the primary data). 100% match.

Critical hook-margin stat lines re-verified via secondary ESPN endpoints (player gamelog pages):
- Jonathan Taylor W3 rush yds = **68** (vs HOU, Sept 27). Confirmed. Hook loss on 68.5 line (-0.5).
- Christian McCaffrey W3 = **75** rush yds / **15** attempts (vs ARI, Sept 27). Confirmed. Hook loss on 75.5 line (-0.5); attempts leg (Gemini) hit at 15>13.5.
- Saquon Barkley W3 = **82** rush yds / 15 att (vs CHI, Sept 28). Confirmed. Hook loss on 82.5 line (-0.5).

DNP flags verified:
- Jayden Daniels (WSH) Week 3 vs SEA — DNP confirmed via ESPN gamelog (no Sept 27 entry; last played Sept 20 vs DAL).
- Rico Dowdle (PIT) Week 3 — confirmed OUT (toe) via original Clutchpoints/Bengals injury report cite.
- Kenneth Walker III (SEA) Week 3 — confirmed via original ESPN box-score pull (no entry).

Verification source stack: ESPN scoreboard (primary gameId lookup) → ESPN per-game box score (per-ticket stat lines) → CBS Sports schedule (cross-score verification) → ESPN per-player gamelog (hook-margin verification). All three sources agree. **Grading in `Data/2026/results/week-03-grading.md` is confirmed accurate as of 2026-10-01.**
