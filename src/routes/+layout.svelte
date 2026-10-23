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
	// The server hook sets the initial HTML; keep it correct after client navigation too.
	$effect(() => {
		document.documentElement.lang = seoMetadata.language;
		document.documentElement.dir = seoMetadata.language === 'ar' ? 'rtl' : 'ltr';
	});
</script>

<Seo metadata={seoMetadata} />

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-primary-background pb-20 text-primary sm:pb-0">
	<Navbar language={seoMetadata.language} />

	<main class="w-full flex-1">
		{@render children?.()}
	</main>

	<QuickAction language={seoMetadata.language} />

	<Footer language={seoMetadata.language} />
</div>
