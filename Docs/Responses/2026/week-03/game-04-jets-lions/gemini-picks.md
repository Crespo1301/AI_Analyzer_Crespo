# Gemini Week 3 Game 4: New York Jets at Detroit Lions — v3.4 response

Captured: 2026-09-27 12:21 ET (pre-game, 39 min to kickoff). model_version: gemini-2.5-flash-2026.

## Summary

NYJ 1-1 at DET 1-1. DET -6.5 home favorites, total 48.5. Lions OUT: Ben Bartch, Thomas Harper. QUESTIONABLE: Christian Mahogany, Blake Miller, Tate Ratledge. Jets QUESTIONABLE: Adonai Mitchell, Joseph Ossai. Allocation: $8 Amon-Ra St. Brown O6.5 Rec (-120); $6 SGP Jahmyr Gibbs O24.5 Rec Yds (-115) + DET ML (-305) at +135; $6 NYJ +6.5 (-108).

Projected DET 27, NYJ 23 (Jets cover +6.5). St. Brown 27.8% target share. DET 0-2 ATS, NYJ 2-0 ATS. Mahomes-like big-fav trap flagged for Lions laying -6.5.

## Structured JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-27T12:21:14-04:00",
  "week": 3,
  "game_id": "jets-lions",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "composition": {"ticket_count": 3, "player_prop_driven_count": 2, "game_level_exposure_dollars": 6.0},
  "team_profiles_read": [
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/new-york-jets.html", "as_of": "2026-09-25", "season_record": "1-1-0", "health_key_players": "Adonai Mitchell Q, Joseph Ossai Q"},
    {"path_or_url": "https://crespo1301.github.io/AI_Analyzer_Crespo/research/teams/detroit-lions.html", "as_of": "2026-09-25", "season_record": "1-1-0", "health_key_players": "Ben Bartch OUT, Thomas Harper OUT, Mahogany Q, Blake Miller Q, Tate Ratledge Q"}
  ],
  "roster_sanity_gate_results": [
    {"player": "Amon-Ra St. Brown", "team": "DET", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Jahmyr Gibbs", "team": "DET", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"},
    {"player": "Breece Hall", "team": "NYJ", "on_team": true, "active_this_week": true, "role_plausible": true, "verdict": "PASSED"}
  ],
  "usage_share_table": [
    {"player": "Amon-Ra St. Brown", "team": "DET", "target_share": "27.8%", "rush_att_share": "1.5%", "snap_pct": "85.0%", "rz_touch_share": "28.0%", "as_of": "2026-09-25"},
    {"player": "Jahmyr Gibbs", "team": "DET", "target_share": "15.5%", "rush_att_share": "48.0%", "snap_pct": "58.0%", "rz_touch_share": "38.0%", "as_of": "2026-09-25"},
    {"player": "Garrett Wilson", "team": "NYJ", "target_share": "26.5%", "rush_att_share": "0.0%", "snap_pct": "88.0%", "rz_touch_share": "24.0%", "as_of": "2026-09-25"}
  ],
  "independent_derivations": {
    "profitable_shapes": ["Volume-anchored receptions OVER on primary WR1 in dome games (W3G1 London 9-rec print)", "2-leg SGP combining winner ML + primary pass-catching RB rec yards OVER"],
    "losing_shapes": ["100% game-level exposure (W3G1 -$20.00)", "Laying >=6.5 on home favorites with 0-2 ATS records"]
  },
  "self_reflection": {
    "week1_record": "1-1", "week1_pl": "-$1.80",
    "week2_record": "7-7", "week2_pl": "-$9.36",
    "w3g1_record": "0-2", "w3g1_pl": "-$20.00",
    "pattern_kept": "v3.4 composition rules",
    "pattern_stopped": "100% game-level tickets, laying points on big home favorites >= 6.5"
  },
  "bets": [
    {"ticket_id": "ticket_1", "ticket_class": "player_prop_driven", "type": "straight", "selection": "Amon-Ra St. Brown Over 6.5 Receptions", "odds_american": "-120", "stake": 8.0, "estimated_win_prob": 0.63, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:15:00Z"},
    {"ticket_id": "ticket_2", "ticket_class": "player_prop_driven", "type": "parlay", "selection": "Jahmyr Gibbs Over 24.5 Receiving Yards (-115) + Detroit Lions Moneyline (-305)", "odds_american": "+135", "stake": 6.0, "estimated_win_prob": 0.48, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:15:00Z"},
    {"ticket_id": "ticket_3", "ticket_class": "game_level", "type": "straight", "selection": "New York Jets +6.5", "odds_american": "-108", "stake": 6.0, "estimated_win_prob": 0.565, "classification": "reference_market", "market_source": "DraftKings", "captured_at": "2026-09-27T12:15:00Z"}
  ],
  "sources": [
    {"url": "https://www.si.com/nfl/lions/onsi/detroit-lions-2026-week-three-thursday-injury-report-two-out-three-limited", "fetch_succeeded": true, "quoted_snippet": "OG Ben Bartch (NP) -- Foot. Safety Thomas Harper (NP) -- Ankle."},
    {"url": "https://www.covers.com/nfl/jets-vs-lions-prediction-picks-best-bets-today-sept-27-2026", "fetch_succeeded": true, "quoted_snippet": "Jets +6.5 | Lions -6.5. Over/Under: 48.5. Moneyline: Jets +245 | Lions -305."},
    {"url": "https://www.bleachernation.com/picks/2026/09/26/lions-vs-jets-prediction-week-3-picks-live-odds-start-time-september-27-2026/", "fetch_succeeded": true, "quoted_snippet": "Lions haven't won against the spread this season (0-2-0). Jets have won twice ATS."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null}
  ],
  "reasoning_summary": "$14 on two player-prop tickets (St. Brown O6.5 Rec $8; Gibbs O24.5 Rec Yds + DET ML SGP $6), $6 Jets +6.5. Targets St. Brown's elite volume in Ford Field + Gibbs' checkdown role; avoids laying -6.5 on 0-2 ATS DET."
}
```
