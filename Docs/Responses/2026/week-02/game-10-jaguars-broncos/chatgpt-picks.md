# ChatGPT forced-selection v3.2

## Summary

Pregame check: 3:25 PM EDT, before the 4:05 PM ET kickoff. Projected winner: **Denver Broncos, 23-21**, but Jacksonville +2.5 is my straight selection. Jacksonville won Week 1 34-10 while Denver lost 31-10; that sharp first-week split makes a low-confidence Denver home win, not a large favorite position, my central forecast. The full $20 is allocated to satisfy the forced-selection experiment; the stakes are hypothetical and do not imply positive value.

## Team profile notes

The Jaguars profile is dated September 9 and records 1-0 (34 PF, 10 PA); its September 13 health snapshot has LeQuint Allen and CB Devon Marshall questionable and six players on IR. The Broncos profile is also dated September 9 and records 0-1 (10 PF, 31 PA); its September 13 snapshot lists LB Jonathon Cooper and G Nick Gargiulo out and five players on IR. Those snapshots are seven days old, so I refreshed them against the official current injury reports. Jacksonville lists Allen, Jakobi Meyers, and Brian Thomas Jr. with limited practice but no game status; Denver lists RB RJ Harvey questionable and WR Marvin Mims Jr. out. The official Jaguars chart confirms Trevor Lawrence, has Bhayshul Tuten and Chris Rodriguez co-listed first at RB, and lists Allen after them. Denver's Sept. 16 unofficial chart lists Bo Nix first at QB and J.K. Dobbins ahead of Harvey at RB. The profile had prior QB heuristic corrections (Quinn Ewers for JAX, Sam Ehlinger for DEN); both official charts confirm Lawrence/Nix. The profile's Allen RB1 and Harvey RB1 are outdated ordering mismatches. I did not edit the profiles.

## Independent derivations

I used raw `NFL_BETS` and all 11 `NFL_CORRECTIONS` in `assets/nfl-data.js`, not the conclusion-bearing shape reports. In the older ledger, game UNDER tickets were 10-4 for recorded +$53.73, including Claude's Patriots-Seahawks Week 1 U44.5 (+$5.45) and ChatGPT's Commanders-Dolphins Week 11 Prompt 7 UNDER (+$10); game OVER tickets were 2-5 for -$20.27. This is descriptive small-sample history with imperfect assumed odds, not a demonstrated repeatable edge. Correction examples include Stroud passing-TD OVER (Week 9 Prompt 5) corrected to zero passing TDs, James Cook rushing-yard OVER (Week 11 Prompt 2) corrected to 48 yards, and D'Andre Swift rushing-yard UNDER (Week 11 Prompt 6) corrected to 90 yards. Each is a reminder to grade from the box-score line, not a pick's confidence. Historical SGPs were 0-4 / -$28, too small a sample to generalize.

For my own current-season response review, I read the saved ChatGPT files for Week 1 Patriots-Seahawks and 49ers-Rams, Week 2 Lions-Bills, and Eagles-Titans. The first was reserve/no bet; the Rams scoring tickets lost; the Lions-Bills $14 spread and $6 SGP both won. Eagles-Titans was a pregame response whose result was not in the ChatGPT result block when I checked. Thus the settled funded picks I can substantiate here are two wins and one loss; I do not treat this tiny sample as an edge. I keep a larger single and smaller correlated parlay, and avoid repeating the Rams Game 2 concentration in one scoring thesis. I considered a volume prop around Tuten or Dobbins but rejected it: the available starter/usage evidence does not give a current attempt line, and Harvey's questionable status makes Denver backfield allocation uncertain. The market tickets are more auditable than an invented player threshold.

## Bet-type coverage

My own Week 1 and Week 2 Game 1 responses included game-level markets; the Week 1 49ers-Rams entry concentrated exposure on the Rams scoring premise. In this matchup a volume-based Tuten rush or Parker Washington targets angle would be preferable to a ceiling-based receiving-yard or passing-TD OVER only if an exact current line and role were established. I found the official depth chart, but not a reliable current prop quote plus a game-day workload commitment, so I stay with game-level markets and cap the SGP stake at $6.

## Ticket table

| Ticket | Selection | Stake | Pricing | Win probability | Break-even | Hypothetical profit / return | Support / opposition |
|---|---|---:|---|---:|---:|---:|---|
| Straight | Jaguars +2.5 | $14 | Conditional, minimum -105 | 0.5500 | 0.5122 | $13.33 / $27.33 | Support: Jacksonville scored 34 and allowed 10 in Week 1. Opposition: Denver is home, and the Jaguars travel to altitude after a high-output opener. |
| 2-leg SGP | Jaguars +3.5 **and** Under 52.5 | $6 | Conditional combined minimum +200 | 0.3500 joint | 0.3333 | $12.00 / $18.00 | Support: a close, lower-scoring game supports both legs. Opposition: Jacksonville's Week 1 offense could again score efficiently, or Denver could win a high-scoring game. |

Total stake is $20; reserve is $0. SGP joint probability is estimated directly rather than by multiplying legs. It overlaps the single on the Jaguars spread side. The single is unattractive below -105 on this estimate; the SGP is unattractive below +200. Both estimates have wide uncertainty and may represent negative value despite meeting the forced-selection requirement.

## Evidence and grading concerns

DraftKings lines shown by DK Network were Jaguars +2.5 (-102), Broncos -2.5 (-118), total 45.5 (Over -108 / Under -112), and moneyline +120 / -142. FanDuel's matchup page showed the same spread and total, with slight price differences. I did not find an event-specific Bovada quote. Because the DK page's provider capture timestamp was not exposed and the secondary sportsbook pages may lag, both tickets are deliberately conditional; neither uses the observed lines as an executable quote. The target payouts below are hypothetical. Week 1 rows support the cited team records; they do not establish that the same scoring profile repeats. No conclusion-bearing `final-review.md`, `what-has-worked.md`, or `redesign-direction.md` was used.

## JSON

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "Codex",
  "model_version": "GPT-6",
  "generated_at": "2026-09-20T15:25:22-04:00",
  "lock_at": null,
  "week": 2,
  "game_id": "jaguars-broncos",
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "winner": "Denver Broncos",
  "estimated_winner_probability": 0.55,
  "projected_score": {"Jacksonville Jaguars": 21, "Denver Broncos": 23},
  "team_profiles_read": [
    {"path_or_url": "Data/2026/rosters/jacksonville-jaguars.json", "as_of": "2026-09-09", "season_record": "1-0 (34 PF, 10 PA)", "health_key_players": "health_snapshot 2026-09-13: LeQuint Allen and Devon Marshall questionable; six on IR; refreshed official Week 2 report lists Allen, Meyers, Thomas limited with no game status"},
    {"path_or_url": "Data/2026/rosters/denver-broncos.json", "as_of": "2026-09-09", "season_record": "0-1 (10 PF, 31 PA)", "health_key_players": "health_snapshot 2026-09-13: Jonathon Cooper and Nick Gargiulo out; five on IR; refreshed official report lists RJ Harvey questionable and Marvin Mims Jr. out"}
  ],
  "independent_derivations": {
    "profitable_shapes": [
      {"shape": "Game UNDER", "record_and_pl": "10-4, +$53.73 recorded", "evidence": "NFL_BETS examples: Claude Patriots-Seahawks W1 U44.5 +$5.45; ChatGPT Commanders-Dolphins W11 Prompt 7 UNDER +$10; small sample and assumed historical pricing limit inference."}
    ],
    "losing_shapes": [
      {"shape": "Game OVER", "record_and_pl": "2-5, -$20.27 recorded", "evidence": "NFL_BETS aggregate; not enough rows to claim a stable causal reason."},
      {"shape": "SGP", "record_and_pl": "0-4, -$28 recorded", "evidence": "NFL_BETS aggregate; four tickets are too few to generalize."},
      {"shape": "Prop box-score corrections", "evidence": "NFL_CORRECTIONS: Stroud W9 P5 passing TD OVER corrected to 0 TD; Cook W11 P2 rushing OVER corrected to 48 yards; Swift W11 P6 rushing UNDER corrected to 90 yards."}
    ]
  },
  "self_reflection": {
    "past_picks_reviewed": "ChatGPT raw responses for Week 1 Patriots-Seahawks and 49ers-Rams, Week 2 Lions-Bills, and Eagles-Titans; Eagles-Titans result not yet recorded in the own-model result block at review time.",
    "season_2_record": "Two settled wins and one settled loss among funded picks reviewed; W1 Game 1 was reserve/no bet. W2 Game 4 was not yet graded in the own-model result block.",
    "pattern_kept": "Keep exact game lines with a larger straight ticket and smaller SGP; Week 2 Game 1's two wins remain too small a sample to establish an edge.",
    "pattern_stopped": "Do not concentrate most of the bankroll on the same team scoring thesis as in the W1 49ers-Rams loss; do not invent a player workload line from stale profile ordering."
  },
  "bets": [
    {
      "ticket_id": "single-jaguars-plus-2-5",
      "type": "straight",
      "market": "Spread",
      "selection": "Jacksonville Jaguars +2.5",
      "line": "+2.5 points",
      "stake": 14,
      "pricing_classification": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": -105,
      "sportsbook": null,
      "odds_source": null,
      "odds_captured_at": null,
      "payout_basis": "minimum_acceptable_odds; hypothetical at target price",
      "max_loss": 14,
      "potential_net_profit": 13.33,
      "potential_total_return": 27.33,
      "break_even_probability": 0.5122,
      "estimated_win_probability": 0.55,
      "value_reasoning": "At -105 the break-even rate is 0.5122 versus an estimated 0.5500 cover probability; uncertainty is broad, and worse than -105 erases the limited estimated margin.",
      "strongest_supporting_evidence": "Jacksonville's local profile and Week 1 result record a 34-10 win, while Denver's profile records a 10-31 loss.",
      "strongest_opposing_evidence": "Denver is at home and the Jaguars must play at altitude; both facts could erase Jacksonville's apparent Week 1 form gap.",
      "reason_wins": "Jacksonville stays within two points because its Week 1 offense scored 34 against Cleveland while Denver scored only 10 against Kansas City.",
      "reason_loses": "Denver's home-field and altitude advantage or a repeat of Jacksonville's turnover/efficiency regression produces a Broncos win by three or more.",
      "settlement_rules": "Standard full-game spread assumed; sportsbook-specific rules not verified."
    },
    {
      "ticket_id": "sgp-jaguars-plus-3-5-under-52-5",
      "type": "sgp",
      "market": "SGP",
      "selection": "Jacksonville Jaguars +3.5 points AND game total Under 52.5 points",
      "line": "Jaguars +3.5; Under 52.5 total",
      "stake": 6,
      "pricing_classification": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": 200,
      "sportsbook": null,
      "odds_source": null,
      "odds_captured_at": null,
      "payout_basis": "minimum_acceptable_combined_odds; hypothetical at target price",
      "max_loss": 6,
      "potential_net_profit": 12,
      "potential_total_return": 18,
      "break_even_probability": 0.3333,
      "estimated_win_probability": 0.35,
      "value_reasoning": "At combined +200 break-even is 0.3333 against a rough 0.3500 joint estimate; joint uncertainty is high, and below +200 the price is unattractive.",
      "strongest_supporting_evidence": "Denver scored 10 in Week 1 and Jacksonville's profile lists only 44 combined points in its first game; 52.5 gives a substantial total cushion.",
      "strongest_opposing_evidence": "Jacksonville scored 34 in Week 1, so another efficient Jaguars performance could push the combined score above 52.5 even if the spread covers.",
      "reason_wins": "A close game with no repeat of Jacksonville's 34-point outburst keeps the Jaguars inside 3.5 and the score below 52.5.",
      "reason_loses": "Denver pulls away by four or more, or either offense creates enough explosive scoring to exceed 52 points.",
      "correlation": "Positive and imperfect: a tight, low-scoring game helps the underdog spread and Under together; a high-scoring Denver win is the main shared failure path.",
      "legs": [
        {"market": "Spread", "selection": "Jacksonville Jaguars +3.5", "line": "+3.5 points", "individual_price": null, "settlement_rules": "Unknown; SGP void/push rules not verified."},
        {"market": "Total", "selection": "Under 52.5 points", "line": "52.5 points", "individual_price": null, "settlement_rules": "Unknown; SGP void/push rules not verified."}
      ],
      "settlement_rules": "Combined SGP rules, leg void treatment, and push adjustment not verified; original accepted combined price should govern settlement."
    }
  ],
  "sources": [
    {"path_or_url": "Prompts/2026/week-02/game-10-jaguars-broncos.md", "fetch_succeeded": true, "quoted_snippet": "Kickoff: 2026-09-20, 4:05 PM ET (Sunday)"},
    {"path_or_url": "Data/2026/rosters/jacksonville-jaguars.json", "fetch_succeeded": true, "quoted_snippet": "result: W 34-10; points_for 34; points_against 10"},
    {"path_or_url": "Data/2026/rosters/denver-broncos.json", "fetch_succeeded": true, "quoted_snippet": "result: L 10-31; points_for 10; points_against 31"},
    {"path_or_url": "assets/nfl-data.js", "fetch_succeeded": true, "quoted_snippet": "Every other number on this site ... is computed from NFL_BETS + NFL_GAMES"},
    {"path_or_url": "assets/nfl-predictions-2026.js", "fetch_succeeded": true, "quoted_snippet": "Date-only lock records do not establish an exact pre-kickoff timestamp."},
    {"path_or_url": "Docs/2026/grading-rubric.md", "fetch_succeeded": true, "quoted_snippet": "Outcome is the primary axis, reasoning is a secondary lens"},
    {"url": "https://www.jaguars.com/team/depth-chart/", "fetch_succeeded": true, "quoted_snippet": "QB Trevor Lawrence; RB Bhayshul Tuten and Chris Rodriguez first, Allen third."},
    {"url": "https://www.denverbroncos.com/team/depth-chart/", "fetch_succeeded": true, "quoted_snippet": "Updated as of Sept. 16, 2026; QB Bo Nix, RB J.K. Dobbins ahead of RJ Harvey."},
    {"url": "https://www.jaguars.com/team/injury-report/", "fetch_succeeded": true, "quoted_snippet": "RJ Harvey QUESTIONABLE; Marvin Mims Jr. OUT; Allen, Meyers, Thomas limited."},
    {"url": "https://www.jaguars.com/news/in-and-out-2026-week-2-mullens-active", "fetch_succeeded": true, "quoted_snippet": "Mullens will back up starter Trevor Lawrence for a second consecutive game."},
    {"url": "https://dknetwork.draftkings.com/draftkings-sportsbook-betting-splits/", "fetch_succeeded": true, "quoted_snippet": "JAX Jaguars +2.5 -102; total 45.5; ML +120; DEN ML -142."},
    {"url": "https://www.fanduel.com/research/nfl/matchups/9178/jaguars-broncos", "fetch_succeeded": true, "quoted_snippet": "Jacksonville +2.5; Denver -2.5; total 45.5."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": true, "quoted_snippet": "Generic NFL page did not expose event-specific Bovada odds."}
  ],
  "reasoning_summary": "I checked kickoff before the 4:05 PM ET start and read both team profiles. The records were 1-0 Jacksonville and 0-1 Denver; their old health snapshots were refreshed against the teams' current injury reports, and official charts showed updated RB ordering. DraftKings market context was JAX +2.5 with a 45.5 total, but no timestamped Bovada offer was retrieved, so both tickets use conditional target odds. I used a small, uncertain underdog-and-lower-total thesis, with less money on the correlated ticket."
}
```
