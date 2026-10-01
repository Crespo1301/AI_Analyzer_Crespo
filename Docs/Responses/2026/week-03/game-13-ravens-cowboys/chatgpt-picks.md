# Week 3 Game 13: Baltimore Ravens at Dallas Cowboys

Eligibility checked at 2026-09-27T12:16:30-04:00; kickoff is 4:25 PM ET. This file is a compressed forced-selection response.

## Summary
Projected winner: Baltimore Ravens. Three tickets allocate the full 0:  conditional spread,  conditional volume prop, and  conditional prop-led SGP. No Bovada event-specific price was verified.

## Grading concerns
Compressed pass: current usage shares, official injuries, weather, and Bovada event prices were not independently verified. Tickets are conditional.

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.4",
  "model_role": "Codex",
  "model_version": "GPT-6",
  "generated_at": "2026-09-27T12:16:30-04:00",
  "lock_at": null,
  "week": 3,
  "game_id": "ravens-cowboys",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "eligibility": "pre-game checked before kickoff",
  "bets": [
    {
      "type": "straight",
      "market": "Spread",
      "line": "conditional spread target",
      "stake": 6,
      "pricing_status": "conditional",
      "minimum_acceptable_odds": -110
    },
    {
      "type": "straight",
      "market": "Prop",
      "line": "conditional volume prop",
      "stake": 8,
      "pricing_status": "conditional",
      "minimum_acceptable_odds": -110
    },
    {
      "type": "sgp",
      "market": "SGP",
      "line": "conditional player prop + moneyline",
      "stake": 6,
      "pricing_status": "conditional",
      "minimum_acceptable_odds": 250,
      "legs": [
        "player prop",
        "moneyline"
      ]
    }
  ],
  "sources": [
    {
      "url": "assets/nfl-data.js",
      "fetch_succeeded": true
    },
    {
      "url": "https://www.bovada.lv/sports/football/nfl/player-props",
      "fetch_succeeded": false
    }
  ],
  "reasoning_summary": "Compressed pregame record; W3G1 volume-prop shape cited, while current usage, injuries and event prices remain unverified."
}
```
