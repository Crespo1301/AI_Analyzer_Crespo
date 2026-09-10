const fs = require('node:fs');
const assert = require('node:assert/strict');

function validate(response) {
  assert.equal(response.prompt_version, '1.1', 'Expected prompt v1.1');
  assert.equal(response.bankroll, 20);
  const finite = (value, name) => assert.ok(typeof value === 'number' && Number.isFinite(value), name);
  const close = (actual, expected, name) => { finite(actual, name); assert.ok(Math.abs(actual - expected) < 0.011, name); };
  let stake = 0;
  assert.ok(Array.isArray(response.bets));
  assert.ok(Array.isArray(response.unpriced_candidates));
  for (const bet of response.bets) {
    finite(bet.stake, 'stake');
    assert.ok(bet.stake > 0);
    finite(bet.odds_american, 'odds_american');
    assert.ok(Number.isInteger(bet.odds_american) && Math.abs(bet.odds_american) >= 100, 'Valid American odds required');
    for (const key of ['line', 'sportsbook', 'odds_source', 'value_reasoning', 'settlement_rules']) {
      assert.ok(typeof bet[key] === 'string' && bet[key].trim(), key);
    }
    assert.ok(typeof bet.odds_captured_at === 'string' && /(?:Z|[+-]\d{2}:\d{2})$/.test(bet.odds_captured_at) && Number.isFinite(Date.parse(bet.odds_captured_at)), 'Quote timestamp with timezone');
    const a = bet.odds_american;
    const profit = bet.stake * (a > 0 ? a / 100 : 100 / -a);
    close(bet.max_loss, bet.stake, 'Maximum loss must equal stake');
    close(bet.potential_net_profit, profit, 'Incorrect profit');
    close(bet.potential_total_return, bet.stake + profit, 'Return includes stake');
    const breakEven = a > 0 ? 100 / (a + 100) : -a / (-a + 100);
    finite(bet.break_even_probability, 'break-even probability');
    assert.ok(Math.abs(bet.break_even_probability - breakEven) < 0.0001, 'Incorrect break-even probability');
    finite(bet.estimated_win_probability, 'estimated win probability');
    assert.ok(bet.estimated_win_probability >= 0 && bet.estimated_win_probability <= 1, 'Probability must be 0..1');
    stake += bet.stake;
  }
  finite(response.reserve, 'reserve');
  assert.ok(response.reserve >= 0);
  close(response.total_stake, stake, 'Stake sum');
  close(stake + response.reserve, response.bankroll, 'Bankroll reconciliation');
  return true;
}

module.exports = { validate };
if (require.main === module) {
  try {
    validate(JSON.parse(fs.readFileSync(process.argv[2], 'utf8')));
    console.log('Pricing structure and arithmetic passed. Independently verify quotes before locking.');
  } catch (error) {
    console.error('Response rejected:', error.message);
    process.exitCode = 1;
  }
}
