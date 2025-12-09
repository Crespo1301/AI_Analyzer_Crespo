=============================================
DATA INTEGRITY & VALIDATION REPORT
CS 486 Team 5 - NFL Betting Domain - Carlos Crespo
=============================================
PURPOSE:
This report documents the complete data rebuild process undertaken to ensure
accuracy and integrity of the NFL betting AI evaluation results.

=============================================
PROBLEM IDENTIFIED
=============================================

ISSUE: Systematic model assignment errors in bet tracking spreadsheet

DISCOVERY:
User flagged discrepancies between bet tracking data and labeled response
documents. Investigation revealed models were systematically swapped in
multiple prompts.

EXAMPLES OF ERRORS FOUND:

Week 11, Prompt 1 (Patriots/Jets, 49ers/Cardinals):
  - Ground Truth: Gemini recommended Patriots -12.5, Under 43.5
  - Tracked As: ChatGPT bets (INCORRECT)

  - Ground Truth: Claude recommended Jets +12.5, Over 43.5
  - Tracked As: Gemini bets (INCORRECT)

Additional errors identified in:
  - Week 11: Prompts 5, 6, 7 (partial model confusion)
  - Week 9: Prompts 1, 5 (model assignment errors)

ROOT CAUSE:
Bet tracking spreadsheet did not correctly match labeled response documents.

=============================================
SOLUTION: COMPLETE DATA REBUILD
=============================================

APPROACH:
Rebuild entire dataset from scratch using ONLY labeled response documents
as single source of truth.

STEP 1: SYSTEMATIC EXTRACTION
  - Reviewed all 13 labeled response PDFs
  - Extracted every bet recommendation by model
  - Documented game, bet type, stake, and reasoning
  - Total extracted: 87 bets (86 valid + 1 N/A)

STEP 2: GAME RESULTS COMPILATION
  - Compiled comprehensive game results for all 14 games
  - Verified final scores from official NFL.com
  - Documented spreads, totals, and halftime scores
  - Cross-referenced multiple sources for accuracy

STEP 3: OUTCOME DETERMINATION
  Phase 1 - Spread/Total/Moneyline bets (40 bets):
    - Compared actual margins vs. spread lines
    - Compared actual totals vs. O/U lines
    - Determined WIN/LOSS/PUSH for each bet
    - Calculated P/L at standard -110 odds

  Phase 2 - Player Props (46 bets):
    - Researched player statistics from game logs
    - Verified against ESPN, NFL.com box scores
    - Determined prop outcomes (over/under, TD/no TD)
    - Calculated P/L for all prop bets

=============================================
VALIDATION METHODS
=============================================

CROSS-VALIDATION:
1. Labeled Documents → Ground Truth
   Every bet traced back to specific model response in PDF

2. Game Results → Multiple Official Sources
   NFL.com, ESPN.com, team official sites

3. Player Stats → Box Score Verification
   Individual player performance verified across sources

INTEGRITY CHECKS:
- Zero 'UNKNOWN' outcomes (all 86 bets determined)
- All model assignments match labeled response documents
- All P/L calculations verified at -110 odds
- All game results cross-checked with official sources

=============================================
RESULTS COMPARISON: BEFORE vs AFTER REBUILD
=============================================
BEFORE (Original Data - with errors):
  - Claude:   15-15 record, -$12.93 P/L (50.1/100 avg score)
  - ChatGPT:  10-14 record, -$24.51 P/L (47.5/100 avg score)
  - Gemini:   10-16 record, -$36.87 P/L (43.8/100 avg score)

AFTER (Rebuilt Data - verified correct):
  - ChatGPT:  14-10-1 record, +$41.09 P/L ✅ PROFITABLE
  - Gemini:   16-12 record,   +$20.00 P/L ✅ PROFITABLE
  - Claude:   17-14 record,   +$15.00 P/L ✅ PROFITABLE

DRAMATIC REVERSAL:
All three models went from UNPROFITABLE to PROFITABLE after correcting
model assignment errors and verifying all outcomes.

=============================================
KEY INSIGHTS FROM CORRECTED DATA
=============================================
1. SPREAD/TOTAL STRUGGLE IS REAL
   Even with corrected data, all models unprofitable on spreads/totals:
   - Claude:   -$0.45 (break-even)
   - ChatGPT: -$7.00
   - Gemini:  -$43.82

2. PROPS PROFITABILITY IS CONSISTENT
   All three models showed strong prop performance:
   - Gemini:   +$63.82 (73.3% win rate)
   - ChatGPT: +$48.09 (69.2% win rate)
   - Claude:   +$15.45 (58.8% win rate)

3. MODEL STRENGTHS REVEALED
   - ChatGPT: Most consistent across both bet types
   - Gemini:   Highest variance, best at props
   - Claude:   Most balanced, best at spreads (break-even)

=============================================
FILES CREATED
=============================================
Final Output Files:
  1. Carlos_NFL_Bet_By_Bet_FINAL_VERIFIED.csv
     Complete bet-by-bet tracking with outcomes (86 bets)

  2. Carlos_NFL_Weekly_Summary_FINAL_VERIFIED.csv
     Week-by-week performance by model and prompt

  3. Carlos_NFL_Model_Summary_FINAL_VERIFIED.csv
     Overall model performance with breakdowns

  4. Carlos_NFL_Executive_Summary_FINAL.txt/.md
     Comprehensive summary with recommendations

  5. Carlos_NFL_Data_Integrity_Report.txt/.md
     This document

=============================================
CONFIDENCE STATEMENT
=============================================

VERIFIED:
✅ All 86 bets traced to ground truth source documents
✅ All game results verified against official NFL sources
✅ All player stats verified against game logs and box scores
✅ All P/L calculations verified at standard -110 odds
✅ Zero unknown outcomes remaining

DATA QUALITY:
This dataset represents a complete rebuild from primary sources with
systematic verification at every step. All model assignments corrected,
all outcomes verified, all calculations double-checked.

READY FOR REPORT:
This data is ready for inclusion in CS 486 Team 5 final report.
Sections 5 (Methods) and 6 (Results) can proceed with confidence.

================================================================================
REPORT PREPARED BY:
Carlos Crespo (Team Lead, Team 5)
CS 486 Ethical and Trustworthy AI
University of San Francisco, Fall 2025

Date: December 9, 2025
================================================================================
