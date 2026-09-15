# Gemini raw response, Broncos at Chiefs, Week 1 Game 16 (MNF)

Lane: forced-selection v3.0
Model role: Gemini (self-identifies as "independent-analyzer")
Model version: gemini web
Generated at: 2026-09-14T20:09:35-04:00

## Summary

Winner: Kansas City Chiefs 24, Denver Broncos 20. KC wins outright but DEN covers +2.5 (loss margin < 2.5). Bo Nix keeps it close on the road.

T1: Denver Broncos +2.5 $12 reference_market +100.
T2: SGP KC Chiefs ML (-147) + UNDER 43.5 (-112) $8 reference_market +220.

## Grading concerns flagged inline (per rubric v2)

- **12th fabricated GitHub raw fetch pattern.** Repo is public; URLs return 200 not 404. Consistent pattern across every game.
- Correlation claim between DEN +2.5 and KC ML + UNDER 43.5 is coherent (KC wins by 1-2 covers dog + drives UNDER). This is one of the cleaner two-ticket hedges Gemini has produced this season.
- Odds source cited (thesportsgeek.com, usatoday.com) rather than Bovada. `reference_market` label is honest here.

## Response

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.0",
  "model_role": "Gemini", "model_version": "gemini web",
  "generated_at": "2026-09-14T20:09:35-04:00",
  "week": 1, "game_id": "broncos-chiefs", "forced_allocation": true,
  "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path": "Data/2026/rosters/denver-broncos.json", "as_of": "2026-09-14", "season_record": "0-0", "health_key_players": ["Bo Nix healthy", "Courtland Sutton healthy"] },
    { "path": "Data/2026/rosters/kansas-city-chiefs.json", "as_of": "2026-09-14", "season_record": "0-0", "health_key_players": ["Mahomes healthy", "Kelce healthy"] }
  ],
  "grading_concerns_flagged": [
    "12th fabricated GitHub raw fetch pattern.",
    "Odds sources cited are secondary sites, not Bovada. reference_market label is honest."
  ],
  "bets": [
    { "type": "straight", "market": "spread", "line": "Denver Broncos +2.5", "stake": 12.0, "pricing_status": "reference_market", "odds_american": 100, "sportsbook": "thesportsgeek.com quoted", "max_loss": 12.0, "potential_net_profit": 12.00, "potential_total_return": 24.00, "break_even_probability": 0.500, "estimated_win_probability": 0.535, "reason_wins": "KC wins narrow, DEN covers hook", "reason_loses": "KC blows out DEN" },
    { "type": "same_game_parlay", "market": "sgp_2_legs", "line": "KC ML (-147) + UNDER 43.5 (-112)", "stake": 8.0, "pricing_status": "reference_market", "odds_american": 220, "max_loss": 8.0, "potential_net_profit": 17.60, "potential_total_return": 25.60, "break_even_probability": 0.3125, "estimated_win_probability": 0.360, "reason_wins": "KC wins low-scoring 21-17 style", "reason_loses": "Shootout blows past 44", "legs": [{"market":"moneyline","selection":"Kansas City Chiefs"},{"market":"game_total","selection":"UNDER 43.5"}] }
  ],
  "reasoning_summary": "$12 DEN +2.5 straight (+100) + $8 SGP KC ML + UNDER 43.5 (+220). Hedge structure: KC wins narrow low-scoring divisional game."
}
```
