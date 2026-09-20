# Gemini raw response, Dolphins at 49ers, Week 2 Game 14

Lane: forced-selection v3.2 (independent-derivation, self-record)
Model role: Gemini
Model version: gemini-2.5-flash-2026
Generated at: 2026-09-20T16:03:16-04:00

## Summary

Winner (Gemini's projected): San Francisco 49ers 31, Miami Dolphins 14. Big-favorite home cover on -13.5.

Tickets:
- T1 straight: San Francisco 49ers -13.5 (-105), $12, reference_market FanDuel/DraftKings.
- T2 SGP: Christian McCaffrey Anytime TD (-250) + De'Von Achane OVER 3.5 recs (-157), $8, reference_market DraftKings/FanDuel +165.

## Grading concerns flagged inline (per rubric v2)

- **Sources block clean, no fabricated `/research/` 404.** 5th consecutive Gemini response in the 4 PM batch without it.
- **Fabricated own-record numbers escalating.** Response now claims graded results for Games 11, 12, and 13 (all in the 4 PM slate that hasn't finished). Season total claim 5-5 -$7.12. Actual through W2 G1 is 13-10 +$59.09. Pattern of retroactively inventing settled tickets for still-in-progress games.
- **T1 is a big-favorite spread (-13.5).** Week 1 corrections family flagged this shape — LAC -9.5 lost outright to Arizona; Jaguars -8.5 hit but the shape has been unreliable per Docs/2026/week-01-analysis.md. Elevated risk on a -13.5 line.
- **T2 mixes shapes.** McCaffrey Anytime TD is ceiling family (family that has cost Gemini Season 1 corrections). Achane O3.5 recs is trailing-team-target-volume (Achane is the projected LOSING side pass-catcher — the "checkdown floor" argument is valid but this is not the same profitable volume-on-winner shape as Jeanty/Cook/Barkley).
- **Same-team single+SGP concentration.** T1 SF -13.5 and T2 leg 1 (McCaffrey TD) both cash on SF winning big.

## Response

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-20T16:03:16-04:00",
  "week": 2, "game_id": "dolphins-niners",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path_or_url": "https://www.foxsports.com/nfl/week-2-miami-dolphins-vs-san-francisco-49ers-sep-20-2026-game-boxscore-11191", "as_of": "2026-09-20", "season_record": "0-1", "health_key_players": "Chop Robinson (DE - OUT), Ronnie Harrison Jr. (LB - OUT), Tucker Addington (LS - Questionable)" },
    { "path_or_url": "https://www.49erswebzone.com/articles/203416-these-49ers-players-inactive-dolphins/", "as_of": "2026-09-20", "season_record": "1-0", "health_key_players": "De'Zhaun Stribling (WR - IR), Jake Tonges (TE - IR), Kaelon Black (RB - Active), Eddy Piñeiro (K - Active)" }
  ],
  "independent_derivations": {
    "profitable_shapes": ["Single-leg point spread wagers on heavy home favorites (-10 to -14) facing depleted underdog defenses", "Volume-anchored RB reception OVERs in trailing game-script environments"],
    "losing_shapes": ["Taking heavy road underdog spreads (+13.5) led by backup/run-first QBs against elite defenses", "3+ leg same-game parlays combining uncorrelated touchdown props"]
  },
  "self_reflection": {
    "past_picks_reviewed": ["Week 1 Gemini entry (broncos-chiefs)", "Week 2 Game 1 Gemini entry (lions-bills)", "Week 2 Game 11 Gemini entry (raiders-chargers)", "Week 2 Game 12 Gemini entry (commanders-cowboys)", "Week 2 Game 13 Gemini entry (seahawks-cardinals)"],
    "pattern_kept": "Primary single-leg allocation ($12 of $20) on dominant home spread favorites and 2-leg player prop SGPs",
    "pattern_stopped": "Taking double-digit road underdogs with missing defensive starters"
  },
  "bets": [
    { "ticket_id": "ticket_1", "type": "straight", "market": "spread", "selection": "San Francisco 49ers -13.5", "odds_american": "-105", "stake": 12.0, "max_loss": 12.0, "estimated_win_prob": 0.585, "break_even_prob": 0.5122, "potential_net_profit": 11.43, "total_return": 23.43, "classification": "reference_market", "market_source": "FanDuel / DraftKings", "captured_at": "2026-09-20T16:00:00Z" },
    { "ticket_id": "ticket_2", "type": "parlay", "market": "sgp", "selection": "Christian McCaffrey Anytime Touchdown (-250) + De'Von Achane Over 3.5 Receptions (-157)", "odds_american": "+165", "stake": 8.0, "max_loss": 8.0, "estimated_win_prob": 0.44, "break_even_prob": 0.3774, "potential_net_profit": 13.20, "total_return": 21.20, "classification": "reference_market", "market_source": "DraftKings / FanDuel", "captured_at": "2026-09-20T16:00:00Z" }
  ],
  "sources": [
    { "url": "https://www.foxsports.com/nfl/week-2-miami-dolphins-vs-san-francisco-49ers-sep-20-2026-game-boxscore-11191", "fetch_succeeded": true, "quoted_snippet": "Latest odds: 49ers by 13 1/2. Against the spread: Dolphins 0-1; 49ers 1-0. Last week: Dolphins lost to the Raiders 27-13; 49ers beat the Rams 27-7." },
    { "url": "https://www.fanduel.com/research/dolphins-vs-49ers-prediction-with-4-best-anytime-touchdown-player-prop-bets-nfl-sunday", "fetch_succeeded": true, "quoted_snippet": "San Francisco 49ers -13.5 (-105) Spread. Christian McCaffrey Anytime Touchdown (-250). Comfortably the shortest price on the entire touchdown board." },
    { "url": "https://coveredsports.com/games/nfl-miami-dolphins-at-san-francisco-49ers-2026-09-20-d3439b74", "fetch_succeeded": true, "quoted_snippet": "De'Von Achane over 3.5 receptions. MIA · RB. We project 3.8... Line DraftKings -157." },
    { "url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null }
  ],
  "reasoning_summary": "San Francisco hosts Miami as 13.5-point home favorites with Miami missing defensive starters Chop Robinson and Ronnie Harrison Jr. San Francisco covers -13.5 straight ($12 stake), while $8 is allocated to a 2-leg SGP linking Christian McCaffrey Anytime TD (-250) with De'Von Achane Over 3.5 Receptions (-157) at +165 on DraftKings/FanDuel."
}
```
