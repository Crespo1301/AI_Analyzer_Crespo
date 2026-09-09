# Custom Domain Switch, AI Analyzer

Use this once you have picked a domain and are ready to point it at GitHub Pages.

## Preconditions

- GitHub Pages deployment is verified, the deployed commit matches your latest `main` tag.
- The site works on the default Pages URL: `https://crespo1301.github.io/AI_Analyzer_Crespo/`.
- No paid Vercel plan is required for this launch. GitHub Pages Free covers the site.

## Steps

1. **Buy the domain.** Any registrar works.
2. **Attach the domain in GitHub.** Repository Settings > Pages > Custom domain. Enter the domain, save. GitHub creates a `CNAME` file at the repo root.
3. **DNS records at the registrar.** For an apex domain, add four `A` records pointing at GitHub Pages' anycast IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   For a `www` subdomain, add a `CNAME` record pointing to `crespo1301.github.io`.
4. **HTTPS.** Wait a few minutes after DNS propagates, then in GitHub Pages settings check "Enforce HTTPS". Let GitHub provision the Let's Encrypt certificate.
5. **Preferred hostname redirect.** Decide whether the apex or `www` is canonical. Configure the non-canonical one to redirect at the registrar.
6. **Swap the origin string.** In this repo, replace every occurrence of `https://crespo1301.github.io/AI_Analyzer_Crespo` with the new canonical origin. Files with the string right now:
   - `robots.txt`
   - `sitemap.xml`
   - `HANDOFF.md`
   Regenerate `sitemap.xml` if you added or removed pages.
7. **Regenerate + commit.** Run `node scripts/build-game-pages.js`, then commit the origin-swap changes with a scoped message.
8. **Search Console.** Add the new property in Google Search Console, verify via DNS or HTML file, submit the sitemap. Same for Bing Webmaster if you use it.
9. **Social preview sanity check.** Post the new canonical URL to a private channel on Twitter or LinkedIn to confirm the OG card renders. `assets/og-default.svg` may need a PNG fallback if a specific platform refuses SVG previews.
10. **Cache flush.** GitHub Pages caches aggressively. Force-refresh the browser and check `/robots.txt` and `/sitemap.xml` for the correct origin before considering the switch complete.

## Verify

After the switch:

- `https://<new-domain>/` loads and shows the current-week matchup strip.
- Every nav link resolves.
- `https://<new-domain>/sitemap.xml` returns 24 URLs at the new origin.
- `https://<new-domain>/robots.txt` points its `Sitemap:` line at the new origin.
- A social share preview renders correctly.

## Roll back

If DNS or HTTPS misbehaves and you need to revert:

- Remove the `CNAME` file from the repo root and push.
- Remove the custom domain in the GitHub Pages settings.
- Undo the registrar DNS records or point them elsewhere.
- Force-refresh, wait a few minutes, then the default `https://crespo1301.github.io/AI_Analyzer_Crespo/` should serve again.
