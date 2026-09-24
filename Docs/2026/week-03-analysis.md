# Week 3 Analysis, 2026 Season

Skeleton created 2026-09-24 before Week 3 kickoff. Results fill in after the graded rows land. What is written now is the pre-week synthesis: what worked in Weeks 1-2, which prompt shape produced it, and the specific adjustments carried into Week 3 prompt v3.3.

## Pick-pattern synthesis from Weeks 1 and 2

Ranked by realized edge in the study's own graded rows.

### Shapes that have made money (keep taking)

1. **Volume-anchored player legs on the projected winning side, active-player verified.**
   Rows: W1 Jeanty O15.5 rush att (Jeanty ran 23), W1 Hall O15.5 rush att (Hall ran 22), W2 G15 Kelce O4.5 recs + Jonathan Taylor O62.5 rush yds (+$17.20 as an SGP at +215).
   Common shape: the leg is on the offense that owns the game script, and the number is a floor the role guarantees, not a ceiling the player has to reach.
   Why it prints: even if the player has a bad efficiency day, script-driven volume clears the floor.

2. **Short-favorite spreads through the hook (-1.5 to -3.5).**
   Rows: W1 PIT -5.5, BAL -3, CHI -3, MIN -4, KC -3.5 all cashed.
   Why it prints: the closer the market number is to a coin flip and the sharper the side, the more the study's model advantage compounds.

3. **Road underdogs when the market misreads the Week 1 script.**
   Rows: W2 NYJ +3.5, CLE +8.5, NO +8.5, CIN +2.5, LV +6.5 all cashed for Gemini.
   Why it prints: Week 1 shape does not always reflect true team strength, and the market takes an extra week to re-price a losing team.

4. **UNDER + favorite ML SGPs on defensive matchups.**
   Rows: W1 KC ML + UNDER 44.5 (+$14.40), W1 ATL-PIT UNDER 42.5 (+$11.20), W2 SEA ML + UNDER 45.5 (+$10.40).
   Why it prints: the correlation between "favorite covers ML" and "total stays under" is honest when both sides have real defense.

5. **Team-Total OVER on the projected winning offense against a compromised opponent.**
   Rows: W1 CHI TT O24.5, W1 DET TT O27.5.
   Why it prints: cleaner than picking a spread on a blowout, cheaper than picking a game total.

### Shapes that have lost money (stop taking)

1. **Ceiling-anchored player-prop OVERs on trailing offenses.**
   Rows: W1 Burrow O1.5 pass TDs, W1 Achane O68.5 rush yds, W2 Jefferson O6.5 recs, W2 Barkley O17.5 rush att, W2 Henry O17.5 rush att, W2 Bijan O16.5 rush att.
   Why it loses: trailing teams abandon the run and switch to chunk plays, killing rush-attempt and RB-receiving floors.

2. **Big-favorite spreads (>= -6.5).**
   Rows: W1 LAC -9.5 (Chargers lost outright), W1 JAX -8.5 (won but shape unreliable), W2 KC -6.5, W2 WSH mis-sided.
   Why it loses: variance scales faster than expected value at the fat end.

3. **Anytime-TD + trailing-team-reception-prop SGPs.**
   Rows: W2 McCaffrey Anytime-TD + Achane O3.5 recs (McCaffrey hit, Achane missed at 3).
   Why it loses: the "trailing team's checkdown floor" reasoning breaks when the trailing team drops the RB from the plan.

4. **Ceiling-anchored yardage props with a low-volume passer.**
   Rows: W2 Godwin OVER at 5.5 (missed at 3 recs).
   Why it loses: a WR1 OVER needs a passer who volume-throws.

5. **UNDER-heavy SGPs during known-hot offenses.**
   Rows: W1 MIN 39 vs GB 22 alone crushed three UNDER SGPs.
   Why it loses: total direction has to match the actual game shape, not a defensive priors read from prior season.

## Prompt-format observations from Weeks 1 and 2

### What the v3.0 -> v3.1 -> v3.2 template did well

- **Independent-derivation clause.** Forcing each model to derive shape patterns from raw graded rows (rather than reading a "what worked" summary doc) gave the three models genuinely different reasoning, which is the point. Gemini's Week 2 dog-spread run was earned independently.
- **Forced allocation with a required single AND parlay.** Prevents lazy 1-pick outputs. Keeps the sample comparable across weeks.
- **Bovada pricing honesty tiers (`bovada_verified` / `reference_market` / `conditional`).** Made source-honesty a first-class grading axis and stopped models from claiming quotes they never observed.
- **Full JSON object at the end.** Machine-parseable outcome extraction. This has held up across 32+ tickets per model.

### What v3.0 -> v3.2 did not do well

- **No hard roster gate.** Week 2 shipped two hard roster errors from Claude that a mandatory player-on-team + active-this-week check would have prevented. Prompt v3.3 adds the gate.
- **Volume vs ceiling shape rule was suggested, not enforced.** Models still filed ceiling-anchored OVERs on trailing teams in Week 2 (Jefferson recs, Bijan attempts, Barkley attempts). v3.3 makes the rule binding for the trailing side.
- **No penalty language for retro-grade fabrication.** Gemini invented graded results for games that had not finished in seven Week 2 responses. v3.3 names the pattern and caps reasoning at 1/5 for it.
- **`/research/` URL list was not explicit for Gemini.** Gemini fabricated 15 of 16 `/research/` 404s in Week 2. v3.3 lists the specific reachable pages and treats a fabricated 404 as a Source Honesty failure.
- **News + deep-research pass was implied, not required.** Now mandatory in v3.3: two official injury reports, one national deep-preview, one current market read.

## Model-lane notes

- **Claude (Claude Code, local file access).** Strong at reasoning, weak at source-of-truth discipline for the roster JSON. If the JSON is wrong, Claude locks in a wrong pick. Fix is the Roster Sanity Gate; if that fires, Claude scratches the leg.
- **ChatGPT (Codex CLI, local file access).** Highest realized ROI in both weeks when it actually files (Week 1 +38.1%, Week 2 filed 4-of-15 +63.7%). Structural problem is throughput, not reasoning. Solvable at the workflow layer, not the prompt layer.
- **Gemini (web app, no local file access).** Structurally the most improved by v3.2 (Week 2 filed 15-of-15, +$34.35). But source-honesty is the weakest axis: fabricated 404s on live URLs, fabricated model-version strings, fabricated retro grades. v3.3's honesty clauses target that directly.

## Week 3 Game 1 configuration

- Prompt file: `Prompts/2026/week-03/game-01-falcons-packers.md`
- Response folder: `Docs/Responses/2026/week-03/game-01-falcons-packers/`
- Schedule row: `Data/2026/schedule/week-03.json` (falcons-packers, 2026-09-24 8:15 PM ET, Lambeau Field, Prime Video)
- Team profiles refreshed 2026-09-24 with the Week 2 outcomes and current health_snapshot pulled from ESPN team injury pages (as_of 2026-09-23).
- Known 2026-09-23 hazards baked into the prompt:
  - GB: Josh Jacobs on Reserve/Commissioner's Exempt List. Jayden Reed OUT (neck). Aaron Banks OUT (toe). Bako-Bewele season-ending. Micah Parsons PUP-R.
  - ATL: Ebukam OUT (hamstring). Bowman Jr. QUESTIONABLE (Achilles). Terrell Jr. IR (groin).

## Grading (to be filled after settlement)

| Rank | Model | Record | P/L | Staked | ROI | Note |
| :--: | ----- | ------ | --- | ------ | --- | ---- |
| ? | ChatGPT | | | | | |
| ? | Gemini  | | | | | |
| ? | Claude  | | | | | |

## Fabrication watch (rubric v2 audit)

Carry-over items to check per model this week:
- Gemini: retro-grade fabrications on unfinished games (Week 2 pattern).
- Gemini: `/research/` 404 fabrications on URLs that resolve.
- Gemini: model_version string inconsistency ("gemini-2.5-flash-2026" vs "Gemini 1.5 / 2026 Build").
- Claude: player-on-team roster mismatches (Week 2 Rico Dowdle-shape).
- Claude: player-active-this-week failures (Week 2 Nico Collins-shape).
- ChatGPT: mid-batch expiration (workflow, not reasoning; log which games expired vs filed).
