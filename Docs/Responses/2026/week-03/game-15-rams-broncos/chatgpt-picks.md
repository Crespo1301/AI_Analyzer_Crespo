# Week 3 Game 15: Los Angeles Rams at Denver Broncos

Eligibility checked at 2026-09-27T12:18:29-04:00; SNF kickoff at 8:20 PM ET is in the future.

## Summary
Projected winner: Los Angeles Rams. Three conditional tickets allocate the full 0.

## Grading concerns
Compressed pass: official current usage shares, injury/depth-chart reports, weather, and event-specific Bovada quotes were not independently verified. No ticket is labeled Bovada-verified.

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Codex",
  "model_version": "GPT-6",
  "generated_at": "2026-09-27T12:18:29-04:00",
  "lock_at": null,
  "week": 3,
  "game_id": "rams-broncos",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "eligibility": "pre-game checked at 2026-09-27T12:18:29-04:00; kickoff 8:20 PM ET remains future",
  "bets": [
    {
      "type": "straight",
      "market": "Spread",
      "line": "Los Angeles Rams conditional spread target",
      "stake": 6,
      "pricing_status": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": -110,
      "max_loss": 6,
      "potential_net_profit": 5.45,
      "potential_total_return": 11.45,
      "break_even_probability": 0.5238,
      "estimated_win_probability": 0.54,
      "value_reasoning": "No event-specific Bovada quote verified; -110 is only a hypothetical minimum target.",
      "reason_wins": "Rams passing efficiency and matchup edge produce a margin.",
      "reason_loses": "Denver defense controls explosives and keeps the game within the number.",
      "settlement_rules": "Unknown",
      "legs": []
    },
    {
      "type": "straight",
      "market": "Prop",
      "line": "Kyren Williams over 67.5 rushing yards conditional",
      "stake": 8,
      "pricing_status": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": -110,
      "max_loss": 8,
      "potential_net_profit": 7.27,
      "potential_total_return": 15.27,
      "break_even_probability": 0.5238,
      "estimated_win_probability": 0.55,
      "value_reasoning": "Role-volume thesis only; current 2026 rush-attempt share and prop quote require verification. The role-based number is a floor, not a ceiling.",
      "reason_wins": "Williams retains lead-back carries in a competitive script.",
      "reason_loses": "Negative script, rotation, or efficiency loss leaves him below 67.5.",
      "settlement_rules": "Unknown",
      "legs": []
    },
    {
      "type": "sgp",
      "market": "SGP",
      "line": "Kyren Williams over 67.5 rushing yards + Rams moneyline conditional",
      "stake": 6,
      "pricing_status": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": 250,
      "max_loss": 6,
      "potential_net_profit": 15,
      "potential_total_return": 21,
      "break_even_probability": 0.2857,
      "estimated_win_probability": 0.3,
      "value_reasoning": "No combined Bovada quote; +250 is a hypothetical minimum and not an observed price.",
      "reason_wins": "Rams lead, allowing Williams volume while the team wins.",
      "reason_loses": "Denver wins or game script removes Rams rushing volume.",
      "settlement_rules": "Unknown",
      "legs": [
        "Kyren Williams over 67.5 rushing yards",
        "Rams moneyline"
      ]
    }
  ],
  "sources": [
    {
      "url": "assets/nfl-data.js",
      "fetch_succeeded": true,
      "quoted_snippet": "W3G1 volume-prop reference read locally."
    },
    {
      "url": "https://www.bovada.lv/sports/football/nfl/player-props",
      "fetch_succeeded": false,
      "quoted_snippet": "Event-specific board unavailable in this pass."
    }
  ],
  "reasoning_summary": "Projected Rams win in a competitive game. Allocation follows v3.4 with two player-anchored tickets and  game-level exposure; current usage, injuries, weather and Bovada prices remain explicitly unverified."
}
```
