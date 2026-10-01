# Claude — Week 3, Game 9: Seahawks at Commanders

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:20:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:20 EDT; kickoff 13:00 ET.

## 1. Winner, script

Winner: Washington Commanders. Projected 24-17 WAS. Home team; Jayden Daniels dual-threat volume vs a depleted SEA offense (QB Sam Darnold listed simultaneously as QB1 AND on OUT-doubtful list in the SEA JSON, plus RB Charbonnet OUT, WR Horton OUT, TE Kallerup OUT, S Emmanwori OUT, DE Morris OUT, plus RB Zach Charbonnet OUT twice — SEA is undermanned).

## 2. Team profile (Roster Sanity Gate)

SEA (`Data/2026/rosters/seattle-seahawks.json`, health as_of 2026-09-13, 1-0):
- **JSON hazard flagged**: QB1 field lists Sam Darnold, but health_snapshot.out ALSO lists 'QB Sam Darnold [doubtful]'. Contradictory. If Darnold is doubtful, backup (Milroe also OUT!) may play. Skip all SEA QB props.
- **JSON hazard flagged**: RB1 Jadarian Price is a backup name; RB2 Charbonnet listed OUT. Real SEA RB1 in 2026 was Zach Charbonnet. Backfield unclear; skip SEA RB props.
- WR1 Jaxon Smith-Njigba — reliable name; WR2 Rashid Shaheed (real 2026 signing plausible). TE1 Elijah Arroyo.

WAS (`Data/2026/rosters/washington-commanders.json`, health as_of 2026-09-13, 0-1):
- Health: DE Armstrong suspension, DE Wise OUT.
- QB1 Jayden Daniels (verified). RB1 Rachaad White Q, RB2 also Q — split backfield uncertain, skip WAS RB.
- WR1 Stefon Diggs (plausible 2026 signing). WR2 Dyami Brown.
- TE1 Quentin Moore IR — skip WAS TE.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Jayden Daniels (QB1) | WAS | yes | yes | winner-side dual-threat, structural QB rush role | eligible |
| Stefon Diggs (WR1) | WAS | yes | yes | winner-side WR1 | eligible |
| Jaxon Smith-Njigba (WR1) | SEA | yes | yes | trailing-side WR1 (~26% target share) | eligible (possession floor) |
| SEA QB1 field | SEA | Darnold contradiction | uncertain | uncertain | rejected (JSON contradiction) |
| SEA RB1 field | SEA | Price backup label | uncertain | uncertain | rejected |
| WAS RB1/2 | WAS | both Q | Q | uncertain split | rejected (status/role) |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Jayden Daniels | WAS | ~15% (5+ designed QB rushes/game, structural) | 100% | n/a | offense.qb1 dual-threat |
| Stefon Diggs | WAS | n/a | ~90% | ~25% | offense.wr1 |
| Jaxon Smith-Njigba | SEA | n/a | ~90% | ~26% | offense.wr1 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side QB rush yds is a floor role for dual-threat QBs (Daniels). W3G1 Bijan/London volume prints on winner side. Possession-WR floor on trailing side (JSN qualifies under v3.4).

Losing: trailing-side rush-att OVER; big-fav spread >= -6.5.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16; W3G1 0-2 -$20.00. Keeping: dual-threat QB rush yds (structural role floor); winner-side WR floor. Dropping: SGPs with unstable-target-tree WRs.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Jayden Daniels OVER 42.5 rush yds
- Stake: $8.00, -115 conditional
- Win prob 56%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage: structural dual-threat QB rush role, 5+ designed rushes = floor.

### T2 — SGP (player-anchored)
- Legs: Stefon Diggs OVER 5.5 receptions + Commanders Moneyline
- Stake: $6.00, +150 conditional; class: **player_prop_driven**
- Win prob 44%; Net $9.00; Return $15.00; BE 40.0%
- Gate PASS. Usage: WAS WR1 ~25% target share, home-fav script.

### T3 — Game-level SGP (cap $6)
- Legs: Commanders Moneyline + Game total UNDER 44.5
- Stake: $6.00, +115 conditional; class: **game_level**
- Win prob 46%; Net $6.90; Return $12.90; BE 46.5%

Arithmetic: T1 8×100/115=$6.96 ✓. T2 6×150/100=$9.00 ✓. T3 6×115/100=$6.90 ✓.

## 7. Evidence, correlation, missing data

- T2 and T3 correlated on WAS ML. Bovada unreached; all conditional. SEA JSON has multiple structural errors flagged.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:20:00Z", "week": 3, "game_id": "seahawks-commanders",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["SEA JSON lists Sam Darnold as QB1 AND on health_snapshot.out doubtful — contradiction, skipped", "SEA RB1 field lists Jadarian Price (backup); Charbonnet listed OUT — backfield unclear, skipped", "WAS TE1 Quentin Moore listed IR"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/seattle-seahawks.json", "as_of": "2026-09-13", "season_record": "1-0, PF 13, PA 10", "health_key_players": ["QB Darnold doubtful", "WR Horton OUT", "TE Kallerup OUT", "RB Charbonnet OUT", "S Emmanwori OUT"]},
    {"path_or_url": "Data/2026/rosters/washington-commanders.json", "as_of": "2026-09-13", "season_record": "0-1, PF 22, PA 24", "health_key_players": ["DE Armstrong suspension", "DE Wise OUT", "RB White Q", "RB Croskey-Merritt Q", "TE Moore IR"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/seattle-seahawks.json", "captured_at": "2026-09-27T16:20:00Z", "quote": "Darnold in QB1 and in health.out.doubtful — flagged"},
    {"url": "Data/2026/rosters/washington-commanders.json", "captured_at": "2026-09-27T16:20:00Z", "quote": "'Jayden Daniels' QB1"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:20:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Jayden Daniels", "team": "WAS", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Stefon Diggs", "team": "WAS", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Jaxon Smith-Njigba", "team": "SEA", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible-not-selected"},
    {"player": "SEA QB1 field", "team": "SEA", "on_team": true, "active_this_week": "contradiction", "role_plausible": null, "verdict": "rejected-JSON-contradiction"}
  ],
  "usage_share_table": [
    {"player": "Jayden Daniels", "team": "WAS", "target_share": "n/a", "rush_att_share": "~15% structural QB rush", "snap_pct": "100%", "rz_touch_share": "high (QB rush package)", "source": "offense.qb1 dual-threat", "as_of": "2026-09-13"},
    {"player": "Stefon Diggs", "team": "WAS", "target_share": "~25%", "rush_att_share": "n/a", "snap_pct": "~90%", "rz_touch_share": "moderate", "source": "offense.wr1", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "dual-threat QB rush yds floor (structural role)", "citations": ["W3G1 (Penix rushed limited but Daniels/Allen/Hurts all have structural QB rush)", "shape: floor role, not ceiling"]}, {"shape": "winner-side WR1 receptions in home-fav script", "citations": ["W2 Kelce O4.5 recs HIT", "W3G1 London 9/194"]}],
    "losing_shapes": [{"shape": "trailing-side rush-att OVER", "citations": ["W2 Barkley/Bijan O17.5 LOSS"]}, {"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W3G1 game-level-only allocation LOSS"], "pattern_kept": "dual-threat QB rush floor; home-fav WR1 recs", "pattern_stopped": "Q-flagged player props; game-level-only"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Jayden Daniels OVER 42.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.56, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "structural QB rush role, 5+ designed/game"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Stefon Diggs OVER 5.5 receptions", "Washington Commanders Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.44, "odds_basis_american": 150, "price_label": "conditional", "potential_net_profit": 9.00, "total_return_incl_stake": 15.00, "break_even_probability": 0.400, "roster_sanity_gate": "PASS", "usage_anchor": "WR1 ~25% target share"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Washington Commanders Moneyline", "Game total UNDER 44.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 115, "price_label": "conditional", "potential_net_profit": 6.90, "total_return_incl_stake": 12.90, "break_even_probability": 0.465}
  ],
  "sources": [
    {"url": "Data/2026/rosters/seattle-seahawks.json", "fetch_succeeded": true, "quote": "Darnold contradiction flagged"},
    {"url": "Data/2026/rosters/washington-commanders.json", "fetch_succeeded": true, "quote": "'Jayden Daniels' QB1"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "W3G1 Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "WAS home fav vs depleted SEA. Two player-prop-driven tickets on Daniels rush yds (structural floor) + Diggs recs SGP with WAS ML. Game-level $6 WAS ML+U44.5. SEA QB contradiction flagged. All conditional."
}
```
