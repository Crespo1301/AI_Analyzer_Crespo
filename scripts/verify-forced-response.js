const assert = require('node:assert/strict');
const {validate} = require('./validate-forced-response');
const ticket = {type:'straight',market:'Total',line:'Under 44.5',stake:10,
 pricing_status:'conditional',odds_american:null,minimum_acceptable_odds:100,
 sportsbook:null,odds_source:null,odds_captured_at:null,payout_basis:'minimum_acceptable_odds',
 max_loss:10,potential_net_profit:10,potential_total_return:20,break_even_probability:.5,
 estimated_win_probability:.51,value_reasoning:'Test fixture',settlement_rules:'unknown'};
const parlay={...ticket,type:'sgp',line:'Example parlay',legs:[{market:'Total',line:'Under 44.5'},{market:'Moneyline',line:'Example team wins'}]};
const response={prompt_template:'forced-selection',prompt_version:'2.0',forced_allocation:true,bankroll:20,total_stake:20,reserve:0,bets:[ticket,parlay]};
assert.ok(validate(response));
assert.throws(()=>validate({...response,bets:[ticket,ticket]}));
assert.throws(()=>validate({...response,reserve:5}));
assert.throws(()=>validate({...response,bets:[ticket,{...parlay,legs:[]}]}));
assert.throws(()=>validate({...response,bets:[ticket,{...parlay,odds_american:100}]}));
assert.throws(()=>validate({...response,bets:[ticket,{...parlay,potential_total_return:30}]}));
console.log('Forced lane: single/parlay minimums, zero reserve, quote honesty and payout math passed.');
