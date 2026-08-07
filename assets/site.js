/* Shared rendering helpers — pulls from NFL_GAMES / NFL_BETS (assets/nfl-data.js) */

function nflMoney(n) {
  var v = Math.round(n * 100) / 100;
  var sign = v > 0 ? "+" : v < 0 ? "−" : "";
  return sign + "$" + Math.abs(v).toFixed(2);
}

function nflRecord(rows) {
  var w = rows.filter(function (b) { return b.outcome === "WIN"; }).length;
  var l = rows.filter(function (b) { return b.outcome === "LOSS"; }).length;
  var p = rows.filter(function (b) { return b.outcome === "PUSH"; }).length;
  return p ? (w + "-" + l + "-" + p) : (w + "-" + l);
}

// Per-game model standings, ranked by P/L for that single game.
function nflGameStandings(gameLabel) {
  var bets = nflBetsForGame(gameLabel);
  return NFL_MODELS.map(function (model) {
    var rows = bets.filter(function (b) { return b.model === model; });
    var decided = rows.filter(function (b) { return b.outcome !== "N/A"; });
    var pl = decided.reduce(function (s, b) { return s + b.pl; }, 0);
    return { model: model, bets: rows, decided: decided, pl: pl, record: nflRecord(decided) };
  }).sort(function (a, b) { return b.pl - a.pl; });
}

function nflRenderScoreboard(gameId, mountId) {
  var g = nflFindGame(gameId);
  if (!g) return;
  var awayWon = g.awayScore > g.homeScore;
  var homeWon = g.homeScore > g.awayScore;
  var html = ''
    + '<div class="scoreboard-inner">'
    + '  <div class="sb-team">'
    + '    <div class="name">' + g.away + '</div>'
    + '    <div class="score">' + g.awayScore + '</div>'
    + '    <span class="tag ' + (awayWon ? 'win' : 'lose') + '">' + (awayWon ? 'FINAL – WINNER' : 'FINAL') + '</span>'
    + '  </div>'
    + '  <div class="sb-at">@</div>'
    + '  <div class="sb-team">'
    + '    <div class="name">' + g.home + '</div>'
    + '    <div class="score">' + g.homeScore + '</div>'
    + '    <span class="tag ' + (homeWon ? 'win' : 'lose') + '">' + (homeWon ? 'FINAL – WINNER' : 'FINAL') + '</span>'
    + '  </div>'
    + '  <div class="sb-meta"><strong>Week ' + g.week + '</strong> · ' + g.date + (g.ot ? ' · <strong>OT</strong>' : '') + ' · Total: <strong>' + (g.awayScore + g.homeScore) + ' pts</strong></div>'
    + '</div>'
    + '<div class="sb-source">Verified vs. <a href="' + g.espn + '" target="_blank" rel="noopener">ESPN box score</a></div>';
  document.getElementById(mountId).innerHTML = html;
}

function nflRenderPodium(gameLabel, mountId) {
  var standings = nflGameStandings(gameLabel);
  var ranks = ['rank-1', 'rank-2', 'rank-3'];
  var labels = ['1ST — BEST P/L', '2ND', '3RD'];
  var html = standings.map(function (s, i) {
    return '<div class="podium-card ' + ranks[i] + '">'
      + '<div class="podium-rank">' + labels[i] + '</div>'
      + '<div class="podium-model">' + s.model + '</div>'
      + '<div class="podium-record">' + s.record + ' · ' + s.decided.length + ' bet' + (s.decided.length === 1 ? '' : 's') + '</div>'
      + '<div class="podium-pl ' + (s.pl >= 0 ? 'pos' : 'neg') + '">' + nflMoney(s.pl) + '</div>'
      + '</div>';
  }).join('');
  document.getElementById(mountId).innerHTML = html;
}

function nflRenderBetsTable(bets, mountId, opts) {
  opts = opts || {};
  var showGame = opts.showGame !== false;
  var html = '<table class="bets"><thead><tr>'
    + (opts.showWeek ? '<th>Wk</th>' : '')
    + '<th>Model</th><th>Prompt</th>' + (showGame ? '<th>Game</th>' : '')
    + '<th>Bet Type</th><th>Recommendation</th><th>Stake</th><th>Outcome</th><th>P/L</th>'
    + '</tr></thead><tbody>'
    + bets.map(function (b) {
      return '<tr>'
        + (opts.showWeek ? '<td>' + b.week + '</td>' : '')
        + '<td><span class="chip-model ' + b.model + '">' + b.model + '</span></td>'
        + '<td>' + b.prompt + '</td>'
        + (showGame ? '<td>' + b.game + '</td>' : '')
        + '<td>' + b.betType + '</td>'
        + '<td>' + b.recommendation + '</td>'
        + '<td>$' + b.stake.toFixed(2) + '</td>'
        + '<td><span class="badge ' + b.outcome.replace('/', '') + '">' + b.outcome + '</span></td>'
        + '<td class="pl-cell ' + (b.pl > 0 ? 'pos' : b.pl < 0 ? 'neg' : '') + '">' + nflMoney(b.pl) + '</td>'
        + '</tr>';
    }).join('')
    + '</tbody></table>';
  document.getElementById(mountId).innerHTML = html;
}

function nflRenderGameCards(mountId, weekFilter) {
  var games = NFL_GAMES.filter(function (g) { return !weekFilter || g.week === weekFilter; });
  var html = games.map(function (g) {
    var standings = nflGameStandings(g.label);
    var top = standings[0];
    var winner = g.awayScore > g.homeScore ? g.away : g.home;
    return '<a class="game-card" href="Sports_Pages/' + g.id + '.html">'
      + '<div class="card-top"><span class="wk">Week ' + g.week + '</span><span class="result-tag">FINAL</span></div>'
      + '<div class="card-body">'
      + '<div class="matchup">' + g.away + ' @ ' + g.home + '</div>'
      + '<div class="score-line">' + g.awayScore + '–' + g.homeScore + ' · ' + winner + ' won</div>'
      + '<div class="card-stats">'
      + '<div><span class="label">Top Model</span><span class="value">' + (top ? top.model : '—') + '</span></div>'
      + '<div><span class="label">Best P/L</span><span class="value">' + (top ? nflMoney(top.pl) : '—') + '</span></div>'
      + '</div></div></a>';
  }).join('');
  document.getElementById(mountId).innerHTML = html;
}
