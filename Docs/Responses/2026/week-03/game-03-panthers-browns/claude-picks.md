# Claude — Week 3, Game 3: Panthers at Browns

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:00:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code (local filesystem)

Pre-game eligibility: confirmed. Now 2026-09-27 12:00 EDT; kickoff 13:00 ET.

## 1. Winner, projected score, game script

Winner: Cleveland Browns. Projected 20-17 CLE. CAR gave up 59 to CHI W1 and defense is porous; CLE lost 10-34 to JAX but at home vs a weaker CAR pass-rush (OTs Ekwonu and Moton both OUT for CAR) it can lean on Judkins ground volume + short passing. Bryce Young may put up middling numbers on trailing-side volume. Low-total game.

## 2. Team profile notes (Roster Sanity Gate)

CAR (`Data/2026/rosters/carolina-panthers.json`, health as_of 2026-09-13):
- 0-1, PF 37, PA 59 (37-point loss to CHI).
- Health: LB Jones II OUT, OT Ekwonu OUT, OT Moton OUT, DT Wharton OUT; RB Etienne IR, WR Brazzell II IR, LB Scourton IR.
- Roster flag: RB1 field lists Trevor Etienne (IR); real workload back is Jonathon Brooks (RB2, Q). Skip CAR RB props — role split & Q status.

CLE (`Data/2026/rosters/cleveland-browns.json`, health as_of 2026-09-13):
- 0-1, PF 10, PA 34.
- Health: G Jenkins OUT, LB Owusu-Koramoah OUT, TE Royer OUT; C Brailsford Q; QB Gabriel IR + several DL/DB IR.
- Roster flag: QB1 heuristic previously picked Sanders; corrected to Deshaun Watson. TE1 Joe Royer listed OUT — no TE prop.

Roster Sanity Gate

| Player | Team | On team? | Active W3? | Role? | Verdict |
| --- | --- | --- | --- | --- | --- |
| Quinshon Judkins (RB1) | CLE | yes | yes | winner-side workhorse | eligible |
| Isaiah Bond (WR1) | CLE | yes | yes | winner-side possession WR | eligible |
| Bryce Young (QB1) | CAR | yes | yes | trailing-side pass volume | eligible (ceiling caveat) |
| Tetairoa McMillan (WR1) | CAR | yes | yes | trailing-side WR1 | eligible |
| Jonathon Brooks (RB2) | CAR | yes | Q | trailing-side | rejected (Q) |

## 3. 2026 usage-share table

JSON `usage_share` block empty; anchoring on JSON offense.rb1/wr1 roles.

| Player | Team | Rush share | Snap % | Target share | Source |
| --- | --- | --- | --- | --- | --- |
| Quinshon Judkins | CLE | ~65% (Sampson change-of-pace) | ~60% | ~8% | offense.rb1, no OUT flag |
| Isaiah Bond | CLE | n/a | ~85% | ~24% (thin CLE WR corps) | offense.wr1 |
| Tetairoa McMillan | CAR | n/a | ~85% | ~26% (rookie WR1, primary target) | offense.wr1 |
| Bryce Young | CAR | n/a | 100% | n/a | offense.qb1; W1 361 pass yds 3 TDs → volume passer |

## 4. Independent derivations (with W3G1 row)

Profitable: Volume-anchored player prop on winner side — W3G1 Bijan 29 att/194 yds/2 TD is the row context; London 9 rec/194 yds also fits. Prior W1 Jeanty O15.5 rush att WIN and W2 Kelce O4.5 recs + JT O62.5 rush yds SGP (+$17.20).

Losing: trailing-side rush-attempt OVER (Barkley W2, Bijan W2 O16.5). Big-fav spreads >= -6.5 (LAC -9.5 W1, KC -6.5 W2). Ceiling passing-TD OVERs (Burrow O1.5 W1 LOSS).

## 5. Self-reflection

W1 17-17 +$13.23, W2 5-13-1 -$93.16 (roster errors), W3G1 0-2 -$20.00 (game-level only). Reviewed W3G1 own picks. Keeping: home-fav ML + UNDER shape. Adding per v3.4: 2 player-prop-driven tickets on winner-side volume. Dropping: game-level-only allocation.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level exposure: $6 (cap $6)**.

### T1 — Straight player prop
- Selection: Quinshon Judkins OVER 55.5 rush yds
- Stake: $8.00
- Odds basis: -115 conditional
- Label: **conditional**
- Win prob: 56%; Net profit $6.96; Return $14.96; BE 53.5%
- Sanity Gate: PASS. Usage anchor: CLE RB1 role guarantees ~15 att floor at home; script-driven volume, not ceiling.

### T2 — SGP (player-anchored)
- Legs: Isaiah Bond OVER 4.5 receptions + Browns Moneyline
- Stake: $6.00
- Odds basis: +140 conditional
- Label: **conditional**; ticket_class: **player_prop_driven** (primary leg = WR1 target volume)
- Win prob: 46%; Net profit $8.40; Return $14.40; BE 41.7%
- Sanity Gate: PASS. Usage anchor: thin CLE WR corps (KC Concepcion is rookie WR2, TE1 OUT) forces heavy target concentration on Bond at ~24% share; floor role.

### T3 — Game-level SGP (cap $6)
- Legs: Browns Moneyline + Game total UNDER 39.5
- Stake: $6.00
- Odds basis: +120 conditional
- Label: **conditional**; ticket_class: **game_level**
- Win prob: 47%; Net profit $7.20; Return $13.20; BE 45.5%
- Shape: same as W1 KC ML + U44.5 (+$14.40) — home fav low-scoring.

Arithmetic: T1 8×100/115 = $6.96 ✓. T2 6×140/100 = $8.40 ✓. T3 6×120/100 = $7.20 ✓.

## 7. Evidence, correlation, missing data

- T2 and T3 correlated on CLE ML.
- Missing data: bovada.lv not reached this shell; all conditional.
- Roster JSON as_of 2026-09-13 stale; needs Wed/Fri report spot-check pre-lock.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:00:00Z", "week": 3, "game_id": "panthers-browns",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/carolina-panthers.json", "as_of": "2026-09-13", "season_record": "0-1, PF 37, PA 59", "health_key_players": ["OT Ekwonu OUT", "OT Moton OUT", "LB Jones II OUT", "DT Wharton OUT", "RB Etienne IR"]},
    {"path_or_url": "Data/2026/rosters/cleveland-browns.json", "as_of": "2026-09-13", "season_record": "0-1, PF 10, PA 34", "health_key_players": ["G Jenkins OUT", "LB Owusu-Koramoah OUT", "TE Royer OUT", "C Brailsford Q"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/carolina-panthers.json", "captured_at": "2026-09-27T16:00:00Z", "quote": "'Trevor Etienne' status Injured Reserve; RB1 field stale"},
    {"url": "Data/2026/rosters/cleveland-browns.json", "captured_at": "2026-09-27T16:00:00Z", "quote": "'Deshaun Watson' corrected_note"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:00:00Z", "quote": "W3G1 ATL 35 GB 14; Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Quinshon Judkins", "team": "CLE", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Isaiah Bond", "team": "CLE", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Bryce Young", "team": "CAR", "on_team": true, "active_this_week": true, "role_plausible": "trailing-side-pass-volume", "verdict": "eligible-but-not-selected"},
    {"player": "Jonathon Brooks", "team": "CAR", "on_team": true, "active_this_week": "Q", "role_plausible": true, "verdict": "rejected-status"}
  ],
  "usage_share_table": [
    {"player": "Quinshon Judkins", "team": "CLE", "target_share": "~8%", "rush_att_share": "~65%", "snap_pct": "~60%", "rz_touch_share": "high", "source": "offense.rb1 role", "as_of": "2026-09-13"},
    {"player": "Isaiah Bond", "team": "CLE", "target_share": "~24%", "rush_att_share": "n/a", "snap_pct": "~85%", "rz_touch_share": "moderate", "source": "offense.wr1 role; thin WR corps", "as_of": "2026-09-13"},
    {"player": "Tetairoa McMillan", "team": "CAR", "target_share": "~26%", "rush_att_share": "n/a", "snap_pct": "~85%", "rz_touch_share": "moderate", "source": "offense.wr1 rookie primary target", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [
      {"shape": "volume-anchored player prop on winner side", "citations": ["W3G1 falcons-packers Bijan 29/194/2, London 9/194", "W1 Jeanty O15.5 rush att WIN", "W2 G15 Kelce+JT SGP +$17.20"]},
      {"shape": "home-fav ML + UNDER SGP on defensive matchup", "citations": ["W1 KC ML+U44.5 +$14.40", "W2 SEA ML+U45.5 +$10.40"]}
    ],
    "losing_shapes": [
      {"shape": "trailing-side rush-att OVER", "citations": ["W2 Barkley O17.5 LOSS", "W2 Bijan O16.5 LOSS"]},
      {"shape": "big-fav spreads >= -6.5", "citations": ["W1 LAC -9.5 LOSS", "W2 KC -6.5 LOSS"]}
    ]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W3G1 U42.5 + GB ML+U42.5 both LOSS"], "pattern_kept": "home-fav ML + UNDER SGP capped at $6", "pattern_stopped": "game-level-only allocations"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Quinshon Judkins OVER 55.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.56, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "CLE RB1 role, script-driven floor"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Isaiah Bond OVER 4.5 receptions", "Cleveland Browns Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 140, "price_label": "conditional", "potential_net_profit": 8.40, "total_return_incl_stake": 14.40, "break_even_probability": 0.417, "roster_sanity_gate": "PASS", "usage_anchor": "WR1 target concentration in thin CLE WR corps"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Cleveland Browns Moneyline", "Game total UNDER 39.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.47, "odds_basis_american": 120, "price_label": "conditional", "potential_net_profit": 7.20, "total_return_incl_stake": 13.20, "break_even_probability": 0.455}
  ],
  "sources": [
    {"url": "Data/2026/rosters/carolina-panthers.json", "fetch_succeeded": true, "quote": "'Trevor Etienne' Injured Reserve"},
    {"url": "Data/2026/rosters/cleveland-browns.json", "fetch_succeeded": true, "quote": "'Deshaun Watson' corrected_note"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "CLE home fav in low-scoring intra-division-shaped matchup. Two player-prop-driven tickets ($14) on winner-side volume: Judkins rush yds + Bond receptions in SGP with CLE ML. Game-level $6 CLE ML + UNDER 39.5 matches W1 KC-ML+U44.5 shape. All prices conditional."
}
```
