#!/usr/bin/env node
/*
 * Week 2 prompt writer.
 *
 * Generates Prompts/2026/week-02/game-NN-<slug>.md for every Week 2 game,
 * using the forced-selection v3.1 template with:
 *   - lane split (Claude/Codex local, Gemini via /research/)
 *   - self-record clause: Claude/Codex write picks to disk directly,
 *     Gemini returns a full response verbatim in the chat
 *   - bet-type coverage reflection (game vs player, volume vs ceiling)
 *
 * Skips games that already have a prompt file. Safe to re-run.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const promptsOut = path.join(repoRoot, 'Prompts/2026/week-02');
fs.mkdirSync(promptsOut, { recursive: true });

const schedule = JSON.parse(fs.readFileSync(path.join(repoRoot, 'Data/2026/schedule/week-02.json'), 'utf8'));

function venueFor(g) {
  const map = {
    'panthers-falcons': 'Mercedes-Benz Stadium, Atlanta GA',
    'vikings-bears': 'Soldier Field, Chicago IL',
    'eagles-titans': 'Nissan Stadium, Nashville TN',
    'steelers-patriots': 'Gillette Stadium, Foxborough MA',
    'packers-jets': 'MetLife Stadium, East Rutherford NJ',
    'browns-buccaneers': 'Raymond James Stadium, Tampa FL',
    'saints-ravens': 'M&T Bank Stadium, Baltimore MD',
    'bengals-texans': 'NRG Stadium, Houston TX',
    'jaguars-broncos': 'Empower Field at Mile High, Denver CO',
    'raiders-chargers': 'SoFi Stadium, Inglewood CA',
    'commanders-cowboys': 'AT&T Stadium, Arlington TX',
    'seahawks-cardinals': 'State Farm Stadium, Glendale AZ',
    'dolphins-niners': "Levi's Stadium, Santa Clara CA",
    'colts-chiefs': 'GEHA Field at Arrowhead Stadium, Kansas City MO',
    'giants-rams': 'SoFi Stadium, Inglewood CA'
  };
  return map[g.id] || (g.home + ' home stadium');
}

function kickoffFull(g) {
  const [h, m] = g.kickoff_et.split(':');
  const hh = parseInt(h, 10);
  const suffix = hh >= 12 ? 'PM' : 'AM';
  const hh12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
  const minute = m.replace(/\s*PM|\s*AM/i, '');
  const dayName = new Date(g.date + 'T12:00:00Z').toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
  return `${g.date}, ${hh12}:${minute} ${suffix} ET (${dayName})`;
}

function promptBody(g, num) {
  const isTNF = g.network.toLowerCase().includes('prime');
  const isSNF = g.network.toLowerCase().includes('nbc');
  const isMNF = g.network.toLowerCase().includes('abc') || g.network.toLowerCase().includes('espn');
  const badge = isTNF ? ' (TNF)' : isSNF ? ' (SNF)' : isMNF ? ' (MNF)' : '';
  const venue = venueFor(g);
  const [h, m] = g.kickoff_et.split(':');
  const hh = parseInt(h, 10);
  const suffix = hh >= 12 ? 'PM' : 'AM';
  const hh12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
  const timeStr = `${g.date} ${hh12}:${m.replace(/\s*PM|\s*AM/i, '')} ${suffix} ET`;

  return `# Week 2, Game ${num}: ${g.away} at ${g.home}${badge}

- Kickoff: ${kickoffFull(g)}
- Venue: ${venue}
- Network: ${g.network}
- Lane: forced-selection v3.2 (independent-derivation, self-record)

Feed the same prompt below to Claude, Codex, and Gemini. Claude and Codex write their responses directly to disk under \`Docs/Responses/2026/week-02/game-${String(num).padStart(2, '0')}-${g.id}/\`. Gemini returns its full response in the chat because its web app cannot write to the repo. Do not add "Grading concerns" as a separate corrections doc, keep any inline.

## The prompt (copy from here down)

\`\`\`text
You are an independent entry in the CSolutions AI Analyzer NFL
study, Week 2, ${g.away} at ${g.home}. Kickoff ${timeStr} at
${venue}, broadcast on ${g.network}. game_id: ${g.id}.

This is a hypothetical research allocation, not authorization to
place wagers. Carlos does not personally participate in these model
allocations unless explicitly stated elsewhere, and any Carlos
picks are separate, independent comparison records rather than
part of the LLM entries. Check the current time and official
kickoff first. If kickoff has passed, stop and report that
pre-game eligibility has expired. Do not use hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game
parlay with at least TWO distinct, compatible legs. Allocate the
full $20 across these tickets, reserve must be zero. Every ticket
needs a positive stake. A parlay is one ticket with one stake.

WHERE TO PUT YOUR RESPONSE
  - If you can write to the repository filesystem (Claude via
    Claude Code, ChatGPT via Codex CLI): save your complete
    response as a single markdown file at
    \`Docs/Responses/2026/week-02/game-${String(num).padStart(2, '0')}-${g.id}/<model>-picks.md\`
    where \`<model>\` is \`claude\` or \`chatgpt\`. Overwrite any
    prior copy for this game. The file must contain: a short
    summary section, any inline grading concerns, and the full
    structured JSON response inside a fenced \`\`\`json code
    block. Do not split output across chat and disk.
  - If you cannot write to the repository (Gemini web app):
    return your COMPLETE response in the chat as one contiguous
    reply. Do not shorten. Include the same sections and the same
    fenced JSON block. Carlos will save it to
    \`Docs/Responses/2026/week-02/game-${String(num).padStart(2, '0')}-${g.id}/gemini-picks.md\`
    verbatim. If your reply would exceed one turn, say so at the
    top so Carlos knows to expect continuation. Do NOT truncate
    or summarize the JSON.

INDEPENDENT EVIDENCE REVIEW (the point of the study)
The study tracks real graded outcomes across two seasons. Do NOT
read any repository summary or handoff doc that tells you "what
has worked" or "what to avoid" for betting shapes. That would feed
you this project's bias. Derive shape patterns yourself from the
raw graded rows.

LANE-SPECIFIC RESEARCH GUIDANCE
The information below exists somewhere in the study's records.
Where and how you retrieve it is up to you. Do not skip it, and
do not summarize from memory when the actual data is available.

  What you should look up before you allocate:
    - Every Season 1 graded row and correction (bet-type, market
      side, sizing, outcome, and P/L). Shape-derivation source.
    - Every Season 2 pick recorded so far with its result and
      grade, including your own model's tickets. Your own record
      and the shapes inside your own winning and losing rows
      should shape what you repeat and what you drop.
    - Both team profiles for this matchup, current as of kickoff:
      season record, verified starters, depth chart, health
      snapshot with an as_of date.
    - Current grading rubric so you know how reasoning, sizing,
      source honesty, and self-reflection score.
    - Any prior raw model responses for reference.

  How you can retrieve it:
    - If you have local filesystem access at
      /home/cresp3/AI_Analyzer_Crespo, read the repo directly.
      Do not skip files to save tokens. Cite specific rows or
      blocks with a short quoted snippet actually pulled from
      the file.
    - If you are running web-only, the same corpus is published
      as browseable HTML under
      https://crespo1301.github.io/AI_Analyzer_Crespo/research/
      including a per-team page, a full grading rubric page, the
      Week 1 analysis, and the bet ledger. Fetch those. Cite
      each source you actually reach with a URL and a quoted
      snippet. Do not attempt raw.githubusercontent.com paths,
      they have never resolved for the web lane in this study.

Absolute honesty rules on fetches:
  - Snippets you quote must actually appear in the source.
    Snippets that do not appear will be graded as fabricated
    fetches under the source honesty axis, capping reasoning at
    1/5.
  - If a URL you tried refused, say so and set
    fetch_succeeded: false. Do not invent a snippet.

Derive, on your own, and cite the specific games or rows that
support each derivation:
  - Which pick shapes have generated the highest positive P/L in
    the study's data to date. Name the specific games and prompts
    where they cashed.
  - Which pick shapes have generated the most losses or the most
    box-score-audit corrections. Name the specific games and rows.
  - Your own model's Season 2 record and P/L, and what your
    winning picks shared vs. what your losing picks shared. Do
    not assume a pattern holds without a citation to an actual
    row.

SELF-REFLECTION
State your own current Season 2 P/L and record. State which of
your own picks you read. State which shapes from your own picks
you are keeping and which you are dropping this week.

RESEARCH ON THIS MATCHUP
Do open-web research on this specific matchup. Cite every source
with a full URL and a short quoted snippet you actually read. At
minimum verify the current spread, total, and moneyline, and name
the sportsbook. Read each team's official injury report and depth
chart page. Update your priors on where the offensive and
defensive volume actually settled after Week 1.

BET-TYPE COVERAGE (mandatory reflection)
Look at your own Week 1 and Week 2 Game 1 bet mix. If you filed
only game-level picks (spreads, moneylines, game totals,
favorite-ML plus total SGPs) and no player-level picks despite
team profiles carrying roster, depth chart, and health data,
name that. Then consider whether a defensible player-level pick
fits this matchup better than a reflex game-level SGP that
already absorbs the public read. Distinguish volume-anchored
player legs (rush attempts, red-zone role, target volume on the
projected winning side) from ceiling-anchored ones (passing TD
OVERs, receiving yardage OVERs). The study data has treated
those two shapes very differently. If you stay game-level, say
you considered a player-level angle and why you rejected it.

BOVADA PRICING HONESTY
Use Bovada only as an odds-review reference when it is reachable;
do not imply Carlos is placing these tickets there. Try to obtain
current event-specific Bovada prices from
https://www.bovada.lv/sports/football/nfl. Do not log in, request
credentials, bypass access controls, or place bets. Classify
EVERY ticket as exactly one of:
  - bovada_verified: exact line and current Bovada price actually
    retrieved. Include the exact captured_at time in ISO 8601.
    If you could not reach bovada.lv, do NOT use this label.
  - reference_market: exact line and price verified at another
    named book, NOT a verified Bovada offer.
  - conditional: exact proposed line and minimum acceptable
    American odds derived from your probability and value
    assessment, NOT an observed quote.

Never label a proposed target as a real quote. Never assume -110.
An unverified bovada_verified label is a Source Honesty failure
and caps reasoning at 1/5.

GRADING (rubric v2, published under /research/rubric.html or in
Docs/2026/grading-rubric.md)
Outcome first, then reasoning, then sizing, then source honesty,
then self-reflection. LOSS caps at 4/5 reasoning (default 3/5).
WIN with generic public reasoning caps at 2/5. Fabricated
citation or fabricated fetch caps reasoning at 1/5 regardless of
outcome. Sizing 0-3, Source Honesty 0-3, Self-Reflection 0-2 on
separate axes. Season ROI drives the primary ranking.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win
probability, odds basis, potential net profit, total return
including stake, break-even probability, and strongest
supporting AND opposing evidence. Standard arithmetic: A>0
profit = stake*A/100, A<0 profit = stake*100/abs(A), return =
stake + profit, break-even = 100/(A+100) or
abs(A)/(abs(A)+100).

ANSWER FORMAT
1. Winner, projected score, concise game script.
2. Team profile notes: cite specific season_record and
   health_snapshot values used. Flag any roster heuristic error.
3. Independent derivations from the graded data.
4. Self-reflection: your Season 2 record and P/L, which of your
   own past picks you read, and how they changed this week's
   allocation.
5. Ticket table including the required single and parlay,
   totaling $20 with zero reserve.
6. Evidence, failure scenarios, correlation, and missing-data
   notes.
7. One valid JSON object with fields:
   prompt_template ("forced-selection"), prompt_version ("3.2"),
   model_role, model_version, generated_at, week (2),
   game_id ("${g.id}"), forced_allocation (true),
   bankroll (20), total_stake (20), reserve (0),
   team_profiles_read (list of {path_or_url, as_of,
     season_record, health_key_players}),
   independent_derivations {profitable_shapes: [...],
     losing_shapes: [...], each with a citation to specific
     games or rows},
   self_reflection {past_picks_reviewed, pattern_kept,
     pattern_stopped},
   bets (with per-ticket fields per pricing-honesty spec),
   sources (with fetch_succeeded per URL and quoted snippet
     where applicable),
   reasoning_summary.

Do not soften picks to match the market. Do not report a
conditional ticket as a verified Bovada wager. Operator
acceptance alone cannot turn an unverified quote into a
verified one.
\`\`\`
`;
}

let wrote = 0;
schedule.games.forEach((g, idx) => {
  const num = idx + 1;
  const slug = `game-${String(num).padStart(2, '0')}-${g.id}`;
  const outFile = path.join(promptsOut, `${slug}.md`);
  if (fs.existsSync(outFile)) return;
  fs.writeFileSync(outFile, promptBody(g, num));
  console.log('wrote', outFile);
  wrote++;
});
console.log('Total new prompts:', wrote);
