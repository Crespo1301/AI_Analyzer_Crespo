# Gemini Week 3 Game 12: Minnesota Vikings at Tampa Bay Buccaneers — v3.4 response

Captured: 2026-09-27 15:50 ET. model_version: gemini-2.5-flash-2026.

## Summary

MIN 2-0 at TB 0-2. MIN -2.5 road favorites, total 43.5. Vikings OUT: P Brett Thorson, C Nick Samac. IR: Jordan Mason. Kyler Murray cleared concussion; Aaron Jones cleared knee. Buccaneers full-strength. Allocation: $8 Aaron Jones Sr. O58.5 Rush Yds (-115); $6 SGP Justin Jefferson O71.5 Rec Yds (-112) + MIN ML (-135) at +185; $6 MIN -2.5 (-112).

Projected MIN 24, TB 20. Jones 66% rush share with Mason on IR; Jefferson 31% target share.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T15:50:02-04:00",
  "week": 3,
  "game_id": "vikings-buccaneers",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/minnesota-vikings.html", "as_of": "2026-09-25", "season_record": "2-0-0", "health_key_players": "Brett Thorson OUT, Nick Samac OUT, Jordan Mason IR, Kyler Murray Active, Aaron Jones Active"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/tampa-bay-buccaneers.html", "as_of": "2026-09-25", "season_record": "0-2-0", "health_key_players": "Baker Mayfield Active, Chris Godwin Jr. Active, Bucky Irving Active"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Aaron Jones Sr.", "team": "MIN", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Justin Jefferson", "team": "MIN", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Chris Godwin Jr.", "team": "TB", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Aaron Jones Sr.", "team": "MIN", "target_share": "12.0%", "rush_att_share": "66.0%", "snap_pct": "68.0%", "rz_touch_share": "62.0%", "as_of": "2026-09-25"},
    {"player": "Justin Jefferson", "team": "MIN", "target_share": "31.0%", "rush_att_share": "0.0%", "snap_pct": "89.0%", "rz_touch_share": "35.0%", "as_of": "2026-09-25"},
    {"player": "Chris Godwin Jr.", "team": "TB", "target_share": "22.5%", "rush_att_share": "2.0%", "snap_pct": "81.0%", "rz_touch_share": "20.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored workhorse rushing yards OVER on primary RBs with backfield monopoly (W3G1 Bijan 29/194 print)", "2-leg SGPs combining WR1 receiving yards OVER with favorite ML"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00)", "Ceiling-anchored TD bets on trailing passing offenses"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules",
    "pattern_stopped": "100% game-level tickets, TD props on volatile trailing offenses"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Aaron Jones Sr. Over 58.5 Rushing Yards", "odds_american": "-115", "stake": 8.0, "estimated_win_prob": 0.635, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T15:40:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "Justin Jefferson Over 71.5 Receiving Yards (-112) + Minnesota Vikings Moneyline (-135)", "odds_american": "+185", "stake": 6.0, "estimated_win_prob": 0.425, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T15:40:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "Minnesota Vikings -2.5", "odds_american": "-112", "stake": 6.0, "estimated_win_prob": 0.565, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T15:40:00Z"}
  ],
  "sources": [
    {"url": "https://www.vikings.com/news/buccaneers-week-3-game-preview-2026", "fetch_succeeded": true, "quoted_snippet": "O'Connell ruled out punter Brett Thorson and center Nick Samac... No one else has a designation."},
    {"url": "https://www.nbcsports.com/fantasy/football/player-news/2026-09-25/aaron-jones-knee-good-to-go-against-buccaneers", "fetch_succeeded": true, "quoted_snippet": "Vikings RB Aaron Jones (knee) was removed from the injury report and will play in Week 3."},
    {"url": "https://www.thesportsgeek.com/blog/nfl-week-3-odds/", "fetch_succeeded": true, "quoted_snippet": "Vikings -2.5 (-112), Buccaneers +2.5 (-108), Total 43.5."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (Jones O58.5 Rush Yds $8; Jefferson O71.5 Rec Yds + MIN ML SGP $6), $6 MIN -2.5. Exploits Jones workhorse share with Mason on IR + Jefferson target floor."
}
```
