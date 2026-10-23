# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Contact form → Excel

The route `src/routes/contactez-nous/+page.svelte` submits to a SvelteKit action (`src/routes/contactez-nous/+page.server.ts`) which forwards the payload to `EXCEL_WEBHOOK_URL`.

Recommended setup is Microsoft Power Automate:

1. Store the staff Excel file in OneDrive or SharePoint and create a **Table** (Insert → Table) with columns that match: `reason`, `firstName`, `lastName`, `birthDate`, `email`, `message`, `submittedAt`.
2. Create a Flow:
   - Trigger: **When an HTTP request is received**
   - Action: **Add a row into a table** (select the file + table)
   - Response: **Response** (HTTP 200) so the website can treat it as success.
3. Put the Flow trigger URL in your environment: `EXCEL_WEBHOOK_URL=...` (see `.env.example`).

## Bilingual Sanity articles

See [the Studio setup and VISIA guide](docs/sanity/README.md) for the six new
fields, draft examples, publication rules, and manual Studio steps.

Small article checks (no browser or Playwright):

```sh
npm run check
node scripts/check-seo-runtime.mjs
npm run build:local
```

`npm run build` creates the Vercel package. On Windows, its final symlink step
needs Windows Developer Mode or the right system permission. `build:local`
checks the app build without creating a deployment package.
