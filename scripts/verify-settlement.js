const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'assets/nfl-predictions-2026.js'), 'utf8'), context);
const game = context.NFL_PREDICTIONS_2026.find(g => g.gameId === 'patriots-seahawks');
const result = game.result;
assert.equal(result.status, 'final');
assert.equal(result.awayScore + result.homeScore, 23);
assert.ok(result.awayScore + result.homeScore < 44.5);
assert.ok(result.awayScore + 3.5 > result.homeScore);
assert.ok(result.kuppReceptions < 4.5);
for (const [name, model] of Object.entries(game.models)) {
  assert.equal(model.total_stake + model.reserve, 20);
  assert.equal(model.bets.reduce((sum, b) => sum + b.stake, 0), model.total_stake);
  assert.equal(result.grades[name].length, model.bets.length);
}
assert.equal(result.grades.Claude.filter(g => g.profit === null).length, 3);
assert.equal(result.grades.Gemini[0].profit, Math.round(12 * 100 / 118 * 100) / 100);
assert.equal(result.grades.ChatGPT.length, 0);
assert.equal(context.nflGradedBets2026().length, 4);
assert.equal(context.nflGradedBets2026().filter(b => b.outcome === 'WIN').length, 4);
console.log('Settlement checks passed: score, spread, prop, bankrolls, missing prices and no-bet exclusion.');
