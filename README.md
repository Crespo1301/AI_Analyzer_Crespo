# AI Analyzer Crespo

Static public showcase tool for comparing AI model performance across analysis pages.

## Role In The Business

- This repo is one of the public showcase projects listed in `Portfolio/src/data/projects.ts`.
- It demonstrates product thinking, information design, and results presentation.
- It is not a weekly business-critical repo, but it still supports credibility and range.

## Shared Docs

- `CLAUDE.md`
- `AI-WORKFLOW.md`
- `SECURITY-CHECKLIST.md`

## Structure

- `index.html` is the main hub
- `Sports_Pages/` contains individual interactive analyses
- `Docs/` holds summaries and grading-analysis material
- `Docs/AI-Analyzer.gif` is the committed demo asset for showing the analyzer experience in portfolio/docs contexts
- `analysis_template.html` is the starting point for new pages

## Local Development

Serve the repo locally:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Working Rules

- Keep the home hub aligned with whatever analyses actually exist.
- If you add a new analysis page, also update the landing page and summary docs.
- Treat docs and screenshots as part of the product surface.

## Security Notes

Run `SECURITY-CHECKLIST.md` before publishing new analysis data. The main risks here are stale exports, accidental exposure of raw data files, and broken public links.
