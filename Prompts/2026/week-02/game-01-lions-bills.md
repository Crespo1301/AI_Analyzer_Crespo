You are an independent entry in the CSolutions AI Analyzer NFL
study, Week 2, Detroit Lions at Buffalo Bills. Kickoff 2026-09-17 8:15 PM ET at Highmark Stadium, Orchard Park NY,
broadcast on Prime Video (TNF). game_id: lions-bills.

This is a hypothetical research allocation, not authorization to place
wagers. Check the current time and official kickoff first. If kickoff
has passed, stop and report that pre-game eligibility has expired. Do
not use hindsight.

REQUIRED OUTPUT
Make at least ONE straight/single pick AND ONE parlay or same-game
parlay with at least TWO distinct, compatible legs. Allocate the full
$20 across these tickets; reserve must be zero. Every ticket needs a
positive stake. A parlay is one ticket with one stake.

LANE-SPECIFIC INSTRUCTIONS - READ THE ONE THAT MATCHES YOU

  * If you are Claude (Claude Code) or ChatGPT (Codex CLI): you have
    local filesystem access to the repository at
    /home/cresp3/AI_Analyzer_Crespo. Read these files directly:
      - assets/nfl-data.js  (NFL_BETS, NFL_CORRECTIONS - historical graded rows)
      - assets/nfl-predictions-2026.js  (every Week 1 2026 pick, result, and grade, including your own)
      - Data/2026/rosters/detroit-lions.json
      - Data/2026/rosters/buffalo-bills.json
      - Docs/2026/grading-rubric.md
      - Docs/2026/week-01-analysis.md  (safe to read; it is retrospective, not future guidance)
    Do NOT read Docs/2026/what-has-worked.md if it exists; that is a
    biased summary and defeats the study's independent-derivation goal.
    Cite specific rows or blocks in your reasoning, with a short quoted
    snippet you actually pulled from the file.

  * If you are Gemini (web app): you do NOT have working repository
    access. Every attempt in Week 1 fabricated a "404" for
    raw.githubusercontent.com URLs that in fact return 200. Stop
    attempting repository fetches. Do open-web research only:
      - Live sportsbook odds (name the book: DraftKings, FanDuel,
        Bovada if you can actually reach the page, ESPN BET, etc.).
      - Each team's official injury report / depth chart page.
      - ESPN, PFF, or beat-writer coverage on the specific matchup.
    Cite every source with a full URL and a short snippet you
    actually read (not a title, not something you invented). Do NOT
    claim to have read raw.githubusercontent.com/... paths. That
    claim will be graded as a fabricated fetch and cap reasoning at
    1/5 under rubric v2.
    A human paste from the repository may appear inside this prompt;
    if it does, treat that inline text as your only repository input.

WEEK 1 CONTEXT
Week 1 is fully graded. Both teams played:
  - Detroit beat New Orleans 31-30 in OT. Gibbs 2 rush TDs. Season 1-0.
  - Buffalo beat Houston 36-31. Allen led a shootout win. Season 1-0.
Both teams played high-scoring OVER-friendly games. Update priors.

BET-TYPE COVERAGE (mandatory reflection point)
Reviewing Week 1, all three models leaned heavily on GAME-LEVEL wagers:
spreads, moneylines, game totals, and SGPs shaped as "favorite ML +
game OVER/UNDER". Player-level analysis was almost entirely absent
from your reasoning even though your team profiles carry roster,
depth chart, prop_watchlist, and health_snapshot data specifically
to inform prop-level opinions.

This is an active concern for two reasons:
1. In the study's earlier data, generic game/score picks with vague
   reasoning were a losing family. Grading rubric v2 was designed
   partly in response - a WIN with generic public reasoning caps at
   2/5 while a pick with specific factor citation (roster edge,
   snap-count trend, injury-driven volume shift) can grade higher.
2. When you already know a player's role, health, and matchup, and
   have a defensible price, a player prop can carry sharper edge
   than a spread whose price already absorbs public heat.

Do not force a player prop where you do not have real conviction.
Do not stack multiple single-player OVER props (that shape has
lost consistently across Season 1 and hurt Gemini in Week 1's
Bucs-Bengals and Dolphins-Raiders SGPs).

But: at least CONSIDER whether a defensible player-level pick
(rush attempts on the projected winning side, a team-total +
player-role compound, an Anytime TD tied to red-zone role) fits
this specific matchup better than a reflex "favorite spread +
ML/total SGP" that is highly correlated with your public read.
The winners from that shape in Week 1 were volume-anchored
(Jeanty 23 rush att, Hall 22 rush att), not ceiling-anchored
(Burrow 2+ pass TDs missed at 1 TD, Achane 68.5+ rush yds missed
at 36).

If you choose to stick with a game-level ticket, explicitly say
you considered a player-level angle and rejected it, and why.

INDEPENDENT EVIDENCE REVIEW
The study tracks real graded outcomes across two seasons. Derive,
on your own, and cite the specific games or rows that support each
derivation:

- Which pick shapes have generated the highest positive P/L in this
  study to date? Name the specific games and prompts where they cashed.
- Which pick shapes have generated the most losses or box-score-audit
  corrections? Name the specific games and rows.
- What is your OWN model's Week 1 record and P/L in Season 2? What
  patterns did your winning picks share, and what patterns did your
  losing picks share? Filter to your own model_role in
  assets/nfl-predictions-2026.js (Claude/Codex lanes) or use the
  published leaderboard (Gemini lane).

Do not repeat conventional betting-industry heuristics unless the data
in this repository specifically supports them. Do not assume any pattern
holds without a citation to the actual rows.

TEAM PROFILE STEP (local-access lanes only)
Claude and Codex: read these files directly. Cite specific values in
your reasoning:
  - Data/2026/rosters/detroit-lions.json
  - Data/2026/rosters/buffalo-bills.json

Each profile contains: roster (offense skill positions, kicker, depth
tables), season_record (through Week 1), health_snapshot (out /
questionable / IR players as_of a specific date). Both files now
carry an updated season_record.last_game block with the Week 1
outcome. Name any health_snapshot player you are letting drive a
pick. If health_snapshot.as_of is older than 24 hours before
kickoff, note it as a staleness risk and verify against the team's
own injury report.

The auto-populated rosters use a jersey-number heuristic that has been
wrong before. In Season 2 Week 1 the following starters were all
flagged as heuristic errors: Broncos QB1 (Ehlinger -> Bo Nix),
Chargers QB1 (Lance -> Herbert), Cardinals QB1 (Brissett -> Murray),
Vikings QB1 (Murray -> McCarthy), Eagles RB1 (Bigsby -> Barkley),
Giants QB1, Chiefs QB1, Bears QB1. Verify starters independently
against the team's own depth chart page and flag any error you see
in the DET or BUF file.

Gemini: use ESPN's public depth-chart pages (espn.com/nfl/team/depth
/_/name/det and .../buf) and the team's own site (detroitlions.com,
buffalobills.com) instead of the roster JSON files.

SELF-REFLECTION
Your own model's Week 1 P/L is a matter of record. State it. State
which of your own past picks you read, and how they changed this
week's allocation. If your Week 1 shapes included specific losing
patterns (contrarian home dogs, road big favorites, single-player
OVER props, uncorrelated 3+ leg parlays, ceiling props on a losing
game script, etc.), say what you are or are not repeating and why.

RESEARCH
Do open-web research on this specific matchup. Cite every source with
a full URL and a short snippet you actually read (not just a title).
At minimum verify the current spread, total, and moneyline and note
which sportsbook. Read each team's official injury report and depth
chart page. News about a team can update your priors on that team
overall, not just for one bet.

BOVADA PRICING HONESTY
Carlos places tickets on Bovada. Try to obtain current event-specific
Bovada prices from https://www.bovada.lv/sports/football/nfl. Do not
log in, request credentials, bypass access controls, or place bets.
Classify EVERY ticket as exactly one of:
  - bovada_verified: exact line and current Bovada price actually
    retrieved. Include the exact captured_at time in ISO 8601. If you
    could not reach bovada.lv, do NOT use this label.
  - reference_market: exact line and price verified at another named
    book; NOT a verified Bovada offer.
  - conditional: exact proposed line and minimum acceptable American
    odds, derived from your probability and value assessment; NOT an
    observed quote.

Never label a proposed target as a real quote. Never assume -110.
Under grading rubric v2, an unverified bovada_verified label is a
Source Honesty failure and caps reasoning grade at 1/5.

GRADING PROCESS (Docs/2026/grading-rubric.md v2)
You will be graded on outcome first, then reasoning, then sizing,
then source honesty, then self-reflection.
  - LOSS caps at 4/5 reasoning; default LOSS grade is 3/5.
  - WIN with generic public reasoning caps at 2/5.
  - Fabricated citation or fabricated fetch caps reasoning at 1/5
    regardless of outcome. This includes claimed 404s on public
    raw.githubusercontent.com URLs that in fact return 200.
  - Sizing (0-3), Source Honesty (0-3), Self-Reflection (0-2) are
    separate axes.
  - Season ROI drives the primary ranking.

PAYOUT AND RISK
Each ticket must report stake, maximum loss, estimated win
probability, odds basis, potential net profit, total return including
stake, break-even probability and strongest supporting AND opposing
evidence. Standard arithmetic (A>0: profit=stake*A/100; A<0:
profit=stake*100/abs(A); return=stake+profit; break-even=100/(A+100)
or abs(A)/(abs(A)+100)).

ANSWER FORMAT
1. Winner, projected score, concise game script.
2. Team profile notes: cite specific season_record and health_snapshot
   values used. Flag any roster heuristic error.
3. Independent derivations from the graded data: which shapes you
   derived as historically profitable, which as losing, citing the
   specific rows.
4. Self-reflection: your Week 1 record and P/L for your own model,
   which of your own past picks you read, and how they changed this
   week's allocation.
5. Ticket table including the required single and parlay, totaling
   $20 with zero reserve.
6. Evidence, failure scenarios, correlation and missing-data notes.
7. One valid JSON object with fields:
   prompt_template ("forced-selection"), prompt_version ("3.1"),
   model_role, model_version, generated_at, week (2),
   game_id ("lions-bills"), forced_allocation (true), bankroll (20),
   total_stake (20), reserve (0),
   team_profiles_read (list of {path, as_of, season_record,
     health_key_players}),
   independent_derivations {profitable_shapes: [...], losing_shapes:
     [...], each with a citation to specific games or rows},
   self_reflection {past_picks_reviewed, pattern_kept,
     pattern_stopped},
   bets (with per-ticket fields per pricing-honesty spec),
   sources (with fetch_succeeded per URL and quoted snippet where
     applicable),
   reasoning_summary.

Do not soften picks to match the market. Do not report a conditional
ticket as a verified Bovada wager. Operator acceptance alone cannot
turn an unverified quote into a verified one.
