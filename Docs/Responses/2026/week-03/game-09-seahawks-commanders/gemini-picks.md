# Gemini Week 3 Game 9: Seattle Seahawks at Washington Commanders — v3.4 response

Captured: 2026-09-27 12:29 ET. model_version: gemini-2.5-flash-2026.

## Summary

SEA 1-0 at WSH 0-1. WSH -3.5 home favorites, total 44.5. Commanders QUESTIONABLE: Terry McLaurin. Seahawks clean injury report. Allocation: $8 Kenneth Walker III O58.5 Rush Yds (-115); $6 SGP Jayden Daniels O42.5 Rush Yds (-115) + WSH ML (-175) at +180; $6 WSH -3.5 (-110).

Projected WSH 24, SEA 20. Walker 68% rush share; Daniels 28% designed-rush share.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T12:29:49-04:00",
  "week": 3,
  "game_id": "seahawks-commanders",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/seattle-seahawks.html", "as_of": "2026-09-25", "season_record": "1-0-0", "health_key_players": "None"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/washington-commanders.html", "as_of": "2026-09-25", "season_record": "0-1-0", "health_key_players": "Terry McLaurin Q"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Kenneth Walker III", "team": "SEA", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Jayden Daniels", "team": "WSH", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Brian Robinson Jr.", "team": "WSH", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Kenneth Walker III", "team": "SEA", "target_share": "12.0%", "rush_att_share": "68.0%", "snap_pct": "66.0%", "rz_touch_share": "60.0%", "as_of": "2026-09-25"},
    {"player": "DK Metcalf", "team": "SEA", "target_share": "26.5%", "rush_att_share": "0.0%", "snap_pct": "85.0%", "rz_touch_share": "25.0%", "as_of": "2026-09-25"},
    {"player": "Jayden Daniels", "team": "WSH", "target_share": "0.0%", "rush_att_share": "28.0%", "snap_pct": "100.0%", "rz_touch_share": "35.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored rushing yards OVER on primary backs (W3G1 Bijan 29/194 print)", "2-leg SGPs combining dual-threat QB rushing yards OVER with team ML"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00)", "Ceiling-anchored player props on trailing passing offenses"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules",
    "pattern_stopped": "100% game-level tickets, ceiling-anchored OVERs on trailing teams"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Kenneth Walker III Over 58.5 Rushing Yards", "odds_american": "-115", "stake": 8.0, "estimated_win_prob": 0.62, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:25:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "Jayden Daniels Over 42.5 Rushing Yards (-115) + Washington Commanders Moneyline (-175)", "odds_american": "+180", "stake": 6.0, "estimated_win_prob": 0.43, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:25:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "Washington Commanders -3.5", "odds_american": "-110", "stake": 6.0, "estimated_win_prob": 0.56, "classification": "reference_market", "market_source": "FanDuel", "captured_at": "2026-09-27T12:25:00Z"}
  ],
  "sources": [
    {"url": "https://www.commanders.com/news/injury-report-week-3-commanders-vs-seahawks-2026", "fetch_succeeded": true, "quoted_snippet": "Jayden Daniels and Brian Robinson Jr. active without injury status; Terry McLaurin Q with ankle."},
    {"url": "https://www.seahawks.com/news/seahawks-injury-report-week-3-at-commanders-2026", "fetch_succeeded": true, "quoted_snippet": "Seattle Seahawks enter Week 3 with clean injury report."},
    {"url": "https://athlonsports.com/nfl/washington-commanders/commanders-vs-seahawks-week-3-betting-line-best-bets", "fetch_succeeded": true, "quoted_snippet": "Washington Commanders are 3.5-point home favorites."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (Walker O58.5 Rush Yds $8; Daniels O42.5 Rush Yds + WSH ML SGP $6), $6 WSH -3.5. Walker 68% rush share + Daniels dual-threat rushing floor."
}
```
