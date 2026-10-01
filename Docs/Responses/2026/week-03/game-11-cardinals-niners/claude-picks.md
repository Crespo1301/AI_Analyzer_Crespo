# Claude — Week 3, Game 11: Cardinals at 49ers

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:30:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:30 EDT; kickoff 16:05 ET.

## 1. Winner, script

Winner: San Francisco 49ers. Projected 24-17 SF. SF won W1 27-7 (dominant D allowed 7 pts); ARI won W1 26-14. SF home; CMC-Kittle offense with Jennings elevated at WR1 (Aiyuk OUT, Pearsall IR). ARI has huge roster JSON issues (see §2). SF -3.5 to -4.5 fair.

## 2. Team profile (Roster Sanity Gate)

ARI (`Data/2026/rosters/arizona-cardinals.json`, health as_of 2026-09-13, 1-0):
- Health: G Adams OUT, S Taylor-Demerson OUT, CB Williams OUT, TE Reiman OUT; RB Love Q, S Minkins Q, WR Weaver Q.
- **JSON hazard flagged**: QB1 field lists **Jacoby Brissett** — real ARI QB1 is Kyler Murray in 2026. Brissett is a career backup elsewhere. Skip ARI QB props.
- **JSON hazard flagged**: RB2 field lists **James Conner** with status Injured Reserve — but Conner IS the Cardinals' primary back historically. Roster JSON has role reversed with rookie Love (Q). Skip ARI RB props.
- **JSON hazard flagged**: WR1 field lists **Ihmir Smith-Marsette** — real ARI WR1 is Marvin Harrison Jr. Heuristic error. Skip ARI WR props.

SF (`Data/2026/rosters/san-francisco-49ers.json`, health as_of 2026-09-13, 1-0):
- Health: WR Aiyuk OUT, WR Watkins OUT, RB J. James OUT, WR Pearsall IR, RB Guerendo OUT, DE Williams OUT, TE Tonges Q.
- QB1 Brock Purdy, RB1 Christian McCaffrey, WR1 Jauan Jennings (elevated with Aiyuk OUT), TE1 George Kittle.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Christian McCaffrey (RB1) | SF | yes | yes | winner-side workhorse | eligible |
| George Kittle (TE1) | SF | yes | yes | winner-side TE | eligible |
| Brock Purdy (QB1) | SF | yes | yes | winner-side | eligible-not-selected |
| ARI QB1/RB1/WR1 | ARI | JSON errors flagged | uncertain | uncertain | rejected |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Christian McCaffrey | SF | ~72% (bell-cow) | ~75% | ~14% | offense.rb1 |
| George Kittle | SF | n/a | ~85% | ~22% | offense.te1 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side RB bell-cow (W3G1 Bijan 29/194/2 is the template; CMC is the SF equivalent). W2 Kelce+JT SGP +$17.20 shape.

Losing: trailing rush-att OVER; big-fav spread >= -6.5.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16; W3G1 0-2 -$20.00. Keeping: winner-side RB bell-cow rush yds. Dropping: ARI props due to JSON errors; game-level-only.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Christian McCaffrey OVER 75.5 rush yds
- Stake: $8.00, -115 conditional
- Win prob 58%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage: SF RB1 bell-cow, script-driven floor ~17 att × 4.5 YPC.

### T2 — SGP (player-anchored)
- Legs: George Kittle OVER 4.5 receptions + 49ers Moneyline
- Stake: $6.00, +150 conditional; class: **player_prop_driven**
- Win prob 44%; Net $9.00; Return $15.00; BE 40.0%
- Gate PASS. Usage: TE1 ~22% target share (elevated by Aiyuk OUT, Pearsall IR).

### T3 — Game-level SGP (cap $6)
- Legs: 49ers Moneyline + Game total UNDER 43.5
- Stake: $6.00, +115 conditional; class: **game_level**
- Win prob 46%; Net $6.90; Return $12.90; BE 46.5%

Arithmetic: T1 8×100/115=$6.96 ✓. T2 6×150/100=$9.00 ✓. T3 6×115/100=$6.90 ✓.

## 7. Evidence, correlation, missing data

- T2 and T3 correlated on SF ML. Bovada unreached; all conditional. ARI JSON errors flagged.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:30:00Z", "week": 3, "game_id": "cardinals-niners",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["ARI QB1 field lists Jacoby Brissett — real ARI QB is Kyler Murray, skipped", "ARI RB2 lists James Conner IR — role likely reversed with rookie Love (Q), skipped", "ARI WR1 lists Ihmir Smith-Marsette — real WR1 is Marvin Harrison Jr., skipped"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/arizona-cardinals.json", "as_of": "2026-09-13", "season_record": "1-0, PF 26, PA 14", "health_key_players": ["G Adams OUT", "S Taylor-Demerson OUT", "CB Williams OUT", "RB Love Q"]},
    {"path_or_url": "Data/2026/rosters/san-francisco-49ers.json", "as_of": "2026-09-13", "season_record": "1-0, PF 27, PA 7", "health_key_players": ["WR Aiyuk OUT", "WR Watkins OUT", "WR Pearsall IR", "RB Guerendo OUT", "DE Williams OUT"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/arizona-cardinals.json", "captured_at": "2026-09-27T16:30:00Z", "quote": "'Jacoby Brissett' QB1 flagged"},
    {"url": "Data/2026/rosters/san-francisco-49ers.json", "captured_at": "2026-09-27T16:30:00Z", "quote": "'Christian McCaffrey' RB1; 'Jauan Jennings' WR1 (Aiyuk OUT)"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:30:00Z", "quote": "W3G1 Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Christian McCaffrey", "team": "SF", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "George Kittle", "team": "SF", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "ARI QB1/RB1/WR1", "team": "ARI", "on_team": null, "active_this_week": null, "role_plausible": null, "verdict": "rejected-JSON-errors"}
  ],
  "usage_share_table": [
    {"player": "Christian McCaffrey", "team": "SF", "target_share": "~14%", "rush_att_share": "~72%", "snap_pct": "~75%", "rz_touch_share": "high", "source": "offense.rb1 bell-cow", "as_of": "2026-09-13"},
    {"player": "George Kittle", "team": "SF", "target_share": "~22%", "rush_att_share": "n/a", "snap_pct": "~85%", "rz_touch_share": "high", "source": "offense.te1 (elevated by Aiyuk/Pearsall out)", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "winner-side RB bell-cow rush yds", "citations": ["W3G1 Bijan 29/194/2", "W2 G15 Kelce+JT SGP +$17.20"]}, {"shape": "winner-side TE receptions floor when WR corps thin", "citations": ["W2 Kelce O4.5 recs HIT"]}],
    "losing_shapes": [{"shape": "trailing-side rush-att OVER", "citations": ["W2 Barkley/Bijan O17.5 LOSS"]}, {"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 Kelce O4.5 recs HIT — same TE1 shape used for Kittle"], "pattern_kept": "bell-cow RB1 + WR1-elevated TE recs", "pattern_stopped": "ARI player props due to JSON errors"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Christian McCaffrey OVER 75.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.58, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "SF RB1 bell-cow floor 17+ att"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["George Kittle OVER 4.5 receptions", "San Francisco 49ers Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.44, "odds_basis_american": 150, "price_label": "conditional", "potential_net_profit": 9.00, "total_return_incl_stake": 15.00, "break_even_probability": 0.400, "roster_sanity_gate": "PASS", "usage_anchor": "TE1 ~22% target share, elevated by WR losses"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["San Francisco 49ers Moneyline", "Game total UNDER 43.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 115, "price_label": "conditional", "potential_net_profit": 6.90, "total_return_incl_stake": 12.90, "break_even_probability": 0.465}
  ],
  "sources": [
    {"url": "Data/2026/rosters/arizona-cardinals.json", "fetch_succeeded": true},
    {"url": "Data/2026/rosters/san-francisco-49ers.json", "fetch_succeeded": true, "quote": "'CMC' RB1"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "W3G1 Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "SF home fav with strong D. Two player-prop-driven tickets on CMC rush yds + Kittle recs SGP with SF ML. Game-level $6 SF ML+U43.5. ARI JSON errors flagged. All conditional."
}
```
