#!/usr/bin/env node

/*
 * Verifies objective 2025 NFL game metadata and the local correction layer
 * against ESPN's public site API. This is intentionally dependency-free so it
 * can run in the static repo without a package install.
 */

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repoRoot = path.resolve(__dirname, "..");
const dataSource = fs.readFileSync(path.join(repoRoot, "assets", "nfl-data.js"), "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(dataSource, context);

const {
  NFL_GAMES,
  NFL_BETS,
  NFL_CORRECTIONS,
} = context;

const correctionChecks = [
  {
    recommendation: "Lamar O35.5 rush yds",
    game: "Ravens vs Dolphins",
    team: "Baltimore Ravens",
    category: "rushing",
    player: "Lamar",
    label: "YDS",
    line: 35.5,
    side: "OVER",
  },
  {
    recommendation: "Stroud O1.5 pass TDs",
    game: "Texans vs Broncos",
    team: "Houston Texans",
    category: "passing",
    player: "Stroud",
    label: "TD",
    line: 1.5,
    side: "OVER",
  },
  {
    recommendation: "Nix O205.5 pass yds",
    game: "Texans vs Broncos",
    team: "Denver Broncos",
    category: "passing",
    player: "Bo Nix",
    label: "YDS",
    line: 205.5,
    side: "OVER",
  },
  {
    recommendation: "Nik Bonitto anytime sack",
    game: "Texans vs Broncos",
    team: "Denver Broncos",
    category: "defensive",
    player: "Bonitto",
    label: "SACKS",
    line: 0,
    side: "OVER",
  },
  {
    recommendation: "Sutton O58.5 rec yds",
    game: "Texans vs Broncos",
    team: "Denver Broncos",
    category: "receiving",
    player: "Sutton",
    label: "YDS",
    line: 58.5,
    side: "OVER",
  },
  {
    recommendation: "James Cook over ~70 rush yds",
    game: "Bills vs Buccaneers",
    team: "Buffalo Bills",
    category: "rushing",
    player: "Cook",
    label: "YDS",
    line: 70,
    side: "OVER",
  },
  {
    recommendation: "James Cook OVER rush yds (70.5-75.5)",
    game: "Bills vs Buccaneers",
    team: "Buffalo Bills",
    category: "rushing",
    player: "Cook",
    label: "YDS",
    line: 70.5,
    side: "OVER",
  },
  {
    recommendation: "Josh Allen OVER 0.5 INTs",
    game: "Bills vs Buccaneers",
    team: "Buffalo Bills",
    category: "passing",
    player: "Josh Allen",
    label: "INT",
    line: 0.5,
    side: "OVER",
  },
  {
    recommendation: "Baker Mayfield Longest Comp Over 38.5",
    game: "Bills vs Buccaneers",
    team: "Tampa Bay Buccaneers",
    category: "receiving",
    player: null,
    label: "LONG",
    line: 38.5,
    side: "OVER",
    mode: "team-max",
  },
  {
    recommendation: "Swift UNDER 65.5 rush yds",
    game: "Bears vs Vikings",
    team: "Chicago Bears",
    category: "rushing",
    player: "Swift",
    label: "YDS",
    line: 65.5,
    side: "UNDER",
  },
  {
    recommendation: "Drake Maye O1.5 Pass TDs",
    game: "Patriots vs Jets",
    team: "New England Patriots",
    category: "passing",
    player: "Maye",
    label: "TD",
    line: 1.5,
    side: "OVER",
  },
];

const gameIdFromUrl = (url) => {
  const match = url.match(/gameId\/(\d+)/);
  return match ? match[1] : null;
};

const fetchSummary = async (gameId) => {
  const response = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=${gameId}`,
  );
  if (!response.ok) {
    throw new Error(`ESPN summary ${gameId} returned ${response.status}`);
  }
  return response.json();
};

const numberFromStat = (value) => {
  if (typeof value === "number") return value;
  const parsed = Number.parseFloat(String(value));
  return Number.isFinite(parsed) ? parsed : null;
};

const findStat = (summary, check) => {
  const team = summary.boxscore.players.find(
    (entry) => entry.team.displayName === check.team,
  );
  if (!team) return null;

  const category = team.statistics.find((entry) => entry.name === check.category);
  if (!category) return null;

  const index = category.labels.indexOf(check.label);
  if (index === -1) return null;

  if (check.mode === "team-max") {
    const values = category.athletes.map((athlete) => ({
      player: athlete.athlete.displayName,
      value: numberFromStat(athlete.stats[index]),
    }));
    return values.reduce((best, current) => {
      if (!best || current.value > best.value) return current;
      return best;
    }, null);
  }

  const athlete = category.athletes.find((entry) =>
    entry.athlete.displayName.toLowerCase().includes(check.player.toLowerCase()),
  );

  return athlete
    ? { player: athlete.athlete.displayName, value: numberFromStat(athlete.stats[index]) }
    : null;
};

const grade = (value, side, line) => {
  if (side === "OVER") return value > line ? "WIN" : "LOSS";
  if (side === "UNDER") return value < line ? "WIN" : "LOSS";
  return "UNKNOWN";
};

const run = async () => {
  const summaries = new Map();
  const issues = [];

  for (const game of NFL_GAMES) {
    const gameId = gameIdFromUrl(game.espn);
    if (!gameId) {
      issues.push(`${game.id}: ESPN URL is not a direct box-score URL`);
      continue;
    }

    const summary = await fetchSummary(gameId);
    summaries.set(game.label, summary);

    const competition = summary.header.competitions[0];
    const away = competition.competitors.find((team) => team.homeAway === "away");
    const home = competition.competitors.find((team) => team.homeAway === "home");

    if (
      away.team.displayName !== game.away ||
      home.team.displayName !== game.home ||
      Number(away.score) !== game.awayScore ||
      Number(home.score) !== game.homeScore
    ) {
      issues.push(
        `${game.id}: expected ${game.away} ${game.awayScore} @ ${game.home} ${game.homeScore}, ESPN has ${away.team.displayName} ${away.score} @ ${home.team.displayName} ${home.score}`,
      );
    }
  }

  for (const correction of NFL_CORRECTIONS) {
    const bet = NFL_BETS.find(
      (candidate) =>
        candidate.week === correction.week &&
        candidate.model === correction.model &&
        candidate.prompt === correction.prompt &&
        candidate.recommendation === correction.recommendation,
    );
    if (!bet) {
      issues.push(`Correction target not found: ${correction.recommendation}`);
      continue;
    }

    const check = correctionChecks.find(
      (candidate) => candidate.recommendation === correction.recommendation,
    );
    if (!check) {
      issues.push(`No verifier check configured for: ${correction.recommendation}`);
      continue;
    }

    const stat = findStat(summaries.get(check.game), check);
    if (!stat || stat.value === null) {
      issues.push(`Could not verify stat for: ${correction.recommendation}`);
      continue;
    }

    const verifiedOutcome = grade(stat.value, check.side, check.line);
    if (verifiedOutcome !== correction.outcome) {
      issues.push(
        `${correction.recommendation}: correction says ${correction.outcome}, ESPN stat ${stat.player} ${stat.value} grades ${verifiedOutcome}`,
      );
    }
  }

  const correctedRows = NFL_BETS.filter((bet) => bet.corrected).length;
  console.log(
    JSON.stringify(
      {
        gamesChecked: NFL_GAMES.length,
        betsChecked: NFL_BETS.length,
        correctionsChecked: NFL_CORRECTIONS.length,
        correctedRows,
        issues,
      },
      null,
      2,
    ),
  );

  if (issues.length) process.exitCode = 1;
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
