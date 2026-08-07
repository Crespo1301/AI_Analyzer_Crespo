#!/usr/bin/env node
/*
 * Generates Sports_Pages/<game-id>.html for every game in assets/nfl-data.js.
 * Re-run this any time nfl-data.js changes (e.g. next season) instead of
 * hand-editing generated pages.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(repoRoot, 'assets/nfl-data.js'), 'utf8'));
eval(fs.readFileSync(path.join(repoRoot, 'assets/site.js'), 'utf8'));

function money(n) {
  const v = Math.round(n * 100) / 100;
  const sign = v > 0 ? '+' : v < 0 ? '−' : '';
  return sign + '$' + Math.abs(v).toFixed(2);
}

function betNote(bet, game) {
  const margin = Math.abs(game.awayScore - game.homeScore);
  const total = game.awayScore + game.homeScore;
  if (bet.outcome === 'N/A') return 'Bet voided/invalid in original tracking, excluded from P/L.';
  if (bet.actual) return 'Actual: ' + bet.actual + '.';
  if (bet.betType === 'Total' || bet.betType === 'Team Total') {
    return 'Actual game total: ' + total + ' points.';
  }
  if (bet.betType === 'Spread' || bet.betType === '1H Spread') {
    return 'Final margin: ' + margin + ' point' + (margin === 1 ? '' : 's') + '.';
  }
  return bet.outcome === 'WIN' ? 'Hit.' : bet.outcome === 'LOSS' ? 'Missed.' : 'Result unclear from box score alone.';
}

function insightCard(model, bets, game) {
  const decided = bets.filter(b => b.outcome !== 'N/A');
  const wins = decided.filter(b => b.outcome === 'WIN').length;
  const pl = decided.reduce((s, b) => s + b.pl, 0);
  const record = nflRecord(decided);
  return `<div class="insight-card">
        <h3><span class="chip-model ${model}">${model}</span> &nbsp;${record} &middot; ${money(pl)}</h3>
        <ul>
          ${bets.map(b => `<li><strong>${b.betType}:</strong> ${b.recommendation}: <span class="badge ${b.outcome.replace('/', '')}">${b.outcome}</span>${b.corrected ? ' <span class="corrected-flag">corrected</span>' : ''}<br><span style="color:var(--ink-soft);font-size:13px;">${betNote(b, game)}</span></li>`).join('\n          ')}
        </ul>
      </div>`;
}

function legacyPanelHtml(game) {
  if (game.legacyGrade) {
    const rows = Object.keys(game.legacyGrade)
      .sort((a, b) => game.legacyGrade[b] - game.legacyGrade[a])
      .map(m => `<div class="legacy-grade-row"><span class="chip-model ${m}">${m}</span><strong>${game.legacyGrade[m].toFixed(1)} / 100</strong></div>`)
      .join('\n        ');
    return `<div class="legacy-panel">
        <h3>Original CS486 Grading (human-graded reasoning quality, out of 100)</h3>
        ${rows}
        <p class="note" style="color:var(--ink-soft);font-size:13px;">This is the original qualitative score from reading each model's full written response (accuracy, strategy, clarity, depth, etc.), separate from the real-money P/L ranking above.</p>
      </div>`;
  }
  if (game.legacyNote) {
    return `<div class="legacy-panel"><h3>Original CS486 Grading</h3><p class="note" style="color:var(--ink-soft);font-size:13px;">${game.legacyNote}</p></div>`;
  }
  return '';
}

function pageHtml(game) {
  const gameLabel = game.label;
  const bets = nflBetsForGame(gameLabel);
  const standings = nflGameStandings(gameLabel);
  const winner = game.awayScore > game.homeScore ? game.away : game.home;
  const loser = game.awayScore > game.homeScore ? game.home : game.away;
  const margin = Math.abs(game.awayScore - game.homeScore);
  const total = game.awayScore + game.homeScore;
  const byModel = m => bets.filter(b => b.model === m);
  const correctedCount = bets.filter(b => b.corrected).length;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${game.away} @ ${game.home} - Week ${game.week} AI Betting Grades</title>
<link rel="stylesheet" href="../assets/styles.css">
</head>
<body>
<nav class="site-nav">
  <div class="nav-row">
    <a class="nav-back" href="../index.html"><span class="arrow">&larr;</span> AI NFL Analyzer</a>
    <ul class="nav-links">
      <li><a href="../index.html">Hub</a></li>
      <li><a href="../bet-database.html">Bet Database</a></li>
    </ul>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <span class="eyebrow">Week ${game.week} &middot; ${game.date}</span>
    <h1>${game.away} @ ${game.home}</h1>
    <p class="lede">${winner} won by ${margin === 0 ? 'a tie' : margin + (margin === 1 ? ' point' : ' points')}${game.ot ? ' in overtime' : ''} &middot; ${total} combined points &middot; every bet below is graded against the verified box score.</p>
  </div>
</header>

<section class="scoreboard"><div id="scoreboard-mount"></div></section>

<section class="section">
  <div class="wrap">
    ${correctedCount ? `<div class="correction-notice"><strong>${correctedCount} bet${correctedCount === 1 ? '' : 's'} corrected after ESPN verification</strong>The outcomes below reflect real box-score stats, not the original CSV grading. Rows marked "corrected" show what the original said too.</div>` : ''}
    <div class="section-head">
      <h2>Model Standings - This Game</h2>
      <p>Ranked by real profit/loss on the bets each model actually made for ${gameLabel}.</p>
    </div>
    <div class="podium" id="podium-mount"></div>
    ${legacyPanelHtml(game)}
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head">
      <h2>P/L by Model - This Game</h2>
    </div>
    <div class="chart-box" id="chart-mount"></div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Bet-by-Bet Breakdown</h2>
      <p>Every recommendation ChatGPT, Claude, and Gemini made for this matchup, graded against the final score.</p>
    </div>
    <div class="insight-grid">
      ${NFL_MODELS.map(m => insightCard(m, byModel(m), game)).join('\n      ')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Full Bet Table</h2>
    </div>
    <div id="bets-mount"></div>
  </div>
</section>

<footer class="site-footer">
  <div class="wrap foot-row">
    <span>CS 486 &middot; NFL Betting AI Evaluation &middot; Carlos Crespo, USF Fall 2025</span>
    <span>Verified vs. <a href="${game.espn}" target="_blank" rel="noopener">ESPN</a></span>
  </div>
</footer>

<script src="../assets/nfl-data.js"></script>
<script src="../assets/site.js"></script>
<script>
  nflRenderScoreboard('${game.id}', 'scoreboard-mount');
  nflRenderPodium('${gameLabel.replace(/'/g, "\\'")}', 'podium-mount');
  nflRenderBetsTable(nflBetsForGame('${gameLabel.replace(/'/g, "\\'")}'), 'bets-mount', { showGame: false });
  (function () {
    var standings = nflGameStandings('${gameLabel.replace(/'/g, "\\'")}');
    nflBarChart('chart-mount', standings.map(function (s) {
      return { label: s.model, value: s.pl, display: nflMoney(s.pl), color: NFL_MODEL_COLOR[s.model] };
    }));
  })();
</script>
</body>
</html>
`;
}

const outDir = path.join(repoRoot, 'Sports_Pages');
NFL_GAMES.forEach(game => {
  const html = pageHtml(game);
  fs.writeFileSync(path.join(outDir, game.id + '.html'), html);
  console.log('wrote', game.id + '.html');
});
