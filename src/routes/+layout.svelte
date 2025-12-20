<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.png';
	import { Footer, Navbar } from '$lib';
	import QuickAction from '$lib/components/general/QuickAction.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-primary-background text-primary flex min-h-screen flex-col">
	<Navbar />

	<main class="w-full flex-1">
		{@render children?.()}
	</main>

	<QuickAction />

	<Footer />
</div>
