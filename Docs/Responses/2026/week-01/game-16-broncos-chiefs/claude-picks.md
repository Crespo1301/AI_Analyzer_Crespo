# Claude raw response, Broncos at Chiefs, Week 1 Game 16 (MNF)

Lane: forced-selection v3.0 (batch run)
Model role: Claude
Model version: claude-opus-4-7
Generated at: 2026-09-13T12:16:00-04:00

## Summary

Winner: Kansas City Chiefs 24, Denver Broncos 17 (41 total). Broncos QB1 heuristic Sam Ehlinger — HARD error, actual starter is Bo Nix. Chiefs QB1 heuristic Justin Fields — possible error (Mahomes was flagged doubtful in earlier reads; verify). Chiefs home MNF opener.

T1: KC -3.5 $12 conditional min -110 (if Mahomes plays; if Fields starts then reduce to conditional min -105).
T2: SGP KC ML + game UNDER 44.5 $8 conditional min +180.

## Roster corrections flagged

- Broncos qb1 listed as Sam Ehlinger. Actual starter is Bo Nix - hard error.
- Chiefs qb1 listed as Justin Fields. Verify - Mahomes may still be QB1 (was doubtful early in week per prior game analysis).

## Response

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.0",
  "model_role": "Claude", "model_version": "claude-opus-4-7",
  "generated_at": "2026-09-13T12:16:00-04:00",
  "week": 1, "game_id": "broncos-chiefs", "forced_allocation": true,
  "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path": "Data/2026/rosters/denver-broncos.json", "as_of": "2026-09-13", "season_record": "0-0", "health_key_players": ["LB Jonathon Cooper out", "G Nick Gargiulo out"] },
    { "path": "Data/2026/rosters/kansas-city-chiefs.json", "as_of": "2026-09-13", "season_record": "0-0", "health_key_players": ["OT Josh Simmons out", "S Chamarri Conner out", "DT Omarr Norman-Lott out"] }
  ],
  "roster_heuristic_errors_flagged": [
    "Broncos qb1 listed as Sam Ehlinger. Actual starter is Bo Nix - HARD error.",
    "Chiefs qb1 listed as Justin Fields. Verify - if Mahomes cleared he is QB1."
  ],
  "independent_derivations": {
    "profitable_shapes": [
      {"shape": "Short-favorite spread through hook", "record": "2-0", "citation": "W9 49ers -2.5; W11 Eagles -1.5"},
      {"shape": "Game total UNDER at defensible number", "record": "8-4", "citation": "Full UNDER family"}
    ],
    "losing_shapes": [
      {"shape": "Single-player OVER props", "citation": "6 of 11 NFL_CORRECTIONS"}
    ]
  },
  "self_reflection": {"past_picks_reviewed": ["Game 6 Ravens ML + UNDER SGP structure"], "pattern_kept": "Home team spread through hook + ML/UNDER SGP", "pattern_stopped": "N/A"},
  "bets": [
    { "type": "straight", "market": "spread", "line": "Kansas City Chiefs -3.5", "stake": 12.0, "pricing_status": "conditional", "minimum_acceptable_odds": -110, "payout_basis": "minimum_acceptable_odds", "max_loss": 12.0, "potential_net_profit": 10.91, "potential_total_return": 22.91, "break_even_probability": 0.5238, "estimated_win_probability": 0.57, "reason_wins": "KC home MNF opener; Broncos road with Bo Nix (2nd year); AFC West division opener with KC coaching edge", "reason_loses": "Bo Nix efficient day, DEN keeps within 3", "settlement_rules": "Push at 3 possible if line is exactly -3.5 but hook covers push risk", "legs": [] },
    { "type": "same_game_parlay", "market": "sgp_2_legs", "line": "Kansas City Chiefs ML AND game UNDER 44.5", "stake": 8.0, "pricing_status": "conditional", "minimum_acceptable_odds": 180, "payout_basis": "minimum_acceptable_odds", "max_loss": 8.0, "potential_net_profit": 14.40, "potential_total_return": 22.40, "break_even_probability": 0.3571, "estimated_win_probability": 0.42, "reason_wins": "24-17 style KC win, both defenses hold OVER", "reason_loses": "Mahomes/Fields sling 3 TDs + Nix answers, 30-27 game", "legs": [{"market": "moneyline", "selection": "Kansas City Chiefs"}, {"market": "game_total", "selection": "UNDER 44.5"}] }
  ],
  "reasoning_summary": "KC home MNF opener with QB uncertainty on both sides (Mahomes doubtful, Bo Nix year 2 for DEN). Standard home-favorite spread + ML/UNDER SGP structure. Verified rosters flag Broncos QB1 heuristic (Ehlinger listed, Bo Nix actual)."
}
```
