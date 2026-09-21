# Week 2 Analysis, 2026 Season

## Snapshot through 15 games graded (MNF pending)

| Rank | Model | Record | P/L | Staked | ROI | Note |
| :--: | ----- | ------ | --- | ------ | --- | ---- |
| 1 | ChatGPT (via Codex CLI) | 6-2 | +$50.99 | $80 | +63.7% | Only filed 4 of 15 games. EXPIRED for Games 5-9 after hitting kickoff mid-batch. |
| 2 | Gemini (web app) | 15-15 | +$34.35 | $300 | +11.5% | Filed 15 of 15. Cleanest structural discipline of the three. |
| 3 | Claude (via Claude Code) | 5-13-1 | -$93.16 | $180 | -51.8% | Player-prop misses stacked; two hard roster errors below. |

## What actually worked

- **Volume-anchored player legs on the projected winning side, when the player is confirmed active.** Gemini's Game 15 SGP (Kelce OVER 4.5 recs + Jonathan Taylor OVER 62.5 rush yds at +215) both hit for +$17.20. Same shape as Week 1's Jeanty (23 att) and Hall (22 att) hits. Structure works; execution requires a live-active-player check.
- **Road-underdog straights when the market misread Week 1 shape.** Gemini caught NYJ +3.5 (17-17 tie covers), CLE +8.5 (outright upset), NO +8.5 (outright upset), CIN +2.5 (won by 14), LV +6.5 (outright upset). Five separate road-dog spread wins on the day — the Week 1 script bleed-through where losing teams got underpriced.
- **UNDER + favorite ML SGPs on defensive matchups.** Gemini SEA @ ARI SGP (SEA ML + UNDER 45.5 alt at +130) hit for +$10.40 in a 31-7 total 38 game.
- **QB pass yards + WR1 rec yds correlated SGPs.** Gemini has the shape locked for MNF Giants-Rams. Historical hit rate on this shape (Week 1 Bills-Texans OVER 44.5, Ravens-Colts) supports the direction.

## What did not work

- **Player-prop OVERs where the projected primary got shut down or wasn't the primary.** Claude took Jefferson O6.5 recs (3 actual, 55 yds — MIN played close-game low-volume script), Barkley O17.5 rush att (4 actual — PHI abandoned run early), Henry O17.5 rush att (16 actual — BAL trailed), Bijan Robinson O16.5 rush att (16 actual — 34-3 blowout meant late-clock rest). Volume-on-winner works only when the game script sustains the run/target volume.
- **Anytime-TD + trailing-team-reception-prop SGPs.** Gemini's Dolphins-49ers SGP (McCaffrey Anytime TD hit + Achane O3.5 recs missed at 3) illustrates that the "trailing team's checkdown floor" logic can fail because trailing teams frequently drop the RB from the plan when they need chunk plays.
- **Big-favorite spreads (≥ -6.5).** Same trap as Week 1. KC -6.5 lost when Chiefs won by only 3 in OT. WSH +4.5 was on the wrong side (DAL blew them out by 17). Volatility scales faster than expected value on the fat side of the line.
- **Ceiling-anchored yardage props with backup / injured passers.** SGPs riding a WR1 receiving-yards OVER (Bateman would have been fine, but Godwin missed at 3 recs vs 5.5 line) suffer when the passer is a low-volume manager.

## Two hard roster errors this week (data-side, not just model)

1. **Claude bet $8 on Rico Dowdle OVER 15.5 rush attempts in Steelers-Patriots.** Dowdle plays for the Panthers. He was not on either team's roster for this game. Bet voided/N/A at settlement. Root cause: Claude misread the study roster JSON and picked a name not on the team it was betting on. Roster-JSON usage needs a "player-on-team" sanity check before submission.

2. **Claude bet $8 on Nico Collins OVER 6.5 receptions in Bengals-Texans. Collins was OUT.** The official Texans inactives list ruled Collins inactive with a hamstring. The study's `Data/2026/rosters/houston-texans.json` still had Collins as active WR1 (Tank Dell listed IR, Collins as promoted WR1). Claude read the JSON, saw Collins active, and locked the bet. Gemini pulled the live team-site inactives article and captured the edge (Bengals +2.5 straight for +$11.76). This is a **weekly-refresh gap in the roster health_snapshot pipeline**, not a model reasoning failure.

## Other roster / data notes from Week 2 model responses that need review

- **Kyler Murray listed as Vikings QB1** in `Data/2026/rosters/minnesota-vikings.json`. Gemini used this in Game 3, citing Carson Wentz starting for injured Murray. My W1 G12 grading note called this a hallucination; the roster file actually carries it. Either update the roster if Murray is genuinely on the Vikings this season, or correct back to McCarthy if the jersey-heuristic was wrong.
- **Michael Pittman Jr. on Steelers** claim in Gemini's Game 5 response (Pittman as OUT WR). Pittman is a Colts WR in real life. Verify against Pittsburgh roster JSON.
- **Kenneth Walker III as KC RB** in Gemini's Game 15 SNF response. Walker is a Seahawks RB. Verify.
- **Keenan Allen as IND WR3** in Game 15. Allen was on the Chargers/Bears historically. Verify.
- **Myles Garrett on Rams IR** in Gemini's Game 16 MNF response. Garrett plays for the Browns. Verify against LA Rams roster JSON.

Every one of these belongs in a systematic Wednesday roster-refresh pass, not case-by-case in-prompt fixes.

## Fabrication patterns tracked in Gemini this week

- **Fabricated `/research/` 404**: 15 of 16 Gemini responses claimed the crespo1301.github.io/AI_Analyzer_Crespo/research/ URL returned 404. The site is live and every path resolves. Games 5, 6, 7, 11, 12, 15 skipped this pattern; the rest included it. Rubric v2 caps source honesty on affected rows at 1/5.
- **Retroactive record fabrication**: Gemini claimed graded results for Games 7, 8, 11, 12, 13, 14, 15 in self-reflection blocks BEFORE those games had finished. Season 2 total claim on Sunday hovered around "3-3 -$2.89" through "7-7 -$9.36" while the actual number was 13-10 +$59.09 through 15-15 +$34.35. Not affecting outcome grade, but a persistent source-honesty flag.
- **Model version inconsistency**: Same session self-reported "gemini-2.5-flash-2026" on some responses and "Gemini 1.5 / 2026 Build" on others (Games 11, 12). No pattern to when the switch happens.

## What's staying in Week 3 prompts

1. `forced-selection v3.2` template with the self-record clause and the alternate-sportsbook list (DraftKings, FanDuel, BetMGM, Caesars, ESPN BET, Fanatics).
2. Bet-type coverage reflection.
3. Volume-vs-ceiling shape distinction.
4. Full `/research/` URL list for Gemini.

## What's being adjusted for Week 3

1. **Roster refresh policy.** Before locking any player-prop pick, the model should cross-check the pick's player against the team's official inactives page for that week. If the player is on inactives or missing from the depth chart, DO NOT SUBMIT the prop. Prompt language to be added: "If the player named in a player-prop leg does not appear on the team's active depth chart for the current week, replace the leg or scratch the ticket."

2. **Player-on-team sanity check.** Every player-prop selection must be verified against the correct team's roster (not just any team). Rico Dowdle in a PIT-NE game should never have been submitted.

3. **Retro-grade honesty clause.** New rubric v2 sub-rule: fabricating a graded result in self-reflection for a game not yet completed is a Source Honesty failure. Gemini's pattern of inventing W2 G7/G8/G11-15 grades qualifies.

## Standing grading concerns

- Claude's ceiling on player-prop OVER shapes remains untested with reliable roster data. Given how many of Claude's Week 2 losses trace to the stale roster JSON, its true skill on player selection is understated in the current record.
- ChatGPT / Codex CLI timing out mid-batch is a workflow issue, not a reasoning issue. When it does file, it grades well (6-2, +$50.99).
- Gemini's structural improvement (dog-spread + favorite-players hedges) is genuine and produced +$34.35 despite the fabrication patterns. If those source-honesty fabrications got cleaned up, Gemini would be the highest-grade lane by rubric v2.
