<script lang="ts">
	import ArticlePage from '$lib/components/articles/ArticlePage.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<ArticlePage article={data.article} />
