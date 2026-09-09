#!/usr/bin/env node
/*
 * Generates Sports_Pages/<game-id>.html for every graded game in
 * assets/nfl-data.js. Re-run whenever nfl-data.js changes.
 * Never hand-edit generated pages, edits will be lost the next time this runs.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(repoRoot, 'assets/nfl-data.js'), 'utf8'));

function money(n) {
  const v = Math.round(n * 100) / 100;
  const sign = v > 0 ? '+' : v < 0 ? '-' : '';
  return sign + '$' + Math.abs(v).toFixed(2);
}

function esc(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function pageHtml(game) {
  const gameLabel = game.label;
  const bets = NFL_BETS.filter(b => b.game === gameLabel);
  const winner = game.awayScore > game.homeScore ? game.away : game.home;
  const margin = Math.abs(game.awayScore - game.homeScore);
  const total = game.awayScore + game.homeScore;
  const correctedCount = bets.filter(b => b.corrected).length;
  const awayTeam = NFL_TEAMS[game.away] || {};
  const homeTeam = NFL_TEAMS[game.home] || {};
  const season = String(game.date).slice(0, 4);
  const seasonLabel = season === '2025' ? 'Season 1 · 2025' : 'Season 2 · 2026';
  const backHref = season === '2025' ? '../nfl-2025.html' : '../nfl-2026.html';

  const modelPanels = NFL_MODELS.map(m => {
    const mBets = bets.filter(b => b.model === m);
    if (!mBets.length) return '';
    const decided = mBets.filter(b => b.outcome !== 'N/A');
    const wins = decided.filter(b => b.outcome === 'WIN').length;
    const losses = decided.filter(b => b.outcome === 'LOSS').length;
    const pushes = decided.filter(b => b.outcome === 'PUSH').length;
    const pl = decided.reduce((s, b) => s + b.pl, 0);
    const record = pushes ? `${wins}-${losses}-${pushes}` : `${wins}-${losses}`;
    const betsHtml = mBets.map(b => `<div class="mpred-bet"><div class="line1"><span class="stake tabular">$${b.stake.toFixed(2)}</span><span class="market">${esc(b.betType)}</span><span class="conf">${b.outcome}</span></div><div class="desc">${esc(b.recommendation)}</div>${b.actual ? `<div class="reason">Actual: ${esc(b.actual)}</div>` : ''}${b.corrected ? `<div class="reason" style="color: var(--push)">Corrected. Original: ${esc(b.csvOutcome)}, ${money(b.csvPl)}.</div>` : ''}</div>`).join('');
    return `<article class="mpred">
      <div class="mpred-head">
        <div>
          <div class="mpred-name">${m}</div>
          <div class="mpred-version tabular">${record} &middot; ${money(pl)}</div>
        </div>
        <span class="chip-model ${m}">${m}</span>
      </div>
      ${betsHtml}
    </article>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(game.away)} at ${esc(game.home)} &middot; Week ${game.week} &middot; AI Analyzer</title>
<meta name="description" content="Model-by-model bet grades for ${esc(game.away)} at ${esc(game.home)}, Week ${game.week}, ${esc(game.date)}. Verified against the ESPN box score.">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(game.away)} at ${esc(game.home)} &middot; Week ${game.week}">
<meta property="og:description" content="AI model betting grades for this matchup, graded against ESPN.">
<meta property="og:image" content="../assets/og-default.svg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
<link rel="stylesheet" href="../assets/styles.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>

<nav class="site-nav" aria-label="Site">
  <div class="nav-primary">
    <a class="nav-brand" href="../index.html"><span class="brand-mark">AI</span>Analyzer<span class="brand-sub">NFL</span></a>
    <ul class="nav-links">
      <li><a href="../nfl-2026.html">Week</a></li>
      <li><a href="../schedule.html">Schedule</a></li>
      <li><a href="../models.html">Models</a></li>
      <li><a href="../bet-database.html">Results</a></li>
      <li><a href="../methodology.html">Methodology</a></li>
    </ul>
    <div class="nav-spacer"></div>
    <a class="nav-search" href="../bet-database.html" aria-label="Search results database">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </a>
  </div>
  <div class="nav-secondary">
    <a href="${backHref}">&larr; ${seasonLabel}</a><span class="dot">&middot;</span>
    <a href="../methodology.html">Grading rubric</a>
    <span class="status">${season === '2026' ? 'Live tracking' : 'Archive &middot; Season 1'}</span>
  </div>
</nav>

<main id="main">

<section class="split-hero" style="min-height: 300px; color: var(--paper);">
  <div class="split-side away" style="background: ${awayTeam.primary || '#0a0a0a'};">
    <div>
      <div class="side-tag">Away</div>
      <div class="team-name">${(awayTeam.abbr || '').toUpperCase()}</div>
      <div class="team-full">${esc(game.away)}</div>
    </div>
    <div class="team-meta"><span>${(awayTeam.division || '')}</span></div>
    <div class="score tabular">${game.awayScore}</div>
  </div>
  <div class="split-center">
    <span class="badge final">${game.ot ? 'Final &middot; OT' : 'Final'}</span>
    <div class="kickoff tabular">${esc(game.date)}</div>
    <div class="network">Week ${game.week} &middot; ${total} pts</div>
    <div class="consensus"><a style="color: inherit; text-decoration: underline;" href="${esc(game.espn)}" target="_blank" rel="noopener">ESPN box score</a></div>
  </div>
  <div class="split-side home" style="background: ${homeTeam.primary || '#0a0a0a'};">
    <div>
      <div class="side-tag">Home</div>
      <div class="team-name">${(homeTeam.abbr || '').toUpperCase()}</div>
      <div class="team-full">${esc(game.home)}</div>
    </div>
    <div class="team-meta"><span>${(homeTeam.division || '')}</span></div>
    <div class="score tabular">${game.homeScore}</div>
  </div>
</section>

<section class="band band-paper" style="padding: 32px 0;">
  <div class="wrap">
    <div class="disclaimer-box">
      <strong>${esc(winner)}</strong> won by ${margin === 0 ? 'a tie' : margin + (margin === 1 ? ' point' : ' points')}${game.ot ? ' in overtime' : ''}. Combined total: ${total} points. Every bet below is graded against the ESPN box score.${correctedCount ? ` <strong>${correctedCount}</strong> bet${correctedCount === 1 ? ' was' : 's were'} corrected after independent verification. Corrected rows preserve the original CSV outcome.` : ''}
    </div>
  </div>
</section>

<section class="band band-bone">
  <div class="wrap">
    <div class="band-head">
      <div>
        <div class="b-kicker">Model Predictions</div>
        <div class="b-title">Locked <span class="accent">picks</span></div>
      </div>
    </div>
    <div class="mpred-row">
      ${modelPanels}
    </div>
  </div>
</section>

<section class="band band-paper">
  <div class="wrap">
    <div class="band-head">
      <div>
        <div class="b-kicker">Standings</div>
        <div class="b-title">P/L this <span class="accent">game</span></div>
      </div>
    </div>
    <div id="podium-mount"></div>
  </div>
</section>

<section class="band band-bone">
  <div class="wrap">
    <div class="band-head">
      <div>
        <div class="b-kicker">Full ledger</div>
        <div class="b-title">Bet <span class="accent">by bet</span></div>
      </div>
      <a class="b-more" href="../bet-database.html">Full database &rarr;</a>
    </div>
    <div id="bets-mount"></div>
  </div>
</section>

</main>

<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand"><div class="fb-name">AI Analyzer &middot; NFL</div><p>Independent NFL model-comparison study.</p></div>
      <div class="foot-col"><h4>Season 2 &middot; 2026</h4><a href="../nfl-2026.html">Season Hub</a><a href="../schedule.html">Schedule</a><a href="../models.html">Models</a><a href="../bet-database.html">Results</a></div>
      <div class="foot-col"><h4>System</h4><a href="../methodology.html">Methodology</a><a href="../methodology.html#rubric">Grading Rubric</a><a href="../methodology.html#iteration">Iteration Log</a></div>
      <div class="foot-col"><h4>About</h4><a href="../about.html">About</a><a href="../nfl-2025.html">Season 1 Archive</a><a href="https://github.com/Crespo1301/AI_Analyzer_Crespo" rel="noopener">GitHub</a></div>
    </div>
    <div class="foot-legal"><span class="disclaimer">Verified vs. ESPN box score. Not financial advice.</span><span>&copy; 2026 Carlos Crespo</span></div>
  </div>
</footer>

<script src="../assets/nfl-data.js"></script>
<script src="../assets/nfl-predictions-2026.js"></script>
<script src="../assets/site.js"></script>
<script>
  nflRenderPodium(${JSON.stringify(gameLabel)}, 'podium-mount');
  nflRenderBetsTable(nflBetsForGame(${JSON.stringify(gameLabel)}), 'bets-mount', { showGame: false });
</script>
</body>
</html>
`;
}

const outDir = path.join(repoRoot, 'Sports_Pages');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
NFL_GAMES.forEach(game => {
  const html = pageHtml(game);
  fs.writeFileSync(path.join(outDir, game.id + '.html'), html);
  console.log('wrote', game.id + '.html');
});
