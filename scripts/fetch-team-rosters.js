#!/usr/bin/env node
/*
 * Fetches every NFL team's active roster from ESPN's public site API and
 * writes a per-team roster file at Data/2026/rosters/<team-slug>.json following
 * the schema in Data/2026/rosters/README.md.
 *
 * The public rendered site does not read from here yet, per that README.
 * These files feed prompts and manual grading.
 *
 * Requires Node 18+ for the built-in fetch.
 */

const fs = require("fs");
const path = require("path");

const repoRoot = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(repoRoot, "assets/nfl-data.js"), "utf8"));

const OUT_DIR = path.join(repoRoot, "Data/2026/rosters");
const TODAY = new Date().toISOString().slice(0, 10);

// Slugify team name to a file-safe stem
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function fetchTeamRoster(abbr) {
  const url = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${abbr}/roster`;
  const res = await fetch(url, { headers: { "user-agent": "ai-analyzer-crespo/1.0" } });
  if (!res.ok) throw new Error(`ESPN roster ${abbr}: HTTP ${res.status}`);
  return await res.json();
}

// Given the roster JSON returned by ESPN, pull out players by position code,
// preferring the lower jersey number (starters tend to keep the low numbers).
function playersByPosition(rosterJson, posCode) {
  const out = [];
  const groups = rosterJson.athletes || [];
  groups.forEach(function (group) {
    (group.items || []).forEach(function (p) {
      const pos = p.position && (p.position.abbreviation || p.position.name);
      if (pos && pos.toUpperCase() === posCode.toUpperCase()) {
        out.push({
          name: p.fullName || p.displayName || "",
          jersey: parseInt(p.jersey || "999", 10),
          age: p.age,
          experience: p.experience && p.experience.years,
          injuries: (p.injuries || []).map(function (i) { return i.status || i.type; })
        });
      }
    });
  });
  // Lower jersey first as a weak starter heuristic; ties broken by name.
  out.sort(function (a, b) { return a.jersey - b.jersey || a.name.localeCompare(b.name); });
  return out;
}

function noteFor(player) {
  if (!player) return "";
  const bits = [];
  if (typeof player.experience === "number") bits.push(player.experience + " yr");
  if (player.age) bits.push("age " + player.age);
  if (player.injuries && player.injuries.length) bits.push("status: " + player.injuries.join(", "));
  return bits.join(", ");
}

function pickPlayer(list, idx) {
  const p = list[idx];
  if (!p) return { player: "", note: "" };
  return { player: p.name, note: noteFor(p) };
}

async function buildTeamFile(teamName, meta) {
  const roster = await fetchTeamRoster(meta.abbr);
  const qbs = playersByPosition(roster, "QB");
  const rbs = playersByPosition(roster, "RB");
  const wrs = playersByPosition(roster, "WR");
  const tes = playersByPosition(roster, "TE");
  const ks = playersByPosition(roster, "PK") // ESPN sometimes uses PK for placekicker
    .concat(playersByPosition(roster, "K"));

  const file = {
    team: teamName,
    season: 2026,
    last_verified: TODAY,
    source: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${meta.abbr}/roster`,
    offense: {
      qb1: pickPlayer(qbs, 0),
      qb2: pickPlayer(qbs, 1),
      rb1: pickPlayer(rbs, 0),
      rb2: pickPlayer(rbs, 1),
      wr1: pickPlayer(wrs, 0),
      wr2: pickPlayer(wrs, 1),
      te1: pickPlayer(tes, 0)
    },
    special_teams: {
      k: pickPlayer(ks, 0)
    },
    depth: {
      qbs: qbs.slice(0, 4).map(function (p) { return { name: p.name, jersey: p.jersey, note: noteFor(p) }; }),
      rbs: rbs.slice(0, 5).map(function (p) { return { name: p.name, jersey: p.jersey, note: noteFor(p) }; }),
      wrs: wrs.slice(0, 6).map(function (p) { return { name: p.name, jersey: p.jersey, note: noteFor(p) }; }),
      tes: tes.slice(0, 4).map(function (p) { return { name: p.name, jersey: p.jersey, note: noteFor(p) }; })
    },
    prop_watchlist: [],
    changes_log: [
      {
        date: TODAY,
        change: "Initial roster snapshot fetched from ESPN public site API before Week 1 kickoff.",
        source: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${meta.abbr}/roster`
      }
    ]
  };
  return file;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const entries = Object.entries(NFL_TEAMS);
  const errors = [];
  // Process sequentially with a small pause to be polite to ESPN.
  for (const [teamName, meta] of entries) {
    try {
      process.stdout.write("fetching " + teamName + " ... ");
      const file = await buildTeamFile(teamName, meta);
      const slug = slugify(teamName);
      const outPath = path.join(OUT_DIR, slug + ".json");
      fs.writeFileSync(outPath, JSON.stringify(file, null, 2) + "\n");
      process.stdout.write("wrote " + slug + ".json\n");
      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      process.stdout.write("FAILED (" + e.message + ")\n");
      errors.push({ team: teamName, error: e.message });
    }
  }
  console.log("\nDone. " + (entries.length - errors.length) + "/" + entries.length + " teams written.");
  if (errors.length) {
    console.log("Errors:");
    errors.forEach(function (e) { console.log("  " + e.team + ": " + e.error); });
  }
}

main();
