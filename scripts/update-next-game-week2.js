#!/usr/bin/env node
/* Sets each Week 2 participating team's season_record.next_game
 * block to point at their Week 2 matchup. Safe to re-run. */
const fs = require('fs');
const path = require('path');
const repoRoot = path.join(__dirname, '..');
const schedule = JSON.parse(fs.readFileSync(path.join(repoRoot, 'Data/2026/schedule/week-02.json'), 'utf8'));
const rosterDir = path.join(repoRoot, 'Data/2026/rosters');
const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

let n = 0;
schedule.games.forEach((g, idx) => {
  const wk = 2;
  const gameId = g.id;
  const num = idx + 1;
  [['away', g.away, g.home, `away (${g.home} home stadium)`],
   ['home', g.home, g.away, 'home']
  ].forEach(([side, team, opp, location]) => {
    const file = path.join(rosterDir, slug(team) + '.json');
    if (!fs.existsSync(file)) { console.warn('missing', slug(team)); return; }
    const profile = JSON.parse(fs.readFileSync(file, 'utf8'));
    profile.season_record = profile.season_record || { season: 2026 };
    profile.season_record.next_game = {
      week: wk, game_id: gameId, opponent: opp,
      date: g.date, kickoff_et: g.kickoff_et, network: g.network,
      location: location
    };
    fs.writeFileSync(file, JSON.stringify(profile, null, 2) + '\n');
    n++;
  });
});
console.log('Updated', n, 'team profiles with Week 2 next_game.');
