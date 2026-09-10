# Shared Baseline Lane

Use this prompt when we want a fair-comparison baseline the same week we run the strength lanes. Every model, including ChatGPT, Claude, Codex, and Gemini, gets the identical text of this prompt with no repo pointer and no fetch instructions. The prompt describes the matchup, the current lines, and asks for picks. The purpose is to preserve one apples-to-apples lane so we can separate "the model is smarter" from "the model has better tools this week."

## When to run the baseline

Run baseline for at least three games every week, chosen before the strength lanes are sent. Baseline picks go in the same weekly bucket in the results database, tagged with `prompt_template: "shared-baseline"`.

## What to fill before sending

Same fields plus a research context block that the operator (Carlos) prepares in advance so all three models get identical inputs.

- `[WEEK]`
- `[AWAY]`, `[HOME]`, `[DATE]`, `[KICKOFF_ET]`, `[VENUE]`, `[NETWORK]`
- `[SPREAD]`, `[TOTAL]`, `[MONEYLINE]`, `[BOOK]`, `[LINE_CAPTURED_AT]`
- `[INJURY_BLOCK]` a plain-text bullet list of official injury designations
- `[WEATHER_BLOCK]` a plain-text description of forecast if outdoors
- `[REST_TRAVEL_BLOCK]` short travel / rest notes
- `[NEWS_BLOCK]` two to four notable news items with source citations, prepared by the operator

## The prompt

```text
You are running as an entry in the AI Analyzer 2026 NFL model-comparison
study for [AWAY] at [HOME], Week [WEEK], [DATE], kickoff [KICKOFF_ET] at
[VENUE], broadcast on [NETWORK].

You are answering the shared baseline lane. Every model gets the same
prompt text, the same lines, the same news block. No repo access is
assumed. Do not fetch external URLs. Answer using the material below.

Current market snapshot ([BOOK], captured [LINE_CAPTURED_AT]):
- Spread: [SPREAD]
- Total: [TOTAL]
- Moneyline: [MONEYLINE]

Injuries:
[INJURY_BLOCK]

Weather:
[WEATHER_BLOCK]

Rest / travel:
[REST_TRAVEL_BLOCK]

Notable news:
[NEWS_BLOCK]

You have a $20 hypothetical bankroll for this single game. You may split
it across as many or as few bets as you want. You may keep some or all
of it in reserve if the edge is not there. Reserve is a valid allocation.

For every straight bet return:
- market
- specific line or number you are targeting
- side
- stake in dollars
- confidence from 1 to 10
- the specific factor that should make this bet win, named from the
  material above (not a vibe)
- what would falsify this bet, i.e. what would have to happen for it to
  lose

For every parlay or same-game parlay, return the same for each leg plus
the reason the correlation between legs is real.

Do not include a pick you cannot explain in one sentence a grader could
audit against the box score. If you cannot audit it, do not bet it.

Mandatory payout gate, effective prompt v1.1:
A betting line is not its payout price. Every funded ticket needs numeric
American odds, sportsbook, exact market/line, source URL or supplied snapshot,
and quote capture time with timezone. Never substitute response time for
quote time. Missing/unverifiable prices mean no funded bet: list the candidate
under unpriced_candidates and keep that money in reserve. Never assume -110.
Baseline models use only supplied quotes, without fetching external data.
Strength-lane models research quotes or ask for a current price.
Record maximum loss (stake), potential net profit and total return including
stake. Positive odds A: profit = stake*A/100. Negative A: profit =
stake*100/abs(A). Total return = stake + profit; display money to cents.
Break-even probability is 100/(A+100) for positive odds and
abs(A)/(abs(A)+100) for negative odds. Compare your estimated win probability
with break-even and explain uncertainty. Confidence /10 is not a probability.
For push-capable markets compare conditional win probability excluding
pushes and disclose assumptions. A likely winner is not necessarily good value.
Parlays/SGPs require the sportsbook's combined ticket price and each leg's
exact line. Never invent combined odds by multiplying correlated leg prices.
Record known leg prices and applicable push/void rules, or mark rules unknown.
Preserve original odds at settlement; use actual adjusted return after voids.
Ticket stakes plus reserve must equal the $20 bankroll.
Use probabilities from 0 to 1, retaining at least four decimal places for
break-even calculations. Quote time must precede the recorded lock time.

Finish by returning a single fenced JSON block matching this schema:

{
  "prompt_template": "shared-baseline",
  "prompt_version": "1.1",
  "model_role": "ChatGPT" or "Claude" or "Codex" or "Gemini",
  "model_version": "the exact version string you know yourself as",
  "week": [WEEK],
  "game_id": "[away-abbr]-[home-abbr]",
  "away": "[AWAY]",
  "home": "[HOME]",
  "kickoff_et": "[KICKOFF_ET]",
  "venue": "[VENUE]",
  "network": "[NETWORK]",
  "line_snapshot": {
    "spread": "[SPREAD]",
    "total": "[TOTAL]",
    "moneyline": "[MONEYLINE]",
    "book": "[BOOK]",
    "captured_at": "[LINE_CAPTURED_AT]"
  },
  "game_script": "3-4 sentence description of the most likely game flow",
  "bankroll": 20,
  "total_stake": 0-20,
  "unpriced_candidates": [],
  "reserve": 20 - total_stake,
  "bets": [
    {
      "type": "straight" or "parlay" or "sgp",
      "market": "Spread" or "Moneyline" or "Total" or "Team Total" or
                "Prop" or "SGP" or "Parlay",
      "line": "the exact line",
      "stake": number,
      "odds_american": number,
      "sportsbook": "quoted sportsbook",
      "odds_source": "URL or supplied snapshot reference",
      "odds_captured_at": "ISO 8601 with timezone",
      "max_loss": number,
      "potential_net_profit": number,
      "potential_total_return": number,
      "break_even_probability": number,
      "estimated_win_probability": number,
      "value_reasoning": "price, probability, uncertainty and push assumptions",
      "settlement_rules": "push/void rules or unknown",
      "confidence": 1-10,
      "reason_wins": "one sentence, name the factor",
      "reason_loses": "one sentence, name the falsifier"
    }
  ],
  "reasoning_summary": "3-6 sentences, in your own voice"
}

Do not soften the pick to match the market. Do not add a pick you would
not be able to defend to a grader who has read the same rubric.
```

## Response filename convention

```
Docs/Responses/2026/week-[NN]/game-[NN]-[slug]-baseline/[model]-picks.md
```

Save the exact prompt as `prompt.md` alongside. Baseline and strength-lane responses for the same matchup live in sibling folders so the comparison is easy to read later.
