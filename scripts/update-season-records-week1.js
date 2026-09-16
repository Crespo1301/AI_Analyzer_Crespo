#!/usr/bin/env node
/*
 * One-off: update every 2026 team profile's season_record block from
 * graded Week 1 results in NFL_PREDICTIONS_2026.
 *
 * Non-destructive: only rewrites the season_record block, leaves
 * offense / depth / prop_watchlist / changes_log / health_snapshot alone.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(repoRoot, 'assets/nfl-data.js'), 'utf8'));
eval(fs.readFileSync(path.join(repoRoot, 'assets/nfl-predictions-2026.js'), 'utf8'));

const rosterDir = path.join(repoRoot, 'Data/2026/rosters');
const teamSlug = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const records = {};
NFL_PREDICTIONS_2026
  .filter(g => g.result && g.result.status === 'final')
  .forEach(g => {
    const a = g.away, h = g.home, as = g.result.awayScore, hs = g.result.homeScore;
    if (!records[a]) records[a] = { w: 0, l: 0, t: 0, pf: 0, pa: 0, lastGame: null };
    if (!records[h]) records[h] = { w: 0, l: 0, t: 0, pf: 0, pa: 0, lastGame: null };
    records[a].pf += as; records[a].pa += hs;
    records[h].pf += hs; records[h].pa += as;
    if (as > hs) { records[a].w++; records[h].l++; }
    else if (hs > as) { records[h].w++; records[a].l++; }
    else { records[a].t++; records[h].t++; }
    records[a].lastGame = { week: g.week, opponent: h, result: (as > hs ? 'W' : hs > as ? 'L' : 'T') + ' ' + as + '-' + hs, date: g.result.verified_at };
    records[h].lastGame = { week: g.week, opponent: a, result: (hs > as ? 'W' : as > hs ? 'L' : 'T') + ' ' + hs + '-' + as, date: g.result.verified_at };
  });

// Manual overrides for OT / notes on specific games.
const notes = {
  'Detroit Lions': 'Kellen Moore go-for-2 walkoff. Gibbs 2 rush TDs.',
  'New Orleans Saints': 'Lost by 1 in OT after Lions 2-pt conversion.',
  'Chicago Bears': 'Ben Johnson debut. 59-37 shootout. Williams 2 pass TDs, Swift 3 rush TDs.',
  'Carolina Panthers': '37-point loss at home. Bryce Young 361 pass yds, 3 TDs.',
  'New York Giants': 'John Harbaugh Giants debut win over DAL.',
  'Dallas Cowboys': 'SNF road-favorite upset in Harbaugh Giants debut.',
  'Pittsburgh Steelers': 'T.J. Watt late pick-6 pushed sluggish Steelers past ATL.',
  'Atlanta Falcons': 'Cooper Rush emergency start after Penix ruled out.'
};

const changed = [];
Object.keys(records).forEach(teamName => {
  const slug = teamSlug(teamName);
  const filePath = path.join(rosterDir, slug + '.json');
  if (!fs.existsSync(filePath)) { console.warn('MISSING roster file:', slug); return; }
  const profile = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const r = records[teamName];
  profile.season_record = {
    season: 2026,
    wins: r.w,
    losses: r.l,
    ties: r.t,
    points_for: r.pf,
    points_against: r.pa,
    games_played: r.w + r.l + r.t,
    last_game: r.lastGame ? {
      week: r.lastGame.week,
      opponent: r.lastGame.opponent,
      result: r.lastGame.result,
      date: r.lastGame.date,
      notes: notes[teamName] || ''
    } : null,
    next_game: profile.season_record && profile.season_record.next_game ? profile.season_record.next_game : null
  };
  fs.writeFileSync(filePath, JSON.stringify(profile, null, 2) + '\n');
  changed.push(slug);
});

console.log('Updated', changed.length, 'team profiles.');
