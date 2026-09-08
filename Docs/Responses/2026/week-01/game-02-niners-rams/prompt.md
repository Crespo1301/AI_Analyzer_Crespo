# Prompt sent to all three models

- Game: San Francisco 49ers vs Los Angeles Rams (neutral site)
- Week: 1 (2026 NFL Regular Season)
- Kickoff: Thursday, September 10, 2026 - specific ET kickoff time was not
  listed on the ESPN preview page at intake; the game is on Netflix.
- Venue: Melbourne Cricket Ground, Melbourne, Australia (NFL Melbourne
  Game - international neutral site, both teams traveling from the US)
- Source of pre-game context: https://www.espn.com/nfl/game/_/gameId/401872657/49ers-rams (fetched 2026-09-08)

Every context item below either came from that ESPN page or is marked as
"not stated on this page." No memory-filled facts this time. If a model
wants QB names, weather, or surface, it will have to note them as
unverified or use its own research.

---

```text
You are analyzing San Francisco 49ers vs Los Angeles Rams, Thursday
September 10, 2026, for NFL betting. This is the 2026 NFL Melbourne
international game, played at a neutral site with both teams traveling
internationally from the US.

You have a $20 bankroll for this single game. You may split it across as
many or as few bets as you want. You may also keep some or all of it in
reserve (no bet) if the edge is not there.

Pre-game context (only what the ESPN preview page stated; gaps are
labeled explicitly):
- Kickoff: not stated on ESPN preview page (broadcast on Netflix)
- Venue: Melbourne, Australia (neutral site, international)
- Current spread: Rams -2.5 (-120) / 49ers +3.5 (-108) [source: DraftKings
  via ESPN preview]
- Current total: 48.5 (Over -110 / Under -112)
- Current moneyline: 49ers +164 / Rams -198
- Weather / wind: not stated on ESPN preview page
- Playing surface: not stated on ESPN preview page
- Away (49ers) injury report:
    - George Kittle, TE: QUESTIONABLE (Achilles)
    - Christian McCaffrey, RB: QUESTIONABLE (undisclosed)
    - De'Zhaun Stribling, WR: QUESTIONABLE (shoulder)
    - Nick Bosa, DE: QUESTIONABLE (knee, prior ACL)
    - Sam Okuayinonu, DT: IR (foot, est. return Dec 17)
- Home (Rams) injury report:
    - Puka Nacua, WR: QUESTIONABLE (groin)
    - Myles Garrett, DE: QUESTIONABLE (knee)
    - Alex Johnson, CB: IR (est. return Feb 15)
    - Justin Dedich, G: IR-R (est. return Oct 12)
    - Keagen Trost, OT: IR-R (hamstring, est. return Oct 12)
- Rest and travel: Both teams travel internationally to Melbourne
  (approximately 8,000+ miles from California). Neither team has a true
  home-field advantage; ESPN designated Rams as the home team for
  book/scheduling purposes.
- Recent form (last 5 shown on ESPN, from prior season):
    - 49ers: W vs LV 18-12, W vs LAC 41-17, L vs TEN 19-13, L @ SEA 41-6,
      W @ PHI 23-19
    - Rams: W @ LAC 20-18, W vs NO 34-0, W @ KC 20-12, L @ SEA 31-27,
      W @ CHI 20-17 OT
- Starting QBs: not stated on ESPN preview page
- Notable news: ESPN Analytics gives Rams 60.5% win probability, 49ers
  39.2%. Both teams enter 0-0.

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
