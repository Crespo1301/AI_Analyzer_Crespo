# Gemini Week 3 Game 8: Cincinnati Bengals at Pittsburgh Steelers — v3.4 response

Captured: 2026-09-27 12:28 ET. model_version: gemini-2.5-flash-2026.

## Summary

CIN 2-0 at PIT 1-1. CIN -3.5 road favorites, total 43.5. Bengals OUT: Andrei Iosivas. DOUBTFUL: B.J. Hill. Steelers OUT: Rico Dowdle, Gennings Dunker. QUESTIONABLE: Jaylen Warren, Michael Pittman Jr., Joey Porter Jr., Jamel Dean. Allocation: $8 Ja'Marr Chase O72.5 Rec Yds (-115); $6 SGP Jaylen Warren O54.5 Rush Yds (-115) + CIN ML (-180) at +185; $6 CIN -3.5 (-110).

Projected CIN 27, PIT 20. Chase 29.5% target share vs banged-up PIT CBs. Warren 65% rush share with Dowdle OUT.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T12:28:25-04:00",
  "week": 3,
  "game_id": "bengals-steelers",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/cincinnati-bengals.html", "as_of": "2026-09-25", "season_record": "2-0-0", "health_key_players": "Andrei Iosivas OUT, B.J. Hill DOUBTFUL"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/pittsburgh-steelers.html", "as_of": "2026-09-25", "season_record": "1-1-0", "health_key_players": "Rico Dowdle OUT, Gennings Dunker OUT, Jaylen Warren Q, Pittman Q, Porter Q, Dean Q"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Ja'Marr Chase", "team": "CIN", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Jaylen Warren", "team": "PIT", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Tee Higgins", "team": "CIN", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Ja'Marr Chase", "team": "CIN", "target_share": "29.5%", "rush_att_share": "1.0%", "snap_pct": "88.0%", "rz_touch_share": "28.0%", "as_of": "2026-09-25"},
    {"player": "Tee Higgins", "team": "CIN", "target_share": "22.0%", "rush_att_share": "0.0%", "snap_pct": "82.0%", "rz_touch_share": "22.0%", "as_of": "2026-09-25"},
    {"player": "Jaylen Warren", "team": "PIT", "target_share": "14.0%", "rush_att_share": "65.0%", "snap_pct": "64.0%", "rz_touch_share": "58.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored receiving yards OVER on elite WR1 vs injured CBs (W3G1 London 9/194 print)", "2-leg SGPs combining winner ML with lead RB rushing yards OVER"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00)", "Fading clear workhorse backs on minor Q tags when partner is OUT"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules",
    "pattern_stopped": "100% game-level tickets, fading lead backs"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Ja'Marr Chase Over 72.5 Receiving Yards", "odds_american": "-115", "stake": 8.0, "estimated_win_prob": 0.63, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:20:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "Jaylen Warren Over 54.5 Rushing Yards (-115) + Cincinnati Bengals Moneyline (-180)", "odds_american": "+185", "stake": 6.0, "estimated_win_prob": 0.42, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:20:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "Cincinnati Bengals -3.5", "odds_american": "-110", "stake": 6.0, "estimated_win_prob": 0.565, "classification": "reference_market", "market_source": "FanDuel", "captured_at": "2026-09-27T12:20:00Z"}
  ],
  "sources": [
    {"url": "https://www.bengals.com/news/steelers-bengals-injury-report-week-3-2026", "fetch_succeeded": true, "quoted_snippet": "Andrei Iosivas OUT, B.J. Hill DOUBTFUL; Rico Dowdle, Gennings Dunker OUT; Warren, Pittman, Porter, Dean Q."},
    {"url": "https://clutchpoints.com/nfl/pittsburgh-steelers/final-steelers-injury-report-ahead-of-week-3-game-vs-bengals", "fetch_succeeded": true, "quoted_snippet": "Rico Dowdle and rookie guard Gennings Dunker have both been ruled out... Jaylen Warren expects to play."},
    {"url": "https://athlonsports.com/nfl/pittsburgh-steelers/steelers-vs-bengals-week-3-betting-line-all-steelers-best-bets", "fetch_succeeded": true, "quoted_snippet": "The Steelers are 3.5-point underdogs."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (Chase O72.5 Rec Yds $8; Warren O54.5 Rush Yds + CIN ML SGP $6), $6 CIN -3.5. Targets Chase vs injured PIT secondary + Warren expanded carry share."
}
```
