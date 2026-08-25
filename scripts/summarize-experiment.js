#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repoRoot = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(repoRoot, "assets", "nfl-data.js"), "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(source, context);

const { NFL_BETS, nflBetTypeGroup } = context;
const rows = NFL_BETS.filter((bet) => bet.outcome !== "N/A");

const summarize = (items) => {
  const wins = items.filter((bet) => bet.outcome === "WIN").length;
  const losses = items.filter((bet) => bet.outcome === "LOSS").length;
  const pushes = items.filter((bet) => bet.outcome === "PUSH").length;
  const stake = items.reduce((sum, bet) => sum + bet.stake, 0);
  const profitLoss = items.reduce((sum, bet) => sum + bet.pl, 0);
  const decided = wins + losses;

  return {
    bets: items.length,
    wins,
    losses,
    pushes,
    winPct: decided ? Number(((wins / decided) * 100).toFixed(1)) : 0,
    stake: Number(stake.toFixed(2)),
    profitLoss: Number(profitLoss.toFixed(2)),
    roi: stake ? Number(((profitLoss / stake) * 100).toFixed(1)) : 0,
  };
};

const groupBy = (keyFn) =>
  Object.values(
    rows.reduce((groups, bet) => {
      const key = keyFn(bet);
      groups[key] ||= { group: key, rows: [] };
      groups[key].rows.push(bet);
      return groups;
    }, {}),
  )
    .map((group) => ({ group: group.group, ...summarize(group.rows) }))
    .sort((a, b) => b.profitLoss - a.profitLoss);

const report = {
  overall: summarize(rows),
  byModel: groupBy((bet) => bet.model),
  byBetFamily: groupBy((bet) => nflBetTypeGroup(bet.betType)),
  byBetType: groupBy((bet) => bet.betType),
  byPrompt: groupBy((bet) => `Week ${bet.week} Prompt ${bet.prompt}`),
  byModelPromptTop: groupBy((bet) => `${bet.model} W${bet.week} P${bet.prompt}`).slice(0, 8),
  byModelPromptBottom: groupBy((bet) => `${bet.model} W${bet.week} P${bet.prompt}`)
    .slice(-8)
    .reverse(),
};

console.log(JSON.stringify(report, null, 2));
