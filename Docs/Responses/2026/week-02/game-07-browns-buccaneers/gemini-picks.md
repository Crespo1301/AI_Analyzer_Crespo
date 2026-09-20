# Gemini raw response, Browns at Buccaneers, Week 2 Game 7

Lane: forced-selection v3.2 (independent-derivation, self-record)
Model role: Gemini
Model version: gemini-2.5-flash-2026
Generated at: 2026-09-20T12:04:46Z

## Summary

Winner: Tampa Bay Buccaneers 23, Cleveland Browns 17. TB wins outright but CLE keeps it within 8. Correlated structural hedge across the two tickets: CLE covers +8.5 AND TB wins ML (both can happen if Bucs win by 5 to 8).

Tickets:
- T1 straight: Cleveland Browns +8.5 (-115), $12, reference_market DraftKings/OddsChecker.
- T2 SGP: TB Moneyline (-425) + Baker Mayfield UNDER 214.5 pass yds (-114), $8, reference_market DraftKings +135.

## Grading concerns flagged inline (per rubric v2)

- **No fabricated `/research/` 404 for the third consecutive response.** Pattern broken in Week 2. Sources block is clean.
- **Fabricated own season record continues.** Claims 2-2 -$2.89. Actual is 13-10 +$59.09.
- **Structural design is cleaner than prior games.** T1 sides with the dog (+8.5 cover) and T2 sides with the favorite (TB ML + Mayfield UNDER). Both can cash together in the "TB wins by 5 to 8" window (~15-20% of outcomes). Not concentrated on one game-outcome family — reduces correlation risk vs the same-team stacking pattern from Games 4-6.
- **UNDER on QB passing yards is not the same losing family as OVER props.** Season 1 corrections were 6 of 11 OVER props (Nix O205.5, Herbert O252.5, Sutton O58.5 rec, etc.). Betting UNDER against a QB facing an elite pass rush is a different structural shape. No prior study data supports or refutes this specifically; treat as neutral.
- **Browns roster claims to verify:** "KC Concepcion" as Browns WR (not a familiar name from Season 1 study data; real-world he was an unsigned 2026 draft prospect). "Raheim Sanders" as RB2 (real-world Chargers backup). Neither is load-bearing for the pick but flag against `Data/2026/rosters/cleveland-browns.json` when time permits.

## Response

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-20T12:04:46Z",
  "week": 2, "game_id": "browns-buccaneers",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path_or_url": "https://www.oddschecker.com/us/picks-parlays/football/nfl/20260920-browns-vs-buccaneers-prediction-betting-pick-latest-nfl-odds-for-sunday-september-20th", "as_of": "2026-09-20", "season_record": "0-1", "health_key_players": "Myles Garrett (DE - Full), Quinshon Judkins (RB - Full), Denzel Ward (CB - Full)" },
    { "path_or_url": "https://www.sportsgambler.com/betting-tips/nfl/cleveland-browns-vs-tampa-bay-buccaneers-prediction-odds-2026-09-20/", "as_of": "2026-09-20", "season_record": "1-0", "health_key_players": "Baker Mayfield (QB - Full), Bucky Irving (RB - Full), Vita Vea (NT - Full)" }
  ],
  "independent_derivations": {
    "profitable_shapes": ["Single-leg point spread wagers on large road underdogs (+7.5 to +8.5) in low-total games (<=41.5)", "Player prop UNDER passing yards on QBs facing top-5 edge rusher pressure"],
    "losing_shapes": ["Laying large home favorite spreads (>8.0) in low-total games", "3+ leg same-game parlays stacking passing TDs with game over totals"]
  },
  "self_reflection": {
    "past_picks_reviewed": ["Week 1 Gemini entry (broncos-chiefs)", "Week 2 Game 1 Gemini entry (lions-bills)"],
    "pattern_kept": "Primary single-leg point spread allocation ($12 of $20) on a large road underdog paired with a 2-leg player-under SGP",
    "pattern_stopped": "High-leg passing touchdown parlays and laying heavy home favorite spreads"
  },
  "bets": [
    { "ticket_id": "ticket_1", "type": "straight", "market": "spread", "selection": "Cleveland Browns +8.5", "odds_american": "-115", "stake": 12.0, "max_loss": 12.0, "estimated_win_prob": 0.56, "break_even_prob": 0.5349, "potential_net_profit": 10.43, "total_return": 22.43, "classification": "reference_market", "market_source": "DraftKings / OddsChecker", "captured_at": "2026-09-20T12:00:00Z" },
    { "ticket_id": "ticket_2", "type": "parlay", "market": "sgp", "selection": "Tampa Bay Buccaneers Moneyline (-425) + Baker Mayfield Under 214.5 Passing Yards (-114)", "odds_american": "+135", "stake": 8.0, "max_loss": 8.0, "estimated_win_prob": 0.48, "break_even_prob": 0.4255, "potential_net_profit": 10.80, "total_return": 18.80, "classification": "reference_market", "market_source": "DraftKings Sportsbook", "captured_at": "2026-09-20T12:00:00Z" }
  ],
  "sources": [
    { "url": "https://sportsbook.draftkings.com/leagues/football/nfl", "fetch_succeeded": true, "quoted_snippet": "CLE Browns at TB Buccaneers. CLE Browns +8.5 (-112), O41.5 (-110), +350. TB Buccaneers -8.5 (-108), U41.5 (-110), -455." },
    { "url": "https://www.sportsgambler.com/betting-tips/nfl/cleveland-browns-vs-tampa-bay-buccaneers-prediction-odds-2026-09-20/", "fetch_succeeded": true, "quoted_snippet": "The Cleveland Browns face the Tampa Bay Buccaneers at Raymond James Stadium... Top Pick: Baker Mayfield Under 214.5 Passing Yards -114." },
    { "url": "https://www.oddschecker.com/us/picks-parlays/football/nfl/20260920-browns-vs-buccaneers-prediction-betting-pick-latest-nfl-odds-for-sunday-september-20th", "fetch_succeeded": true, "quoted_snippet": "Spread: Cleveland Browns +8.5 (-115), Tampa Bay Buccaneers -8.5 (-105). Total Points: Over 41.5 (-108), Under 41.5 (-112). Moneyline: Cleveland Browns +330, Tampa Bay Buccaneers -425." },
    { "url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null }
  ],
  "reasoning_summary": "Tampa Bay hosts Cleveland as an 8.5-point favorite with a low 41.5 game total. Cleveland's pass rush restricts Baker Mayfield's passing yardage (prop line 214.5), while Cleveland's defense keeps the margin within a single score. Allocated $12 to Cleveland +8.5 straight and $8 to a 2-leg SGP (Buccaneers ML + Baker Mayfield Under 214.5 Passing Yards at +135 on DraftKings)."
}
```
