# Gemini Week 3 Game 11: Arizona Cardinals at San Francisco 49ers — v3.4 response

Captured: 2026-09-27 15:37 ET. model_version: gemini-2.5-flash-2026. Note: Gemini labeled this "game-10" in filename proposal; canonical gid is cardinals-niners which is G11 per schedule.

## Summary

ARI 1-1 at SF 2-0. SF -8.5 home favorites, total 47.5. 49ers OUT: Nick Bosa (knee/hip), DT James Thompson, DT CJ West. Cardinals clean. Allocation: $8 Christian McCaffrey O13.5 Rush Att (-114); $6 SGP Trey McBride O58.5 Rec Yds (-115) + SF ML (-435) at +140; $6 ARI +8.5 (-108).

Projected SF 27, ARI 20 (Cards cover +8.5). McCaffrey 62% rush share; McBride 25.5% target share. Big-fav trap flagged for SF -8.5 missing Bosa.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T15:37:51-04:00",
  "week": 3,
  "game_id": "cardinals-niners",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/arizona-cardinals.html", "as_of": "2026-09-25", "season_record": "1-1-0", "health_key_players": "Jacoby Brissett Active, Jeremiyah Love Active, Trey McBride Active"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/san-francisco-49ers.html", "as_of": "2026-09-25", "season_record": "2-0-0", "health_key_players": "Nick Bosa OUT, Mike Evans Active, Christian McCaffrey Active, George Kittle Active"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Christian McCaffrey", "team": "SF", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Trey McBride", "team": "ARI", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "George Kittle", "team": "SF", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Christian McCaffrey", "team": "SF", "target_share": "14.5%", "rush_att_share": "62.0%", "snap_pct": "72.0%", "rz_touch_share": "58.0%", "as_of": "2026-09-25"},
    {"player": "George Kittle", "team": "SF", "target_share": "20.5%", "rush_att_share": "0.0%", "snap_pct": "84.0%", "rz_touch_share": "25.0%", "as_of": "2026-09-25"},
    {"player": "Trey McBride", "team": "ARI", "target_share": "25.5%", "rush_att_share": "0.0%", "snap_pct": "85.0%", "rz_touch_share": "30.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored workhorse rush attempts OVER on home favorites (W3G1 Bijan 29-att print)", "2-leg SGPs combining trailing TE receiving yards OVER with favorite ML"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00)", "Laying large spreads (>=8.5) on favorites missing elite edge rushers"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules",
    "pattern_stopped": "100% game-level tickets, laying large spreads on favorites missing pass rushers"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Christian McCaffrey Over 13.5 Rushing Attempts", "odds_american": "-114", "stake": 8.0, "estimated_win_prob": 0.65, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T15:30:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "Trey McBride Over 58.5 Receiving Yards (-115) + San Francisco 49ers Moneyline (-435)", "odds_american": "+140", "stake": 6.0, "estimated_win_prob": 0.48, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T15:30:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "Arizona Cardinals +8.5", "odds_american": "-108", "stake": 6.0, "estimated_win_prob": 0.565, "classification": "reference_market", "market_source": "Sportsbook Review", "captured_at": "2026-09-27T15:30:00Z"}
  ],
  "sources": [
    {"url": "https://www.foxsports.com/stories/nfl/how-to-watch-cardinals-vs-49ers-tv-channel-live-stream-time-2026-week-3", "fetch_succeeded": true, "quoted_snippet": "Arizona is 1-1 after a 31-7 loss to Seattle and San Francisco is 2-0... 49ers Reportedly Dealt Another Nick Bosa Injury Blow"},
    {"url": "https://www.actionnetwork.com/nfl-game/cardinals-49ers-score-odds-september-27-2026/290884", "fetch_succeeded": true, "quoted_snippet": "Christian McCaffrey Over 13.5 Rush Attempts -114. THE BLITZ is forecasting 17.48 rush attempts."},
    {"url": "https://www.sportsbookreview.com/picks/nfl/cardinals-vs-49ers-prediction-odds-picks-week-3-2026/", "fetch_succeeded": true, "quoted_snippet": "Cardinals +8.5 (-108) | 49ers -8.5 (-110). Moneyline: Cardinals +360 | 49ers -474."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (McCaffrey O13.5 Rush Att $8; McBride O58.5 Rec Yds + SF ML SGP $6), $6 Cards +8.5. Targets McCaffrey volume + McBride floor; takes points on ARI vs Bosa-less SF."
}
```
