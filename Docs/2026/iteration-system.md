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
