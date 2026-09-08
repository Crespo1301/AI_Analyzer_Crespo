# Research-Mode Prompt (2026 Week 2+ default)

The Week 1 baseline used `bankroll-optimized-prompt.md`, which hand-fed the
models pre-game context. That worked, but the human filling the context
introduced factual errors (see
`Docs/Responses/2026/week-01/game-01-patriots-seahawks/prompt-corrections.md`).
Research-mode fixes that by giving models only the hard facts and
requiring them to research the rest themselves with citations.

## What the prompt supplies (fixed inputs)

Only facts that define the betting universe and are trivially verifiable
without judgment:

- Teams, date, kickoff time, venue name
- Current line snapshot (spread, total, moneyline) from a named source
- ESPN box-score URL for later grading

Everything else (injuries, weather, coaching, personnel, prior meetings,
form, storylines, tape) is the model's responsibility to research.

## What the prompt demands back

- Cited sources for every non-line fact the model uses in reasoning
- A note when a claim is an assumption the model could not verify
- The same $20 bankroll allocation, parlays allowed, reserve valid
- The same auditable-line rule and specific-factor reasoning

## Prompt template

```text
You are analyzing [AWAY TEAM] at [HOME TEAM], [DATE], for NFL betting.

You have a $20 bankroll for this single game. You may split it across as
many or as few bets as you want. You may also keep some or all of it in
reserve (no bet) if the edge is not there.

Fixed inputs (do not attempt to reprice these):
- Kickoff: [KICKOFF_ET] on [NETWORK]
- Venue: [VENUE_NAME]
- Current spread: [SPREAD] (snapshot from [SOURCE] at [SNAPSHOT_TIME])
- Current total: [TOTAL] (same source)
- Current moneyline: [MONEYLINE] (same source)
- Grading source for outcomes: [ESPN_BOXSCORE_URL]

Research everything else yourself before reasoning:
- Injury reports for both teams (official reports, not rumors)
- Weather and wind forecast at the venue for the kickoff window
- Playing surface at the venue as it currently stands
- Coaching staff, starting QB, and any pre-game news
- Recent form and any relevant prior meeting
- Anything you consider material to the bet

Task:
1. List the specific facts you found in research and cite each source
   with a URL. If a fact could not be verified, mark it as an assumption.
2. Describe the most likely game script in 3-4 sentences based on what
   you researched, not what you guessed.
3. Decide how to allocate the $20 across bets. You may use:
   - Straight bets on spread, total, moneyline, team totals, or player
     props (passing yds/TDs, rushing yds, receiving yds, anytime TD,
     sacks, INTs, longest completion).
   - Parlays (2+ legs combined into one bet with one stake, all legs
     must hit to win, higher payout).
   - Same-game parlays (SGP) if the correlation is intentional.
   - A reserve (unbet money) counts as a valid allocation.
4. For each straight bet, return:
   - market
   - specific line or number you are targeting
   - side
   - stake in dollars
   - confidence from 1 to 10
   - the specific researched factor this bet relies on (with source)
   - what would make this bet lose
5. For each parlay, return:
   - type (straight parlay or same-game parlay)
   - each leg with its own market, specific line, side, and one-sentence
     reason (each reason must trace to a researched factor)
   - total stake in dollars for the parlay as a whole
   - confidence from 1 to 10 in the parlay as a whole
   - the shared game-script thesis that ties the legs together
   - which leg is the weakest link
6. All straight stakes plus all parlay stakes plus reserve must sum to
   exactly $20.

Rules:
- Cite every non-line fact you use. An uncited claim will be treated as
  an assumption during grading.
- Every pick must be auditable against the final box score at the ESPN
  URL above. If you cannot name a specific line, do not make the pick.
- Reserve unbet money if the edge is weak. Reserve counts as a valid
  allocation.
- Parlays are allowed and encouraged when multiple legs share a coherent
  game-script thesis (e.g. one team blows out the other, so their side
  of the spread AND their WR1 anytime TD both hit for the same reason).
  Do not stack independent coin-flips just to boost payout.
- Do not attempt to reprice the fixed line inputs above. The line snapshot
  is what it is. Reason about whether that line is beatable, not whether
  it is "correct".
- Correct reasoning matters more than sounding confident.

Return the full allocation as a clean table at the end so it can be
graded. Include a "type" column (straight / parlay / SGP / reserve).
```

## Filling this prompt

Only fill six things (the fixed inputs). Everything else is the model's
job.

1. Copy the block above into
   `Docs/Responses/2026/week-XX/game-YY-<slug>/prompt.md`.
2. Replace only the six bracketed inputs at the top:
   `[AWAY TEAM]`, `[HOME TEAM]`, `[DATE]`,
   `[KICKOFF_ET]`, `[NETWORK]`,
   `[VENUE_NAME]`,
   `[SPREAD]`, `[TOTAL]`, `[MONEYLINE]`,
   `[SOURCE]`, `[SNAPSHOT_TIME]`,
   `[ESPN_BOXSCORE_URL]`.
3. Send the identical filled prompt to all three models.
4. Save each model's raw response as `claude-picks.md`, `gpt-picks.md`,
   `gemini-picks.md` inside the same game folder.

## Grading changes vs bankroll-optimized-prompt.md

- **Uncited claims are assumptions.** If a model wins a bet on a factor
  it did not cite, reasoning score is capped at 3 (right result, weak
  evidence chain).
- **Research quality is graded separately from betting judgment.** A
  model that finds a real factor everyone else missed gets credit even
  if the bet lost. A model that lost because its search returned nothing
  is not penalized for reasoning, only for outcome.
- **Contradictions between model research and reality get flagged in
  result.md.** Example: if a model asserts "Player X is questionable"
  and the final inactive report shows X active, that goes in the
  grading notes.

## When to fall back to bankroll-optimized-prompt.md

If a model in a given week clearly lacks working web access (Claude
without search enabled, or an outage), rerun with the hand-fed template
for that game only and note it in `result.md` as a methodology
inconsistency for that week. Do not silently downgrade the whole slate.
