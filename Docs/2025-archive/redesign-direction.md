# Redesign Direction, AI Analyzer, 2026-27 NFL Season

Status: Phase 1 proposal for approval. No code touched yet.
Season context: 2026-27 regular season kicks off 2026-09-09. This is the first fully live-tracked season for the analyzer, and the site should treat Week 1 as the current experience from launch day forward.

Multi-year framing: the 2025 sample is not a "class-experiment archive". It is Season 1 (v1.0) of an ongoing multi-year AI-model study. Each subsequent season captures a new generation of models against the same rules, so the site should read as a living encyclopedia of AI-vs-NFL analysis that grows year over year. Every season page shows the model roster of that season, the prompt system of that season, the correction history of that season, and cross-season progression views should be first-class once we have two or more seasons stored.

## 1. What the three NBA references actually give us

Reading the four boards together (Warriors home, Timberwolves matchup, Lakers system, mobile board), the shared pattern language is very consistent. I am pulling patterns, not visual identity, from these.

Compact top nav. Team logo left, presenter sponsor beside it, four uppercase primary items (TICKETS, SCHEDULE, TEAM, NEWS & MEDIA), three lighter secondary items (Shop, Community, Entertainment), overflow dots, search icon far right. Fixed height, dense but calm.

Persistent horizontal matchup strip riding directly under the nav. Each card carries date/time, HOME or AWAY badge, both team logos, both team abbreviations with records, score with W/L pill if final, TV and RADIO row, and two action pills at the bottom (Watch, Buy Tickets). Cards scroll horizontally with left/right arrow controls. This strip is the single most load-bearing pattern in the reference set.

Full-bleed editorial hero. Dark photo, giant condensed uppercase headline in white ("CURRY SPLASHES INTO NBA HISTORY", "LEBRON IN MVP CONTENTION", "2023 SEASON PREVIEW"), a tiny timestamp plus category tag ("5m · game") with a short accent-color underline, an arrow indicator. Related headlines sit as narrow text stack under the hero, still on the photo.

Full-width solid color bands. Bright yellow "TRENDING" band, deep navy schedule band, black matchup surfaces. Bands are edge-to-edge, flat, no gradients, no glass, no glow. Content lives inside a wide grid, the color is the frame.

Bento of story cards inside the yellow band. One tall photo card, one photo-plus-text-panel card where the text panel is solid brand color, then a four-up row of smaller photo cards. Each card carries a short accent line and a "Xh · category" microtag.

Matchup pages. Split hero with team logo far-left, giant tabular score, FINAL badge triangle, team logo far-right, team name in condensed white type running along the outer corners, watch replay pill button. Below: two columns, "GAME LEADERS" as three player avatar circles with stat labels, "GAME NEWS & HIGHLIGHTS" as a carousel of photo cards. Below that: box score / game charts / play-by-play tabs.

Big-number modules. A single stat rendered enormous (6.3 ASTS, 18.7 PTS) with player and role metadata underneath. Roster tiles use the same treatment: jersey number as background element in team color, player cutout, name and role on solid color.

Live signal. A red "LIVE" pill next to the score, quarter and clock in tabular numerals, WATCH GAME pill CTA.

Mobile. Same anatomy as desktop, just stacked. Matchup strip becomes one card wide with left/right arrows. Editorial hero keeps its full-bleed and giant headline. Bento becomes single-column with the same card treatments.

## 2. What we honestly adapt for an NFL analytics platform

Constraints that shape adaptation:

- No NBA copy, sponsors, ticket controls, "Buy Tickets" pills, or anything that implies league affiliation.
- No fabricated player photography, no generated documentary sports imagery, no real logos we do not have permission to display.
- No live-game data feeds we do not actually have. "Live" only applies where a working integration supports it.
- Team colors distinguish matchups. They never take over the platform.
- Content anchors on model predictions, prompt versions, reasoning grades, and results, not on player worship.

The translation:

The matchup strip becomes our week strip. Each card shows kickoff date and time, HOME/AWAY badge, both team abbreviations with each team's primary color as a filled color chip (no unlicensed logos), 2026 record when available, model consensus one-liner ("3 of 3 like BUF", or "Split: 2 CHI / 1 DET"), and one primary action pill: "Analysis". Cards scroll horizontally with the same arrow control. Empty weeks show a clean pending state, not filler.

The editorial hero becomes our week hero. Full-bleed dark background image (either an approved stadium/football stock photograph we have rights to, or an original brand-illustration treatment for launch week if licensing is not ready by kickoff), giant condensed uppercase headline drawn from real project content ("WEEK 1 IS LIVE", "THREE MODELS, ONE BUDGET, ZERO EDITS"), tiny timestamp plus category tag with the accent underline, an arrow that scrolls to the current week strip.

The trending band becomes "This Week's Signals". Solid accent-color band with a bento of real project content: latest model comparison, latest prompt-iteration note, latest grading result, latest methodology piece. If a slot is empty pre-kickoff, it renders a labeled scaffold like "First results after Sunday 2026-09-13", not fake data.

The matchup page becomes our analysis page. Split hero with team A left and team B right, each team's primary color as a solid color band behind their abbreviation (again, no unlicensed logos, we style team abbreviations and colors ourselves from `Data/2026/teams.json`). Center of hero: kickoff time and TV network when known before the game, model consensus prediction after locking, final score and result badge after grading. Below the hero: "MODEL PREDICTIONS" (three tiles: ChatGPT, Claude, Gemini, each with pick, confidence, one-line reasoning summary and a link to the raw response), "KEY FACTORS" (injuries, weather, coaching notes pulled from `Data/2026/intake/`), "RESULT & GRADE" (unlocked once the box score is in; shows outcome and separate reasoning grade). Every card carries its data source, timestamp, and sample-size disclaimer.

The big-number module becomes our stat tile. Massive tabular number, a role label under it. We use it for model season ROI, prompt performance, and reasoning-grade averages. It replaces the roster-jersey treatment but keeps the visual weight.

The roster grid becomes our "MODEL LINEUP". Three tiles for ChatGPT / Claude / Gemini, each with a big brand-color numeral (season pick count, or ROI, or grade), an SVG mark we can safely generate for that model, and a stat row underneath (record ATS, straight-pick record, avg reasoning grade). No fake player photos.

The news band becomes "METHODOLOGY & UPDATES". Real posts about the grading rubric, prompt iteration, corrections, data-workflow changes. Same photo-left / text-right anatomy, but photos are original brand graphics or approved stock, not player imagery.

Live signal appears only where we actually have live data. Pre-kickoff we show "LOCKED · picks visible", live period we show "GAMEDAY · no in-game feed", post-final we show "FINAL · graded". No fake LIVE pill ever.

## 3. Visual system

Palette (solid only, no gradients):

- Ink `#0d0f13` (near-black, primary background for hero bands and matchup strip)
- Bone `#f6f2ea` (warm off-white, primary page background for editorial content)
- Steel `#1a1f2b` (secondary dark, for matchup strip and dark surfaces)
- Accent `#f5c518` (single amber-yellow accent, the "one loud color" the references all use for the "TRENDING" band, underline microtag, and pill CTAs)
- Ink-2 `#12345a` (deep navy, secondary band color used sparingly for methodology/archive surfaces)
- Win `#0b6e4f`, Loss `#b3261e`, Push `#8b6b00` (semantic, reused from existing palette)
- Team colors: per-team primary and secondary pulled from `Data/2026/teams.json` and used inside matchup cards only, never as chrome.

Typography:

- Display: Barlow Condensed 700/800 uppercase for hero headlines, matchup team abbreviations, and section labels. Free, high x-height, sports editorial feel matching the references.
- UI + body: Inter 400/600 with tabular numerals variant enabled for scores, records, and stat tiles.
- Numeric: Inter Tabular for scoreline and stat modules so 113 and 102 line up column-for-column, exactly as the references do.
- No custom hosted fonts beyond Google Fonts to keep GitHub Pages fast.

Spacing and layout:

- Grid max width 1280px, gutter 24px on desktop, 16px on mobile.
- Full-bleed bands break the wrap, but content inside them still uses the same wrap.
- Sharp dividers: 1px `--line` and 2px `--ink` under the nav, no rounded panel shadows anywhere.
- Card corner radius 4px only. No pillow corners.

Motion:

- Nav is sticky, no shrink animation.
- Matchup strip scrolls with real overflow, arrows animate opacity of edge fade.
- Hero image gets a very subtle 8% parallax offset on scroll, disabled under `prefers-reduced-motion`.
- Tile hover: 120ms transform lift by 2px + underline swipe on the accent line. Nothing bouncy.
- No spinners, no glass shimmer, no idle loops.

## 4. Information architecture

Primary nav (compact, uppercase, matches reference density):

`WEEK` · `SCHEDULE` · `MODELS` · `RESULTS` · `METHODOLOGY`

Secondary row (lighter weight):

`About` · `Archive`

Search icon far right (site-wide search across analyses, bets, methodology posts).

Route map:

- `/`, Landing. Brand statement, project pitch, "Enter the 2026 Season" primary CTA into `/nfl-2026.html`. Small pointer to the 2025 archive and to Portfolio.
- `/nfl-2026.html`, Current season hub. Editorial hero, matchup strip for the current week, model lineup tiles, this-week signals bento, methodology feed.
- `/schedule.html` (new), All-season schedule with week selector (1 through 18 + playoffs), each week collapses to a matchup list, empty weeks render pending state honestly.
- `/models.html` (new), Model performance page, current season by default with a season selector for historical seasons. ChatGPT / Claude / Gemini tiles with cumulative stats for the selected season, reasoning-grade histograms, iteration log, prompt-version breakdown. Once two seasons exist, adds a "Progression" strip that shows how each model family has changed year over year (2025 Season 1 model version and record, then 2026 Season 2 model version and record, and so on).
- `/results.html`, Redesigned `bet-database.html`. Filterable table, week / model / market / outcome facets, direct ESPN box-score links.
- `/methodology.html` (new), Grading rubric, iteration system, correction history, data-workflow diagram, honest limitations.
- `/about.html` (new), Independent status, no league affiliation, disclosure of AI-generated content, contact, privacy note.
- `/nfl-2025.html`, Season 1 (v1.0). Framed as "Season 1 · 2025 · v1.0 · Model generation: GPT-5 launch era / Claude 3.7 / Gemini 2.5". Clear disclosure at the top about sample size (Weeks 9 and 11 only, 15 games) and correction history, so readers see it as the starting point of a multi-year study, not as a proof of current-model performance. Cross-links to methodology, model lineup of that era, and Season 2 (2026).
- `/nfl.html`, NFL section index. Season selector (Season 1 · 2025, Season 2 · 2026), progression view once two seasons exist, points to current season by default.
- `/Sports_Pages/*.html`, Redesigned per-matchup pages, regenerated from `scripts/build-game-pages.js`.
- `/404.html` (new), Useful 404 with links to Week hub, Schedule, and Results.

Search, filters, week selection, and menus all wired to real content. No empty destinations added just to fill navigation.

## 5. Page anatomies

### Home (`/`)

1. Compact nav.
2. Matchup strip for the current week (auto-selects Week 1 tonight, then advances).
3. Full-bleed editorial hero. Headline: "THE 2026 SEASON IS LIVE". Subhead: two lines, the project premise. Primary CTA: "Enter Week 1 Analysis". Secondary link: "How grading works".
4. How-it-works, four numbered tiles (kept from current site, restyled).
5. Model lineup tiles (ChatGPT, Claude, Gemini) with season stats. Empty stats render as "First week grading Sunday 2026-09-13".
6. This Week's Signals band (solid accent color, bento of real content).
7. Archive strip pointing to 2025.
8. Footer: independent status, links to methodology, privacy, contact, and Portfolio.

### Season Hub (`/nfl-2026.html`)

1. Nav.
2. Matchup strip for the current week.
3. Editorial hero pinned to the current week ("WEEK 1 · KICKOFF NIGHT").
4. Week selector strip (1 through 18, current week highlighted, past weeks marked graded, future weeks marked pending).
5. Current-week matchup grid (large cards, one per game).
6. Season Signals band (bento).
7. Model performance snapshot (three big-number tiles).
8. Methodology feed strip.
9. Footer.

### Matchup Analysis (`Sports_Pages/*.html`, regenerated)

1. Nav.
2. Split hero: team A colored band with abbreviation and record, center content (pre-game: kickoff time, TV, model consensus one-liner; post-final: score, outcome badge, reasoning grade summary), team B colored band. No fake logos or fake photography behind teams.
3. Model Predictions row: three tiles for ChatGPT, Claude, Gemini. Pick, confidence, bankroll allocation, one-line reasoning summary, "Read raw response" link.
4. Key Factors panel: injuries, weather, coaching, pulled from `Data/2026/intake/week-XX.json`. Timestamps and source URLs visible.
5. Bet Ledger: every bet locked for this game with market, line, stake, outcome, profit/loss, and grading note. Uses existing `NFL_BETS` shape.
6. Reasoning Grade card: separate from bet outcome. Shows rubric score with notes about which factors named actually mattered.
7. Result Callout: only rendered post-grading, with direct ESPN box-score link.
8. Related analyses strip.
9. Footer.

### Schedule (`/schedule.html`, new)

1. Nav.
2. Season selector (2026-27 default, 2025 archive).
3. Week grid (18 tiles + playoffs), current week highlighted.
4. Selected week detail: matchup list with kickoff, teams, prediction status, grade status, link to analysis.
5. Footer.

### Results (`/results.html`, redesigned bet database)

1. Nav.
2. Filters: season, week, model, market type, outcome, prompt version.
3. Big-number summary row (bets counted, win rate, ROI, avg grade).
4. Table with sticky header, sortable columns, mobile card fallback under 720px.
5. Footer.

### Methodology (`/methodology.html`, new)

1. Nav.
2. Editorial header: "How we grade the models".
3. Grading rubric (sourced from `Docs/2026/grading-rubric.md`, rendered live from markdown or transcribed once and linked to source).
4. Iteration system (`Docs/2026/iteration-system.md`).
5. Correction log timeline.
6. Data workflow diagram (inline SVG based on `Docs/2026/data-workflow.md`).
7. Limitations and honest disclaimers.
8. Footer.

### About (`/about.html`, new)

1. Nav.
2. Editorial header: "About this project".
3. Independent status disclosure: no NFL affiliation, no partnership with any model provider, personal research and portfolio project.
4. What the site is and is not (not a tout service, not financial advice, no live in-game feeds).
5. Contact.
6. Privacy note.
7. Footer.

## 6. Data integrity guarantees baked into the design

Every card that displays a number carries a data-provenance line: source, timestamp, sample size. Empty states never fake content. Pending predictions render as "LOCKED · will publish at kickoff" once the raw model response is saved but before Sunday. Failed grading renders as "UNGRADABLE · box score missing" with the reason, not as a zero. The word "live" appears only next to a working live integration, and we have none right now for in-game data, so nothing on the site will say LIVE for a game in progress in Phase 2. Pre-kickoff pages show LOCKED. Post-final pages show FINAL with the box-score URL.

Season 1 (2025) gets a persistent top-of-page banner: "Season 1 · v1.0 · Weeks 9 and 11 only · Model generation: 2025 launch-era GPT / Claude / Gemini. Kept as historical baseline for the multi-year study." That banner is the guarantee it can never be misread as current-model performance, while still crediting it as the starting point of an evolving encyclopedia.

Model responses under `Docs/Responses/2026/week-XX/<model>/` remain the raw source for reasoning-grade panels. The site links to them, does not paraphrase them silently.

## 7. Launch-readiness deliverables

Beyond page redesigns, Phase 2 will ship:

- Page-specific `<title>` and `<meta name="description">` on every route.
- Open Graph and Twitter card metadata with a real OG image per route.
- Favicon set (SVG + 32/16px PNG) built from a simple accent-color mark.
- `robots.txt` and `sitemap.xml`.
- Structured data (`SportsEvent` on matchup pages where scaffolds are honest, `Article` on methodology posts, `WebSite` on home) with only real data.
- Skip-to-content link, correct heading order, focus states, aria labels on all custom controls, prefers-reduced-motion honored, contrast checked in both accent and dark bands.
- One environment variable driving the production origin so we can swap the custom domain without hunting through files. Default set to the current GitHub Pages URL, never a fictional domain.
- Domain-switch checklist as a repo doc covering: hosting attachment, DNS records from the host, HTTPS verification, canonical URL update, sitemap update, Search Console submission, social-card sanity check.

## 8. Skill and MCP capability inventory

Enumerated from this session and repo tooling. Selected means I will use it in Phase 2. Optional means I may reach for it if a specific need arises. Unavailable means I confirmed it is not connected in this environment. Unrelated means it exists but does not apply to this static-site launch.

Design and information design (selected): `image-to-code-skill` (already applied by reading the references), `impeccable`, `design-motion-principles`, `artifact-design`, `frontend-design`, `ui-ux-pro-max`, `brandkit` (site identity mark only), `redesign-skill`, `minimalist-skill`, `taste-skill`, `soft-skill`, `dataviz` (stat tiles and results table).

Design (optional): `brutalist-skill`, `gpt-tasteskill`, `stitch-skill`, `image-to-code-skill` follow-up rounds if a section stalls, `imagegen-frontend-web`, `imagegen-frontend-mobile` for original brand illustration only.

Design (excluded): `taste-skill-v1` superseded by taste-skill, `Stitch MCP` unavailable in this environment.

Implementation and code (selected): `Read`, `Write`, `Edit`, `Bash`, `TaskCreate`/`TaskList`/`TaskUpdate`, `output-skill` for large file writes, `defuddle` and `WebFetch` for research when sourcing data.

Implementation (optional): `code-review-graph` MCP is registered; I will run `code-review-graph build` before broad file reads if the codebase grows. Currently the repo is small enough that direct reads are cheaper.

Implementation (excluded): shadcn/ui, Anime.js, Next.js, React best practices, Turbopack, Vercel skills as a group. This is a static HTML/CSS/JS site and stays that way. Migration is out of scope.

Browser and QA (selected): `/home/cresp3/scripts/visual-check.sh` for every page at mobile and desktop widths, plus targeted `--selector` shots for the matchup strip, hero, and matchup-page split. Python static server on port 4173 as documented.

Browser and QA (optional): Chrome DevTools MCP for accessibility contrast checks, agent-browser for interaction verification if a control gets complex.

Browser and QA (excluded): duplicate playwright installs inside the repo, `/security-review` full scan is optional for a static site with no forms, `/vercel-firewall` (not on Vercel).

Data and content (selected): existing `assets/nfl-data.js`, `Data/2026/teams.json`, `Data/2026/team-context.json`, `Data/2026/schedule/week-XX.json`, `Data/2026/intake/`, `Docs/2026/*.md`, `Docs/Responses/2026/`. `WebFetch` and `defuddle` for kickoff schedule verification when filling Week 1 tonight, using ESPN or NFL.com only for factual times, never for narrative content.

Data and content (optional): `google-analytics-mcp` once a GA4 property is attached (not now), `youtube-search` and `notebooklm-video-research` only if we later add a video section.

Data and content (excluded): Supabase (no backend needed), Stripe (no monetization here), Gmail / Calendar / Drive MCPs (not the right tools for this task), Canva MCP (optional launch graphics after ship, not now).

Planning and ops (selected): `TaskCreate` for Phase 2 tracking.

Planning and ops (optional): `csolutions-business-ops` for launch-day review after the site is up, `startup-positioning` if we later polish the "About" copy, `linkedin-*` skills for optional launch distribution, draft-only.

Planning and ops (excluded): CSolutions advisory board agents for design decisions (too heavy for this scope, we already have direction), OpenSpec (this doc is the proposal; adding a second layer is not worth it).

Release and hosting (selected): `Bash` for git, `gh` CLI for release + tag, GitHub Pages as target.

Release and hosting (excluded): Vercel skills across the board (per your choice), CronCreate / cron scheduling, Vercel Storage.

## 9. Phase 2 plan

Once you approve this direction, I will proceed in this order. Each step ends with a visual-check pass and an inspection of the actual PNGs before moving on.

1. Capability baseline. Start local server, capture current site at mobile and desktop for `/`, `/nfl.html`, `/nfl-2026.html`, `/nfl-2025.html`, `/bet-database.html`, one `Sports_Pages/*.html`. Keep them local. This gives us before/after evidence.

2. Design system rebuild in `assets/styles.css` and a new `assets/system.css` if needed. Palette, type stack, spacing tokens, matchup card, hero band, big-number tile, model tile, table, form controls, footer, focus states.

3. Shared nav and matchup strip component in `assets/site.js`. Reads current week from `Data/2026/schedule` + kickoff clock, renders the strip, wires arrow controls, empty-state for future weeks.

4. Home, Season Hub, Schedule, Models, Results, Methodology, About, 404 pages. All page-level HTML rewritten to the new anatomies.

5. `scripts/build-game-pages.js` updated to emit the new matchup-page anatomy. Regenerate all 15 existing pages, verify none of the historical data changed. Add graceful pre-kickoff and pending-grade states.

6. Metadata pass. Titles, descriptions, OG, Twitter cards, favicon, sitemap, robots, structured data.

7. Content pass for Week 1 tonight. Real kickoff times fetched from an authoritative source I cite in the page, not invented. If model predictions are already saved as raw responses under `Docs/Responses/2026/week-01/`, extract them into `NFL_PREDICTIONS_2026` and let the design surface them honestly. If not, the Week 1 slots render "LOCKED · will publish at kickoff" without fake numbers.

8. Verification. Run `node scripts/verify-nfl-data.js`, `node scripts/verify-2026-schedule.js`, `node scripts/summarize-experiment.js`, `node scripts/build-game-pages.js`, `git diff --check`, plus the full visual-check pipeline again.

9. Docs. README, CHANGELOG, HANDOFF, `docs/claude-track-record.md` entry.

10. Release. Commits in scoped chunks, push, tag `v3.0.0`, GitHub Pages release with notes.

11. Deployment verification. Confirm the deployed commit on GitHub Pages matches the tag, all routes resolve, matchup strip renders, no broken links, no console errors.

12. Domain-switch checklist delivered as `Docs/2026/custom-domain-checklist.md`. You handle DNS.

## 10. Explicit non-goals

No framework migration. No backend. No paid services. No fabricated data. No fake photography or generated player imagery. No live in-game feed. No newsletter, tracking, or analytics until you ask for them explicitly. No CSolutions advisory board pass for design decisions.

## 11. Risks and honest flags

- Real player photography is expensive to license and easy to get wrong. Phase 2 will use one of: original brand-illustration hero (a football silhouette treatment in the accent palette), stadium/field stock we have a valid license for, or a text-first hero with no photograph until licensed imagery arrives. All three are documented in Phase 2 step 4.
- Real team logos are trademarked. We will not use them. Matchup cards will show each team's primary color as a filled color chip plus the 2-3 letter abbreviation, styled by us. This is honest and legally clean.
- Tonight is Week 1 kickoff. If model responses for tonight's games are not already captured, we can not fabricate them. The site will show LOCKED where responses are saved and a clean "picks arriving before kickoff" state where they are not. I will not stall the redesign waiting on tonight's data.
- GitHub Pages caches aggressively. The domain-switch checklist accounts for a full cache flush after DNS changes.

## 12. Ask

Approve direction as written, or redirect on any of these:

- Palette. Accent is currently amber-yellow `#f5c518`. Alternatives worth considering: field-green, deep red, hazard-orange. Only one loud color.
- Nav labels. `WEEK / SCHEDULE / MODELS / RESULTS / METHODOLOGY` versus a shorter `TODAY / SCHEDULE / MODELS / RESULTS`.
- Season 1 (2025). Keep at current URL `nfl-2025.html` with the Season 1 banner and multi-year framing, or move under `/seasons/2025.html` to make the multi-year encyclopedia URL shape explicit from the start (so 2026 becomes `/seasons/2026.html`, 2027 becomes `/seasons/2027.html`, and so on).
- Photography policy. Original brand illustration only, licensed stock ok, or text-first hero with no photograph.
- Domain naming direction. If you already have a shortlist, I can bake canonical URLs to match. If not, one env-var origin stays configurable.

Say "approved" or point at the item you want to change, and I move to Phase 2.
