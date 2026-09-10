# 2026 Iteration System

The 2026 AI Analyzer should be easy to adjust as the NFL season develops. The
system should let us change prompts, strategy, grading, and presentation without
breaking the weekly record.

## Weekly Loop

1. **Prepare the slate**
   - Choose games.
   - Pull lines, weather, injury notes, rest/travel notes, and matchup context.
   - Save the research in `Data/2026/week-XX-research.md`.

2. **Run prompts**
   - Start from `Prompts/2026/templates/`.
   - Save filled prompts by week.
   - Save every raw model response in `Docs/Responses/2026/week-XX/`.

3. **Extract bets**
   - Convert each response into structured picks.
   - Preserve the original wording.
   - Flag vague, missing-line, or ungradable picks immediately.

4. **Grade after the games**
   - Add game and bet rows to `assets/nfl-data.js`.
   - Add direct ESPN box-score links.
   - Run `node scripts/verify-nfl-data.js`.
   - Run `node scripts/build-game-pages.js`.

5. **Review and adjust**
   - Score outcomes.
   - Score reasoning using `Docs/2026/grading-rubric.md`.
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
