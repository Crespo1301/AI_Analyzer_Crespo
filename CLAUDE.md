# CLAUDE.md

Repo role: active public showcase tool featured in Portfolio as `AI Model Performance Analyzer`, but lower current priority than the core business repos.

## Business Context

- This repo is part of the public showcase list in `Portfolio/src/data/projects.ts`.
- Shared workflow rules live in `/home/cresp3/Portfolio/AI-WORKFLOW.md`.

## Claude Role Here

- Use Claude for information design, clarity of comparisons, and presentation polish.
- Let Codex handle maintenance, structure cleanup, and any GitHub closeout.

## Working Notes

- Static analysis hub with HTML pages and documentation.
- Treat this as a showcase tool, not a weekly business-critical surface.

## Useful Commands

```bash
bash ./scripts/stitch-doctor.sh
bash ./scripts/stitch-proxy.sh
bash ./scripts/magic-mcp.sh
```

## Shared AI Tooling

- Follow `AI-WORKFLOW.md` for the shared CSolutions AI stack.
- Use local-only `.claude/skills/` or the shared workspace skill cache for `code-review-graph`, `Impeccable`, and `mattpocock/skills` workflows.
- Use `.mcp.json` with `code-review-graph` after running `code-review-graph build` so exploration and reviews stay token-efficient.
- Use OpenSpec for larger changes that benefit from proposal, spec, and task artifacts.
