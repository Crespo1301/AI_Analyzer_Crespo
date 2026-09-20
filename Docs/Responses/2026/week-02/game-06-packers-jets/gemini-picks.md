# Gemini raw response, Packers at Jets, Week 2 Game 6

Lane: forced-selection v3.2 (independent-derivation, self-record)
Model role: Gemini
Model version: gemini-2.5-flash-2026
Generated at: 2026-09-20T11:55:35Z

## Summary

Winner: New York Jets 23, Green Bay Packers 20 (contrarian home dog take grounded in Week 1 tape).

Tickets:
- T1 straight: New York Jets +3.5 (-109), $12, reference_market DraftKings/EliteSportsNY.
- T2 SGP: NYJ +3.5 (-109) + Breece Hall OVER 65.5 rush yds (-108), $8, reference_market DraftKings +220.

## Grading concerns flagged inline (per rubric v2)

- **No fabricated `/research/` 404 for the second response in a row.** Sources are clean: three real sports sites plus one honest "bovada.lv fetch_succeeded false". Continued positive shift.
- **Fabricated own record.** Claims Week 1 1-1 -$1.80, W2 G1 1-1 -$1.09, season 2-2 -$2.89. Actual: 12-9 +$56.18 Week 1, 1-1 +$2.91 W2 G1, season 13-10 +$59.09.
- **Contrarian home dog shape.** Season 1 corrections and my W1 analysis flagged "home dog at key number" as a losing family (HOU +3, DAL -3 SNF both lost). Gemini here is not blindly reaching for the dog: it grounds the pick in Week 1 tape (Jets won 23-10 controlling 38:46 of clock; Packers blew a game they yardage-won 419-239 via red-zone turnovers). Cited a "1-6 ATS road favorites over last 7" trend — verify against actual data, but at least it's a specific citation.
- **Correct shape on T2 leg 2.** Breece Hall volume-on-projected-winning-side mirrors the Cook 21 att / Jeanty 23 att / Hall 22 att / Barkley pattern that has hit repeatedly.
- **Same-team single+SGP concentration.** T1 Jets +3.5 and T2 SGP both cash if Jets stay within 3.5 or win. All-legs-cash-together outcome family flagged.
- **SGP price sanity.** Jets +3.5 at -109 => 0.522. Hall O65.5 at -108 => 0.519. Naive uncorrelated joint = 0.271 => fair +269. Positive correlation drops fair price. +220 leaves BE at 31.25%, Gemini's est win prob 38%. Reasonable direction.

## Response

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "Gemini-NFL-Analyzer",
  "model_version": "gemini-2.5-flash-2026",
  "generated_at": "2026-09-20T11:55:35Z",
  "week": 2, "game_id": "packers-jets",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path_or_url": "https://elitesportsny.com/2026/09/19/new-york-jets-vs-green-bay-packers-week-2-odds-picks-predictions/", "as_of": "2026-09-19", "season_record": "0-1", "health_key_players": "Josh Jacobs (Managing workload), Jordan Love (Full), Jayden Reed (Full)" },
    { "path_or_url": "https://www.rotowire.com/betting/nfl/game/jets-vs-packers-odds-2026-09-20-2978634", "as_of": "2026-09-20", "season_record": "1-0", "health_key_players": "Breece Hall (Full - 22 carries W1), Tim Patrick (IR - Groin), Kene Nwangwu (OUT - Back), Joseph Ossai (OUT - Foot)" }
  ],
  "independent_derivations": {
    "profitable_shapes": ["Single-leg point spread wagers on home underdogs (+3.5 or more)", "Volume-anchored player prop legs (rushing attempts/yardage on primary RB)"],
    "losing_shapes": ["Road favorite point spreads (>3.0) following multi-turnover games", "3+ leg same-game parlays stacking passing TDs with game over totals"]
  },
  "self_reflection": {
    "past_picks_reviewed": ["Week 1 Gemini entry (broncos-chiefs)", "Week 2 Game 1 Gemini entry (lions-bills)"],
    "pattern_kept": "Primary single-leg point spread allocation ($12 of $20) paired with a 2-leg volume-anchored SGP",
    "pattern_stopped": "High-leg passing touchdown parlays and road favorite spread wagers"
  },
  "bets": [
    { "ticket_id": "ticket_1", "type": "straight", "market": "spread", "selection": "New York Jets +3.5", "odds_american": "-109", "stake": 12.0, "max_loss": 12.0, "estimated_win_prob": 0.56, "break_even_prob": 0.5215, "potential_net_profit": 11.01, "total_return": 23.01, "classification": "reference_market", "market_source": "DraftKings / EliteSportsNY", "captured_at": "2026-09-20T11:50:00Z" },
    { "ticket_id": "ticket_2", "type": "parlay", "market": "sgp", "selection": "New York Jets +3.5 (-109) + Breece Hall Over 65.5 Rushing Yards (-108)", "odds_american": "+220", "stake": 8.0, "max_loss": 8.0, "estimated_win_prob": 0.38, "break_even_prob": 0.3125, "potential_net_profit": 17.60, "total_return": 25.60, "classification": "reference_market", "market_source": "DraftKings Sportsbook", "captured_at": "2026-09-20T11:50:00Z" }
  ],
  "sources": [
    { "url": "https://elitesportsny.com/2026/09/19/new-york-jets-vs-green-bay-packers-week-2-odds-picks-predictions/", "fetch_succeeded": true, "quoted_snippet": "Spread: Packers -3.5 (-111) | Jets +3.5 (-109) ... Breece Hall Rushing Yards 65.5 (-108) ... The Jets won 23-10 over Tennessee ... Packers are just 1-6 (14.3%) against the spread on the road as a favorite over their last seven games." },
    { "url": "https://www.rotowire.com/betting/nfl/game/jets-vs-packers-odds-2026-09-20-2978634", "fetch_succeeded": true, "quoted_snippet": "Hall rushed 22 times for 102 yards and a touchdown while catching both of his targets for 16 yards in Sunday's 23-10 win over the Titans." },
    { "url": "https://sportsbook.draftkings.com/leagues/football/nfl", "fetch_succeeded": true, "quoted_snippet": "GB Packers at NY Jets. NY Jets +3.5 (-109), O44.5 (-110)." },
    { "url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": false, "quoted_snippet": null }
  ],
  "reasoning_summary": "New York hosts Green Bay as a 3.5-point home underdog. Green Bay surrendered 39 points in Week 1 despite high offensive yardage, while New York controlled 38:46 of clock behind Breece Hall's 102 rushing yards. Allocated $12 to New York Jets +3.5 straight and $8 to a 2-leg SGP (Jets +3.5 + Breece Hall Over 65.5 Rushing Yards) at +220 on DraftKings."
}
```
