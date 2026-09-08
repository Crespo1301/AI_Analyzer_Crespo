/*
 * NFL Betting AI Evaluation - 2026 season pending predictions.
 *
 * This file holds MODEL PREDICTIONS that have not been graded yet. Each entry
 * captures what ChatGPT, Claude, and Gemini said pre-kickoff, including
 * timestamp so the record is auditable (the picks existed before the game).
 *
 * Lifecycle: as soon as a game plays and gets graded, the game+bets get
 * promoted into NFL_GAMES / NFL_BETS in assets/nfl-data.js and removed from
 * (or marked "played" here). This file stays a pre-game archive so the
 * picks are not silently altered after outcomes are known.
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
    line_snapshot: { spread: "SEA -3.5", total: 44.5, moneyline: "SEA -170 / NE +142", source: "ESPN preview" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872656",
    responseFolder: "Docs/Responses/2026/week-01/game-01-patriots-seahawks/",
    status: "pending",
    locked_at: "2026-09-08",
    prompt_template: "bankroll-optimized",
    models: {
      ChatGPT: {
        version: "GPT 5.5",
        total_stake: 0,
        reserve: 20,
        summary: "No demonstrated edge at supplied prices. Ran break-even math on both moneylines, both fell short. Reserved full $20. Also flagged two factual errors in prompt (Maye season count, Lumen turf).",
        bets: []
      },
      Claude: {
        version: "Opus 4.7",
        total_stake: 15,
        reserve: 5,
        summary: "Low-scoring one-score game thesis. Correlated positioning on Under + underdog covering hook.",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 44.5", stake: 7, confidence: 6, reason: "Week 1 rust + Pats backup C + Seattle preseason offense stalled" },
          { type: "straight", market: "Spread", line: "NE +3.5", stake: 6, confidence: 6, reason: "Hook past key #3, Vrabel road dog, Gonzalez erases WR1" },
          { type: "sgp", legs: [{ market: "Total", line: "UNDER 44.5" }, { market: "Spread", line: "NE +3.5" }], stake: 2, confidence: 4, reason: "Correlated: low-scoring one-score game" }
        ]
      },
      Gemini: {
        version: "3.1",
        total_stake: 15,
        reserve: 5,
        summary: "High-confidence SEA dominance thesis. Paid the -170 juice on Seattle ML plus stacked SGP on favorite covering + Under.",
        bets: [
          { type: "straight", market: "Moneyline", line: "SEA -170", stake: 5, confidence: 9, reason: "SEA advantage in trench play with Pats missing starting C" },
          { type: "sgp", legs: [{ market: "Spread", line: "SEA -3.5" }, { market: "Total", line: "UNDER 44.5" }], stake: 10, confidence: 7, reason: "SEA controls LOS in a comfortable low-scoring win" }
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
    kickoffDisplay: "Thu Sep 10, 8:35 PM ET (Fri morning Melbourne)",
    venue: "Melbourne Cricket Ground, Melbourne, Australia",
    neutralSite: "Melbourne, Australia (NFL Melbourne Game, international neutral site)",
    network: "Netflix",
    line_snapshot: { spread: "LAR -2.5", total: 48.5, moneyline: "SF +164 / LAR -198", source: "DraftKings via ESPN preview" },
    espn: "https://www.espn.com/nfl/boxscore/_/gameId/401872657",
    responseFolder: "Docs/Responses/2026/week-01/game-02-niners-rams/",
    status: "pending",
    locked_at: "2026-09-08",
    prompt_template: "bankroll-optimized",
    models: {
      ChatGPT: {
        version: "GPT 5.5",
        total_stake: 1,
        reserve: 19,
        summary: "Marginal +3.5% edge on SF +164 (39.2% actual vs 37.88% break-even). Sized to the edge, not the conviction. Also cited Rams team site to fill kickoff-time gap in the prompt.",
        bets: [
          { type: "straight", market: "Moneyline", line: "SF +164", stake: 1, confidence: 4, reason: "39.2% ESPN estimate exceeds 37.88% break-even, ~3.5% theoretical edge" }
        ]
      },
      Claude: {
        version: "Opus 4.7",
        total_stake: 15,
        reserve: 5,
        summary: "Same allocation pattern as game 1: Under + underdog +3.5 + correlated SGP. Thesis: jet-lagged international game, both offenses banged up.",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 48.5", stake: 7, confidence: 6, reason: "International Week 1 unders, both teams missing top skill talent" },
          { type: "straight", market: "Spread", line: "SF +3.5", stake: 6, confidence: 6, reason: "Hook past key #3, neutral site erases Rams home edge" },
          { type: "sgp", legs: [{ market: "Total", line: "UNDER 48.5" }, { market: "Spread", line: "SF +3.5" }], stake: 2, confidence: 4, reason: "Correlated: sloppy low-scoring one-score game" }
        ]
      },
      Gemini: {
        version: "3.1",
        total_stake: 15,
        reserve: 5,
        summary: "Under thesis with heavy concentration on Rams-controls-tempo scenario. Paired Under with favorite (LAR -2.5) in SGP.",
        bets: [
          { type: "straight", market: "Total", line: "UNDER 48.5", stake: 8, confidence: 8, reason: "Travel + injury flags on McCaffrey, Kittle, Nacua suppress efficiency" },
          { type: "sgp", legs: [{ market: "Total", line: "UNDER 48.5" }, { market: "Spread", line: "LAR -2.5" }], stake: 7, confidence: 6, reason: "LAR leverages better health in low-scoring win" }
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
