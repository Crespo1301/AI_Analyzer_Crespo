# Gemini Week 3 Game 7: Tennessee Titans at New York Giants — v3.4 response

Captured: 2026-09-27 12:27 ET. model_version: gemini-2.5-flash-2026.

## Summary

TEN 0-2 at NYG 1-1. NYG -2.5 home favorites, total 37.5/38.5 (low). Giants QB Jaxson Dart OUT/sidelined; Jameis Winston starting. QUESTIONABLE: Deonte Banks, Brian Burns, Tyler Nubin, Cor'Dale Flott. Titans QUESTIONABLE: Tyjae Spears. Allocation: $8 Cam Skattebo O15.5 Rush Att (-117); $6 SGP Tony Pollard O55.5 Rush Yds (-113) + Under 38.5 (-110) at +220; $6 NYG -2.5 (-110).

Projected NYG 19, TEN 14. Low-total rain game. Skattebo 62% rush share with Winston under center; Pollard 65.5% rush share with Spears Q.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T12:27:20-04:00",
  "week": 3,
  "game_id": "titans-giants",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/tennessee-titans.html", "as_of": "2026-09-25", "season_record": "0-2-0", "health_key_players": "Tyjae Spears Q"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/new-york-giants.html", "as_of": "2026-09-25", "season_record": "1-1-0", "health_key_players": "Jaxson Dart OUT, Deonte Banks Q, Brian Burns Q, Tyler Nubin Q, Cor'Dale Flott Q"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Cam Skattebo", "team": "NYG", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Tony Pollard", "team": "TEN", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Elic Ayomanor", "team": "TEN", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Cam Skattebo", "team": "NYG", "target_share": "10.5%", "rush_att_share": "62.0%", "snap_pct": "68.0%", "rz_touch_share": "55.0%", "as_of": "2026-09-25"},
    {"player": "Isaiah Likely", "team": "NYG", "target_share": "21.0%", "rush_att_share": "0.0%", "snap_pct": "76.0%", "rz_touch_share": "25.0%", "as_of": "2026-09-25"},
    {"player": "Tony Pollard", "team": "TEN", "target_share": "12.0%", "rush_att_share": "65.5%", "snap_pct": "64.0%", "rz_touch_share": "58.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored rush attempts OVER on workhorse RBs with backup QBs (W3G1 Bijan 29-att print)", "2-leg SGPs combining primary RB rushing yards OVER with Under total"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00)", "Over-estimating passing ceilings for backup QBs in outdoor wet conditions"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules",
    "pattern_stopped": "100% game-level tickets, passing OVERs in low-total outdoor games"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Cam Skattebo Over 15.5 Rushing Attempts", "odds_american": "-117", "stake": 8.0, "estimated_win_prob": 0.625, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:20:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "Tony Pollard Over 55.5 Rushing Yards (-113) + Under 38.5 Total Points (-110)", "odds_american": "+220", "stake": 6.0, "estimated_win_prob": 0.40, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:20:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "New York Giants -2.5", "odds_american": "-110", "stake": 6.0, "estimated_win_prob": 0.56, "classification": "reference_market", "market_source": "FanDuel", "captured_at": "2026-09-27T12:20:00Z"}
  ],
  "sources": [
    {"url": "https://www.foxsports.com/stories/nfl/how-to-watch-titans-vs-giants-tv-channel-live-stream-time-2026-week-3", "fetch_succeeded": true, "quoted_snippet": "Tennessee averages 15 points with 148 passing yards... Giants are 2.5-point favorites."},
    {"url": "https://www.tonyspicks.com/2026/09/27/titans-vs-giants-cam-skattebo-over-15-5-rushing-attempts-9-27-26/", "fetch_succeeded": true, "quoted_snippet": "Cam Skattebo Over 15.5 rushing attempts at -117 is the best bet... Jaxson Dart unavailable, Jameis Winston in."},
    {"url": "https://www.fanduel.com/research/titans-vs-giants-prediction-plus-who-s-most-likely-to-score-a-touchdown-today", "fetch_succeeded": true, "quoted_snippet": "New York Giants -2.5 (-110). Under 37.5 (-115)."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (Skattebo O15.5 Rush Att $8; Pollard O55.5 Rush Yds + Under 38.5 SGP $6), $6 NYG -2.5. Targets Skattebo workhorse volume with Winston starting in rain."
}
```
