# Week 1 Game 2: 49ers at Rams

Template: github-strength-gemini v1.1. Run configuration: game-02-bovada r1.
Prepared September 10, 2026. Status: READY FOR RESEARCH, NOT LOCKED.
No current Bovada prices have been supplied or verified in this packet.

Copy the entire block below into a fresh model session.

```text
GAME 2 RUN RULES (take precedence over generic historical-reflection instructions)
Game ID: niners-rams. Kickoff: 2026-09-10T20:35:00-04:00,
which is September 11 at 10:35 AM AEST in Melbourne. Rams are designated
home team at a neutral international venue, not playing at SoFi Stadium.
Verify the schedule again before running. If kickoff has passed, stop:
do not present retrospective analysis as a pre-game prediction.

Carlos uses Bovada (https://www.bovada.lv/sports/football/nfl).
All funded tickets must use a verified Bovada quote. Other books may be
market context only, never a substitute Bovada price. If the market cannot
be retrieved, state that limitation and ask Carlos for screenshots with
capture time and timezone, including BOTH sides of spreads/totals and
moneylines plus any relevant props or a combined SGP quote.
Do not request credentials, bypass access controls, log in, or place bets.
Until a Bovada price is verified, put that candidate in unpriced_candidates
and leave its stake in reserve. A generic Bovada homepage citation is not
evidence of a specific price. Recheck prices before the actual lock.

Read your own Game 1 raw response plus final-review.md and
prompt-corrections.md in Docs/Responses/2026/week-01/game-01-patriots-seahawks/.
Use assets/nfl-predictions-2026.js for the current-season result review;
the 2025 data lives separately in assets/nfl-data.js.
Older reports assume -110, had attribution errors, and have later
corrections. Do not infer a best market, model or prompt from their
profitability claims. One winning game does not establish a repeatable edge.
Carry forward exact lines, sourced facts, price math, falsifiers and reserve.
Do not automatically favor props, unders, hooks, or any model's last pick.
Do not read other models' Game 2 answers or Carlos's Game 2 selections.

For every source actually read, give the path/URL, access status and a short
checkable factual excerpt (no more than 15 words from any one web source).
If a fetch fails, say so. Another client's HTTP 200 does not prove access
worked in your session, and a snippet is not proof of a tool call.
Keep inference separate from retrieved facts. Never invent model version,
successful repo reads, timestamps or depth-chart roles.
Verify starters against official current reports, not roster ordering.
Research current injuries, usage, weather at Melbourne's local kickoff,
travel/acclimatization, coaching and matchups without assuming a betting angle.

Use the v1.1 payout fields below. Probabilities are estimates, not measured
certainty. Describe the adverse scenario and price sensitivity for each
funded ticket. Do not force a bet if uncertainty defeats the price edge.
Give a compact ticket table, strongest supporting and opposing evidence,
and a valid JSON object (replace schema alternatives with actual values).
For SGPs/parlays add legs with exact markets, sides and lines, and the
verified combined Bovada ticket price. Keep each ticket one stake.
Record generated_at and lock_at with timezone; lock_at is null until the
operator accepts the verified response before kickoff.
No predictions have been locked merely because this prompt was prepared.

For every repo path named above, use this raw URL base:\nhttps://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/\nIf URL access fails, ask for file contents and disclose the changed input access.\n
You are running as an entry in the AI Analyzer 2026 NFL model-comparison
study for San Francisco 49ers at Los Angeles Rams, Week 1, 2026-09-10, kickoff 8:35 PM ET (2026-09-10T20:35:00-04:00) at
Melbourne Cricket Ground, Melbourne, Australia (neutral international site; Rams designated home), broadcast on Netflix.

You do not have local filesystem access, but you can fetch public URLs.
The full study repository is public at
https://github.com/Crespo1301/AI_Analyzer_Crespo. Before you make a single
pick, fetch and read the following raw files and cite what you found:

- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/Docs/2026/grading-rubric.md
- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/Docs/2026/iteration-system.md
- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/assets/nfl-data.js
- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/Data/2026/teams.json
- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/Data/2026/team-context.json
- https://raw.githubusercontent.com/Crespo1301/AI_Analyzer_Crespo/main/Data/2026/intake/week-01.json
  (may 404 if the intake file for this week has not been filled yet, in
  that case say so and continue)

Inside assets/nfl-data.js, look for the array NFL_CORRECTIONS. Those are
the ways the 2025 season graded wrong on first pass. Do not repeat the
same error patterns: bet-to-model misattribution, missing OT flags,
wrong dates on Thursday and Monday games, prop outcomes assumed from
confidence instead of stat lines.

Reflect on your own past behavior. In NFL_BETS, filter the rows to
your own model name. Read every pick, its stake, its outcome, and its
corrected value if a correction exists. Look for a pattern you can
actually cite. Where did you overbet on low-conviction props? Where did
you name a factor that actually mattered to the result? Adjust this
week's allocation and reasoning to keep what worked and stop what did
not. Do the same for any prior weeks in NFL_PREDICTIONS_2026 if they
exist.

Then do open-web research on this specific matchup. Cite every source you
use with a full URL. At minimum, verify the current spread, total, and
moneyline, and note which sportsbook the number is from. Look at injury
reports from an authoritative outlet (ESPN, NFL.com, or the team's own
official injury designation page). Look at weather if the game is
outdoors, look at rest and travel if either team is coming off a short
week or an international trip.

Then decide. You have a $20 hypothetical bankroll for this single game.
You may split it across as many or as few bets as you want. You may keep
some or all of it in reserve if the edge is not there. Reserve is a
valid allocation.

For every straight bet return:
- market
- specific line or number you are targeting
- side
- stake in dollars
- confidence from 1 to 10
- the specific factor that should make this bet win, named from what
  you actually fetched or researched (not a vibe)
- what would falsify this bet, i.e. what would have to happen for it to
  lose

For every parlay or same-game parlay, return the same for each leg plus
the reason the correlation between legs is real (why the legs should
move together).

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
  "prompt_template": "github-strength-gemini",
  "prompt_version": "1.1",
  "model_role": "Gemini",
  "model_version": "the exact version string you know yourself as",
  "week": 1,
  "game_id": "niners-rams",
  "away": "San Francisco 49ers",
  "home": "Los Angeles Rams",
  "kickoff_et": "8:35 PM ET (2026-09-10T20:35:00-04:00)",
  "venue": "Melbourne Cricket Ground, Melbourne, Australia (neutral international site; Rams designated home)",
  "network": "Netflix",
  "line_snapshot": {
    "spread": "...",
    "total": "...",
    "moneyline": "...",
    "book": "the sportsbook the number is from",
    "captured_at": "Actual quote capture timestamp with timezone, not response time"
  },
  "sources_fetched_from_repo": ["https://raw.githubusercontent.com/..."],
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
  "reasoning_summary": "3-6 sentences, what you actually saw when you
    fetched and researched, in your own voice"
}

Do not soften the pick to match the market. Do not add a pick you would
not be able to defend to a grader who has read the same rubric you did.
```
