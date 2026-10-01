# Claude — Week 3, Game 14: Raiders at Saints

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:40:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:40 EDT; kickoff 16:25 ET.

## 1. Winner, script

Winner: Las Vegas Raiders. Projected 24-20 LV. LV won W1 27-13; NO lost W1 30-31. LV road but has better offense-defense balance. Jeanty Q status is a major variable — if OUT, LV offense contracts and pass volume up.

## 2. Team profile (Roster Sanity Gate)

LV (`Data/2026/rosters/las-vegas-raiders.json`, health as_of 2026-09-13, 1-0):
- Health: TE Brock Bowers OUT (huge loss).
- QB1 Kirk Cousins, RB1 Ashton Jeanty Q — do NOT bet Jeanty until Fri report clears.
- WR1 Tre Tucker, WR2 Jalen Nailor. TE1 Chris Myarick (backup with Bowers OUT).

NO (`Data/2026/rosters/new-orleans-saints.json`, health as_of 2026-09-13, 0-1):
- Health: TE Delp OUT, WR Rechsteiner suspension, DE Cameron Jordan OUT, OT Saldiveri OUT, WR Tipton OUT; RB Kamara Q.
- QB1 Tyler Shough (rookie).
- **JSON hazard flagged**: RB1 field lists **Travis Etienne Jr.** — Etienne is JAX RB (confirmed by JAX being scrambled too). Real NO RB1 is Alvin Kamara (Q). Skip NO RB props.
- WR1 Jordyn Tyson IR; WR2 Trey Palmer. Thin corps.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Kirk Cousins (QB1) | LV | yes | yes | winner-side mid-volume pass | eligible |
| Tre Tucker (WR1) | LV | yes | yes | winner-side WR1 elevated (Bowers OUT concentrates targets) | eligible |
| Ashton Jeanty (RB1) | LV | yes | Q | winner-side | rejected (Q — don't repeat W2 Collins) |
| Trey Palmer (WR2) | NO | yes | yes | trailing WR2 (Tyson IR) | eligible-not-selected (role uncertainty) |
| NO RB1 field | NO | Etienne team-mismatch | uncertain | uncertain | rejected (JSON error) |
| Tyler Shough (QB1) | NO | yes | yes | rookie QB trailing side | rejected (rookie ceiling shape) |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Kirk Cousins | LV | n/a | 100% | n/a | offense.qb1 |
| Tre Tucker | LV | n/a | ~90% | ~24% (elevated by Bowers OUT redistributing 20% target share) | offense.wr1 |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side QB pass volume; WR1 target-share elevation when TE1 OUT (Bowers OUT parallel to W3G1 London absorbing target share). W3G1 Bijan/London volume shape.

Losing: rookie-QB props (Nix W1 LOSS, Maye W1 LOSS). Q-flagged player props (Nico Collins W2 LOSS).

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16 (Nico Collins Q/OUT error — same class Jeanty Q would be); W3G1 0-2 -$20.00. Keeping: pass-volume QB1 + elevated WR1 target-share. Dropping: Jeanty Q; rookie Shough props.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Tre Tucker OVER 4.5 receptions
- Stake: $8.00, -110 conditional
- Win prob 54%; Net $7.27; Return $15.27; BE 52.4%
- Gate PASS. Usage: WR1 target-share elevated by Bowers OUT; 24%+ target share is v3.4 possession-floor.

### T2 — SGP (player-anchored)
- Legs: Kirk Cousins OVER 224.5 pass yds + Raiders Moneyline
- Stake: $6.00, +130 conditional; class: **player_prop_driven**
- Win prob 47%; Net $7.80; Return $13.80; BE 43.5%

### T3 — Game-level SGP (cap $6)
- Legs: Raiders Moneyline + Game total UNDER 42.5
- Stake: $6.00, +120 conditional; class: **game_level**
- Win prob 47%; Net $7.20; Return $13.20; BE 45.5%

Arithmetic: T1 8×100/110=$7.27 ✓. T2 6×130/100=$7.80 ✓. T3 6×120/100=$7.20 ✓.

## 7. Evidence, correlation, missing data

- T2 and T3 correlated on LV ML. Bovada unreached; conditional. NO RB1 JSON error flagged.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:40:00Z", "week": 3, "game_id": "raiders-saints",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["NO RB1 field lists Travis Etienne Jr. (Jaguars) — skipped"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/las-vegas-raiders.json", "as_of": "2026-09-13", "season_record": "1-0, PF 27, PA 13", "health_key_players": ["TE Bowers OUT", "RB Jeanty Q"]},
    {"path_or_url": "Data/2026/rosters/new-orleans-saints.json", "as_of": "2026-09-13", "season_record": "0-1, PF 30, PA 31", "health_key_players": ["TE Delp OUT", "DE Jordan OUT", "WR Tyson IR", "RB Kamara Q"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/las-vegas-raiders.json", "captured_at": "2026-09-27T16:40:00Z", "quote": "'Kirk Cousins' QB1; 'Brock Bowers' OUT"},
    {"url": "Data/2026/rosters/new-orleans-saints.json", "captured_at": "2026-09-27T16:40:00Z", "quote": "'Travis Etienne Jr.' RB1 flagged (JAX player)"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:40:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Kirk Cousins", "team": "LV", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Tre Tucker", "team": "LV", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Ashton Jeanty", "team": "LV", "on_team": true, "active_this_week": "Q", "role_plausible": true, "verdict": "rejected-status"},
    {"player": "NO RB1 field", "team": "NO", "on_team": false, "active_this_week": null, "role_plausible": null, "verdict": "rejected-JSON-team-mismatch"}
  ],
  "usage_share_table": [
    {"player": "Kirk Cousins", "team": "LV", "target_share": "n/a", "rush_att_share": "n/a", "snap_pct": "100%", "rz_touch_share": "n/a", "source": "offense.qb1", "as_of": "2026-09-13"},
    {"player": "Tre Tucker", "team": "LV", "target_share": "~24% (Bowers OUT redistributes)", "rush_att_share": "n/a", "snap_pct": "~90%", "rz_touch_share": "moderate", "source": "offense.wr1", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "WR1 target-share elevation when TE1 OUT", "citations": ["W3G1 London 9/194 (with GB TE Kraft Q)", "W2 Kelce O4.5 recs HIT"]}, {"shape": "home-fav ML + UNDER SGP (here road-fav LV)", "citations": ["W1 KC ML+U44.5 +$14.40"]}],
    "losing_shapes": [{"shape": "rookie-QB pass-TD/yd OVER", "citations": ["W1 Nix O205.5 LOSS", "W1 Maye O1.5 LOSS"]}, {"shape": "Q-flagged player props", "citations": ["W2 Nico Collins bet while OUT LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 Nico Collins Q/OUT error — Jeanty Q avoided here"], "pattern_kept": "WR1 target-share elevation when TE1 OUT", "pattern_stopped": "Q-flagged player props; rookie QB props"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Tre Tucker OVER 4.5 receptions", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.54, "odds_basis_american": -110, "price_label": "conditional", "potential_net_profit": 7.27, "total_return_incl_stake": 15.27, "break_even_probability": 0.524, "roster_sanity_gate": "PASS", "usage_anchor": "WR1 ~24% target share elevated by Bowers OUT"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Kirk Cousins OVER 224.5 pass yds", "Las Vegas Raiders Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.47, "odds_basis_american": 130, "price_label": "conditional", "potential_net_profit": 7.80, "total_return_incl_stake": 13.80, "break_even_probability": 0.435, "roster_sanity_gate": "PASS", "usage_anchor": "QB1 pass volume + LV ML"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Las Vegas Raiders Moneyline", "Game total UNDER 42.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.47, "odds_basis_american": 120, "price_label": "conditional", "potential_net_profit": 7.20, "total_return_incl_stake": 13.20, "break_even_probability": 0.455}
  ],
  "sources": [
    {"url": "Data/2026/rosters/las-vegas-raiders.json", "fetch_succeeded": true, "quote": "Bowers OUT; Jeanty Q"},
    {"url": "Data/2026/rosters/new-orleans-saints.json", "fetch_succeeded": true, "quote": "Etienne Jr. RB1 flagged"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "LV road narrow fav vs NO with roster errors. Two player-prop-driven tickets on Tucker recs + Cousins pass yds SGP with LV ML. Game-level $6 LV ML+U42.5. Jeanty Q avoided (Collins-shape). NO RB1 JSON error flagged. All conditional."
}
```
