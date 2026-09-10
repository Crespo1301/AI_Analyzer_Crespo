# 2026 Prompt Templates

Current prompt version: **1.1**, effective for all new runs after September 10,
2026, including remaining Week 1 games. Every lane requires per-ticket payout
odds, quote provenance, potential return and probability-versus-price reasoning.
Baseline runs use supplied quotes only. Missing prices mean reserve, not -110.
Run `node scripts/validate-priced-response.js response.json` on extracted JSON
before accepting funded picks. A passing check verifies structure and arithmetic,
not that the sportsbook quote or model probability is true: verify those sources.
Save rejected raw responses and any pre-kickoff correction separately.
Original v1.0 prompts remain in Git history and saved game responses.

Reset: 2026-09-09 (Week 1 kickoff day).

The previous templates were retired because they treated every model like it only had the tools the weakest interface offered. That is not the study we want to run. The 2026 methodology is built on two hard rules that apply to every model in every lane:

1. **Every model gets repo access.** Direct filesystem read where the model supports it (Claude and Codex do), raw GitHub URL fetch where it does not (Gemini and any other model without local FS). The mechanism does not matter, the access does. Models are encouraged to read this repo, follow the corrections history, and cite the codebase.
2. **Every model reflects on its own past behavior before picking.** If we have prior weeks or prior seasons of that model's own bets, the model reads them, notes the patterns, and adjusts. A model that overbet last week on low-conviction props should notice. A model that named a factor that actually mattered should reuse that behavior.

On top of that, every model is expected to do open-web research on the specific matchup and cite every source.

## The three templates

1. `local-strength-claude-codex.md` for models with direct local filesystem access. Includes the self-reflection block that reads NFL_BETS (2025 baseline) and prior weeks of NFL_PREDICTIONS_2026.
2. `github-strength-gemini.md` for models without local FS access. Same content, same self-reflection block, fetched through raw GitHub URLs instead of local reads. Naming is legacy: this lane is about the fetch mechanism, not about a smaller research surface.
3. `shared-baseline.md` a control lane that runs the same locked question against all three models with no repo access at all. Kept so we can measure how much lift the repo access and self-reflection actually produce.

Each template ends with a machine-parseable JSON schema so the raw response can be extracted into `NFL_PREDICTIONS_2026` without ambiguity.

## The blind-test rule

Blind here means: the prompt does not tell the model who to pick. It tells the model how to reason, what to research, what to reflect on, what to cite, and how to format the answer. The pick and the confidence are the model's alone. Do not include our own opinion, prior weeks' patterns, or a "hint" line in any template.

## Iteration

Follow `Docs/2026/iteration-system.md` when changing these templates. Log the change, the reason, the effective week, and the deprecation of the old version. Never silently overwrite.
