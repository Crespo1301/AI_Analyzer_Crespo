#!/usr/bin/env node
/*
 * Team profile updater.
 *
 * Every Data/2026/rosters/<team-slug>.json is a team profile in v2. In addition
 * to the existing offense / special_teams / depth / prop_watchlist / changes_log
 * blocks, each team file carries:
 *
 *   season_record: { season, wins, losses, ties, points_for, points_against,
 *                    last_game, next_game }
 *   health_snapshot: { as_of, out, questionable, ir, notes }
 *
 * This script recomputes season_record from NFL_GAMES for the current season
 * and writes the block into each roster file, preserving everything else.
 * health_snapshot is edited by hand before each game; this script only ensures
 * the block exists with a scaffolded shape.
 *
 * Weekly loop (per Docs/2026/iteration-system.md, effective 2026-09-11):
 *   1. Run this script.
 *   2. Manually update health_snapshot for the teams playing.
 *   3. Run the forced-selection prompts referencing the updated profile.
 *   4. Save raw responses, extract picks, grade after the game, then rerun
 *      this script so the season_record advances.
 */

const fs = require("fs");
const path = require("path");

const repoRoot = path.join(__dirname, "..");
const SEASON = 2026;
const OUT_DIR = path.join(repoRoot, "Data/2026/rosters");

global.window = {};
eval(fs.readFileSync(path.join(repoRoot, "assets/nfl-data.js"), "utf8"));

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Compute season_record for a team from graded NFL_GAMES entries this season.
function computeRecord(teamName) {
  const games = NFL_GAMES.filter(g => String(g.date).startsWith(String(SEASON)) && (g.away === teamName || g.home === teamName));
  let wins = 0, losses = 0, ties = 0, pf = 0, pa = 0;
  let last = null;
  games.forEach(g => {
    const isAway = g.away === teamName;
    const my = isAway ? g.awayScore : g.homeScore;
    const opp = isAway ? g.homeScore : g.awayScore;
    pf += my;
    pa += opp;
    if (my > opp) wins++;
    else if (my < opp) losses++;
    else ties++;
    last = {
      week: g.week,
      date: g.date,
      opponent: isAway ? g.home : g.away,
      site: isAway ? "away" : "home",
      result: my > opp ? "W" : my < opp ? "L" : "T",
      score: `${my}-${opp}`,
      espn: g.espn
    };
  });
  return {
    season: SEASON,
    wins, losses, ties,
    points_for: pf,
    points_against: pa,
    games_played: wins + losses + ties,
    last_game: last,
    next_game: null
  };
}

function ensureBlock(file, key, scaffold) {
  if (!(key in file)) file[key] = scaffold;
  return file;
}

const files = fs.readdirSync(OUT_DIR).filter(f => f.endsWith(".json"));
let updated = 0;
for (const fname of files) {
  const p = path.join(OUT_DIR, fname);
  const file = JSON.parse(fs.readFileSync(p, "utf8"));
  if (!file.team) continue;
  file.season_record = computeRecord(file.team);
  ensureBlock(file, "health_snapshot", {
    as_of: new Date().toISOString().slice(0, 10),
    out: [],
    questionable: [],
    ir: [],
    notes: ""
  });
  fs.writeFileSync(p, JSON.stringify(file, null, 2) + "\n");
  updated++;
}
console.log(`Updated ${updated} team profile files. season_record recomputed from NFL_GAMES; health_snapshot preserved or scaffolded.`);
