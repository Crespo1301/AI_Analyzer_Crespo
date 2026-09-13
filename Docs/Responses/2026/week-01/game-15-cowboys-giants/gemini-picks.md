# Gemini raw response, Cowboys at Giants, Week 1 Game 15 (SNF)

Lane: forced-selection v3.0
Model role: Gemini
Model version: gemini web (self-identifies as CSolutions AI Analyzer)
Generated at: 2026-09-13T18:06:51-04:00

## Summary

Winner: Dallas Cowboys 27, Giants 20. Dak Prescott anchors passing game, Parsons/Q.Williams pressure NYG.

T1: Dallas Cowboys -3.0 $12 reference_market DraftKings -105.
T2: SGP DAL ML (-158) + OVER 47.5 (-110) $8 reference_market +210.

## Grading concerns flagged inline (per rubric v2)

- **11th fabricated GitHub raw fetch pattern.** Public repo returns 200 not 404. Consistent lie.
- Claims "Quinnen Williams (DT1)" for Cowboys. Quinnen Williams plays for the New York Jets, not Cowboys. **12th significant player-team hallucination this season** (Kyler Murray/Vikings was 10th; adds to fabricated Raiders backup QB claim earlier).
- Claims "Dallas 6-game ATS streak at MetLife" - unverifiable claim without citation to specific games and years.
- DraftKings quoted line (48.5) contradicts Gemini's own SGP (47.5). Line inconsistency within same response.

## Response

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.0",
  "model_role": "Gemini", "model_version": "gemini web",
  "generated_at": "2026-09-13T18:06:51-04:00",
  "week": 1, "game_id": "cowboys-giants", "forced_allocation": true,
  "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path": "Data/2026/rosters/dallas-cowboys.json", "as_of": "2026-09-13", "season_record": "0-0", "health_key_players": ["Dak Prescott ACTIVE", "Micah Parsons ACTIVE", "Quinnen Williams claimed ACTIVE - HALLUCINATION, Williams plays for NYJ"] },
    { "path": "Data/2026/rosters/new-york-giants.json", "as_of": "2026-09-13", "season_record": "0-0", "health_key_players": ["Malik Nabers ACTIVE"] }
  ],
  "grading_concerns_flagged": [
    "11th fabricated GitHub raw fetch pattern.",
    "Quinnen Williams hallucinated as Cowboys DT1; he plays for the New York Jets.",
    "Unverifiable 'Dallas 6-game ATS streak at MetLife' claim.",
    "Internal line inconsistency: DK snippet says 48.5, SGP uses 47.5."
  ],
  "bets": [
    { "type": "single", "market": "spread", "line": "Dallas Cowboys -3.0", "stake": 12.0, "pricing_status": "reference_market", "odds_american": -105, "sportsbook": "DraftKings", "max_loss": 12.0, "potential_net_profit": 11.43, "potential_total_return": 23.43, "break_even_probability": 0.512, "estimated_win_probability": 0.560 },
    { "type": "parlay", "market": "sgp_2_legs", "line": "DAL ML (-158) + OVER 47.5 (-110)", "stake": 8.0, "pricing_status": "reference_market", "odds_american": 210, "max_loss": 8.0, "potential_net_profit": 16.80, "potential_total_return": 24.80, "break_even_probability": 0.323, "estimated_win_probability": 0.365 }
  ],
  "reasoning_summary": "$12 DAL -3.0 straight DK -105 + $8 SGP DAL ML + OVER 47.5 at +210."
}
```
