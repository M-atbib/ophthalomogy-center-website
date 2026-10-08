<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.png';
	import { Footer, Navbar } from '$lib';
	import QuickAction from '$lib/components/general/QuickAction.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import { getPageSeo } from '$lib/seo';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	let { children } = $props();

	// SEO metadata follows the current URL so every route gets canonical, social, and JSON-LD data
	// without forcing 100+ content pages to duplicate technical head markup.
	const seoMetadata = $derived(getPageSeo(page.url.pathname));
</script>

<Seo metadata={seoMetadata} />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-primary-background text-primary">
	<Navbar />

	<main class="w-full flex-1">
		{@render children?.()}
	</main>

	<QuickAction />

	<Footer />
</div>
