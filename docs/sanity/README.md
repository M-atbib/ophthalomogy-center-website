# Sanity articles: setup and VISIA contract

The website is on branch `seo-sanity-updates`. Nothing was published or deployed.

## Audit

The existing SvelteKit app uses `blogArticle`, PortableText, `image.alt`,
`briefing`, `status: active | archived`, and a central SEO system.
Project fallback: `qdrihdi9`, dataset: `production`. Environment settings can override these.
The website uses the published perspective and has no write client.

No `sanity.config.*`, Studio schema, or Studio repository was found in this
workspace or the other folders under `C:/Project`. The Studio repository is unknown.
The Studio has NOT been changed. Apply the code below in its existing `blogArticle`
schema. Keep all existing fields, groups, image settings, and PortableText types.
No category field was found in the website contract, so the UI adds none.

## Exact Studio changes

Add these groups to the existing `groups` array (keep any other groups):

```ts
{ name: 'translation', title: 'Langue et traduction' },
{ name: 'seo', title: 'SEO' },
```

Import `defineField` and `defineArrayMember` from `sanity` if needed.
Add these six fields to the existing `fields` array:

```ts
defineField({
  name: 'language',
  title: 'Langue',
  type: 'string',
  group: 'translation',
  initialValue: 'fr',
  options: {
    list: [
      { title: 'Français', value: 'fr' },
      { title: 'العربية الفصحى', value: 'ar' },
    ],
    layout: 'radio',
  },
  validation: (Rule) => Rule.required().valid('fr', 'ar'),
}),
defineField({
  name: 'translation',
  title: 'Version française associée',
  description: 'Sur la version arabe, choisir la version française. Une seule version arabe par article français.',
  type: 'reference',
  group: 'translation',
  to: [{ type: 'blogArticle' }],
  weak: true,
  hidden: ({ document }) => (document?.language ?? 'fr') !== 'ar',
  options: {
    disableNew: true,
    filter: 'coalesce(language, "fr") == "fr"',
  },
}),
defineField({
  name: 'seoTitle',
  title: 'Titre SEO',
  type: 'string',
  group: 'seo',
  description: 'Facultatif. Sinon, le titre de l’article est utilisé.',
  validation: (Rule) => Rule.max(60).warning('Préférer un titre de 60 caractères au maximum.'),
}),
defineField({
  name: 'seoDescription',
  title: 'Description SEO',
  type: 'text',
  rows: 3,
  group: 'seo',
  description: 'Facultatif. Sinon, le résumé est utilisé.',
  validation: (Rule) => Rule.max(160).warning('Préférer une description de 160 caractères au maximum.'),
}),
defineField({
  name: 'focusKeyword',
  title: 'Mot-clé principal',
  type: 'string',
  group: 'seo',
  description: 'Usage éditorial uniquement. Aucune balise meta keywords.',
}),
defineField({
  name: 'secondaryKeywords',
  title: 'Mots-clés secondaires',
  type: 'array',
  of: [defineArrayMember({ type: 'string' })],
  options: { layout: 'tags' },
  group: 'seo',
}),
```

Each document keeps its own existing `title`, `subtitle`, `slug`, `briefing`,
`status`, `publishedAt`, `image` with `alt`, and `article` PortableText.
There is no FAQ field, review field, tracking field, or internal approval workflow.
If the existing image field does not yet contain `alt`, append this field to its
existing `fields` array, without replacing other image settings:

```ts
defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
```

## VISIA draft examples

See `visia-drafts.json`. These are two example documents, not medical content to
publish. No image asset ID is invented. The examples show the image-free fallback.
If VISIA uploads an image, use the existing shape:

```json
{
	"image": {
		"_type": "image",
		"asset": { "_type": "reference", "_ref": "REAL_UPLOADED_IMAGE_ASSET_ID" },
		"alt": "A real description of this image, in the article language"
	}
}
```

VISIA must create only `drafts.*` document IDs. Omit `publishedAt` until a person
sets a date. `status: active` alone cannot make a draft public. Never call a publish
operation or create the matching non-draft document from VISIA.
The Arabic `translation._ref` must be the French ID WITHOUT `drafts.`.
The weak reference allows the French document to remain a draft. Keep the French
`translation` empty. Use only one Arabic document for each French document.
The website finds the reverse link without a second reference.
Existing documents without `language` are French; they need no content migration.

## Public pages and SEO

- French: `/articles`, `/articles/[slug]`.
- Arabic: `/ar/articles`, `/ar/articles/[slug]`.
- Old `/actualites` paths send HTTP 301 redirects and keep query strings.
- Lists, article pages, translation links, and sitemap share the same public rule:
  published perspective, no `drafts.*` or `versions.*`, `status: active`, valid
  language and slug, and a real `publishedAt` date at or before now.
- A missing publication date keeps an article private. Set it manually before release.
- Each language has its own canonical, title, summary, social tags, dates, and JSON-LD.
- `seoTitle` and `seoDescription` override the article title and summary.
- Keywords are editorial fields only; no HTML meta keywords tag is emitted.
- Hreflang and article language switches use only public translations. No link
  to a draft translation is emitted. The two index pages link to each other.
- The sitemap includes both languages, uses `_updatedAt` for `lastmod`, and removes duplicates.
- Sanity CDN image URLs have responsive widths and automatic formats; Open Graph
  uses a 1200 × 630 version. No new photos or doctor photos are added by this change.
- New VISIA images must show no women or girls. Use men, eyes, medical equipment,
  or neutral anatomy illustrations. Keep existing images elsewhere on the site.

## Medical approval and author

No proof of medical approval was supplied. Publication is NOT proof of approval.
For this reason, pages show `Cabinet du Dr Amal Alouan — Salé` and JSON-LD uses the
cabinet as the author. No personal authorship or medical approval is invented.
The text `Article validé par Dr Amal Alouan — Ophtalmologue à Salé` must be added
only after real approval for the exact article is confirmed. A doctor author in
JSON-LD also needs true attribution. This change adds no approval system or field.

## Manual steps

1. Apply the six fields and groups in the real Studio repository; test them there.
2. Keep existing content. Set missing publication dates manually where appropriate.
3. Give VISIA access to create drafts; make its instructions require `drafts.*` IDs.
4. Review the text, translations, image rights, alt text, and medical facts before
   a person publishes. Keep image creation outside SvelteKit.
5. Run the Studio's own schema checks. They could not run here because Studio is absent.
6. Review and approve this website change before any deployment. After deployment,
   submit the updated sitemap to the existing search console accounts.

## References

The implementation follows [Sanity published perspectives](https://www.sanity.io/docs/content-lake/perspectives),
[Sanity image URLs](https://www.sanity.io/docs/apis-and-sdks/image-urls),
[SvelteKit HTML hooks](https://svelte.dev/docs/kit/hooks), and
[Google translated page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

## Verification for this change

- `npm run check`: no TypeScript or Svelte errors. Nine existing warnings remain
  in `Button.svelte` and `Title.svelte`.
- `node scripts/check-seo-runtime.mjs`: small server-side checks for FR/AR metadata,
  canonical, hreflang, JSON-LD, headings, language switches, empty state, images,
  sitemap deduplication, redirects, and HTML language/direction.
- The actual Sanity GROQ queries were evaluated once successfully with synthetic
  documents. Drafts, release versions, archived articles, future articles, and
  articles without a date were excluded. Legacy French documents and public
  translations were included. No CMS content was changed.
- `npm run build:local`: app build passed, using the existing local adapter.
- `npm run build`: client and server compilation passed; final Vercel packaging
  failed because Windows blocked a symlink (`EPERM`). No deployment was attempted.
- ESLint passed for the new article files and changed shared article/navigation/SEO
  files. The full repository still has old lint issues outside this work, including
  existing home-page links. The full `npm run lint` also fails in the installed
  Prettier/Tailwind formatter (`getVisitorKeys` with Prettier 3.8.1). Changed files
  were formatted with the Svelte plugin directly, without adding dependencies.
- Responsive grid, image sizes, reading width, and RTL CSS were checked in code.
  No browser or viewport tests were run. No Playwright tests were run.
- The Studio schema still needs to be applied and checked in its own repository.
