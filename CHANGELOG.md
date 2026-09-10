# Changelog

## v3.2.1 - 2026-09-10

- Added Carlos's settled tickets as a separate human comparison on the game page.
- Recorded $22.87 staked, $41.97 returned and $19.10 profit from owner-supplied screenshots.
- Distinguished the voided Seattle -3 parlay leg, original odds and actual payout.
- Kept model aggregates unchanged and documented timing, exposure and comparison limitations.

## v3.2.0 - 2026-09-10

- Recorded Seattle's 13-10 final and Cooper Kupp's 2 receptions against ESPN's completed event.
- Graded Claude 3/3 and Gemini 1/1; preserved ChatGPT's no-bet decision separately.
- Added final results to matchup pages, current-season views and the filterable ledger.
- Kept original predictions intact and missing payout prices explicitly unavailable.
- Added source-linked reasoning review and settlement regression checks.

## v3.1.0 - 2026-09-09

- Added team logos, color accents and text fallbacks to matchup views.
- Published all 16 scheduled Week 1 games, merging predictions by game ID.
- Isolated current-season views from historical results and fixed prediction counts.
- Improved mobile navigation and regenerated matchup pages.
- Added site regression checks and a source-based weekly content-brief command.
- Updated handoff, product context and domain planning for predictions beyond sports.
- Verified responsive routes and logo fallbacks through browser screenshots.

## v3.0.0 &middot; 2026-09-09

Season 2 launch redesign.

### Design system

- New NFL-neutral chrome. Ink, paper, steel, bone. Single restrained NFL red used only as a functional accent for LOCKED, FINAL, and current-week signals.
- Team colors now carry character on matchup pages via a split-hero band and per-team color chips. They never take over site chrome.
- New typographic system. Barlow Condensed for display and team abbreviations, Inter for body and tabular numerics.
- Sharp 4px corners only. No gradients, no glass, no shadows on chrome. Full-bleed color bands replace card-inside-card layouts.
- New motion policy. Sticky nav, real horizontal scroll on the matchup strip, subtle hover lifts, all disabled under `prefers-reduced-motion`.

### Information architecture

- New primary nav: `Week`, `Schedule`, `Models`, `Results`, `Methodology`. Secondary row: `About`, `Season 1 Archive`, `Grading rubric`, plus a live-status pulse.
- New pages: `schedule.html`, `models.html`, `methodology.html`, `about.html`, `404.html`.
- Season selector on the NFL section index (`nfl.html`) with a progression view scaffold for the multi-year study.
- `nfl-2025.html` reframed as Season 1 with a persistent banner naming the 2025 model generation and sample size.
- `nfl-2026.html` reframed as the live Season 2 hub with a matchup strip, editorial hero, week selector, matchup grid, and methodology feed.
- `bet-database.html` rebuilt as a full results database with season, week, model, market, outcome, prompt, and search filters, plus a big-number summary row.
- Sports_Pages regenerated with the new split-hero anatomy, model prediction row, standings podium, and full ledger.

### Prompt system reset

- Retired the 2026 Week 1 lockup from 2026-09-08 (dud picks under the old prompt).
- Deleted the raw responses that anchored the retired picks.
- Retired the old 2026 prompt templates.
- Wrote three new prompt templates in `Prompts/2026/templates/`:
  - `local-strength-claude-codex.md`, for models with direct local filesystem access. Reads repo, reflects on own past bets, researches web, cites every source.
  - `github-strength-gemini.md`, same content and self-reflection block for models that fetch through raw GitHub URLs instead of local reads.
  - `shared-baseline.md`, a locked-brief control lane that runs identically against all models with no repo access, so we can measure how much lift repo access and self-reflection actually produce.
- Cleared `NFL_PREDICTIONS_2026` so Week 1 shows a clean pending state until the new prompts run.

### Launch readiness

- Page-specific `<title>` and `<meta name="description">` on every route.
- Open Graph and Twitter card metadata with a real `assets/og-default.svg` per route.
- `assets/favicon.svg` set for tab identity.
- `robots.txt` and `sitemap.xml` (24 URLs) generated from the route list plus every Sports_Pages entry.
- `Docs/2026/redesign-direction.md` written as the reviewable Phase 1 direction document.
- `Docs/2026/custom-domain-checklist.md` covers hosting attachment, DNS records, HTTPS verification, canonical URL update, sitemap update, and Search Console submission.

### Data integrity

- Season 1 data preserved intact. 15 games, 86 bets, 11 corrections, corrections still paired with their original CSV values.
- Empty states never fake content. Pending picks show LOCKED. Missing box scores show UNGRADABLE. Live in-game state is not falsified.

## v2.x baseline

The 2025 experiment plus the 2026 season foundation pass (32 teams, schedule scaffolds, intake schema, prompt templates v1, hub, per-game pages) are all preserved in git history.
