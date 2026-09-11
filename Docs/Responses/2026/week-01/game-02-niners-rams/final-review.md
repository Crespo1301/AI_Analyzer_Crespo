# Final review, 49ers vs Rams (Melbourne), Week 1 Game 2

Verified 2026-09-11 against the ESPN box score at https://www.espn.com/nfl/boxscore/_/gameId/401872657.

## Final

- San Francisco 49ers 27, Los Angeles Rams 7. Total: 34. No overtime.
- Brock Purdy: 25/34, 205 yds, 3 TD, 1 INT.
- Christian McCaffrey: 10 carries, 68 yds.
- Matthew Stafford: 15/25, 155 yds, 0 TD, 1 INT.
- Blake Corum: 10 carries, 54 yds.
- Kyren Williams: 11 carries, 41 yds, 1 TD.

## Ticket grading

| Model | Ticket | Line | Actual | Outcome | Stake | Odds | Profit |
|---|---|---|---:|---|---:|---:|---:|
| ChatGPT | Straight | LAR TT OVER 23.5 | LAR 7 | LOSS | $15 | -110 | -$15.00 |
| ChatGPT | SGP | LAR ML + LAR TT OVER 23.5 | LAR lost, TT 7 | LOSS | $5 | +200 | -$5.00 |
| Claude | Straight | Game UNDER 45.5 | 34 | WIN | $12 | -110 | +$10.91 |
| Claude | Straight | Kyren OVER 16.5 rush att | 11 | LOSS | $4 | -115 | -$4.00 |
| Claude | SGP | UNDER 45.5 + Kyren OVER 16.5 | Kyren leg failed | LOSS | $4 | +180 | -$4.00 |
| Gemini | Straight | Game UNDER 48.5 | 34 | WIN | $12 | -110 | +$10.91 |
| Gemini | SGP | LAR TT OVER 23.5 + Kyren OVER 14.5 | both legs failed | LOSS | $8 | +220 | -$8.00 |

**Net P/L by model:** ChatGPT −$20.00. Claude +$2.91. Gemini +$2.91.

## What the outcome tells the study

**Winner call.** Claude was the only model that picked SF; ChatGPT and Gemini both had LAR. SF won by 20 points. Winner accuracy this game: Claude 1/1, ChatGPT 0/1, Gemini 0/1.

**Total direction.** Game UNDER was the right shape. Both models that took UNDER at some hook (Claude 45.5, Gemini 48.5) cashed. ChatGPT did not take a game-total position; his only exposure to total was via the LAR TT OVER 23.5 leg, which is a fundamentally different market and lost.

**Kyren volume trap.** Both Claude ($4 straight + $4 SGP leg) and Gemini ($8 SGP leg) bet on Kyren Williams rush volume. This is the classic Season 1 correction pattern: a volume-anchored prop on a team whose game script broke against them. Once LAR trailed early, they abandoned the run and Kyren finished with 11 carries against a 14.5 or 16.5 line. Season 1 correction file already flagged this shape (Cook rush yards OVER against a losing script). The v2.1 template calls this out but the models still took it.

**Concentration risk.** ChatGPT explicitly noted his two tickets shared the "Rams 24+ points" exposure. He took the concentration anyway, and when the shared premise failed, both tickets failed together. That is the outcome the value_reasoning block warned about. Grade the honesty (transparent) separate from the outcome (wrong).

**Correlated SGPs.** Claude and Gemini both built SGPs around correlated legs, honoring the v2.1 correlation rule. Both SGPs still lost because at least one leg missed. Correlation reduces variance under the shared premise; it does not protect against a single missed leg. Season 1's parlay/SGP row was 0-3 and Week 1 Game 2's SGPs went 0-3. Six of six now, sample tiny.

**Fabricated repo fetches.** Gemini's third confirmed fake-fetch in three attempts (Game 1 initial, Game 1 rerun, Game 2). Grading treats every Gemini source claim as skeptical until a screenshot or verifiable snippet appears.

## Two-game Week 1 running totals (Season 2)

| Model | Games | Stakes | Wins | Losses | Reserve | Net P/L |
|---|---:|---:|---:|---:|---:|---:|
| ChatGPT | 2 | $20 | 0 | 2 | $20 | -$20.00 |
| Claude | 2 | $31 | 4 | 4 | $9 | +$2.91 (Game 1 reasoning cashed but no dollar profit recorded; Game 2 net) |
| Gemini | 2 | $32 | 2 | 1 | $8 | +$13.08 (Game 1 +$10.17 + Game 2 +$2.91) |

Gemini leads net after Week 1 despite the fabricated-fetch problem. Winning on outcome and grading well on reasoning are two different scores; this table is outcome only.

## Iteration candidates surfaced by Game 2

- v2.2 should demote W9 P3 from the "top-P/L" reference set. It finished 1-2 -$12.
- v2.2 should require Gemini to quote a snippet that is only present in the fetched raw file, not repeated in the prompt body, to close the fake-quote workaround.
- Consider adding an explicit "do not stack the same team-side exposure across singles and SGP" rule. Both Claude (Kyren twice) and ChatGPT (Rams-side twice) took hits from this in Game 2.
