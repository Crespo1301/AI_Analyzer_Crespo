# Shared baseline prompt, Patriots at Seahawks, Week 1

Lane: `shared-baseline`
Prompt version: 1.0
For: ChatGPT, Claude, Codex, and Gemini. Every model gets the identical text below with no repo pointer and no fetch instruction. This is the control lane.
Locked at: 2026-09-09 (Season 2 kickoff day, before 8:20 PM ET kickoff).

Save each raw response next to this file as `chatgpt-picks.md`, `claude-picks.md`, `codex-picks.md`, `gemini-picks.md`.

## Research context (operator-prepared, from ESPN preview)

Line snapshot captured 2026-09-09 mid-day ET from DraftKings via ESPN.
Weather from ESPN preview: Lumen Field, Seattle, WA. Partial roof cover, wind minimal, 75°F at kickoff.
Injuries and news from ESPN game preview at https://www.espn.com/nfl/game/_/gameId/401872656/patriots-seahawks.

## The prompt (copy from here down)

```text
You are running as an entry in the AI Analyzer 2026 NFL model-comparison
study for New England Patriots at Seattle Seahawks, Week 1, 2026-09-09,
kickoff 8:20 PM ET at Lumen Field, Seattle, WA, broadcast on NBC.

You are answering the shared baseline lane. Every model gets the same
prompt text, the same lines, the same news block. No repo access is
assumed. Do not fetch external URLs. Answer using the material below.

Current market snapshot (DraftKings, captured 2026-09-09 mid-day ET):
- Spread: SEA -3 (NE +3)
- Total: 44.5
- Moneyline: NE +142 / SEA -170

Injuries:
- New England Patriots: RB TreVeyon Henderson OUT (ankle, est. return Sep 20);
  C Ben Brown OUT (knee, est. return Sep 20); S Brenden Schooler NFI-R
  (est. return Oct 11); P Bryce Baringer IR; LB Khalil Jacobs IR.
- Seattle Seahawks: S Ty Okada OUT (hamstring, est. return Sep 20); WR
  Tory Horton QUESTIONABLE (hamstring); S Nick Emmanwori QUESTIONABLE
  (ankle); RB Zach Charbonnet PUP-R (knee, ACL); WR Irv Charles IR-R.

Weather:
Lumen Field, Seattle, WA. Partial roof cover, wind minimal, 75 F at
kickoff. Weather impact minimal.

Rest / travel:
Both teams on standard rest. Patriots travel cross-country to Pacific
time zone (three-hour body-clock shift). Seahawks at home. Week 1 for
both, no recent NFL game reps.

Notable news:
- Rare Week 1 Super Bowl rematch (Seattle won Super Bowl LX 29-13 over
  New England on 2026-02-08). Seahawks open title defense at home.
- ESPN Analytics forecasts Seattle 61.1% to win, New England 38.6%.
- Patriots start Week 1 without their projected RB1 and starting C, both
  ruled out ahead of kickoff (ESPN injury report).

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

Finish by returning a single fenced JSON block matching this schema:

{
  "prompt_template": "shared-baseline",
  "prompt_version": "1.0",
  "model_role": "ChatGPT" or "Claude" or "Codex" or "Gemini",
  "model_version": "the exact version string you know yourself as",
  "week": 1,
  "game_id": "patriots-seahawks",
  "away": "New England Patriots",
  "home": "Seattle Seahawks",
  "kickoff_et": "8:20 PM ET",
  "venue": "Lumen Field, Seattle, WA",
  "network": "NBC",
  "line_snapshot": {
    "spread": "SEA -3 (NE +3)",
    "total": "44.5",
    "moneyline": "NE +142 / SEA -170",
    "book": "DraftKings",
    "captured_at": "2026-09-09 mid-day ET"
  },
  "game_script": "3-4 sentence description of the most likely game flow",
  "bankroll": 20,
  "total_stake": 0-20,
  "reserve": 20 - total_stake,
  "bets": [
    {
      "type": "straight" or "parlay" or "sgp",
      "market": "Spread" or "Moneyline" or "Total" or "Team Total" or
                "Prop" or "SGP" or "Parlay",
      "line": "the exact line",
      "stake": number,
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
