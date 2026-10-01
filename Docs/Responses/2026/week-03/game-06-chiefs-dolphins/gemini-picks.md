# Gemini Week 3 Game 6: Kansas City Chiefs at Miami Dolphins — v3.4 response

Captured: 2026-09-27 12:28 ET. model_version: gemini-2.5-flash-2026.

## Summary

KC 2-0 at MIA 0-2. KC -10.5 road favorites, total 46.5. KC OUT: Josh Simmons. Chris Jones, Sneed, Conner limited/active. MIA OUT: Rob Beal Jr., Caleb Douglas. DOUBTFUL: Jalen Wright. QUESTIONABLE: JuJu Brents. Allocation: $8 Travis Kelce O4.5 Rec (-125); $6 SGP De'Von Achane O15.5 Rush Att (+104) + Under 46.5 Total (-115) at +260; $6 MIA +10.5 (-105).

Projected KC 24, MIA 16 (Dolphins cover +10.5). Mahomes 4-11 ATS as double-digit favorite — big-fav trap cited. Kelce 21.5% target share, Achane 74.2% backfield touch share at home.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T12:28:45-04:00",
  "week": 3,
  "game_id": "chiefs-dolphins",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/kansas-city-chiefs.html", "as_of": "2026-09-25", "season_record": "2-0-0", "health_key_players": "Josh Simmons OUT, Chris Jones LP, Sneed LP, Conner LP"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/miami-dolphins.html", "as_of": "2026-09-25", "season_record": "0-2-0", "health_key_players": "Rob Beal Jr. OUT, Caleb Douglas OUT, Jalen Wright DOUBTFUL, JuJu Brents Q, Chop Robinson Active"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Travis Kelce", "team": "KC", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "De'Von Achane", "team": "MIA", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Patrick Mahomes", "team": "KC", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Travis Kelce", "team": "KC", "target_share": "21.5%", "rush_att_share": "0.0%", "snap_pct": "78.5%", "rz_touch_share": "24.0%", "as_of": "2026-09-25"},
    {"player": "Rashee Rice", "team": "KC", "target_share": "26.2%", "rush_att_share": "1.0%", "snap_pct": "82.0%", "rz_touch_share": "22.0%", "as_of": "2026-09-25"},
    {"player": "De'Von Achane", "team": "MIA", "target_share": "16.5%", "rush_att_share": "74.2%", "snap_pct": "71.0%", "rz_touch_share": "62.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored receptions OVER on primary TE (W3G1 London 9-rec print)", "2-leg SGPs combining workhorse RB rush attempts OVER with Under total"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00)", "Laying double-digit points on road favorites (Mahomes 4-11 ATS as DD-fav)"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules",
    "pattern_stopped": "100% game-level tickets and laying double-digit points on road favorites"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Travis Kelce Over 4.5 Receptions", "odds_american": "-125", "stake": 8.0, "estimated_win_prob": 0.635, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:20:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "De'Von Achane Over 15.5 Rushing Attempts (+104) + Under 46.5 Total Points (-115)", "odds_american": "+260", "stake": 6.0, "estimated_win_prob": 0.38, "classification": "reference_market", "market_source": "DraftKings / Kalshi", "captured_at": "2026-09-27T12:20:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "Miami Dolphins +10.5", "odds_american": "-105", "stake": 6.0, "estimated_win_prob": 0.57, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:20:00Z"}
  ],
  "sources": [
    {"url": "https://www.chiefs.com/news/week-3-injury-report-chiefs-vs-dolphins-2026", "fetch_succeeded": true, "quoted_snippet": "T Josh Simmons (Back) DNP/OUT. DT Chris Jones, CB L'Jarius Sneed, DB Chamarri Conner Limited."},
    {"url": "https://www.actionnetwork.com/nfl/kansas-city-chiefs-vs-miami-dolphins-prediction-pick-odds-nfl-week-3-september-27", "fetch_succeeded": true, "quoted_snippet": "Mahomes is an abysmal 4-11 against the spread in his career as a double-digit favorite."},
    {"url": "https://www.sportsbettingdime.com/news/nfl/player-props-anytime-td-picks-chiefs-dolphins/", "fetch_succeeded": true, "quoted_snippet": "De'Von Achane 16+ Rushing Attempts (+104). Has exceeded 15.5 rush attempts in four of his last five games at Hard Rock Stadium."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (Kelce O4.5 Rec $8; Achane O15.5 Rush Att + Under 46.5 SGP $6), $6 MIA +10.5. Exploits Kelce target floor + Achane home workload; avoids laying -10.5 on Mahomes short-rest in Miami humidity."
}
```
