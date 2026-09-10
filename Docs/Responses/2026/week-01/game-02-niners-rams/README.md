# Week 1 Game 2: 49ers at Rams

Status: prepared for research, no picks or prices locked.

- Kickoff: September 10, 2026, 8:35 PM EDT / September 11, 10:35 AM AEST.
- Venue: Melbourne Cricket Ground; Rams designated home, neutral location.
- Broadcast: Netflix.
- Game ID: niners-rams. ESPN event: 401872657.
- Required ticket sportsbook: Bovada, per Carlos.
- Prompts: local-strength for Claude/Codex; GitHub-strength for Gemini.
- Version: base v1.1, game-specific Bovada configuration r1.

Schedule sources reviewed September 10:
- https://www.therams.com/news/rams-san-francisco-49ers-game-friday-september-11-melbourne-australia
- https://www.netflix.com/tudum/articles/49ers-rams-game-time-australia

## Lessons carried forward

The 2025 executive summary called props profitable using standardized -110
prices. Its integrity report documents model assignment errors; the current
data includes later corrections. These reports cannot establish an optimal
prompt or profitable Bovada strategy. Do not cherry-pick that conclusion.

Game 1 supports exact-line grading: 23 points settled under 44.5, the 3-point
margin settled +3.5, and Kupp's 2 receptions settled under 4.5. These examples
demonstrate auditability, not that these markets should be preferred next.
Claude omitted payout prices and used an incorrect first-start premise.
Codex/Claude identified a roster-order starter error. ChatGPT used explicit
break-even math and reserve. Gemini's repo access claims were disputed;
HTTP 200 in another tool does not establish what its own tool could access.
Future responses must distinguish actual retrieval, failure and inference.

Keep clear lines, verified current facts, per-ticket odds, concise causal
reasoning and no-bet eligibility. Do not prescribe a winning side or market.
There is no reliably established best-performing prompt in this evidence.

## Run and intake

1. Send prompt-local.md to independent Claude and Codex sessions.
2. Send prompt-github.md to Gemini, with raw file contents if it cannot fetch.
3. Supply the same timestamped Bovada market screenshots where possible.
   Public page retrieval here exposed no usable game quotes. Odds are pending.
4. Save original responses as claude-picks.md, chatgpt-picks.md and
   gemini-picks.md, plus extracted response JSON and exact model/version.
5. Run node scripts/validate-priced-response.js path/to/response.json.
   Manually confirm Bovada quote evidence, starter facts and source claims.
6. Save the accepted pre-kickoff lock timestamp and Git commit. Preserve any
   earlier rejected response or price refresh separately. No automatic wagers.
7. Grade only after final, using the direct ESPN box score:
   https://www.espn.com/nfl/boxscore/_/gameId/401872657

The shared baseline is not prepared: its identical research/price packet is
not available yet. Do not call different independently researched inputs a
controlled baseline.
