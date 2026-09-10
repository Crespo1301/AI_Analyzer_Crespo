/*
 * Shared render helpers for the redesigned AI Analyzer, 2026-27 season.
 * Reads NFL_GAMES + NFL_BETS + NFL_PREDICTIONS_2026 + NFL_TEAMS from
 * assets/nfl-data.js and assets/nfl-predictions-2026.js.
 *
 * Design intent: no HTML string escape hazards from user-supplied data
 * (all inputs come from repo-committed JS), but strings are still passed
 * through basic HTML-safety when they originate from JSON scaffolds.
 */

(function () {
  "use strict";

  function esc(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  window.nflEsc = esc;
})();

/* -------------------------------------------------------------------
 * Basic money + record helpers (kept API-stable with prior site.js)
 * ------------------------------------------------------------------- */
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

function nflGameStandings(gameLabel) {
  var bets = nflBetsForGame(gameLabel);
  return NFL_MODELS.map(function (model) {
    var rows = bets.filter(function (b) { return b.model === model; });
    var decided = rows.filter(function (b) { return b.outcome !== "N/A"; });
    var pl = decided.reduce(function (s, b) { return s + b.pl; }, 0);
    return { model: model, bets: rows, decided: decided, pl: pl, record: nflRecord(decided) };
  }).sort(function (a, b) { return b.pl - a.pl; });
}

/* -------------------------------------------------------------------
 * Current week detection.
 * Real 2026 kickoff is 2026-09-09. Week rolls over on Wednesday at 00:00 ET
 * so that Thursday, Sunday, and Monday of a slate all share the same week.
 * ------------------------------------------------------------------- */
var NFL_SEASON_KICKOFF_2026 = new Date("2026-09-09T00:00:00-04:00").getTime();
function nflCurrentWeek() {
  var now = Date.now();
  if (now < NFL_SEASON_KICKOFF_2026) return 1;
  var msPerWeek = 7 * 24 * 3600 * 1000;
  var elapsed = now - NFL_SEASON_KICKOFF_2026;
  var wk = Math.floor(elapsed / msPerWeek) + 1;
  if (wk < 1) return 1;
  if (wk > 18) return 18;
  return wk;
}

/* -------------------------------------------------------------------
 * Matchup strip (horizontal scroller under the nav).
 * Data-driven: prefers pending predictions from NFL_PREDICTIONS_2026,
 * falls back to graded games from NFL_GAMES for past weeks.
 * ------------------------------------------------------------------- */
function nflMatchupsForWeek(week) {
  var pending = (typeof NFL_PREDICTIONS_2026 !== "undefined" ? NFL_PREDICTIONS_2026 : [])
    .filter(function (g) { return g.week === week; })
    .map(function (g) {
      return {
        source: g.result && g.result.status === "final" ? "graded" : "prediction",
        awayScore: g.result && g.result.awayScore,
        homeScore: g.result && g.result.homeScore,
        date: g.kickoff.slice(0, 10),
        id: g.gameId,
        label: g.label,
        away: g.away, home: g.home,
        kickoff: g.kickoff, kickoffDisplay: g.kickoffDisplay,
        network: g.network,
        line: g.line_snapshot,
        status: g.result ? g.result.status : (g.status || "locked"),
        models: g.models,
        espn: g.espn
      };
    });
  var graded = NFL_GAMES.filter(function (g) { return g.week === week && String(g.date).slice(0, 4) === "2026"; })
    .map(function (g) {
      return {
        source: "graded",
        id: g.id,
        label: g.label,
        away: g.away, home: g.home,
        awayScore: g.awayScore, homeScore: g.homeScore,
        date: g.date,
        status: "final",
        espn: g.espn
      };
    });
  var scheduled = (typeof NFL_SCHEDULE_2026 !== "undefined" ? NFL_SCHEDULE_2026 : [])
    .filter(function (g) { return g.week === week; });
  var byId = {};
  scheduled.concat(pending, graded).forEach(function (g) { byId[g.id] = g; });
  return Object.keys(byId).map(function (id) { return byId[id]; });
}

function nflLogoMark(teamName, size) {
  var team = NFL_TEAMS[teamName];
  if (!team) return "";
  return '<span class="team-logo ' + (size || '') + '" aria-hidden="true" style="--team-primary:' + team.primary + ';--team-secondary:' + team.secondary + '">'
    + '<span>' + esc(team.abbr.toUpperCase()) + '</span>'
    + '<img src="' + esc(nflTeamLogo(teamName)) + '" alt="" width="96" height="96" loading="lazy" decoding="async">'
    + '</span>';
}

document.addEventListener("error", function (event) {
  var image = event.target;
  if (image.tagName === "IMG" && image.parentElement.classList.contains("team-logo")) image.hidden = true;
}, true);

function nflConsensusLine(models) {
  if (!models) return "";
  var lean = { away: 0, home: 0, split: 0 };
  Object.keys(models).forEach(function (mname) {
    var m = models[mname];
    if (!m || !m.bets || !m.bets.length) return;
    var picked = null;
    m.bets.forEach(function (b) {
      if (b.type === "sgp" || b.type === "parlay") return;
      if (b.market === "Spread" || b.market === "Moneyline") {
        var line = (b.line || "").toLowerCase();
        if (line.indexOf(" -") > -1 || line.indexOf("-1") === 0 || line.indexOf(" ml") > -1) {
          picked = "unknown";
        }
      }
    });
  });
  var withPicks = 0, noBets = 0;
  Object.keys(models).forEach(function (mname) {
    var m = models[mname];
    if (!m) return;
    if (m.total_stake > 0 || (m.bets && m.bets.length)) withPicks++;
    else noBets++;
  });
  var parts = [];
  if (withPicks) parts.push(withPicks + " active");
  if (noBets) parts.push(noBets + " reserve");
  return parts.join(" / ");
}

function nflSlotFinal(game) {
  var awayTeam = NFL_TEAMS[game.away] || {};
  var homeTeam = NFL_TEAMS[game.home] || {};
  var awayWin = game.awayScore > game.homeScore;
  var homeWin = game.homeScore > game.awayScore;
  return ''
    + '<a class="game-slot" href="Sports_Pages/' + esc(game.id) + '.html">'
    + '  <div class="slot-top"><span>' + esc(game.date) + '</span><span class="slot-status final">Final</span></div>'
    + '  <div class="team-row">'
    + nflLogoMark(game.away, "compact")
    + '    <span class="team-abbr">' + esc((awayTeam.abbr || "").toUpperCase()) + '</span>'
    + '    <span class="team-score tabular ' + (awayWin ? "win" : "lose") + '">' + game.awayScore + '</span>'
    + '  </div>'
    + '  <div class="team-row">'
    + nflLogoMark(game.home, "compact")
    + '    <span class="team-abbr">' + esc((homeTeam.abbr || "").toUpperCase()) + '</span>'
    + '    <span class="team-score tabular ' + (homeWin ? "win" : "lose") + '">' + game.homeScore + '</span>'
    + '  </div>'
    + '  <div class="slot-consensus">' + esc(game.label) + '</div>'
    + '  <div class="slot-cta">View Analysis <span aria-hidden="true">&rarr;</span></div>'
    + '</a>';
}

function nflSlotLocked(game) {
  var awayTeam = NFL_TEAMS[game.away] || {};
  var homeTeam = NFL_TEAMS[game.home] || {};
  var kickoff = game.kickoffDisplay || "";
  var line = game.line ? (game.line.spread + " / O/U " + game.line.total) : "";
  var consensus = nflConsensusLine(game.models);
  var isScheduled = game.source === "schedule";
  var href = isScheduled ? game.espn : 'Sports_Pages/' + game.id + '.html';
  return ''
    + '<a class="game-slot" href="' + esc(href) + '">'
    + '  <div class="slot-top"><span>' + esc(kickoff) + '</span><span class="slot-status ' + (isScheduled ? 'pending' : 'locked') + '">' + (isScheduled ? 'Scheduled' : 'Locked') + '</span></div>'
    + '  <div class="team-row">'
    + nflLogoMark(game.away, "compact")
    + '    <span class="team-abbr">' + esc((awayTeam.abbr || "").toUpperCase()) + '</span>'
    + '    <span class="team-record">Away</span>'
    + '  </div>'
    + '  <div class="team-row">'
    + nflLogoMark(game.home, "compact")
    + '    <span class="team-abbr">' + esc((homeTeam.abbr || "").toUpperCase()) + '</span>'
    + '    <span class="team-record">Home</span>'
    + '  </div>'
    + '  <div class="slot-meta">' + esc(game.network || "") + (line ? ' &middot; ' + esc(line) : "") + '</div>'
    + '  <div class="slot-consensus">' + (consensus ? esc(consensus) : (isScheduled ? "Predictions not published" : "Models locked")) + '</div>'
    + '  <div class="slot-cta">' + (isScheduled ? 'Game details on ESPN' : 'Read Picks') + ' <span aria-hidden="true">&rarr;</span></div>'
    + '</a>';
}

function nflSlotPending(placeholderIdx) {
  return ''
    + '<div class="game-slot" aria-hidden="true">'
    + '  <div class="slot-top"><span>TBD</span><span class="slot-status pending">Pending</span></div>'
    + '  <div class="team-row"><span class="team-chip" style="background:#333"></span><span class="team-abbr">TBD</span></div>'
    + '  <div class="team-row"><span class="team-chip" style="background:#333"></span><span class="team-abbr">TBD</span></div>'
    + '  <div class="slot-consensus">Prompts locked before kickoff</div>'
    + '</div>';
}

function nflRenderMatchupStrip(mountId, opts) {
  opts = opts || {};
  var host = document.getElementById(mountId);
  if (!host) return;
  var week = opts.week || nflCurrentWeek();
  var games = nflMatchupsForWeek(week);
  var slots = games.map(function (g) {
    if (g.status === "final") return nflSlotFinal(g);
    return nflSlotLocked(g);
  });
  if (!slots.length) {
    slots = [nflSlotPending(1), nflSlotPending(2), nflSlotPending(3)];
  }
  host.innerHTML = ''
    + '<div class="strip-inner">'
    + '  <div class="strip-label">'
    + '    <div class="kicker">Season 2 &middot; 2026</div>'
    + '    <div class="week">Week ' + week + '</div>'
    + '  </div>'
    + '  <button class="strip-arrow left" aria-label="Scroll matchups left"><span aria-hidden="true">&lsaquo;</span></button>'
    + '  <div class="strip-viewport" role="region" aria-label="Week ' + week + ' matchups">'
    + '    <div class="strip-track">' + slots.join("") + '</div>'
    + '  </div>'
    + '  <button class="strip-arrow right" aria-label="Scroll matchups right"><span aria-hidden="true">&rsaquo;</span></button>'
    + '</div>';

  var viewport = host.querySelector(".strip-viewport");
  var left = host.querySelector(".strip-arrow.left");
  var right = host.querySelector(".strip-arrow.right");
  function updateArrows() {
    left.disabled = viewport.scrollLeft <= 4;
    right.disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 4;
  }
  viewport.addEventListener("scroll", updateArrows, { passive: true });
  left.addEventListener("click", function () { viewport.scrollBy({ left: -280, behavior: "smooth" }); });
  right.addEventListener("click", function () { viewport.scrollBy({ left: 280, behavior: "smooth" }); });
  requestAnimationFrame(updateArrows);
}

/* -------------------------------------------------------------------
 * Week selector (Season Hub / Schedule)
 * ------------------------------------------------------------------- */
function nflRenderWeekSelect(mountId, opts) {
  opts = opts || {};
  var host = document.getElementById(mountId);
  if (!host) return;
  var current = opts.current || nflCurrentWeek();
  var gradedWeeks = {};
  NFL_GAMES.filter(function (g) { return String(g.date).slice(0, 4) === "2026"; }).forEach(function (g) { gradedWeeks[g.week] = true; });
  var predictionWeeks = {};
  if (typeof NFL_PREDICTIONS_2026 !== "undefined") {
    NFL_PREDICTIONS_2026.forEach(function (g) {
      if (g.result && g.result.status === "final") gradedWeeks[g.week] = true;
      else predictionWeeks[g.week] = true;
    });
  }
  var html = [];
  for (var w = 1; w <= 18; w++) {
    var cls = "week-btn";
    var label = "Regular";
    if (w === current) cls += " current";
    if (predictionWeeks[w] && !gradedWeeks[w]) label = "Locked";
    if (gradedWeeks[w] && w < 100) { cls += " graded"; label = "Graded"; }
    var href = opts.baseHref ? (opts.baseHref + "?week=" + w) : "#week-" + w;
    html.push('<a class="' + cls + '" href="' + href + '"><span class="wb-n tabular">' + w + '</span><span class="wb-l">' + label + '</span></a>');
  }
  host.innerHTML = html.join("");
}

/* -------------------------------------------------------------------
 * Matchup grid for the season hub (current-week bento of games)
 * ------------------------------------------------------------------- */
function nflRenderMatchupGrid(mountId, opts) {
  opts = opts || {};
  var host = document.getElementById(mountId);
  if (!host) return;
  var week = opts.week || nflCurrentWeek();
  var games = nflMatchupsForWeek(week);
  if (!games.length) {
    host.innerHTML = '<div class="empty-state"><div class="es-title">Week ' + week + ' picks arrive before kickoff</div><p>Model responses are locked and published Tuesday through Wednesday of each game week. Nothing is fabricated in the interim.</p></div>';
    return;
  }
  var html = games.map(function (g) {
    var away = NFL_TEAMS[g.away] || {};
    var home = NFL_TEAMS[g.home] || {};
    var isFinal = g.status === "final";
    var consensus = g.models ? nflConsensusLine(g.models) : "";
    var vs = isFinal
      ? '<span class="mteam-vs final tabular">' + g.awayScore + ' &ndash; ' + g.homeScore + '</span>'
      : '<span class="mteam-vs">@</span>';
    var kickLine = isFinal ? (g.date + ' &middot; Final') : (g.kickoffDisplay || 'Kickoff TBD');
    var isScheduled = g.source === "schedule";
    var pageHref = isScheduled ? g.espn : 'Sports_Pages/' + g.id + '.html';
    return ''
      + '<a class="mgame" href="' + pageHref + '">'
      + '  <div class="mgame-head"><span>Week ' + week + '</span><span>' + esc(kickLine) + '</span></div>'
      + '  <div class="mgame-teams">'
      + '    <div class="mteam">'
      + nflLogoMark(g.away)
      + '      <span class="abbr">' + esc((away.abbr || "").toUpperCase()) + '</span>'
      + '      <span class="name">' + esc(g.away) + '</span>'
      + '    </div>'
      + '    ' + vs
      + '    <div class="mteam">'
      + nflLogoMark(g.home)
      + '      <span class="abbr">' + esc((home.abbr || "").toUpperCase()) + '</span>'
      + '      <span class="name">' + esc(g.home) + '</span>'
      + '    </div>'
      + '  </div>'
      + (consensus || isFinal ? (
          '<div class="mgame-consensus"><span class="lc">' + (isFinal ? "Outcome" : "Model Board") + '</span><span class="rc">' + esc(isFinal ? (g.awayScore + " - " + g.homeScore) : consensus) + '</span></div>'
        ) : "")
      + (isScheduled ? '<div class="mgame-consensus">Predictions not published</div>' : '')
      + '  <div class="mgame-cta"><span>' + (isFinal ? "View Analysis" : isScheduled ? "Game details on ESPN" : "Read Locked Picks") + '</span><span class="arrow" aria-hidden="true">&rarr;</span></div>'
      + '</a>';
  }).join("");
  host.innerHTML = html;
}

/* -------------------------------------------------------------------
 * Split hero for matchup pages
 * ------------------------------------------------------------------- */
function nflRenderSplitHero(mountId, gameData) {
  var host = document.getElementById(mountId);
  if (!host) return;
  var away = NFL_TEAMS[gameData.away] || {};
  var home = NFL_TEAMS[gameData.home] || {};
  var awayColor = away.primary || "#0a0a0a";
  var homeColor = home.primary || "#0a0a0a";

  var center;
  if (gameData.status === "final") {
    center = ''
      + '<span class="badge final">Final</span>'
      + '<div class="kickoff tabular">' + esc(gameData.date || "") + '</div>'
      + '<div class="consensus">Verified vs. <a style="color:inherit;text-decoration:underline" href="' + esc(gameData.espn || "#") + '" target="_blank" rel="noopener">ESPN box score</a></div>';
  } else if (gameData.status === "locked") {
    center = ''
      + '<span class="badge locked">Locked</span>'
      + '<div class="kickoff">' + esc(gameData.kickoffDisplay || "") + '</div>'
      + (gameData.network ? '<div class="network">' + esc(gameData.network) + '</div>' : "")
      + (gameData.consensus ? '<div class="consensus">' + esc(gameData.consensus) + '</div>' : "");
  } else {
    center = ''
      + '<span class="badge pending">Pending</span>'
      + '<div class="kickoff">Kickoff TBD</div>';
  }

  var awayScoreLine = gameData.status === "final" ? '<div class="score tabular">' + gameData.awayScore + '</div>' : "";
  var homeScoreLine = gameData.status === "final" ? '<div class="score tabular">' + gameData.homeScore + '</div>' : "";

  host.innerHTML = ''
    + '<div class="split-hero">'
    + '  <div class="split-side away" style="background:' + awayColor + '">'
    + '    <div>'
    + '      <div class="side-tag">Away</div>'
    + '      <div class="team-name">' + esc((away.abbr || "").toUpperCase()) + '</div>'
    + '      <div class="team-full">' + esc(gameData.away) + '</div>'
    + '    </div>'
    + '    <div class="team-meta"><span>' + (away.division || "") + '</span></div>'
    + '    ' + awayScoreLine
    + '  </div>'
    + '  <div class="split-center">' + center + '</div>'
    + '  <div class="split-side home" style="background:' + homeColor + '">'
    + '    <div>'
    + '      <div class="side-tag">Home</div>'
    + '      <div class="team-name">' + esc((home.abbr || "").toUpperCase()) + '</div>'
    + '      <div class="team-full">' + esc(gameData.home) + '</div>'
    + '    </div>'
    + '    <div class="team-meta"><span>' + (home.division || "") + '</span></div>'
    + '    ' + homeScoreLine
    + '  </div>'
    + '</div>';
}

/* -------------------------------------------------------------------
 * Model prediction row for matchup pages (pre-kickoff)
 * ------------------------------------------------------------------- */
function nflFormatMpredBet(bet) {
  if (bet.type === "sgp" || bet.type === "parlay") {
    var legs = bet.legs.map(function (l) { return esc(l.line); }).join(" + ");
    return ''
      + '<div class="mpred-bet">'
      + '  <div class="line1">'
      + '    <span class="stake tabular">$' + bet.stake + '</span>'
      + '    <span class="market">' + (bet.type === "sgp" ? "SGP" : "Parlay") + '</span>'
      + '    <span class="conf">Conf ' + bet.confidence + '/10</span>'
      + '  </div>'
      + '  <div class="desc">' + legs + '</div>'
      + (bet.reason ? '<div class="reason">' + esc(bet.reason) + '</div>' : "")
      + '</div>';
  }
  return ''
    + '<div class="mpred-bet">'
    + '  <div class="line1">'
    + '    <span class="stake tabular">$' + bet.stake + '</span>'
    + '    <span class="market">' + esc(bet.market) + '</span>'
    + '    <span class="conf">Conf ' + bet.confidence + '/10</span>'
    + '  </div>'
    + '  <div class="desc">' + esc(bet.line) + '</div>'
    + (bet.reason ? '<div class="reason">' + esc(bet.reason) + '</div>' : "")
    + '</div>';
}

function nflRenderModelPredictionsRow(mountId, gameData) {
  var host = document.getElementById(mountId);
  if (!host) return;
  var models = gameData.models || {};
  var cols = NFL_MODELS.map(function (mname) {
    var m = models[mname];
    if (!m) return '';
    var bets = m.bets && m.bets.length
      ? m.bets.map(nflFormatMpredBet).join("")
      : '<div class="mpred-bet none">No bets, full $' + (m.reserve || 20) + ' reserved.</div>';
    return ''
      + '<article class="mpred">'
      + '  <div class="mpred-head">'
      + '    <div>'
      + '      <div class="mpred-name">' + mname + '</div>'
      + '      <div class="mpred-version">' + esc(m.version || "") + '</div>'
      + '    </div>'
      + '    <span class="chip-model ' + mname + '">' + mname + '</span>'
      + '  </div>'
      + '  <div class="mpred-alloc">'
      + '    <span class="exposure tabular">$' + m.total_stake + ' exposure</span>'
      + '    <span class="reserve tabular">$' + m.reserve + ' reserve</span>'
      + '  </div>'
      + '  ' + bets
      + '  <div class="mpred-summary">' + esc(m.summary || "") + '</div>'
      + '</article>';
  }).join("");
  host.innerHTML = cols;
}

/* -------------------------------------------------------------------
 * Legacy scoreboard (used by generated Sports_Pages for graded games).
 * Kept API-stable, restyled to the new split-hero component.
 * ------------------------------------------------------------------- */
function nflRenderScoreboard(gameId, mountId) {
  var g = nflFindGame(gameId);
  if (!g) return;
  nflRenderSplitHero(mountId, {
    away: g.away, home: g.home,
    awayScore: g.awayScore, homeScore: g.homeScore,
    date: g.date, status: "final", espn: g.espn
  });
}

function nflRenderPodium(gameLabel, mountId) {
  var standings = nflGameStandings(gameLabel);
  var host = document.getElementById(mountId);
  if (!host) return;
  host.innerHTML = '<div class="reasoning-grid">' + standings.map(function (s, i) {
    var badge = i === 0 ? "Top P/L" : i === 1 ? "2nd" : "3rd";
    return ''
      + '<div class="rgrade">'
      + '  <div class="rg-model"><span class="chip-model ' + s.model + '">' + s.model + '</span> &middot; ' + esc(badge) + '</div>'
      + '  <div class="rg-score tabular ' + (s.pl >= 0 ? "" : "") + '" style="color:' + (s.pl >= 0 ? "var(--win)" : "var(--loss)") + '">' + nflMoney(s.pl) + '</div>'
      + '  <div class="rg-outof tabular">' + esc(s.record) + ' &middot; ' + s.decided.length + ' bet' + (s.decided.length === 1 ? "" : "s") + '</div>'
      + '</div>';
  }).join("") + '</div>';
}

/* -------------------------------------------------------------------
 * Bets table (for game pages + results page).
 * ------------------------------------------------------------------- */
function nflOutcomeCell(bet) {
  var cls = String(bet.outcome || "").replace("/", "");
  var badge = '<span class="badge ' + cls + '">' + esc(bet.outcome) + '</span>';
  if (!bet.corrected) return badge;
  var csvCls = String(bet.csvOutcome || "").replace("/", "");
  return badge
    + ' <span class="corrected-flag" title="Original CSV said ' + esc(bet.csvOutcome) + '. Corrected after independent ESPN verification.">Corrected</span>'
    + '<br><span class="csv-was">Was: <span class="badge ' + csvCls + '">' + esc(bet.csvOutcome) + '</span></span>';
}

function nflRenderBetsTable(bets, mountId, opts) {
  opts = opts || {};
  var showGame = opts.showGame !== false;
  var showWeek = opts.showWeek;
  var host = document.getElementById(mountId);
  if (!host) return;
  var html = '<div class="data-table-wrap"><table class="data-table"><thead><tr>'
    + (showWeek ? '<th>Wk</th>' : '')
    + '<th>Model</th><th>Prompt</th>'
    + (showGame ? '<th>Game</th>' : '')
    + '<th>Bet Type</th><th>Recommendation</th><th>Actual</th><th>Stake</th><th>Outcome</th><th>P/L</th>'
    + '</tr></thead><tbody>'
    + bets.map(function (b) {
      return '<tr' + (b.corrected ? ' class="row-corrected"' : '') + '>'
        + (showWeek ? '<td data-label="Week">' + b.week + '</td>' : '')
        + '<td data-label="Model"><span class="chip-model ' + b.model + '">' + b.model + '</span></td>'
        + '<td data-label="Prompt">' + b.prompt + '</td>'
        + (showGame ? '<td data-label="Game">' + esc(b.game) + '</td>' : '')
        + '<td data-label="Type">' + esc(b.betType) + '</td>'
        + '<td data-label="Rec">' + esc(b.recommendation) + '</td>'
        + '<td data-label="Actual">' + (b.actual ? esc(b.actual) : '<span style="color:var(--muted)">n/a</span>') + '</td>'
        + '<td data-label="Stake" class="tabular">$' + b.stake.toFixed(2) + '</td>'
        + '<td data-label="Outcome">' + nflOutcomeCell(b) + '</td>'
        + '<td data-label="P/L" class="pl-cell tabular ' + (b.pl > 0 ? "pos" : b.pl < 0 ? "neg" : "") + '">' + (b.pl == null ? 'Unavailable: odds missing' : nflMoney(b.pl)) + '</td>'
        + '</tr>';
    }).join("")
    + '</tbody></table></div>';
  host.innerHTML = html;
}

/* -------------------------------------------------------------------
 * Bar chart (kept from previous site.js; retinted to new palette).
 * ------------------------------------------------------------------- */
var NFL_MODEL_COLOR = { ChatGPT: "#10a37f", Claude: "#cc785c", Gemini: "#4285f4" };

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
    var inside = barW >= 55;
    var labelX = inside ? (item.value >= 0 ? tip - 8 : tip + 8) : (item.value >= 0 ? tip + 8 : tip - 8);
    var anchor = inside ? (item.value >= 0 ? "end" : "start") : (item.value >= 0 ? "start" : "end");
    var labelFill = inside ? "#fff" : "var(--ink)";
    return '<text x="4" y="' + (y + barH / 2 + 4) + '" font-size="13" font-weight="700" fill="var(--ink)">' + item.label + '</text>'
      + '<rect x="' + Math.min(x, zero) + '" y="' + y + '" width="' + Math.max(barW, 1) + '" height="' + barH + '" fill="' + color + '" rx="2"></rect>'
      + '<text x="' + labelX + '" y="' + (y + barH / 2 + 4) + '" font-size="13" font-weight="700" fill="' + labelFill + '" text-anchor="' + anchor + '">' + item.display + '</text>';
  }).join("");
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
    return { label: shortLabel[g] || g, value: pct, display: pct.toFixed(1) + '% (' + groups[g].wins + '/' + groups[g].total + ')', color: "var(--ink)" };
  });
  nflBarChart(mountId, items, { width: 640 });
}

/* -------------------------------------------------------------------
 * Card grid for archive (Season 1)
 * ------------------------------------------------------------------- */
function nflRenderGameCards(mountId, weekFilter) {
  var host = document.getElementById(mountId);
  if (!host) return;
  var games = NFL_GAMES.filter(function (g) { return !weekFilter || g.week === weekFilter; });
  if (!games.length) { host.innerHTML = ''; return; }
  var html = games.map(function (g) {
    var away = NFL_TEAMS[g.away] || {};
    var home = NFL_TEAMS[g.home] || {};
    var winner = g.awayScore > g.homeScore ? g.away : g.home;
    return ''
      + '<a class="mgame" href="Sports_Pages/' + g.id + '.html">'
      + '  <div class="mgame-head"><span>Week ' + g.week + '</span><span>' + esc(g.date) + ' &middot; Final</span></div>'
      + '  <div class="mgame-teams">'
      + '    <div class="mteam">'
      + nflLogoMark(g.away)
      + '      <span class="abbr">' + esc((away.abbr || "").toUpperCase()) + '</span>'
      + '      <span class="name">' + esc(g.away) + '</span>'
      + '    </div>'
      + '    <span class="mteam-vs final tabular">' + g.awayScore + ' &ndash; ' + g.homeScore + '</span>'
      + '    <div class="mteam">'
      + nflLogoMark(g.home)
      + '      <span class="abbr">' + esc((home.abbr || "").toUpperCase()) + '</span>'
      + '      <span class="name">' + esc(g.home) + '</span>'
      + '    </div>'
      + '  </div>'
      + '  <div class="mgame-consensus"><span class="lc">Winner</span><span class="rc">' + esc(winner) + '</span></div>'
      + '  <div class="mgame-cta"><span>View Analysis</span><span class="arrow" aria-hidden="true">&rarr;</span></div>'
      + '</a>';
  }).join("");
  host.innerHTML = html;
}

/* -------------------------------------------------------------------
 * Public alias for the safe HTML helper
 * ------------------------------------------------------------------- */
var esc = window.nflEsc;

// Counts are derived from saved responses, including deliberate no-bet decisions.
function nflRefreshPredictionCounts() {
  if (typeof nflPredictions2026Summary !== "function") return;
  var summaries = nflPredictions2026Summary();
  document.querySelectorAll(".lineup-card").forEach(function (card) {
    var label = card.querySelector(".lc-tag");
    var summary = summaries.find(function (entry) { return label && entry.model === label.textContent.trim(); });
    if (!summary) return;
    card.querySelectorAll(".lc-stat").forEach(function (stat) {
      if (/Bets locked/i.test(stat.textContent)) stat.querySelector(".n").textContent = summary.totalBets;
    });
    var note = card.querySelector(".lc-note");
    if (note) {
      var settled = NFL_PREDICTIONS_2026.flatMap(function (g) { return g.result ? (g.result.grades[summary.model] || []) : []; });
      var wins = settled.filter(function (g) { return g.outcome === "WIN"; }).length;
      note.textContent = summary.totalBets + " recorded picks. " + wins + " wins from " + settled.length + " graded bets. $" + summary.totalReserve + " reserved.";
    }
  });
}
nflRefreshPredictionCounts();
