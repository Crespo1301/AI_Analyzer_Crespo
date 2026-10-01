# Claude — Week 3, Game 5: Texans at Colts

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:08:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:08 EDT; kickoff 13:00 ET.

## 1. Winner, script

Winner: Indianapolis Colts. Projected 24-21 IND. Home team; Daniel Jones leans on Jonathan Taylor bell-cow volume. HOU dropped W1 31-36 to BUF (offense fine, defense not); Tank Dell on IR (JSON). IND lost W1 23-41 to BAL. Home, closer matchup, JT is the workhorse — same shape as the W2 Kelce+JT SGP that hit +$17.20.

## 2. Team profile (Roster Sanity Gate)

HOU (`Data/2026/rosters/houston-texans.json`, health as_of 2026-09-13):
- 0-1, PF 31, PA 36. WR Tank Dell IR (major loss). LB Speed OUT.
- QB1 Stroud, RB1 David Montgomery (corrected from heuristic 'Marks'), WR2 Nico Collins (no active flag in JSON but was OUT for W2 per my own error; verify Fri report before locking Collins).

IND (`Data/2026/rosters/indianapolis-colts.json`, health as_of 2026-09-13):
- 0-1, PF 23, PA 41. CB Taylor-Britt suspension; LB Ajiake OUT; TE McKeon Q; WR D.J. Montgomery IR; TE Towt IR; TE Mallory IR.
- QB1 Daniel Jones (corrected — starter per colts.com; Richardson QB2). RB1 Jonathan Taylor bell-cow (heuristic buried #28). WR1 Josh Downs Q.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Jonathan Taylor (RB1) | IND | yes | yes | winner-side bell-cow | eligible |
| Daniel Jones (QB1) | IND | yes | yes | winner-side, mid-volume | eligible |
| Josh Downs (WR1) | IND | yes | Q | trailing/target-share | rejected (Q) |
| C.J. Stroud (QB1) | HOU | yes | yes | trailing-side pass volume (ceiling) | rejected (pass-TD ceiling shape) |
| David Montgomery (RB1) | HOU | yes | yes | trailing-side ceiling | rejected (shape) |
| Nico Collins (WR2) | HOU | yes | uncertain | trailing WR — W2 error recurrence | rejected (status uncertain; not repeating W2 error) |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Jonathan Taylor | IND | ~72% (bell-cow, Giddens change-of-pace) | ~70% | ~9% | offense.rb1 |
| Daniel Jones | IND | n/a | 100% | n/a | offense.qb1 |

## 4. Independent derivations (with W3G1 row)

Profitable: W3G1 Bijan 29/194/2 & London 9/194 as winner-side volume prints (`Docs/2026/week-03-analysis.md`). W2 Kelce+JT O62.5 rush yds SGP +$17.20 (`Docs/2026/week-02-analysis.md`) is the exact same JT shape I'm re-using. W1 Jeanty/Hall rush-att OVERs.

Losing: trailing-side rush OVER (Barkley/Bijan W2). Big-fav spreads >= -6.5. Pass-TD OVER (Burrow W1 LOSS).

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16 (Collins bet while OUT — hard error); W3G1 0-2 -$20.00. Keeping: winner-side RB1 volume (W2 Hall O15.5 hit was the shape). Dropping: player props without JSON gate check (Collins repeat risk).

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Jonathan Taylor OVER 68.5 rush yds
- Stake: $8.00, -115 conditional
- Win prob 58%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage: bell-cow role, script-driven floor at ~17 att × 4.1 YPC.

### T2 — SGP (player-anchored)
- Legs: Jonathan Taylor OVER 68.5 rush yds + Colts Moneyline
- Stake: $6.00, +150 conditional; class: **player_prop_driven**
- Win prob 45%; Net $9.00; Return $15.00; BE 40.0%
- Same JT shape as W2 G15 (+$17.20).

### T3 — Game-level SGP (cap $6)
- Legs: Colts ML + Game total UNDER 44.5
- Stake: $6.00, +120 conditional; class: **game_level**
- Win prob 46%; Net $7.20; Return $13.20; BE 45.5%

Arithmetic: T1 8×100/115=$6.96 ✓. T2 6×150/100=$9.00 ✓. T3 6×120/100=$7.20 ✓.

## 7. Evidence, correlation, missing data

- T1 and T2 both include JT rush yds — correlated. Concentration acknowledged.
- T2 and T3 correlated on IND ML.
- Bovada unreached; all conditional. HOU offense could put up 30+ if Stroud finds Collins — that busts UNDER 44.5.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:08:00Z", "week": 3, "game_id": "texans-colts",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/houston-texans.json", "as_of": "2026-09-13", "season_record": "0-1, PF 31, PA 36", "health_key_players": ["WR Tank Dell IR", "LB Speed OUT", "WR Higgins IR", "OT Braden Smith IR"]},
    {"path_or_url": "Data/2026/rosters/indianapolis-colts.json", "as_of": "2026-09-13", "season_record": "0-1, PF 23, PA 41", "health_key_players": ["LB Ajiake OUT", "CB Taylor-Britt suspension", "WR Downs Q", "TE McKeon Q", "WR Montgomery IR"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/indianapolis-colts.json", "captured_at": "2026-09-27T16:08:00Z", "quote": "'Jonathan Taylor' bell-cow; 'Daniel Jones' confirmed Week 1 starter"},
    {"url": "Docs/2026/week-02-analysis.md", "captured_at": "2026-09-27T16:08:00Z", "quote": "Kelce O4.5 recs + JT O62.5 rush yds SGP +$17.20"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:08:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Jonathan Taylor", "team": "IND", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Daniel Jones", "team": "IND", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible-not-selected"},
    {"player": "Josh Downs", "team": "IND", "on_team": true, "active_this_week": "Q", "role_plausible": true, "verdict": "rejected-status"},
    {"player": "Nico Collins", "team": "HOU", "on_team": true, "active_this_week": "uncertain", "role_plausible": true, "verdict": "rejected-repeat-W2-risk"}
  ],
  "usage_share_table": [
    {"player": "Jonathan Taylor", "team": "IND", "target_share": "~9%", "rush_att_share": "~72%", "snap_pct": "~70%", "rz_touch_share": "high", "source": "offense.rb1 bell-cow", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "volume-anchored winner-side RB rush prop", "citations": ["W3G1 Bijan 29/194/2", "W2 G15 Kelce+JT O62.5 rush yds SGP +$17.20", "W1 Jeanty/Hall O15.5 rush att WIN"]}, {"shape": "home-fav ML+UNDER SGP", "citations": ["W1 KC ML+U44.5 +$14.40"]}],
    "losing_shapes": [{"shape": "trailing-side rush-att OVER", "citations": ["W2 Barkley/Bijan O17.5 LOSS"]}, {"shape": "big-fav spreads >= -6.5", "citations": ["W1 LAC -9.5 LOSS", "W2 KC -6.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 Nico Collins bet while OUT — hard error", "W2 G6 Breece Hall O15.5 rush att HIT"], "pattern_kept": "winner-side RB1 volume prop; same JT shape as W2 G15", "pattern_stopped": "player-prop OVER without JSON gate check"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Jonathan Taylor OVER 68.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.58, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "bell-cow role guarantees 17+ att floor"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Jonathan Taylor OVER 68.5 rush yds", "Indianapolis Colts Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.45, "odds_basis_american": 150, "price_label": "conditional", "potential_net_profit": 9.00, "total_return_incl_stake": 15.00, "break_even_probability": 0.400, "roster_sanity_gate": "PASS", "usage_anchor": "same JT shape as W2 Kelce+JT SGP +$17.20"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Indianapolis Colts Moneyline", "Game total UNDER 44.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 120, "price_label": "conditional", "potential_net_profit": 7.20, "total_return_incl_stake": 13.20, "break_even_probability": 0.455}
  ],
  "sources": [
    {"url": "Data/2026/rosters/houston-texans.json", "fetch_succeeded": true},
    {"url": "Data/2026/rosters/indianapolis-colts.json", "fetch_succeeded": true, "quote": "'Jonathan Taylor' bell-cow; 'Daniel Jones' confirmed starter"},
    {"url": "Docs/2026/week-02-analysis.md", "fetch_succeeded": true, "quote": "Kelce+JT SGP +$17.20"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "IND home, JT bell-cow the anchor. Two player-prop-driven tickets stack JT rush yds (straight + SGP with IND ML) totaling $14; game-level $6 IND ML+U44.5. Same shape as W2 Kelce+JT +$17.20 hit. All conditional."
}
```
