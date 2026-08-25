# 2026 NFL Season Operations Calendar

Last updated: 2026-08-25

This calendar turns the NFL regular season into a repeatable AI Analyzer work
cycle. It is intentionally week-based, not game-by-game, so the workflow can
survive flex scheduling, international games, and last-minute injury/news
changes.

Source posture:

- Use the official NFL schedule and ESPN schedule/box-score pages as the source
  for dates, kickoff windows, and final grading.
- Recheck Weeks 16, 17, and 18 during the season because late-season NFL games
  can move through flex scheduling.
- Lock bets only after the final same-day injury/weather/line check.

## Weekly Operating Rhythm

Use this rhythm every week unless the slate has an unusual opener.

| Day | Work |
|---|---|
| Tuesday | Build the slate, confirm games, create week folder, pull opening lines, injuries, weather, travel/rest, and matchup notes. |
| Wednesday | Fill prompts from `Prompts/2026/templates/`, run each model, save raw responses, extract candidate bets, and flag weak or vague picks. |
| Thursday | Final check for Thursday games. Lock Thursday bets only after injury/weather/line review. |
| Friday | Review Sunday slate, compare model picks, remove low-confidence or ungradable bets, and update notes. |
| Saturday | Final Sunday research pass. Check injuries, weather, line movement, and model disagreement. |
| Sunday | Lock Sunday bets in the morning. Do not chase late picks unless new information materially changes the read. |
| Monday | Final check and lock Monday night bets. Start grading completed Thursday/Sunday games. |
| Tuesday After | Finish grading, run data verification, write weekly debrief, and decide prompt/strategy adjustments for the next week. |

## Daily Time Blocks

Use these as default target windows in Eastern time.

| Window | Purpose |
|---|---|
| Tuesday 7:30-8:30 AM | Create the week folder, verify schedule, and list games. |
| Tuesday 8:00-9:00 PM | Pull first research pass: injuries, weather, lines, and team context. |
| Wednesday 7:30-8:30 AM | Fill prompt files and identify which games need deeper context. |
| Wednesday 8:00-9:00 PM | Run ChatGPT, Claude, and Gemini. Save raw responses immediately. |
| Thursday 7:30-8:30 AM | Final Thursday slate check and candidate bet cleanup. |
| Thursday 5:30-7:30 PM | Lock Thursday bets before kickoff. Skip if work schedule blocks it. |
| Saturday 9:00-10:30 AM | Final Sunday research pass. |
| Sunday 10:00-11:30 AM | Lock Sunday bets. |
| Monday 5:30-7:30 PM | Lock Monday night bets and grade completed games. |
| Tuesday 7:30-8:30 AM | Debrief, verify data, and record adjustments. |

## Season Week Calendar

| Week | Game Window | Setup | Research | First Lock | Final Lock | Debrief |
|---:|---|---|---|---|---|---|
| 1 | Wed Sep 9 to Mon Sep 14 | Tue Sep 8 | Tue Sep 8 | Wed Sep 9 | Mon Sep 14 | Tue Sep 15 |
| 2 | Thu Sep 17 to Mon Sep 21 | Tue Sep 15 | Wed Sep 16 | Thu Sep 17 | Mon Sep 21 | Tue Sep 22 |
| 3 | Thu Sep 24 to Mon Sep 28 | Tue Sep 22 | Wed Sep 23 | Thu Sep 24 | Mon Sep 28 | Tue Sep 29 |
| 4 | Thu Oct 1 to Mon Oct 5 | Tue Sep 29 | Wed Sep 30 | Thu Oct 1 | Mon Oct 5 | Tue Oct 6 |
| 5 | Thu Oct 8 to Mon Oct 12 | Tue Oct 6 | Wed Oct 7 | Thu Oct 8 | Mon Oct 12 | Tue Oct 13 |
| 6 | Thu Oct 15 to Mon Oct 19 | Tue Oct 13 | Wed Oct 14 | Thu Oct 15 | Mon Oct 19 | Tue Oct 20 |
| 7 | Thu Oct 22 to Mon Oct 26 | Tue Oct 20 | Wed Oct 21 | Thu Oct 22 | Mon Oct 26 | Tue Oct 27 |
| 8 | Thu Oct 29 to Mon Nov 2 | Tue Oct 27 | Wed Oct 28 | Thu Oct 29 | Mon Nov 2 | Tue Nov 3 |
| 9 | Thu Nov 5 to Mon Nov 9 | Tue Nov 3 | Wed Nov 4 | Thu Nov 5 | Mon Nov 9 | Tue Nov 10 |
| 10 | Thu Nov 12 to Mon Nov 16 | Tue Nov 10 | Wed Nov 11 | Thu Nov 12 | Mon Nov 16 | Tue Nov 17 |
| 11 | Thu Nov 19 to Mon Nov 23 | Tue Nov 17 | Wed Nov 18 | Thu Nov 19 | Mon Nov 23 | Tue Nov 24 |
| 12 | Thu Nov 26 to Mon Nov 30 | Tue Nov 24 | Wed Nov 25 | Thu Nov 26 | Mon Nov 30 | Tue Dec 1 |
| 13 | Thu Dec 3 to Mon Dec 7 | Tue Dec 1 | Wed Dec 2 | Thu Dec 3 | Mon Dec 7 | Tue Dec 8 |
| 14 | Thu Dec 10 to Mon Dec 14 | Tue Dec 8 | Wed Dec 9 | Thu Dec 10 | Mon Dec 14 | Tue Dec 15 |
| 15 | Thu Dec 17 to Mon Dec 21 | Tue Dec 15 | Wed Dec 16 | Thu Dec 17 | Mon Dec 21 | Tue Dec 22 |
| 16 | Thu Dec 24 to Mon Dec 28 | Tue Dec 22 | Wed Dec 23 | Thu Dec 24 | Mon Dec 28 | Tue Dec 29 |
| 17 | Thu Dec 31 to Mon Jan 4 | Tue Dec 29 | Wed Dec 30 | Thu Dec 31 | Mon Jan 4 | Tue Jan 5 |
| 18 | Sat Jan 9 to Sun Jan 10 | Thu Jan 7 | Fri Jan 8 | Sat Jan 9 | Sun Jan 10 | Mon Jan 11 |

## Per-Week Folder Setup

Create these files before running prompts:

```text
Data/2026/week-XX-research.md
Data/2026/week-XX-lines.csv
Data/2026/week-XX-bets.csv
Data/2026/week-XX-boxscore-links.md
Docs/Responses/2026/week-XX/chatgpt/
Docs/Responses/2026/week-XX/claude/
Docs/Responses/2026/week-XX/gemini/
Prompts/2026/week-XX/
Docs/2026/week-XX.md
```

## Lock Rules

- Thursday games: lock after Thursday final injury and weather check.
- Sunday games: lock Sunday morning after inactive reports are close enough to
  matter.
- Monday games: lock Monday after the final injury and line check.
- International games: create a separate lock window based on actual kickoff
  time.
- Flexed games: update the week file and schedule table when the NFL announces
  the final kickoff time.

## Debrief Rules

Every Tuesday debrief should answer:

- Which model had the best week?
- Which prompt produced the cleanest picks?
- Which bet type performed best?
- Which recommendation was correct for the wrong reason?
- Which recommendation was wrong but had useful reasoning?
- Which pick was ungradable because the response was too vague?
- What is the one prompt or strategy change for next week?

Keep the debrief short enough that it actually gets written every week.
