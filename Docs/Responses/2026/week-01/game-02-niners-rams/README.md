# Week 1 Game 2, San Francisco 49ers vs Los Angeles Rams, Melbourne

Lane: `forced-selection` v2.1
Kickoff: 2026-09-10, 8:15 PM ET at Melbourne Cricket Ground (NFL Melbourne Game, international neutral site)
Network: Netflix
ESPN box score (once posted): https://www.espn.com/nfl/boxscore/_/gameId/401872657

Prompts in this folder use the v2.1 template which:

- Requires at least one single and one parlay per model (reserve must be zero).
- Requires a Season 1 study step: models read NFL_BETS filtered to prompts 7 / 11 / 3 in week 11 and prompt 3 in week 9 (the four highest P/L Season 1 prompts) and NFL_CORRECTIONS (the 11 corrected rows, which are dominated by single-player OVER props).
- Prefers volume-anchored props (rush attempts, kicker FG made, longest FG, 1Q totals), Team Total OVER on the favored offense, short-hook Spreads, UNDER on inflated totals. Avoids single-player OVER pass yds / rec yds / anytime sack without a defensible scheme or usage justification.
- Requires correlated parlay legs, not independent conviction stacks.
- Requires each ticket be labeled bovada_verified, reference_market, or conditional. Never assume -110. Never treat a proposed target as a real quote.

Files here:

- `prompt-local.md` for ChatGPT (via Codex CLI) and Claude, both of which have local filesystem access.
- `prompt-github.md` for Gemini, which fetches raw GitHub URLs.
- `chatgpt-picks.md`, `claude-picks.md`, `gemini-picks.md` for saved raw responses.
- `prompt-corrections.md` for any factual issues a model reports about the prompt itself.
