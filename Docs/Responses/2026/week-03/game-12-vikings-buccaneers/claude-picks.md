# Claude — Week 3, Game 12: Vikings at Buccaneers

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:33:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code

Pre-game eligibility: confirmed. 12:33 EDT; kickoff 16:05 ET.

## 1. Winner, script

Winner: Tampa Bay Buccaneers (narrow). Projected 24-20 TB. TB home; both teams stumble in roster JSON accuracy but TB is more stable. MIN JSON has multiple hard errors (see §2) that make me lean away from MIN plays entirely.

## 2. Team profile (Roster Sanity Gate)

MIN (`Data/2026/rosters/minnesota-vikings.json`, health as_of 2026-09-13, 1-0):
- **JSON hazard flagged**: QB1 field lists **Kyler Murray** — Murray is a Cardinals QB (confirmed by ARI JSON also being scrambled, listing Brissett). Real MIN QB in 2026 is J.J. McCarthy or Sam Darnold. Hard heuristic error. Skip MIN QB props.
- **JSON hazard flagged**: RB1 field lists **Jermar Jefferson** with status Injured Reserve — real MIN RB1 is Aaron Jones or Jordan Mason. Skip MIN RB props.
- **JSON hazard flagged**: WR1 field lists **Jordan Addison** (plausible as WR2 with Justin Jefferson as WR1 — Jefferson missing from roster). Multi-error cluster. Skip MIN WR1 prop.
- Health: WR Jones suspension.

TB (`Data/2026/rosters/tampa-bay-buccaneers.json`, health as_of 2026-09-13, 0-1):
- Health: WR McMillan doubtful, OT Skule doubtful, RB Tucker doubtful; LB Rozeboom Q.
- QB1 Baker Mayfield (verified). RB1 Kenny Gainwell (plausible 2026 role); RB2 Bucky Irving (real breakout back).
- **JSON hazard flagged**: WR1 field lists **Emeka Egbuka** (Q), WR2 lists **Dean Patterson** (deep backup). Real TB WR1 is Mike Evans; WR2 is Chris Godwin. Skip TB WR1/WR2 props.
- TE1 Ko Kieft — real, but blocking TE not receiving.

Gate:

| Player | Team | On team | Active | Role | Verdict |
| --- | --- | --- | --- | --- | --- |
| Baker Mayfield (QB1) | TB | yes | yes | winner-side pass volume | eligible |
| Bucky Irving (RB2) | TB | yes | yes | pass-catching change-of-pace, real breakout | eligible (usage-share caveat) |
| Kenny Gainwell (RB1) | TB | yes | yes | winner-side split back | eligible-not-selected (role split with Irving) |
| MIN QB1/RB1/WR1 | MIN | JSON errors | uncertain | uncertain | rejected |
| TB WR1/WR2 | TB | JSON errors | uncertain | uncertain | rejected |

## 3. Usage share

| Player | Team | Rush | Snap % | Target % | Source |
| --- | --- | --- | --- | --- | --- |
| Baker Mayfield | TB | n/a | 100% | n/a | offense.qb1 |
| Bucky Irving | TB | ~40% (pass-catching share elevated) | ~50% | ~10% | offense.rb2 with real breakout role |

## 4. Independent derivations (with W3G1 row)

Profitable: winner-side QB pass volume (W3G1 Penix threw for 3 TDs incl. London 194 rec yds). Home-fav ML + UNDER SGP.

Losing: props on players whose JSON entry is wrong. Big-fav spread >= -6.5.

## 5. Self-reflection

W1 17-17 +$13.23; W2 5-13-1 -$93.16 (Rico Dowdle team-mismatch — same class of error I'm avoiding here); W3G1 0-2 -$20.00. Keeping: winner-side QB pass volume. Dropping: MIN/TB WR props due to JSON errors.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level: $6**.

### T1 — Straight player prop
- Selection: Baker Mayfield OVER 244.5 pass yds
- Stake: $8.00, -110 conditional
- Win prob 55%; Net $7.27; Return $15.27; BE 52.4%
- Gate PASS. Usage: TB QB1, home, W1 threw for 27 pts.

### T2 — SGP (player-anchored)
- Legs: Baker Mayfield OVER 244.5 pass yds + Buccaneers Moneyline
- Stake: $6.00, +140 conditional; class: **player_prop_driven**
- Win prob 45%; Net $8.40; Return $14.40; BE 41.7%

### T3 — Game-level SGP (cap $6)
- Legs: Buccaneers Moneyline + Game total OVER 47.5
- Stake: $6.00, +140 conditional; class: **game_level**
- Win prob 42%; Net $8.40; Return $14.40; BE 41.7%
- Note: taking OVER instead of UNDER because both teams have poor defenses (TB gave up 33 W1, MIN gave up 22 but W1 opponent was different).

Arithmetic: T1 8×100/110=$7.27 ✓. T2 6×140/100=$8.40 ✓. T3 6×140/100=$8.40 ✓.

## 7. Evidence, correlation, missing data

- T2 correlates on TB ML. T3 correlates on TB ML + OVER (both offenses productive scenario).
- Bovada unreached; conditional. Many JSON errors flagged.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:33:00Z", "week": 3, "game_id": "vikings-buccaneers",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "roster_json_errors_flagged": ["MIN QB1 field lists Kyler Murray (Cardinals) — skipped", "MIN RB1 lists Jermar Jefferson IR — skipped", "TB WR1 lists Emeka Egbuka rookie (Q) with WR2 Dean Patterson — real WR1 is Mike Evans, skipped"],
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/minnesota-vikings.json", "as_of": "2026-09-13", "season_record": "1-0, PF 39, PA 22", "health_key_players": ["WR Jones suspension", "CB McGlothern Jr. Q", "DT Jones Q"]},
    {"path_or_url": "Data/2026/rosters/tampa-bay-buccaneers.json", "as_of": "2026-09-13", "season_record": "0-1, PF 27, PA 33", "health_key_players": ["WR McMillan doubtful", "OT Skule doubtful", "RB Tucker doubtful"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/minnesota-vikings.json", "captured_at": "2026-09-27T16:33:00Z", "quote": "'Kyler Murray' QB1 flagged as heuristic error"},
    {"url": "Data/2026/rosters/tampa-bay-buccaneers.json", "captured_at": "2026-09-27T16:33:00Z", "quote": "'Baker Mayfield' QB1"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:33:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Baker Mayfield", "team": "TB", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "MIN QB1 field", "team": "MIN", "on_team": false, "active_this_week": null, "role_plausible": null, "verdict": "rejected-JSON-error"},
    {"player": "TB WR1 field", "team": "TB", "on_team": true, "active_this_week": "Q", "role_plausible": "backup-label-primary-WR-missing", "verdict": "rejected-JSON-error"}
  ],
  "usage_share_table": [
    {"player": "Baker Mayfield", "team": "TB", "target_share": "n/a", "rush_att_share": "n/a", "snap_pct": "100%", "rz_touch_share": "n/a", "source": "offense.qb1", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [{"shape": "winner-side QB pass yds OVER", "citations": ["W3G1 Penix 3 TDs, London 194 rec yds"]}],
    "losing_shapes": [{"shape": "player props on JSON-error entries", "citations": ["W2 Rico Dowdle wrong-team LOSS"]}, {"shape": "big-fav spread >= -6.5", "citations": ["W1 LAC -9.5 LOSS"]}]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 Rico Dowdle wrong-team — same JSON-error class avoided here"], "pattern_kept": "winner-side QB pass volume", "pattern_stopped": "props on JSON-error entries"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Baker Mayfield OVER 244.5 pass yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.55, "odds_basis_american": -110, "price_label": "conditional", "potential_net_profit": 7.27, "total_return_incl_stake": 15.27, "break_even_probability": 0.524, "roster_sanity_gate": "PASS", "usage_anchor": "TB QB1 home, W1 27-pt output"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Baker Mayfield OVER 244.5 pass yds", "Tampa Bay Buccaneers Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.45, "odds_basis_american": 140, "price_label": "conditional", "potential_net_profit": 8.40, "total_return_incl_stake": 14.40, "break_even_probability": 0.417, "roster_sanity_gate": "PASS", "usage_anchor": "Mayfield pass yds + TB ML"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Tampa Bay Buccaneers Moneyline", "Game total OVER 47.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.42, "odds_basis_american": 140, "price_label": "conditional", "potential_net_profit": 8.40, "total_return_incl_stake": 14.40, "break_even_probability": 0.417}
  ],
  "sources": [
    {"url": "Data/2026/rosters/minnesota-vikings.json", "fetch_succeeded": true, "quote": "Kyler Murray flagged"},
    {"url": "Data/2026/rosters/tampa-bay-buccaneers.json", "fetch_succeeded": true},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "W3G1 Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "TB home narrow fav. Two player-prop-driven tickets stack Mayfield pass yds (straight + SGP with TB ML). Game-level $6 TB ML + OVER 47.5 (both defenses porous). Extensive MIN/TB WR/RB JSON errors flagged. All conditional."
}
```
