/*
 * AI Analyzer, 2026-27 NFL season. Pre-game model predictions.
 *
 * This file holds MODEL PREDICTIONS that have not been graded yet. Each entry
 * captures what ChatGPT, Claude, and Gemini said pre-kickoff, including the
 * timestamp so the record is auditable (picks existed before the game).
 *
 * Lifecycle: as soon as a game plays and gets graded, the game + bets get
 * promoted into NFL_GAMES / NFL_BETS in assets/nfl-data.js and removed from
 * (or marked "played" in) this file. This file stays a pre-game archive so
 * picks are not silently altered after outcomes are known.
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
    locked_at: "2026-09-09",
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
