# Gemini raw response, Commanders at Cowboys, Week 2 Game 12

Lane: forced-selection v3.2 (independent-derivation, self-record)
Model role: Gemini (self-identifies as "CSolutions AI Analyzer Study Entry")
Model version: Gemini 1.5 / 2026 Build (per response)
Generated at: 2026-09-20T15:58:50-04:00

## Summary

Winner (Gemini's projected): Washington Commanders 27, Dallas Cowboys 24. Dog cover on divisional road spread; Jayden Daniels rushing floor anchors SGP.

Tickets:
- T1 straight: Washington Commanders +4.5 (-120), $12, reference_market DraftKings/ActionNetwork.
- T2 SGP: WSH +6.5 alt (-165) + Jayden Daniels OVER 36.5 rush yds (-114), $8, reference_market DraftKings/BetMGM +210.

## Grading concerns flagged inline (per rubric v2)

- **No fabricated `/research/` 404.** Sources block clean again (third consecutive Gemini response without it).
- **No fabricated own-record numbers.** Self-reflection stayed generic. Both fabrication patterns absent for the second consecutive response.
- **Model version claim still inconsistent** at "Gemini 1.5 / 2026 Build" versus the earlier "gemini-2.5-flash-2026" runs.
- **Dual-threat QB rush yards is a volume-anchored winning-side leg family** that has hit repeatedly (Cook 21 att, Jeanty 23 att, Hall 22 att, Barkley O74.5). Daniels rushing floor is the QB variant of the same shape. Correct.
- **Same-team single+SGP concentration.** T1 WSH +4.5 and T2 WSH +6.5 alt both cash if WSH keeps within 4.5. T2 Daniels rushing adds correlated leg. All-legs-cash on "WSH stays close" outcome.
- **"9 of last 10" ATS-trend claim** unverified but is cited to sportsgambler.com. Not load-bearing but flag for grading.

## Response

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "CSolutions AI Analyzer Study Entry",
  "model_version": "Gemini 1.5 / 2026 Build",
  "generated_at": "2026-09-20T15:58:50-04:00",
  "week": 2, "game_id": "commanders-cowboys",
  "forced_allocation": true, "bankroll": 20, "total_stake": 20, "reserve": 0,
  "team_profiles_read": [
    { "path_or_url": "https://thelandryhat.com/cowboys-vs-commanders-week-2-how-to-watch-injuries-top-storylines-and-more", "as_of": "2026-09-19T10:00:00-04:00", "season_record": "WAS: 0-1, DAL: 0-1", "health_key_players": "Cowboys: DeMarvion Overshown OUT (hamstring), Malik Hooker OUT (forearm). Commanders: Frankie Luvu OUT (groin), Chigoziem Okonkwo OUT (hamstring)." },
    { "path_or_url": "https://www.sportsgambler.com/betting-tips/nfl/washington-commanders-vs-dallas-cowboys-prediction-odds-2026-09-20/", "as_of": "2026-09-20T14:00:00-04:00", "season_record": "WAS: 0-1, DAL: 0-1", "health_key_players": "Jayden Daniels active, Dak Prescott active, CeeDee Lamb active." }
  ],
  "independent_derivations": {
    "profitable_shapes": ["Divisional road underdogs (+4.5 or higher) with high total lines and dual-threat QBs", "Volume-anchored player rushing yardage OVER props for dual-threat QBs"],
    "losing_shapes": ["Favorite moneyline + game total OVER SGPs in divisional games", "Unverified odds captures labeled as bovada_verified without timestamped API proof"]
  },
  "self_reflection": {
    "past_picks_reviewed": ["Week 1 and Week 2 Game 11 model entries focusing on road spread underdogs"],
    "pattern_kept": "Allocating majority stake to a single straight spread ticket and using volume-backed player props in parlays",
    "pattern_stopped": "Avoided placing game-level favorite ML parlays and unverified bovada labels"
  },
  "bets": [
    { "ticket_id": "ticket-1", "type": "straight", "classification": "reference_market", "sportsbook": "DraftKings", "captured_at": "2026-09-20T15:58:00-04:00", "selection": "Washington Commanders +4.5", "american_odds": -120, "stake": 12.0, "max_loss": 12.0, "estimated_win_probability": 0.56, "break_even_probability": 0.5455, "potential_net_profit": 10.0, "total_return": 22.0 },
    { "ticket_id": "ticket-2", "type": "parlay", "classification": "reference_market", "sportsbook": "DraftKings", "captured_at": "2026-09-20T15:58:00-04:00", "selection": "Washington Commanders +6.5 SGP Leg / Jayden Daniels Over 36.5 Rushing Yards SGP Leg", "american_odds": 210, "stake": 8.0, "max_loss": 8.0, "estimated_win_probability": 0.365, "break_even_probability": 0.3226, "potential_net_profit": 16.8, "total_return": 24.8 }
  ],
  "sources": [
    { "url": "https://thelandryhat.com/cowboys-vs-commanders-week-2-how-to-watch-injuries-top-storylines-and-more", "fetch_succeeded": true, "quoted_snippet": "The Cowboys have ruled out LB DeMarvion Overshown (hamstring) and safety Malik Hooker (forearm) for Sunday's game against Washington" },
    { "url": "https://www.actionnetwork.com/nfl/washington-commanders-vs-dallas-cowboys-prediction-pick-odds-nfl-week-2-september-20", "fetch_succeeded": true, "quoted_snippet": "The Cowboys are 4.5-point favorites over the Commanders on the spread (Cowboys -4.5), with the over/under set at 50.5." },
    { "url": "https://www.sportsgambler.com/betting-tips/nfl/washington-commanders-vs-dallas-cowboys-prediction-odds-2026-09-20/", "fetch_succeeded": true, "quoted_snippet": "The -4.5 line hasn't been covered by Cowboys in 9 of their last 10 games at home. Jayden Daniels Player Prop Odds: Rushing Yards Over 36.5 -114" }
  ],
  "reasoning_summary": "Washington offers excellent divisional value catching +4.5 against a Dallas defense missing key defensive callers (Overshown, Hooker), with Jayden Daniels' rushing floor supporting a close contest."
}
```
