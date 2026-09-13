#!/usr/bin/env node
/*
 * Refresh health_snapshot for every team playing in a given week.
 *
 * Usage:
 *   node scripts/refresh-week-health.js 1
 *
 * Reads Data/2026/schedule/week-<NN>.json to find teams playing that week,
 * fetches the ESPN roster feed for each (which carries current injury
 * designations per athlete), and writes an updated health_snapshot block
 * into that team's Data/2026/rosters/<slug>.json.
 *
 * Preserves every other block in the roster file (offense, special_teams,
 * depth, prop_watchlist, changes_log, season_record). Adds a changes_log
 * entry noting the refresh.
 */

const fs = require("fs");
const path = require("path");

const week = process.argv[2];
if (!week) {
  console.error("Usage: node scripts/refresh-week-health.js <week-number>");
  process.exit(1);
}

const repoRoot = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(repoRoot, "assets/nfl-data.js"), "utf8"));

const scheduleFile = path.join(repoRoot, `Data/2026/schedule/week-${String(week).padStart(2, "0")}.json`);
const schedule = JSON.parse(fs.readFileSync(scheduleFile, "utf8"));
const teamsPlaying = new Set();
schedule.games.forEach(g => { teamsPlaying.add(g.away); teamsPlaying.add(g.home); });

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function fetchRoster(abbr) {
  const url = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${abbr}/roster`;
  const res = await fetch(url, { headers: { "user-agent": "ai-analyzer-crespo/1.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

function extractInjuries(rosterJson) {
  const out = [], questionable = [], ir = [];
  (rosterJson.athletes || []).forEach(g => {
    (g.items || []).forEach(p => {
      if (!p.injuries || !p.injuries.length) return;
      const pos = p.position && (p.position.abbreviation || p.position.name);
      const name = p.fullName || p.displayName;
      p.injuries.forEach(inj => {
        const status = String(inj.status || inj.type || "").toLowerCase();
        const label = `${pos || "?"} ${name}${inj.details ? " (" + (inj.details.type || inj.details.detail || "") + ")" : ""}`;
        if (status.includes("out")) out.push(label);
        else if (status.includes("question")) questionable.push(label);
        else if (status.includes("injured reserve") || status.includes("ir") || status.includes("pup")) ir.push(label);
        else out.push(`${label} [${status}]`);
      });
    });
  });
  return { out, questionable, ir };
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const outDir = path.join(repoRoot, "Data/2026/rosters");
  let updated = 0, failed = 0;
  for (const teamName of teamsPlaying) {
    const meta = NFL_TEAMS[teamName];
    if (!meta) { console.log("skip (no meta):", teamName); continue; }
    const slug = slugify(teamName);
    const p = path.join(outDir, slug + ".json");
    if (!fs.existsSync(p)) { console.log("skip (no file):", slug); continue; }
    try {
      process.stdout.write(`refreshing ${teamName} ... `);
      const roster = await fetchRoster(meta.abbr);
      const injuries = extractInjuries(roster);
      const file = JSON.parse(fs.readFileSync(p, "utf8"));
      file.health_snapshot = {
        as_of: today,
        out: injuries.out,
        questionable: injuries.questionable,
        ir: injuries.ir,
        notes: `Auto-refreshed from ESPN roster feed for Week ${week}. Verify against team's own injury report before locking picks.`
      };
      file.changes_log = file.changes_log || [];
      file.changes_log.unshift({
        date: today,
        change: `Week ${week} health_snapshot refreshed from ESPN roster feed: ${injuries.out.length} out, ${injuries.questionable.length} questionable, ${injuries.ir.length} IR.`,
        source: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${meta.abbr}/roster`
      });
      fs.writeFileSync(p, JSON.stringify(file, null, 2) + "\n");
      process.stdout.write(`done (${injuries.out.length}/${injuries.questionable.length}/${injuries.ir.length})\n`);
      updated++;
      await new Promise(r => setTimeout(r, 150));
    } catch (e) {
      process.stdout.write(`FAILED (${e.message})\n`);
      failed++;
    }
  }
  console.log(`\nUpdated ${updated} team health_snapshots. ${failed} failed.`);
}

main();
