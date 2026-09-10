const assert = require('node:assert/strict');
const fs = require('node:fs');
const { validate: validatePrices } = require('./validate-priced-response');

function validate(response) {
  assert.ok(['2.0', '2.1'].includes(response.prompt_version), 'Accepted versions: 2.0, 2.1');
  assert.equal(response.prompt_template, 'forced-selection');
  assert.equal(response.forced_allocation, true);
  assert.equal(response.total_stake, 20);
  assert.equal(response.reserve, 0);
  assert.ok(Array.isArray(response.bets));
  assert.ok(response.bets.some(b => b.type === 'straight'), 'At least one single required');
  assert.ok(response.bets.some(b => ['parlay', 'sgp', 'same_game_parlay'].includes(b.type)), 'At least one parlay required');
  if (response.prompt_version === '2.1') {
    assert.ok(response.season_one_study && typeof response.season_one_study === 'object', 'v2.1 requires season_one_study block');
    assert.ok(typeof response.season_one_study.shape_pattern_applied === 'string' && response.season_one_study.shape_pattern_applied.trim(), 'v2.1 season_one_study.shape_pattern_applied required');
    assert.ok(typeof response.season_one_study.shape_pattern_avoided === 'string' && response.season_one_study.shape_pattern_avoided.trim(), 'v2.1 season_one_study.shape_pattern_avoided required');
  }
  const normalized = response.bets.map(bet => {
    assert.ok(['straight','parlay','sgp','same_game_parlay'].includes(bet.type));
    assert.ok(['bovada_verified','reference_market','conditional'].includes(bet.pricing_status));
    if (bet.type !== 'straight') {
      assert.ok(Array.isArray(bet.legs) && bet.legs.length >= 2, 'At least two parlay legs');
      for (const leg of bet.legs) {
        assert.ok(typeof leg.market === 'string' && leg.market.trim());
        assert.ok(typeof leg.line === 'string' && leg.line.trim());
      }
      assert.equal(new Set(bet.legs.map(l => (l.market + ':' + l.line).trim().toLowerCase())).size, bet.legs.length, 'Duplicate parlay legs');
    }
    if (bet.pricing_status === 'conditional') {
      for (const field of ['odds_american','sportsbook','odds_source','odds_captured_at']) assert.equal(bet[field], null, 'Conditional ticket cannot claim quote: ' + field);
      assert.equal(bet.payout_basis, 'minimum_acceptable_odds');
      // Reuse arithmetic validation only. These fixture labels never leave this function.
      return {...bet, odds_american: bet.minimum_acceptable_odds, sportsbook:'Arithmetic only', odds_source:'Conditional target, not quote', odds_captured_at:'2000-01-01T00:00:00Z'};
    }
    assert.equal(bet.minimum_acceptable_odds, null);
    assert.equal(bet.payout_basis, 'odds_american');
    if (bet.pricing_status === 'bovada_verified') assert.match(bet.sportsbook, /^bovada(?:\.lv)?$/i);
    return bet;
  });
  return validatePrices({...response, prompt_version:'1.1', bets:normalized, unpriced_candidates:[]});
}
module.exports = {validate};
if (require.main === module) {
  try {
    validate(JSON.parse(fs.readFileSync(process.argv[2], 'utf8')));
    console.log('Forced-card structure and arithmetic passed. Verify evidence and leg compatibility manually; conditional prices are not quotes.');
  } catch (error) { console.error('Rejected:',error.message); process.exitCode=1; }
}
