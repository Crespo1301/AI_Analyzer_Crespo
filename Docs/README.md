# Docs

Repo-wide documentation. If it's not a research doc, a response record, or an ops runbook, it doesn't belong here.

## Layout

```
Docs/
├── 2026/                             Season 2 living docs
│   ├── grading-rubric.md             rubric v2, outcome-primary
│   ├── iteration-system.md           weekly loop, rubric revisions, roster corrections
│   ├── season-operations-calendar.md pre-game, in-week, post-game timing
│   ├── week-01-analysis.md           full Week 1 retrospective
│   ├── week-template.md              scaffold for each week-NN-analysis.md
│   └── data-workflow.md              rules for editing NFL_GAMES, NFL_BETS, NFL_CORRECTIONS
├── 2025-archive/                     Season 1 material, do not treat as current guidance
│   ├── grading-analysis/             original CSVs and executive summaries
│   ├── original-experiment-context.md
│   ├── redesign-direction.md         retired direction doc, models are told not to read it
│   ├── data-verification-2026-08-25.md
│   ├── claude-track-record.md
│   ├── PACKERS_PANTHERS_SUMMARY.md
│   ├── VIKINGS_LIONS_SUMMARY.md
│   ├── WEEK9_COMPLETE_SUMMARY.md
│   └── OVERVIEW.md
├── Responses/                        raw model responses per game, verbatim
│   └── 2026/week-NN/game-NN-<slug>/  see Docs/Responses/README.md
├── ops/                              operational runbooks and setup
│   ├── AI-WORKFLOW.md                repo copy of the shared CSolutions AI workflow
│   ├── HANDOFF.md                    "if someone else picks this up" handoff notes
│   ├── PRODUCT.md                    product brief
│   ├── SEASON_PLAYBOOK.md            weekly / seasonal operating cadence
│   ├── SECURITY-CHECKLIST.md         security checklist
│   ├── VISUAL-QA.md                  visual-check runner conventions
│   ├── brand-domain-plan.md          brand + domain strategy
│   └── custom-domain-checklist.md    DNS, HTTPS, canonical URL, sitemap updates
├── AI-Analyzer.gif                   preview graphic
└── README.md                         this file
```

Sibling folders under the repo root cover the rest of the project:

- **`Data/`** raw CSVs, schedules, and rosters. `Data/2026/rosters/*.json` is the source of truth per team.
- **`Prompts/`** locked forced-selection prompts, one per game, one folder per week.
- **`assets/`** live site source: `nfl-data.js`, `nfl-predictions-2026.js`, `site.js`, `styles.css`, `research.css`.
- **`Sports_Pages/`** generated per-game pages, do not hand-edit.
- **`research/`** generated public research corpus, do not hand-edit.
- **`scripts/`** build and validation scripts. `scripts/archive/` holds one-off tools kept for reference.

## Editing rules

1. **Docs/Responses/** is verbatim history. Never edit a saved model response.
2. **Docs/2026/grading-rubric.md** and **iteration-system.md** are the two docs prompts explicitly cite. Version them, do not silently rewrite.
3. **Docs/2025-archive/** stays frozen. Models are instructed to ignore its "what has worked" style summaries so Season 1 does not bias Season 2.
4. **Docs/ops/** documents can be updated freely as operations evolve.
