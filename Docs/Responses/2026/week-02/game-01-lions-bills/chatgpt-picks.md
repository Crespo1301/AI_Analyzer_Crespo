# ChatGPT forced-selection v3.1

## Summary

Pregame eligibility is active. Projected winner: **Buffalo Bills, 31-27**. Both offenses produced 30-plus points in Week 1, but Detroit travels on a short week with two offensive linemen out; Buffalo has Josh Allen at home.

## Team profile notes

Detroit is 1-0 (31 PF, 30 PA); Buffalo is 1-0 (36 PF, 31 PA). Official depth charts confirm Jared Goff/Jahmyr Gibbs and Josh Allen/James Cook. Local health snapshots are dated 2026-09-13, four days before kickoff, so I refreshed them against the current official injury reports: Detroit lists Christian Mahogany and Blake Miller out and D.J. Reed questionable; Buffalo lists Cole Bishop, Ty Johnson and T.J. Sanders questionable. No roster heuristic correction was necessary.

## Independent derivations

Raw NFL_BETS and NFL_CORRECTIONS support exact game markets over unverified player ceiling props. My Week 1 ChatGPT settled rows sum to +$228.95, but the early Game 2 Rams scoring thesis lost $20 and Game 3 lost $20; the later spread/SGP rows were mostly wins. I keep exact spreads and cap correlation at $6.

## Bet-type coverage

I considered volume-anchored Jahmyr Gibbs or James Cook workload legs, but rejected them because the current quote was not verified and the short-week injury context makes attempts less stable. I also rejected passing-TD and receiving-yardage overs as ceiling props.

## Ticket table

- **Reference-market single:** Bills -5.5 at FanDuel -105, $14; estimated win probability 0.5600; break-even 0.5122; hypothetical profit $13.33 and return $27.33.
- **Conditional SGP:** Bills moneyline + OVER 54.5, $6, minimum combined +220; estimated joint probability 0.3300; break-even 0.3125; hypothetical profit $13.20 and return $19.20.

The spread loses if Detroit wins or loses by five or fewer. The SGP loses if Buffalo wins in a lower-scoring game, Detroit controls possession, or turnovers produce a defensive-heavy result. Bovada did not expose an event-specific quote, so neither ticket is Bovada-verified.

## Grading concerns

FanDuel is reference-market pricing only. The SGP price is conditional, not observed. No conclusion-bearing `what-has-worked.md`, `redesign-direction.md`, or `final-review.md` was used.

## JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.1",
  "model_role": "Codex",
  "model_version": "GPT-6",
  "generated_at": "2026-09-17T12:22:01-04:00",
  "lock_at": null,
  "week": 2,
  "game_id": "lions-bills",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "team_profiles_read": [
    {
      "path_or_url": "Data/2026/rosters/detroit-lions.json",
      "as_of": "2026-09-13",
      "season_record": "1-0, 1 game, 31 PF, 30 PA",
      "health_key_players": [
        "S Brian Branch",
        "S Kerby Joseph",
        "OT Giovanni Manu",
        "G Mason Miller",
        "S Christian Izien"
      ]
    },
    {
      "path_or_url": "Data/2026/rosters/buffalo-bills.json",
      "as_of": "2026-09-13",
      "season_record": "1-0, 1 game, 36 PF, 31 PA",
      "health_key_players": [
        "DT Phidarian Mathis [suspension]",
        "WR Tyrell Shavers",
        "CB Dorian Strong",
        "RB Ty Johnson",
        "CB Jordan Hancock",
        "DT T.J. Sanders",
        "OT Jedrick Wills Jr."
      ]
    }
  ],
  "independent_derivations": {
    "profitable_shapes": [
      {
        "shape": "Exact straight spreads/totals and modest correlated SGPs",
        "citations": [
          "assets/nfl-data.js: Claude 49ers-Rams UNDER 45.5 +10.91; Gemini Patriots +3.5 +10.17",
          "assets/nfl-predictions-2026.js: ChatGPT Week 1 Steelers spread +12.17 and Bears spread +12.73"
        ]
      }
    ],
    "losing_shapes": [
      {
        "shape": "Player ceiling props and concentrated team-total theses",
        "citations": [
          "assets/nfl-data.js NFL_CORRECTIONS: touchdown, sack and yardage rows",
          "assets/nfl-predictions-2026.js: ChatGPT Game 2 Rams thesis -20.00"
        ]
      }
    ]
  },
  "self_reflection": {
    "past_picks_reviewed": "Every Week 1 ChatGPT result block in assets/nfl-predictions-2026.js, own game files, and all raw Week 1 model responses. Week 1 ChatGPT finished +$228.95 across settled ticket rows, with the two-game early losses concentrated in Game 2 and Game 3.",
    "pattern_kept": "Exact game lines and small $6 correlated SGPs when the legs share an auditable script.",
    "pattern_stopped": "Unpriced player ceiling props and all-in exposure to one scoring premise."
  },
  "bets": [
    {
      "type": "straight",
      "market": "Spread",
      "line": "Buffalo Bills -5.5",
      "stake": 14.0,
      "pricing_status": "reference_market",
      "odds_american": -105,
      "minimum_acceptable_odds": null,
      "sportsbook": "FanDuel",
      "odds_source": "https://www.fanduel.com/research/nfl-week-2-schedule-2026-odds-for-each-game",
      "odds_captured_at": "2026-09-17T12:22:01-04:00",
      "payout_basis": "odds_american",
      "max_loss": 14.0,
      "potential_net_profit": 13.33,
      "potential_total_return": 27.33,
      "break_even_probability": 0.512195122,
      "estimated_win_probability": 0.56,
      "value_reasoning": "FanDuel -105 implies 0.5122; my 0.5600 estimate gives a modest edge, but Detroit has a high-scoring offense and Buffalo has three questionable players.",
      "reason_wins": "Buffalo is at home with Josh Allen confirmed first on the official depth chart, while Detroit is missing two offensive linemen and multiple defensive backs.",
      "reason_loses": "Detroit\u2019s 31-point Week 1 offense stays efficient and the Lions lose by five or fewer.",
      "settlement_rules": "Standard full-game spread; overtime counts; -5.5 cannot push.",
      "legs": []
    },
    {
      "type": "parlay",
      "market": "SGP",
      "line": "Buffalo Bills moneyline + OVER 54.5 total points",
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
      "value_reasoning": "No combined Bovada SGP quote was exposed; +220 is a hypothetical minimum. The estimate is only slightly above break-even and should not be treated as observed value.",
      "reason_wins": "Both teams scored at least 31 in Week 1, and a Buffalo win script can produce the 55-plus points required.",
      "reason_loses": "A defensive adjustment, stalled Detroit line, or Buffalo win in a lower-scoring game breaks the over leg.",
      "settlement_rules": "SGP push, void and leg-correlation rules unknown.",
      "legs": [
        {
          "market": "Moneyline",
          "selection": "Buffalo Bills",
          "line": "Bills moneyline",
          "price_status": "conditional"
        },
        {
          "market": "Total",
          "selection": "OVER",
          "line": "54.5 points",
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
      "excerpt": "NFL_BETS and NFL_CORRECTIONS provide the historical graded rows."
    },
    {
      "path": "assets/nfl-predictions-2026.js",
      "fetch_succeeded": true,
      "excerpt": "Week 1 result blocks show ChatGPT tickets and profits."
    },
    {
      "path": "Data/2026/rosters/detroit-lions.json",
      "fetch_succeeded": true,
      "excerpt": "Detroit is 1-0 after scoring 31 and allowing 30 in Week 1."
    },
    {
      "path": "Data/2026/rosters/buffalo-bills.json",
      "fetch_succeeded": true,
      "excerpt": "Buffalo is 1-0 after scoring 36 and allowing 31 in Week 1."
    },
    {
      "url": "https://www.fanduel.com/research/nfl-week-2-schedule-2026-odds-for-each-game",
      "fetch_succeeded": true,
      "excerpt": "FanDuel lists Detroit +5.5 -115, Buffalo -5.5 -105, and total 54.5."
    },
    {
      "url": "https://www.buffalobills.com/team/depth-chart",
      "fetch_succeeded": true,
      "excerpt": "Josh Allen is first quarterback and James Cook is first running back."
    },
    {
      "url": "https://www.detroitlions.com/team/depth-chart",
      "fetch_succeeded": true,
      "excerpt": "Jared Goff is first quarterback and Jahmyr Gibbs is first running back."
    },
    {
      "url": "https://www.buffalobills.com/news/buffalo-bills-injury-report-vs-lions-week-2",
      "fetch_succeeded": true,
      "excerpt": "Cole Bishop, Ty Johnson and T.J. Sanders are questionable."
    },
    {
      "url": "https://www.detroitlions.com/team/injury-report/",
      "fetch_succeeded": true,
      "excerpt": "Christian Mahogany and Blake Miller are out; D.J. Reed is questionable."
    },
    {
      "url": "https://www.bovada.lv/sports/football/nfl",
      "fetch_succeeded": true,
      "excerpt": "Bovada page loaded without an event-specific Lions-Bills quote."
    }
  ],
  "reasoning_summary": "Eligibility is active before the 8:15 PM ET kickoff. Both teams are 1-0 and scored 30-plus in Week 1, but Detroit travels on a short week while missing two offensive linemen; Buffalo has Josh Allen at home and a modest spread price. FanDuel provides the exact reference quote, while Bovada exposes no event-specific price. I rejected player-level ceiling props because no verified line was available and instead used a $14 spread plus a smaller $6 Bills-win/over SGP."
}
```
