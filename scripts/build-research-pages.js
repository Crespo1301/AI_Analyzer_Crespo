#!/usr/bin/env node
/*
 * Publishes the study's research corpus as browseable HTML under /research/
 * so Gemini (and any other web-only model) can reach it via the public site
 * instead of raw.githubusercontent.com URLs (which Gemini has repeatedly
 * fabricated 404s for).
 *
 * Emits:
 *   research/index.html                         - landing/table-of-contents
 *   research/rubric.html                        - grading rubric v2 (from Docs/2026/grading-rubric.md)
 *   research/week-01-analysis.html              - Week 1 retrospective
 *   research/iteration-system.html              - iteration log
 *   research/teams/<slug>.html                  - per-team profile (all 32)
 *   research/teams/index.html                   - team index
 *
 * Rerun on: roster update, new week analysis doc, or rubric change.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const outDir = path.join(repoRoot, 'research');
const teamsDir = path.join(outDir, 'teams');
fs.mkdirSync(teamsDir, { recursive: true });

function esc(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// Minimal markdown->HTML for our docs (headings, bold, italic, code, lists, links, paragraphs).
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
    if (line.startsWith('```')) { closeList(); closeTable(); if (inCode) { out += '</pre></code>\n'; inCode = false; } else { out += '<pre><code>'; inCode = true; } continue; }
    if (inCode) { out += esc(line) + '\n'; continue; }
    // Tables: line beginning with |
    if (/^\s*\|/.test(line) && /^\s*\|/.test(lines[i + 1] || '') && /^\s*\|[\s\-:|]+\|/.test(lines[i + 1] || '')) {
      closeList();
      const headers = line.split('|').slice(1, -1).map(c => c.trim());
      out += '<table class="doc-table"><thead><tr>' + headers.map(h => `<th>${esc(h)}</th>`).join('') + '</tr></thead><tbody>';
      i += 1; // skip separator
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

const shell = (title, description, body, relRoot = '..') => `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · Research · AI Analyzer</title>
<meta name="description" content="${esc(description)}">
<link rel="icon" type="image/svg+xml" href="${relRoot}/assets/favicon.svg">
<link rel="stylesheet" href="${relRoot}/assets/styles.css">
</head><body>
<nav class="site-nav" aria-label="Site"><div class="nav-primary">
  <a class="nav-brand" href="${relRoot}/index.html"><span class="brand-mark">AI</span>Analyzer<span class="brand-sub">NFL</span></a>
  <ul class="nav-links">
    <li><a href="${relRoot}/nfl-2026.html">Week</a></li>
    <li><a href="${relRoot}/schedule.html">Schedule</a></li>
    <li><a href="${relRoot}/models.html">Models</a></li>
    <li><a href="${relRoot}/bet-database.html">Results</a></li>
    <li><a href="${relRoot}/methodology.html">Methodology</a></li>
    <li><a href="${relRoot}/research/index.html">Research</a></li>
  </ul>
</div></nav>
<main id="main"><section class="band band-paper"><div class="wrap">
${body}
</div></section></main>
</body></html>`;

// 1) Team profile pages
const rosterDir = path.join(repoRoot, 'Data/2026/rosters');
const teamFiles = fs.readdirSync(rosterDir).filter(f => f.endsWith('.json'));
const teamIndex = [];
teamFiles.forEach(f => {
  const p = JSON.parse(fs.readFileSync(path.join(rosterDir, f), 'utf8'));
  const slug = f.replace(/\.json$/, '');
  const rec = p.season_record || {};
  teamIndex.push({ slug, team: p.team, wins: rec.wins || 0, losses: rec.losses || 0, ties: rec.ties || 0 });
  const offense = p.offense || {};
  const health = p.health_snapshot || {};
  const rowsHtml = ['qb1','qb2','rb1','rb2','wr1','wr2','te1'].map(role => {
    const v = offense[role];
    if (!v) return '';
    return `<tr><th>${role.toUpperCase()}</th><td>${esc(v.player || '')}</td><td>${esc(v.note || '')}</td></tr>`;
  }).join('');
  const depth = p.depth || {};
  const depthBlock = ['qbs','rbs','wrs','tes'].map(k => {
    const arr = depth[k] || [];
    if (!arr.length) return '';
    return `<h3>${k.toUpperCase()}</h3><ul>${arr.map(pl => `<li><strong>#${pl.jersey ?? '?'} ${esc(pl.name)}</strong> — ${esc(pl.note || '')}</li>`).join('')}</ul>`;
  }).join('');
  const lastGame = rec.last_game;
  const nextGame = rec.next_game;
  const body = `
    <div class="band-head"><div><div class="b-kicker">Team profile · Season 2</div><div class="b-title">${esc(p.team)}</div></div>
    <a class="b-more" href="index.html">&larr; All teams</a></div>
    <div class="factors">
      <div class="factor-row"><div class="fr-label">Season record</div><div class="fr-body">${rec.wins || 0}-${rec.losses || 0}${rec.ties ? '-' + rec.ties : ''} &middot; ${rec.points_for || 0} PF / ${rec.points_against || 0} PA (${rec.games_played || 0} games)</div></div>
      ${lastGame ? `<div class="factor-row"><div class="fr-label">Last game</div><div class="fr-body">Week ${lastGame.week} vs ${esc(lastGame.opponent)}: ${esc(lastGame.result)} (${esc(lastGame.date)}). ${esc(lastGame.notes || '')}</div></div>` : ''}
      ${nextGame ? `<div class="factor-row"><div class="fr-label">Next game</div><div class="fr-body">Week ${nextGame.week} vs ${esc(nextGame.opponent)} — ${esc(nextGame.date)} ${esc(nextGame.kickoff_et || '')} on ${esc(nextGame.network || '')}</div></div>` : ''}
      <div class="factor-row"><div class="fr-label">Source</div><div class="fr-body"><a href="${esc(p.source || '#')}" target="_blank" rel="noopener">${esc(p.source || '')}</a> · verified ${esc(p.last_verified || '')}</div></div>
    </div>
    <h2>Starters</h2>
    <table class="doc-table"><thead><tr><th>Role</th><th>Player</th><th>Note</th></tr></thead><tbody>${rowsHtml}</tbody></table>
    <h2>Health snapshot (as of ${esc(health.as_of || '')})</h2>
    <p><strong>OUT:</strong> ${(health.out || []).map(esc).join(', ') || 'none listed'}</p>
    <p><strong>Questionable:</strong> ${(health.questionable || []).map(esc).join(', ') || 'none listed'}</p>
    <p><strong>IR:</strong> ${(health.ir || []).map(esc).join(', ') || 'none listed'}</p>
    ${health.notes ? `<p class="disclaimer">${esc(health.notes)}</p>` : ''}
    <h2>Depth chart</h2>
    ${depthBlock}
    <h2>Changes log</h2>
    <ul>${(p.changes_log || []).map(c => `<li><strong>${esc(c.date)}</strong> — ${esc(c.change)}${c.source ? ` <a href="${esc(c.source)}" target="_blank" rel="noopener">source</a>` : ''}</li>`).join('')}</ul>
  `;
  fs.writeFileSync(path.join(teamsDir, slug + '.html'), shell(p.team + ' — Team Profile', 'Roster, depth chart, health, and season record for ' + p.team, body, '../..'));
});

// Teams index
const teamListHtml = teamIndex.sort((a, b) => a.team.localeCompare(b.team)).map(t => {
  const record = (t.wins || t.losses || t.ties) ? `${t.wins}-${t.losses}${t.ties ? '-' + t.ties : ''}` : '—';
  return `<li><a href="${esc(t.slug)}.html">${esc(t.team)}</a> <span class="tabular" style="color:var(--muted);font-size:12px">(${record})</span></li>`;
}).join('');
fs.writeFileSync(path.join(teamsDir, 'index.html'), shell('All Team Profiles', '32 team profiles with rosters, depth charts, health snapshots and season records', `
  <div class="band-head"><div><div class="b-kicker">Research</div><div class="b-title">All 32 team profiles</div></div><a class="b-more" href="../index.html">&larr; Research index</a></div>
  <p>Each profile carries the current roster, verified starter overrides, health snapshot, season record with last-game notes, and next-game info. Data mirrors <code>Data/2026/rosters/&lt;slug&gt;.json</code> and rebuilds on every push.</p>
  <ul style="columns:2;column-gap:32px">${teamListHtml}</ul>
`, '../..'));

// 2) Doc pages from Markdown
const docs = [
  { in: 'Docs/2026/grading-rubric.md', slug: 'rubric', title: 'Grading rubric v2', desc: 'Outcome-primary grading rubric for locked model picks. Version 2.' },
  { in: 'Docs/2026/week-01-analysis.md', slug: 'week-01-analysis', title: 'Week 1 analysis', desc: 'What worked, what didn\'t, and the bet-type coverage observation.' },
  { in: 'Docs/2026/iteration-system.md', slug: 'iteration-system', title: 'Iteration system', desc: 'How weekly prompts, rubric, and roster corrections are updated over the season.' }
];
docs.forEach(d => {
  const src = path.join(repoRoot, d.in);
  if (!fs.existsSync(src)) return;
  const md = fs.readFileSync(src, 'utf8');
  const html = `<div class="band-head"><div><div class="b-kicker">Research</div><div class="b-title">${esc(d.title)}</div></div><a class="b-more" href="index.html">&larr; Research index</a></div><div class="doc-body">${mdToHtml(md)}</div>`;
  fs.writeFileSync(path.join(outDir, d.slug + '.html'), shell(d.title, d.desc, html, '..'));
});

// 3) Research index
const teamsRecords = teamIndex.sort((a, b) => a.team.localeCompare(b.team)).slice(0, 6).map(t => `${esc(t.team)} (${t.wins}-${t.losses})`).join(', ');
fs.writeFileSync(path.join(outDir, 'index.html'), shell('Research', 'All study research materials — team profiles, grading rubric, weekly analyses, and iteration history — published as a single browseable index.', `
  <div class="band-head"><div><div class="b-kicker">Research corpus</div><div class="b-title">Everything the models can reference</div></div></div>
  <p>This is a mirror of the study's research materials as browseable HTML so any model — including web-only lanes — can reach them without needing repo access. Every page here rebuilds on push from <code>Data/</code> and <code>Docs/</code> and is safe to cite directly.</p>

  <h2>Team profiles</h2>
  <p>32 profiles at <a href="teams/index.html">/research/teams/</a> — each with roster, verified-starter notes, depth chart, health snapshot, and season record with last-game and next-game blocks.</p>

  <h2>Grading rubric</h2>
  <p><a href="rubric.html">Grading rubric v2</a>. Outcome primary; reasoning secondary; sizing, source honesty, and self-reflection scored separately.</p>

  <h2>Weekly analyses</h2>
  <p><a href="week-01-analysis.html">Week 1 analysis</a> — what worked, what didn't, model-by-model P/L, and the bet-type coverage observation.</p>

  <h2>Iteration system</h2>
  <p><a href="iteration-system.html">Iteration system</a> — how the prompt template, rubric, and roster verification are adjusted week-to-week.</p>

  <h2>Live results</h2>
  <p>Bet-by-bet grades and the running leaderboard live outside this section: <a href="../bet-database.html">bet database</a> and <a href="../nfl-2026.html">2026 season hub</a>.</p>

  <h2>Note for web-only models (Gemini)</h2>
  <p>Every page above is public HTML at a stable <code>/research/…</code> path. Fetching these instead of <code>raw.githubusercontent.com</code> paths will actually resolve. Fabricated 404s on public URLs are graded as Source Honesty failures under rubric v2.</p>
`, '..'));

console.log('Wrote research/index.html, research/teams/index.html, ' + teamFiles.length + ' team profiles, ' + docs.length + ' doc pages.');
