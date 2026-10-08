# Feature Notes

## Ophthalmology disease detail articles

- **Purpose:** Keep Figma-derived medical pages consistent while preserving page-specific content and emphasis.
- **Core flow:** Route article → shared article shell → optional opening image layout or centered illustration → page-specific sections and callouts.
- **Key rules:** Content files remain the wording source; reference PNGs determine hierarchy; an illustration in the first section uses the responsive opening layout; medical images use `object-contain` to avoid cropping.
- **Edge cases:** Illustrations may be reused across disease groups, so pages import the matching shared asset rather than duplicating files.

## Technical SEO foundation

- **Purpose:** Give every indexable static page consistent metadata, canonical URLs, social previews, JSON-LD, and sitemap visibility.
- **Core flow:** Current route → SEO route inventory → layout SEO component → canonical/meta/Open Graph/Twitter/JSON-LD output.
- **Key rules:** All pages remain `index, follow`; canonical URLs use `https://dramalophtalmo.ma`; sitemap entries come from static SvelteKit pages.
- **Edge cases:** Sanity blog article SEO and Article JSON-LD are deferred so CMS-specific fields can be designed later.
