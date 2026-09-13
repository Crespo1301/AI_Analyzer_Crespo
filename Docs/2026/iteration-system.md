# 2026 Iteration System

The 2026 AI Analyzer should be easy to adjust as the NFL season develops. The
system should let us change prompts, strategy, grading, and presentation without
breaking the weekly record.

## Weekly Loop (v2, effective 2026-09-11)

1. **Update team profiles**
   - Run `node scripts/update-team-profiles.js` to recompute `season_record`
     from graded `NFL_GAMES` entries.
   - Hand-edit `Data/2026/rosters/<team-slug>.json` `health_snapshot` for
     the two teams playing: fill `out`, `questionable`, `ir`, `notes`, and
     stamp `as_of` with today's date. Cite the team's official injury
     report URL in the accompanying `changes_log` entry when a designation
     changes.

2. **Create prompts**
   - Fill `Prompts/2026/templates/forced-selection.md` v2.2 for the game.
   - The prompt references both team profiles by path so the model has a
     single source of team truth (roster, health, record).

3. **Run prompts**
   - Save every raw response in `Docs/Responses/2026/week-XX/`.

4. **Extract bets**
   - Convert each response into structured picks in
     `NFL_PREDICTIONS_2026`.
   - Preserve the original wording.
   - Flag vague, missing-line, or ungradable picks immediately.

5. **Grade after the games**
   - Add game and bet rows to `assets/nfl-data.js` NFL_GAMES + NFL_BETS.
   - Add direct ESPN box-score links.
   - Run `node scripts/verify-nfl-data.js`.
   - Run `node scripts/build-game-pages.js`.
   - Re-run `node scripts/update-team-profiles.js` so the season_record
     block on each played team advances before next week's prompts run.

6. **Review and adjust**
   - Score outcomes.
   - Score reasoning using `Docs/2026/grading-rubric.md` v2. Outcome is
     the primary axis; reasoning is bounded by outcome.
   - Write one short weekly note on what changed for the next slate.

## Change Log For Prompts

Every prompt change should be recorded with:

- Date changed.
- Prompt name.
- What changed.
- Why it changed.
- What metric should improve.

Example:

```text
2026-09-10
Prompt: context-heavy
Change: added explicit "what would make this bet lose" field.
Reason: models were giving confident picks without downside risk.
Expected improvement: fewer weak props and fewer public-looking spread picks.
```

## Change Log (actual)

### 2026-09-12: Retire templates, write from evidence week by week

Removed `Prompts/2026/templates/` entirely. Templates rewarded copying
language rather than reading evidence; the v2.0 -> v2.1 -> v2.2
progression was symptomatic of the wrong abstraction. Replaced with:

- `Docs/2026/what-has-worked.md`: living analytic doc, updated after
  every graded slate. Anchored in NFL_BETS across Seasons 1 and 2 as of
  the update date. Contains the current record of P/L-positive shapes,
  the loss patterns to avoid, and pointers to the rubric v2 axes.
- `scripts/prep-week1-prompts.js`: one-off generator that embedded the
  current what-has-worked content directly into each Week 1 game prompt.
  Not reusable next week. When Week 2 comes, rewrite what-has-worked.md
  from the new evidence, then write a new prep-weekN generator that
  embeds the new state.

Also added `scripts/refresh-week-health.js` which reads
`Data/2026/schedule/week-XX.json`, fetches the ESPN roster feed for
every team playing that week, and populates each team's
`health_snapshot` block from the injury designations in the feed. Ran
against Week 1; 32/32 teams updated.

New weekly loop step ordering:

1. `node scripts/update-team-profiles.js` (updates season_record from
   graded NFL_GAMES).
2. `node scripts/refresh-week-health.js <week>` (updates
   health_snapshot from ESPN roster feed).
3. Manually augment health_snapshot for anything ESPN doesn't cover.
4. Rewrite `Docs/2026/what-has-worked.md` from the current NFL_BETS
   state.
5. Write a new `scripts/prep-weekN-prompts.js` that embeds the current
   what-has-worked content.
6. Run it.
7. Send prompts, save raw responses, extract picks, grade, promote,
   re-run step 1.

### 2026-09-11: Grading rubric v2 and team-profile workflow

Two changes shipped after the Week 1 Rams / 49ers Melbourne outcome.

**Grading rubric v2** in `Docs/2026/grading-rubric.md`. v1 rewarded "the
model named a real factor" even when the outcome disagreed. Sports
predictions are wrong all the time, and the team that looks better on
paper is often the team that loses; Week 1's Rams beat-down by SF is
the working example. v1 would score a wrong-side LAR pick citing "real
factors" (Aaron Donald out, Collins out, MCG surface, Stafford
continuity) at 5/5 reasoning; v2 caps a LOSS at 4/5 and defaults it to
3/5. WIN with generic public reasoning caps at 2/5. Fabricated
citations cap the reasoning grade at 1/5 regardless of outcome. Primary
ranking is season ROI; reasoning, sizing, source honesty, and
self-reflection are secondary axes explaining how the model got there.
Methodology page updated to match.

**Team-profile workflow.** Every `Data/2026/rosters/<team-slug>.json`
is now a team profile: the existing roster plus a new
`season_record` block (auto-computed from NFL_GAMES) and a
`health_snapshot` block (out / questionable / IR / notes, dated
as_of). New script `scripts/update-team-profiles.js` recomputes
season_record for all 32 teams from NFL_GAMES; run it after each week's
promotion so the next week's prompts start from current records. The
health_snapshot is hand-edited per playing team before each game.

**Weekly loop revised.** New order: update team profiles → create
prompts → run prompts → extract → grade → re-run profile updater →
review. The team-profile step is the load-bearing new addition.

**Forced-selection prompt bumped to v2.2.** New required blocks:
`team_profiles_read` (with as_of, record, health), plus prompt_version
"2.2". Reasoning rubric reference points at v2. Removes W9 P3 from the
top-P/L reference set (ChatGPT caught in v2.1 that it finished 1-2
-$12). Adds an explicit "do not stack same-team exposure across single
and SGP" rule (ChatGPT lost the full $20 in Week 1 Game 2 to this
pattern). Closes the Gemini fake-quote workaround by requiring quoted
snippets to be absent from the prompt body.

### 2026-09-11: Promote Season 2 graded games into NFL_GAMES + NFL_BETS

Per the weekly loop step 4, graded results move out of the pending
NFL_PREDICTIONS_2026 archive and into `assets/nfl-data.js` as the canonical
NFL_GAMES + NFL_BETS records. First promotion covers Week 1 Game 1
(Patriots at Seahawks, SEA 13-10) and Game 2 (49ers vs Rams Melbourne,
SF 27-7). Eleven rows added to NFL_BETS across the two games:

- Game 1: Claude 3 rows (UNDER 44.5 WIN, NE +3.5 WIN, Kupp UNDER 4.5 rec
  WIN, all at conditional -110), Gemini 1 row (NE +3.5 WIN at recorded
  -118). ChatGPT reserved fully, no rows recorded.
- Game 2: ChatGPT 2 rows (LAR TT OVER 23.5 LOSS at conditional -110,
  SGP LAR ML + LAR TT OVER 23.5 LOSS at conditional +200), Claude 3
  rows (UNDER 45.5 WIN at conditional -110, Kyren OVER 16.5 rush att
  LOSS at conditional -115, SGP UNDER 45.5 + Kyren OVER 16.5 LOSS at
  conditional +180), Gemini 2 rows (UNDER 48.5 WIN at claimed -110,
  SGP LAR TT OVER 23.5 + Kyren OVER 14.5 LOSS at conditional +220).

The `prompt` column on each row records the lane and version used:
"LS-1.0" for local-strength v1.0 (Claude Game 1), "GS-1.0" for
github-strength v1.0 (Gemini Game 1), "FS-2.1" for forced-selection v2.1
(all Game 2 tickets).

Reserved (no-bet) tickets are not recorded as NFL_BETS rows. They stay
in the NFL_PREDICTIONS_2026 result block as a reasoning record but do
not distort win-rate math in NFL_BETS.

The `nflGradedBets2026` adapter now skips predictions whose gameId has
been promoted into NFL_GAMES, so bet-database.html and
summarize-experiment.js do not double-count the same tickets.

Season 1 archive page (`nfl-2025.html`) filters NFL_GAMES and NFL_BETS
to 2025 dates only, so promoted Season 2 games do not appear in the
Season 1 archive. Season 2 hub already filters correctly.

### 2026-09-10: Forced-selection v2.0 and Game 2 reset

Carlos requested at least one single and one 2+ leg parlay in every future
run, with full $20 hypothetical allocation. Replaced both active Game 2
prompt files; the old text remains in Git history only. No saved response
files existed in that folder to delete. The earlier chat-supplied no-bet
response is superseded, not evidence for the reset experiment.
Missing Bovada quotes now permit labeled reference or conditional research
cards, never invented observed odds. Added a separate validator and lane.
This changes selection incentives and must not be treated as evidence that
forced picks outperform the discretionary lane. Preserve all Game 1 records.

### 2026-09-10: Game 2 Bovada configuration r1

Instantiated both strength-lane v1.1 prompts for 49ers-Rams in Melbourne.
Carlos specified Bovada as the actual ticket book. Require Bovada quotes,
with other books as context only, and hold unpriced selections in reserve.
Run-specific instructions prioritize corrected historical evidence, honest
access reporting, official starter verification and independent current-game
answers. This is not a controlled test of one isolated prompt change.
No new selections or lock timestamps were created during preparation.

### 2026-09-10: All three current templates, v1.0 to v1.1

- Effective next run, including remaining Week 1 games.
- Require per-ticket odds, sportsbook, source and quote capture time,
  maximum loss, potential profit/return and probability-versus-price reasoning.
- Unpriced candidates remain unfunded. SGPs need the actual combined quote.
- Trigger: first-game Claude picks had no payout prices; Gemini embedded -118
  in its line, rather than consistent structured fields.
- First-game outcomes stand. Claude profit and combined ROI remain unavailable.
  Carlos's later supplied slips cannot backfill model prices.
- Target 100% complete accepted funded tickets. Track missing-price rejections,
  arithmetic failures and provenance issues separately from win rate.
- Preserve v1.0 in Git history and original prompt/response files.

```text
2026-09-08
Prompt: bankroll-optimized (introduced as the Week 1 default)
Change: replaced 2025-style "here is a line, size a bet on it" prompts with a
  $20-bankroll allocation prompt. Models decide their own stakes across
  straight bets, parlays, SGPs, and reserve. Sum must equal $20 exactly.
  Every pick must name a specific line so it can be graded from the ESPN
  box score.
Reason: 2025 experiment had un-auditable "take the QB passing over" style
  picks that could not be graded later, and had inconsistent stake sizing
  across models. The $20 constraint gives every model the same budget and
  forces them to reveal how they weigh conviction against edge.
Expected improvement: every response is fully auditable; stake-sizing
  behavior becomes a comparable variable across models; parlays get graded
  as one bet (single stake, all legs must hit) instead of as separate rows.
```

```text
2026-09-08
Prompt: research-mode (drafted, becomes default starting Week 2)
Change: prompt no longer hand-feeds injury, weather, coaching, or surface
  context. It supplies only the fixed betting universe (teams, kickoff,
  venue name, line snapshot with source, ESPN box-score URL) and requires
  the model to research everything else itself and cite each source. Same
  $20 bankroll / parlay / reserve output structure as bankroll-optimized.
Reason: Week 1 game 1 (Patriots at Seahawks) shipped with two factual
  errors in the hand-written pre-game context (Drake Maye's season count
  and Lumen Field's playing surface), both caught by GPT 5.5. Also, the
  three models are being run in fresh chats with no local context, so
  hand-fed prompts amplify prompt-writer mistakes without letting the
  models correct them. Research-mode shifts the fact-finding onus onto the
  model and grades it explicitly.
Expected improvement: eliminates prompt-writer error as a variable;
  exposes model research quality as a graded axis separate from betting
  judgment; scales to 16 games/week without a human intake bottleneck.
Fallback: if any model provably lacks working search in a given week,
  rerun that specific game under bankroll-optimized and note it in
  result.md as a methodology inconsistency for that week.
```

## Strategy Lanes

Start with three lanes:

| Lane | Purpose | Default Behavior |
|---|---|---|
| Baseline | Control prompt for comparison | Simple read, up to 3 picks |
| Context-heavy | Main workflow prompt | Game script, matchup reasons, avoid market |
| Risk-aware | Restraint prompt | Maximum 2 picks, pass if edge is weak |

More lanes can be added later, but each one needs a reason and a metric.

## Adjustment Rules

- Change one major thing at a time when possible.
- Keep old prompt templates instead of overwriting them without a note.
- Do not remove bad weeks from the record.
- Do not hide misses. The misses are part of the project.
- Prefer fewer, better picks over more picks.

## Weekly Success Metrics

Track:

- Win/loss/push.
- P/L.
- ROI.
- Reasoning score.
- Ungradable pick count.
- Number of no-bet recommendations.
- Best prompt.
- Worst prompt.
- Best model.
- Biggest miss.

The system is improving if it gets cleaner, more auditable, and more selective,
even before it becomes profitable.
