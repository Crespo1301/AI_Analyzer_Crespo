# Baseline Betting Prompt

Use this when you want a clean control prompt.

```text
You are analyzing the NFL game: [AWAY TEAM] at [HOME TEAM] on [DATE].

Known context before kickoff:
- Injuries: [INJURIES]
- Weather: [WEATHER]
- Rest/travel: [REST_TRAVEL]
- Line: [SPREAD], total [TOTAL], moneyline [MONEYLINE]
- Notes: [NOTES]

Give your best betting read for this game.

Rules:
- Give at most 3 picks.
- Each pick must include market, line, side, and confidence from 1 to 10.
- Explain the specific reason each pick should win.
- If there is no edge, say no bet.
- Do not use vague picks without a line.
```
