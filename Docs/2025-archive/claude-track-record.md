# Claude track record

Per AI-WORKFLOW.md, log every Claude design or planning pass here.

## 2026-09-09, Season 2 launch redesign (v3.0.0)

- Target surface: entire public site plus the 2026 prompt system.
- Claude recommendation: NFL-neutral chrome (black, white, gunmetal, restrained NFL red as functional accent); team colors carry character only on matchup pages; multi-year encyclopedia framing with Season 1 (2025) as historical baseline; new prompt system with three lanes that honor each model's real strengths and include a self-reflection block on the model's own past behavior; full launch-readiness pass with sitemap, robots, OG images, favicon, 404, and a custom-domain checklist.
- Accepted: full direction as proposed, with three adjustments from Carlos mid-session:
  - Palette pivoted from amber-yellow accent to NFL-neutral with restrained red.
  - Prompt lanes reframed: every model gets repo access via whatever mechanism it supports (local FS for Claude and Codex, raw GitHub URL fetch for Gemini), plus a self-reflection block, plus open-web research.
  - 2026 Week 1 lockup from 2026-09-08 retired as duds. NFL_PREDICTIONS_2026 cleared, dud response files deleted, old prompt templates removed.
- Implemented: full redesign shipped as v3.0.0 in this session. See CHANGELOG.md.
- Landed at: commit v3.0.0 (see git log).
