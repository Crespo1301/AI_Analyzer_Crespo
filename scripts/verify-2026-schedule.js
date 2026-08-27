#!/usr/bin/env node

/*
 * Validates the 2026 weekly schedule scaffolds under Data/2026/schedule/.
 * Checks:
 *  - JSON is parseable
 *  - week and season match filename
 *  - each game has required fields
 *  - team names are in Data/2026/teams.json
 *  - game slugs are unique within a week
 *  - game dates fall inside the week window
 *  - espn_boxscore URL, when present, points to a real box-score URL
 *
 * Empty games arrays are OK: the file exists as a scaffold. This script only
 * complains when a filled entry breaks a rule.
 */

const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");
const scheduleDir = path.join(repoRoot, "Data", "2026", "schedule");
const teamsPath = path.join(repoRoot, "Data", "2026", "teams.json");

const teamsFile = JSON.parse(fs.readFileSync(teamsPath, "utf8"));
const validTeams = new Set(
  Object.values(teamsFile.divisions).reduce((all, teams) => all.concat(teams), [])
);

const required = ["id", "date", "away", "home"];
const issues = [];
let filesChecked = 0;
let gamesChecked = 0;

const files = fs
  .readdirSync(scheduleDir)
  .filter((f) => /^week-\d{2}\.json$/.test(f))
  .sort();

for (const file of files) {
  filesChecked += 1;
  const filePath = path.join(scheduleDir, file);
  let payload;
  try {
    payload = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    issues.push(`${file}: invalid JSON (${error.message})`);
    continue;
  }

  const expectedWeek = Number.parseInt(file.match(/week-(\d{2})/)[1], 10);
  if (payload.week !== expectedWeek) {
    issues.push(`${file}: week field ${payload.week} does not match filename week ${expectedWeek}`);
  }
  if (payload.season !== 2026) {
    issues.push(`${file}: season field is not 2026`);
  }
  if (!payload.window || !payload.window.start || !payload.window.end) {
    issues.push(`${file}: window.start / window.end is required`);
  }

  if (!Array.isArray(payload.games)) {
    issues.push(`${file}: games must be an array`);
    continue;
  }

  const slugs = new Set();
  for (const [index, game] of payload.games.entries()) {
    gamesChecked += 1;
    const where = `${file} games[${index}]`;

    for (const field of required) {
      if (!game[field]) {
        issues.push(`${where}: missing required field '${field}'`);
      }
    }

    if (game.id) {
      if (slugs.has(game.id)) issues.push(`${where}: duplicate id '${game.id}' within week`);
      slugs.add(game.id);
      if (!/^[a-z0-9]+(-[a-z0-9]+)+$/.test(game.id)) {
        issues.push(`${where}: id '${game.id}' should be kebab-case (e.g. bills-cowboys)`);
      }
    }

    if (game.away && !validTeams.has(game.away)) {
      issues.push(`${where}: away team '${game.away}' not in teams.json`);
    }
    if (game.home && !validTeams.has(game.home)) {
      issues.push(`${where}: home team '${game.home}' not in teams.json`);
    }
    if (game.away && game.home && game.away === game.home) {
      issues.push(`${where}: away and home are the same team`);
    }

    if (game.date && payload.window && payload.window.start && payload.window.end) {
      if (game.date < payload.window.start || game.date > payload.window.end) {
        issues.push(
          `${where}: date ${game.date} is outside window ${payload.window.start} to ${payload.window.end}`
        );
      }
    }

    if (game.espn_boxscore && !/^https:\/\/www\.espn\.com\/nfl\/boxscore\/_\/gameId\/\d+$/.test(game.espn_boxscore)) {
      issues.push(`${where}: espn_boxscore should look like https://www.espn.com/nfl/boxscore/_/gameId/<id>`);
    }
  }
}

console.log(
  JSON.stringify(
    {
      filesChecked,
      gamesChecked,
      teamsInDivisions: validTeams.size,
      issues,
    },
    null,
    2
  )
);

if (issues.length) process.exitCode = 1;
