# Local-Strength Lane, Claude and Codex

Use this prompt when the model is Claude or Codex running with local filesystem access to this repository. The lane exists because these models can actually read the repo, follow the corrections history, and cite the codebase before choosing a bet. That is the study we want to run for them.

## What to fill before sending

- `[WEEK]` current week number
- `[AWAY]` full team name
- `[HOME]` full team name
- `[DATE]` game date, ET
- `[KICKOFF_ET]` kickoff time in ET
- `[VENUE]` stadium and city, or the neutral-site name
- `[NETWORK]` broadcast network
- `[ESPN_BOX]` full ESPN box-score URL (once known post-game, else the game preview URL)

## The prompt

```text
You are running as an entry in the AI Analyzer 2026 NFL model-comparison
study for [AWAY] at [HOME], Week [WEEK], [DATE], kickoff [KICKOFF_ET] at
[VENUE], broadcast on [NETWORK].

You have direct read access to this repository. Use it. Before you make a
single pick, do all of the following in order and cite what you found:

1. Read Docs/2026/grading-rubric.md so you know how your reasoning will be
   scored. Reasoning quality is graded separately from pick outcome. Name
   factors that could actually matter to the result.
2. Read Docs/2026/iteration-system.md so you know how prompt versions are
   tracked. Note the prompt template and version you are answering under.
3. Read assets/nfl-data.js. Read every entry in NFL_CORRECTIONS. Those
   are the ways the 2025 season was actually wrong once we checked box
   scores. Do not repeat the same error patterns (bet-to-model
   misattribution, missing OT flags, wrong dates on Thursday and Monday
   games, prop outcomes assumed from confidence instead of stat lines).
4. Reflect on your own past behavior. In NFL_BETS, filter the rows to
   your own model name. Read every pick, its stake, its outcome, and its
   corrected value if a correction exists. Look for a pattern you can
   actually cite. Where did you overbet on low-conviction props? Where
   did you name a factor that actually mattered to the result? Adjust
   this week's allocation and reasoning to keep what worked and stop what
   did not. Do the same for any prior weeks in NFL_PREDICTIONS_2026 if
   they exist.
5. Read Data/2026/teams.json and Data/2026/team-context.json for the two
   teams playing. Note whatever is filled in and whatever is blank.
6. If a per-week intake file exists at
   Data/2026/intake/week-[WEEK].json, read it. If it does not exist, say
   so and use the open web to fill the gap.
7. Do open-web research on this specific matchup. Cite every source you
   use with a full URL. At minimum, verify the current spread, total, and
   moneyline, and note which sportsbook the number is from. Look at
   injury reports from an authoritative outlet (ESPN, NFL.com, or the
   team's own official injury designation page). News about a team may
   change how you read that team overall, not just for this one bet, so
   let that update your priors when it should.

Then decide. You have a $20 hypothetical bankroll for this single game.
You may split it across as many or as few bets as you want. You may keep
some or all of it in reserve if the edge is not there. Reserve is a
valid allocation.

For every straight bet return:
- market
- specific line or number you are targeting
  (for example "UNDER 47.5" or "Player X OVER 62.5 rush yds")
- side
- stake in dollars
- confidence from 1 to 10
- the specific factor that should make this bet win, named from what
  you actually read or researched (not a vibe)
- what would falsify this bet, i.e. what would have to happen for it to
  lose

For every parlay or same-game parlay, return the same for each leg plus
the reason the correlation between legs is real (why the legs should
move together).

Do not include a pick you cannot explain in one sentence a grader could
audit against the box score. If you cannot audit it, do not bet it.

Finish by returning a single fenced JSON block matching this schema:

{
  "prompt_template": "local-strength-claude-codex",
  "prompt_version": "1.0",
  "model_role": "Claude" or "Codex",
  "model_version": "the exact version string you know yourself as",
  "week": [WEEK],
  "game_id": "[away-abbr]-[home-abbr]",
  "away": "[AWAY]",
  "home": "[HOME]",
  "kickoff_et": "[KICKOFF_ET]",
  "venue": "[VENUE]",
  "network": "[NETWORK]",
  "line_snapshot": {
    "spread": "...",
    "total": "...",
    "moneyline": "...",
    "book": "the sportsbook the number is from",
    "captured_at": "ISO 8601 timestamp in your response time"
  },
  "sources_read_in_repo": ["Docs/2026/grading-rubric.md", "..."],
  "self_reflection": {
    "past_bets_reviewed": "brief note of which of your own past picks you looked at",
    "patterns_noticed": "one or two sentences on your own tendencies",
    "adjustments_this_week": "one or two sentences on what you changed for this game"
  },
  "sources_from_web": [
    {"url": "https://...", "for": "spread" or "injury" or "weather"}
  ],
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
  "reasoning_summary": "3-6 sentences, what you actually saw when you read
    the repo and did research, in your own voice, not marketing"
}

Do not soften the pick to match the market. Do not add a pick you would
not be able to defend to a grader who has read the same rubric you did.
```

## Response filename convention

Save the raw model response to:

```
Docs/Responses/2026/week-[NN]/game-[NN]-[slug]/[model]-picks.md
```

Save the exact prompt you sent to the model alongside it as `prompt.md`. If you noticed a factual error in the prompt (a wrong kickoff, a wrong record, a wrong roster note), save a `prompt-corrections.md` file with the correction and cite the source. Do not edit the original `prompt.md`.
