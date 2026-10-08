# Decision Records

## Centralized SEO rendering

- **Decision:** Page metadata, canonical URLs, breadcrumbs, JSON-LD, and sitemap entries are rendered from the root layout using `src/lib/seo.ts`.
- **Why:** The app has more than 100 static routes, so duplicating `<svelte:head>` blocks page by page would make SEO inconsistent and hard to maintain.
- **Alternatives considered:** Per-page metadata blocks; a CMS-driven metadata model for all pages.
- **Consequences / trade-offs:** Static pages are automatically included in the sitemap through the SvelteKit route inventory, but highly tuned page titles still require explicit overrides. Sanity blog article SEO remains a later CMS-focused task.
