# Bankroll-Optimized Prompt (2026 default)

The main 2026 prompt style. Every model gets an identical filled version of
this prompt per game, so grading compares model behavior, not prompt style.

Key differences from the 2025 experiment prompts:

- Each model is given a $20 hypothetical bankroll and decides its own
  allocation (stakes are the model's judgment, not ours).
- Every pick must name a specific line and be auditable against the ESPN
  box score.
- Reserve (unbet money) is a valid allocation.
- Reasoning must name a factor, not sound confident.

## Prompt template

```text
You are analyzing [AWAY TEAM] at [HOME TEAM], [DATE], for NFL betting.

You have a $20 bankroll for this single game. You may split it across as
many or as few bets as you want. You may also keep some or all of it in
reserve (no bet) if the edge is not there.

Pre-game context:
- Kickoff: [KICKOFF_ET]
- Venue: [VENUE]
- Current spread: [SPREAD]
- Current total: [TOTAL]
- Current moneyline: [MONEYLINE]
- Weather / wind: [WEATHER]
- Away injuries: [AWAY_INJURIES]
- Home injuries: [HOME_INJURIES]
- Rest and travel: [REST_TRAVEL]
- Recent form (both teams): [RECENT_FORM]
- Offensive matchup notes: [OFFENSE_MATCHUP]
- Defensive matchup notes: [DEFENSE_MATCHUP]
- Notable news: [NOTES]

Task:
1. Describe the most likely game script in 3-4 sentences.
2. Decide how to allocate the $20 across bets. You may use:
   - Straight bets on spread, total, moneyline, team totals, or player
     props (passing yds/TDs, rushing yds, receiving yds, anytime TD,
     sacks, INTs, longest completion).
   - Parlays (2+ legs combined into one bet with one stake, all legs
     must hit to win, higher payout).
   - Same-game parlays (SGP) if the correlation is intentional.
   - A reserve (unbet money) counts as a valid allocation.
3. For each straight bet, return:
   - market
   - specific line or number you are targeting (e.g. "OVER 47.5" or
     "Player X OVER 62.5 rush yds")
   - side
   - stake in dollars
   - confidence from 1 to 10
   - the specific reason this bet should win (name a factor, not a vibe)
   - what would make this bet lose
4. For each parlay, return:
   - type (straight parlay or same-game parlay)
   - each leg with its own market, specific line, side, and one-sentence
     reason
   - total stake in dollars for the parlay as a whole (do not stake each
     leg separately)
   - confidence from 1 to 10 in the parlay as a whole
   - the shared game-script thesis that ties the legs together
   - which leg is the weakest link
5. All straight stakes plus all parlay stakes plus reserve must sum to
   exactly $20.

Rules:
- Every pick must be auditable against the final box score. If you cannot
  name a specific line, do not make the pick.
- Reserve unbet money if the edge is weak. Reserve counts as a valid
  allocation.
- Parlays are allowed and encouraged when multiple legs share a coherent
  game-script thesis (e.g. one team blows out the other, so their side of
  the spread AND their WR1 anytime TD both hit for the same reason). Do
  not stack independent coin-flips just to boost payout.
- Correct reasoning matters more than sounding confident.

Return the full allocation as a clean table at the end so it can be
graded. Include a "type" column (straight / parlay / SGP / reserve).
```

## Filling this prompt

1. Copy the block above into
   `Docs/Responses/2026/week-XX/game-YY-<slug>/prompt.md`.
2. Replace every `[BRACKET]` with real, cited information from
   `Data/2026/intake/week-XX-intake.json`.
3. Send the identical filled prompt to all three models.
4. Save each model's raw response as `claude-picks.md`, `gpt-picks.md`,
   `gemini-picks.md` inside the same game folder.
5. After the game, add `result.md` with the ESPN box-score URL and the
   graded outcomes.
