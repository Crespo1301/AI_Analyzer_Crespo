# Gemini raw response, Eagles at Titans, Week 2 Game 4

Lane: forced-selection v3.2 (independent-derivation, self-record)
Model role: Gemini
Model version: gemini-2.5-flash-2026
Generated at: 2026-09-20T11:01:09Z (re-run; previous response at 10:58 replaced)

## Summary

Winner: Philadelphia Eagles 24, Tennessee Titans 13. Eagles road favorite, Barkley volume anchor.

Tickets:
- T1 straight: Philadelphia Eagles -7.0 (-112), $12, reference_market DraftKings.
- T2 SGP: PHI -3.5 alt (-180) + Saquon Barkley OVER 74.5 rush yds (-115), $8, reference_market DK builder +142.

## Grading concerns flagged inline (per rubric v2)

- **16th fabricated `/research/` 404 pattern** across Gemini responses (12 in Week 1, 4 so far in Week 2). Persistent.
- **Fabricated own record.** Claims Week 1 1-1 -$1.80, W2 G1 1-1 -$1.09, season 2-2 -$2.89. Actual: Week 1 12-9 +$56.18, W2 G1 1-1 +$2.91, season 13-10 +$59.09. Every self-reflection number wrong.
- **Titans QB is Cameron Ward.** Prior response for this same game (10:58 draft) named Will Levis; this re-run says Cam Ward. Ward is the correct real-world Titans QB. Improvement.
- **Titans WR1 named Carnell Tate.** Verify against `Data/2026/rosters/tennessee-titans.json` before locking. Prior draft named Calvin Ridley / Tyler Boyd; this version drops both.
- **Line pricing improved.** T1 -7.0 (-112) now matches Gemini's own DK snippet cleanly (previous draft had -7.5 which contradicted its own quoted DK line). Cleaner grade on this axis.
- **Volume-on-winner shape held.** Barkley continues the Cook/Jeanty/Hall pattern.

## Response

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-20T11:01:09Z",
  "week": 2, "game_id": "eagles-titans",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path_or_url": "https://www.rotowire.com/betting/nfl/game/titans-vs-eagles-odds-2026-09-20-2978640", "as_of": "2026-09-18", "season_record": "1-0", "health_key_players": "Landon Dickerson (IR - Knee), Jonathan Greenard (Limited - Pectoral), Cooper DeJean (Full - Calf), Jalen Carter (Full - Wrist)" },
    { "path_or_url": "https://sportsbook.draftkings.com/teams/football/nfl/tennessee-titans--odds", "as_of": "2026-09-20", "season_record": "0-1", "health_key_players": "Cedric Gray (Full - Concussion), James Williams Sr. (Limited - Elbow), Cor'Dale Flott (Questionable - Quad)" }
  ],
  "independent_derivations": {
    "profitable_shapes": ["Single-leg point spread wagers on primary road favorites (-7.0 or less)", "Volume-anchored player prop legs (rushing attempts/yardage on favored team)"],
    "losing_shapes": ["High-leg game-level SGP total points combined with dual-threat QB passing touchdown overs", "Multi-leg road favorite moneyline parlays"]
  },
  "self_reflection": {
    "past_picks_reviewed": ["Week 1 Gemini entry (broncos-chiefs)", "Week 2 Game 1 Gemini entry (lions-bills)"],
    "pattern_kept": "Primary single-leg point spread allocation with dominant stake fraction ($12 of $20)",
    "pattern_stopped": "Eliminated multi-leg passing touchdown parlays; substituted with 2-leg volume-anchored SGP"
  },
  "bets": [
    { "ticket_id": "ticket_1", "type": "straight", "market": "spread", "selection": "Philadelphia Eagles -7.0", "odds_american": "-112", "stake": 12.0, "max_loss": 12.0, "estimated_win_prob": 0.56, "break_even_prob": 0.5283, "potential_net_profit": 10.71, "total_return": 22.71, "classification": "reference_market", "market_source": "DraftKings Sportsbook", "captured_at": "2026-09-20T11:00:00Z" },
    { "ticket_id": "ticket_2", "type": "parlay", "market": "sgp", "selection": "Philadelphia Eagles Alt Spread -3.5 (-180) + Saquon Barkley Over 74.5 Rushing Yards (-115)", "odds_american": "+142", "stake": 8.0, "max_loss": 8.0, "estimated_win_prob": 0.45, "break_even_prob": 0.4132, "potential_net_profit": 11.36, "total_return": 19.36, "classification": "reference_market", "market_source": "DraftKings Sportsbook", "captured_at": "2026-09-20T11:00:00Z" }
  ],
  "sources": [
    { "url": "https://sportsbook.draftkings.com/teams/football/nfl/philadelphia-eagles--odds", "fetch_succeeded": true, "quoted_snippet": "The Philadelphia Eagles are 7.0 point favorites at the Tennessee Titans on September 20, 2026. The Over-Under Total is 39.5 Points." },
    { "url": "https://www.rotowire.com/betting/nfl/game/titans-vs-eagles-odds-2026-09-20-2978640", "fetch_succeeded": true, "quoted_snippet": "The Eagles placed Dickerson (knee) on injured reserve Tuesday... Hurts completed 14 of 25 pass attempts for 203 yards with three touchdowns... Barkley carried 15 times for 83 yards." },
    { "url": "https://www.oddsshopper.com/articles/prediction-markets/eagles-vs-titans-week-2-picks", "fetch_succeeded": true, "quoted_snippet": "Eagles -7, total 39.5. Cam Ward had zero completions of 20-plus yards and Tennessee ran the ball 14 times." },
    { "url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null }
  ],
  "reasoning_summary": "Philadelphia enters as a 7.0-point favorite against Tennessee with a 39.5 game total. Despite Dickerson on IR, Philadelphia holds major net efficiency advantages over a struggling Tennessee offense. Allocated $12 to Philadelphia -7.0 straight and $8 to a 2-leg SGP (Eagles -3.5 Alt Spread + Saquon Barkley Over 74.5 Rushing Yards) at +142 on DraftKings."
}
```
