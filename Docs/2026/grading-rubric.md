# 2026 Grading Rubric, v2

Effective 2026-09-11. Supersedes v1. v1's core error was rewarding "the model named a real factor" even when the outcome disagreed. Sports predictions are wrong all the time, and the team that looks better on paper is often the team that loses. The Week 1 Rams (LAR was the 3.5-point home favorite versus SF, and got beaten 27-7 in Melbourne) is a working example. Under v1 a wrong-side pick could earn a 5/5 reasoning score for citing correct-but-defeated factors. That is the wrong incentive for a betting-model study.

v2 rebalances so **outcome is the primary axis, reasoning is a secondary lens that describes the pick's quality relative to the outcome.**

## Outcome Score (primary)

Each bet still gets:

- `WIN`
- `LOSS`
- `PUSH`
- `VOID`
- `UNGRADABLE`

Only use `UNGRADABLE` when the pick is too vague to verify (no player, no line, no sportsbook number).

The outcome score drives the model's win rate, ROI, and running P/L. Those are the numbers that decide who is picking better this season.

## Reasoning Score (secondary, bounded by outcome)

Use a 0 to 5 score, capped by the outcome column.

| Score | For a WIN | For a LOSS |
|---:|---|---|
| 5 | Named a real factor pre-kickoff that clearly drove the result; the pick was not a vibe. | **Not available for a LOSS.** |
| 4 | Named a real factor pre-kickoff and the pick worked directly through it. | Named a factor that was actually decisive on the winning side (the model saw the right dynamic but bet the wrong side); rare. |
| 3 | Reasoning was plausible; the pick worked, but not necessarily through the cited factor. | Reasoning was plausible on paper; football variance beat it. This is the common LOSS grade. |
| 2 | Reasoning was generic or public; the pick worked anyway. | Reasoning was generic, public, or team-quality vibes without market reason. |
| 1 | Reasoning leaned on a wrong fact, stale injury note, or irrelevant angle; the pick worked by luck. | Reasoning leaned on a wrong fact, stale injury note, or irrelevant angle. |
| 0 | No usable reasoning; the pick worked. | No usable reasoning, hallucinated facts, or no raw response available. |

**Hard caps and rules.**

- A LOSS caps at **4/5**. The model does not get a 5 for a losing pick, even if every named factor was real and defensible. "Real factor" is a floor for entering the reasoning conversation, not a ceiling that beats being wrong.
- The **default LOSS grade is 3**, not 4. Plausible-on-paper losses are the modal outcome in sports betting; 3 is the base state, not something to reward against.
- A WIN with **generic or public reasoning caps at 2/5**. Right pick, wrong process is still bad process.
- **Hallucinated citation, fabricated fetch, or unverifiable claimed "verified price"** overrides the outcome column and caps the reasoning grade at 1/5 regardless of WIN or LOSS. See Source Honesty below.

## Sizing Score (0 to 3)

New axis in v2. Independent of outcome.

| Score | Meaning |
|---:|---|
| 3 | Sizing scaled with the stated edge; low-confidence picks got small stakes; the model sized down when uncertainty was high. |
| 2 | Sizing was directional (bigger stakes on higher-confidence picks) but not calibrated to a stated probability. |
| 1 | Sizing was flat or defaulted to a heuristic ("$11 max"), decoupled from stated confidence. |
| 0 | Sizing was inverted (bigger stakes on lower-confidence picks) or all-in on a single premise. |

## Source Honesty Score (0 to 3)

New axis in v2. This is where fabricated fetches, fake `bovada_verified` labels without screenshots, and hallucinated citations get punished.

| Score | Meaning |
|---:|---|
| 3 | Every cited source is verifiable. Pricing labels (`bovada_verified` / `reference_market` / `conditional`) match the evidence. Every quoted snippet is really in the file the model claims it came from. |
| 2 | Cited sources are real but incomplete; some pricing labels are borderline (e.g., a `reference_market` claim that lacks a captured timestamp). |
| 1 | A cited source did not open, a `bovada_verified` label lacks any evidence, or a quoted snippet is actually only in the prompt body rather than in the fetched file. |
| 0 | Fabricated fetch report (e.g., claimed 404 on URLs that curl shows returning 200), fabricated citations, or hallucinated stat lines. |

A Source Honesty score of 1 or 0 caps the reasoning score at 1/5 regardless of outcome.

## Self-Reflection Score (0 to 2)

New axis in v2, specific to prompt lanes that require the model to review its own past behavior.

| Score | Meaning |
|---:|---|
| 2 | The model read its own prior picks, cited specific patterns (over-allocation, correction shape), and changed its behavior this week accordingly. |
| 1 | The model claimed to reflect but did not cite specifics, or reflected but did not change behavior when the record clearly called for it. |
| 0 | No self-reflection, or claimed reflection contradicted by the rest of the response (e.g., claiming to avoid ceiling-prop overs then submitting a $12 QB pass yds OVER). |

## Aggregate Weekly Grade Per Model

For each model, per week, track and publish:

- Number of picks
- Win/Loss/Push
- Profit/Loss (at recorded or conditional target prices)
- ROI
- Reasoning average (0-5, bounded per above)
- Sizing average (0-3)
- Source Honesty average (0-3)
- Self-Reflection average (0-2)
- Best pick (highest outcome + reasoning + honesty combined)
- Worst pick (lowest combined)
- Biggest miss (largest single-ticket loss)
- Most useful insight (a factor the model named that clearly showed up in the game, whether or not the pick won)
- Hallucination or fabrication count

The **primary ranking is by ROI**. Reasoning, Sizing, Honesty, and Reflection are secondary axes that explain how the model got there. A model that finishes the season with the best ROI is the best NFL picker this season. A model that finishes with mediocre ROI but a 4.5 reasoning average is a model with good football knowledge and bad betting judgment; that distinction goes in the debrief, not in the leaderboard.

## Prompt Grade

For each prompt template, track:

- Bets generated
- Win rate
- Profit/Loss
- Reasoning average
- Sizing average
- Source Honesty average
- Reserve rate (percentage of $20 not staked)
- Ungradable pick rate

The best prompt is the one that produces the most useful, auditable, profitable decisions across all three models. A prompt that produces high reasoning scores but bleeds money loses; a prompt that produces boring winning picks with unremarkable reasoning wins.

## Do Not Reward

- Long answers by themselves.
- Confidence without evidence.
- "Sharp" language without a market reason.
- Generic team quality arguments.
- Hindsight explanations added after the result.
- **"Real factor" citations on the losing side of a pick that got beaten by the actual result.**
- Fabricated citations, fabricated fetch reports, or unverifiable price labels.

## Reward

- Winning picks with clean, cited, market-based reasoning.
- Sizing that matches stated edge and confidence.
- Restraint (no-bet or reserve) when the edge is truly weak, when reserved and the game later proves the market was right.
- Naming a factor pre-kickoff that clearly drove the result, ideally on the winning side. If the factor showed up on the winning side but the model picked the losing side, that is a "most useful insight" note and does not become a 5.
