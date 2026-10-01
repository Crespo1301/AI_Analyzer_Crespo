# Claude — Week 3, Game 4: Jets at Lions

- Model: claude-opus-4-7
- Generated: 2026-09-27T16:04:00Z
- Prompt: forced-selection v3.4
- Lane: Claude Code (local filesystem)

Pre-game eligibility: confirmed. 2026-09-27 12:04 EDT; kickoff 13:00 ET.

## 1. Winner, projected score, game script

Winner: Detroit Lions. Projected 27-20 DET. Lions come off go-for-2 walkoff W1 (31-30 vs NO) with Gibbs 2 rush TDs; NYJ won ugly 23-10 over TEN. DET home, Amon-Ra + Gibbs volume script. Jets keep it middle-range via Breece Hall + Garrett Wilson but lose late.

## 2. Team profile notes (Roster Sanity Gate)

NYJ (`Data/2026/rosters/new-york-jets.json`, health as_of 2026-09-13, 1-0):
- Health: RB Nwangwu OUT, DE Ossai OUT, CB Ponds doubtful, WR Baron OUT; WR Lacy Q; several IR (Trayanum RB IR).
- RB1 note: "Actual RB1 per Athlon — Breece Hall, full participant Fri, no game designation". PASS.
- QB1 heuristic: no correction noted; Geno Smith listed. TE1 Kenyon Sadiq Q.

DET (`Data/2026/rosters/detroit-lions.json`, health as_of 2026-09-13, 1-0):
- Health: S Branch OUT, S Kerby Joseph OUT, OT Manu OUT, G Miller OUT; S Izien Q; RB Pacheco IR.
- WR1 corrected to Amon-Ra St. Brown (heuristic previously listed Jameson Williams as WR1; Williams is WR2 deep threat).
- TE1 LaPorta corrected off injury report per Athlon 2026-09-13.

Roster Sanity Gate

| Player | Team | On team? | Active W3? | Role? | Verdict |
| --- | --- | --- | --- | --- | --- |
| Jahmyr Gibbs (RB1) | DET | yes | yes | winner-side workhorse | eligible |
| Amon-Ra St. Brown (WR1) | DET | yes | yes | winner-side target hog | eligible |
| Breece Hall (RB1) | NYJ | yes | yes | trailing-side, but Hall clears volume even in losses (W2 O15.5 hit at ~22 att); use with caution | eligible (volume anchor even trailing) |
| Garrett Wilson (WR1) | NYJ | yes | yes | trailing-side WR1 | eligible |

## 3. 2026 usage-share table

| Player | Team | Rush share | Snap % | Target share | Source |
| --- | --- | --- | --- | --- | --- |
| Jahmyr Gibbs | DET | ~55% (Montgomery is DET's other back but not listed — Pacheco IR opens up Gibbs volume even more) | ~60% | ~10% | offense.rb1 |
| Amon-Ra St. Brown | DET | n/a | ~90% | ~30% (target-share leader per detroitlions.com depth chart) | offense.wr1 corrected |
| Breece Hall | NYJ | ~65% | ~65% | ~11% | offense.rb1 role note (full participant Fri) |
| Garrett Wilson | NYJ | n/a | ~90% | ~28% | offense.wr1 role |

## 4. Independent derivations (with W3G1 row)

Profitable: Volume-anchored player prop on winner side — W3G1 Bijan 29/194/2 and London 9/194 (`Docs/2026/week-03-analysis.md`). Prior: Jeanty/Hall W1 rush att OVERs, W2 Kelce+JT SGP +$17.20.

Losing: trailing-side rush-att OVER when script abandons run (W2 Barkley/Bijan). Big-fav spreads >= -6.5. Passing-TD OVERs.

## 5. Self-reflection

W1 17-17 +$13.23, W2 5-13-1 -$93.16, W3G1 0-2 -$20.00. Keeping: home-fav ML + UNDER shape and winner-side RB1 volume prop (Hall O15.5 W2 hit was my only positive player-anchored ticket that week). Dropping: game-level-only allocations.

## 6. Tickets ($20 total, reserve $0)

**player-prop-driven: 2, game-level exposure: $6 (cap $6)**.

### T1 — Straight player prop
- Selection: Jahmyr Gibbs OVER 65.5 rush yds
- Stake: $8.00
- Odds basis: -115 conditional
- Label: **conditional**
- Win prob: 57%; Net $6.96; Return $14.96; BE 53.5%
- Gate PASS. Usage anchor: DET RB1 with Pacheco IR, script-driven floor ~14 att × 4.7 YPC.

### T2 — SGP (player-anchored)
- Legs: Amon-Ra St. Brown OVER 6.5 receptions + Lions Moneyline
- Stake: $6.00
- Odds basis: +130 conditional
- Label: **conditional**; class: **player_prop_driven**
- Win prob: 47%; Net $7.80; Return $13.80; BE 43.5%
- Gate PASS. Usage anchor: ~30% target share, target-share leader; floor at 6.5 recs.

### T3 — Game-level SGP (cap $6)
- Legs: Lions Moneyline + Game total UNDER 48.5
- Stake: $6.00
- Odds basis: +115 conditional
- Label: **conditional**; class: **game_level**
- Win prob: 46%; Net $6.90; Return $12.90; BE 46.5%

Arithmetic: T1 8×100/115 = $6.96 ✓. T2 6×130/100 = $7.80 ✓. T3 6×115/100 = $6.90 ✓.

## 7. Evidence, correlation, missing data

- T2 and T3 correlated on DET ML.
- Missing data: bovada.lv unreached; all conditional. DET secondary depleted (Branch + Joseph OUT) — Wilson/Hall could hurt DET's total-UNDER lean.

## 8. JSON

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.4",
  "model_role": "claude-code-independent-entry", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-27T16:04:00Z", "week": 3, "game_id": "jets-lions",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6},
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/new-york-jets.json", "as_of": "2026-09-13", "season_record": "1-0, PF 23, PA 10", "health_key_players": ["RB Nwangwu OUT", "DE Ossai OUT", "WR Baron OUT", "TE Sadiq Q", "WR Lacy Q"]},
    {"path_or_url": "Data/2026/rosters/detroit-lions.json", "as_of": "2026-09-13", "season_record": "1-0, PF 31, PA 30", "health_key_players": ["S Branch OUT", "S Joseph OUT", "OT Manu OUT", "G Miller OUT", "RB Pacheco IR"]}
  ],
  "news_and_research_read": [
    {"url": "Data/2026/rosters/new-york-jets.json", "captured_at": "2026-09-27T16:04:00Z", "quote": "'Breece Hall' Actual RB1 per Athlon; full participant Fri"},
    {"url": "Data/2026/rosters/detroit-lions.json", "captured_at": "2026-09-27T16:04:00Z", "quote": "'Amon-Ra St. Brown' Target-share leader; corrected from heuristic"},
    {"url": "Docs/2026/week-03-analysis.md", "captured_at": "2026-09-27T16:04:00Z", "quote": "W3G1 Bijan 29/194/2, London 9/194"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "captured_at": null, "quote": "not reached; fetch_succeeded=false"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Jahmyr Gibbs", "team": "DET", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Amon-Ra St. Brown", "team": "DET", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible"},
    {"player": "Breece Hall", "team": "NYJ", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible-not-selected"},
    {"player": "Garrett Wilson", "team": "NYJ", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "eligible-not-selected"}
  ],
  "usage_share_table": [
    {"player": "Jahmyr Gibbs", "team": "DET", "target_share": "~10%", "rush_att_share": "~55%", "snap_pct": "~60%", "rz_touch_share": "high", "source": "offense.rb1 (Pacheco IR expands share)", "as_of": "2026-09-13"},
    {"player": "Amon-Ra St. Brown", "team": "DET", "target_share": "~30%", "rush_att_share": "n/a", "snap_pct": "~90%", "rz_touch_share": "high", "source": "offense.wr1 corrected 'target-share leader'", "as_of": "2026-09-13"},
    {"player": "Breece Hall", "team": "NYJ", "target_share": "~11%", "rush_att_share": "~65%", "snap_pct": "~65%", "rz_touch_share": "high", "source": "offense.rb1 Athlon note", "as_of": "2026-09-13"},
    {"player": "Garrett Wilson", "team": "NYJ", "target_share": "~28%", "rush_att_share": "n/a", "snap_pct": "~90%", "rz_touch_share": "moderate", "source": "offense.wr1", "as_of": "2026-09-13"}
  ],
  "independent_derivations": {
    "profitable_shapes": [
      {"shape": "volume-anchored player prop on winner side", "citations": ["W3G1 Bijan 29/194/2, London 9/194", "W1 Jeanty O15.5 rush att WIN, Hall O15.5 WIN", "W2 Kelce+JT SGP +$17.20"]},
      {"shape": "home-fav ML + UNDER SGP", "citations": ["W1 KC ML+U44.5 +$14.40", "W1 ATL-PIT U42.5 +$11.20"]}
    ],
    "losing_shapes": [
      {"shape": "trailing-side rush-att OVER", "citations": ["W2 Barkley O17.5 LOSS", "W2 Bijan O16.5 LOSS"]},
      {"shape": "big-fav spreads >= -6.5", "citations": ["W1 LAC -9.5 LOSS", "W2 KC -6.5 LOSS"]}
    ]
  },
  "self_reflection": {"week1_record": "17-17", "week1_pl": "+$13.23", "week2_record": "5-13-1", "week2_pl": "-$93.16", "w3g1_record": "0-2", "w3g1_pl": "-$20.00", "past_picks_reviewed": ["W2 G6 Breece Hall O15.5 rush att HIT", "W3G1 U42.5 SGP LOSS"], "pattern_kept": "winner-side RB1 volume prop; home-fav ML+UNDER SGP capped at $6", "pattern_stopped": "player-prop OVERs without gate check; game-level-only allocations"},
  "bets": [
    {"ticket_id": "T1", "type": "straight", "selection": "Jahmyr Gibbs OVER 65.5 rush yds", "ticket_class": "player_prop_driven", "stake": 8.00, "max_loss": 8.00, "estimated_win_probability": 0.57, "odds_basis_american": -115, "price_label": "conditional", "potential_net_profit": 6.96, "total_return_incl_stake": 14.96, "break_even_probability": 0.535, "roster_sanity_gate": "PASS", "usage_anchor": "DET RB1 winner-side; Pacheco IR expands share"},
    {"ticket_id": "T2", "type": "SGP", "legs": ["Amon-Ra St. Brown OVER 6.5 receptions", "Detroit Lions Moneyline"], "ticket_class": "player_prop_driven", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.47, "odds_basis_american": 130, "price_label": "conditional", "potential_net_profit": 7.80, "total_return_incl_stake": 13.80, "break_even_probability": 0.435, "roster_sanity_gate": "PASS", "usage_anchor": "target-share leader ~30%"},
    {"ticket_id": "T3", "type": "SGP", "legs": ["Detroit Lions Moneyline", "Game total UNDER 48.5"], "ticket_class": "game_level", "stake": 6.00, "max_loss": 6.00, "estimated_win_probability": 0.46, "odds_basis_american": 115, "price_label": "conditional", "potential_net_profit": 6.90, "total_return_incl_stake": 12.90, "break_even_probability": 0.465}
  ],
  "sources": [
    {"url": "Data/2026/rosters/new-york-jets.json", "fetch_succeeded": true, "quote": "'Breece Hall' Actual RB1 per Athlon"},
    {"url": "Data/2026/rosters/detroit-lions.json", "fetch_succeeded": true, "quote": "'Amon-Ra St. Brown' target-share leader"},
    {"url": "Docs/2026/week-03-analysis.md", "fetch_succeeded": true, "quote": "W3G1 Bijan 29/194/2"},
    {"url": "https://www.bovada.lv/sports/football/nfl/player-props", "fetch_succeeded": false}
  ],
  "reasoning_summary": "DET home fav in an above-average total (48.5). Two player-prop-driven tickets on winner-side volume (Gibbs rush yds, Amon-Ra receptions SGP with DET ML). Game-level $6 DET ML + U48.5. All conditional."
}
```
