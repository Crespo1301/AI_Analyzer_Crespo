/* Shared rendering helpers - pulls from NFL_GAMES / NFL_BETS (assets/nfl-data.js) */

function nflMoney(n) {
  var v = Math.round(n * 100) / 100;
  var sign = v > 0 ? "+" : v < 0 ? "-" : "";
  return sign + "$" + Math.abs(v).toFixed(2);
}

function nflRecord(rows) {
  var w = rows.filter(function (b) { return b.outcome === "WIN"; }).length;
  var l = rows.filter(function (b) { return b.outcome === "LOSS"; }).length;
  var p = rows.filter(function (b) { return b.outcome === "PUSH"; }).length;
  return p ? (w + "-" + l + "-" + p) : (w + "-" + l);
}

// Per-game model standings, ranked by P/L for that single game (corrected values).
function nflGameStandings(gameLabel) {
  var bets = nflBetsForGame(gameLabel);
  return NFL_MODELS.map(function (model) {
    var rows = bets.filter(function (b) { return b.model === model; });
    var decided = rows.filter(function (b) { return b.outcome !== "N/A"; });
    var pl = decided.reduce(function (s, b) { return s + b.pl; }, 0);
    return { model: model, bets: rows, decided: decided, pl: pl, record: nflRecord(decided) };
  }).sort(function (a, b) { return b.pl - a.pl; });
}

// Dark team colors (e.g. Texans' near-black navy) are unreadable on the
// dark scoreboard background; fall back to white when a color is too dark.
function nflScoreColor(team) {
  if (!team) return "#fff";
  var hex = team.primary.replace("#", "");
  var r = parseInt(hex.substr(0, 2), 16), g = parseInt(hex.substr(2, 2), 16), b = parseInt(hex.substr(4, 2), 16);
  var luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.35 ? team.primary : "#fff";
}

function nflRenderScoreboard(gameId, mountId) {
  var g = nflFindGame(gameId);
  if (!g) return;
  var awayTeam = NFL_TEAMS[g.away], homeTeam = NFL_TEAMS[g.home];
  var awayWon = g.awayScore > g.homeScore;
  var homeWon = g.homeScore > g.awayScore;
  var venue = g.neutralSite ? g.neutralSite + " (neutral site)" : (homeTeam ? homeTeam.stadium + ", " + homeTeam.city : "");
  var html = ''
    + '<div class="scoreboard-inner">'
    + '  <div class="sb-team">'
    + '    <img class="sb-logo" src="' + nflTeamLogo(g.away) + '" alt="' + g.away + ' logo" width="64" height="64" loading="lazy">'
    + '    <div class="name">' + g.away + '</div>'
    + '    <div class="score" style="color:' + nflScoreColor(awayTeam) + '">' + g.awayScore + '</div>'
    + '    <span class="tag ' + (awayWon ? 'win' : 'lose') + '">' + (awayWon ? 'FINAL - WINNER' : 'FINAL') + '</span>'
    + '  </div>'
    + '  <div class="sb-at">@</div>'
    + '  <div class="sb-team">'
    + '    <img class="sb-logo" src="' + nflTeamLogo(g.home) + '" alt="' + g.home + ' logo" width="64" height="64" loading="lazy">'
    + '    <div class="name">' + g.home + '</div>'
    + '    <div class="score" style="color:' + nflScoreColor(homeTeam) + '">' + g.homeScore + '</div>'
    + '    <span class="tag ' + (homeWon ? 'win' : 'lose') + '">' + (homeWon ? 'FINAL - WINNER' : 'FINAL') + '</span>'
    + '  </div>'
    + '  <div class="sb-meta"><strong>Week ' + g.week + '</strong> &middot; ' + g.date + (g.ot ? ' &middot; <strong>OT</strong>' : '') + ' &middot; Total: <strong>' + (g.awayScore + g.homeScore) + ' pts</strong>' + (venue ? ' &middot; ' + venue : '') + '</div>'
    + '</div>'
    + '<div class="sb-source">Verified vs. <a href="' + g.espn + '" target="_blank" rel="noopener">ESPN box score</a></div>';
  document.getElementById(mountId).innerHTML = html;
}

function nflRenderPodium(gameLabel, mountId) {
  var standings = nflGameStandings(gameLabel);
  var ranks = ['rank-1', 'rank-2', 'rank-3'];
  var labels = ['1ST - BEST P/L', '2ND', '3RD'];
  var html = standings.map(function (s, i) {
    return '<div class="podium-card ' + ranks[i] + '">'
      + '<div class="podium-rank">' + labels[i] + '</div>'
      + '<div class="podium-model">' + s.model + '</div>'
      + '<div class="podium-record">' + s.record + ' &middot; ' + s.decided.length + ' bet' + (s.decided.length === 1 ? '' : 's') + '</div>'
      + '<div class="podium-pl ' + (s.pl >= 0 ? 'pos' : 'neg') + '">' + nflMoney(s.pl) + '</div>'
      + '</div>';
  }).join('');
  document.getElementById(mountId).innerHTML = html;
}

function nflOutcomeCell(bet) {
  var badge = '<span class="badge ' + bet.outcome.replace('/', '') + '">' + bet.outcome + '</span>';
  if (!bet.corrected) return badge;
  return badge + ' <span class="corrected-flag" title="Original CSV said ' + bet.csvOutcome + '. Corrected after independent ESPN verification.">corrected</span>'
    + '<br><span class="csv-was">was: <span class="badge ' + bet.csvOutcome.replace('/', '') + '">' + bet.csvOutcome + '</span></span>';
}

function nflRenderBetsTable(bets, mountId, opts) {
  opts = opts || {};
  var showGame = opts.showGame !== false;
  var html = '<table class="bets"><thead><tr>'
    + (opts.showWeek ? '<th>Wk</th>' : '')
    + '<th>Model</th><th>Prompt</th>' + (showGame ? '<th>Game</th>' : '')
    + '<th>Bet Type</th><th>Recommendation</th><th>Actual</th><th>Stake</th><th>Outcome</th><th>P/L</th>'
    + '</tr></thead><tbody>'
    + bets.map(function (b) {
      return '<tr' + (b.corrected ? ' class="row-corrected"' : '') + '>'
        + (opts.showWeek ? '<td>' + b.week + '</td>' : '')
        + '<td><span class="chip-model ' + b.model + '">' + b.model + '</span></td>'
        + '<td>' + b.prompt + '</td>'
        + (showGame ? '<td>' + b.game + '</td>' : '')
        + '<td>' + b.betType + '</td>'
        + '<td>' + b.recommendation + '</td>'
        + '<td class="actual-cell">' + (b.actual ? b.actual : '<span class="muted">n/a</span>') + '</td>'
        + '<td>$' + b.stake.toFixed(2) + '</td>'
        + '<td>' + nflOutcomeCell(b) + '</td>'
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
      + '<div class="card-logos">'
      + '<img src="' + nflTeamLogo(g.away) + '" alt="" width="36" height="36" loading="lazy">'
      + '<span class="vs">@</span>'
      + '<img src="' + nflTeamLogo(g.home) + '" alt="" width="36" height="36" loading="lazy">'
      + '</div>'
      + '<div class="matchup">' + g.away + ' @ ' + g.home + '</div>'
      + '<div class="score-line">' + g.awayScore + '-' + g.homeScore + ' &middot; ' + winner + ' won</div>'
      + '<div class="card-stats">'
      + '<div><span class="label">Top Model</span><span class="value">' + (top ? top.model : 'n/a') + '</span></div>'
      + '<div><span class="label">Best P/L</span><span class="value">' + (top ? nflMoney(top.pl) : 'n/a') + '</span></div>'
      + '</div></div></a>';
  }).join('');
  document.getElementById(mountId).innerHTML = html;
}

/* ---- Inline SVG bar chart (no external chart library) ---- */
var NFL_MODEL_COLOR = { ChatGPT: "#0b3d91", Claude: "#a3540b", Gemini: "#4c2a9e" };

function nflBarChart(mountId, items, opts) {
  opts = opts || {};
  var w = opts.width || 640, barH = 34, gap = 14, padL = opts.padL || 100, padR = 70;
  var aw = w - padL - padR;
  var maxPos = Math.max.apply(null, items.map(function (i) { return i.value > 0 ? i.value : 0; }).concat([0]));
  var maxNeg = Math.max.apply(null, items.map(function (i) { return i.value < 0 ? -i.value : 0; }).concat([0]));
  var span = maxPos + maxNeg || 1;
  var scale = aw / span;
  var zero = padL + maxNeg * scale;
  var h = items.length * (barH + gap) + gap;
  var bars = items.map(function (item, i) {
    var y = gap + i * (barH + gap);
    var barW = Math.abs(item.value) * scale;
    var x = item.value >= 0 ? zero : zero - barW;
    var color = item.color || (item.value >= 0 ? "#0b6e4f" : "#b3261e");
    var tip = item.value >= 0 ? x + barW : x;
    // Wide bars: draw the value inside, near the tip, so it never lands in
    // the row-label gutter on the left. Short bars: draw it just outside
    // the tip, away from zero (always clear of both gutters).
    var inside = barW >= 55;
    var labelX = inside ? (item.value >= 0 ? tip - 8 : tip + 8) : (item.value >= 0 ? tip + 8 : tip - 8);
    var anchor = inside ? (item.value >= 0 ? "end" : "start") : (item.value >= 0 ? "start" : "end");
    var labelFill = inside ? "#fff" : "var(--ink)";
    return '<text x="4" y="' + (y + barH / 2 + 4) + '" font-size="13" font-weight="700" fill="var(--ink)">' + item.label + '</text>'
      + '<rect x="' + Math.min(x, zero) + '" y="' + y + '" width="' + Math.max(barW, 1) + '" height="' + barH + '" fill="' + color + '" rx="3"></rect>'
      + '<text x="' + labelX + '" y="' + (y + barH / 2 + 4) + '" font-size="13" font-weight="700" fill="' + labelFill + '" text-anchor="' + anchor + '">' + item.display + '</text>';
  }).join('');
  var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" height="' + h + '" role="img" aria-label="bar chart">'
    + '<line x1="' + zero + '" y1="0" x2="' + zero + '" y2="' + h + '" stroke="var(--line)" stroke-width="1"></line>'
    + bars
    + '</svg>';
  document.getElementById(mountId).innerHTML = svg;
}

function nflRenderModelPlChart(mountId) {
  var summary = nflModelSummary().slice().sort(function (a, b) { return b.pl - a.pl; });
  nflBarChart(mountId, summary.map(function (s) {
    return { label: s.model, value: s.pl, display: nflMoney(s.pl), color: NFL_MODEL_COLOR[s.model] };
  }));
}

function nflRenderWinRateChart(mountId) {
  var summary = nflModelSummary().slice().sort(function (a, b) { return b.winPct - a.winPct; });
  nflBarChart(mountId, summary.map(function (s) {
    return { label: s.model, value: s.winPct, display: s.winPct.toFixed(1) + '%', color: NFL_MODEL_COLOR[s.model] };
  }));
}

function nflRenderBetTypeChart(mountId) {
  var shortLabel = { "Props": "Props", "Spread / Total / Moneyline": "Spread/Total/ML" };
  var groups = {};
  NFL_BETS.filter(function (b) { return b.outcome !== "N/A"; }).forEach(function (b) {
    var g = nflBetTypeGroup(b.betType);
    groups[g] = groups[g] || { wins: 0, total: 0 };
    groups[g].total++;
    if (b.outcome === "WIN") groups[g].wins++;
  });
  var items = Object.keys(groups).map(function (g) {
    var pct = (groups[g].wins / groups[g].total) * 100;
    return { label: shortLabel[g] || g, value: pct, display: pct.toFixed(1) + '% (' + groups[g].wins + '/' + groups[g].total + ')', color: "#0b3d91" };
  });
  nflBarChart(mountId, items, { width: 640 });
}

function nflFormatBet(bet) {
  if (bet.type === "sgp" || bet.type === "parlay") {
    var legs = bet.legs.map(function (l) { return l.line; }).join(" + ");
    return '<div class="pred-bet"><span class="pred-stake">$' + bet.stake + '</span> '
      + '<span class="pred-tag">' + (bet.type === "sgp" ? "SGP" : "Parlay") + '</span> '
      + '<span class="pred-line">' + legs + '</span> '
      + '<span class="pred-conf">' + bet.confidence + '/10</span></div>';
  }
  return '<div class="pred-bet"><span class="pred-stake">$' + bet.stake + '</span> '
    + '<span class="pred-tag">' + bet.market + '</span> '
    + '<span class="pred-line">' + bet.line + '</span> '
    + '<span class="pred-conf">' + bet.confidence + '/10</span></div>';
}

function nflRenderPredictions2026(mountId) {
  var host = document.getElementById(mountId);
  if (!host || typeof NFL_PREDICTIONS_2026 === "undefined") return;
  var html = NFL_PREDICTIONS_2026.map(function (g) {
    var away = NFL_TEAMS[g.away], home = NFL_TEAMS[g.home];
    var awayLogo = away ? '<img class="pred-logo" src="' + nflTeamLogo(g.away) + '" alt="' + g.away + '">' : '';
    var homeLogo = home ? '<img class="pred-logo" src="' + nflTeamLogo(g.home) + '" alt="' + g.home + '">' : '';
    var locationLine = g.neutralSite || g.venue || '';
    var cols = NFL_MODELS.map(function (model) {
      var m = g.models[model];
      if (!m) return '';
      var betsHtml = m.bets.length
        ? m.bets.map(nflFormatBet).join('')
        : '<div class="pred-bet pred-none">No bets - full $20 reserved</div>';
      return '<div class="pred-col">'
        + '<div class="pred-col-head"><span class="chip-model ' + model + '">' + model + '</span>'
        + '<span class="pred-version">' + m.version + '</span></div>'
        + '<div class="pred-alloc"><span class="pred-exposure">$' + m.total_stake + ' exposure</span>'
        + '<span class="pred-reserve">$' + m.reserve + ' reserve</span></div>'
        + '<div class="pred-bets">' + betsHtml + '</div>'
        + '<div class="pred-summary">' + m.summary + '</div>'
        + '</div>';
    }).join('');
    return '<article class="pred-card" data-week="' + g.week + '">'
      + '<header class="pred-head">'
      + '<div class="pred-title">'
      + awayLogo + '<span class="pred-matchup">' + g.away + ' at ' + g.home + '</span>' + homeLogo
      + '</div>'
      + '<div class="pred-meta">'
      + '<span class="pred-week">Week ' + g.week + '</span>'
      + '<span class="pred-kickoff">' + g.kickoffDisplay + '</span>'
      + '<span class="pred-venue">' + locationLine + '</span>'
      + '</div>'
      + '<div class="pred-lines">'
      + '<span>Spread: <strong>' + g.line_snapshot.spread + '</strong></span>'
      + '<span>Total: <strong>' + g.line_snapshot.total + '</strong></span>'
      + '<span>ML: <strong>' + g.line_snapshot.moneyline + '</strong></span>'
      + '<span class="pred-lockdate">Locked ' + g.locked_at + '</span>'
      + '<span class="pred-status">Awaiting Result</span>'
      + '</div>'
      + '</header>'
      + '<div class="pred-grid">' + cols + '</div>'
      + '<footer class="pred-foot">Grading source: <a href="' + g.espn + '" target="_blank" rel="noopener">ESPN box score</a> &middot; Prompt template: ' + g.prompt_template + '</footer>'
      + '</article>';
  }).join('');
  host.innerHTML = html;
}
