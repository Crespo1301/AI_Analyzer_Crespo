/*
 * AI Analyzer, 2026-27 NFL season. Pre-game model predictions.
 *
 * Preserve original model predictions and append verified settlement in result.
 * Date-only lock records do not establish an exact pre-kickoff timestamp.
 * Keep the 2025 historical arrays separate from this current-season archive.
 *
 * Reset note (2026-09-09): the initial Week 1 lockup on 2026-09-08 was
 * discarded before kickoff because the prompt methodology did not honor the
 * blind-test intent and did not leverage each model's real strengths (Claude
 * and Codex can read local repo data, Gemini can read the public GitHub URL,
 * all three can research online). New prompts live in Prompts/2026/templates/.
 * Predictions will populate here once fresh model runs complete.
 *
 * Source responses live in Docs/Responses/2026/week-XX/game-YY-<slug>/
 */

var NFL_PREDICTIONS_2026 = [
  {
    week: 1,
    gameId: "patriots-seahawks",
    label: "Patriots at Seahawks",
    away: "New England Patriots",
    home: "Seattle Seahawks",
    kickoff: "2026-09-09T20:20:00-04:00",
    kickoffDisplay: "Wed Sep 9, 8:20 PM ET",
    venue: "Lumen Field, Seattle, WA",
    network: "NBC",
    line_snapshot: {
      spread: "SEA -3.5",
      total: 44.5,
      moneyline: "SEA -180 / NE +150",
      source: "DraftKings via Gemini research, captured 2026-09-09"
    },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872656",
    responseFolder: "Docs/Responses/2026/week-01/game-01-patriots-seahawks/",
    status: "locked",
    humanComparison: {
      name: "Carlos",
      source: "Two owner-supplied settled ticket screenshots",
      timingNote: "Added after settlement. Screenshots display September 9 at 11:26 PM; placement time is not independently established. This is a retrospective comparison, not a verified blind pre-game entry.",
      tickets: [
        { line: "Under 44.5", odds: -110, stake: 7, returned: 13.36, outcome: "WIN", note: "23 total points." },
        { line: "Seattle moneyline", odds: -175, stake: 5, returned: 7.86, outcome: "WIN", note: "Seattle won 13-10." },
        { line: "Under 44.5 + Seattle -3", odds: 239, stake: 10.87, returned: 20.75, outcome: "WIN", note: "Under won; Seattle -3 was voided. Displayed +239 is the original parlay price, not the settled payout rate. Use the ticket's actual return." }
      ]
    },
    locked_at: "2026-09-09",
    result: {
      status: "final",
      verified_at: "2026-09-10",
      awayScore: 10,
      homeScore: 13,
      kuppReceptions: 2,
      kuppReceivingYards: 35,
      kuppTargets: 3,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872656",
      apiSource: "https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=401872656",
      grades: {
        Claude: [
          { outcome: "WIN", actual: "23 total points", odds: null, profit: null },
          { outcome: "WIN", actual: "New England lost by 3; +3.5 covers", odds: null, profit: null },
          { outcome: "WIN", actual: "2 receptions", odds: null, profit: null }
        ],
        Gemini: [
          { outcome: "WIN", actual: "New England lost by 3; +3.5 covers", odds: -118, profit: 10.17 }
        ],
        ChatGPT: []
      },
      reasoningStatus: "Review notes published; numerical reasoning scores not assigned",
      modelReviews: {
        Claude: {
          summary: "3 wins, but outcome and explanation are different grades.",
          pricing: "Incomplete: all three original payout prices are missing. Outcomes stand; profit and ROI cannot be calculated.",
          reasoning: [
            "The total finished at 23, below 44.5. That supports the direction, not proof of the proposed RB/red-zone explanation. Darnold's unpredicted injury is a confounder.",
            "New England lost by 3, so the +3.5 hook mattered. The first-start Darnold premise was factually wrong and must not receive reasoning credit.",
            "Kupp caught 2 passes, below 4.5. Low volume matches the selection, but the claimed target hierarchy is not established by the final reception count."
          ]
        },
        Gemini: {
          summary: "1 win at a recorded price; the causal explanation remains unproven.",
          pricing: "-118 was recorded. The $12 stake yields $10.17 hypothetical profit and $22.17 returned.",
          reasoning: ["New England's 3-point loss covers +3.5. The hook was decisive; the final margin does not establish that Seattle safety depth caused the cover. The saved response also has a flagged repo-source fabrication issue."]
        },
        ChatGPT: {
          summary: "No bet. Excluded from win rate, with the full $20 retained.",
          pricing: "No funded ticket needs settlement. The response compared quoted moneyline break-even thresholds and declined unsupported value.",
          reasoning: ["Restraint preserved capital. Winning picks from other entrants do not prove the no-bet decision was wrong; one realized result cannot establish whether an offered price had positive expected value."]
        }
      },
      reasoningNotes: "All four picks hit, but outcome alone does not validate the explanations. Darnold left with a hip injury, an in-game event absent from the pre-game theses. Claude's claim that this was Darnold's first Seattle start is incorrect. Gemini's secondary-depth explanation is not established by the final margin. ChatGPT's reserve is neither a winning nor losing bet.",
      payoutNote: "Claude did not record individual bet prices, so its profit and combined ROI remain unavailable. Gemini's $12 at -118 produces $10.17 hypothetical profit, $22.17 returned, and $30.17 including its $8 reserve."
    },
    prompt_template: "github-strength-gemini v1.0",
    models: {
      ChatGPT: {
        version: "Codex CLI",
        total_stake: 0,
        reserve: 20,
        summary: "Full $20 reserved. Explicit break-even math: SEA -178 needs 64.03%, NE +150 needs 40%. Neither threshold substantiated by the researched factors, so no bet. Ran via Codex CLI with local FS access, flagged the same Seahawks QB1 roster mispick Claude did.",
        bets: []
      },
      Claude: {
        version: "Claude Code",
        total_stake: 11,
        reserve: 9,
        summary: "Game-script UNDER with a key-number spread hook and one small target-share prop. Reflected on own 2025 correction history: five $11 skill-position OVER props flipped WIN to LOSS after box-score check, so no OVER props this week. Flagged the Seahawks roster QB1 mispick (Lock vs Darnold).",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 44.5", stake: 6, confidence: 6, reason: "Both teams without their expected RB1, Week 1 red-zone stalls, weather-neutral" },
          { type: "straight", market: "Spread", line: "NE +3.5", stake: 4, confidence: 6, reason: "Key hook past 3 with the more proven QB on the road versus first-start Darnold" },
          { type: "straight", market: "Prop", line: "Cooper Kupp UNDER 4.5 receptions", stake: 1, confidence: 5, reason: "Third read behind JSN and Shaheed per Field Gulls / 4for4, median outcome is 4 catches" }
        ]
      },
      Gemini: {
        version: "Gemini web",
        total_stake: 12,
        reserve: 8,
        summary: "Key hook on NE +3.5. Thesis: Seattle safety depth compromised (Okada out, Emmanwori questionable) gives Maye room to keep it within a field goal. Note: rerun still fabricated the sources_fetched_from_repo block, all URLs verified to return 200, see prompt-corrections.md.",
        bets: [
          { type: "straight", market: "Spread", line: "NE +3.5 (-118)", stake: 12, confidence: 8, reason: "Seattle safety depth attrition vs Maye's downfield ability keeps NE inside the key hook" }
        ]
      }
    }
  },
  {
    week: 1,
    gameId: "niners-rams",
    label: "49ers vs Rams (Melbourne)",
    away: "San Francisco 49ers",
    home: "Los Angeles Rams",
    kickoff: "2026-09-10T20:35:00-04:00",
    kickoffDisplay: "Thu Sep 10, 8:35 PM ET",
    venue: "Melbourne Cricket Ground, Melbourne, Australia",
    neutralSite: "Melbourne, Australia (NFL Melbourne Game, international neutral site)",
    network: "Netflix",
    line_snapshot: {
      spread: "LAR -3.5 (-112)",
      total: 48.5,
      moneyline: "SF +170 / LAR -205",
      source: "DraftKings via ESPN preview, captured 2026-09-10"
    },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872657",
    responseFolder: "Docs/Responses/2026/week-01/game-02-niners-rams/",
    status: "locked",
    locked_at: "2026-09-10",
    prompt_template: "forced-selection v2.1",
    result: {
      status: "final",
      verified_at: "2026-09-11",
      awayScore: 27,
      homeScore: 7,
      ot: false,
      total: 34,
      kyrenWilliams: { rushAttempts: 11, rushYards: 41, touchdowns: 1 },
      blakeCorum: { rushAttempts: 10, rushYards: 54 },
      brockPurdy: { comp: 25, att: 34, yds: 205, td: 3, int: 1 },
      matthewStafford: { comp: 15, att: 25, yds: 155, td: 0, int: 1 },
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872657",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "Rams team total 7, well below 23.5", odds: -110, profit: -15.00 },
          { outcome: "LOSS", actual: "Rams lost 7-27; SGP requires Rams ML win and TT OVER 23.5, both legs failed", odds: 200, profit: -5.00 }
        ],
        Claude: [
          { outcome: "WIN", actual: "Game total 34, below 45.5", odds: -110, profit: 10.91 },
          { outcome: "LOSS", actual: "Kyren Williams 11 attempts, below 16.5", odds: -115, profit: -4.00 },
          { outcome: "LOSS", actual: "SGP fails on Kyren leg (11 rush att, needed 17+); UNDER 45.5 leg was a WIN", odds: 180, profit: -4.00 }
        ],
        Gemini: [
          { outcome: "WIN", actual: "Game total 34, below 48.5", odds: -110, profit: 10.91 },
          { outcome: "LOSS", actual: "SGP fails on both legs: Rams TT 7 (needed 24+) and Kyren 11 rush att (needed 15+)", odds: 220, profit: -8.00 }
        ]
      },
      netProfitByModel: { ChatGPT: -20.00, Claude: 2.91, Gemini: 2.91 },
      reasoningStatus: "Review notes published; numerical reasoning scores not assigned",
      modelReviews: {
        ChatGPT: {
          summary: "Full $20 lost. Rams-win + Rams-scoring thesis was completely wrong; both tickets shared the Rams-side leg.",
          pricing: "Both tickets stayed conditional per v2.1 honesty. Fair-value math was disciplined; the input probability was where the miss lived. Rams win probability estimated at 0.60; actual outcome was a 20-point Rams loss with a 7-point team total.",
          reasoning: [
            "Team-total shape borrowed from W11P11 was applied to the wrong side of the matchup. LAR reached 7 points, not 24. The shape works when the favored offense is actually favored by real talent gap, not just by number, and when the underdog defense is genuinely below average. SF's front held despite Collins being out; Rams offense could not answer.",
            "Correlation SGP was correct that Rams win and Rams TT OVER 23.5 are dependent, but concentrating $20 on one shared premise removed diversification. ChatGPT flagged that concentration risk explicitly in value_reasoning and still took it. Grade the honesty (transparent), not the outcome (wrong)."
          ]
        },
        Claude: {
          summary: "Net +$2.91. UNDER 45.5 cashed cleanly. Volume-anchored Kyren prop and correlated SGP both lost when the Rams got blown out and abandoned the run.",
          pricing: "All three tickets conditional; no Bovada quotes retrieved. UNDER 45.5 was significantly stronger than the fair line (game finished 34).",
          reasoning: [
            "UNDER 45.5 was the right shape read. Both offenses failed to sustain drives in an early Melbourne pace-and-travel environment. Reasoning correctly named the constraints (thin SF WR room, aging Stafford, MCG grass overlay) even though the final was one-sided rather than the low-scoring grinder Claude projected.",
            "Kyren OVER 16.5 rush attempts is the classic Season 1 failure pattern rebranded: a volume-anchored prop on the losing team. Once Rams trailed, they went pass-first and Kyren finished with 11 carries. Claude's shape was correct in theory (bell-cow, paceless script) but wrong in application because game script broke his direction.",
            "Correlated SGP was internally consistent (paceless UNDER script raises Kyren volume) but shared exposure with the Kyren single, so a single miss killed two tickets. The correlation is real; the ticket construction stacked risk instead of hedging it."
          ]
        },
        Gemini: {
          summary: "Net +$2.91. UNDER 48.5 cashed at the higher hook. SGP failed on both legs (LAR TT 7, Kyren 11 rush att).",
          pricing: "T1 was labeled bovada_verified at -110 without a screenshot; treated as unverified. T2 was conditional at +200 minimum. UNDER cashed on the game total regardless of odds source.",
          reasoning: [
            "UNDER 48.5 direction was right. Reasoning cited travel friction and pace reduction; final total 34 confirms the direction even though the specific injury and international-site chain of causation was not the primary driver (SF just outplayed LAR).",
            "SGP was directionally wrong on both legs. The Rams TT OVER 23.5 leg contradicts the UNDER 48.5 direction Gemini also took: the two picks together only both win in a narrow ~44-48 total with Rams 24+, which is a 20-30% band. Constructing tickets that both win in a narrow band is not a bug; concentrating $20 on a narrow band while claiming a $12 UNDER wins independently is inconsistent.",
            "Third fabricated repo-fetch in three attempts. bovada_verified label unsupported. These are systematic honesty problems distinct from the pick outcome and are graded separately."
          ]
        }
      },
      reasoningNotes: "All three models projected the Rams to win. Only Claude picked the right winner (SF); ChatGPT and Gemini both had LAR. The game-script UNDER read was right (Claude 45.5 UNDER + Gemini 48.5 UNDER both cashed). The volume-on-losing-team prop shape failed for both Claude and Gemini (Kyren went pass-abandoned once Rams fell behind). ChatGPT's Rams-scoring thesis was the wrong side of the matchup and cost the full $20.",
      payoutNote: "Claude and Gemini both net +$2.91 at conditional -110 pricing on the UNDER. ChatGPT nets -$20.00. All amounts remain hypothetical at target prices; no live Bovada slips were placed or observed."
    },
    models: {
      ChatGPT: {
        version: "Codex CLI",
        total_stake: 20,
        reserve: 0,
        summary: "Forced-selection v2.1. Applied W11P11 team-total shape (Rams TT OVER 23.5) plus a correlated Rams ML + Rams TT OVER 23.5 SGP. Rams 27-23 projection, ~60% Rams win probability. Corrected kickoff (8:35 not 8:15) and flagged 49ers roster (Purdy > Mac Jones). Both tickets conditional; Bovada shell only, FanDuel LAR -196 exceeded fair-value price. Also caught W9 P3 finished 1-2 -$12 overall despite its OVER winning.",
        bets: [
          { type: "straight", market: "Team Total", line: "LAR Team Total OVER 23.5 (min -110 conditional)", stake: 15, confidence: 6, reason: "Stafford / Nacua / Adams / Kyren against SF DL missing Collins produces 24+ Rams points" },
          { type: "sgp", market: "SGP", line: "LAR ML + LAR Team Total OVER 23.5 (min +200 conditional)", stake: 5, confidence: 4, reason: "Positively dependent: 24+ Rams points conditional on Rams win ~70%, correlation-adjusted joint P 0.42" }
        ]
      },
      Claude: {
        version: "Claude Code",
        total_stake: 20,
        reserve: 0,
        summary: "Forced-selection v2.1. Applied W11P7 shape: game UNDER + volume-anchored RB rush attempts OVER. Avoided single-player OVER pass/rec/sack (6 of 11 Season 1 corrections). Flagged Rams roster: QB1 Stafford (not IR'd Caldwell), RB1 Kyren Williams, WR1 Puka Nacua. All tickets conditional, no Bovada quotes retrieved in-session.",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 45.5 (min -110 conditional)", stake: 12, confidence: 6, reason: "SF WR corps thin (Pearsall + Kirk IR), 15h travel to Melbourne, MCG grass overlay, aging Stafford: true total ~42-44" },
          { type: "straight", market: "Prop", line: "Kyren Williams OVER 16.5 rush attempts (min -115 conditional)", stake: 4, confidence: 6, reason: "2025 bell-cow, 17-20 att/gm floor, paceless game script inflates volume" },
          { type: "sgp", market: "SGP", line: "UNDER 45.5 + Kyren Williams OVER 16.5 rush att (min +180 conditional)", stake: 4, confidence: 4, reason: "Positively correlated: paceless UNDER script raises Kyren carry share; correlation-adjusted parlay, not independent-multiplied" }
        ]
      },
      Gemini: {
        version: "Gemini web",
        total_stake: 20,
        reserve: 0,
        summary: "Forced-selection v2.1. Game UNDER 48.5 single + correlated SGP on Rams TT OVER 23.5 + Kyren OVER 14.5 rush att. Rams 23-20 projection. Repeat fabricated-fetch: claimed all six raw.githubusercontent.com URLs 404'd, all six actually return 200. Quoted W11 P7 line was taken from the prompt body, not a real fetch. T1 label bovada_verified is not backed by a screenshot; grading treats it as unverified. Kickoff also reported as 8:15 (actual 8:35). See prompt-corrections.md.",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 48.5 (claimed bovada_verified -110, unverified)", stake: 12, confidence: 6, reason: "International travel friction plus early-season pace reduction; matches 23-20 projection" },
          { type: "sgp", market: "SGP", line: "LAR TT OVER 23.5 + Kyren Williams OVER 14.5 rush att (min +200 conditional)", stake: 8, confidence: 4, reason: "Positively correlated: Rams lead-state keeps Kyren volume, Donald absence supports Rams scoring path" }
        ]
      }
    }
  },
  {
    week: 2,
    gameId: "lions-bills",
    label: "Lions at Bills",
    away: "Detroit Lions",
    home: "Buffalo Bills",
    kickoff: "2026-09-17T20:15:00-04:00",
    kickoffDisplay: "Thu Sep 17, 8:15 PM ET",
    venue: "Highmark Stadium, Orchard Park, NY",
    network: "Prime Video",
    line_snapshot: {
      spread: "BUF -5.5 (FanDuel) / BUF -4.5 (Fanatics)",
      total: 54.5,
      moneyline: "BUF favored; exact Bovada price not verified",
      source: "Codex used FanDuel at 2026-09-17 12:22 PM ET; Gemini used Fanatics/SportsGeek at 2026-09-17 12:24 PM ET"
    },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872932",
    responseFolder: "Docs/Responses/2026/week-02/game-01-lions-bills/",
    status: "locked",
    locked_at: "2026-09-17",
    prompt_template: "forced-selection v3.1",
    models: {
      ChatGPT: {
        version: "Codex CLI / GPT-5.6",
        total_stake: 20,
        reserve: 0,
        summary: "Projected Buffalo 31-27. Kept exact game spreads and a small correlated SGP; rejected unpriced player ceiling props. Bovada did not expose an event-specific quote, so tickets are reference-market or conditional.",
        bets: [
          {
            type: "straight",
            market: "Spread",
            line: "Buffalo Bills -5.5 (@ -105 FanDuel reference)",
            stake: 14,
            confidence: 6,
            pricing_status: "reference_market",
            odds: -105,
            potential_net_profit: 13.33,
            potential_total_return: 27.33,
            break_even_probability: 0.5122,
            estimated_win_probability: 0.56,
            reason: "Buffalo at home with Josh Allen; Detroit on a short week missing two offensive linemen and carrying secondary injuries."
          },
          {
            type: "sgp",
            market: "SGP",
            line: "Bills ML + OVER 54.5 (minimum +220 conditional)",
            stake: 6,
            confidence: 3,
            pricing_status: "conditional",
            minimum_acceptable_odds: 220,
            potential_net_profit: 13.20,
            potential_total_return: 19.20,
            break_even_probability: 0.3125,
            estimated_win_probability: 0.33,
            legs: [
              { market: "Moneyline", line: "Buffalo Bills moneyline" },
              { market: "Total", line: "OVER 54.5 total points" }
            ],
            reason: "Both teams scored 30+ in Week 1; a Buffalo win script can still require 55+ total points."
          }
        ]
      },
      Gemini: {
        version: "Gemini web / 2.5 Flash",
        total_stake: 20,
        reserve: 0,
        summary: "Projected Buffalo 31-24. Used a Buffalo spread single plus a volume-anchored player-prop parlay. Bovada was reported inaccessible; tickets are reference-market only.",
        bets: [
          {
            type: "straight",
            market: "Spread",
            line: "Buffalo Bills -4.5 (@ -110 Fanatics reference)",
            stake: 12,
            confidence: 7,
            pricing_status: "reference_market",
            odds: -110,
            potential_net_profit: 10.91,
            potential_total_return: 22.91,
            break_even_probability: 0.5238,
            estimated_win_probability: 0.565,
            reason: "Detroit's offensive line absences plus Buffalo's home-field and Josh Allen passing matchup."
          },
          {
            type: "parlay",
            market: "Parlay",
            line: "Gibbs rush yards OVER + Josh Allen pass yards OVER (@ +264 Fanatics reference)",
            stake: 8,
            confidence: 4,
            pricing_status: "reference_market",
            odds: 264,
            potential_net_profit: 21.12,
            potential_total_return: 29.12,
            break_even_probability: 0.2747,
            estimated_win_probability: 0.31,
            legs: [
              { market: "Prop", line: "Jahmyr Gibbs OVER 68.5 rushing yards" },
              { market: "Prop", line: "Josh Allen OVER 244.5 passing yards" }
            ],
            reason: "Fast-paced game script keeps Gibbs involved while Buffalo attacks through the air."
          }
        ]
      },
      Claude: {
        version: "Claude Code",
        total_stake: 20,
        reserve: 0,
        summary: "Projected BUF 30-24, total 54. Closed the Week 1 zero-player-prop gap with a volume-on-winner Cook leg. Bills-side exposure isolated to the SGP to avoid the W1 G2 same-team single+SGP concentration failure.",
        bets: [
          {
            type: "straight",
            market: "Total",
            line: "Game total OVER 51.5 (min -110 conditional)",
            stake: 10,
            confidence: 6,
            pricing_status: "conditional",
            minimum_acceptable_odds: -110,
            potential_net_profit: 9.09,
            potential_total_return: 19.09,
            break_even_probability: 0.5238,
            estimated_win_probability: 0.57,
            reason: "DET missing both starting safeties (Branch + Joseph OUT). Both teams cleared 30 in W1. Allen vs a compromised secondary is the exact TT-OVER environment DET beat NO in W1."
          },
          {
            type: "straight",
            market: "Player Rush Att",
            line: "James Cook OVER 15.5 rush attempts (min -115 conditional)",
            stake: 4,
            confidence: 6,
            pricing_status: "conditional",
            minimum_acceptable_odds: -115,
            potential_net_profit: 3.48,
            potential_total_return: 7.48,
            break_even_probability: 0.5349,
            estimated_win_probability: 0.58,
            reason: "Volume-on-projected-winner shape (mirrors W1 Jeanty O15.5 → 23 att and Hall O15.5 → 22 att). Home-favorite lead + clock-eating run-out drives."
          },
          {
            type: "sgp",
            market: "SGP",
            line: "Bills ML + Bills TT OVER 27.5 (min +140 conditional)",
            stake: 6,
            confidence: 4,
            pricing_status: "conditional",
            minimum_acceptable_odds: 140,
            potential_net_profit: 8.40,
            potential_total_return: 14.40,
            break_even_probability: 0.4167,
            estimated_win_probability: 0.42,
            legs: [
              { market: "Moneyline", line: "Buffalo Bills moneyline", estimated_leg_probability: 0.62 },
              { market: "Team Total", line: "Buffalo Bills OVER 27.5", estimated_leg_probability: 0.55 }
            ],
            reason: "Positively correlated home-fav ML + same-team TT OVER; mirrors S2 W1 MNF Chiefs ML + total SGP shape, direction flipped to OVER given DET's compromised secondary."
          }
        ]
      }
    },
    result: {
      status: "final", verified_at: "2026-09-18", awayScore: 31, homeScore: 41,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872932",
      note: "Bills 41, Lions 31. BUF won by 10, total 72. Cook 21 rush att / 135 yds / 1 TD. Allen 248 pass yds. Gibbs 52 rush yds.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "BUF won by 10, covered -5.5", odds: -105, profit: 13.33 },
          { outcome: "WIN", actual: "Bills ML + 72 total OVER 54.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "WIN", actual: "72 total OVER 51.5 by 20.5", odds: -110, profit: 9.09 },
          { outcome: "WIN", actual: "Cook 21 rush att OVER 15.5", odds: -115, profit: 3.48 },
          { outcome: "WIN", actual: "Bills ML + Bills TT 41 OVER 27.5", odds: 140, profit: 8.40 }
        ],
        Gemini: [
          { outcome: "WIN", actual: "BUF won by 10, covered -4.5", odds: -110, profit: 10.91 },
          { outcome: "LOSS", actual: "Parlay Gibbs 52 rush yds < 68.5 (Allen 248 pass yds OVER 244.5 hit but leg 1 failed)", odds: 264, profit: -8.00 }
        ]
      }
    }
  },
  {
    week: 2, gameId: "dolphins-niners", label: "Dolphins at 49ers",
    away: "Miami Dolphins", home: "San Francisco 49ers",
    kickoff: "2026-09-20T16:25:00-04:00", kickoffDisplay: "Sun Sep 20, 4:25 PM ET",
    venue: "Levi's Stadium, Santa Clara, CA", network: "FOX",
    line_snapshot: { spread: "SF -13.5", total: 44.5, moneyline: "SF -950 / MIA +625", source: "FanDuel/DraftKings via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872942",
    responseFolder: "Docs/Responses/2026/week-02/game-14-dolphins-niners/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "MIA +13.5 $14 conditional min -110 + SGP MIA +17.5 AND UNDER 51.5 $6 conditional min +200. Refused the big-favorite side despite -13.5 SF line.", bets: [{type:"straight", market:"Spread", line:"Miami Dolphins +13.5 (conditional min -110)", stake:14, confidence:5, reason:"Big-favorite trap; MIA California prep; +13.5 cushion"}, {type:"sgp", market:"SGP", line:"Miami Dolphins +17.5 AND game UNDER 51.5 (conditional min +200)", stake:6, confidence:3, reason:"Extra MIA cushion + reasonable UNDER threshold"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Christian McCaffrey OVER 17.5 rush attempts $8 conditional min -125 + SGP SF ML AND UNDER 43.5 $12 conditional min +150. Volume-on-projected-winner (CMC) + correlated SF-wins-controlled SGP.", bets: [{type:"straight", market:"Player Rush Att", line:"Christian McCaffrey OVER 17.5 rush attempts (conditional min -125)", stake:8, confidence:6, reason:"SF bell-cow at home; SF leads and leans on CMC through Q4"}, {type:"sgp", market:"SGP", line:"San Francisco 49ers ML AND game UNDER 43.5 (conditional min +150)", stake:12, confidence:5, reason:"Correlated SF wins + defensive script"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "SF -13.5 $12 reference_market FanDuel -105 + SGP McCaffrey Anytime TD (-250) + Achane O3.5 recs (-157) $8 reference_market DK/FanDuel +165. Big-favorite spread family flagged as historically unreliable (W1 LAC -9.5 outright loss). Ceiling Anytime TD + losing-side reception prop. Escalating record fabrication now claims graded G11-G13 results. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"San Francisco 49ers -13.5 (reference_market FanDuel -105)", stake:12, confidence:6, reason:"SF at home vs MIA missing Chop Robinson + Ronnie Harrison Jr."}, {type:"parlay", market:"SGP", line:"McCaffrey Anytime TD (-250) + Achane O3.5 recs (-157) (reference DK/FanDuel +165)", stake:8, confidence:4, reason:"SF red-zone volume + Achane checkdown floor in trailing script"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-21", awayScore: 13, homeScore: 35,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872942",
      note: "49ers 35, Dolphins 13. SF covered -13.5 by 8.5. McCaffrey 10 rush att for 23 yds, 2 rush TDs. Achane 3 recs on 6 targets. Total 48.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "MIA lost by 22; +13.5 lost by 8.5", odds: -110, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP: MIA +17.5 leg failed (lost by 22); UNDER 51.5 hit (48 total)", odds: 200, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "CMC 10 rush att (UNDER 17.5) — SF pulled starters after 35-13 was in hand", odds: -125, profit: -8.00 },
          { outcome: "LOSS", actual: "SGP: SF ML hit but UNDER 43.5 failed (48 total)", odds: 150, profit: -12.00 }
        ],
        Gemini: [
          {"outcome":"WIN","actual":"SF won by 22, covered -13.5","odds":-105,"profit":11.43},
          {"outcome":"LOSS","actual":"SGP: McCaffrey 2 rush TDs hit but Achane 3 recs < 3.5 line","odds":165,"profit":-8}
        ]
      }
    }
  },
    {
    week: 2, gameId: "giants-rams", label: "Giants at Rams (MNF)",
    away: "New York Giants", home: "Los Angeles Rams",
    kickoff: "2026-09-21T20:15:00-04:00", kickoffDisplay: "Mon Sep 21, 8:15 PM ET",
    venue: "SoFi Stadium, Inglewood, CA", network: "ABC/ESPN",
    line_snapshot: { spread: "LAR -6.5", total: 47.5, moneyline: "LAR -305 / NYG +245", source: "DraftKings/Action Network via ESPN game center 2026-09-21 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872947",
    responseFolder: "Docs/Responses/2026/week-02/game-16-giants-rams/",
    status: "locked", locked_at: "2026-09-21", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "NYG +7.5 $14 conditional min -110 + SGP Giants +10.5 AND UNDER 54.5 $6 conditional min +200. Projected LAR 24, NYG 20. Flagged NYG offense.qb1 'Jake Haener' as a jersey-heuristic error (actual starter Jaxson Dart per official depth chart). Sourced FanDuel Research (Rams -7.5 -102) and DraftKings splits (Rams -7 -118, total 48.5), both dated context rather than live quotes.", bets: [{type:"straight", market:"Spread", line:"New York Giants +7.5 (conditional min -110)", stake:14, confidence:6, reason:"Dart is verified starter; NYG won W1 28-20; a home LAR after Melbourne trip is a spot for a controlled game inside a TD"}, {type:"sgp", market:"SGP", line:"New York Giants +10.5 AND game UNDER 54.5 (conditional min +200)", stake:6, confidence:3, reason:"Extra cushion on NYG + high UNDER threshold; Puka Q, Whittington doubtful, LAR 7 pts in W1"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Kyren Williams OVER 17.5 rush attempts $8 conditional min -125 + SGP LAR ML AND game UNDER 43.5 $12 conditional min +160. Projected LAR 24, NYG 17. T1 explicitly SIDE-FLIPS the same player (Kyren) from Claude's own W1 G2 losing-shape citation (Kyren OVER 16.5 as volume-on-LOSER, 11 actual, -$8) to the projected-winner side. Flagged NYG offense.qb1 'Jake Haener' as stale (actual W1 starter mix Dart/Winston/Haener ambiguous, no manual override in JSON) and NYG secondary decimated (5 CBs affected on IR/Q). T2 reprises the +$14.40 W1 KC/BAL home-fav ML + correlated UNDER shape.", bets: [{type:"straight", market:"Player Rush Att", line:"Kyren Williams OVER 17.5 rush attempts (conditional min -125)", stake:8, confidence:6, reason:"LAR bell-cow at home in a projected UNDER script; SIDE-FLIP from Claude's own W1 losing citation"}, {type:"sgp", market:"SGP", line:"Los Angeles Rams ML AND game UNDER 43.5 (conditional min +160)", stake:12, confidence:4, reason:"Correlated home-favorite ML + UNDER on a defensive-leaning path — same shape as +$14.40 W1 MNF Chiefs ticket"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "NYG +6.5 $12 reference_market DK -102 + SGP Dart O213.5 pass yds (-111) + Nabers O62.5 rec yds (-113) $8 reference_market DK/Action +195. Correlated QB pass yds + WR1 rec yds SGP. Rams depleted (Nacua doubtful, Garrett IR). Grading concerns inline (Garrett-on-Rams claim, retro record fabrication persists).", bets: [{type:"straight", market:"Spread", line:"New York Giants +6.5 (reference_market DK -102)", stake:12, confidence:6, reason:"Rams missing Nacua (WR1) and Garrett (edge); Giants dome environment with Dart"}, {type:"parlay", market:"SGP", line:"Dart O213.5 pass yds (-111) + Nabers O62.5 rec yds (-113) (reference DK +195)", stake:8, confidence:4, reason:"Correlated pass volume + WR1 target funnel in projected close game"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-22", awayScore: 6, homeScore: 28,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872947",
      note: "Rams 28, Giants 6. LAR covered -6.5, -7, -7.5 easily (won by 22). Total 34. Dart line 3/5 for 20 pass yds. Nabers 1 rec for 1 yd on 4 targets. Kyren Williams 12 att for 85 yds (7.1 YPC). LAR ML + UNDER 43.5 SGP shape cashed cleanly; every NYG-side line failed.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "LAR won by 22; NYG +7.5 lost by 14.5", odds: -110, profit: -14.00 },
          { outcome: "LOSS", actual: "NYG +10.5 leg failed (lost by 22); UNDER 54.5 hit (34 total). SGP requires both.", odds: 200, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "Kyren Williams 12 rush att (UNDER 17.5)", odds: -125, profit: -8.00 },
          { outcome: "WIN", actual: "LAR ML hit (28-6) AND UNDER 43.5 hit (34 total)", odds: 160, profit: 19.20 }
        ],
        Gemini: [
          { outcome: "LOSS", actual: "LAR won by 22; NYG +6.5 lost by 15.5", odds: -102, profit: -12.00 },
          { outcome: "LOSS", actual: "Dart 20 pass yds (well UNDER 213.5), Nabers 1 rec yd (well UNDER 62.5); SGP crushed", odds: 195, profit: -8.00 }
        ]
      }
    }
  },
  {
    week: 2, gameId: "colts-chiefs", label: "Colts at Chiefs (SNF)",
    away: "Indianapolis Colts", home: "Kansas City Chiefs",
    kickoff: "2026-09-20T20:20:00-04:00", kickoffDisplay: "Sun Sep 20, 8:20 PM ET",
    venue: "GEHA Field at Arrowhead Stadium, Kansas City, MO", network: "NBC",
    line_snapshot: { spread: "KC -6.5", total: 46.5, moneyline: "KC -265 / IND +215", source: "FanDuel/DraftKings via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872945",
    responseFolder: "Docs/Responses/2026/week-02/game-15-colts-chiefs/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "IND +6.5 $14 conditional min -110 + SGP IND +10.5 AND UNDER 54.5 $6 conditional min +200. Short-favorite trap-side (KC -6.5); took the extra cushion.", bets: [{type:"straight", market:"Spread", line:"Indianapolis Colts +6.5 (conditional min -110)", stake:14, confidence:5, reason:"IND scored 23 W1; +6.5 protects vs narrow KC win"}, {type:"sgp", market:"SGP", line:"Indianapolis Colts +10.5 AND game UNDER 54.5 (conditional min +200)", stake:6, confidence:3, reason:"Extra IND cushion + high UNDER"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Kenneth Walker III OVER 14.5 rush attempts $8 conditional min -115 + SGP KC ML AND UNDER 47.5 $12 conditional min +140. Volume-on-projected-winner (Walker on KC) + correlated KC-defensive-hold SGP.", bets: [{type:"straight", market:"Player Rush Att", line:"Kenneth Walker III OVER 14.5 rush attempts (conditional min -115)", stake:8, confidence:6, reason:"KC projected winner leans on Walker in 2H; IND run D exposed by BAL W1"}, {type:"sgp", market:"SGP", line:"Kansas City Chiefs ML AND game UNDER 47.5 (conditional min +140)", stake:12, confidence:4, reason:"Correlated KC wins + defensive script"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "KC -6.5 $12 reference_market FanDuel -115 + SGP Kelce O4.5 recs (-135) + Jonathan Taylor O62.5 rush yds (-115) $8 reference_market DK/FanDuel +215. No fabricated /research/ 404 this response. Own-record fabrication continues (retro-graded W2 G11-G14 before those had finished).", bets: [{type:"straight", market:"Spread", line:"Kansas City Chiefs -6.5 (reference_market FanDuel -115)", stake:12, confidence:6, reason:"KC home in prime time; IND allowed 41 to BAL W1"}, {type:"parlay", market:"SGP", line:"Kelce O4.5 recs (-135) + Jonathan Taylor O62.5 rush yds (-115) (reference DK/FanDuel +215)", stake:8, confidence:4, reason:"Two-sided volume anchor: Mahomes safety valve + IND workhorse RB"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-21", awayScore: 30, homeScore: 33,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872945",
      note: "Chiefs 33, Colts 30 OT. KC won by 3, needed 7 for spread. Kelce 9 recs 101 yds 1 TD. Taylor 24 att 92 yds 2 TDs. Total 63.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "KC won by only 3; IND +6.5 wins", odds: -110, profit: 12.73 },
          { outcome: "LOSS", actual: "SGP: IND +10.5 leg WIN, but UNDER 54.5 failed (63 total in OT)", odds: 200, profit: -6.00 }
        ],
        Claude: [
          { outcome: "WIN", actual: "Kenneth Walker III 24 rush att for 117 yds (OVER 14.5) — Walker was on KC roster for this game per ESPN box score", odds: -115, profit: 6.96 },
          { outcome: "LOSS", actual: "SGP: KC ML hit but UNDER 47.5 failed (63 total in OT)", odds: 140, profit: -12.00 }
        ],
        Gemini: [
          { outcome: "LOSS", actual: "KC won by only 3, -6.5 lost", odds: -115, profit: -12.00 },
          { outcome: "WIN", actual: "Kelce 9 recs OVER 4.5 + Taylor 92 rush yds OVER 62.5", odds: 215, profit: 17.20 }
        ]
      }
    }
  },
{
    week: 2, gameId: "seahawks-cardinals", label: "Seahawks at Cardinals",
    away: "Seattle Seahawks", home: "Arizona Cardinals",
    kickoff: "2026-09-20T16:25:00-04:00", kickoffDisplay: "Sun Sep 20, 4:25 PM ET",
    venue: "State Farm Stadium, Glendale, AZ", network: "FOX",
    line_snapshot: { spread: "SEA -3.5", total: 41.5, moneyline: "SEA -205 / ARI +170", source: "DraftKings/Covers via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872943",
    responseFolder: "Docs/Responses/2026/week-02/game-13-seahawks-cardinals/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "ARI +4.5 $14 conditional min -110 + SGP ARI +7.5 AND UNDER 47.5 $6 conditional min +200. Darnold OUT / Drew Lock starting drives close-game read.", bets: [{type:"straight", market:"Spread", line:"Arizona Cardinals +4.5 (conditional min -110)", stake:14, confidence:5, reason:"Darnold OUT for SEA; Drew Lock starting reduces margin"}, {type:"sgp", market:"SGP", line:"Arizona Cardinals +7.5 AND game UNDER 47.5 (conditional min +200)", stake:6, confidence:3, reason:"Extra ARI cushion + backup-QB UNDER"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Marvin Harrison Jr. OVER 5.5 receptions $8 conditional min -125 + SGP ARI ML AND UNDER 42.5 $12 conditional min +160. Target-alpha volume + correlated ARI-wins-slow SGP.", bets: [{type:"straight", market:"Player Receptions", line:"Marvin Harrison Jr. OVER 5.5 receptions (conditional min -125)", stake:8, confidence:6, reason:"ARI target-share alpha in Brissett offense; SEA CB Arnold OUT"}, {type:"sgp", market:"SGP", line:"Arizona Cardinals ML AND game UNDER 42.5 (conditional min +160)", stake:12, confidence:4, reason:"Correlated ARI home upset + defensive-slow path"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "UNDER 41.5 $12 reference_market DK -110 + SGP SEA ML (-198) + UNDER 45.5 alt (-180) $8 reference_market DK +130. Total-heavy shape shift (first game-total straight of Gemini's Week 2 slate) driven by Darnold OUT / Drew Lock starting for SEA. Same-direction total exposure across both tickets. Own-record fabrication returned (claimed W2 G11 result before Game 11 finished). Grading concerns inline.", bets: [{type:"straight", market:"Total", line:"UNDER 41.5 (reference_market DK -110)", stake:12, confidence:6, reason:"Drew Lock starting for injured Darnold drives conservative script"}, {type:"parlay", market:"SGP", line:"SEA ML (-198) + UNDER 45.5 alt (-180) (reference DK +130)", stake:8, confidence:4, reason:"Correlated SEA win + game stays UNDER 45.5"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-21", awayScore: 31, homeScore: 7,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872943",
      note: "Seahawks 31, Cardinals 7. Drew Lock 235 pass yds 3 TD; JSN 155 rec yds 3 TD. Total 38 UNDER 41.5. MHJ 0 receptions on 1 target.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "ARI lost by 24; +4.5 lost badly", odds: -110, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP: ARI +7.5 leg failed (lost by 24); UNDER 47.5 hit (38 total)", odds: 200, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "Marvin Harrison Jr. 0 receptions on 1 target (UNDER 5.5)", odds: -125, profit: -8.00 },
          { outcome: "LOSS", actual: "SGP: ARI ML lost (SEA 31-7); UNDER 42.5 hit (38 total)", odds: 160, profit: -12.00 }
        ],
        Gemini: [
          {"outcome":"WIN","actual":"Total 38 UNDER 41.5","odds":-110,"profit":10.91},
          {"outcome":"WIN","actual":"SEA ML + total 38 UNDER 45.5 alt","odds":130,"profit":10.4}
        ]
      }
    }
  },
  {
    week: 2, gameId: "commanders-cowboys", label: "Commanders at Cowboys",
    away: "Washington Commanders", home: "Dallas Cowboys",
    kickoff: "2026-09-20T16:25:00-04:00", kickoffDisplay: "Sun Sep 20, 4:25 PM ET",
    venue: "AT&T Stadium, Arlington, TX", network: "FOX",
    line_snapshot: { spread: "DAL -4.5", total: 50.5, moneyline: "DAL -218 / WSH +172", source: "DraftKings/ActionNetwork via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872944",
    responseFolder: "Docs/Responses/2026/week-02/game-12-commanders-cowboys/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "WAS +4.5 $14 conditional min -110 + SGP WAS +7.5 AND OVER 42.5 $6 conditional min +200. Divisional close-game shape.", bets: [{type:"straight", market:"Spread", line:"Washington Commanders +4.5 (conditional min -110)", stake:14, confidence:5, reason:"DAL allowed 28 in W1; WAS 22 pts vs PHI"}, {type:"sgp", market:"SGP", line:"Washington Commanders +7.5 AND game OVER 42.5 (conditional min +200)", stake:6, confidence:3, reason:"Extra WAS cushion + engaged offenses"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Stefon Diggs OVER 6.5 receptions $8 conditional min -125 + SGP WAS ML AND OVER 47.5 $12 conditional min +150. Volume-anchored WR target-share leg + correlated WSH-wins-shootout SGP.", bets: [{type:"straight", market:"Player Receptions", line:"Stefon Diggs OVER 6.5 receptions (conditional min -125)", stake:8, confidence:6, reason:"WAS target-share alpha; DAL secondary gave up big passing day to NYG"}, {type:"sgp", market:"SGP", line:"Washington Commanders ML AND game OVER 47.5 (conditional min +150)", stake:12, confidence:4, reason:"Correlated WAS-wins-shootout path"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "WSH +4.5 $12 reference_market DK -120 + SGP WSH +6.5 alt (-165) + Jayden Daniels O36.5 rush yds (-114) $8 reference_market DK +210. No fabricated /research/ 404 or fabricated own-record numbers (both patterns absent for the 3rd consecutive Week 2 response). Dual-threat QB rush-yds volume is the profitable-shape variant. Same-team single+SGP concentration on WSH-stays-close outcome. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Washington Commanders +4.5 (reference_market DK -120)", stake:12, confidence:6, reason:"DAL missing Overshown/Hooker on defense; WSH dog value"}, {type:"parlay", market:"SGP", line:"WSH +6.5 alt (-165) + Daniels O36.5 rush yds (-114) (reference DK +210)", stake:8, confidence:4, reason:"Correlated WSH keeps close + Daniels rushing floor"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-21", awayScore: 20, homeScore: 37,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872944",
      note: "Cowboys 37, Commanders 20. DAL blowout; Daniels 69 rush yds. Daniels dislocated elbow late. Diggs 5 recs on 6 targets for 47 yds, 2 TDs. Total 57.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "WAS lost by 17; +4.5 lost badly", odds: -110, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP: WAS +7.5 leg failed (lost by 17); OVER 42.5 hit (57 total)", odds: 200, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "Diggs 5 receptions (UNDER 6.5) despite 2 TDs", odds: -125, profit: -8.00 },
          { outcome: "LOSS", actual: "SGP: WAS ML lost (37-20); OVER 47.5 hit (57 total)", odds: 150, profit: -12.00 }
        ],
        Gemini: [
          {"outcome":"LOSS","actual":"WSH lost by 17, +4.5 lost badly","odds":-120,"profit":-12},
          {"outcome":"LOSS","actual":"SGP: WSH +6.5 alt failed (lost by 17). Daniels 69 rush yds hit but leg failed","odds":210,"profit":-8}
        ]
      }
    }
  },
  {
    week: 2, gameId: "raiders-chargers", label: "Raiders at Chargers",
    away: "Las Vegas Raiders", home: "Los Angeles Chargers",
    kickoff: "2026-09-20T16:05:00-04:00", kickoffDisplay: "Sun Sep 20, 4:05 PM ET",
    venue: "SoFi Stadium, Inglewood, CA", network: "CBS",
    line_snapshot: { spread: "LAC -6.5", total: 43.5, moneyline: "LV +240 / LAC -298", source: "DraftKings via NBC Sports/CBS Sports 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872941",
    responseFolder: "Docs/Responses/2026/week-02/game-11-raiders-chargers/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "LV +6.5 $14 reference_market -105 + SGP LV +7.5 AND UNDER 51.5 $6 conditional min +200. Road-dog value shape.", bets: [{type:"straight", market:"Spread", line:"Las Vegas Raiders +6.5 (reference_market -105)", stake:14, confidence:6, reason:"LAC OL compromised; LV divisional dog with hook cushion"}, {type:"sgp", market:"SGP", line:"Las Vegas Raiders +7.5 AND game UNDER 51.5 (conditional min +200)", stake:6, confidence:3, reason:"Extra LV cushion + reasonable UNDER threshold"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Ashton Jeanty OVER 15.5 rush attempts $8 conditional min -115 + SGP LV +3 AND UNDER 43.5 $12 conditional min +180. Direct W1 script repeat on Jeanty (23 att W1) + correlated low-scoring competitive path.", bets: [{type:"straight", market:"Player Rush Att", line:"Ashton Jeanty OVER 15.5 rush attempts (conditional min -115)", stake:8, confidence:6, reason:"Direct W1 script repeat (23 att); LV projected to play clock through Jeanty"}, {type:"sgp", market:"SGP", line:"Las Vegas Raiders +3 AND game UNDER 43.5 (conditional min +180)", stake:12, confidence:4, reason:"Correlated LV keeps close + low-scoring path; Herbert 3 INT W1"}] },
      Gemini: { version: "Gemini web (self-reports Gemini 1.5 / 2026 Build)", total_stake: 20, reserve: 0, summary: "LV +6.5 $12 reference_market DK -110 + SGP LV +7.5 alt (-135) + Jeanty O70.5 total yds (-115) $8 reference_market DK +220. No fabricated /research/ 404 or fabricated own-record numbers this response - both fabrication patterns skipped. Model version claim inconsistent ('Gemini 1.5' vs prior '2.5 Flash'). Volume-on-projected-loser risk on Jeanty (LV is 6.5 dog). Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Las Vegas Raiders +6.5 (reference_market DK -110)", stake:12, confidence:6, reason:"LAC OL missing Pipkins; Herbert 3 INTs W1; LV divisional dog value"}, {type:"parlay", market:"SGP", line:"LV +7.5 alt (-135) + Jeanty O70.5 total yds (-115) (reference DK +220)", stake:8, confidence:4, reason:"Correlated LV keeps close + Jeanty volume in projected competitive game"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-21", awayScore: 26, homeScore: 14,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872941",
      note: "Raiders 26, Chargers 14. LV won outright as +6.5 dog. Jeanty 21 rush att for 48 yds. Total 40.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "LV won by 12, +6.5 wins easy", odds: -105, profit: 13.33 },
          { outcome: "WIN", actual: "LV +7.5 hit outright + UNDER 51.5 hit (40 total)", odds: 200, profit: 12.00 }
        ],
        Claude: [
          { outcome: "WIN", actual: "Jeanty 21 rush att (OVER 15.5)", odds: -115, profit: 6.96 },
          { outcome: "WIN", actual: "LV +3 hit outright + UNDER 43.5 hit (40 total)", odds: 180, profit: 21.60 }
        ],
        Gemini: [
          {"outcome":"WIN","actual":"LV won by 12, +6.5 wins easy","odds":-110,"profit":10.91},
          {"outcome":"LOSS","actual":"LV +7.5 hit but Jeanty 48 rush yds < 70.5 total-yds line","odds":220,"profit":-8}
        ]
      }
    }
  },
  {
    week: 2, gameId: "jaguars-broncos", label: "Jaguars at Broncos",
    away: "Jacksonville Jaguars", home: "Denver Broncos",
    kickoff: "2026-09-20T16:05:00-04:00", kickoffDisplay: "Sun Sep 20, 4:05 PM ET",
    venue: "Empower Field at Mile High, Denver, CO", network: "CBS",
    line_snapshot: { spread: "DEN -2.5", total: 45.5, moneyline: "JAX +124 / DEN -148", source: "DraftKings/Fantasy Life via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872940",
    responseFolder: "Docs/Responses/2026/week-02/game-10-jaguars-broncos/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "JAX +2.5 $14 reference_market min -105 + SGP JAX +3.5 AND UNDER 52.5 $6 conditional min +200. Projected close game with JAX getting the hook.", bets: [{type:"straight", market:"Spread", line:"Jacksonville Jaguars +2.5 (reference_market min -105)", stake:14, confidence:5, reason:"Short road-dog value; JAX rebounded W1"}, {type:"sgp", market:"SGP", line:"Jacksonville Jaguars +3.5 AND game UNDER 52.5 (conditional min +200)", stake:6, confidence:3, reason:"Extra JAX cushion + high UNDER threshold"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Brian Thomas Jr. OVER 5.5 receptions $8 conditional min -125 + SGP JAX +3 AND UNDER 42.5 $12 conditional min +180. Volume-anchored WR target-share leg plus a competitive-low-scoring SGP.", bets: [{type:"straight", market:"Player Receptions", line:"Brian Thomas Jr. OVER 5.5 receptions (conditional min -125)", stake:8, confidence:6, reason:"JAX target-share alpha; low-total game means clock-lite volume for BTJ"}, {type:"sgp", market:"SGP", line:"Jacksonville Jaguars +3 AND game UNDER 42.5 (conditional min +180)", stake:12, confidence:4, reason:"JAX defense just held CLE to 10; Nix showed nothing vs KC; low-total competitive path"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "DEN -2.5 $12 reference_market DK -118 + SGP DEN ML (-148) + Jaleel McLaughlin O42.5 rush+rec yds (-115) $8 reference_market DK +185. Target-reallocation shape (Harvey OUT promotes McLaughlin). 19th fabricated /research/ 404. Retroactive record fabrication now includes W2 G8 result (game not yet finished). Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Denver Broncos -2.5 (reference_market DK -118)", stake:12, confidence:6, reason:"DEN short home favorite at altitude coming off W1 loss"}, {type:"parlay", market:"SGP", line:"DEN ML (-148) + McLaughlin O42.5 rush+rec yds (-115) (reference DK +185)", stake:8, confidence:5, reason:"DEN winning script + McLaughlin promoted touches with Harvey OUT"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-21", awayScore: 13, homeScore: 20,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872940",
      note: "Broncos 20, Jaguars 13. DEN 14 unanswered in Q4. McLaughlin absent from box. Brian Thomas Jr. 3 recs on 9 targets, 40 yds.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "JAX lost by 7; +2.5 lost by 4.5", odds: -105, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP: JAX +3.5 leg failed (lost by 7); UNDER 52.5 hit (33 total)", odds: 200, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "Brian Thomas Jr. 3 receptions (UNDER 5.5)", odds: -125, profit: -8.00 },
          { outcome: "LOSS", actual: "SGP: JAX +3 leg failed (lost by 7); UNDER 42.5 hit (33 total)", odds: 180, profit: -12.00 }
        ],
        Gemini: [
          {"outcome":"WIN","actual":"DEN won by 7, covered -2.5","odds":-118,"profit":10.17},
          {"outcome":"LOSS","actual":"DEN ML hit but McLaughlin absent from box (0 rush+rec yds vs 42.5 line)","odds":185,"profit":-8}
        ]
      }
    }
  },
  {
    week: 2, gameId: "bengals-texans", label: "Bengals at Texans",
    away: "Cincinnati Bengals", home: "Houston Texans",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "NRG Stadium, Houston, TX", network: "CBS",
    line_snapshot: { spread: "HOU -3", total: 45.5, moneyline: "CIN +124 / HOU -148", source: "DraftKings via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872934",
    responseFolder: "Docs/Responses/2026/week-02/game-09-bengals-texans/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "EXPIRED",total_stake: 0,reserve: 20,summary: "Codex hit the 1: 00 PM ET kickoff before saving. No picks recorded.",bets: []},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Nico Collins O6.5 receptions $8 conditional -125 (ROSTER-JSON RELIANCE - Collins was OUT on official injury report but roster stale) + SGP HOU ML + game total OVER 46.5 $12 conditional +170.",bets: [{type: "straight",market: "Player Recs",line: "Nico Collins OVER 6.5 receptions (min -125 conditional) [STALE ROSTER:  Collins was OUT per official Texans injury report]",stake: 8,confidence: 6,reason: "Volume-on-winner target share - relied on study roster JSON with Dell IR / Collins promoted"},{type: "sgp",market: "SGP",line: "Houston Texans ML + game total OVER 46.5 (min +170 conditional)",stake: 12,confidence: 5,reason: "HOU home shootout script"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "CIN +2.5 $12 reference_market DK -102 + SGP Montgomery O58.5 rush yds (-115) + Schultz O4.5 recs (-110) $8 reference_market DK +240. Structural hedge (dog spread + favorite's players). CRITICAL: Gemini's Texans injury report source lists Nico Collins OUT for this game, which contradicts Claude's Collins-based bet built off the stale roster JSON. 18th fabricated /research/ 404 pattern returned. Fabricated own record continues.", bets: [{type:"straight", market:"Spread", line:"Cincinnati Bengals +2.5 (reference_market DK -102)", stake:12, confidence:6, reason:"HOU short home favorite missing Collins/Ingram/Clowney"}, {type:"parlay", market:"SGP", line:"Montgomery O58.5 rush yds (-115) + Schultz O4.5 recs (-110) (reference DK +240)", stake:8, confidence:4, reason:"Volume redistributes to Montgomery+Schultz with Collins OUT"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 20, homeScore: 6,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872934",
      note: "Bengals 20, Texans 6. CIN won by 14; total 26. Collins was OUT.",
      grades: {
        ChatGPT: [],
        Claude: [{outcome: "LOSS",actual: "Nico Collins OUT (0 recs, was on official inactive list)",odds:-125,profit:-8},{outcome: "LOSS",actual: "HOU ML lost + total 26 UNDER 46.5",odds:170,profit:-12}],
        Gemini: [{outcome: "WIN",actual: "CIN won by 14, +2.5 wins easy",odds:-102,profit:11.76},{outcome: "LOSS",actual: "Montgomery 10 rush yds < 58.5 (though Schultz 12 recs hit)",odds:240,profit:-8}]
      }
    }
  },
  {
    week: 2, gameId: "saints-ravens", label: "Saints at Ravens",
    away: "New Orleans Saints", home: "Baltimore Ravens",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "M&T Bank Stadium, Baltimore, MD", network: "CBS",
    line_snapshot: { spread: "BAL -8.5", total: 45.5, moneyline: "BAL -375 / NO +295", source: "DraftKings/SportsGambler via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872938",
    responseFolder: "Docs/Responses/2026/week-02/game-08-saints-ravens/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "EXPIRED",total_stake: 0,reserve: 20,summary: "Codex hit the 1: 00 PM ET kickoff before saving. No picks recorded.",bets: []},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Derrick Henry O17.5 rush att $8 conditional -120 + SGP BAL ML + game total OVER 49.5 $12 conditional +150.",bets: [{type: "straight",market: "Player Rush Att",line: "Derrick Henry OVER 17.5 rush attempts (min -120 conditional)",stake: 8,confidence: 6,reason: "Volume-on-winner with BAL feeding Henry in projected script"},{type: "sgp",market: "SGP",line: "Baltimore Ravens ML + game total OVER 49.5 (min +150 conditional)",stake: 12,confidence: 4,reason: "BAL home shootout script"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "NO +8.5 $12 reference_market DK -115 + SGP Derrick Henry Anytime TD (-250) + Bateman O42.5 rec yds (-114) $8 reference_market DK +145. Structural hedge design continues (dog spread + favorite's players). T2 leg 2 is target-reallocation on Zay Flowers OUT - genuine roster edge. T2 leg 1 is ceiling Anytime TD prop (family that has lost in Season 1). 17th fabricated /research/ 404 (pattern returned after 3 clean responses). ESCALATED record fabrication: claims 'W2 G7 record 1-1' before Game 7 has been played. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"New Orleans Saints +8.5 (reference_market DK -115)", stake:12, confidence:6, reason:"NO dog with high-passing offense vs BAL missing Flowers"}, {type:"parlay", market:"SGP", line:"Henry Anytime TD (-250) + Bateman O42.5 rec yds (-114) (reference DK +145)", stake:8, confidence:5, reason:"Henry 3 TDs W1 + Bateman WR1 target share with Flowers OUT"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 24, homeScore: 17,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872938",
      note: "Saints 24, Ravens 17. NO upset win; total 41.",
      grades: {
        ChatGPT: [],
        Claude: [{outcome: "LOSS",actual: "Henry 16 rush att, line 17.5",odds:-120,profit:-8},{outcome: "LOSS",actual: "BAL ML lost + total 41 UNDER 49.5",odds:150,profit:-12}],
        Gemini: [{outcome: "WIN",actual: "NO won outright, +8.5 wins easy",odds:-115,profit:10.43},{outcome: "WIN",actual: "Henry 1 rush TD + Bateman 88 rec yds OVER 42.5",odds:145,profit:11.6}]
      }
    }
  },
  {
    week: 2, gameId: "browns-buccaneers", label: "Browns at Buccaneers",
    away: "Cleveland Browns", home: "Tampa Bay Buccaneers",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "Raymond James Stadium, Tampa, FL", network: "CBS",
    line_snapshot: { spread: "TB -8.5", total: 41.5, moneyline: "TB -425 / CLE +330", source: "DraftKings/OddsChecker via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872935",
    responseFolder: "Docs/Responses/2026/week-02/game-07-browns-buccaneers/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "EXPIRED",total_stake: 0,reserve: 20,summary: "Codex hit the 1: 00 PM ET kickoff before saving. No picks recorded.",bets: []},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Chris Godwin Jr. O5.5 receptions $8 conditional -125 + SGP TB -3 + game total OVER 45.5 $12 conditional +180. Rejected Mayfield passing OVER (ceiling shape).",bets: [{type: "straight",market: "Player Recs",line: "Chris Godwin Jr. OVER 5.5 receptions (min -125 conditional)",stake: 8,confidence: 6,reason: "Volume-on-winner target share for TB WR1"},{type: "sgp",market: "SGP",line: "Tampa Bay -3 + game total OVER 45.5 (min +180 conditional)",stake: 12,confidence: 4,reason: "TB shootout script at home"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "CLE +8.5 $12 reference_market DK -115 + SGP TB ML (-425) + Mayfield UNDER 214.5 pass yds (-114) $8 reference_market DK +135. Structural hedge: T1 on the dog, T2 on the favorite ML + defensive prop; both cash together if TB wins by 5-8. Cleaner design than same-team stacking. UNDER-on-QB-passing is a new shape family for the study (not the losing OVER-ceiling family). Third response in a row without fabricated /research/ 404. Fabricated own season record continues. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Cleveland Browns +8.5 (reference_market DK -115)", stake:12, confidence:6, reason:"CLE dog in low-total game with Myles Garrett pressure to keep margin single-digit"}, {type:"parlay", market:"SGP", line:"TB ML (-425) + Mayfield UNDER 214.5 pass yds (-114) (reference DK +135)", stake:8, confidence:5, reason:"TB wins outright but ground-game script caps Mayfield yardage"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 23, homeScore: 19,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872935",
      note: "Browns 23, Buccaneers 19. CLE won outright; total 42.",
      grades: {
        ChatGPT: [],
        Claude: [{outcome: "LOSS",actual: "Godwin Jr. 3 recs, line 5.5",odds:-125,profit:-8},{outcome: "LOSS",actual: "TB -3 lost (CLE won by 4) + total 42 UNDER 45.5",odds:180,profit:-12}],
        Gemini: [{outcome: "WIN",actual: "CLE won outright, +8.5 wins easy",odds:-115,profit:10.43},{outcome: "LOSS",actual: "SGP: TB ML failed (CLE won) though Mayfield 176 pass yds UNDER 214.5 hit",odds:135,profit:-8}]
      }
    }
  },
  {
    week: 2, gameId: "packers-jets", label: "Packers at Jets",
    away: "Green Bay Packers", home: "New York Jets",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "MetLife Stadium, East Rutherford, NJ", network: "FOX",
    line_snapshot: { spread: "GB -3.5", total: 44.5, moneyline: "GB -192 / NYJ +160", source: "DraftKings via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872936",
    responseFolder: "Docs/Responses/2026/week-02/game-06-packers-jets/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "EXPIRED",total_stake: 0,reserve: 20,summary: "Codex hit the 1: 00 PM ET kickoff before saving. No picks recorded.",bets: []},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Breece Hall O15.5 rush att $8 conditional -115 + SGP NYJ ML + game total UNDER 43.5 $12 conditional +180.",bets: [{type: "straight",market: "Player Rush Att",line: "Breece Hall OVER 15.5 rush attempts (min -115 conditional)",stake: 8,confidence: 6,reason: "Volume-on-winner reused from W1 G5 Hall O15.5 (22 actual)"},{type: "sgp",market: "SGP",line: "New York Jets ML + game total UNDER 43.5 (min +180 conditional)",stake: 12,confidence: 4,reason: "NYJ home ML + low-scoring script"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "NYJ +3.5 $12 reference_market DK -109 + SGP NYJ +3.5 (-109) + Hall O65.5 rush yds (-108) $8 reference_market DK +220. Contrarian home dog grounded in W1 tape (Jets controlled 38:46 clock; Packers blew game they yardage-won). Volume-on-projected-winner shape continues. No fabricated /research/ 404 (second response in a row). Fabricated own season record continues. Same-team single+SGP concentration. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"New York Jets +3.5 (reference_market DK -109)", stake:12, confidence:6, reason:"NYJ home dog after 38:46 TOP W1 win; GB 1-6 ATS as road favorite (unverified)"}, {type:"parlay", market:"SGP", line:"NYJ +3.5 (-109) + Hall O65.5 rush yds (-108) (reference DK +220)", stake:8, confidence:4, reason:"Correlated NYJ cover + Hall volume on run-heavy script"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 17, homeScore: 17,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872936",
      note: "Packers 17, Jets 17 TIE. Total 34.",
      grades: {
        ChatGPT: [],
        Claude: [{outcome: "WIN",actual: "Breece Hall 16 rush att OVER 15.5",odds:-115,profit:6.96},{outcome: "WIN",actual: "NYJ ML pushed on tie, SGP recomputed to UNDER 43.5 alone (34 < 43.5). Book-dependent settle; treated as UNDER-single at -110.",odds:180,profit:10.91}],
        Gemini: [{outcome: "WIN",actual: "NYJ tied so +3.5 covers",odds:-109,profit:11.01},{outcome: "WIN",actual: "NYJ +3.5 covers + Hall 16 rush att OVER 15.5",odds:220,profit:17.6}]
      }
    }
  },
  {
    week: 2, gameId: "steelers-patriots", label: "Steelers at Patriots",
    away: "Pittsburgh Steelers", home: "New England Patriots",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "Gillette Stadium, Foxborough, MA", network: "CBS",
    line_snapshot: { spread: "NE -5.5", total: 41.5, moneyline: "NE -230 / PIT +190", source: "BetMGM/OddsChecker via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872946",
    responseFolder: "Docs/Responses/2026/week-02/game-05-steelers-patriots/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "EXPIRED",total_stake: 0,reserve: 20,summary: "Codex hit the 1: 00 PM ET kickoff before saving. No picks recorded.",bets: []},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Rico Dowdle O15.5 rush att $8 conditional -115 (ROSTER ERROR - Dowdle plays for CAR) + SGP PIT -3 + total UNDER 41.5 $12 conditional +180.",bets: [{type: "straight",market: "Player Rush Att",line: "Rico Dowdle OVER 15.5 rush attempts (min -115 conditional) [ROSTER ERROR:  not on PIT or NE]",stake: 8,confidence: 6,reason: "Volume-on-projected-winner (Claude misread roster; Dowdle is a Panther)"},{type: "sgp",market: "SGP",line: "Pittsburgh Steelers -3 + game total UNDER 41.5 (min +180 conditional)",stake: 12,confidence: 4,reason: "PIT wins low-scoring grind (W1 KC/BAL shape reused)"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "NE -5.5 $12 reference_market BetMGM -112 + SGP NE ML (-218) + UNDER 45.5 alt (-165) $8 reference_market FanDuel +111. No fabricated /research/ 404 this time (positive shift). Fabricated own season record continues (claimed 2-2 -$2.89, actual 13-10 +$59.09). Cites Mike McCarthy as PIT HC (verify - real-world Tomlin). Same-team single+SGP concentration on NE-wins-defensive-game outcome. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"New England Patriots -5.5 (reference_market BetMGM -112)", stake:12, confidence:6, reason:"NE home favorite; PIT missing Pittman Jr."}, {type:"parlay", market:"SGP", line:"NE ML (-218) + UNDER 45.5 alt (-165) (reference FanDuel +111)", stake:8, confidence:5, reason:"Correlated NE win + defensive-grind under"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 3, homeScore: 20,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872946",
      note: "Patriots 20, Steelers 3. NE won by 17; total 23.",
      grades: {
        ChatGPT: [],
        Claude: [{outcome: "PUSH",actual: "Rico Dowdle not on either team roster (Panthers RB), bet voided/N/A",odds:-115,profit:0},{outcome: "LOSS",actual: "PIT lost by 17, -3 lost badly; UNDER 41.5 hit but ML/spread leg failed",odds:180,profit:-12}],
        Gemini: [{outcome: "WIN",actual: "NE won by 17, covered -5.5",odds:-112,profit:10.71},{outcome: "WIN",actual: "NE ML + total 23 UNDER 45.5 alt",odds:111,profit:8.88}]
      }
    }
  },
  {
    week: 2, gameId: "eagles-titans", label: "Eagles at Titans",
    away: "Philadelphia Eagles", home: "Tennessee Titans",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "Nissan Stadium, Nashville, TN", network: "FOX",
    line_snapshot: { spread: "PHI -7 to -7.5", total: 39.5, moneyline: "PHI -325 / TEN +260", source: "DraftKings/oddschecker via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872939",
    responseFolder: "Docs/Responses/2026/week-02/game-04-eagles-titans/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "Codex CLI",total_stake: 20,reserve: 0,summary: "UNDER 39.5 $16 FanDuel -110 + SGP Eagles ML + UNDER 44.5 $4 conditional +150.",bets: [{type: "straight",market: "Total",line: "UNDER 39.5 total points (@ -110 FanDuel reference)",stake: 16,confidence: 6,reason: "TEN offense scored 10 in W1; PHI methodical script"},{type: "parlay",market: "SGP",line: "Philadelphia Eagles moneyline + UNDER 44.5 total points (min +150 conditional)",stake: 4,confidence: 4,reason: "PHI wins low-scoring divisional"}]},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Saquon Barkley O17.5 rush att $8 conditional -125 + SGP PHI ML + game total UNDER 43.5 $12 conditional +160.",bets: [{type: "straight",market: "Player Rush Att",line: "Saquon Barkley OVER 17.5 rush attempts (min -125 conditional)",stake: 8,confidence: 6,reason: "Volume-on-winner with PHI grinding out TEN"},{type: "sgp",market: "SGP",line: "Philadelphia Eagles ML + game total UNDER 43.5 (min +160 conditional)",stake: 12,confidence: 4,reason: "PHI wins defensive grind"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "PHI -7.0 $12 reference_market DK -112 + SGP PHI -3.5 alt (-180) + Barkley O74.5 rush yds (-115) $8 reference_market DK +142. Re-run at 11:01 replaced 10:58 draft. Line now matches DK snippet cleanly. Same-team single+SGP concentration risk. Volume-on-winner shape held. 16th fabricated /research/ 404. Fabricated own season record (claimed 2-2 -$2.89, actual 13-10 +$59.09). Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Philadelphia Eagles -7.0 (reference_market DK -112)", stake:12, confidence:6, reason:"PHI road favorite; TEN offense capped"}, {type:"parlay", market:"SGP", line:"PHI -3.5 alt (-180) + Barkley O74.5 rush yds (-115) (reference DK +142)", stake:8, confidence:4, reason:"Correlated PHI cover + Barkley clock-drain volume"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 24, homeScore: 20,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872939",
      note: "Eagles 24, Titans 20. PHI won by 4; total 44.",
      grades: {
        ChatGPT: [{outcome: "LOSS",actual: "Total 44 > 39.5, OVER hit",odds:-110,profit:-16},{outcome: "WIN",actual: "PHI ML won + UNDER 44.5 hit (total 44)",odds:150,profit:6}],
        Claude: [{outcome: "LOSS",actual: "Barkley 4 rush att, line 17.5",odds:-125,profit:-8},{outcome: "LOSS",actual: "PHI ML won but UNDER 43.5 lost (44 > 43.5)",odds:160,profit:-12}],
        Gemini: [{outcome: "LOSS",actual: "PHI won by only 4, -7.0 lost",odds:-112,profit:-12},{outcome: "LOSS",actual: "SGP: PHI -3.5 alt hit but Barkley 9 rush yds < 74.5",odds:142,profit:-8}]
      }
    }
  },
  {
    week: 2, gameId: "vikings-bears", label: "Vikings at Bears",
    away: "Minnesota Vikings", home: "Chicago Bears",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "Soldier Field, Chicago, IL", network: "FOX",
    line_snapshot: { spread: "CHI -4.5", total: 46.5, moneyline: "MIN +180 / CHI -218", source: "DraftKings via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872937",
    responseFolder: "Docs/Responses/2026/week-02/game-03-vikings-bears/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "Codex CLI",total_stake: 20,reserve: 0,summary: "MIN +4.5 $14 FanDuel -110 + SGP Aaron Jones O10.5 rush att + D'Andre Swift O11.5 rush att $6 conditional +250.",bets: [{type: "straight",market: "Spread",line: "Minnesota Vikings +4.5 (@ -110 FanDuel reference)",stake: 14,confidence: 5,reason: "MIN road dog with intact defense vs CHI overrated after W1 shootout"},{type: "parlay",market: "SGP",line: "Aaron Jones OVER 10.5 rush att + D'Andre Swift OVER 11.5 rush att (min +250 conditional)",stake: 6,confidence: 4,reason: "Both projected primary backs hit rush volume in a low-scoring divisional grind"}]},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Justin Jefferson receptions OVER 6.5 $8 conditional -125 + SGP MIN +2.5 + game total OVER 47.5 $12 conditional +180.",bets: [{type: "straight",market: "Player Recs",line: "Justin Jefferson OVER 6.5 receptions (min -125 conditional)",stake: 8,confidence: 6,reason: "Volume-on-winning-side WR1 target share"},{type: "sgp",market: "SGP",line: "Minnesota Vikings +2.5 + game total OVER 47.5 (min +180 conditional)",stake: 12,confidence: 4,reason: "MIN dog + high-scoring script vs Bears"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "CHI -4.5 $12 reference_market DK -110 + SGP CHI -2.5 alt (-180) + Caleb Williams O214.5 pass yds (-115) $8 reference_market DK +145. Vikings QB1 claim: roster file actually lists Murray as qb1 so Gemini aligns with repo, whether roster itself is correct is a separate data-quality question (my W1 G12 grading note was too harsh). 14th fabricated /research/ 404. DraftKings total quote shows 48.5 vs my ESPN check at 46.5. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Chicago Bears -4.5 (reference_market DK -110)", stake:12, confidence:6, reason:"CHI home; MIN with backup QB (claim disputed)"}, {type:"parlay", market:"SGP", line:"CHI -2.5 alt + Williams O214.5 pass yds (reference DK +145)", stake:8, confidence:4, reason:"Correlated home-fav spread + QB pass-yd volume"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 9, homeScore: 3,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872937",
      note: "Vikings 9, Bears 3. Low-scoring MIN road win; total 12.",
      grades: {
        ChatGPT: [{outcome: "WIN",actual: "MIN won outright, +4.5 wins",odds:-110,profit:12.73},{outcome: "WIN",actual: "Aaron Jones 23 rush att OVER 10.5 + Swift 16 rush att OVER 11.5",odds:250,profit:15}],
        Claude: [{outcome: "LOSS",actual: "Jefferson 3 recs, line 6.5",odds:-125,profit:-8},{outcome: "LOSS",actual: "MIN +2.5 hit but total 12 < 47.5 (UNDER); SGP OVER leg failed",odds:180,profit:-12}],
        Gemini: [{outcome: "LOSS",actual: "CHI lost by 6, -4.5 lost",odds:-110,profit:-12},{outcome: "LOSS",actual: "SGP: CHI -2.5 alt lost + Williams 138 pass yds < 214.5",odds:145,profit:-8}]
      }
    }
  },
  {
    week: 2, gameId: "panthers-falcons", label: "Panthers at Falcons",
    away: "Carolina Panthers", home: "Atlanta Falcons",
    kickoff: "2026-09-20T13:00:00-04:00", kickoffDisplay: "Sun Sep 20, 1:00 PM ET",
    venue: "Mercedes-Benz Stadium, Atlanta, GA", network: "FOX",
    line_snapshot: { spread: "CAR -2.5", total: 43.5, moneyline: "CAR -155 / ATL +130", source: "DraftKings via ESPN game center 2026-09-20 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872933",
    responseFolder: "Docs/Responses/2026/week-02/game-02-panthers-falcons/",
    status: "locked", locked_at: "2026-09-20", prompt_template: "forced-selection v3.2",
    models: {
      ChatGPT: {version: "Codex CLI",total_stake: 20,reserve: 0,summary: "CAR -2.5 $14 conditional -110 + SGP ATL ML + Bijan Robinson OVER 81.5 rush yds $6 conditional +450. Projected CAR win.",bets: [{type: "straight",market: "Spread",line: "Carolina Panthers -2.5 (min -110 conditional)",stake: 14,confidence: 6,reason: "CAR road favorite with better W1 offense; ATL missing Overshown-equivalents on defense"},{type: "parlay",market: "SGP",line: "ATL ML + Bijan Robinson OVER 81.5 rush yds (min +450 conditional)",stake: 6,confidence: 2,reason: "ATL upset script with Bijan volume"}]},
      Claude: {version: "Claude Code",total_stake: 20,reserve: 0,summary: "Bijan Robinson O16.5 rush att $8 conditional -120 + SGP ATL -3 + game total UNDER 45.5 $12 conditional +180. No same-team ML stacked across single + SGP (W1G2 lesson).",bets: [{type: "straight",market: "Player Rush Att",line: "Bijan Robinson OVER 16.5 rush attempts (min -120 conditional)",stake: 8,confidence: 6,reason: "Volume-on-projected-winner (ATL) with Rush at QB reducing pass ceiling"},{type: "sgp",market: "SGP",line: "Atlanta Falcons -3 + game total UNDER 45.5 (min +180 conditional)",stake: 12,confidence: 4,reason: "ATL home cover + low-scoring script"}]},
Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "ATL +2.5 $12 reference_market -110 + SGP Bijan Robinson OVER 82.5 rush yds + ATL +2.5 $8 reference_market +250. Volume-on-projected-winner shape (Bijan vs CAR run D that gave up 291 yds W1). 13th fabricated /research/ 404 pattern; fabricated Season 2 record (claimed 2-2 -$2.89, actual 13-10 +$59.09); fabricated Kevin Stefanski as Falcons HC; fabricated 'CAR 0-2 ATS as favorites' claim. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Atlanta Falcons +2.5 (reference_market -110)", stake:12, confidence:5, reason:"ATL home dog with Rush at QB; NFC South divisional"}, {type:"parlay", market:"SGP", line:"Bijan Robinson OVER 82.5 rush yds + ATL +2.5 (reference +250)", stake:8, confidence:3, reason:"Volume-on-winner on CAR run D that gave up 291 yds W1"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-20", awayScore: 34, homeScore: 3,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872933",
      note: "Panthers 34, Falcons 3. CAR won by 31; total 37.",
      grades: {
        ChatGPT: [{outcome: "WIN",actual: "CAR won by 31, covered -2.5",odds:-110,profit:12.73},{outcome: "LOSS",actual: "SGP ATL ML failed + Bijan 72 rush yds < 81.5",odds:450,profit:-6}],
        Claude: [{outcome: "LOSS",actual: "Bijan 16 rush att, needed 17 (line 16.5)",odds:-120,profit:-8},{outcome: "LOSS",actual: "SGP ATL -3 leg failed (ATL lost by 31); UNDER 45.5 hit",odds:180,profit:-12}],
        Gemini: [{outcome: "LOSS",actual: "ATL lost by 31, +2.5 lost",odds:-110,profit:-12},{outcome: "LOSS",actual: "SGP: ATL +2.5 lost + Bijan 72 rush yds < 82.5",odds:250,profit:-8}]
      }
    }
  },
  {
    week: 1,
    gameId: "buccaneers-bengals",
    label: "Buccaneers at Bengals",
    away: "Tampa Bay Buccaneers",
    home: "Cincinnati Bengals",
    kickoff: "2026-09-13T13:00:00-04:00",
    kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "Paycor Stadium, Cincinnati, OH",
    network: "FOX",
    line_snapshot: {
      spread: "CIN -3.5",
      total: 50.5,
      moneyline: "CIN -205 / TB +172",
      source: "FanDuel via ChatGPT + Claude research, 2026-09-13"
    },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872925",
    responseFolder: "Docs/Responses/2026/week-01/game-03-buccaneers-bengals/",
    status: "locked",
    locked_at: "2026-09-13",
    prompt_template: "forced-selection v3.0 (independent-derivation)",
    models: {
      ChatGPT: {
        version: "Codex CLI",
        total_stake: 20,
        reserve: 0,
        summary: "Tampa +3.5 $14 (FanDuel reference_market -105) + SGP Cincinnati ML + game UNDER 50.5 $6 (conditional +250). Projection Cinci 27-24. Independent derivations cited specific NFL_BETS rows. Flagged Bengals QB1 Clifford->Burrow heuristic error.",
        bets: [
          { type: "straight", market: "Spread", line: "Tampa Bay +3.5 (@ -105 FanDuel reference)", stake: 14, confidence: 6, reason: "Tampa's Mayfield/Bucky Irving structure keeps within a FG; Burrow returning from 2025 toe injury" },
          { type: "sgp", market: "SGP", line: "Cincinnati ML + game UNDER 50.5 (min +250 conditional)", stake: 6, confidence: 3, reason: "Correlated: controlled Bengals win compatible with sub-51 total" }
        ]
      },
      Claude: {
        version: "Claude Code",
        total_stake: 20,
        reserve: 0,
        summary: "Game UNDER 50.5 $12 (conditional -115) + SGP Tampa +3.5 + UNDER 50.5 $8 (conditional +200). Projection Cinci 23-20. Cited game UNDER 8-4 record and short-underdog hook 3-0 from raw NFL_BETS. Flagged Bengals QB1 mispick and Bucs TE1 verification (Kieft vs Otton).",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 50.5 (min -115 conditional)", stake: 12, confidence: 6, reason: "Burrow first live action since 2025 toe injury, Chase/Higgins limited, TB missing WR3 + change-of-pace RB" },
          { type: "sgp", market: "SGP", line: "TB +3.5 + UNDER 50.5 (min +200 conditional)", stake: 8, confidence: 4, reason: "Correlated: low-scoring game shrinks margin variance; hook naturally aligned with UNDER" }
        ]
      },
      Gemini: {
        version: "Gemini web",
        total_stake: 20,
        reserve: 0,
        summary: "Cincinnati -3.5 $12 (claimed bovada_verified -115, unverified) + SGP Bengals TT OVER 24.5 + Burrow OVER 1.5 Pass TDs $8 (conditional min +140). Projection Cinci 27-20. Fourth confirmed fabricated repo-fetch (all raw URLs return 200). Derivations cited conventional heuristics not NFL_BETS rows. T2 leg 2 is exactly the Season 1 loss family Claude and ChatGPT flagged. See prompt-corrections.md.",
        bets: [
          { type: "straight", market: "Spread", line: "Cincinnati -3.5 (claimed bovada_verified -115, treated as reference_market)", stake: 12, confidence: 7, reason: "Bengals full skill health vs TB missing McMillan" },
          { type: "sgp", market: "SGP", line: "Bengals TT OVER 24.5 + Burrow OVER 1.5 Pass TDs (min +140 conditional)", stake: 8, confidence: 4, reason: "Correlated Bengals scoring script; T2 leg 2 is Season 1 loss family" }
        ]
      }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 27, homeScore: 33,
      source: "https://www.espn.com/nfl/game/_/gameId/401872925",
      note: "Bengals 33, Bucs 27. Total 60. CIN covered -3.5. OVER 50.5 wins. Burrow 1 pass TD (Burrow OVER 1.5 leg lost).",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "CIN won by 6, TB +3.5 lost", odds: -105, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP UNDER 50.5 leg failed (60 total)", odds: 250, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "60 total went OVER 50.5", odds: -115, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP both legs failed (TB dog lost, OVER hit)", odds: 200, profit: -8.00 }
        ],
        Gemini: [
          { outcome: "WIN", actual: "CIN won by 6, covered -3.5", odds: -115, profit: 10.43 },
          { outcome: "LOSS", actual: "SGP Burrow OVER 1.5 pass TDs leg failed (1 pass TD)", odds: 140, profit: -8.00 }
        ]
      }
    }
  },
  {
    week: 1,
    gameId: "saints-lions",
    label: "Saints at Lions",
    away: "New Orleans Saints",
    home: "Detroit Lions",
    kickoff: "2026-09-13T13:00:00-04:00",
    kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "Ford Field, Detroit, MI",
    network: "FOX",
    line_snapshot: {
      spread: "DET -6.5",
      total: 49.5,
      moneyline: "DET -335 / NO +270",
      source: "FanDuel via ChatGPT research, 2026-09-13"
    },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872923",
    responseFolder: "Docs/Responses/2026/week-01/game-04-saints-lions/",
    status: "locked",
    locked_at: "2026-09-13",
    prompt_template: "forced-selection v3.0 (independent-derivation)",
    models: {
      ChatGPT: {
        version: "Codex CLI",
        total_stake: 20,
        reserve: 0,
        summary: "Detroit -6.5 $14 (FanDuel reference_market -122) + SGP DET ML + game OVER 49.5 $6 (conditional min +220). Projected Detroit 31-20. Flagged Lions QB1 Altmyer->Goff and Saints QB1 Rattler->Shough heuristic errors. Independent derivations cited specific NFL_BETS rows. Self-reflection reduced SGP exposure vs Rams game blowout.",
        bets: [
          { type: "straight", market: "Spread", line: "Detroit Lions -6.5 (@ -122 FanDuel reference)", stake: 14, confidence: 6, reason: "Goff/Gibbs and Detroit home offense produce 7+ margin vs Saints missing Cam Jordan and Kamara questionable" },
          { type: "sgp", market: "SGP", line: "Detroit Lions ML + game OVER 49.5 (min +220 conditional)", stake: 6, confidence: 3, reason: "Correlated: sustained Detroit offensive production drives both legs" }
        ]
      },
      Claude: {
        version: "Claude Code",
        total_stake: 20,
        reserve: 0,
        summary: "Detroit Team Total OVER 27.5 $12 (conditional min -110) + SGP Detroit ML + Saints Team Total UNDER 20.5 $8 (conditional min +150). Projected Detroit 30-17. Applied W11 P11 Cowboys TT OVER shape. Flagged 4 heuristic errors (Saints QB1, Lions QB1, Lions WR1, Lions TE1). Self-reflection: stopped same-team volume prop on losing side (Game 2 Kyren pattern).",
        bets: [
          { type: "straight", market: "Team Total", line: "Detroit Lions Team Total OVER 27.5 (min -110 conditional)", stake: 12, confidence: 6, reason: "Lions offense healthy top-to-bottom, Ford Field dome, Saints missing Cam Jordan" },
          { type: "sgp", market: "SGP", line: "Detroit ML + Saints Team Total UNDER 20.5 (min +150 conditional)", stake: 8, confidence: 4, reason: "Kamara out, Tyson IR, Matavao IR, Shough on road; two independent legs on same directional thesis without shared player-volume premise" }
        ]
      },
      Gemini: {
        version: "Gemini web",
        total_stake: 20,
        reserve: 0,
        summary: "Detroit -7 $12 (claimed bovada_verified but odds_source is usatoday.com, treated as reference_market) + SGP Detroit TT OVER 27.5 + Gibbs Anytime TD $8 (conditional min +135). Projected Detroit 31-17. FIFTH confirmed fabricated repo-fetch (all raw URLs return 200). Third unverifiable bovada_verified label. Derivations remain conventional heuristics without NFL_BETS row citations. Grading concerns inline in gemini-picks.md.",
        bets: [
          { type: "straight", market: "Spread", line: "Detroit -7 (claimed bovada_verified -105, treated as reference_market)", stake: 12, confidence: 6, reason: "Lions dominate Ford Field vs Saints missing Kamara + Cam Jordan" },
          { type: "sgp", market: "SGP", line: "Detroit TT OVER 27.5 + Gibbs Anytime TD (min +135 conditional)", stake: 8, confidence: 4, reason: "Correlated Detroit scoring script" }
        ]
      }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 30, homeScore: 31,
      source: "https://www.espn.com/nfl/game/_/gameId/401872923",
      note: "Lions 31, Saints 30 in OT. Kellen Moore went for two and the win. Total 61. DET won by 1 (spread lost). OVER 49.5. Saints TT 30 > 20.5. Gibbs 2 rush TDs.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "DET won by 1 in OT, -6.5 lost", odds: -122, profit: -14.00 },
          { outcome: "WIN", actual: "DET ML + 61 total OVER 49.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "WIN", actual: "DET scored 31, TT OVER 27.5 wins", odds: -110, profit: 10.91 },
          { outcome: "LOSS", actual: "SGP Saints TT UNDER 20.5 leg failed (NO 30)", odds: 150, profit: -8.00 }
        ],
        Gemini: [
          { outcome: "LOSS", actual: "DET won by 1 in OT, -7 lost", odds: -105, profit: -12.00 },
          { outcome: "WIN", actual: "DET TT OVER 27.5 + Gibbs 2 rush TDs", odds: 135, profit: 10.80 }
        ]
      }
    }
  },
  {
    week: 1,
    gameId: "jets-titans",
    label: "Jets at Titans",
    away: "New York Jets",
    home: "Tennessee Titans",
    kickoff: "2026-09-13T13:00:00-04:00",
    kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "Nissan Stadium, Nashville, TN",
    network: "CBS",
    line_snapshot: {
      spread: "TEN -1.5",
      total: 39.5,
      moneyline: "TEN -118 / NYJ +100",
      source: "FanDuel via ChatGPT + Claude research, 2026-09-13; lowest total on the board"
    },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872924",
    responseFolder: "Docs/Responses/2026/week-01/game-05-jets-titans/",
    status: "locked",
    locked_at: "2026-09-13",
    prompt_template: "forced-selection v3.0 (independent-derivation)",
    models: {
      ChatGPT: {
        version: "Codex CLI",
        total_stake: 20,
        reserve: 0,
        summary: "Jets +1.5 $14 (FanDuel reference -112) + SGP Jets ML + game UNDER 38.5 $6 (conditional min +260). Projected Tennessee 20-19 (pick'em). Cited real NFL_BETS rows for derivations. Confirmed Cam Ward as Titans QB1.",
        bets: [
          { type: "straight", market: "Spread", line: "New York Jets +1.5 (@ -112 FanDuel reference)", stake: 14, confidence: 5, reason: "Geno Smith + Hall keep NYJ within 1 pt vs Titans priced only 1.5 higher" },
          { type: "sgp", market: "SGP", line: "New York Jets ML + game UNDER 38.5 (min +260 conditional)", stake: 6, confidence: 3, reason: "Correlated: close low-scoring Jets win" }
        ]
      },
      Claude: {
        version: "Claude Code",
        total_stake: 20,
        reserve: 0,
        summary: "Jets ML $10 (conditional min +100) + SGP Jets +1.5 + game UNDER 39.5 $10 (conditional min +200). Projected New York 20-17. Cited W11 Texans/Titans UNDER 38.5 +$10 as same-franchise analogue. Flagged 3 roster errors: Jets RB1 Hall (not Allen), Titans TE1 (Kanak on IR, actual Helm), Wan'Dale Robinson mislabeled Questionable.",
        bets: [
          { type: "straight", market: "Moneyline", line: "New York Jets ML (min +100 conditional)", stake: 10, confidence: 5, reason: "Cam Ward first career start vs Sauce Gardner/Quinnen Williams front; Geno more established" },
          { type: "sgp", market: "SGP", line: "New York Jets +1.5 + game UNDER 39.5 (min +200 conditional)", stake: 10, confidence: 4, reason: "Independent legs, mild positive correlation, no shared player-volume premise" }
        ]
      },
      Gemini: {
        version: "Gemini web",
        total_stake: 20,
        reserve: 0,
        summary: "Jets +1.5 $12 (claimed bovada_verified -110, unverified; Bovada showed no event prices per other models) + SGP game UNDER 40.5 + Hall OVER 15.5 rush att $8 (conditional min +190). Projected NYJ 20-17. SIXTH confirmed fabricated repo-fetch. Fourth unverifiable bovada_verified label. Also mislabeled Titans QB1 as Will Levis (actual: Cam Ward, correctly in roster file). Grading concerns inline in gemini-picks.md.",
        bets: [
          { type: "straight", market: "Spread", line: "New York Jets +1.5 (claimed bovada_verified -110, treated as reference_market)", stake: 12, confidence: 5, reason: "Jets DL controls LOS in low total" },
          { type: "sgp", market: "SGP", line: "Game UNDER 40.5 + Breece Hall OVER 15.5 rush att (min +190 conditional)", stake: 8, confidence: 4, reason: "Correlated: low-scoring game preserves Jets ground volume; note this is same volume-prop shape flagged as losing by Claude/ChatGPT" }
        ]
      }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 23, homeScore: 10,
      source: "https://www.espn.com/nfl/game/_/gameId/401872924",
      note: "Jets 23, Titans 10. NYJ won outright by 13. Total 33 (UNDER 38.5/39.5/40.5). Breece Hall 22 rush attempts.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "NYJ won outright, +1.5 wins", odds: -112, profit: 12.50 },
          { outcome: "WIN", actual: "NYJ ML + 33 total UNDER 38.5", odds: 260, profit: 15.60 }
        ],
        Claude: [
          { outcome: "WIN", actual: "NYJ won outright, ML wins", odds: 100, profit: 10.00 },
          { outcome: "WIN", actual: "NYJ +1.5 + 33 total UNDER 39.5", odds: 200, profit: 20.00 }
        ],
        Gemini: [
          { outcome: "WIN", actual: "NYJ won outright, +1.5 wins", odds: -110, profit: 10.91 },
          { outcome: "WIN", actual: "UNDER 40.5 + Hall 22 rush att OVER 15.5", odds: 190, profit: 15.20 }
        ]
      }
    }
  },
  {
    week: 1,
    gameId: "ravens-colts",
    label: "Ravens at Colts",
    away: "Baltimore Ravens",
    home: "Indianapolis Colts",
    kickoff: "2026-09-13T13:00:00-04:00",
    kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "Lucas Oil Stadium, Indianapolis, IN",
    network: "CBS",
    line_snapshot: {
      spread: "BAL -3 to -3.5",
      total: 47.5,
      moneyline: "BAL -178 / IND +150",
      source: "FanDuel via ChatGPT + Claude research, 2026-09-13"
    },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872659",
    responseFolder: "Docs/Responses/2026/week-01/game-06-ravens-colts/",
    status: "locked",
    locked_at: "2026-09-13",
    prompt_template: "forced-selection v3.0 (independent-derivation)",
    models: {
      ChatGPT: {
        version: "Codex CLI",
        total_stake: 20,
        reserve: 0,
        summary: "Ravens -3.5 $14 (FanDuel reference -102) + SGP Ravens ML + game UNDER 47.5 $6 (conditional min +240). Projected Ravens 27-20. Flagged Ravens QB1 Huntley->Lamar and Colts QB1 Richardson->Jones. Cited real NFL_BETS rows.",
        bets: [
          { type: "straight", market: "Spread", line: "Baltimore Ravens -3.5 (@ -102 FanDuel reference)", stake: 14, confidence: 6, reason: "Lamar healthy vs Jones first game post-Achilles; Colts missing WR1" },
          { type: "sgp", market: "SGP", line: "Ravens ML + game UNDER 47.5 (min +240 conditional)", stake: 6, confidence: 3, reason: "Correlated: Baltimore-controlled win compatible with sub-48 game" }
        ]
      },
      Claude: {
        version: "Claude Code",
        total_stake: 20,
        reserve: 0,
        summary: "Ravens -3 $12 (conditional min -120) + SGP Ravens ML + game UNDER 47.5 $8 (conditional min +180). Projected Ravens 26-16. FOUR roster heuristic errors flagged (Ravens QB1, Colts QB1, Colts RB1 Jonathan Taylor buried by jersey number, Colts WR1). Cited Darnold Seattle debut UNDER 44.5 as direct analogue to Jones first-game-back.",
        bets: [
          { type: "straight", market: "Spread", line: "Baltimore Ravens -3 (min -120 conditional)", stake: 12, confidence: 6, reason: "Lamar healthy vs Jones first game post-Achilles; Colts WR1 Montgomery IR, Downs Q" },
          { type: "sgp", market: "SGP", line: "Ravens ML + game UNDER 47.5 (min +180 conditional)", stake: 8, confidence: 4, reason: "ML ~0.64, UNDER ~0.55, mild positive correlation to ~0.40 joint; fair ~+140-170" }
        ]
      },
      Gemini: { version: "EXPIRED", total_stake: 0, reserve: 20, summary: "No response submitted before 1:00 PM ET kickoff. Pre-game eligibility expired.", bets: [] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 41, homeScore: 23,
      source: "https://www.espn.com/nfl/game/_/gameId/401872659",
      note: "Ravens 41, Colts 23. BAL won by 18. Total 64 (OVER 47.5).",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "BAL won by 18, covered -3.5", odds: -102, profit: 13.73 },
          { outcome: "LOSS", actual: "SGP UNDER 47.5 leg failed (64 total)", odds: 240, profit: -6.00 }
        ],
        Claude: [
          { outcome: "WIN", actual: "BAL won by 18, covered -3", odds: -120, profit: 10.00 },
          { outcome: "LOSS", actual: "SGP UNDER 47.5 leg failed (64 total)", odds: 180, profit: -8.00 }
        ],
        Gemini: []
      }
    }
  },
  {
    week: 1, gameId: "falcons-steelers", label: "Falcons at Steelers",
    away: "Atlanta Falcons", home: "Pittsburgh Steelers",
    kickoff: "2026-09-13T13:00:00-04:00", kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "Acrisure Stadium, Pittsburgh, PA", network: "FOX",
    line_snapshot: { spread: "PIT -5.5 to -6.5", total: 42.5, moneyline: "PIT -280 / ATL +230", source: "FanDuel / SI via ChatGPT + Claude research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872658",
    responseFolder: "Docs/Responses/2026/week-01/game-07-falcons-steelers/",
    status: "locked", locked_at: "2026-09-13",
    prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Steelers -5.5 $14 FanDuel reference -115 + SGP Steelers ML + UNDER 40.5 $6 conditional +190. Steelers 24-13. Flagged ATL QB1 (Rush actual starter after Tua ruled out) and PIT QB1 (Rodgers not Rudolph).", bets: [{type:"straight", market:"Spread", line:"Pittsburgh Steelers -5.5 (@ -115 FanDuel reference)", stake:14, confidence:6, reason:"ATL missing both QB1 (Tua) and QB2 (Penix); Rush emergency start vs Rodgers at home"}, {type:"sgp", market:"SGP", line:"Steelers ML + UNDER 40.5 (min +190 conditional)", stake:6, confidence:3, reason:"PIT-controlled win compatible with sub-41 total"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Game UNDER 42.5 $12 conditional -110 + SGP Steelers ML + Falcons TT UNDER 17.5 $8 conditional +140. Steelers 24-13. FOUR roster errors flagged (ATL QB1, ATL WR1, PIT QB1, PIT TE1). Cited Darnold Seattle debut UNDER 44.5 as direct analogue to Cooper Rush emergency start.", bets: [{type:"straight", market:"Total", line:"UNDER 42.5 (min -110 conditional)", stake:12, confidence:6, reason:"Cooper Rush emergency start caps ATL ceiling; Rodgers pace-slowing offense; total already low"}, {type:"sgp", market:"SGP", line:"Steelers ML + Falcons TT UNDER 17.5 (min +140 conditional)", stake:8, confidence:4, reason:"Independent legs, mild positive correlation, no shared player premise"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "Steelers -3.5 $12 claimed bovada_verified -104 (odds_source is legalsportsbetting.com not Bovada, unverified) + SGP UNDER 42.5 + Steelers ML $8 conditional +150. Steelers 23-13. SEVENTH fabricated repo-fetch. FIFTH unverifiable bovada_verified label. Grading concerns inline in gemini-picks.md.", bets: [{type:"straight", market:"Spread", line:"Pittsburgh Steelers -3.5 (claimed bovada_verified -104, treated as reference_market)", stake:12, confidence:6, reason:"Rodgers vs Rush emergency start on wet grass"}, {type:"parlay", market:"SGP", line:"Game UNDER 42.5 + Steelers ML (min +150 conditional)", stake:8, confidence:5, reason:"Low-scoring rain game favors Steelers win + UNDER"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 13, homeScore: 20,
      source: "https://www.espn.com/nfl/game/_/gameId/401872658",
      note: "Steelers 20, Falcons 13. PIT won by 7 (covered -5.5). Total 33 (UNDER 42.5). Falcons TT 13 < 17.5. T.J. Watt pick-6 late.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "PIT won by 7, covered -5.5", odds: -115, profit: 12.17 },
          { outcome: "WIN", actual: "PIT ML + 33 total UNDER 40.5", odds: 190, profit: 11.40 }
        ],
        Claude: [
          { outcome: "WIN", actual: "33 total UNDER 42.5", odds: -110, profit: 10.91 },
          { outcome: "WIN", actual: "PIT ML + ATL TT 13 UNDER 17.5", odds: 140, profit: 11.20 }
        ],
        Gemini: [
          { outcome: "WIN", actual: "PIT won by 7, covered -3.5", odds: -104, profit: 11.54 },
          { outcome: "WIN", actual: "UNDER 42.5 + PIT ML", odds: 150, profit: 12.00 }
        ]
      }
    }
  },
  {
    week: 1, gameId: "bears-panthers", label: "Bears at Panthers",
    away: "Chicago Bears", home: "Carolina Panthers",
    kickoff: "2026-09-13T13:00:00-04:00", kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "Bank of America Stadium, Charlotte, NC", network: "FOX",
    line_snapshot: { spread: "CHI -3", total: 47.0, moneyline: "CHI -155 / CAR +130", source: "FanDuel via Codex research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872661",
    responseFolder: "Docs/Responses/2026/week-01/game-08-bears-panthers/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Bears -3 $14 conditional -110 + SGP Bears ML + game OVER 47.5 $6 conditional +220. Projected Bears 27-23. Depth charts verified.", bets: [{type:"straight", market:"Spread", line:"Chicago Bears -3 (min -110 conditional)", stake:14, confidence:6, reason:"Ben Johnson offense debut + Caleb Williams + Odunze vs CAR missing Jones II"}, {type:"parlay", market:"SGP", line:"Bears ML + game OVER 47.5 (min +220 conditional)", stake:6, confidence:3, reason:"Bears offensive script drives both legs"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "CHI TT OVER 24.5 $12 conditional -110 + SGP Bears ML + game OVER 47.5 $8 conditional +180. Projected Bears 27-20. Applied W11 P11 Cowboys TT OVER shape.", bets: [{type:"straight", market:"Team Total", line:"Chicago Bears TT OVER 24.5 (min -110 conditional)", stake:12, confidence:6, reason:"Ben Johnson + Caleb Williams + Odunze active vs Panthers thin edge/TE/WR"}, {type:"sgp", market:"SGP", line:"Bears ML + game OVER 47.5 (min +180 conditional)", stake:8, confidence:4, reason:"Correlated but independent legs, no shared player-volume premise"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "Bears -3.0 $12 claimed bovada_verified -110 (odds_source usatoday.com not Bovada) + SGP OVER 46.5 + Williams 2+ Pass TDs $8 conditional +160. 8th fabricated repo fetch. 6th unverifiable bovada label. T2 leg 2 is Season 1 loss family. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Chicago Bears -3.0 (claimed bovada_verified -110, treated as reference_market)", stake:12, confidence:6, reason:"Ben Johnson debut"}, {type:"parlay", market:"SGP", line:"Game OVER 46.5 + Williams 2+ Pass TDs (min +160 conditional)", stake:8, confidence:5, reason:"High-tempo offensive script; note single-player OVER pass TDs shape flagged as losing"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 59, homeScore: 37,
      source: "https://www.espn.com/nfl/game/_/gameId/401872661",
      note: "Bears 59, Panthers 37. Total 96. CHI covered -3 easily. OVER 46.5/47.5 wins. Williams 2 pass TDs.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "CHI won by 22, covered -3", odds: -110, profit: 12.73 },
          { outcome: "WIN", actual: "CHI ML win + 96 total OVER 47.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "WIN", actual: "CHI scored 59, TT OVER 24.5 wins by 34.5", odds: -110, profit: 10.91 },
          { outcome: "WIN", actual: "CHI ML win + 96 total OVER 47.5", odds: 180, profit: 14.40 }
        ],
        Gemini: [
          { outcome: "WIN", actual: "CHI won by 22, covered -3.0", odds: -110, profit: 10.91 },
          { outcome: "WIN", actual: "96 total OVER 46.5 + Williams 2 pass TDs (>=2)", odds: 160, profit: 12.80 }
        ]
      }
    }
  },
  {
    week: 1, gameId: "browns-jaguars", label: "Browns at Jaguars",
    away: "Cleveland Browns", home: "Jacksonville Jaguars",
    kickoff: "2026-09-13T13:00:00-04:00", kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "EverBank Stadium, Jacksonville, FL", network: "CBS",
    line_snapshot: { spread: "JAX -8.5", total: 40.5, moneyline: "JAX -400 / CLE +320", source: "FanDuel via Codex research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872922",
    responseFolder: "Docs/Responses/2026/week-01/game-09-browns-jaguars/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "JAX -8.5 $14 conditional -110 + SGP Jaguars ML + game OVER 40.5 $6 conditional +220. Projected Jaguars win. Note: -8.5 approaches big-favorite threshold.", bets: [{type:"straight", market:"Spread", line:"Jacksonville Jaguars -8.5 (min -110 conditional)", stake:14, confidence:6, reason:"JAX home vs CLE road with QB uncertainty (Shedeur Sanders)"}, {type:"parlay", market:"SGP", line:"Jaguars ML + game OVER 40.5 (min +220 conditional)", stake:6, confidence:3, reason:"JAX-controlled win with offense script"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Game UNDER 40.5 $12 conditional -110 + SGP Jaguars ML + game UNDER 40.5 $8 conditional +200. Projected Jaguars 20-16. Both QBs uncertain drives UNDER.", bets: [{type:"straight", market:"Total", line:"UNDER 40.5 (min -110 conditional)", stake:12, confidence:6, reason:"Both teams non-established QBs; interior line issues; defensive opener"}, {type:"sgp", market:"SGP", line:"JAX ML + game UNDER 40.5 (min +200 conditional)", stake:8, confidence:4, reason:"Home team ML in low-total spot, independent legs"}] },
      Gemini: { version: "EXPIRED", total_stake: 0, reserve: 20, summary: "No response submitted before 1:00 PM ET kickoff. Pre-game eligibility expired.", bets: [] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 10, homeScore: 34,
      source: "https://www.espn.com/nfl/game/_/gameId/401872922",
      note: "Jaguars 34, Browns 10. Total 44. JAX covered -8.5 easily. OVER 40.5 wins by 3.5.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "JAX won by 24, covered -8.5", odds: -110, profit: 12.73 },
          { outcome: "WIN", actual: "JAX ML + 44 total OVER 40.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "44 total went OVER 40.5", odds: -110, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP UNDER 40.5 leg failed (44 total)", odds: 200, profit: -8.00 }
        ],
        Gemini: []
      }
    }
  },
  {
    week: 1, gameId: "bills-texans", label: "Bills at Texans",
    away: "Buffalo Bills", home: "Houston Texans",
    kickoff: "2026-09-13T13:00:00-04:00", kickoffDisplay: "Sun Sep 13, 1:00 PM ET",
    venue: "NRG Stadium, Houston, TX", network: "CBS",
    line_snapshot: { spread: "BUF -1.5", total: 45.5, moneyline: "BUF -125 / HOU +105", source: "FanDuel via Codex research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872660",
    responseFolder: "Docs/Responses/2026/week-01/game-10-bills-texans/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Bills -1.5 $14 conditional -110 + SGP Bills ML + game OVER 44.5 $6 conditional +220. Projected Bills win.", bets: [{type:"straight", market:"Spread", line:"Buffalo Bills -1.5 (min -110 conditional)", stake:14, confidence:6, reason:"Josh Allen edge over Stroud in pick-em environment"}, {type:"parlay", market:"SGP", line:"Bills ML + game OVER 44.5 (min +220 conditional)", stake:6, confidence:3, reason:"Bills offense drives both legs"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "HOU +3 $12 conditional -110 + SGP HOU ML + game UNDER 46.5 $8 conditional +200. Projected Texans 24-20 (contrarian). Hook underdog shape (3-0 in study).", bets: [{type:"straight", market:"Spread", line:"Houston Texans +3 (min -110 conditional)", stake:12, confidence:5, reason:"Hook across key number 3 on home team, Stroud healthy vs BUF road"}, {type:"sgp", market:"SGP", line:"HOU ML + game UNDER 46.5 (min +200 conditional)", stake:8, confidence:4, reason:"Home upset in low-scoring defensive struggle"}] },
      Gemini: { version: "EXPIRED", total_stake: 0, reserve: 20, summary: "No response submitted before 1:00 PM ET kickoff. Pre-game eligibility expired.", bets: [] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 36, homeScore: 31,
      source: "https://www.espn.com/nfl/game/_/gameId/401872660",
      note: "Bills 36, Texans 31. Total 67. BUF won by 5, covered -1.5. OVER 44.5 wins by 22.5.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "BUF won by 5, covered -1.5", odds: -110, profit: 12.73 },
          { outcome: "WIN", actual: "BUF ML + 67 total OVER 44.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "BUF won by 5, HOU +3 lost", odds: -110, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP both legs failed - HOU lost, 67 total OVER 46.5", odds: 200, profit: -8.00 }
        ],
        Gemini: []
      }
    }
  },
  {
    week: 1, gameId: "dolphins-raiders", label: "Dolphins at Raiders",
    away: "Miami Dolphins", home: "Las Vegas Raiders",
    kickoff: "2026-09-13T16:25:00-04:00", kickoffDisplay: "Sun Sep 13, 4:25 PM ET",
    venue: "Allegiant Stadium, Las Vegas, NV", network: "FOX",
    line_snapshot: { spread: "LV -3", total: 42.5, moneyline: "LV -155 / MIA +130", source: "FanDuel via Codex research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872928",
    responseFolder: "Docs/Responses/2026/week-01/game-11-dolphins-raiders/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Raiders -3 $14 conditional -110 + SGP Raiders ML + game OVER 39.5 $6 conditional +220.", bets: [{type:"straight", market:"Spread", line:"Las Vegas Raiders -3 (min -110 conditional)", stake:14, confidence:6, reason:"LV home with Cousins/Jeanty vs MIA road with QB uncertainty"}, {type:"parlay", market:"SGP", line:"Raiders ML + game OVER 39.5 (min +220 conditional)", stake:6, confidence:3, reason:"LV offensive script"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "LV Raiders ML $12 conditional -140 + SGP LV ML + Jeanty OVER 15.5 rush att $8 conditional +140. Volume prop on winning side (corrected from Game 2 Kyren pattern).", bets: [{type:"straight", market:"Moneyline", line:"LV Raiders ML (min -140 conditional)", stake:12, confidence:6, reason:"LV home Cousins/Jeanty stability vs MIA QB uncertainty"}, {type:"sgp", market:"SGP", line:"LV ML + Jeanty OVER 15.5 rush att (min +140 conditional)", stake:8, confidence:5, reason:"Volume-anchored rush attempts on projected winning side (Game 2 Kyren correction: Kyren was losing side; Jeanty projected winning)"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "Miami +3.5 $12 reference_market DK -115 + SGP UNDER 40.5 + Achane OVER 68.5 rush yds $8 conditional +185 target. Contrarian road-dog take: Bowers OUT thesis. 9th fabricated GitHub raw fetch pattern documented. SGP leg 2 is single-player OVER family (6+ S1 losses). Also fabricated 'Fernando Mendoza Heisman #1 pick backup QB' claim. Grading concerns inline.", bets: [{type:"straight", market:"Spread", line:"Miami Dolphins +3.5 (DK reference_market -115)", stake:12, confidence:6, reason:"Bowers OUT limits Cousins; Achane controls tempo"}, {type:"parlay", market:"SGP", line:"UNDER 40.5 + Achane OVER 68.5 rush yds (min +160 conditional, target +185)", stake:8, confidence:4, reason:"Low-total game script feeds Achane volume; single-player OVER family flagged"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 13, homeScore: 27,
      source: "https://www.espn.com/nfl/game/_/gameId/401872928",
      note: "Raiders 27, Dolphins 13. LV won by 14. Total 40. Jeanty 23 rush att, Achane 36 rush yds. Cousins 3 pass TDs (2 to Jeanty rec).",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "LV won by 14, covered -3", odds: -110, profit: 12.73 },
          { outcome: "WIN", actual: "LV ML + 40 total OVER 39.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "WIN", actual: "LV won outright, ML wins", odds: -140, profit: 8.57 },
          { outcome: "WIN", actual: "LV ML + Jeanty 23 rush att OVER 15.5", odds: 140, profit: 11.20 }
        ],
        Gemini: [
          { outcome: "LOSS", actual: "LV won by 14, MIA +3.5 lost", odds: -115, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP Achane 36 rush yds < 68.5 (UNDER 40.5 hit)", odds: 185, profit: -8.00 }
        ]
      }
    }
  },
  {
    week: 1, gameId: "packers-vikings", label: "Packers at Vikings",
    away: "Green Bay Packers", home: "Minnesota Vikings",
    kickoff: "2026-09-13T16:25:00-04:00", kickoffDisplay: "Sun Sep 13, 4:25 PM ET",
    venue: "U.S. Bank Stadium, Minneapolis, MN", network: "CBS",
    line_snapshot: { spread: "MIN -1.5 to -4", total: 42.5, moneyline: "MIN -140 / GB +120", source: "FanDuel via research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872927",
    responseFolder: "Docs/Responses/2026/week-01/game-12-packers-vikings/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Vikings -1.5 $14 conditional -110 + SGP Vikings ML + game OVER 46.5 $6 conditional +220.", bets: [{type:"straight", market:"Spread", line:"Minnesota Vikings -1.5 (min -110 conditional)", stake:14, confidence:6, reason:"MIN home with GB decimated"}, {type:"parlay", market:"SGP", line:"Vikings ML + game OVER 46.5 (min +220 conditional)", stake:6, confidence:3, reason:"MIN offense script"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Vikings -4 $12 conditional -110 + SGP Vikings ML + game UNDER 42.5 $8 conditional +180. Projected Vikings 24-17. GB missing 5+ starters (Jacobs, Parsons, Musgrave). Flagged Vikings QB1 heuristic HARD ERROR (Kyler Murray listed but plays for Arizona).", bets: [{type:"straight", market:"Spread", line:"Minnesota Vikings -4 (min -110 conditional)", stake:12, confidence:6, reason:"GB missing RB1 Jacobs + edge Parsons + multiple DTs; MIN home with intact skill group"}, {type:"sgp", market:"SGP", line:"Vikings ML + game UNDER 42.5 (min +180 conditional)", stake:8, confidence:4, reason:"MIN 24-14 style, GB offense can't sustain without Jacobs"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "MIN -2.5 $12 reference_market -110 + SGP MIN ML (-135) + UNDER 46.5 (-110) $8 reference_market +230. CRITICAL HALLUCINATION: claims Kyler Murray is Vikings QB1 (Murray plays for Arizona; actual Vikings QB1 is McCarthy). Also fabricates that O'Connell named Murray QB1 over Wentz. 10th fabricated GitHub fetch. UNDER 46.5 line does not exist (real total 42.5). Grading concerns inline.", bets: [{type:"single", market:"Spread", line:"Minnesota Vikings -2.5 (reference_market -110)", stake:12, confidence:6, reason:"MIN home divisional favorite; GB missing Jacobs/Parsons/Banks"}, {type:"parlay", market:"SGP", line:"MIN ML (-135) + UNDER 46.5 (-110) reference +230", stake:8, confidence:4, reason:"Correlated home-fav-ML + UNDER; note UNDER line at 46.5 does not match real 42.5 total"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 22, homeScore: 39,
      source: "https://www.espn.com/nfl/game/_/gameId/401872927",
      note: "Vikings 39, Packers 22. MIN won by 17. Total 61 - shootout crushed UNDER thesis.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "MIN won by 17, covered -1.5", odds: -110, profit: 12.73 },
          { outcome: "WIN", actual: "MIN ML + 61 total OVER 46.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "WIN", actual: "MIN won by 17, covered -4", odds: -110, profit: 10.91 },
          { outcome: "LOSS", actual: "SGP UNDER 42.5 leg failed (61 total)", odds: 180, profit: -8.00 }
        ],
        Gemini: [
          { outcome: "WIN", actual: "MIN won by 17, covered -2.5", odds: -110, profit: 10.91 },
          { outcome: "LOSS", actual: "SGP UNDER 46.5 leg failed (61 total)", odds: 230, profit: -8.00 }
        ]
      }
    }
  },
  {
    week: 1, gameId: "commanders-eagles", label: "Commanders at Eagles",
    away: "Washington Commanders", home: "Philadelphia Eagles",
    kickoff: "2026-09-13T16:25:00-04:00", kickoffDisplay: "Sun Sep 13, 4:25 PM ET",
    venue: "Lincoln Financial Field, Philadelphia, PA", network: "FOX",
    line_snapshot: { spread: "PHI -3.5 to -5.5", total: 47.5, moneyline: "PHI -200 / WSH +170", source: "FanDuel via research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872929",
    responseFolder: "Docs/Responses/2026/week-01/game-13-commanders-eagles/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Eagles -5.5 $14 conditional -110 + SGP Eagles ML + game OVER 44.5 $6 conditional +220.", bets: [{type:"straight", market:"Spread", line:"Philadelphia Eagles -5.5 (min -110 conditional)", stake:14, confidence:6, reason:"PHI home decisively better"}, {type:"parlay", market:"SGP", line:"Eagles ML + game OVER 44.5 (min +220 conditional)", stake:6, confidence:3, reason:"PHI offense script"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Eagles -3.5 $12 conditional -115 + SGP Eagles ML + game OVER 47.5 $8 conditional +180. Projected PHI 27-20. Flagged Eagles RB1 heuristic (Bigsby listed, actual Saquon Barkley).", bets: [{type:"straight", market:"Spread", line:"Philadelphia Eagles -3.5 (min -115 conditional)", stake:12, confidence:6, reason:"Hurts + Barkley home vs WAS road; PHI healthy, WAS missing 2 DEs"}, {type:"sgp", market:"SGP", line:"Eagles ML + game OVER 47.5 (min +180 conditional)", stake:8, confidence:4, reason:"27-24 style with offensive script pushing total"}] },
      Gemini: { version: "EXPIRED", total_stake: 0, reserve: 20, summary: "Gemini honored pre-game eligibility rule. Response arrived 2min 6sec after 4:25 PM ET kickoff. No allocation. Positive Source Honesty signal.", bets: [] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 22, homeScore: 24,
      source: "https://www.espn.com/nfl/game/_/gameId/401872929",
      note: "Eagles 24, Commanders 22. PHI won by 2. Total 46. WAS 2-pt conversion failed late.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "PHI won by only 2, -5.5 lost", odds: -110, profit: -14.00 },
          { outcome: "WIN", actual: "PHI ML + 46 total OVER 44.5", odds: 220, profit: 13.20 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "PHI won by only 2, -3.5 lost", odds: -115, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP OVER 47.5 leg failed (46 total)", odds: 180, profit: -8.00 }
        ],
        Gemini: []
      }
    }
  },
  {
    week: 1, gameId: "cardinals-chargers", label: "Cardinals at Chargers",
    away: "Arizona Cardinals", home: "Los Angeles Chargers",
    kickoff: "2026-09-13T16:25:00-04:00", kickoffDisplay: "Sun Sep 13, 4:25 PM ET",
    venue: "SoFi Stadium, Inglewood, CA", network: "CBS",
    line_snapshot: { spread: "LAC -6.5 to -9.5", total: 46.5, moneyline: "LAC -320 / ARI +260", source: "FanDuel via research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872926",
    responseFolder: "Docs/Responses/2026/week-01/game-14-cardinals-chargers/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Chargers -9.5 $14 conditional -110 + SGP Chargers ML + game OVER 47.5 $6 conditional +220. Note: -9.5 approaches big-favorite threshold flagged as losing shape.", bets: [{type:"straight", market:"Spread", line:"Los Angeles Chargers -9.5 (min -110 conditional)", stake:14, confidence:6, reason:"LAC home, ARI depleted"}, {type:"parlay", market:"SGP", line:"Chargers ML + game OVER 47.5 (min +220 conditional)", stake:6, confidence:3, reason:"LAC offensive script"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "LAC -6.5 $12 conditional -110 + SGP LAC ML + game UNDER 44.5 $8 conditional +180. Flagged both team QB1 heuristic errors (ARI has Brissett listed but actual Kyler Murray; LAC has Lance listed but actual Herbert).", bets: [{type:"straight", market:"Spread", line:"Los Angeles Chargers -6.5 (min -110 conditional)", stake:12, confidence:6, reason:"LAC home with Herbert vs ARI depleted WR/S/CB + RB1 Q"}, {type:"sgp", market:"SGP", line:"LAC ML + game UNDER 44.5 (min +180 conditional)", stake:8, confidence:4, reason:"LAC controls low-scoring game"}] },
      Gemini: { version: "EXPIRED", total_stake: 0, reserve: 20, summary: "No response submitted before 4:25 PM ET kickoff. Pre-game eligibility expired.", bets: [] }
    },
    result: {
      status: "final", verified_at: "2026-09-13", awayScore: 26, homeScore: 14,
      source: "https://www.espn.com/nfl/game/_/gameId/401872926",
      note: "Cardinals 26, Chargers 14. ARI won outright as underdog. Total 40. LAC laid an egg at home.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "LAC lost outright, -9.5 way off", odds: -110, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP LAC ML leg failed (ARI won 26-14)", odds: 220, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "LAC lost outright, -6.5 lost", odds: -110, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP LAC ML leg failed (ARI won 26-14)", odds: 180, profit: -8.00 }
        ],
        Gemini: []
      }
    }
  },
  {
    week: 1, gameId: "cowboys-giants", label: "Cowboys at Giants (SNF)",
    away: "Dallas Cowboys", home: "New York Giants",
    kickoff: "2026-09-13T20:20:00-04:00", kickoffDisplay: "Sun Sep 13, 8:20 PM ET",
    venue: "MetLife Stadium, East Rutherford, NJ", network: "NBC",
    line_snapshot: { spread: "DAL -2.5 to -3", total: 48.5, moneyline: "DAL -140 / NYG +120", source: "FanDuel via research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872930",
    responseFolder: "Docs/Responses/2026/week-01/game-15-cowboys-giants/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Cowboys -2.5 $14 conditional -110 + SGP Cowboys ML + game OVER 48.5 $6 conditional +220.", bets: [{type:"straight", market:"Spread", line:"Dallas Cowboys -2.5 (min -110 conditional)", stake:14, confidence:6, reason:"DAL road favorite through key number"}, {type:"parlay", market:"SGP", line:"Cowboys ML + game OVER 48.5 (min +220 conditional)", stake:6, confidence:3, reason:"DAL offensive script"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Cowboys -3 $12 conditional -115 + SGP Cowboys ML + Cowboys TT OVER 24.5 $8 conditional +150. Projected DAL 27-17. Applied W11 P11 Cowboys shape (same franchise). Flagged Giants QB1 heuristic uncertainty (Jake Haener listed).", bets: [{type:"straight", market:"Spread", line:"Dallas Cowboys -3 (min -115 conditional)", stake:12, confidence:6, reason:"DAL healthy Prescott + Pickens vs NYG QB uncertainty and Nabers Q"}, {type:"sgp", market:"SGP", line:"Cowboys ML + Cowboys TT OVER 24.5 (min +150 conditional)", stake:8, confidence:4, reason:"W11 P11 Cowboys shape reapplied with SGP concentration awareness (Game 2 lesson - sized to $8)"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "DAL -3.0 $12 reference_market DK -105 + SGP DAL ML (-158) + OVER 47.5 (-110) $8 reference_market +210. 11th fabricated GitHub fetch. HALLUCINATION: Quinnen Williams claimed as Cowboys DT1 (plays for NYJ). Internal line inconsistency (DK snippet 48.5 vs SGP 47.5). Grading concerns inline.", bets: [{type:"single", market:"Spread", line:"Dallas Cowboys -3.0 (reference_market DK -105)", stake:12, confidence:6, reason:"DAL projected win by 7; road favorite at key number"}, {type:"parlay", market:"SGP", line:"DAL ML (-158) + OVER 47.5 (-110) reference +210", stake:8, confidence:4, reason:"Correlated favorite ML + OVER; note internal line inconsistency"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-14", awayScore: 20, homeScore: 28,
      source: "https://www.espn.com/nfl/game/_/gameId/401872930",
      note: "Giants 28, Cowboys 20. NYG upset in Harbaugh debut. Total 48. All DAL-side tickets bust.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "DAL lost outright by 8, -2.5 lost", odds: -110, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP DAL ML leg failed (NYG 28-20)", odds: 220, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "DAL lost outright by 8, -3 lost", odds: -115, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP DAL ML leg failed (also DAL scored only 20, TT UNDER 24.5)", odds: 150, profit: -8.00 }
        ],
        Gemini: [
          { outcome: "LOSS", actual: "DAL lost outright by 8, -3.0 lost", odds: -105, profit: -12.00 },
          { outcome: "LOSS", actual: "SGP DAL ML leg failed (OVER 47.5 hit but ML failed)", odds: 210, profit: -8.00 }
        ]
      }
    }
  },
  {
    week: 1, gameId: "broncos-chiefs", label: "Broncos at Chiefs (MNF)",
    away: "Denver Broncos", home: "Kansas City Chiefs",
    kickoff: "2026-09-14T20:15:00-04:00", kickoffDisplay: "Mon Sep 14, 8:15 PM ET",
    venue: "GEHA Field at Arrowhead Stadium, Kansas City, MO", network: "ABC/ESPN",
    line_snapshot: { spread: "KC -2.5 to -3.5", total: 43.5, moneyline: "KC -150 / DEN +130", source: "FanDuel via research, 2026-09-13" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872931",
    responseFolder: "Docs/Responses/2026/week-01/game-16-broncos-chiefs/",
    status: "locked", locked_at: "2026-09-13", prompt_template: "forced-selection v3.0",
    models: {
      ChatGPT: { version: "Codex CLI", total_stake: 20, reserve: 0, summary: "Chiefs -2.5 $14 conditional -110 + SGP Chiefs ML + game OVER 43.5 $6 conditional +220.", bets: [{type:"straight", market:"Spread", line:"Kansas City Chiefs -2.5 (min -110 conditional)", stake:14, confidence:6, reason:"KC home MNF opener"}, {type:"parlay", market:"SGP", line:"Chiefs ML + game OVER 43.5 (min +220 conditional)", stake:6, confidence:3, reason:"KC offensive script"}] },
      Claude: { version: "Claude Code", total_stake: 20, reserve: 0, summary: "Chiefs -3.5 $12 conditional -110 + SGP Chiefs ML + game UNDER 44.5 $8 conditional +180. Flagged Broncos QB1 heuristic HARD error (Sam Ehlinger listed, actual Bo Nix).", bets: [{type:"straight", market:"Spread", line:"Kansas City Chiefs -3.5 (min -110 conditional)", stake:12, confidence:6, reason:"KC home MNF, hook through key number 3; Bo Nix (year 2) at road"}, {type:"sgp", market:"SGP", line:"Chiefs ML + game UNDER 44.5 (min +180 conditional)", stake:8, confidence:4, reason:"24-17 style KC win, defenses hold OVER"}] },
      Gemini: { version: "Gemini web", total_stake: 20, reserve: 0, summary: "DEN +2.5 $12 reference_market +100 + SGP KC ML (-147) + UNDER 43.5 (-112) $8 reference_market +220. Coherent hedge: KC wins narrow, DEN covers hook, game stays UNDER. 12th fabricated GitHub fetch. reference_market label is honest (odds from thesportsgeek/usatoday, not Bovada).", bets: [{type:"straight", market:"Spread", line:"Denver Broncos +2.5 (reference_market +100)", stake:12, confidence:5, reason:"KC wins narrow, DEN covers hook"}, {type:"parlay", market:"SGP", line:"KC ML (-147) + UNDER 43.5 (-112) reference +220", stake:8, confidence:4, reason:"Correlated home-fav-ML + UNDER on defensive divisional opener"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-15", awayScore: 10, homeScore: 31,
      source: "https://www.espn.com/nfl/game/_/gameId/401872931",
      note: "Chiefs 31, Broncos 10. KC won by 21. Total 41 (UNDER 43.5/44.5). DEN +2.5 dog busted.",
      grades: {
        ChatGPT: [
          { outcome: "WIN", actual: "KC won by 21, covered -2.5", odds: -110, profit: 12.73 },
          { outcome: "LOSS", actual: "SGP OVER 43.5 leg failed (41 total)", odds: 220, profit: -6.00 }
        ],
        Claude: [
          { outcome: "WIN", actual: "KC won by 21, covered -3.5", odds: -110, profit: 10.91 },
          { outcome: "WIN", actual: "KC ML + 41 total UNDER 44.5", odds: 180, profit: 14.40 }
        ],
        Gemini: [
          { outcome: "LOSS", actual: "KC won by 21, DEN +2.5 lost", odds: 100, profit: -12.00 },
          { outcome: "WIN", actual: "KC ML + 41 total UNDER 43.5", odds: 220, profit: 17.60 }
        ]
      }
    }
  },
  {
    week: 3, gameId: "falcons-packers", label: "Falcons at Packers (TNF)",
    away: "Atlanta Falcons", home: "Green Bay Packers",
    kickoff: "2026-09-24T20:15:00-04:00", kickoffDisplay: "Thu Sep 24, 8:15 PM ET",
    venue: "Lambeau Field, Green Bay, WI", network: "Prime Video (TNF)",
    line_snapshot: { spread: "GB -4.5 to -7.5 (walked)", total: 42.5, moneyline: "GB -245 / ATL +200", source: "DraftKings/ESPN Lines/CBS Sports composite captured 2026-09-24 pre-game" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872948",
    responseFolder: "Docs/Responses/2026/week-03/game-01-falcons-packers/",
    status: "locked", locked_at: "2026-09-24", prompt_template: "forced-selection v3.3",
    models: {
      ChatGPT: { version: "Codex CLI (self-reported GPT-5.6)", total_stake: 20, reserve: 0, summary: "Packers -4.5 $14 reference_market DK -115 + SGP Packers ML + UNDER 48.5 $6 conditional +170. Took the short-favorite spread (line at -4.5 at DraftKings capture, below the -6.5 big-favorite trap threshold). No player prop: backfield/inactive uncertainty failed a clean roster-role case. Self-reflection reported W1 '0-2 funded, Patriots-Seahawks reserve, -$20' and W2 '6-2 published +$50.99' matching the study ledger.", bets: [{type:"straight", market:"Spread", line:"Green Bay Packers -4.5 (reference_market DraftKings -115)", stake:14, confidence:6, reason:"Home GB controls a short ATL offense; short-favorite side of the trap threshold (-4.5, not -6.5+)"}, {type:"sgp", market:"SGP", line:"Packers ML + game UNDER 48.5 (conditional min +170)", stake:6, confidence:4, reason:"Controlled GB win + game stays UNDER 48.5; correlated"}] },
      Claude: { version: "Claude Code (claude-opus-4-7)", total_stake: 20, reserve: 0, summary: "UNDER 42.5 $8 reference_market DK -110 (via ESPN Lines) + SGP Packers ML + game UNDER 42.5 $12 conditional +150. Skipped the spread (line walked -4.5 to -7.5, big-favorite trap per own W1/W2 record). Skipped all player props: Bijan trailing-side ceiling, Lloyd RBBC uncertainty, Watson ceiling, Kraft Q, London target-tree not stable off Penix first-game-back. Concentrated conviction on the low-scoring TNF grind script. Retro-record fabrication axis clean; Roster Sanity Gate results included.", bets: [{type:"straight", market:"Total", line:"UNDER 42.5 (reference_market DraftKings via ESPN Lines -110)", stake:8, confidence:6, reason:"GB missing 2 OL starters (Banks, Bako-Bewele); Penix first live action post-ACL; short TNF week; both offenses under-tuned"}, {type:"parlay", market:"SGP", line:"Packers ML + game UNDER 42.5 (conditional +150)", stake:12, confidence:4, reason:"Correlated home-fav ML + UNDER on a defensive-leaning script; same shape as W1 MNF Chiefs ML + UNDER 44.5 hit"}] },
      Gemini: { version: "Gemini web (self-reported gemini-2.5-flash / '3.6 flash extended')", total_stake: 20, reserve: 0, summary: "UNDER 43.5 $10 reference_market DK -110 + SGP Green Bay Packers ML + Matthew Golden OVER 3.5 receptions $10 reference_market DK +180. Volume-anchored WR target-share leg on projected winner (Golden 26.1% target share, Reed OUT). Roster Sanity Gate results provided. Self-reflection reported W1 7-8 +$12.10 / W2 8-7 +$22.25 which does NOT match the study ledger (Gemini W1 12-9 +$56.18, W2 15-15 +$34.35) — Source Honesty axis flag on self-record fabrication carries over from W2.", bets: [{type:"straight", market:"Total", line:"UNDER 43.5 (reference_market DraftKings -110)", stake:10, confidence:6, reason:"ATL 8.0 PPG w/ Penix first live game post-ACL; GB O-line depleted; both teams UNDER-leaning"}, {type:"parlay", market:"SGP", line:"Green Bay Packers ML (-250) + Matthew Golden OVER 3.5 Rec (-135) (reference DK +180)", stake:10, confidence:4, reason:"Correlated home-fav win + WR target-share funnel with Reed OUT vs ATL secondary missing Terrell"}] }
    },
    result: {
      status: "final", verified_at: "2026-09-25", awayScore: 35, homeScore: 14,
      source: "https://www.espn.com/nfl/boxscore/_/gameId/401872948",
      note: "Falcons 35, Packers 14. ATL outright upset as +4.5 to +7.5 dog. Total 49 blew past every UNDER line (42.5 / 43.5 / 48.5 all LOSS). Penix 18/25 for 256 pass yds 1 TD 1 INT. Bijan Robinson 29 rush att for 194 yds and 2 TDs — the biggest volume-anchored line on the board and every model rejected it. Drake London 9/194. Jordan Love 28/53 312 pass yds 2 TDs 1 INT in a garbage-time volume line. Golden 5/100 recs (Gemini's O3.5 leg hit but SGP still failed on GB ML). MarShawn Lloyd 4 att for 11 yds — Jacobs's absence and Reed OUT collapsed GB's script.",
      grades: {
        ChatGPT: [
          { outcome: "LOSS", actual: "GB lost outright by 21; -4.5 crushed", odds: -115, profit: -14.00 },
          { outcome: "LOSS", actual: "SGP: GB ML lost + UNDER 48.5 failed (49 total); both legs failed", odds: 170, profit: -6.00 }
        ],
        Claude: [
          { outcome: "LOSS", actual: "Total 49 OVER 42.5", odds: -110, profit: -8.00 },
          { outcome: "LOSS", actual: "SGP: GB ML lost + UNDER 42.5 failed; both legs failed", odds: 150, profit: -12.00 }
        ],
        Gemini: [
          { outcome: "LOSS", actual: "Total 49 OVER 43.5", odds: -110, profit: -10.00 },
          { outcome: "LOSS", actual: "SGP: Golden O3.5 leg hit (5 recs) but GB ML lost; SGP fails", odds: 180, profit: -10.00 }
        ]
      }
    }
  }
];

function nflPredictions2026Summary() {
  return NFL_MODELS.map(function (model) {
    var totalStake = 0, totalReserve = 0, totalBets = 0, gamesWithBets = 0;
    NFL_PREDICTIONS_2026.forEach(function (game) {
      var m = game.models[model];
      if (!m) return;
      totalStake += m.total_stake;
      totalReserve += m.reserve;
      totalBets += m.bets.length;
      if (m.bets.length > 0) gamesWithBets += 1;
    });
    return {
      model: model,
      totalStake: totalStake,
      totalReserve: totalReserve,
      totalBets: totalBets,
      gamesWithBets: gamesWithBets,
      totalGames: NFL_PREDICTIONS_2026.length
    };
  });
}

// Historical adapter kept for pending-only games. Once a game is promoted
// into NFL_GAMES + NFL_BETS in assets/nfl-data.js, its ledger rows live
// there and this adapter skips it to avoid double-counting. See
// Docs/2026/iteration-system.md entry 2026-09-11.
function nflWeekTracker2026(week) {
  var wk = week || 1;
  var perModel = {};
  NFL_MODELS.forEach(function (m) { perModel[m] = { wins: 0, losses: 0, pushes: 0, pl: 0, staked: 0, gamesGraded: 0, gamesExpired: 0, gamesPending: 0 }; });
  var gamesFinal = 0, gamesTotal = 0;
  // Games promoted into NFL_GAMES also have their bets tracked in NFL_BETS; count those from NFL_BETS.
  var promotedIds = {};
  if (typeof NFL_GAMES !== "undefined") {
    NFL_GAMES.forEach(function (g) {
      if (g.week === wk && g.season === "2026") {
        promotedIds[g.id] = true;
        gamesTotal += 1;
        gamesFinal += 1;
      }
    });
  }
  if (typeof NFL_BETS !== "undefined") {
    NFL_BETS.forEach(function (b) {
      if (b.season !== "2026" || b.week !== wk) return;
      var slot = perModel[b.model];
      if (!slot) return;
      slot.staked += b.stake || 0;
      slot.gamesGraded = slot.gamesGraded;
      if (b.outcome === 'WIN') slot.wins += 1;
      else if (b.outcome === 'LOSS') slot.losses += 1;
      else if (b.outcome === 'PUSH') slot.pushes += 1;
      if (typeof b.pl === 'number') slot.pl += b.pl;
    });
    // Recount gamesGraded from promoted set per model.
    NFL_MODELS.forEach(function (m) {
      var seen = {};
      NFL_BETS.forEach(function (b) { if (b.season === "2026" && b.week === wk && b.model === m) seen[b.game] = true; });
      perModel[m].gamesGraded = Object.keys(seen).length;
    });
  }
  NFL_PREDICTIONS_2026.forEach(function (game) {
    if (game.week !== wk) return;
    if (promotedIds[game.gameId]) return;
    gamesTotal += 1;
    var isFinal = game.result && game.result.status === 'final';
    if (isFinal) gamesFinal += 1;
    NFL_MODELS.forEach(function (m) {
      var mp = game.models && game.models[m];
      if (!mp) return;
      var slot = perModel[m];
      if (mp.version === 'EXPIRED' || (mp.total_stake === 0 && mp.bets.length === 0 && !isFinal)) {
        if (mp.version === 'EXPIRED') slot.gamesExpired += 1;
        return;
      }
      slot.staked += mp.total_stake || 0;
      if (!isFinal) { slot.gamesPending += 1; return; }
      slot.gamesGraded += 1;
      var grades = (game.result.grades && game.result.grades[m]) || [];
      grades.forEach(function (g) {
        if (!g) return;
        if (g.outcome === 'WIN') slot.wins += 1;
        else if (g.outcome === 'LOSS') slot.losses += 1;
        else if (g.outcome === 'PUSH') slot.pushes += 1;
        if (typeof g.profit === 'number') slot.pl += g.profit;
      });
    });
  });
  return { week: wk, gamesTotal: gamesTotal, gamesFinal: gamesFinal, models: perModel };
}

function nflSeasonTracker2026() {
  var perModel = {};
  NFL_MODELS.forEach(function (m) { perModel[m] = { wins: 0, losses: 0, pushes: 0, pl: 0, staked: 0, gamesGraded: 0, gamesExpired: 0, gamesPending: 0 }; });
  var weeks = {};
  NFL_PREDICTIONS_2026.forEach(function (g) { weeks[g.week] = true; });
  var gamesFinal = 0, gamesTotal = 0;
  Object.keys(weeks).forEach(function (wk) {
    var t = nflWeekTracker2026(parseInt(wk, 10));
    gamesFinal += t.gamesFinal;
    gamesTotal += t.gamesTotal;
    NFL_MODELS.forEach(function (m) {
      var w = t.models[m], s = perModel[m];
      s.wins += w.wins; s.losses += w.losses; s.pushes += w.pushes;
      s.pl += w.pl; s.staked += w.staked;
      s.gamesGraded += w.gamesGraded; s.gamesExpired += w.gamesExpired; s.gamesPending += w.gamesPending;
    });
  });
  return { gamesTotal: gamesTotal, gamesFinal: gamesFinal, models: perModel };
}

function nflGradedBets2026() {
  var promotedIds = (typeof NFL_GAMES !== "undefined")
    ? NFL_GAMES.reduce(function (set, g) { set[g.id] = true; return set; }, {})
    : {};
  return NFL_PREDICTIONS_2026.flatMap(function (game) {
    if (!game.result || game.result.status !== "final") return [];
    if (promotedIds[game.gameId]) return [];
    return Object.keys(game.models).flatMap(function (model) {
      return game.models[model].bets.map(function (bet, index) {
        var grade = game.result.grades[model][index];
        return {
          season: "2026", week: game.week, model: model,
          prompt: model === "Gemini" ? "github-strength v1.0" : "local-strength v1.0",
          game: game.label, betType: bet.market, recommendation: bet.line,
          actual: grade.actual, stake: bet.stake, outcome: grade.outcome, pl: grade.profit
        };
      });
    });
  });
}
