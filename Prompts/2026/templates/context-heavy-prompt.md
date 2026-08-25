# Context-Heavy Prompt

Use this as the main 2026 prompt style. The original experiment performed best
when prompts forced models to connect matchup context to specific markets.

```text
You are analyzing [AWAY TEAM] at [HOME TEAM] for the upcoming NFL slate.

Pre-game context:
- Current spread: [SPREAD]
- Current total: [TOTAL]
- Moneyline: [MONEYLINE]
- Injury report: [INJURIES]
- Weather and wind: [WEATHER]
- Rest/travel/schedule spot: [REST_TRAVEL]
- Offensive matchup notes: [OFFENSE_MATCHUP]
- Defensive matchup notes: [DEFENSE_MATCHUP]
- Recent form: [RECENT_FORM]
- Market movement: [MARKET_MOVEMENT]

Task:
1. Build the most likely game script in plain English.
2. Identify which betting markets match that script.
3. Give up to 3 bets only if the edge is clear.
4. Include one "avoid" market where the number looks tempting but the edge is not strong enough.

For each bet, return:
- market
- exact line
- side
- confidence from 1 to 10
- why this number is playable
- what would make the bet lose

Keep the answer tight. Correct reasoning matters more than sounding confident.
```
