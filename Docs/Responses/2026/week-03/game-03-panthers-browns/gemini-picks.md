# Gemini Week 3 Game 3: Carolina Panthers at Cleveland Browns — v3.4 response

Captured: 2026-09-27 12:18 ET (pre-game, 42 min to kickoff). model_version: gemini-2.5-flash-2026.

## Summary

CAR 1-1 at CLE 1-1. CAR -1.5 road favorites, total 41.5. Panthers OUT: Devin Lloyd, Claudin Cherelus, Nick Scott. QUESTIONABLE: Jalen Coker, Xavier Legette. Browns OUT: Teven Jenkins. QUESTIONABLE: Tyson Campbell, Grant Delpit. Allocation: $8 Chuba Hubbard O70.5 Rush Yds (-114); $6 SGP Tetairoa McMillan O62.5 Rec Yds (-114) + CAR ML (-126) at +185; $6 CAR -1.5 (-108).

Projected CAR 24, CLE 20. CAR leads NFL in passing (312.5 YPG); CLE giving up 131.5 rush YPG. McMillan 28.5% target share, Hubbard 68% rush share. Roster Sanity Gate passed for Hubbard, McMillan, Bryce Young.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T12:18:03-04:00",
  "week": 3,
  "game_id": "panthers-browns",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/carolina-panthers.html", "as_of": "2026-09-25", "season_record": "1-1-0", "health_key_players": "Devin Lloyd OUT, Claudin Cherelus OUT, Nick Scott OUT, Jalen Coker Q, Xavier Legette Q"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/cleveland-browns.html", "as_of": "2026-09-25", "season_record": "1-1-0", "health_key_players": "Teven Jenkins OUT, Tyson Campbell Q, Grant Delpit Q"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Chuba Hubbard", "team": "CAR", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Tetairoa McMillan", "team": "CAR", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Bryce Young", "team": "CAR", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Tetairoa McMillan", "team": "CAR", "target_share": "28.5%", "rush_att_share": "0.0%", "snap_pct": "84.5%", "rz_touch_share": "25.0%", "as_of": "2026-09-25"},
    {"player": "Chuba Hubbard", "team": "CAR", "target_share": "12.0%", "rush_att_share": "68.0%", "snap_pct": "71.0%", "rz_touch_share": "60.0%", "as_of": "2026-09-25"},
    {"player": "Denzel Boston", "team": "CLE", "target_share": "21.5%", "rush_att_share": "0.0%", "snap_pct": "78.0%", "rz_touch_share": "20.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored workhorse RB rushing yards OVER on projected winners (W3G1 Bijan 29-att print)", "2-leg SGPs combining winner ML with WR1 receiving yards OVER"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00 wipeout)", "Laying points on short home favorites missing OL starters"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules ($14 player prop, $6 game-level cap)",
    "pattern_stopped": "100% game-level tickets, ceiling-anchored OVERs on losing offenses"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Chuba Hubbard Over 70.5 Rushing Yards", "odds_american": "-114", "stake": 8.0, "estimated_win_prob": 0.615, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:00:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "Tetairoa McMillan Over 62.5 Rec Yds (-114) + Carolina Panthers ML (-126)", "odds_american": "+185", "stake": 6.0, "estimated_win_prob": 0.42, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:00:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "Carolina Panthers -1.5", "odds_american": "-108", "stake": 6.0, "estimated_win_prob": 0.565, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:00:00Z"}
  ],
  "sources": [
    {"url": "https://www.foxsports.com/stories/nfl/how-to-watch-panthers-vs-browns-tv-channel-live-stream-time-2026-week-3", "fetch_succeeded": true, "quoted_snippet": "Carolina brings the league lead in passing yards per game at 312.5... Cleveland has allowed 131.5 rushing yards per game."},
    {"url": "https://www.yardbarker.com/nfl/articles/final_injury_report_for_panthers_browns_will_jalen_coker_tyson_campbell_play/s1_17615_44355228", "fetch_succeeded": true, "quoted_snippet": "Devin Lloyd, Claudin Cherelus, Nick Scott OUT; Teven Jenkins OUT; Campbell, Delpit Q."},
    {"url": "https://www.sportsgambler.com/betting-tips/nfl/carolina-panthers-vs-cleveland-browns-prediction-odds-2026-09-27/", "fetch_succeeded": true, "quoted_snippet": "Chuba Hubbard Over 70.5 Rushing Yards -114. Tetairoa McMillan Over 62.5 Receiving Yards -114."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (Hubbard O70.5 Rush $8; McMillan O62.5 Rec + CAR ML SGP $6), $6 CAR -1.5. Targets CAR passing attack + Hubbard workhorse share vs CLE 32nd-ranked run D."
}
```
