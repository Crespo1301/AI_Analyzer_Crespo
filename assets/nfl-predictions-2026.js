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
      Gemini: { version: "Gemini web", total_stake: 0, reserve: 20, summary: "EXPIRED - Gemini honored pre-game eligibility rule. Response arrived 2min 6sec after 4:25 PM ET kickoff. No allocation. Positive Source Honesty signal.", bets: [] }
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
      Gemini: { version: "pending", total_stake: 0, reserve: 20, summary: "Awaiting v3.0 response.", bets: [] }
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
