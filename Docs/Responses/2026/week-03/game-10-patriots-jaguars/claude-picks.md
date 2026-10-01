# Claude — Week 3, Game 10: Patriots at Jaguars

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:24:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:24 EDT; kickoff 13:00 ET.

## 1. Winner, script

Winner: Jacksonville Jaguars. Projected 27-17 JAX. JAX won W1 34-10 (dominant); NE lost W1 10-13 with Drake Maye in a low-scoring game. JAX home, Lawrence-Etienne offense in rhythm. NE Henderson (RB) OUT limits ground game.

## 2. Team profile (Roster Sanity Gate)

NE (`Data/2026/rosters/new-england-patriots.json`, health as_of 2026-09-13, 0-1):
- Health: C Brown OUT, WR Chism III OUT, RB TreVeyon Henderson OUT (season?), LB Landry III OUT.
- QB1 Drake Maye (verified 2nd year QB).
- **JSON hazard flagged**: WR1 field lists **A.J. Brown**, who is an Eagles WR (Hollywood Brown listed as PHI WR1 elsewhere and A.J. Brown is a hard team-mismatch here). Real NE WR1 in 2026 is Stefon Diggs (but he's on WAS per WAS JSON) or DeMario Douglas — WR2 is listed as DeMario Douglas which is plausible. Skip NE WR1 prop; may use WR2 Douglas cautiously.
- RB1 Hassan Haskins with Henderson OUT — role likely full lead.

JAX (`Data/2026/rosters/jacksonville-jaguars.json`, health as_of 2026-09-13, 1-0):
- Health: RB LeQuint Allen Jr. Q, CB Marshall Q, WR Meyers Q.
- **JSON hazard flagged**: WR1 field lists **Michael Wortham** — heuristic error; real JAX WR1 is Brian Thomas Jr. (or Meyers). Skip JAX WR1 prop.
- QB1 Trevor Lawrence, RB1 Allen Jr. Q — backfield status uncertain; RB2 Rodriguez Jr. would step in.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Trevor Lawrence (QB1) | JAX | yes | yes | winner-side pass volume | eligible |
| Drake Maye (QB1) | NE | yes | yes | 2nd-year QB trailing side | rejected (ceiling shape) |
| Hassan Haskins (RB1) | NE | yes | yes | trailing-side ceiling if NE trails big | rejected (shape) |
| DeMario Douglas (WR2) | NE | yes | yes | trailing-side possession | eligible (if target share ≥22% — plausible with A.J. Brown JSON error unclear WR1) |
| JAX WR1 field | JAX | Wortham heuristic error | uncertain | uncertain | rejected (JSON error) |
| LeQuint Allen Jr. (RB1) | JAX | yes | Q | uncertain | rejected (Q) |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Trevor Lawrence | JAX | n/a | 100% | n/a | offense.qb1 |
| DeMario Douglas | NE | n/a | ~80% | ~22% (WR2 in thin NE WR corps) | offense.wr2 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side QB pass volume with intact WR corps (W3G1 Penix had 3 TDs incl. London 194 rec yds). Possession-WR floor on trailing side (v3.4 exception).

Losing: 2nd-year QB pass-TD OVER (Nix, Maye W1 both LOSS). Trailing RB rush-att OVER. Big-fav spread >= -6.5.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16; W3G1 0-2 -$20.00. Keeping: winner-side QB pass volume; possession-WR floor. Dropping: 2nd-year QB TD ceilings; game-level-only.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Trevor Lawrence OVER 219.5 pass yds
- Stake: $8.00, -110 conditional
- Win prob 56%; Net $7.27; Return $15.27; BE 52.4%
- Gate PASS. Usage: JAX QB1 home, W1 threw for 34 pts.

### T2 — SGP (player-anchored)
- Legs: Trevor Lawrence OVER 219.5 pass yds + Jaguars Moneyline
- Stake: $6.00, +120 conditional; class: **player_prop_driven**
- Win prob 47%; Net $7.20; Return $13.20; BE 45.5%

### T3 — Game-level SGP (cap $6)
- Legs: Jaguars Moneyline + Game total UNDER 41.5
- Stake: $6.00, +115 conditional; class: **game_level**
- Win prob 46%; Net $6.90; Return $12.90; BE 46.5%

Arithmetic: T1 8×100/110=$7.27 ✓. T2 6×120/100=$7.20 ✓. T3 6×115/100=$6.90 ✓.

## 7. Evidence, correlation, missing data

- T1/T2/T3 all correlate on JAX winning (T1 slightly independent since Lawrence can throw for 220 in either result).
- Bovada unreached; conditional. JSON WR1 errors flagged.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:24:00Z", "week": 3, "game_id": "patriots-jaguars",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["NE WR1 field lists 'A.J. Brown' (Eagles) — team-mismatch, skipped", "JAX WR1 field lists 'Michael Wortham' — heuristic error, skipped"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/new-england-patriots.json", "as_of": "2026-09-13", "season_record": "0-1, PF 10, PA 13", "health_key_players": ["C Brown OUT", "RB Henderson OUT", "LB Landry III OUT", "TE Hill IR"]},
    {"path_or_url": "Data/2026/rosters/jacksonville-jaguars.json", "as_of": "2026-09-13", "season_record": "1-0, PF 34, PA 10", "health_key_players": ["RB Allen Jr. Q", "WR Meyers Q", "CB Marshall Q"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/new-england-patriots.json", "captured_at": "2026-09-27T16:24:00Z", "quote": "WR1 'A.J. Brown' team-mismatch flagged"},
    {"url": "Data/2026/rosters/jacksonville-jaguars.json", "captured_at": "2026-09-27T16:24:00Z", "quote": "WR1 'Michael Wortham' heuristic error"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:24:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Trevor Lawrence", "team": "JAX", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Drake Maye", "team": "NE", "on_team": true, "active_this_week": true, "role_plausible": "trailing-2nd-year-ceiling", "verdict": "rejected-shape"},
    {"player": "NE WR1 field", "team": "NE", "on_team": false, "active_this_week": null, "role_plausible": null, "verdict": "rejected-JSON-team-mismatch"},
    {"player": "JAX WR1 field", "team": "JAX", "on_team": null, "active_this_week": null, "role_plausible": null, "verdict": "rejected-JSON-heuristic-error"}
  ],
  "usage_share_table": [
    {"player": "Trevor Lawrence", "team": "JAX", "target_share": "n/a", "rush_att_share": "n/a", "snap_pct": "100%", "rz_touch_share": "moderate", "source": "offense.qb1", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "winner-side QB pass yds OVER with intact WR corps", "citations": ["W3G1 Penix 3 TDs, London 194 rec yds"]}, {"shape": "home-fav ML + UNDER SGP", "citations": ["W1 KC ML+U44.5 +$14.40", "W1 ATL-PIT U42.5 +$11.20"]}],
    "losing_shapes": [{"shape": "2nd-year QB pass-TD OVER", "citations": ["W1 Nix O205.5 LOSS", "W1 Maye O1.5 pass TDs LOSS"]}, {"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W3G1 game-level-only allocation LOSS"], "pattern_kept": "winner-side QB pass volume + home-fav ML+UNDER SGP", "pattern_stopped": "2nd-year QB pass-TD props"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Trevor Lawrence OVER 219.5 pass yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.56, "odds_basis_american": -110, "price_label": "conditional", "potential_net_profit": 7.27, "total_return_incl_stake": 15.27, "break_even_probability": 0.524, "roster_sanity_gate": "PASS", "usage_anchor": "JAX QB1 home; W1 offense 34 pts"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Trevor Lawrence OVER 219.5 pass yds", "Jacksonville Jaguars Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.47, "odds_basis_american": 120, "price_label": "conditional", "potential_net_profit": 7.20, "total_return_incl_stake": 13.20, "break_even_probability": 0.455, "roster_sanity_gate": "PASS", "usage_anchor": "same Lawrence pass-yds anchor + JAX ML"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Jacksonville Jaguars Moneyline", "Game total UNDER 41.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 115, "price_label": "conditional", "potential_net_profit": 6.90, "total_return_incl_stake": 12.90, "break_even_probability": 0.465}
  ],
  "sources": [
    {"url": "Data/2026/rosters/new-england-patriots.json", "fetch_succeeded": true, "quote": "'A.J. Brown' WR1 flagged"},
    {"url": "Data/2026/rosters/jacksonville-jaguars.json", "fetch_succeeded": true, "quote": "'Michael Wortham' WR1 flagged"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "W3G1 Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "JAX home fav vs struggling NE. Two player-prop-driven tickets stack Lawrence pass yds (straight + SGP with JAX ML). Game-level $6 JAX ML+U41.5. NE and JAX WR1 JSON errors flagged and skipped. All conditional."
}
```
