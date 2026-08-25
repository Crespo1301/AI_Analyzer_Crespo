# 2026 Grading Rubric

This project grades two things separately:

1. Did the bet win?
2. Did the model give a useful reason that matched what actually happened?

The first score is objective. The second score is a review score, and it should
stay strict.

## Outcome Score

Each bet gets:

- `WIN`
- `LOSS`
- `PUSH`
- `VOID`
- `UNGRADABLE`

Only use `UNGRADABLE` when the pick is too vague to verify, for example "take
the QB passing over" without a player, line, or sportsbook number.

## Reasoning Score

Use a 0 to 5 score.

| Score | Meaning |
|---:|---|
| 5 | The model named a real factor before kickoff, and that factor clearly showed up in the final result. |
| 4 | The model had the right game script and mostly right evidence, even if one detail was off. |
| 3 | The reasoning was plausible, but the final result does not clearly prove it. |
| 2 | The reasoning was generic, public, or mostly narrative. |
| 1 | The reasoning leaned on a wrong fact, stale injury note, or irrelevant angle. |
| 0 | No usable reasoning, hallucinated facts, or no raw response available. |

## Do Not Reward

- Long answers by themselves.
- Confidence without evidence.
- "Sharp" language without a market reason.
- Generic team quality arguments.
- Hindsight explanations added after the result.

## Reward

- Weather, wind, travel, rest, injuries, matchups, pace, offensive line, defensive
  pressure, red-zone tendencies, and game-script factors that are named before
  kickoff and later appear in the box score or recap.
- Picks that include the exact market, line, and why that number matters.
- Conservative "no bet" calls when the edge is weak.

## Weekly Model Grade

For each model, track:

- Number of picks
- Win/loss/push
- Profit/loss at standard stake
- Reasoning average
- Best pick
- Worst pick
- Biggest miss
- Most useful insight
- Hallucination or data issue count

## Prompt Grade

For each prompt template, track:

- Bets generated
- Win rate
- Profit/loss
- Reasoning average
- Ungradable pick rate
- Whether it created useful restraint or just more bets

The best prompt is not the one that produces the most bets. The best prompt is
the one that produces the most useful, auditable, profitable decisions.
