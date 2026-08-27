# 2026 Raw Model Responses

One folder per week, one subfolder per model, one file per prompt run.

```text
Docs/Responses/2026/
  week-01/
    chatgpt/
      game-1-baseline.md
      game-1-context-heavy.md
    claude/
    gemini/
  week-02/
  ...
```

## Rules

- Save the response before extracting any picks. If it isn't saved, the
  reasoning score is 0 and the pick is flagged as low-evidence.
- Keep the model's original wording. Do not clean up spelling, remove
  hedging, or reorder picks.
- Include a short header noting the model version, the prompt template used,
  and the time the prompt was submitted.
- If a model is re-run for the same game/prompt, save the new response as
  `<original-name>-rerun-<timestamp>.md`. Do not overwrite.
- These files are the source of truth for the reasoning-score column in the
  weekly grade. Do not paraphrase them into the summary.

## Recommended header

```markdown
---
model: ChatGPT (gpt-5)
prompt_template: context-heavy
week: 1
game: Bills at Cowboys
submitted_at: 2026-09-09T09:12:00-04:00
---
```
