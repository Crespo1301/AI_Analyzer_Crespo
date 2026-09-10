const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { validate } = require('./validate-priced-response');
const bet = {
  line: 'Example under 44.5', stake: 7, odds_american: -110,
  sportsbook: 'Fixture only', odds_source: 'Supplied test snapshot',
  odds_captured_at: '2026-09-10T10:00:00-04:00', max_loss: 7,
  potential_net_profit: 6.36, potential_total_return: 13.36,
  break_even_probability: 110/210, estimated_win_probability: .55,
  value_reasoning: 'Fixture only, not a real forecast', settlement_rules: 'unknown'
};
const response = {prompt_version:'1.1', bankroll:20, total_stake:7, reserve:13, bets:[bet], unpriced_candidates:[]};
assert.ok(validate(response));
const change = fields => ({...response, bets:[{...bet,...fields}]});
assert.throws(()=>validate(change({odds_american:undefined})));
assert.throws(()=>validate(change({potential_total_return:6.36})));
assert.throws(()=>validate(change({odds_captured_at:'2026-09-10'})));
assert.throws(()=>validate({...response,reserve:20}));
assert.ok(validate({...response,total_stake:0,reserve:20,bets:[]}));
assert.ok(validate(change({odds_american:150,potential_net_profit:10.5,potential_total_return:17.5,break_even_probability:.4})));
for (const file of ['shared-baseline.md','local-strength-claude-codex.md','github-strength-gemini.md']) {
  const text = fs.readFileSync(path.join(__dirname, '../Prompts/2026/templates', file), 'utf8');
  assert.ok(text.includes('"prompt_version": "1.1"'));
  for (const field of ['odds_american', 'odds_source', 'odds_captured_at', 'potential_net_profit', 'potential_total_return', 'unpriced_candidates']) assert.ok(text.includes(field), file + ': ' + field);
}
console.log('Payout checks passed: positive/negative odds, no-bet, missing fields, timestamps and bankroll errors.');
