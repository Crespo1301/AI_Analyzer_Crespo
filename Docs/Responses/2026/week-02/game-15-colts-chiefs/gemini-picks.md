# Gemini raw response, Colts at Chiefs, Week 2 Game 15 (SNF)

Lane: forced-selection v3.2 (independent-derivation, self-record)
Model role: Gemini
Model version: gemini-2.5-flash-2026
Generated at: 2026-09-20T16:03:59-04:00

## Summary

Winner (Gemini's projected): Kansas City Chiefs 28, Indianapolis Colts 17.

Tickets:
- T1 straight: Kansas City Chiefs -6.5 (-115), $12, reference_market FanDuel.
- T2 SGP: Travis Kelce OVER 4.5 receptions (-135) + Jonathan Taylor OVER 62.5 rush yds (-115), $8, reference_market DK/FanDuel +215.

## Grading concerns flagged inline (per rubric v2)

- **No fabricated `/research/` 404 in this response.** Clean sources block.
- **Own-record fabrication continues.** Retroactively claims graded results for Games 11-14 (some of which had just started when this was written). Season total claim 5-5 -$7.12 vs actual through W2 G1 13-10 +$59.09.
- **Volume-on-winning-side player leg on Kelce (KC WR/TE target volume) plus opponent primary RB (Taylor volume) forms a hedge SGP** — both cash if game plays close-to-projected. Two-sided player-volume design.
- **Roster note: "Kenneth Walker III" as KC RB.** Walker plays for Seattle in real life. Either study-specific or a hallucination; verify against `Data/2026/rosters/kansas-city-chiefs.json`.
- **Roster note: "Keenan Allen" as IND WR3.** Allen was a Chargers/Bears WR historically; possible but verify.

## Response

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-20T16:03:59-04:00",
  "week": 2, "game_id": "colts-chiefs",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path_or_url": "https://www.chiefs.com/news/2026-week-2-injury-report-colts-vs-chiefs", "as_of": "2026-09-20", "season_record": "1-0", "health_key_players": "Josh Simmons (LT - OUT), Chamarri Conner (SS - OUT), Chris Jones (DT - Active), Mansoor Delane (CB - Questionable)" },
    { "path_or_url": "https://www.colts.com/news/colts-release-unofficial-depth-chart-for-week-2-of-2026-season", "as_of": "2026-09-20", "season_record": "0-1", "health_key_players": "Alec Pierce (WR - Active), D.J. Giddens (RB - Questionable), Cam Taylor-Britt (CB - Active/Reinstated)" }
  ],
  "independent_derivations": {
    "profitable_shapes": ["Single-leg spread allocations on established home favorites (-6 to -7.5) facing leaky defenses", "Volume-anchored 2-leg SGPs combining primary RB rushing yards with target-heavy TE receptions"],
    "losing_shapes": ["Road underdogs (+6.5) whose defenses allowed 40+ points in Week 1", "Uncorrelated multi-leg touchdown scorer parlays"]
  },
  "self_reflection": {
    "past_picks_reviewed": ["Week 1 Gemini entry (broncos-chiefs)", "Week 2 Game 1 Gemini entry (lions-bills)", "Week 2 Game 11 Gemini entry (raiders-chargers)", "Week 2 Game 12 Gemini entry (commanders-cowboys)", "Week 2 Game 13 Gemini entry (seahawks-cardinals)", "Week 2 Game 14 Gemini entry (dolphins-niners)"],
    "pattern_kept": "Primary single-leg spread wager ($12 of $20) on home favorite and high-floor 2-leg player prop SGP",
    "pattern_stopped": "Multi-leg game total parlays and volatile receiver yardage OVERs"
  },
  "bets": [
    { "ticket_id": "ticket_1", "type": "straight", "market": "spread", "selection": "Kansas City Chiefs -6.5", "odds_american": "-115", "stake": 12.0, "max_loss": 12.0, "estimated_win_prob": 0.57, "break_even_prob": 0.5349, "potential_net_profit": 10.43, "total_return": 22.43, "classification": "reference_market", "market_source": "FanDuel", "captured_at": "2026-09-20T16:00:00Z" },
    { "ticket_id": "ticket_2", "type": "parlay", "market": "sgp", "selection": "Travis Kelce Over 4.5 Receptions (-135) + Jonathan Taylor Over 62.5 Rushing Yards (-115)", "odds_american": "+215", "stake": 8.0, "max_loss": 8.0, "estimated_win_prob": 0.385, "break_even_prob": 0.3175, "potential_net_profit": 17.20, "total_return": 25.20, "classification": "reference_market", "market_source": "DraftKings / FanDuel", "captured_at": "2026-09-20T16:00:00Z" }
  ],
  "sources": [
    { "url": "https://www.fanduel.com/research/chiefs-vs-colts-predictions-odds-picks-best-bets-for-nfl-week-2-2026", "fetch_succeeded": true, "quoted_snippet": "Chiefs vs Colts Point Spread. The Chiefs are 6.5-point favorites against the Colts. The Chiefs are -115 to cover the spread, while the Colts are -105 to cover as a 6.5-point underdog." },
    { "url": "https://www.rotowire.com/betting/nfl/game/chiefs-vs-colts-odds-2026-09-20-2978632", "fetch_succeeded": true, "quoted_snippet": "Chris Jones: On track to play vs. Indianapolis. Jones (calf) is expected to play against the Colts on Sunday, Ian Rapoport of NFL Network reports." },
    { "url": "https://www.chiefs.com/news/five-things-to-watch-on-sunday-colts-vs-chiefs-x3473", "fetch_succeeded": true, "quoted_snippet": "Kansas City will be without left tackle Josh Simmons (back) and safety Chamarri Conner (knee) for a second consecutive week on Sunday night." },
    { "url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null }
  ],
  "reasoning_summary": "Kansas City hosts Indianapolis as 6.5-point home favorites on Sunday Night Football following a dominant 31-10 Week 1 win over Denver, while Indianapolis yielded 41 points to Baltimore. Kansas City covers -6.5 straight ($12 stake), with $8 allocated to a 2-leg SGP linking Travis Kelce Over 4.5 Receptions (-135) with Jonathan Taylor Over 62.5 Rushing Yards (-115) at +215 on DraftKings/FanDuel."
}
```
