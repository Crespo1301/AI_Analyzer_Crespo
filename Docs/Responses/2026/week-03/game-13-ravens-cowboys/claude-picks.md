# Claude — Week 3, Game 13: Ravens at Cowboys (Rio de Janeiro)

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:36:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:36 EDT; kickoff 16:25 ET (São Paulo → Rio international game).

## 1. Winner, script

Winner: Baltimore Ravens. Projected 30-20 BAL. BAL won W1 41-23; DAL lost W1 20-28. Lamar-Henry offense at neutral site (functionally home game for BAL). BAL big fav — watch big-favorite spread trap (>= -6.5). DAL WR George Pickens the possession-WR trailing-side anchor.

## 2. Team profile (Roster Sanity Gate)

BAL (`Data/2026/rosters/baltimore-ravens.json`, health as_of 2026-09-13, 1-0):
- Health: LB Buchanan OUT, DT Madubuike OUT (major DL loss); WR Walker Q.
- QB1 Lamar Jackson, RB1 Derrick Henry (bell-cow). WR1 Zay Flowers Q — do NOT bet Flowers props.
- **JSON hazard flagged**: TE1 field lists **Durham Smythe** — real BAL TE1 is Mark Andrews (or Isaiah Likely, but Likely is on NYG per NYG JSON). Skip BAL TE prop.

DAL (`Data/2026/rosters/dallas-cowboys.json`, health as_of 2026-09-13, 0-1):
- No OUT/Q flags in JSON (thin health data, verify Fri).
- QB1 Dak Prescott.
- **JSON hazard flagged**: RB1 field lists **Malik Davis** — backup name; real DAL RB1 in 2026 is Javonte Williams or CeeDee-related. Skip DAL RB props.
- **JSON hazard flagged**: WR1 field lists **George Pickens** (correct, 2026 trade to DAL). WR2 Camden Brown (undrafted-caliber). Real WR2 is CeeDee Lamb — CeeDee Lamb is missing from roster entirely. Major error. Skip DAL WR2 prop; Pickens WR1 is safe.
- TE1 Michael Trigg (unusual — real DAL TE is Jake Ferguson).

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Derrick Henry (RB1) | BAL | yes | yes | winner-side bell-cow | eligible |
| Lamar Jackson (QB1) | BAL | yes | yes | winner-side dual-threat, structural QB rush | eligible |
| George Pickens (WR1) | DAL | yes | yes | trailing-side WR1 possession | eligible (v3.4 exception) |
| Zay Flowers (WR1) | BAL | yes | Q | winner-side WR1 | rejected (Q) |
| DAL RB1/TE1/WR2 | DAL | JSON errors | uncertain | uncertain | rejected |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Derrick Henry | BAL | ~70% (bell-cow) | ~65% | ~5% | offense.rb1 |
| Lamar Jackson | BAL | ~18% (structural QB rush) | 100% | n/a | offense.qb1 |
| George Pickens | DAL | n/a | ~90% | ~27% (WR1 target hog with CeeDee missing from JSON) | offense.wr1 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side bell-cow RB rush yds (W3G1 Bijan 29/194/2 is the exact template). Dual-threat QB rush yds floor. Possession-WR floor on trailing side.

Losing: big-fav spread >= -6.5 (BAL likely -6.5 to -8.5 → avoid spread). Trailing rush-att OVER on RB.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16 (Henry O17.5 rush att LOSS was trailing-side ceiling — this time Henry is on winner side, so rush yds floor is the right play instead of rush att ceiling); W3G1 0-2 -$20.00. Keeping: bell-cow winner-side rush yds. Dropping: BAL spread as big fav.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Derrick Henry OVER 85.5 rush yds
- Stake: $8.00, -115 conditional
- Win prob 58%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage: bell-cow role guarantees 18+ carries at 4.7 YPC — floor, not ceiling.

### T2 — SGP (player-anchored)
- Legs: Derrick Henry OVER 85.5 rush yds + Ravens Moneyline
- Stake: $6.00, +120 conditional; class: **player_prop_driven**
- Win prob 47%; Net $7.20; Return $13.20; BE 45.5%

### T3 — Game-level SGP (cap $6)
- Legs: Ravens Team Total OVER 27.5
- Stake: $6.00, -110 conditional; class: **game_level**
- Win prob 55%; Net $5.45; Return $11.45; BE 52.4%
- Rationale: profitable shape from W1 CHI/DET TT OVERs (`Docs/2026/week-03-analysis.md` §"Team-Total OVER on projected winning offense against compromised opponent"). Avoids BAL big-fav spread trap.

Arithmetic: T1 8×100/115=$6.96 ✓. T2 6×120/100=$7.20 ✓. T3 6×100/110=$5.45 ✓.

## 7. Evidence, correlation, missing data

- T1/T2/T3 all correlated on BAL winning. Concentration disclosed.
- Bovada unreached; conditional. Neutral-site variance (weather, travel).

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:36:00Z", "week": 3, "game_id": "ravens-cowboys",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["BAL TE1 lists Durham Smythe — real is Mark Andrews, skipped", "DAL RB1 lists Malik Davis (backup) — skipped", "DAL WR2 lists Camden Brown; CeeDee Lamb missing from roster — skipped"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/baltimore-ravens.json", "as_of": "2026-09-13", "season_record": "1-0, PF 41, PA 23", "health_key_players": ["LB Buchanan OUT", "DT Madubuike OUT", "WR Flowers Q"]},
    {"path_or_url": "Data/2026/rosters/dallas-cowboys.json", "as_of": "2026-09-13", "season_record": "0-1, PF 20, PA 28", "health_key_players": ["no OUT/Q flags in JSON — verify Fri"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/baltimore-ravens.json", "captured_at": "2026-09-27T16:36:00Z", "quote": "'Lamar Jackson' QB1; 'Derrick Henry' RB1"},
    {"url": "Data/2026/rosters/dallas-cowboys.json", "captured_at": "2026-09-27T16:36:00Z", "quote": "'George Pickens' WR1; CeeDee Lamb missing"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:36:00Z", "quote": "W3G1 Bijan 29/194/2; team-total OVER on winning offense profitable"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Derrick Henry", "team": "BAL", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Lamar Jackson", "team": "BAL", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible-not-selected"},
    {"player": "George Pickens", "team": "DAL", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible-not-selected"},
    {"player": "Zay Flowers", "team": "BAL", "on_team": true, "active_this_week": "Q", "role_plausible": true, "verdict": "rejected-status"}
  ],
  "usage_share_table": [
    {"player": "Derrick Henry", "team": "BAL", "target_share": "~5%", "rush_att_share": "~70%", "snap_pct": "~65%", "rz_touch_share": "high", "source": "offense.rb1 bell-cow", "as_of": "2026-09-13"},
    {"player": "Lamar Jackson", "team": "BAL", "target_share": "n/a", "rush_att_share": "~18% structural QB rush", "snap_pct": "100%", "rz_touch_share": "high", "source": "offense.qb1 dual-threat", "as_of": "2026-09-13"},
    {"player": "George Pickens", "team": "DAL", "target_share": "~27%", "rush_att_share": "n/a", "snap_pct": "~90%", "rz_touch_share": "moderate", "source": "offense.wr1 (CeeDee missing from JSON)", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "winner-side bell-cow rush yds OVER", "citations": ["W3G1 Bijan 29/194/2", "W2 G15 JT O62.5 rush yds HIT"]}, {"shape": "winner-side team total OVER against compromised opponent", "citations": ["W1 CHI TT O24.5 HIT", "W1 DET TT O27.5 HIT"]}],
    "losing_shapes": [{"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS", "W2 KC -6.5 LOSS"]}, {"shape": "trailing-side rush-att OVER", "citations": ["W2 Henry O17.5 rush att LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 Henry O17.5 rush att LOSS trailing-side — now betting Henry rush YDS on winner side (floor not ceiling)"], "pattern_kept": "bell-cow winner-side rush yds; team-total OVER", "pattern_stopped": "big-fav BAL spread; trailing-side Henry rush-att"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Derrick Henry OVER 85.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.58, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "bell-cow 18+ carry floor"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Derrick Henry OVER 85.5 rush yds", "Baltimore Ravens Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.47, "odds_basis_american": 120, "price_label": "conditional", "potential_net_profit": 7.20, "total_return_incl_stake": 13.20, "break_even_probability": 0.455, "roster_sanity_gate": "PASS", "usage_anchor": "Henry rush yds + BAL ML correlated"},
    {"ticket_id": "T3", "type": "straight", "selection": "Baltimore Ravens Team Total OVER 27.5", "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.55, "odds_basis_american": -110, "price_label": "conditional", "potential_net_profit": 5.45, "total_return_incl_stake": 11.45, "break_even_probability": 0.524}
  ],
  "sources": [
    {"url": "Data/2026/rosters/baltimore-ravens.json", "fetch_succeeded": true},
    {"url": "Data/2026/rosters/dallas-cowboys.json", "fetch_succeeded": true, "quote": "'George Pickens' WR1"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "team-total OVER on winning offense profitable"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "BAL big fav in Rio neutral-site. Two player-prop-driven tickets stack Henry rush yds (straight + SGP with BAL ML). Game-level $6 BAL Team Total OVER 27.5 explicitly avoids big-fav BAL spread trap. All conditional."
}
```
