# Season Playbook

Last season (Weeks 9 and 11 of the 2025 NFL season) was **v1.0** of this
analyzer: 13 prompts, 3 models, 15 games, run manually after the fact with no
weekly cadence. Weeks were skipped, and it took a full data-integrity rebuild
in December to catch model-assignment errors, plus this redesign to catch a
second wave of bet-grading errors against the real box scores. This doc is
how v2.0 avoids repeating both problems as the 2026 season starts.

## The rule: capture every week, the same week it happens

Missed weeks are why last season only covered 2 of 18. The fix is a fixed
weekly checklist, not a bigger end-of-season cleanup:

1. **Before kickoff each week:** pick the games, write the prompts, run them
   against ChatGPT, Claude, and Gemini. Save each model's full raw response
   (not just the extracted bet) somewhere durable, e.g. `Docs/Responses/2026-week{N}/`.
   Losing the raw response is what made 12 of last season's 15 games
   impossible to grade on reasoning quality, only on outcome.
2. **After final whistle each week:** pull the box score from ESPN
   (`espn.com/nfl/boxscore/_/gameId/...`) for every game with a prompt.
   Do this within a few days, while the game ID and stat lines are easy to
   find, not months later from search-engine summaries.
3. **Grade immediately:** add the week's games to `NFL_GAMES` and bets to
   `NFL_BETS` in `assets/nfl-data.js`, run `node scripts/build-game-pages.js`,
   commit. Don't batch multiple weeks of grading into one session, that's
   exactly how the original assignment errors happened.

## Data entry checklist (per game)

- [ ] Game added to `NFL_GAMES` with the **exact** ESPN box-score URL
      (`/nfl/boxscore/_/gameId/...`), not a generic scoreboard link.
- [ ] Date matches ESPN exactly, including Thursday/Monday games, don't
      assume every Week N game was on Sunday (this redesign caught two
      wrong dates from that exact assumption).
- [ ] `label` field matches the short game-name string used consistently in
      every `NFL_BETS` row for that game (e.g. `"Bills vs Buccaneers"`).
- [ ] Neutral-site or international games get a `neutralSite` field.
- [ ] Every prop bet's `outcome` is checked against the actual box-score
      stat, not assumed from the model's own confidence. Record the real
      stat line so it can show in the `actual` field on corrections if you
      ever need one.

## Why this matters

The whole point of this project is evaluating whether AI models can be
trusted with real predictions. A site that can't be trusted to correctly
grade its own bets undermines that point before the analysis even starts.
`assets/nfl-data.js` being the single source of truth (instead of hand-typed
numbers in multiple HTML files) is the structural fix; this checklist is the
process fix.

## What to build once the season starts

- A `Docs/Responses/` folder per week with the raw model outputs, so
  reasoning-quality grading (not just outcome-based P/L) is possible for
  every future game, unlike most of v1.0.
- Extend the "Original CS486 Grading" pattern (see `vikings-lions.html`) to
  a lightweight, consistent rubric applied every week, not an ad hoc one
  reconstructed after the fact.
