# CLAUDE.md

Repo role: active public showcase tool featured in Portfolio as `AI Model Performance Analyzer`. This is no longer only an old class-project archive. It is being prepared as a more professional NFL-season tracking system for model predictions, prompt quality, bet results, and reasoning review.

## Business Context

- This repo is part of the public showcase list in `Portfolio/src/data/projects.ts`.
- Shared workflow rules live in `/home/cresp3/Portfolio/AI-WORKFLOW.md`.

## Claude Role Here

- Use Claude for information design, clarity of comparisons, prompt quality, reasoning rubrics, and presentation polish.
- Let Codex handle maintenance, structure cleanup, and any GitHub closeout.

## Working Notes

- Static analysis hub with HTML pages and documentation.
- `assets/nfl-data.js` is the current public truth. Older files in `Docs/GRADING ANALYSIS/` are historical and may disagree with the corrected public data.
- For the 2026 season, preserve raw model responses in `Docs/Responses/2026/` before extracting bets.
- Use `Docs/2026/grading-rubric.md` to score reasoning. Do not reward wordiness by itself.
- Use `Docs/2026/iteration-system.md` when changing prompts, strategy lanes, or grading methods.
- Use `Docs/2026/season-operations-calendar.md` when planning weekly prompt, research, bet-lock, grading, and debrief work.
- Treat the original experiment as context only. Do not overfit new strategy to the old sample.
- Use `Prompts/2026/templates/` as the prompt starting point.

## Useful Commands

```bash
bash ./scripts/stitch-doctor.sh
bash ./scripts/stitch-proxy.sh
bash ./scripts/magic-mcp.sh
node scripts/verify-nfl-data.js
node scripts/summarize-experiment.js
node scripts/build-game-pages.js
```

## Shared AI Tooling

- Follow `AI-WORKFLOW.md` for the shared CSolutions AI stack.
- Use local-only `.claude/skills/` or the shared workspace skill cache for `code-review-graph`, `Impeccable`, and `mattpocock/skills` workflows.
- Use `.mcp.json` with `code-review-graph` after running `code-review-graph build` so exploration and reviews stay token-efficient.
- Use OpenSpec for larger changes that benefit from proposal, spec, and task artifacts.

## Visual QA

Use the workspace runner at `/home/cresp3/scripts/visual-check.sh` after any layout, responsive, spacing, animation, or visual-polish change. Start the local dev server, capture mobile and desktop screenshots into `.visual-checks/`, and inspect the rendered pixels before calling the work done. See `VISUAL-QA.md`.
