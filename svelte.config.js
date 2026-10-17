import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// The Vercel adapter creates symlinks that need Windows Developer Mode.
// Local preview needs SvelteKit's build output, but no deployment bundle.
const localPreviewAdapter = { name: 'local-preview', adapt: async () => {} };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: process.env.LOCAL_PREVIEW === '1' ? localPreviewAdapter : adapter(),
		alias: {
			$lib: './src/lib/*'
		}
	}
};

export default config;
