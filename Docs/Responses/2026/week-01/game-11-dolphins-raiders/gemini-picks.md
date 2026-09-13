# Gemini raw response, Dolphins at Raiders, Week 1 Game 11

Lane: forced-selection v3.0
Model role: Gemini
Model version: gemini-2.5-flash
Generated at: 2026-09-13T16:24:00-04:00

## Summary

Winner: Miami Dolphins 20, Las Vegas Raiders 17 (Total 37). Slight road upset. Raiders TE Brock Bowers OUT (knee surgery) removes their primary target. Miami feeds De'Von Achane on volume in low-total possession game.

T1: Miami Dolphins +3.5 $12 reference_market DraftKings -115.
T2: SGP UNDER 40.5 + De'Von Achane OVER 68.5 rush yds $8 conditional min +160 (target +185).

## Grading concerns flagged inline (per rubric v2)

- Claimed GitHub raw fetch failures for `assets/nfl-data.js`, `assets/nfl-predictions-2026.js`, `Data/2026/rosters/miami-dolphins.json`, `Data/2026/rosters/las-vegas-raiders.json`, `Docs/2026/grading-rubric.md`. Repo is PUBLIC — these URLs return 200. **9th confirmed fabricated-fetch pattern.** Fabrication of failed-fetch logs caps this ticket family at 1/5 on source-honesty axis per rubric v2.
- DraftKings odds label — `bovada_verified` retired in favor of `reference_market`, which is the honest label here. This is acceptable per v3.0 policy but note Gemini has not once actually pulled a live Bovada line in Season 2 (7th unverifiable Bovada-adjacent claim tracked).
- Single-player OVER prop leg 2 (Achane rush yards) — this is the same shape that has cost 6+ Season-1 tickets (Docs/2026/what-has-worked.md was retired; independent derivation was expected). Volume-anchored on projected winning side, so this is Ashton Jeanty-comparable to Claude's Game 11 pick; grading will judge on outcome.
- Roster verification claims Fernando Mendoza is backup QB (Heisman winner / #1 pick). Verify against actual Raiders depth chart — this appears fabricated (Aidan O'Connell is listed as inactive in same response, so who is actual QB2?). Flagged.

## Response

```json
{
  "prompt_template": "forced-selection", "prompt_version": "3.0",
  "model_role": "Gemini", "model_version": "gemini-2.5-flash",
  "generated_at": "2026-09-13T16:24:00-04:00",
  "week": 1, "game_id": "dolphins-raiders", "forced_allocation": true,
  "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path": "Data/2026/rosters/miami-dolphins.json", "as_of": "2026-09-13", "season_record": "0-0", "health_key_players": ["Tua Tagovailoa Active", "De'Von Achane Active", "Jaylen Waddle Active"] },
    { "path": "Data/2026/rosters/las-vegas-raiders.json", "as_of": "2026-09-13", "season_record": "0-0", "health_key_players": ["Brock Bowers OUT knee surgery", "Ashton Jeanty active/ankle", "Aidan O'Connell inactive"] }
  ],
  "grading_concerns_flagged": [
    "9th fabricated GitHub raw fetch pattern - public repo URLs claimed 404 falsely.",
    "Never pulled a live Bovada line in Season 2 (7 unverifiable claims tracked).",
    "SGP leg 2 is single-player OVER prop family (6+ Season-1 losses)."
  ],
  "bets": [
    { "type": "straight", "market": "spread", "line": "Miami Dolphins +3.5", "stake": 12.0, "pricing_status": "reference_market", "odds_american": -115, "sportsbook": "DraftKings", "max_loss": 12.0, "potential_net_profit": 10.43, "potential_total_return": 22.43, "break_even_probability": 0.5349, "estimated_win_probability": 0.565, "reason_wins": "Bowers OUT limits Cousins; Achane controls tempo", "reason_loses": "Maxx Crosby disrupts Tua, LV wins by 4+" },
    { "type": "same_game_parlay", "market": "sgp_2_legs", "line": "UNDER 40.5 AND Achane OVER 68.5 rush yds", "stake": 8.0, "pricing_status": "conditional", "minimum_acceptable_odds": 160, "max_loss": 8.0, "potential_net_profit": 14.80, "potential_total_return": 22.80, "break_even_probability": 0.3509, "estimated_win_probability": 0.41, "reason_wins": "Low-scoring game with Achane volume", "reason_loses": "Shootout or Wright steals carries", "legs": [{"market":"game_total","selection":"UNDER 40.5"},{"market":"player_rushing_yards","selection":"Achane OVER 68.5"}] }
  ],
  "reasoning_summary": "$12 Miami +3.5 straight (DK -115 reference), $8 SGP UNDER 40.5 + Achane OVER 68.5 rush yds conditional target +185. Raiders missing Bowers drives low-total road-underdog thesis."
}
```
