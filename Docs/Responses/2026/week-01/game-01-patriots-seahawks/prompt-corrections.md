# Prompt fact corrections (post-send)

The prompt in `prompt.md` was sent to all three models as-is. After GPT
5.5's response flagged them, two factual errors in the pre-game context
were identified. **The prompt is not being edited** because doing so would
corrupt the experimental record; this file exists so grading can account
for them.

## Errors in the prompt as sent

1. **QB seasoning wrong.** Prompt said "Drake Maye (year 2)."
   Correct: Drake Maye is entering his **third** NFL season (drafted 2024,
   3rd overall). Source: https://www.patriots.com/news/drake-maye-discusses-his-goals-for-patriots-training-camp-heading-into-third-season

2. **Playing surface wrong.** Prompt said "Lumen Field... (outdoor,
   natural grass)."
   Correct: Lumen Field has been **artificial turf** for its history and,
   per the cited article, was converted to natural grass for the 2026
   FIFA World Cup and then reverted to FieldTurf afterward. So the
   surface at kickoff is **artificial turf**, not natural grass.
   Source: https://www.axios.com/local/seattle/2026/08/19/seattle-lumen-field-fieldturf-grass-seahawks-sounders

## Grading impact

- GPT 5.5 flagged both, cited both, and factored them into its no-bet
  stance. Reasoning score should credit this.
- Claude Opus 4.7 accepted both as given (the prompt asked models to work
  from the supplied inputs). No penalty for this since the prompt
  instructed models to reason from context, not verify it.
- Gemini 3.1 will be evaluated the same way when its response is saved.

## Process fix for Week 2 onward

The intake step (`Data/2026/intake/week-XX-intake.json`) must never contain
a fact from memory. Every non-obvious pre-game context item needs a
`source` URL. The bankroll-optimized prompt template already assumes this
but should be tightened to say: "Every listed context item was verified
against a public source before send. Treat all context as accurate for the
purposes of this exercise; do not attempt to verify externally." That
prevents both the fact-invention problem (mine) and the
tool-use-then-retract problem (GPT's opening line).
