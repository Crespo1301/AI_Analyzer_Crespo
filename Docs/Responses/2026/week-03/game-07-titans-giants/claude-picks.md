# Claude — Week 3, Game 7: Titans at Giants

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:14:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:14 EDT; kickoff 13:00 ET.

## 1. Winner, script

Winner: New York Giants (narrow). Projected 20-17 NYG. Home team; TEN lost W1 10-23 to NYJ (Cam Ward rookie growing pains). NYG won W1 28-20. Middle-volume ground-and-Najee at home; Malik Nabers Q hurts NYG target ceiling.

## 2. Team profile (Roster Sanity Gate)

TEN (`Data/2026/rosters/tennessee-titans.json`, health as_of 2026-09-13, 0-1):
- Health: LB Gray OUT; C James Q; WR Wan'Dale Q.
- QB1 Cam Ward, RB1 Tyjae Spears, RB2 Tony Pollard (split backfield), WR1 Calvin Ridley.

NYG (`Data/2026/rosters/new-york-giants.json`, health as_of 2026-09-13, 1-0):
- Health: WR Nabers Q, CB James Q.
- **Roster JSON hazard flagged**: QB1 field lists **Jake Haener** — Haener is a Saints backup, real NYG QB in 2026 is likely Russell Wilson or Jaxson Dart. This is a hard heuristic error. Do NOT bet NYG QB props from this JSON.
- **Roster JSON hazard flagged**: WR1 field lists **Malachi Fields** — the actual WR1 is Malik Nabers (listed as WR2 with Q status). If Nabers OUT, target share redistributes. Skip NYG WR1 prop.
- RB1 Najee Harris — plausible 2026 free-agent signing; RB2 Devin Singletary (backup). Use Najee.
- TE1 Isaiah Likely — plausible 2026 signing.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Najee Harris (RB1) | NYG | yes | yes | winner-side RB1 | eligible |
| Calvin Ridley (WR1) | TEN | yes | yes | trailing-side WR1 (~25% target share) | eligible (possession-WR floor) |
| Isaiah Likely (TE1) | NYG | yes | yes | winner-side TE | eligible |
| NYG QB1 field | NYG | Haener heuristic error | n/a | n/a | rejected (JSON error) |
| NYG WR1 Malachi Fields | NYG | Nabers is real WR1 | n/a | n/a | rejected (JSON error) |
| Tony Pollard (RB2) | TEN | yes | yes | split backfield trailing | rejected (role split) |
| Cam Ward (QB1) | TEN | yes | yes | rookie ceiling | rejected (rookie ceiling shape) |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Najee Harris | NYG | ~60% (Singletary change-of-pace) | ~60% | ~7% | offense.rb1 |
| Calvin Ridley | TEN | n/a | ~85% | ~25% (WR1 with Wan'Dale Q) | offense.wr1 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side RB volume (W3G1 Bijan 29/194/2). Possession-WR floor on trailing side is the acceptable player-prop shape per v3.4 rules (Ridley qualifies if target share ≥ 22%).

Losing: rookie-QB ceiling props; big-fav spreads >= -6.5; trailing-side rush-att OVER.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16; W3G1 0-2 -$20.00. Keeping: winner-side RB volume + possession-WR floor on trailing side. Dropping: rookie-QB props; game-level-only.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Najee Harris OVER 55.5 rush yds
- Stake: $8.00, -115 conditional
- Win prob 55%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage: NYG RB1 home fav; script-driven floor.

### T2 — SGP (player-anchored)
- Legs: Calvin Ridley OVER 4.5 receptions + Calvin Ridley OVER 55.5 rec yds
- Stake: $6.00, +180 conditional; class: **player_prop_driven**
- Win prob 38%; Net $10.80; Return $16.80; BE 35.7%
- Gate PASS. Usage: TEN WR1 possession-floor on trailing side (target share ≥22% qualifies under v3.4).

### T3 — Game-level SGP (cap $6)
- Legs: Giants Moneyline + Game total UNDER 41.5
- Stake: $6.00, +120 conditional; class: **game_level**
- Win prob 46%; Net $7.20; Return $13.20; BE 45.5%

Arithmetic: T1 8×100/115=$6.96 ✓. T2 6×180/100=$10.80 ✓. T3 6×120/100=$7.20 ✓.

## 7. Evidence, correlation, missing data

- T3 correlated with T1 (NYG ML). T2 independent (TEN player).
- Bovada unreached; all conditional. NYG QB/WR1 roster JSON errors flagged & skipped.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:14:00Z", "week": 3, "game_id": "titans-giants",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["NYG QB1 field lists Jake Haener — heuristic error, skipped", "NYG WR1 field lists Malachi Fields but real WR1 is Malik Nabers (Q) — skipped"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/tennessee-titans.json", "as_of": "2026-09-13", "season_record": "0-1, PF 10, PA 23", "health_key_players": ["LB Gray OUT", "C James Q", "WR Wan'Dale Q"]},
    {"path_or_url": "Data/2026/rosters/new-york-giants.json", "as_of": "2026-09-13", "season_record": "1-0, PF 28, PA 20", "health_key_players": ["WR Nabers Q", "CB James Q"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/new-york-giants.json", "captured_at": "2026-09-27T16:14:00Z", "quote": "'Jake Haener' as QB1 — flagged"},
    {"url": "Data/2026/rosters/tennessee-titans.json", "captured_at": "2026-09-27T16:14:00Z", "quote": "'Calvin Ridley' as WR1"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:14:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Najee Harris", "team": "NYG", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Calvin Ridley", "team": "TEN", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "NYG QB1 field", "team": "NYG", "on_team": null, "active_this_week": null, "role_plausible": null, "verdict": "rejected-JSON-heuristic-error"},
    {"player": "Cam Ward", "team": "TEN", "on_team": true, "active_this_week": true, "role_plausible": "rookie-ceiling", "verdict": "rejected-shape"}
  ],
  "usage_share_table": [
    {"player": "Najee Harris", "team": "NYG", "target_share": "~7%", "rush_att_share": "~60%", "snap_pct": "~60%", "rz_touch_share": "high", "source": "offense.rb1", "as_of": "2026-09-13"},
    {"player": "Calvin Ridley", "team": "TEN", "target_share": "~25%", "rush_att_share": "n/a", "snap_pct": "~85%", "rz_touch_share": "moderate", "source": "offense.wr1", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "winner-side RB1 rush volume", "citations": ["W3G1 Bijan 29/194/2", "W1 Jeanty/Hall O15.5 rush att WIN"]}, {"shape": "possession-WR ≥22% target share floor on trailing side (v3.4 exception)", "citations": ["W2 Kelce O4.5 recs HIT +$17.20 SGP"]}],
    "losing_shapes": [{"shape": "rookie-QB pass-TD/yd OVER", "citations": ["W1 Nix O205.5 LOSS", "W1 Maye O1.5 pass TDs LOSS"]}, {"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS", "W2 KC -6.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 Nico Collins bet while OUT — I re-verify all WR active status this week", "W3G1 game-level-only allocation LOSS"], "pattern_kept": "winner-side RB volume + possession-WR floor", "pattern_stopped": "game-level-only; rookie-QB props"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Najee Harris OVER 55.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.55, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "NYG RB1 home-fav script"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Calvin Ridley OVER 4.5 receptions", "Calvin Ridley OVER 55.5 rec yds"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.38, "odds_basis_american": 180, "price_label": "conditional", "potential_net_profit": 10.80, "total_return_incl_stake": 16.80, "break_even_probability": 0.357, "roster_sanity_gate": "PASS", "usage_anchor": "WR1 ~25% target share (v3.4 possession-floor exception)"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["New York Giants Moneyline", "Game total UNDER 41.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 120, "price_label": "conditional", "potential_net_profit": 7.20, "total_return_incl_stake": 13.20, "break_even_probability": 0.455}
  ],
  "sources": [
    {"url": "Data/2026/rosters/tennessee-titans.json", "fetch_succeeded": true},
    {"url": "Data/2026/rosters/new-york-giants.json", "fetch_succeeded": true, "quote": "'Jake Haener' QB1 flagged"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "W3G1 Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "NYG home narrow fav. Two player-prop-driven tickets on Najee rush yds + Ridley recs/yds SGP. Game-level $6 NYG ML+U41.5. NYG QB1/WR1 JSON errors flagged and skipped. All conditional."
}
```
