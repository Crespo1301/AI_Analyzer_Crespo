# Prompt sent to all three models

- Game: New England Patriots at Seattle Seahawks
- Week: 1 (2026 NFL Regular Season)
- Kickoff: Wednesday, September 9, 2026, 8:20 PM ET (NBC)
- Venue: Lumen Field, Seattle, WA
- Source of pre-game context: https://www.espn.com/nfl/game/_/gameId/401872656/patriots-seahawks (fetched 2026-09-08)

The exact text below is what gets pasted into ChatGPT (GPT-5.5), Claude
(Opus 4.7), and Gemini (3.1). No paraphrasing, no per-model tweaks.

---

```text
You are analyzing New England Patriots at Seattle Seahawks, Wednesday
September 9, 2026, for NFL betting. This is the NFL Kickoff Game of the
2026 regular season.

You have a $20 bankroll for this single game. You may split it across as
many or as few bets as you want. You may also keep some or all of it in
reserve (no bet) if the edge is not there.

Pre-game context:
- Kickoff: 8:20 PM ET on NBC
- Venue: Lumen Field, Seattle, WA (outdoor, natural grass)
- Current spread: Seattle -3.5 (-110) / New England +3 (-102)
- Current total: 44.5 (Over -110, Under -112)
- Current moneyline: Seattle -170 / New England +142
- Weather / wind: Partly cloudy, ~74 F at kickoff, no significant wind
  forecast (per AccuWeather via ESPN)
- Away (Patriots) injuries:
    - Ben Brown, C: OUT (knee, est. return Sep 20)
    - TreVeyon Henderson, RB: QUESTIONABLE (ankle)
    - Bryce Baringer, P: IR (est. return Oct 11)
    - Khalil Jacobs, LB: IR (est. return Oct 11)
    - Isaiah Iton, DT: IR (est. return Feb 15)
- Home (Seahawks) injuries:
    - Nick Emmanwori, S: QUESTIONABLE (ankle) - reports suggest may miss opener
    - Ty Okada, S: QUESTIONABLE (hamstring)
    - Josh Jones, G: QUESTIONABLE (knee)
    - Tory Horton, WR: QUESTIONABLE (hamstring)
    - Zach Charbonnet, RB: PUP-R (knee/ACL, est. return Oct 11)
- Rest and travel: Both teams on full offseason rest. Patriots travel
  cross-country to Seattle (long trip, Pacific time zone).
- Recent form (2026 preseason):
    - Patriots: L 13-37 @ CLE, W 24-21 vs PHI, T 13-13 vs IND
    - Seahawks: T 9-9 @ KC, L 16-19 @ TEN, L 7-17 vs DAL
- Notable news:
    - Patriots HC: Mike Vrabel. Starting QB: Drake Maye (year 2).
    - Patriots CB Christian Gonzalez just signed a 4-year, $135M extension
      (highest-paid CB in the NFL).
    - RB TreVeyon Henderson is a rookie/second-year contributor whose status
      is uncertain; if out, Patriots backfield depth is thin.
    - Seahawks are opening at home in the NFL Kickoff Game with public
      attention.
    - ESPN Analytics gives Seattle 61.1% win probability.

Task:
1. Describe the most likely game script in 3-4 sentences.
2. Decide how to allocate the $20 across bets. You may use:
   - Straight bets on spread, total, moneyline, team totals, or player
     props (passing yds/TDs, rushing yds, receiving yds, anytime TD,
     sacks, INTs, longest completion).
   - Parlays (2+ legs combined into one bet with one stake, all legs
     must hit to win, higher payout).
   - Same-game parlays (SGP) if the correlation is intentional.
   - A reserve (unbet money) counts as a valid allocation.
3. For each straight bet, return:
   - market
   - specific line or number you are targeting (e.g. "OVER 47.5" or
     "Player X OVER 62.5 rush yds")
   - side
   - stake in dollars
   - confidence from 1 to 10
   - the specific reason this bet should win (name a factor, not a vibe)
   - what would make this bet lose
4. For each parlay, return:
   - type (straight parlay or same-game parlay)
   - each leg with its own market, specific line, side, and one-sentence
     reason
   - total stake in dollars for the parlay as a whole (do not stake each
     leg separately)
   - confidence from 1 to 10 in the parlay as a whole
   - the shared game-script thesis that ties the legs together
   - which leg is the weakest link
5. All straight stakes plus all parlay stakes plus reserve must sum to
   exactly $20.

Rules:
- Every pick must be auditable against the final box score. If you cannot
  name a specific line, do not make the pick.
- Reserve unbet money if the edge is weak. Reserve counts as a valid
  allocation.
- Parlays are allowed and encouraged when multiple legs share a coherent
  game-script thesis (e.g. one team blows out the other, so their side of
  the spread AND their WR1 anytime TD both hit for the same reason). Do
  not stack independent coin-flips just to boost payout.
- Correct reasoning matters more than sounding confident.

Return the full allocation as a clean table at the end so it can be
graded. Include a "type" column (straight / parlay / SGP / reserve).
```
