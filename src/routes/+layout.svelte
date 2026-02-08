<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.png';
	import { Footer, Navbar } from '$lib';
	import QuickAction from '$lib/components/general/QuickAction.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	let { children } = $props();
</script>

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
