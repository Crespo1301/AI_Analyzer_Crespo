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

var NFL_PREDICTIONS_2026 = [];

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
