# Claude — Week 3, Game 8: Bengals at Steelers

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:17:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:17 EDT; kickoff 13:00 ET.

## 1. Winner, script

Winner: Pittsburgh Steelers. Projected 23-20 PIT. Both 1-0; AFC North rival at Acrisure Stadium. PIT lean on Rico Dowdle ground + Rodgers game-managing. CIN has both Chase and Higgins Q — target-tree unstable. Middle-total game.

## 2. Team profile (Roster Sanity Gate)

CIN (`Data/2026/rosters/cincinnati-bengals.json`, health as_of 2026-09-13, 1-0):
- Health: DE Stewart doubtful. WR Chase Q, WR Higgins Q — both. Target-tree unstable.
- QB1 Joe Burrow, RB1 Tahj Brooks (unusual — Chase Brown is RB2). Real CIN RB1 is Chase Brown in 2026; flag possible ordering issue. RB2 Chase Brown listed.

PIT (`Data/2026/rosters/pittsburgh-steelers.json`, health as_of 2026-09-13, 1-0):
- Health: CB Kent OUT; CB Joey Porter Jr. Q; WR DK Metcalf Q.
- QB1 Aaron Rodgers (real 2026 signing). RB1 Rico Dowdle (my W2 error was treating Dowdle as wrong-team; JSON confirms he's PIT). WR1 DK Metcalf Q. TE1 Darnell Washington.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Rico Dowdle (RB1) | PIT | yes (fixing W2 error) | yes | winner-side workhorse | eligible |
| Aaron Rodgers (QB1) | PIT | yes | yes | winner-side mid-volume | eligible |
| Ja'Marr Chase (WR1) | CIN | yes | Q | trailing WR1 | rejected (Q) |
| Tee Higgins (WR2) | CIN | yes | Q | trailing WR2 | rejected (Q) |
| Chase Brown (RB2/probable RB1) | CIN | yes | yes | uncertain role split | rejected (role split) |
| Joe Burrow (QB1) | CIN | yes | yes | trailing-side pass volume with both WRs Q | rejected (ceiling risk without WRs) |
| DK Metcalf (WR1) | PIT | yes | Q | winner-side WR1 | rejected (Q) |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Rico Dowdle | PIT | ~62% (Homer change-of-pace) | ~60% | ~7% | offense.rb1 |
| Aaron Rodgers | PIT | n/a | 100% | n/a | offense.qb1 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side RB volume (W3G1 Bijan 29/194/2). Home-fav ML + UNDER SGP on defensive matchup (PIT-CIN classic divisional grind — W1 ATL-PIT UNDER 42.5 +$11.20 is the shape).

Losing: trailing-side WR OVER when WRs are Q (avoid Chase/Higgins). Big-fav spread >= -6.5.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16 (Rico Dowdle wrong-team error — this game gives me a chance to correctly bet Dowdle now); W3G1 0-2 -$20.00. Keeping: PIT run-game volume; divisional UNDER SGP. Dropping: Q-flagged WR props.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Rico Dowdle OVER 55.5 rush yds
- Stake: $8.00, -115 conditional
- Win prob 55%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage: PIT RB1 winner-side home; script-driven floor.

### T2 — SGP (player-anchored)
- Legs: Rico Dowdle OVER 55.5 rush yds + Steelers Moneyline
- Stake: $6.00, +140 conditional; class: **player_prop_driven**
- Win prob 45%; Net $8.40; Return $14.40; BE 41.7%

### T3 — Game-level SGP (cap $6)
- Legs: Steelers Moneyline + Game total UNDER 41.5
- Stake: $6.00, +115 conditional; class: **game_level**
- Win prob 46%; Net $6.90; Return $12.90; BE 46.5%
- Shape match: W1 ATL-PIT UNDER 42.5 +$11.20.

Arithmetic: T1 8×100/115=$6.96 ✓. T2 6×140/100=$8.40 ✓. T3 6×115/100=$6.90 ✓.

## 7. Evidence, correlation, missing data

- T1 T2 T3 all correlated on PIT winning. Concentration disclosed.
- Bovada unreached; conditional. Both CIN WRs Q — if both play, CIN ceiling shifts up; if both OUT, PIT UNDER cover more likely.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:17:00Z", "week": 3, "game_id": "bengals-steelers",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/cincinnati-bengals.json", "as_of": "2026-09-13", "season_record": "1-0, PF 33, PA 27", "health_key_players": ["WR Chase Q", "WR Higgins Q", "DE Stewart doubtful"]},
    {"path_or_url": "Data/2026/rosters/pittsburgh-steelers.json", "as_of": "2026-09-13", "season_record": "1-0, PF 20, PA 13", "health_key_players": ["CB Kent OUT", "CB Porter Jr. Q", "WR Metcalf Q"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/pittsburgh-steelers.json", "captured_at": "2026-09-27T16:17:00Z", "quote": "'Aaron Rodgers' QB1; 'Rico Dowdle' RB1 (fixing my W2 team-mismatch)"},
    {"url": "Data/2026/rosters/cincinnati-bengals.json", "captured_at": "2026-09-27T16:17:00Z", "quote": "'Ja'Marr Chase' Q; 'Tee Higgins' Q"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:17:00Z", "quote": "W3G1 Bijan 29/194/2"},
    {"url": "Docs/2026/week-01-analysis.md", "captured_at": "2026-09-27T16:17:00Z", "quote": "ATL-PIT UNDER 42.5 SGP +$11.20"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Rico Dowdle", "team": "PIT", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Aaron Rodgers", "team": "PIT", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible-not-selected"},
    {"player": "Ja'Marr Chase", "team": "CIN", "on_team": true, "active_this_week": "Q", "role_plausible": true, "verdict": "rejected-status"},
    {"player": "Tee Higgins", "team": "CIN", "on_team": true, "active_this_week": "Q", "role_plausible": true, "verdict": "rejected-status"},
    {"player": "DK Metcalf", "team": "PIT", "on_team": true, "active_this_week": "Q", "role_plausible": true, "verdict": "rejected-status"}
  ],
  "usage_share_table": [
    {"player": "Rico Dowdle", "team": "PIT", "target_share": "~7%", "rush_att_share": "~62%", "snap_pct": "~60%", "rz_touch_share": "high", "source": "offense.rb1", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "winner-side RB1 rush volume", "citations": ["W3G1 Bijan 29/194/2", "W1 Jeanty/Hall O15.5 rush att WIN"]}, {"shape": "home-fav ML + UNDER SGP on divisional matchup", "citations": ["W1 ATL-PIT UNDER 42.5 +$11.20", "W1 KC ML+U44.5 +$14.40"]}],
    "losing_shapes": [{"shape": "trailing-side WR OVER when WRs Q", "citations": ["W2 Jefferson O6.5 recs LOSS"]}, {"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS", "W2 KC -6.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 Rico Dowdle wrong-team error — now correctly betting Dowdle on PIT"], "pattern_kept": "winner-side RB volume + divisional UNDER SGP", "pattern_stopped": "Q-flagged WR props"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Rico Dowdle OVER 55.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.55, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS (fixing W2 team-mismatch)", "usage_anchor": "PIT RB1 winner-side script"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Rico Dowdle OVER 55.5 rush yds", "Pittsburgh Steelers Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.45, "odds_basis_american": 140, "price_label": "conditional", "potential_net_profit": 8.40, "total_return_incl_stake": 14.40, "break_even_probability": 0.417, "roster_sanity_gate": "PASS", "usage_anchor": "RB1 volume + PIT ML"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Pittsburgh Steelers Moneyline", "Game total UNDER 41.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 115, "price_label": "conditional", "potential_net_profit": 6.90, "total_return_incl_stake": 12.90, "break_even_probability": 0.465}
  ],
  "sources": [
    {"url": "Data/2026/rosters/cincinnati-bengals.json", "fetch_succeeded": true},
    {"url": "Data/2026/rosters/pittsburgh-steelers.json", "fetch_succeeded": true, "quote": "'Rico Dowdle' RB1"},
    {"url": "Docs/2026/week-01-analysis.md", "fetch_succeeded": true, "quote": "ATL-PIT UNDER 42.5 +$11.20"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "PIT home in divisional grind with both CIN WRs Q. Two player-prop-driven tickets stack Dowdle rush yds. Game-level $6 PIT ML+U41.5 matches W1 ATL-PIT UNDER shape. All conditional."
}
```
