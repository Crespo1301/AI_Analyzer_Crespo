#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = vm.createContext({window: {}, document: {addEventListener() {}, querySelectorAll() { return []; }}});
for (const file of ['nfl-data.js', 'nfl-predictions-2026.js', 'nfl-schedule-2026.js', 'site.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'assets', file), 'utf8'), context);
}
assert.equal(Object.keys(context.NFL_TEAMS).length, 32);
const weekOne = context.nflMatchupsForWeek(1);
assert.equal(weekOne.length, 16, 'All recorded Week 1 games must remain visible');
assert.equal(new Set(weekOne.map(game => game.id)).size, 16);
assert.equal(weekOne.find(game => game.id === 'patriots-seahawks').source, 'graded');
assert.equal(weekOne.find(game => game.id === 'patriots-seahawks').homeScore, 13);
assert.equal(context.nflMatchupsForWeek(9).length, 0, '2025 results must not leak into 2026');
context.NFL_GAMES.push({id: 'patriots-seahawks', week: 1, date: '2026-09-09', awayScore: 1, homeScore: 0});
assert.equal(context.nflMatchupsForWeek(1).find(game => game.id === 'patriots-seahawks').source, 'graded', 'A final result replaces its pending entry');
for (const name of Object.keys(context.NFL_TEAMS)) {
  assert.match(context.nflTeamLogo(name), /^https:\/\/a\.espncdn\.com\//);
  assert.match(context.nflLogoMark(name), /width="96" height="96"/);
}
assert.equal(context.nflLogoMark('Unknown Team'), '');
console.log('Site checks passed: 32 team identities, full slate, prediction precedence, season isolation, graded precedence.');
