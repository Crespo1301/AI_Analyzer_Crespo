# What has worked, and what has not

Living analytic doc for the AI Analyzer NFL study. Updated after every graded slate. This is not a template. This is the record of real results and the patterns we can defend from them.

Every week, prompts are written fresh from what this doc says, then this doc gets updated from what those prompts produced. Templates were retired 2026-09-12 because the abstraction rewarded copying language rather than reading evidence.

Last updated: 2026-09-12, after Week 1 Games 1 and 2.

## Source of truth

- `assets/nfl-data.js` NFL_BETS: every graded bet across Season 1 (2025, 86 rows) and Season 2 (2026, 11 rows through Week 1 Game 2).
- `Docs/Responses/2026/week-XX/game-YY-<slug>/`: raw model responses per game.
- Everything below is derived from those two sources at the date this doc was last updated.

## Season 1 (2025), what won

Three prompts drove almost all of Season 1's positive P/L. Every other prompt was net negative.

### W11 P7, Commanders vs Dolphins, 8-0, +$80

Final: MIA won 16-13 in OT. Total 29 (line 47.5).

What the prompt bet, and why each cashed:

- Game **UNDER 47.5** cashed on a 29-point OT game.
- **Achane rush attempts OVER**: MIA in a game-script UNDER environment kept the ball on the ground.
- **WAS RB carries OVER**: same on the opposite side; low-scoring games mean neither team throws every drive.
- **Longest FG UNDER 47.5**: paceless games don't hunt long field goals; drives stall inside 40.
- **1Q UNDER 7.5**: first quarter in low-scoring games sees feeling-out drives.

Pattern: **bet the constraint, not the ceiling**. Once the game-script is limited, every downstream market (kicker, first-quarter, RB volume) inherits the limit.

### W11 P11, Cowboys vs Raiders, 8-1, +$69

Final: DAL won 33-16. Total 49.

What worked:

- **Cowboys Team Total OVER**: DAL was decisively better and won by 17.
- **QB pass yds OVER**: Prescott had drive time against a poor LV defense.
- **Kicker Made FG OVER**: red-zone visit volume from the leading offense produces FG attempts on the possessions that don't finish with TDs.
- **Longest FG OVER/UNDER**: length props on the winning kicker cash when the offense visits the red zone multiple times.
- **Prescott Pass TDs OVER 1.5-2.5**: DAL clearly better offense against LV.

Pattern: **when the favored team is genuinely better AND wins, correlated same-side markets all cash**. This is the market-shape that ChatGPT tried to apply to Rams TT OVER in Week 1 Game 2 and lost the full $20. The premise "favored team is genuinely better" was wrong for LAR that game.

### W11 P3, Lions vs Eagles, 3-1, +$19

Final: PHI won 16-9. Total 25 (line 47.5).

- **Total UNDER 47.5**: 25 total.
- **Eagles -1.5 short hook**: 7-point PHI win, hook mattered.

Pattern: **UNDER + favorite covering a key-number hook when both defenses have a script edge**.

### Everything else in Season 1

Ten prompts, net negative. The losing pattern is dominated by **single-player OVER props on QB pass yds, WR rec yds, and edge sacks**, called from confidence rather than a defensible stat-line profile. NFL_CORRECTIONS in `assets/nfl-data.js` records 11 rows where the box score overturned a call; 6 of those 11 are this exact shape (Nix pass yds, Herbert pass yds, Sutton rec yds, Stroud pass TDs, Bonitto sack, McConkey rec).

## Season 2 (2026), what won in Week 1

### Game 1: SEA 13, NE 10 (game 1, Kickoff Game)

Total 23 (line 44.5).

- Claude 3-0: **UNDER 44.5** + **NE +3.5** (3-point loss, hook covered) + **Kupp UNDER 4.5 rec** (2 rec).
- Gemini 1-0: **NE +3.5** (recorded -118 for +$10.17).
- ChatGPT reserved fully, no rows.

Winning shape: **game-script UNDER + key-number hook + a defensible target-share UNDER prop**.

The Kupp UNDER prop is notable because it's the RARE single-player prop that cashed. It was UNDER on a floor-stat (receptions of a demoted target) not OVER on a ceiling-stat. Claude's rule "bet the constraint, not the ceiling" applies to props too.

### Game 2: SF 27, LAR 7 (Melbourne)

Total 34 (line 48.5 close; Claude used 45.5, Gemini used 48.5).

- Claude UNDER 45.5 WIN (+$10.91); Kyren OVER 16.5 rush att LOSS; SGP LOSS.
- Gemini UNDER 48.5 WIN (+$10.91); SGP with LAR TT OVER 23.5 + Kyren OVER 14.5 LOSS.
- ChatGPT LAR TT OVER 23.5 LOSS (-$15); SGP LAR ML + LAR TT OVER 23.5 LOSS (-$5), full bankroll gone.

Winning shape: **game UNDER at any reasonable hook**. Beat the market total by 14 points; hook selection did not matter.

Losing shapes:
- **Volume-anchored prop on the losing team's abandoned run script**. Kyren finished 11 attempts against 14.5-16.5 lines. Season 1 already flagged this pattern (Cook rush yards OVER).
- **Team Total OVER on the favored team when the favored team turned out not to be better**. LAR was a paper favorite that lost by 20. Applying W11 P11's shape here required LAR to actually be the better team, and they were not.
- **Stacking same-team exposure across a single and an SGP**. ChatGPT's two tickets both required "Rams 24+". When the premise failed, both tickets failed together.
- **All parlays and SGPs lost**. Parlays and SGPs are now 0-6 across Seasons 1 and 2.

## Shapes to REPEAT this week

Ordered by evidence weight, highest first.

1. **Game total UNDER when both offenses face script constraints.** Constraints that count: RB1 injury, weather, division-rival rest advantage, aging QB on short week, thin WR room. Both cashes in Season 2 came from UNDER. Season 1's best three prompts all had UNDER as a core leg.
2. **Short-hook Spread through 3 or 7 on the sharper QB.** NE +3.5 covered by a hair. Eagles -1.5 covered by 5.5. Hook selection matters more than side selection when both defenses are competent.
3. **UNDER-side player props on demoted target-share players.** Kupp UNDER 4.5 rec is the model. This shape is safer than any single-player OVER because it uses the same "bet the constraint" logic.
4. **Team Total OVER on the favored offense ONLY when the favored team is genuinely better AND actually favored to win the game.** Not "favored by number." Genuinely better. If the number and the reality diverge, take the game total UNDER or short-hook underdog spread instead.

## Shapes to AVOID this week

1. **Single-player OVER pass yds / rec yds / anytime sack** without a coverage-scheme or workload-share justification. 6 of 11 Season 1 corrections and 0 wins in Season 2.
2. **Volume-anchored props on the projected losing team.** Kyren OVER 16.5 att. Once the team trails, the run script gets abandoned.
3. **Stacking the same team-side exposure across a single and an SGP.** ChatGPT lost the full $20 in Game 2 to this.
4. **Parlays whose legs are independent conviction stacks.** Parlays are 0-6. If the legs aren't causally correlated, don't build the ticket.
5. **"bovada_verified" labels without a screenshot.** Gemini's fabricated-verified pattern. Grade as unverified.
6. **Fabricated repo fetches.** Gemini has claimed all raw.githubusercontent URLs 404 in three separate responses; curl says all return 200. Any citation labeled fetched must include a snippet that is not in the prompt body.

## Sizing patterns from Season 1

The two prompts that generated $80 and $69 profit did NOT stake evenly. They stacked stakes on the high-confidence legs of a coherent thesis. The prompts that lost money often ran $11 max stakes on single-player ceiling props with no probability calibration. **Sizing should scale with the stated edge and confidence**; flat sizing scores low on rubric v2's Sizing axis.

## Grading rubric v2 reminders (see `Docs/2026/grading-rubric.md`)

- Outcome is primary. Season ROI drives the ranking.
- LOSS caps at 4/5 reasoning; default LOSS grade is 3/5.
- WIN with generic public reasoning caps at 2/5.
- Fabricated citation or fetch caps reasoning at 1/5 regardless of outcome.
- Sizing (0-3), Source Honesty (0-3), Self-Reflection (0-2) are separate axes.

## Weekly loop

1. Update team profiles: `node scripts/update-team-profiles.js` + `node scripts/refresh-week-health.js <week>`. Manually augment health_snapshot for anything ESPN doesn't cover.
2. Write prompts for this week's remaining games. Do NOT copy last week's prompts. Write from this doc's current state.
3. Send prompts, save raw responses.
4. Grade, promote to NFL_GAMES + NFL_BETS.
5. Re-run `scripts/update-team-profiles.js`.
6. Rewrite this doc from the new evidence before writing next week's prompts.

## Update log

- **2026-09-12**: created. Content anchored in Season 1 top-three prompts and Week 1 Games 1-2 outcomes. Retired the `Prompts/2026/templates/` folder in the same commit.
