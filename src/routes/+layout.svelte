<script lang="ts">
	import '../app.css';
	import { Footer, Navbar } from '$lib';
	import QuickAction from '$lib/components/general/QuickAction.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import { getPageSeo, type PageSeo } from '$lib/seo';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	let { children } = $props();

	// SEO metadata follows the current URL so every route gets canonical, social, and JSON-LD data
	// without forcing 100+ content pages to duplicate technical head markup.
	const seoMetadata = $derived(
		('seo' in page.data && page.data.seo ? page.data.seo : getPageSeo(page.url.pathname)) as PageSeo
	);
</script>

<Seo metadata={seoMetadata} />

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-primary-background text-primary">
	<Navbar />

	<main class="w-full flex-1">
		{@render children?.()}
	</main>

	<QuickAction />

	<Footer />
</div>
