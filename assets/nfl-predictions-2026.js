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
        version: "GPT-6 (via Codex CLI)",
        total_stake: 0,
        reserve: 20,
        summary: "Full $20 reserved. Explicit break-even math: SEA -178 needs 64.03%, NE +150 needs 40%. Neither threshold substantiated by the researched factors, so no bet. Ran via Codex CLI with local FS access, flagged the same Seahawks QB1 roster mispick Claude did.",
        bets: []
      },
      Claude: {
        version: "claude-opus-4-7",
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
        version: "2.5 Flash",
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
        version: "GPT-6 (via Codex CLI)",
        total_stake: 20,
        reserve: 0,
        summary: "Forced-selection v2.1. Applied W11P11 team-total shape (Rams TT OVER 23.5) plus a correlated Rams ML + Rams TT OVER 23.5 SGP. Rams 27-23 projection, ~60% Rams win probability. Corrected kickoff (8:35 not 8:15) and flagged 49ers roster (Purdy > Mac Jones). Both tickets conditional; Bovada shell only, FanDuel LAR -196 exceeded fair-value price. Also caught W9 P3 finished 1-2 -$12 overall despite its OVER winning.",
        bets: [
          { type: "straight", market: "Team Total", line: "LAR Team Total OVER 23.5 (min -110 conditional)", stake: 15, confidence: 6, reason: "Stafford / Nacua / Adams / Kyren against SF DL missing Collins produces 24+ Rams points" },
          { type: "sgp", market: "SGP", line: "LAR ML + LAR Team Total OVER 23.5 (min +200 conditional)", stake: 5, confidence: 4, reason: "Positively dependent: 24+ Rams points conditional on Rams win ~70%, correlation-adjusted joint P 0.42" }
        ]
      },
      Claude: {
        version: "claude-opus-4-7",
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
        version: "2.5 Flash",
        total_stake: 20,
        reserve: 0,
        summary: "Forced-selection v2.1. Game UNDER 48.5 single + correlated SGP on Rams TT OVER 23.5 + Kyren OVER 14.5 rush att. Rams 23-20 projection. Repeat fabricated-fetch: claimed all six raw.githubusercontent.com URLs 404'd, all six actually return 200. Quoted W11 P7 line was taken from the prompt body, not a real fetch. T1 label bovada_verified is not backed by a screenshot; grading treats it as unverified. Kickoff also reported as 8:15 (actual 8:35). See prompt-corrections.md.",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 48.5 (claimed bovada_verified -110, unverified)", stake: 12, confidence: 6, reason: "International travel friction plus early-season pace reduction; matches 23-20 projection" },
          { type: "sgp", market: "SGP", line: "LAR TT OVER 23.5 + Kyren Williams OVER 14.5 rush att (min +200 conditional)", stake: 8, confidence: 4, reason: "Positively correlated: Rams lead-state keeps Kyren volume, Donald absence supports Rams scoring path" }
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

// Adapt settled predictions for the ledger without changing the historical data.
function nflGradedBets2026() {
  return NFL_PREDICTIONS_2026.flatMap(function (game) {
    if (!game.result || game.result.status !== "final") return [];
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
