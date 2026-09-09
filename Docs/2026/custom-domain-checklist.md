# Custom Domain Plan

Reviewed September 9, 2026. See `brand-domain-plan.md` for naming recommendations.
No new domain has been purchased or configured. Current public origin:
`https://crespo1301.github.io/AI_Analyzer_Crespo`.

## Before Buying

Confirm exact availability, registration and renewal prices at Porkbun, and
possible name conflicts. Search results do not establish domain availability.
GitHub Pages hosts the current static public project. Reassess hosting before
adding paid services or transactions: Pages has commercial-use limitations.

## Cutover

1. Verify domain ownership in GitHub account settings using its supplied TXT record.
2. Add the canonical hostname in repository Settings > Pages before changing DNS.
   For branch publishing, reconcile the resulting CNAME commit locally.
3. Set apex A records to `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, and `185.199.111.153`. Set `www` CNAME to
   `crespo1301.github.io` without the repository path. Avoid wildcard DNS.
4. Configure both hostnames and verify GitHub's redirect to the chosen canonical
   hostname. Do not add competing registrar forwards.
5. Wait for DNS and certificate provisioning, then enable HTTPS. Allow up to
   24 hours and verify the actual certificate and redirects.
6. Inventory all origin references with `rg -n 'crespo1301.github.io'`. Update
   public canonical, Open Graph, structured data, sitemap, robots, generator and
   content-brief references as applicable. Preserve historical raw responses.
   The origin is not currently centralized in one setting.
7. Regenerate matchup pages. Check each indexable route has its own absolute
   canonical. Use a raster social image and absolute URL rather than SVG alone.
   Verify sitemap coverage against actual routes; do not assume a fixed count.
8. Run data, browser, link and diff checks. Publish a scoped release and confirm
   its commit is deployed. Verify nested URLs survive the default Pages redirect.
9. Update Portfolio's live link and root documentation. Add the new Search Console
   property, verify ownership, submit the sitemap, and inspect representative URLs.

## Rollback

Record old DNS before cutover. Restore public origin references, remove the
custom hostname from Pages and the branch CNAME, and remove GitHub-targeting DNS
records if reverting. Verify the default Pages site. Keep ownership TXT records.

## Official Sources

- [Domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Ownership verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
