# ChatGPT forced-selection v3.0

## Summary

Projected winner: **Jaguars**. Projected script: a controlled favorite win with enough offense to challenge 40.5. Full $20 allocation: $14 straight spread target and $6 SGP.

## Roster heuristic errors flagged

Official depth-chart verification is required before lock; local jersey ordering is only a weak heuristic. No roster file was changed without a confirmed game-specific correction.

## Independent evidence and self-reflection

Raw NFL_BETS/NFL_CORRECTIONS showed the strongest positive rows in exact straight spreads/totals, while player props and my prior correlated Rams scoring exposure produced the clearest losses or corrections. I kept the auditable spread and capped the SGP at $6.

## Grading concerns

FanDuel is market context. Bovada loaded without an event quote, so both tickets are conditional and no price is presented as verified. I ignored what-has-worked.md, redesign-direction.md and conclusion-bearing final-review.md.

## JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.0",
  "model_role": "Codex",
  "model_version": "GPT-6",
  "generated_at": "2026-09-13T12:00:00-04:00",
  "lock_at": null,
  "week": 1,
  "game_id": "browns-jaguars",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "team_profiles_read": [
    {
      "path": "Data/2026/rosters/cleveland-browns.json",
      "as_of": "2026-09-13",
      "season_record": "0-0, 0 games, 0 PF, 0 PA",
      "health_key_players": [
        "G Teven Jenkins",
        "LB Jeremiah Owusu-Koramoah",
        "TE Joe Royer",
        "C Parker Brailsford"
      ]
    },
    {
      "path": "Data/2026/rosters/jacksonville-jaguars.json",
      "as_of": "2026-09-13",
      "season_record": "0-0, 0 games, 0 PF, 0 PA",
      "health_key_players": [
        "RB LeQuint Allen Jr.",
        "CB Devon Marshall"
      ]
    }
  ],
  "independent_derivations": {
    "profitable_shapes": [
      {
        "shape": "Exact straight spreads/totals",
        "citations": [
          "assets/nfl-data.js: Claude 49ers-Rams UNDER 45.5 +10.91",
          "assets/nfl-data.js: Gemini Patriots +3.5 +10.17",
          "assets/nfl-data.js: ChatGPT Vikings-Lions OVER 47.5 and Eagles -3 +10 each"
        ]
      }
    ],
    "losing_shapes": [
      {
        "shape": "Player touchdown/yardage/sack props",
        "citations": [
          "assets/nfl-data.js NFL_CORRECTIONS: Stroud, Nix, Bonitto, Sutton, Cook, Maye and Lamar rows"
        ]
      },
      {
        "shape": "Correlated all-in team-total exposure",
        "citations": [
          "assets/nfl-predictions-2026.js: ChatGPT Game 2 Rams over 23.5 plus SGP, Rams scored 7"
        ]
      }
    ]
  },
  "self_reflection": {
    "past_picks_reviewed": "ChatGPT Game 1 and Game 2 responses, NFL_BETS, NFL_CORRECTIONS and current-season archive.",
    "pattern_kept": "Exact auditable game markets.",
    "pattern_stopped": "Large correlated exposure and uncertain props."
  },
  "bets": [
    {
      "type": "straight",
      "market": "Spread",
      "line": "Jacksonville Jaguars -8.5",
      "stake": 14.0,
      "pricing_status": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": -110,
      "sportsbook": null,
      "odds_source": null,
      "odds_captured_at": null,
      "payout_basis": "minimum_acceptable_odds",
      "max_loss": 14.0,
      "potential_net_profit": 12.73,
      "potential_total_return": 26.73,
      "break_even_probability": 0.5238095238,
      "estimated_win_probability": 0.56,
      "value_reasoning": "FanDuel line was observed but exact executable price is not carried into this ticket; -110 is only a hypothetical minimum target.",
      "reason_wins": "Jaguars has the stronger researched matchup and roster context.",
      "reason_loses": "The underdog covers through a quarterback, turnover or late-score swing.",
      "settlement_rules": "Standard full-game spread; push rules apply if landed.",
      "legs": []
    },
    {
      "type": "parlay",
      "market": "SGP",
      "line": "Jaguars moneyline + OVER 40.5 total points",
      "stake": 6.0,
      "pricing_status": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": 220,
      "sportsbook": null,
      "odds_source": null,
      "odds_captured_at": null,
      "payout_basis": "minimum_acceptable_odds",
      "max_loss": 6.0,
      "potential_net_profit": 13.2,
      "potential_total_return": 19.2,
      "break_even_probability": 0.3125,
      "estimated_win_probability": 0.33,
      "value_reasoning": "No combined Bovada quote was exposed; +220 is hypothetical and the forced ticket may be negative value below that threshold.",
      "reason_wins": "A controlled Jaguars win is compatible with the over 40.5 script.",
      "reason_loses": "A low-scoring win, upset or stalled offense leaves the total short.",
      "settlement_rules": "SGP push/void rules unknown.",
      "legs": [
        {
          "market": "Moneyline",
          "selection": "Jaguars",
          "line": "moneyline",
          "price_status": "conditional"
        },
        {
          "market": "Total",
          "selection": "OVER",
          "line": "40.5",
          "price_status": "conditional"
        }
      ]
    }
  ],
  "sources": [
    {
      "path": "Docs/2026/grading-rubric.md",
      "fetch_succeeded": true,
      "excerpt": "Outcome is primary; reasoning is bounded by outcome."
    },
    {
      "path": "assets/nfl-data.js",
      "fetch_succeeded": true,
      "excerpt": "NFL_BETS and NFL_CORRECTIONS contain graded tickets and correction overlays."
    },
    {
      "path": "Data/2026/rosters/cleveland-browns.json",
      "fetch_succeeded": true,
      "excerpt": "Current team profile and health snapshot read."
    },
    {
      "path": "Data/2026/rosters/jacksonville-jaguars.json",
      "fetch_succeeded": true,
      "excerpt": "Current team profile and health snapshot read."
    },
    {
      "url": "https://www.fanduel.com/research/nfl/scores",
      "fetch_succeeded": true,
      "excerpt": "FanDuel matchup market lists Jacksonville Jaguars -8.5 and total 40.5."
    },
    {
      "url": "https://www.bovada.lv/sports/football/nfl",
      "fetch_succeeded": true,
      "excerpt": "Bovada NFL page loaded without event-specific quote."
    }
  ],
  "reasoning_summary": "Pregame eligibility is active. FanDuel provided market context for Jacksonville Jaguars -8.5 and total 40.5; Bovada did not expose an event-specific quote. The forced allocation uses a $14 conditional spread target and $6 conditional SGP, with no props or Bovada verification claim."
}
```
