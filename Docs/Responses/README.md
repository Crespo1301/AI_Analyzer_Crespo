# Model responses

Raw, verbatim model responses to every locked forced-selection prompt live here. This is the study record. Do not edit these files after they're saved, do not rewrite for grammar, do not clean up formatting. If a response is wrong or fabricated, that fact is graded against the model, not corrected against the file.

## Folder structure

```
Docs/Responses/2026/
├── week-01/
│   ├── game-01-patriots-seahawks/
│   │   ├── chatgpt-picks.md      raw ChatGPT (via Codex CLI) response
│   │   ├── claude-picks.md       raw Claude (via Claude Code) response
│   │   ├── gemini-picks.md       raw Gemini (web) response
│   │   ├── carlos-tickets.md     optional: Carlos's own placed tickets
│   │   └── final-review.md       optional: post-game grading writeup
│   ├── game-02-niners-rams/
│   └── ...
└── week-02/
    └── game-01-lions-bills/
```

## File conventions

- **`<model>-picks.md`** is the model's raw response, preserved verbatim. If a model didn't file a response before kickoff, the file is either missing or contains a single "EXPIRED" note explaining why.
- **`carlos-tickets.md`** is optional. It captures Carlos's own placed tickets (screenshot references, settled amounts) when they exist. Kept separate from model rows so leaderboards stay clean.
- **`final-review.md`** is optional. Written after grading to capture reasoning-quality review, corrections, and lessons carried into future prompts. Not every game has one, only games that produced a lesson worth writing down.

## Grading

Grades themselves live in `assets/nfl-predictions-2026.js` under each game's `result.grades[model]` array so the site can render them without parsing markdown. `final-review.md` is prose, not the source of truth.

## Prompts

The prompt each model was given is in `Prompts/2026/week-NN/game-NN-<slug>.md`, one prompt per game, kept next to the response folder that carries the outputs.
