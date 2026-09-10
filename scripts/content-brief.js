#!/usr/bin/env node
// Emits a factual draft from saved predictions. It never sends or publishes.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'assets/nfl-predictions-2026.js'), 'utf8'), context);
const game = context.NFL_PREDICTIONS_2026.find(game => game.gameId === process.argv[2]);
if (!game) { console.error('Pass a recorded game ID, for example: patriots-seahawks'); process.exit(1); }
console.log(`# Draft: ${game.label}\n\nWeek ${game.week}. ${game.kickoffDisplay}.\nHypothetical budget: $20 per model. Recorded results do not establish predictive skill.\n`);
if (game.result) {
  console.log(`Final: ${game.away} ${game.result.awayScore}, ${game.home} ${game.result.homeScore}.\nCooper Kupp: ${game.result.kuppReceptions} receptions.\n${game.result.payoutNote}\nSource: ${game.result.source}\n`);
  for (const [model, grades] of Object.entries(game.result.grades)) {
    console.log(`${model}: ${grades.filter(g => g.outcome === 'WIN').length} wins from ${grades.length} bets${grades.length ? '' : ' (no bet)'}.`);
  }
}
for (const [name, model] of Object.entries(game.models)) {
  console.log(`## ${name}\n${model.version}\nExposure: $${model.total_stake}. Reserve: $${model.reserve}.`);
  for (const bet of model.bets) console.log(`- ${bet.line || (bet.legs || []).map(leg => leg.line).join(' + ')} | $${bet.stake} | Model confidence: ${bet.confidence}/10`);
  if (!model.bets.length) console.log('- No bet. Full reserve is a recorded decision.');
  console.log('');
}
console.log(`Read the analysis: https://crespo1301.github.io/AI_Analyzer_Crespo/Sports_Pages/${game.gameId}.html\nRaw responses: https://github.com/Crespo1301/AI_Analyzer_Crespo/tree/main/${game.responseFolder}\n\nBefore publishing: verify the source records and lock timing. After the game: verify outcomes, then compare reasoning separately. Improvement is a question to measure, not an assumed trend.`);
