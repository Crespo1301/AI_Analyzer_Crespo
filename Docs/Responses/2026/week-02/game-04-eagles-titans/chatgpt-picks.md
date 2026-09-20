# Codex forced-selection response: Eagles at Titans, Week 2

Generated: 2026-09-20T12:12:28-04:00. Pregame check: kickoff is 1:00 PM ET; the check was about 48 minutes before kickoff. The official Eagles schedule lists Sunday, September 20, at 1 PM on FOX. No prediction is locked; `lock_at` is null.

## 1. Winner, score, and game script

Winner: Philadelphia Eagles, estimated win probability 0.7300. Projected score: Eagles 24, Titans 13. Tennessee's offense managed 195 yards and 10 points against the Jets, with Cam Ward at 19-of-32 for 140 yards; that is the most concrete basis for expecting Philadelphia to control the game. The Eagles' Week 1 offense had 318 yards and 24 points, but its line allowed three sacks, Landon Dickerson is on IR, and the Titans are home for a second straight week. I expect Philadelphia's defense to force longer Tennessee possessions and the Eagles to get enough from Hurts and Barkley without a shootout; the NWS heat advisory makes the scoring distribution less certain, not a dependable automatic Under signal.

## 2. Team profiles and starters

The Eagles profile records 1-0, 24 points for and 22 against, after a 24-22 win over Washington; its health snapshot is dated 2026-09-13, which is seven days before kickoff and stale by more than 24 hours. The Titans profile records 0-1, 10 points for and 23 against after a 23-10 loss to the Jets; its health snapshot is also dated 2026-09-13. I used the teams' September 18 injury reports and September 20 inactive lists instead of carrying forward those snapshots: Greenard and guard Micah Morris are inactive for Philadelphia; safety Andrew Mukuba is active. Tennessee scratches James Williams Sr. and Cor'Dale Flott; Cedric Gray was questionable on the Friday report but is not on the Sunday inactive list.

I verified quarterback roles against the teams' current official depth charts: Philadelphia lists Jalen Hurts first and Saquon Barkley first at RB; Tennessee lists Cam Ward first at QB and Tony Pollard first at RB. The profile has the Eagles' QB and corrected RB1 right, but its WR1 Hollywood Brown conflicts with the official Eagles chart's DeVonta Smith; its TE1 Grant Calcaterra is on IR, while the chart lists Dallas Goedert first. Tennessee's profile says Tyjae Spears is RB1, while its current official chart lists Pollard first. I found no QB1 heuristic error. I did not edit either profile.

## 3. Independent derivations from graded data

I read the 97 rows in `NFL_BETS` and all 11 entries in `NFL_CORRECTIONS`. Across the stored rows for both seasons, game-total UNDERS are 10-4 with recorded P/L of +$53.73; this is a descriptive historical grouping, not a demonstrated prospective edge. Examples include the Patriots-Seahawks UNDER 44.5 (Claude, Week 1, +$5.45), the Commanders-Dolphins game UNDER (ChatGPT, Week 11 Prompt 7, +$10), and the Titans-Texans UNDER 38.5 (Claude, Week 11 Prompt 4, +$10). The conflicting Week 9 49ers-Giants UNDER 48.5 rows lost for ChatGPT and Gemini, so this is not a claim that every low-total setup wins.

Recorded losing shapes include player props overall (20 wins, 22 losses, one push, -$36.72), spreads (8-10-2, -$31.65), and SGPs (0-4, -$28). Specific counterexamples are the Texans-Broncos Stroud OVER 1.5 passing TDs, Week 9 Prompt 5, corrected to 0 TD and a loss; the Bills-Buccaneers James Cook rushing-yard OVER, Week 11 Prompt 2, corrected to 48 yards and a loss; and the Week 1 Melbourne Rams Team Total OVER 23.5, ChatGPT, a $15 loss. All 11 correction entries concern player-stat tickets; for example, the Week 11 Swift UNDER 65.5 was corrected to a 90-yard result. The repository's historical returns include inconsistent or assumed odds, so I use these as row counts and recorded outcomes, not as clean comparable ROI evidence.

## 4. Self-reflection

My prior Week 1 Patriots-Seahawks response reserved all $20 because the researched evidence did not clear the market's break-even thresholds. In Week 1 Game 2, my $15 Rams team-total OVER and $5 Rams ML-plus-team-total SGP shared the same scoring premise and both lost when the Rams scored seven; I had concentrated the full bankroll on one team outcome. In Week 2 Lions-Bills, my $14 Bills -5.5 single and $6 Bills ML/Over SGP both won when Buffalo won 41-31, but one win is not evidence of a repeatable edge. The old ChatGPT rows also show two $10 losses in Ravens-Dolphins Week 9 Prompt 2 and two $10 losses on Cook/Shakir overs in Bills-Buccaneers Week 11 Prompt 2, with Cook's loss corrected from a false recorded win. I kept the single larger than the SGP, and I made the parlay stake $4 rather than repeating a $15/$5 all-on-one-premise allocation; the forced $20 total itself does not imply a profitable edge.

## 5. Ticket table

| Ticket | Selection | Stake | Pricing | Estimated win probability | Break-even | Hypothetical net profit / return | Supporting evidence | Opposing evidence |
|---|---|---:|---|---:|---:|---:|---|---|
| Straight total | UNDER 39.5 | $16 | `reference_market`: FanDuel -110, reported by FOX Sports | 0.5500 (range 0.4500-0.6300) | 0.5238 | $14.55 / $30.55 | Titans had 195 yards and 10 points in Week 1; Philadelphia's confirmed active defense includes Carter, DeJean, and Mukuba. | Philadelphia scored 24 in Week 1; its OL allowed three sacks, but the offense can still turn short fields into points. |
| 2-leg SGP | Eagles moneyline + UNDER 44.5 | $4 | `conditional`: minimum combined +150, not an observed quote | 0.4300 joint (range 0.3100-0.5100) | 0.4000 at target +150 | $6.00 / $10.00 at target +150 | Tennessee's low Week 1 production supports both an Eagles win and a game staying below 45. | Philadelphia could score enough by itself to break the Under, or Tennessee could improve substantially at home. |

Total stake: $20.00. Reserve: $0.00. These are hypothetical research selections, not locked or executable tickets. The SGP overlaps the single's Under premise, so the $4 is deliberately the smaller stake. Its dependence is positive but imperfect: Tennessee's offense being contained helps the Under and an Eagles win, while a high-scoring Philadelphia blowout can win the moneyline and lose the total leg. Either leg can fail the parlay; no marginal probabilities were multiplied as if independent.

## 6. Evidence, failure cases, and grading concerns

The single's estimated 0.5500 win probability is subjective, not measured; -110 breaks even at 0.5238. At -115 the break-even rate rises to 0.5349 and leaves little cushion; at -120 it is 0.5455, so I would pass at -120 or worse. This is only a thin estimate edge, and the probability range includes negative value. The SGP's joint 0.4300 estimate is also subjective and its range crosses the 0.4000 break-even threshold at +150; +150 is the minimum conditional target because lower payout does not justify its uncertainty. The central estimate makes about +133 fair, so a target worse than +133 is unattractive even before allowing for model error. Both totals are half-point lines and cannot push; sportsbook SGP void/leg-adjustment rules were not retrieved. Moneyline tie/void rules were not retrieved either.

The NWS forecast page showed a heat advisory for Nashville from 9:29 AM until 7 PM CDT, with a 99°F high. I treat that as a real uncertainty factor rather than an automatic Under case. Eagles interior-line availability is also a downside to a clean offensive game; on the other hand, Nashville's home environment and Tennessee's second consecutive home game remove the road/travel disadvantage for the Titans.

Source-boundary disclosure: while locating the current game archive record, a local command printed a short adjacent Gemini summary from `assets/nfl-predictions-2026.js`. I did not open Gemini's response file or use that neighboring summary to choose a side, line, probability, stake, or parlay. This was an inadvertent exposure and means the blind-source boundary was not perfectly maintained. The folder's `prompt-local.md` and `chatgpt-picks.md` were absent before this response; I used the supplied attachment and saved this response at the requested path. I did not open `what-has-worked.md`, `redesign-direction.md`, or conclusion-bearing `final-review.md` files.

## 7. Sources read

Local files were read directly from the repository. Excerpts are short identifying facts, not complete records.

| Source | Access status | Checkable excerpt |
|---|---|---|
| User attachment `C:\Users\cresp\.codex\attachments\4effcddd-af69-4f1f-aeb6-04f55671bf39\Pasted text.txt` | Read | “Week 2, Philadelphia Eagles at Tennessee Titans” |
| `Docs/2026/grading-rubric.md` | Read | “outcome is the primary axis” |
| `Docs/2026/iteration-system.md` | Read | “Promote Season 2 graded games into NFL_GAMES + NFL_BETS” |
| `assets/nfl-data.js` (`NFL_BETS`) | Read and counted: 97 entries | “49ers vs Rams (Melbourne)” |
| `assets/nfl-data.js` (`NFL_CORRECTIONS`) | Read all 11 entries | “16 att, 48 rush yds” |
| `assets/nfl-predictions-2026.js` | Read; current archive includes ungraded entries | “Bills 41, Lions 31” |
| `Data/2026/rosters/philadelphia-eagles.json` | Read | `season_record`: 1-0, 24 PF, 22 PA; health snapshot 2026-09-13 |
| `Data/2026/rosters/tennessee-titans.json` | Read | `season_record`: 0-1, 10 PF, 23 PA; health snapshot 2026-09-13 |
| `Docs/Responses/2026/week-01/game-01-patriots-seahawks/chatgpt-picks.md` | Read | “Full $20 reserved.” |
| `Docs/Responses/2026/week-01/game-02-niners-rams/chatgpt-picks.md` | Read | “Both tickets conditional” |
| `Docs/Responses/2026/week-02/game-01-lions-bills/chatgpt-picks.md` | Read | “Bills ML + OVER 54.5” |
| `Docs/Responses/2026/week-02/game-02-panthers-falcons/chatgpt-picks.md` | Read | “Carolina Panthers -2.5” |
| `Docs/Responses/2026/week-02/game-03-vikings-bears/chatgpt-picks.md` | Read | “Aaron Jones OVER 10.5 rushing attempts” |
| `Docs/Responses/2026/week-02/game-04-eagles-titans/prompt-local.md` | Missing | Used the user-supplied prompt |
| `Docs/Responses/2026/week-02/game-04-eagles-titans/chatgpt-picks.md` | Missing before this write | Created by this response |
| `Docs/2026/what-has-worked.md`, `Docs/2026/redesign-direction.md`, and conclusion-bearing `final-review.md` files | Not read per instruction | — |

Web pages below were opened through the web tool. Retrieval time for this research was approximately 2026-09-20 12:05-12:12 PM EDT. Each excerpt is at most 15 words.

| URL | Fetch | Use and excerpt actually read |
|---|---|---|
| https://www.philadelphiaeagles.com/news/eagles-schedule-release-2026 | Succeeded | Official schedule: “Eagles at Titans, 1 PM on FOX/94WIP” |
| https://www.philadelphiaeagles.com/team/depth-chart | Succeeded | Official depth chart: “RB | Saquon Barkley | Tank Bigsby | Will Shipley” |
| https://www.tennesseetitans.com/team/depth-chart | Succeeded | Official chart as of 9/14: “QB | Cam Ward | Mitchell Trubisky” and Pollard first at RB |
| https://www.philadelphiaeagles.com/news/eagles-at-titans-injury-report-jalen-carter-cooper-dejean-2026-nfl-week-2-regular-season | Succeeded | Official Friday report: “Jonathan Greenard was ruled out” |
| https://www.tennesseetitans.com/news/week-2-injury-report-titans-vs-eagles | Succeeded | Official final report: “Cedric Gray | Concussion | FP | FP | FP | QUESTIONABLE” |
| https://www.philadelphiaeagles.com/news/eagles-at-titans-inactives-week-2-2026-nfl-regular-season | Succeeded | Sunday update: “Andrew Mukuba is active against the Titans.” |
| https://www.tennesseetitans.com/news/game-inactives-week-2-titans-vs-eagles | Succeeded | Sunday inactive list includes “CB Cor'Dale Flott” and “LB James Williams Sr.” |
| https://www.tennesseetitans.com/news/titans-drop-season-opener-to-jets-23-10 | Succeeded | Official Week 1 recap: “The Jets outgained the Titans 367 to 195 yards” |
| https://www.philadelphiaeagles.com/news/commanders-vs-eagles-game-recap-september-13-2026-nfl-week-1 | Succeeded | Official recap reports “Jalen Hurts threw three touchdown passes” |
| https://forecast.weather.gov/MapClick.php?lat=36.1663&lon=-86.7791 | Succeeded | NWS page: “Heat Advisory September 20, 09:29am until September 20, 07:00pm” |
| https://www.foxsports.com/stories/nfl/eagles-vs-titans-prediction-odds-pick-nfl-week-2 | Succeeded; page published 3:45 AM EDT Sep. 20 and labels odds FanDuel as of Sep. 20 | “Under 39.5: -110”; also reports PHI -7 -110 and PHI ML -350 / TEN +280. Page retrieved at 2026-09-20T12:12:28-04:00. |
| https://www.bovada.lv/sports/football/nfl | Succeeded as generic page only | Page title is “NFL Odds and Betting Lines at Bovada Sportsbook”; searches of the fetched page found no “Eagles” or “Titans” match, so no Bovada price is claimed. |

## 8. Structured response

```json
{
  "prompt_template": "forced-selection",
  "prompt_version": "3.2",
  "model_role": "Codex",
  "model_version": "GPT-6",
  "generated_at": "2026-09-20T12:12:28-04:00",
  "lock_at": null,
  "week": 2,
  "game_id": "eagles-titans",
  "line_snapshot": {
    "spread": "Philadelphia Eagles -7 (-110); Tennessee Titans +7 (-110)",
    "total": "39.5; Over -110 / Under -110",
    "moneyline": "Philadelphia -350 / Tennessee +280",
    "book": "FanDuel, as reported by FOX Sports",
    "captured_at": "2026-09-20T12:12:28-04:00",
    "bovada_status": "Generic NFL page fetched; no event-specific Eagles-Titans quote in accessible page text."
  },
  "forced_allocation": true,
  "bankroll": 20,
  "total_stake": 20,
  "reserve": 0,
  "winner": "Philadelphia Eagles",
  "estimated_winner_probability": 0.7300,
  "projected_score": {
    "Philadelphia Eagles": 24,
    "Tennessee Titans": 13
  },
  "team_profiles_read": [
    {
      "path": "Data/2026/rosters/philadelphia-eagles.json",
      "as_of": "2026-09-13",
      "season_record": "1-0, 24 PF, 22 PA; last game W 24-22 vs Washington",
      "health_key_players": "Jonathan Greenard, Andrew Mukuba, Jalen Carter, Cooper DeJean; current official update supersedes stale profile snapshot"
    },
    {
      "path": "Data/2026/rosters/tennessee-titans.json",
      "as_of": "2026-09-13",
      "season_record": "0-1, 10 PF, 23 PA; last game L 10-23 vs New York Jets",
      "health_key_players": "Cedric Gray, James Williams Sr., Cor'Dale Flott; current official injury and inactive lists supersede stale profile snapshot"
    }
  ],
  "independent_derivations": {
    "rows_reviewed": 97,
    "corrections_reviewed": 11,
    "profitable_shapes": [
      {
        "shape": "Game-total UNDER selections in NFL_BETS",
        "record": "10 wins, 4 losses; recorded P/L +$53.73 across both seasons",
        "citations": [
          "Week 1 Patriots-Seahawks, Claude, UNDER 44.5, WIN, +$5.45",
          "Week 11 Commanders-Dolphins, ChatGPT Prompt 7, UNDER, WIN, +$10",
          "Week 11 Texans-Titans, Claude Prompt 4, UNDER 38.5, WIN, +$10"
        ],
        "caveat": "Descriptive and small; Week 9 49ers-Giants UNDER tickets lost, and stored odds/returns are not a uniform audited price series."
      }
    ],
    "losing_shapes": [
      {
        "shape": "Player props overall",
        "record": "20 wins, 22 losses, 1 push; recorded P/L -$36.72",
        "citations": [
          "Week 9 Texans-Broncos, ChatGPT Prompt 5, Stroud OVER 1.5 passing TDs corrected to 0 TD, LOSS, -$11",
          "Week 11 Bills-Buccaneers, ChatGPT Prompt 2, James Cook rushing OVER corrected to 48 yards, LOSS, -$10",
          "Week 11 Bears-Vikings, Gemini Prompt 6, Swift UNDER 65.5 corrected to 90 yards, LOSS, -$11"
        ]
      },
      {
        "shape": "Spreads and SGPs in the combined ledger",
        "record": "Spreads 8-10-2, -$31.65; SGP 0-4, -$28",
        "citations": [
          "Week 9 Packers-Panthers, ChatGPT Prompt 4, Packers -12.5, LOSS, -$11",
          "Week 1 49ers-Rams, ChatGPT FS-2.1, Rams team-total OVER 23.5, LOSS, -$15; correlated SGP also lost $5"
        ]
      }
    ]
  },
  "self_reflection": {
    "past_picks_reviewed": "Read my Week 1 Patriots-Seahawks reserve response, Week 1 49ers-Rams response, and Week 2 Lions-Bills response and its result block; also reviewed my own 2025 ChatGPT rows and their corrections.",
    "pattern_kept": "My Week 2 Lions-Bills $14 spread and $6 correlated SGP both won, but the one-game outcome is not evidence of an edge; I retain a larger single and smaller parlay.",
    "pattern_stopped": "The Week 1 Rams $15 team-total ticket and $5 same-premise SGP both lost. I avoid again putting most of a forced stake on two tickets sharing one team's score thesis, and account for corrected false prop grades."
  },
  "bets": [
    {
      "ticket_id": "ticket_1",
      "type": "straight",
      "market": "Total",
      "line": "UNDER 39.5 total points",
      "stake": 16,
      "pricing_status": "reference_market",
      "odds_american": -110,
      "minimum_acceptable_odds": null,
      "sportsbook": "FanDuel, odds reported by FOX Sports",
      "odds_source": "https://www.foxsports.com/stories/nfl/eagles-vs-titans-prediction-odds-pick-nfl-week-2",
      "odds_captured_at": "2026-09-20T12:12:28-04:00",
      "payout_basis": "odds_american",
      "max_loss": 16,
      "potential_net_profit": 14.55,
      "potential_total_return": 30.55,
      "break_even_probability": 0.5238,
      "estimated_win_probability": 0.5500,
      "probability_range": [0.4500, 0.6300],
      "value_reasoning": "FOX Sports reports FanDuel UNDER 39.5 at -110 as of Sep. 20; captured by me at the timestamp above. My subjective 0.5500 is only 0.0262 above the 0.5238 break-even rate and uncertainty includes negative value. -115 leaves little room for error; -120 or worse is unattractive. This is a reference quote, not Bovada and not a locked wager.",
      "strongest_supporting_evidence": "Tennessee produced 195 yards and 10 points against the Jets in Week 1; its official inactive list removes CB Cor'Dale Flott and LB James Williams, while Philadelphia has its starting QB and RB active.",
      "strongest_opposing_evidence": "Philadelphia scored 24 points on 318 yards in Week 1, and its defense is without Jonathan Greenard; a short field or Eagles red-zone efficiency can push the game over 39.5.",
      "reason_wins": "Tennessee's 195-yard Week 1 offense fails to sustain enough drives against Philadelphia to reach the 40 combined points needed to beat the Under.",
      "reason_loses": "Hurts and the Eagles score 30-plus or Tennessee's offense improves enough for the game to reach 40 points.",
      "settlement_rules": "39.5 is not push-capable; standard full-game total assumed, but book-specific overtime settlement was not separately verified.",
      "confidence": 5,
      "legs": []
    },
    {
      "ticket_id": "ticket_2",
      "type": "sgp",
      "market": "SGP",
      "line": "Philadelphia Eagles moneyline AND UNDER 44.5 total points",
      "stake": 4,
      "pricing_status": "conditional",
      "odds_american": null,
      "minimum_acceptable_odds": 150,
      "sportsbook": null,
      "odds_source": null,
      "odds_captured_at": null,
      "payout_basis": "minimum_acceptable_odds",
      "max_loss": 4,
      "potential_net_profit": 6,
      "potential_total_return": 10,
      "break_even_probability": 0.4000,
      "estimated_win_probability": 0.4300,
      "probability_range": [0.3100, 0.5100],
      "value_reasoning": "No Bovada or reference-book combined SGP quote was found. +150 is a hypothetical minimum, not an observed price; my subjective correlation-adjusted joint probability is 0.4300, above its 0.4000 break-even point, but its uncertainty range crosses break-even. Central fair odds are about +133; worse than +133 is unattractive, and +150 is still a weak forced-selection edge.",
      "strongest_supporting_evidence": "Tennessee scored 10 on 195 yards in Week 1, and its active/inactive status is confirmed by both teams' game-day lists; those facts support a controlled Eagles win and sub-45 total.",
      "strongest_opposing_evidence": "Philadelphia can win while scoring enough to push the combined total over 44.5; Tennessee's second straight home game also leaves room for a significant offensive improvement.",
      "reason_wins": "Philadelphia wins while Tennessee's limited Week 1 offense keeps the combined score at 44 or fewer.",
      "reason_loses": "The Eagles lose, or Philadelphia's own scoring lifts the combined total to 45 or more.",
      "correlation_reason": "A weak Tennessee offense makes both the Eagles win and lower total more likely together; they are positively dependent, not independent, but a high-scoring Eagles win breaks the Under leg.",
      "settlement_rules": "Combined price and book SGP push/void rules unknown; 44.5 cannot push; moneyline tie/void handling unknown. No quote was observed.",
      "confidence": 3,
      "legs": [
        {
          "market": "Moneyline",
          "selection": "Philadelphia Eagles to win",
          "line": "Eagles moneyline",
          "odds_american": null,
          "pricing_status": "conditional"
        },
        {
          "market": "Total",
          "selection": "UNDER",
          "line": "UNDER 44.5 total points",
          "odds_american": null,
          "pricing_status": "conditional"
        }
      ]
    }
  ],
  "sources": [
    {"path": "Docs/2026/grading-rubric.md", "fetch_succeeded": true, "quoted_snippet": "outcome is the primary axis"},
    {"path": "Docs/2026/iteration-system.md", "fetch_succeeded": true, "quoted_snippet": "Promote Season 2 graded games into NFL_GAMES + NFL_BETS"},
    {"path": "assets/nfl-data.js NFL_BETS and NFL_CORRECTIONS", "fetch_succeeded": true, "quoted_snippet": "16 att, 48 rush yds"},
    {"path": "assets/nfl-predictions-2026.js", "fetch_succeeded": true, "quoted_snippet": "Bills 41, Lions 31", "note": "A short adjacent Gemini summary was accidentally emitted while locating the archive. It was excluded from the analysis; see disclosure above."},
    {"path": "Data/2026/rosters/philadelphia-eagles.json", "fetch_succeeded": true, "quoted_snippet": "\"wins\": 1, \"losses\": 0, \"points_for\": 24, \"points_against\": 22"},
    {"path": "Data/2026/rosters/tennessee-titans.json", "fetch_succeeded": true, "quoted_snippet": "\"wins\": 0, \"losses\": 1, \"points_for\": 10, \"points_against\": 23"},
    {"path": "Docs/Responses/2026/week-01/game-01-patriots-seahawks/chatgpt-picks.md", "fetch_succeeded": true, "quoted_snippet": "Full $20 reserved."},
    {"path": "Docs/Responses/2026/week-01/game-02-niners-rams/chatgpt-picks.md", "fetch_succeeded": true, "quoted_snippet": "Both tickets conditional"},
    {"path": "Docs/Responses/2026/week-02/game-01-lions-bills/chatgpt-picks.md", "fetch_succeeded": true, "quoted_snippet": "Bills ML + OVER 54.5"},
    {"path": "Docs/Responses/2026/week-02/game-02-panthers-falcons/chatgpt-picks.md", "fetch_succeeded": true, "quoted_snippet": "Carolina Panthers -2.5"},
    {"path": "Docs/Responses/2026/week-02/game-03-vikings-bears/chatgpt-picks.md", "fetch_succeeded": true, "quoted_snippet": "Aaron Jones OVER 10.5 rushing attempts"},
    {"path": "Docs/Responses/2026/week-02/game-04-eagles-titans/prompt-local.md", "fetch_succeeded": false, "quoted_snippet": null, "note": "Missing; used the supplied prompt."},
    {"path": "Docs/2026/what-has-worked.md; Docs/2026/redesign-direction.md; conclusion-bearing final-review.md", "fetch_succeeded": false, "quoted_snippet": null, "note": "Not read per instruction."},
    {"url": "https://www.philadelphiaeagles.com/news/eagles-schedule-release-2026", "fetch_succeeded": true, "quoted_snippet": "Eagles at Titans, 1 PM on FOX/94WIP"},
    {"url": "https://www.philadelphiaeagles.com/team/depth-chart", "fetch_succeeded": true, "quoted_snippet": "RB | Saquon Barkley | Tank Bigsby"},
    {"url": "https://www.tennesseetitans.com/team/depth-chart", "fetch_succeeded": true, "quoted_snippet": "QB | Cam Ward | Mitchell Trubisky"},
    {"url": "https://www.philadelphiaeagles.com/news/eagles-at-titans-injury-report-jalen-carter-cooper-dejean-2026-nfl-week-2-regular-season", "fetch_succeeded": true, "quoted_snippet": "Jonathan Greenard was ruled out"},
    {"url": "https://www.tennesseetitans.com/news/week-2-injury-report-titans-vs-eagles", "fetch_succeeded": true, "quoted_snippet": "Cedric Gray | Concussion | FP | FP | FP | QUESTIONABLE"},
    {"url": "https://www.philadelphiaeagles.com/news/eagles-at-titans-inactives-week-2-2026-nfl-regular-season", "fetch_succeeded": true, "quoted_snippet": "Andrew Mukuba is active against the Titans."},
    {"url": "https://www.tennesseetitans.com/news/game-inactives-week-2-titans-vs-eagles", "fetch_succeeded": true, "quoted_snippet": "CB Cor'Dale Flott; LB James Williams Sr."},
    {"url": "https://www.tennesseetitans.com/news/titans-drop-season-opener-to-jets-23-10", "fetch_succeeded": true, "quoted_snippet": "The Jets outgained the Titans 367 to 195 yards"},
    {"url": "https://www.philadelphiaeagles.com/news/commanders-vs-eagles-game-recap-september-13-2026-nfl-week-1", "fetch_succeeded": true, "quoted_snippet": "Jalen Hurts threw three touchdown passes"},
    {"url": "https://forecast.weather.gov/MapClick.php?lat=36.1663&lon=-86.7791", "fetch_succeeded": true, "quoted_snippet": "Heat Advisory September 20, 09:29am until September 20, 07:00pm"},
    {"url": "https://www.foxsports.com/stories/nfl/eagles-vs-titans-prediction-odds-pick-nfl-week-2", "fetch_succeeded": true, "quoted_snippet": "Under 39.5: -110; Eagles -7: -110" , "note": "Reports FanDuel as of Sep. 20; page retrieved at 2026-09-20T12:12:28-04:00."},
    {"url": "https://www.bovada.lv/sports/football/nfl", "fetch_succeeded": true, "quoted_snippet": "No Eagles or Titans event price found in fetched page text", "note": "Generic page only; not a Bovada quote."}
  ],
  "reasoning_summary": "The profiles were stale by a week, and current official depth charts reveal Philadelphia WR1/TE1 and Tennessee RB1 mismatches in the stored profiles; official game-day injury and inactive reports resolved the players I used. Tennessee's official Week 1 recap shows 195 yards and 10 points, while the Eagles had 318 yards and scored 24, which points toward a Titans scoring problem but leaves an over scenario through Philadelphia's offense. The raw ledger's game-total unders were 10-4 and +$53.73, but those recorded returns are descriptive, odds quality varies, and prior unders also lost. FanDuel's reported Under 39.5 at -110 is only a thin subjective edge; the SGP has no observed combined price, so it remains conditional at +150 and weak under the forced allocation. Bovada returned only its generic page and no event quote; the source-boundary slip is fully disclosed above."
}
```
