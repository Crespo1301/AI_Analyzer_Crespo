# NFL Betting AI Evaluation - Final Verified Data
**CS 486 Team 5 - Carlos Crespo (Team Lead)**  
**Date: December 9, 2025**

---

## 📁 File Inventory

### Primary Data Files (VERIFIED - Use These for Report)

1. **`Carlos_NFL_Bet_By_Bet_FINAL_VERIFIED.csv`** (6.9 KB)
   - Complete bet-by-bet tracking for all 86 bets
   - Columns: Week, Model, Prompt, Game, Bet_Type, Recommendation, Stake, Outcome, Return, P/L
   - Source: Extracted from labeled response documents
   - Validation: All outcomes verified against official game results

2. **`Carlos_NFL_Weekly_Summary_FINAL_VERIFIED.csv`** (1.2 KB)
   - Week-by-week performance breakdown
   - Columns: Week, Model, Prompt, Wins, Losses, Pushes, Record, P/L
   - Shows performance trends across Week 9 and Week 11

3. **`Carlos_NFL_Model_Summary_FINAL_VERIFIED.csv`** (283 bytes)
   - Overall model performance summary
   - Columns: Model, Overall_Record, Win_Pct, Total_Bets, Total_P/L, Spread_Total_ML_Record, Spread_Total_ML_P/L, Props_Record, Props_P/L
   - Ready for report table inclusion

### Documentation Files

4. **`Carlos_NFL_Executive_Summary_FINAL.txt`** (5.6 KB)
   - Comprehensive summary of findings
   - Key insights and recommendations
   - Ethics & trustworthiness assessment
   - Final rankings and verdict

5. **`Carlos_NFL_Executive_Summary_FINAL.md`** (5.6 KB)
   - Same content as .txt in markdown format

6. **`Carlos_NFL_Data_Integrity_Report.txt`** (6.6 KB)
   - Documents complete data rebuild process
   - Problem identification and solution
   - Validation methodology
   - Before/after comparison

7. **`Carlos_NFL_Data_Integrity_Report.md`** (6.6 KB)
   - Same content as .txt in markdown format

---

## 🎯 Quick Results Summary

### Overall Rankings
| Rank | Model   | Record    | Win % | P/L      |
|------|---------|-----------|-------|----------|
| 🥇   | ChatGPT | 14-10-1   | 58.3% | +$41.09  |
| 🥈   | Gemini  | 16-12     | 57.1% | +$20.00  |
| 🥉   | Claude  | 17-14     | 54.8% | +$15.00  |

### By Bet Type

**Spread/Total/Moneyline** (All Unprofitable):
- Claude: 7-7 (-$0.45) - Break-even
- ChatGPT: 5-6-1 (-$7.00)
- Gemini: 5-8 (-$43.82)

**Player Props** (All Profitable!):
- Gemini: 11-4, 73.3%, +$63.82 ⭐
- ChatGPT: 9-4, 69.2%, +$48.09
- Claude: 10-7, 58.8%, +$15.45

---

## ✅ Data Validation Checklist

- [x] All 86 bets extracted from labeled response documents
- [x] All model assignments verified against source PDFs
- [x] All game results verified against official NFL sources
- [x] All player statistics verified against game logs
- [x] All outcomes determined (0 unknowns)
- [x] All P/L calculated at standard -110 odds
- [x] Cross-validation completed across multiple sources

**Confidence Level: HIGH** - Data is report-ready.

---

## 📊 Data Structure

### Bet-by-Bet CSV Columns
```
Week        : 9 or 11
Model       : ChatGPT, Claude, or Gemini
Prompt      : 1-7, 11 (prompt number)
Game        : Matchup description
Bet_Type    : Spread, Total, Moneyline, Prop, Prop Parlay, SGP, Team Total
Recommendation : Specific bet recommendation
Stake       : Dollar amount (formatted as $X.XX)
Outcome     : WIN, LOSS, PUSH, or N/A
Return      : Total return if bet wins (formatted as $X.XX)
P/L         : Profit/Loss (formatted as $+X.XX or $-X.XX)
```

### Data Sources
1. **Ground Truth**: Labeled response PDFs (Prompt_X_Week_Y.pdf)
2. **Game Results**: NFL.com, ESPN.com official scores
3. **Player Stats**: ESPN.com, NFL.com game logs and box scores

---

## 🔑 Key Insights

1. **All models are profitable overall** - A rare finding in sports betting AI evaluation

2. **Profitability comes entirely from props** - Models excel at matchup-specific player analysis

3. **Spreads/totals remain challenging** - All models unprofitable or break-even on game outcomes

4. **Specialized use case validated** - Models are trustworthy for props but not game predictions

5. **Data rebuild was essential** - Original tracking had systematic model assignment errors that masked true performance

---

## 📝 How to Use These Files

### For CS 486 Report Section 5 (Methods):
- Reference: `Carlos_NFL_Data_Integrity_Report.txt`
- Describe ground truth extraction methodology
- Explain blind evaluation protocol
- Detail outcome verification process

### For CS 486 Report Section 6 (Results):
- Use: `Carlos_NFL_Model_Summary_FINAL_VERIFIED.csv`
- Use: `Carlos_NFL_Weekly_Summary_FINAL_VERIFIED.csv`
- Reference: `Carlos_NFL_Executive_Summary_FINAL.txt`

### For CS 486 Report Section 7 (Ethics & Trustworthiness):
- Reference: `Carlos_NFL_Executive_Summary_FINAL.txt` (ethics section)
- Discuss accuracy by bet type
- Provide recommendations for responsible AI use

---

## 📧 Contact

**Carlos Crespo**  
Team Lead, Team 5  
CS 486 Ethical and Trustworthy AI  
University of San Francisco, Fall 2025  
ccrespo3@dons.usfca.edu

---

## 🔄 Version History

- **v1.0** (Dec 9, 2025): Initial data with tracking errors
- **v2.0** (Dec 9, 2025): Complete rebuild from ground truth ✅

**Current Version: v2.0 FINAL VERIFIED**

---

*All data verified and ready for team report integration.*
