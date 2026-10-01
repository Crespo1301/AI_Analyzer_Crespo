# Claude — Week 3, Game 15: Rams at Broncos (SNF)

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:44:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:44 EDT; kickoff 20:20 ET.

## 1. Winner, script

Winner: Los Angeles Rams. Projected 24-17 LAR. Both 0-1; LAR lost W1 7-27 (offense stalled), DEN lost W1 10-31 (much worse). DEN home but Bo Nix in Year 2 struggling. Stafford-Puka combo revives; Kyren Williams workhorse.

## 2. Team profile (Roster Sanity Gate)

LAR (`Data/2026/rosters/los-angeles-rams.json`, health as_of 2026-09-13, 0-1):
- Health: WR Atwell OUT, WR Daniels OUT, TE Klare OUT, G Murray OUT; TE Allen Q, S Curl Q, CB McPhearson Q.
- QB1 Matthew Stafford, RB1 Kyren Williams, WR1 Puka Nacua, WR2 Konata Mumpfield (Cooper Kupp gone in 2026), TE1 Terrance Ferguson.

DEN (`Data/2026/rosters/denver-broncos.json`, health as_of 2026-09-13, 0-1):
- Health: LB Cooper OUT, G Gargiulo OUT.
- QB1 Bo Nix. RB1 RJ Harvey (rookie).
- **JSON hazard flagged**: WR1 field lists **Lil'Jordan Humphrey** — real DEN WR1 is Courtland Sutton. Humphrey is depth. Skip DEN WR1 prop.
- WR2 Troy Franklin (2nd-year real player), TE1 Evan Engram.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Kyren Williams (RB1) | LAR | yes | yes | winner-side workhorse (RB1 confirmed 2026) | eligible |
| Puka Nacua (WR1) | LAR | yes | yes | winner-side WR1 target hog (Kupp gone) | eligible |
| Matthew Stafford (QB1) | LAR | yes | yes | winner-side pass volume | eligible-not-selected |
| Bo Nix (QB1) | DEN | yes | yes | Year-2 trailing side | rejected (ceiling shape) |
| DEN WR1 field | DEN | Humphrey heuristic error | uncertain | uncertain | rejected (JSON error) |
| Evan Engram (TE1) | DEN | yes | yes | trailing TE possession | eligible-not-selected |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Kyren Williams | LAR | ~72% (bell-cow with Corum change-of-pace) | ~70% | ~9% | offense.rb1 |
| Puka Nacua | LAR | n/a | ~90% | ~30% (Kupp gone, target hog) | offense.wr1 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side bell-cow (W3G1 Bijan 29/194/2). WR1 elevated target share (W3G1 London 9/194 — Pitts absorbed some but London had 30%+ share).

Losing: 2nd-year QB ceiling props (Nix W1 O205.5 LOSS is the exact row). Big-fav spread >= -6.5.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16; W3G1 0-2 -$20.00. Keeping: winner-side bell-cow + WR1 target hog. Dropping: Bo Nix year-2 props.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Kyren Williams OVER 68.5 rush yds
- Stake: $8.00, -115 conditional
- Win prob 57%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage: LAR RB1 bell-cow, 17+ carries at 4.1 YPC floor.

### T2 — SGP (player-anchored)
- Legs: Puka Nacua OVER 5.5 receptions + Rams Moneyline
- Stake: $6.00, +140 conditional; class: **player_prop_driven**
- Win prob 45%; Net $8.40; Return $14.40; BE 41.7%
- Gate PASS. Usage: WR1 ~30% target share (Kupp gone concentrates targets).

### T3 — Game-level SGP (cap $6)
- Legs: Rams Moneyline + Game total UNDER 42.5
- Stake: $6.00, +140 conditional; class: **game_level**
- Win prob 44%; Net $8.40; Return $14.40; BE 41.7%
- Both offenses under-performing; Bo Nix Year-2 growing pains. W1 combined 17 pts total across both losses.

Arithmetic: T1 8×100/115=$6.96 ✓. T2 6×140/100=$8.40 ✓. T3 6×140/100=$8.40 ✓.

## 7. Evidence, correlation, missing data

- T2 and T3 correlated on LAR ML. Bovada unreached; conditional. DEN WR1 JSON error flagged.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:44:00Z", "week": 3, "game_id": "rams-broncos",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["DEN WR1 lists Lil'Jordan Humphrey — real WR1 is Courtland Sutton, skipped"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/los-angeles-rams.json", "as_of": "2026-09-13", "season_record": "0-1, PF 7, PA 27", "health_key_players": ["WR Atwell OUT", "WR Daniels OUT", "TE Klare OUT", "G Murray OUT"]},
    {"path_or_url": "Data/2026/rosters/denver-broncos.json", "as_of": "2026-09-13", "season_record": "0-1, PF 10, PA 31", "health_key_players": ["LB Cooper OUT", "G Gargiulo OUT"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/los-angeles-rams.json", "captured_at": "2026-09-27T16:44:00Z", "quote": "'Kyren Williams' RB1; 'Puka Nacua' WR1"},
    {"url": "Data/2026/rosters/denver-broncos.json", "captured_at": "2026-09-27T16:44:00Z", "quote": "'Lil\\'Jordan Humphrey' WR1 flagged"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:44:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Kyren Williams", "team": "LAR", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Puka Nacua", "team": "LAR", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Bo Nix", "team": "DEN", "on_team": true, "active_this_week": true, "role_plausible": "year-2-ceiling", "verdict": "rejected-shape"},
    {"player": "DEN WR1 field", "team": "DEN", "on_team": null, "active_this_week": null, "role_plausible": null, "verdict": "rejected-JSON-error"}
  ],
  "usage_share_table": [
    {"player": "Kyren Williams", "team": "LAR", "target_share": "~9%", "rush_att_share": "~72%", "snap_pct": "~70%", "rz_touch_share": "high", "source": "offense.rb1 bell-cow", "as_of": "2026-09-13"},
    {"player": "Puka Nacua", "team": "LAR", "target_share": "~30%", "rush_att_share": "n/a", "snap_pct": "~90%", "rz_touch_share": "high", "source": "offense.wr1 (Kupp gone)", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "winner-side bell-cow rush yds", "citations": ["W3G1 Bijan 29/194/2"]}, {"shape": "winner-side WR1 target-share elevation", "citations": ["W3G1 London 9/194"]}],
    "losing_shapes": [{"shape": "2nd-year QB pass-TD/yd OVER", "citations": ["W1 Nix O205.5 LOSS", "W1 Maye O1.5 LOSS"]}, {"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W3G1 game-level-only allocation LOSS", "W1 Nix pass-yds OVER LOSS — avoiding DEN QB props here"], "pattern_kept": "winner-side bell-cow + WR1 target hog", "pattern_stopped": "2nd-year QB ceiling props"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Kyren Williams OVER 68.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.57, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "LAR RB1 bell-cow, 17+ carry floor"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Puka Nacua OVER 5.5 receptions", "Los Angeles Rams Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.45, "odds_basis_american": 140, "price_label": "conditional", "potential_net_profit": 8.40, "total_return_incl_stake": 14.40, "break_even_probability": 0.417, "roster_sanity_gate": "PASS", "usage_anchor": "WR1 ~30% target share, Kupp gone"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Los Angeles Rams Moneyline", "Game total UNDER 42.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.44, "odds_basis_american": 140, "price_label": "conditional", "potential_net_profit": 8.40, "total_return_incl_stake": 14.40, "break_even_probability": 0.417}
  ],
  "sources": [
    {"url": "Data/2026/rosters/los-angeles-rams.json", "fetch_succeeded": true, "quote": "'Kyren Williams' RB1"},
    {"url": "Data/2026/rosters/denver-broncos.json", "fetch_succeeded": true, "quote": "'Lil\\'Jordan Humphrey' WR1 flagged"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "LAR road narrow fav SNF. Two player-prop-driven tickets on Kyren rush yds + Puka recs SGP with LAR ML. Game-level $6 LAR ML+U42.5. DEN WR1 JSON error flagged. All conditional."
}
```
