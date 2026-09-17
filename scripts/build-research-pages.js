#!/usr/bin/env node
/*
 * Publishes the study's research corpus as browseable HTML under /research/
 * so web-only models can reach it via the public site instead of
 * raw.githubusercontent.com URLs.
 *
 * Rerun on: roster update, new analysis doc, or rubric change.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const outDir = path.join(repoRoot, 'research');
const teamsDir = path.join(outDir, 'teams');
fs.mkdirSync(teamsDir, { recursive: true });

global.window = {};
eval(fs.readFileSync(path.join(repoRoot, 'assets/nfl-data.js'), 'utf8'));

function esc(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function readableInk(hex) {
  const rgb = hex.slice(1).match(/../g).map(v => parseInt(v, 16) / 255)
    .map(v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 > 0.42 ? '#0a0a0a' : '#ffffff';
}

function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  let out = '';
  let inList = false;
  let inCode = false;
  let inTable = false;
  const closeList = () => { if (inList) { out += '</ul>\n'; inList = false; } };
  const closeTable = () => { if (inTable) { out += '</tbody></table>\n'; inTable = false; } };
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.startsWith('```')) { closeList(); closeTable(); if (inCode) { out += '</code></pre>\n'; inCode = false; } else { out += '<pre><code>'; inCode = true; } continue; }
    if (inCode) { out += esc(line) + '\n'; continue; }
    if (/^\s*\|/.test(line) && /^\s*\|[\s\-:|]+\|/.test(lines[i + 1] || '')) {
      closeList();
      const headers = line.split('|').slice(1, -1).map(c => c.trim());
      out += '<table class="doc-table"><thead><tr>' + headers.map(h => `<th>${esc(h)}</th>`).join('') + '</tr></thead><tbody>';
      i += 1;
      inTable = true; continue;
    }
    if (inTable && /^\s*\|/.test(line)) {
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      out += '<tr>' + cells.map(c => `<td>${inlineMd(c)}</td>`).join('') + '</tr>';
      continue;
    } else if (inTable) {
      closeTable();
    }
    if (/^#{1,6}\s/.test(line)) {
      closeList();
      const lvl = line.match(/^#+/)[0].length;
      out += `<h${lvl}>${inlineMd(line.replace(/^#+\s*/, ''))}</h${lvl}>\n`;
    } else if (/^\s*[-*]\s/.test(line)) {
      if (!inList) { out += '<ul>'; inList = true; }
      out += `<li>${inlineMd(line.replace(/^\s*[-*]\s+/, ''))}</li>`;
    } else if (line.trim() === '') {
      closeList();
      out += '\n';
    } else {
      closeList();
      out += `<p>${inlineMd(line)}</p>\n`;
    }
  }
  closeList(); closeTable();
  if (inCode) out += '</code></pre>';
  return out;
}
function inlineMd(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|\s)\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

const shell = (title, description, body, relRoot = '..', extraCss = '') => `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}, Research, AI Analyzer</title>
<meta name="description" content="${esc(description)}">
<link rel="icon" type="image/svg+xml" href="${relRoot}/assets/favicon.svg">
<link rel="stylesheet" href="${relRoot}/assets/styles.css">
<link rel="stylesheet" href="${relRoot}/assets/research.css">
${extraCss}
</head><body>
<nav class="site-nav" aria-label="Site"><div class="nav-primary">
  <a class="nav-brand" href="${relRoot}/index.html"><span class="brand-mark">AI</span>Analyzer<span class="brand-sub">NFL</span></a>
  <ul class="nav-links">
    <li><a href="${relRoot}/nfl-2026.html">Week</a></li>
    <li><a href="${relRoot}/schedule.html">Schedule</a></li>
    <li><a href="${relRoot}/models.html">Models</a></li>
    <li><a href="${relRoot}/bet-database.html">Results</a></li>
    <li><a href="${relRoot}/methodology.html">Methodology</a></li>
    <li><a href="${relRoot}/research/index.html" class="active">Research</a></li>
  </ul>
</div></nav>
<main id="main">
${body}
</main>
<footer class="site-footer"><div class="wrap"><div class="foot-legal"><span>AI Analyzer, NFL research corpus</span><span>&copy; 2026 Carlos Crespo</span></div></div></footer>
</body></html>`;

const rosterDir = path.join(repoRoot, 'Data/2026/rosters');
const teamFiles = fs.readdirSync(rosterDir).filter(f => f.endsWith('.json'));
const teamData = teamFiles.map(f => {
  const p = JSON.parse(fs.readFileSync(path.join(rosterDir, f), 'utf8'));
  const slug = f.replace(/\.json$/, '');
  const t = NFL_TEAMS[p.team] || {};
  const rec = p.season_record || {};
  return { slug, team: p.team, profile: p, meta: t, wins: rec.wins || 0, losses: rec.losses || 0, ties: rec.ties || 0, pf: rec.points_for || 0, pa: rec.points_against || 0 };
});

function teamPage(entry) {
  const { slug, team, profile, meta, wins, losses, ties, pf, pa } = entry;
  const primary = meta.primary || '#0a0a0a';
  const secondary = meta.secondary || '#333333';
  const ink = readableInk(primary);
  const record = ties ? `${wins},${losses},${ties}` : `${wins},${losses}`;
  const games = profile.season_record ? (profile.season_record.games_played || 0) : 0;
  const ppg = games ? (pf / games).toFixed(1) : ',';
  const oppg = games ? (pa / games).toFixed(1) : ',';
  const diff = pf - pa;
  const diffStr = (diff > 0 ? '+' : '') + diff;
  const lastGame = profile.season_record && profile.season_record.last_game;
  const nextGame = profile.season_record && profile.season_record.next_game;
  const offense = profile.offense || {};
  const health = profile.health_snapshot || {};
  const depth = profile.depth || {};

  const starters = [
    ['QB1', offense.qb1], ['RB1', offense.rb1], ['WR1', offense.wr1],
    ['WR2', offense.wr2], ['TE1', offense.te1], ['K', (profile.special_teams || {}).k]
  ].filter(([, v]) => v).map(([role, v]) => {
    const flag = v.corrected_note || v.heuristic_pick ? '<span class="starter-flag" title="Heuristic override applied">verified</span>' : '';
    return `<div class="starter-card"><div class="sc-role">${role}</div><div class="sc-name">${esc(v.player || '')}</div><div class="sc-note">${esc(v.note || '')}</div>${flag}</div>`;
  }).join('');

  const positionGroup = (label, key) => {
    const arr = depth[key] || [];
    if (!arr.length) return '';
    const players = arr.map(pl => {
      const status = /Injured Reserve|Out|Questionable|Doubtful|suspension/i.test(pl.note || '') ? pl.note.match(/Injured Reserve|Out|Questionable|Doubtful|suspension/i)[0] : '';
      return `<li class="pg-row"><span class="pg-num">${pl.jersey != null ? pl.jersey : '?'}</span><span class="pg-name">${esc(pl.name)}</span>${status ? `<span class="pg-status status-${status.toLowerCase().replace(/[^a-z]/g, '')}">${esc(status)}</span>` : ''}<span class="pg-note">${esc((pl.note || '').replace(/,?\s*status:.*$/i, ''))}</span></li>`;
    }).join('');
    return `<section class="pos-group"><h3>${label}</h3><ul class="pg-list">${players}</ul></section>`;
  };

  const healthRow = (label, arr, cls) => arr.length
    ? `<div class="health-row"><span class="hr-label ${cls}">${label}</span><span class="hr-body">${arr.map(esc).join(', ')}</span></div>`
    : '';

  const body = `
  <header class="team-hero" style="--tp:${primary};--ts:${secondary};--ti:${ink}">
    <div class="wrap team-hero-inner">
      <a class="th-back" href="index.html">Back to research</a>
      <div class="th-conf">${esc(meta.conference || '')} ${esc(meta.division || '')}</div>
      <h1 class="th-name">${esc(team)}</h1>
      <div class="th-city">${esc(meta.city || '')}, ${esc(meta.stadium || '')}</div>
      <div class="th-record">
        <span class="thr-big">${record}</span>
        <span class="thr-meta"><strong>${pf}</strong> PF, <strong>${pa}</strong> PA, <strong>${diffStr}</strong> diff</span>
      </div>
    </div>
  </header>

  <section class="wrap research-band">
    <div class="stat-grid">
      <div class="stat-block"><div class="sb-l">Points/game</div><div class="sb-v tabular">${ppg}</div></div>
      <div class="stat-block"><div class="sb-l">Points allowed/game</div><div class="sb-v tabular">${oppg}</div></div>
      <div class="stat-block"><div class="sb-l">Games played</div><div class="sb-v tabular">${games}</div></div>
      <div class="stat-block"><div class="sb-l">Point differential</div><div class="sb-v tabular ${diff > 0 ? 'sb-pos' : diff < 0 ? 'sb-neg' : ''}">${diffStr}</div></div>
    </div>

    ${lastGame || nextGame ? `<div class="games-row">
      ${lastGame ? `<article class="game-slice last"><div class="gs-tag">Last game, Week ${lastGame.week}</div><div class="gs-op">vs ${esc(lastGame.opponent)}</div><div class="gs-score">${esc(lastGame.result)}</div>${lastGame.notes ? `<p class="gs-note">${esc(lastGame.notes)}</p>` : ''}</article>` : ''}
      ${nextGame ? `<article class="game-slice next"><div class="gs-tag">Next game, Week ${nextGame.week}</div><div class="gs-op">vs ${esc(nextGame.opponent)}</div><div class="gs-score">${esc(nextGame.date)}, ${esc(nextGame.kickoff_et || '')}</div><p class="gs-note">${esc(nextGame.network || '')}${nextGame.location ? `, ${esc(nextGame.location)}` : ''}</p></article>` : ''}
    </div>` : ''}
  </section>

  <section class="wrap research-band">
    <div class="research-head"><div class="rh-kicker">Verified starters</div><h2 class="rh-title">Who runs the offense</h2></div>
    <div class="starters-grid">${starters}</div>
  </section>

  <section class="wrap research-band">
    <div class="research-head"><div class="rh-kicker">Health snapshot</div><h2 class="rh-title">Availability as of ${esc(health.as_of || 'unknown')}</h2></div>
    <div class="health-block">
      ${healthRow('OUT', health.out || [], 'out')}
      ${healthRow('QUESTIONABLE', health.questionable || [], 'q')}
      ${healthRow('IR', health.ir || [], 'ir')}
      ${health.notes ? `<p class="health-note">${esc(health.notes)}</p>` : ''}
    </div>
  </section>

  <section class="wrap research-band">
    <div class="research-head"><div class="rh-kicker">Depth chart</div><h2 class="rh-title">Position groups</h2></div>
    <div class="pos-grid">
      ${positionGroup('Quarterbacks', 'qbs')}
      ${positionGroup('Running backs', 'rbs')}
      ${positionGroup('Wide receivers', 'wrs')}
      ${positionGroup('Tight ends', 'tes')}
    </div>
  </section>

  ${(profile.changes_log || []).length ? `<section class="wrap research-band">
    <div class="research-head"><div class="rh-kicker">Changes log</div><h2 class="rh-title">What has moved</h2></div>
    <ul class="change-log">${(profile.changes_log || []).map(c => `<li><time>${esc(c.date)}</time><p>${esc(c.change)}${c.source ? ` <a class="cl-source" href="${esc(c.source)}" target="_blank" rel="noopener">source</a>` : ''}</p></li>`).join('')}</ul>
  </section>` : ''}
  `;

  return shell(team + ', Team Profile', 'Roster, verified starters, depth chart, health, and season record for ' + team + '.', body, '../..');
}

teamData.forEach(entry => {
  fs.writeFileSync(path.join(teamsDir, entry.slug + '.html'), teamPage(entry));
});

// Teams index (grouped by division)
const divisionOrder = ['AFC East', 'AFC North', 'AFC South', 'AFC West', 'NFC East', 'NFC North', 'NFC South', 'NFC West'];
const grouped = {};
teamData.forEach(t => {
  const key = `${t.meta.conference || ''} ${t.meta.division || ''}`.trim();
  (grouped[key] = grouped[key] || []).push(t);
});
const divisionsHtml = divisionOrder.map(div => {
  const teams = (grouped[div] || []).sort((a, b) => (b.wins - b.losses) - (a.wins - a.losses));
  if (!teams.length) return '';
  return `<section class="division-block">
    <h2 class="div-title">${esc(div)}</h2>
    <div class="team-cards">
      ${teams.map(t => `<a class="team-card" style="--tp:${t.meta.primary || '#0a0a0a'};--ti:${readableInk(t.meta.primary || '#0a0a0a')}" href="${esc(t.slug)}.html">
        <div class="tc-abbr">${esc((t.meta.abbr || '').toUpperCase())}</div>
        <div class="tc-body"><div class="tc-name">${esc(t.team)}</div><div class="tc-record tabular">${t.wins},${t.losses}${t.ties ? ',' + t.ties : ''}</div></div>
      </a>`).join('')}
    </div>
  </section>`;
}).join('');

fs.writeFileSync(path.join(teamsDir, 'index.html'), shell('All 32 Team Profiles', 'Every team profile with rosters, depth charts, health snapshots, and season records.', `
  <section class="research-hero">
    <div class="wrap">
      <div class="rh-eyebrow">Research corpus</div>
      <h1 class="rh-h1">Team profiles</h1>
      <p class="rh-lede">32 teams, grouped by division, ranked by record within each division. Every card links to the full profile with verified starters, depth chart, and health snapshot.</p>
    </div>
  </section>
  <div class="wrap">${divisionsHtml}</div>
`, '../..'));

// Doc pages
const docs = [
  { in: 'Docs/2026/grading-rubric.md', slug: 'rubric', title: 'Grading rubric v2', desc: 'Outcome-primary grading rubric for locked model picks.' },
  { in: 'Docs/2026/week-01-analysis.md', slug: 'week-01-analysis', title: 'Week 1 analysis', desc: 'What worked, what did not, and the bet-type coverage observation.' },
  { in: 'Docs/2026/iteration-system.md', slug: 'iteration-system', title: 'Iteration system', desc: 'How weekly prompts, rubric, and roster corrections evolve.' }
];
docs.forEach(d => {
  const src = path.join(repoRoot, d.in);
  if (!fs.existsSync(src)) return;
  const md = fs.readFileSync(src, 'utf8');
  const body = `
  <section class="research-hero">
    <div class="wrap">
      <div class="rh-eyebrow">Research doc</div>
      <h1 class="rh-h1">${esc(d.title)}</h1>
      <p class="rh-lede">${esc(d.desc)}</p>
    </div>
  </section>
  <div class="wrap"><article class="doc-body">${mdToHtml(md)}</article></div>`;
  fs.writeFileSync(path.join(outDir, d.slug + '.html'), shell(d.title, d.desc, body, '..'));
});

// Research index
fs.writeFileSync(path.join(outDir, 'index.html'), shell('Research', 'All study research materials, published as browseable HTML.', `
  <section class="research-hero">
    <div class="wrap">
      <div class="rh-eyebrow">Research corpus</div>
      <h1 class="rh-h1">Everything the models can cite</h1>
      <p class="rh-lede">A public mirror of the study's research materials, rebuilt on every push. Any web-only model can reach these pages at stable URLs without needing repo access.</p>
    </div>
  </section>
  <div class="wrap">
    <div class="research-cards">
      <a class="rc rc-teams" href="teams/index.html">
        <div class="rc-kicker">32 profiles</div>
        <h3>Team profiles</h3>
        <p>Verified starters, depth chart, health snapshot, and season record for every team. Grouped by division.</p>
      </a>
      <a class="rc rc-rubric" href="rubric.html">
        <div class="rc-kicker">v2, effective 2026-09-11</div>
        <h3>Grading rubric</h3>
        <p>Outcome primary, reasoning secondary. Sizing, source honesty, and self-reflection scored on separate axes.</p>
      </a>
      <a class="rc rc-analysis" href="week-01-analysis.html">
        <div class="rc-kicker">Retrospective</div>
        <h3>Week 1 analysis</h3>
        <p>Full recap. What worked, what did not, model-by-model P/L, and the bet-type coverage observation heading into Week 2.</p>
      </a>
      <a class="rc rc-iter" href="iteration-system.html">
        <div class="rc-kicker">System doc</div>
        <h3>Iteration log</h3>
        <p>How the prompt template, grading rubric, and roster verification evolve week to week.</p>
      </a>
      <a class="rc rc-ledger" href="../bet-database.html">
        <div class="rc-kicker">Live ledger</div>
        <h3>Bet database</h3>
        <p>Every graded pick from Season 1 and Season 2. Filterable. This is the raw data the shape derivations should cite.</p>
      </a>
      <a class="rc rc-prompts" href="prompts/index.html">
        <div class="rc-kicker">Copy-ready</div>
        <h3>Weekly prompts</h3>
        <p>Every locked forced-selection prompt with a one-click copy button. Paste straight into each model.</p>
      </a>
      <a class="rc rc-season" href="../nfl-2026.html">
        <div class="rc-kicker">Live standings</div>
        <h3>Season hub</h3>
        <p>Current leaderboard, weekly tracker, and per-game locked picks. Where the study lives now.</p>
      </a>
    </div>

    <section class="research-note">
      <h2>Note for web-only models</h2>
      <p>Every page linked above is at a stable public URL under <code>/research/</code> or <code>/</code>. Fetching these will actually resolve. Do not attempt <code>raw.githubusercontent.com</code> paths, they have never worked for the web lane and fabricated 404s cap reasoning at 1/5 under the source-honesty axis of rubric v2.</p>
    </section>
  </div>
`, '..'));

// Prompt pages: publish each weekly forced-selection prompt with a copy button.
const promptsRoot = path.join(repoRoot, 'Prompts/2026');
const promptsOut = path.join(outDir, 'prompts');
fs.mkdirSync(promptsOut, { recursive: true });
let promptCount = 0;
const promptsByWeek = {};
if (fs.existsSync(promptsRoot)) {
  fs.readdirSync(promptsRoot).forEach(weekDir => {
    const weekPath = path.join(promptsRoot, weekDir);
    if (!fs.statSync(weekPath).isDirectory()) return;
    const files = fs.readdirSync(weekPath).filter(f => f.endsWith('.md'));
    if (!files.length) return;
    const weekOut = path.join(promptsOut, weekDir);
    fs.mkdirSync(weekOut, { recursive: true });
    promptsByWeek[weekDir] = [];
    files.forEach(f => {
      const raw = fs.readFileSync(path.join(weekPath, f), 'utf8');
      const slug = f.replace(/\.md$/, '');
      const titleGuess = slug.replace(/^game-\d+-/, '').replace(/-/g, ' ');
      promptsByWeek[weekDir].push({ slug, title: titleGuess });
      const body = `
  <section class="research-hero">
    <div class="wrap">
      <div class="rh-eyebrow">${esc(weekDir.replace('-', ' '))}, forced-selection v3.1</div>
      <h1 class="rh-h1">${esc(titleGuess)}</h1>
      <p class="rh-lede">Paste this prompt into each model to lock its ticket. Every model gets identical text. Model output goes into <code>Docs/Responses/2026/${esc(weekDir)}/game-<slug>/</code>.</p>
      <button id="copy-btn" class="copy-btn" type="button">Copy prompt</button>
    </div>
  </section>
  <div class="wrap">
    <textarea id="prompt-body" class="prompt-body" readonly>${esc(raw)}</textarea>
  </div>
  <script>
    (function(){
      var btn = document.getElementById('copy-btn');
      var ta = document.getElementById('prompt-body');
      btn.addEventListener('click', function () {
        ta.select();
        try {
          navigator.clipboard.writeText(ta.value).then(function(){ flash('Copied'); }, function(){ document.execCommand('copy'); flash('Copied'); });
        } catch(e) { document.execCommand('copy'); flash('Copied'); }
      });
      function flash(msg) {
        var prev = btn.textContent;
        btn.textContent = msg;
        setTimeout(function(){ btn.textContent = prev; }, 1500);
      }
    })();
  </script>`;
      fs.writeFileSync(path.join(weekOut, slug + '.html'), shell(titleGuess + ' prompt', 'Locked forced-selection prompt for ' + titleGuess + '.', body, '../../..'));
      promptCount++;
    });
  });
}

// Prompts index (per week)
const weekBlocks = Object.keys(promptsByWeek).sort().map(week => {
  const list = promptsByWeek[week].sort((a, b) => a.slug.localeCompare(b.slug));
  return `<section class="division-block">
    <h2 class="div-title">${esc(week.replace('-', ' '))}</h2>
    <div class="research-cards">${list.map(p => `<a class="rc rc-analysis" href="${esc(week)}/${esc(p.slug)}.html"><div class="rc-kicker">${esc(p.slug)}</div><h3>${esc(p.title)}</h3><p>Copy-ready prompt page with one-click copy.</p></a>`).join('')}</div>
  </section>`;
}).join('');
fs.writeFileSync(path.join(promptsOut, 'index.html'), shell('All prompts', 'Weekly forced-selection prompts, viewable and copyable.', `
  <section class="research-hero">
    <div class="wrap">
      <div class="rh-eyebrow">Prompts</div>
      <h1 class="rh-h1">Weekly forced-selection prompts</h1>
      <p class="rh-lede">Every prompt the models are fed each week, in one place. Each page has a copy button so you can paste the exact text into each model without formatting drift.</p>
    </div>
  </section>
  <div class="wrap">${weekBlocks}</div>
`, '../..'));

console.log('Wrote research/index.html, research/teams/index.html, ' + teamFiles.length + ' team profiles, ' + docs.length + ' doc pages, ' + promptCount + ' prompt pages.');
