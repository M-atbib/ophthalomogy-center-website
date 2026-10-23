<script lang="ts">
	import ArticleList from '$lib/components/articles/ArticleList.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<ArticleList {...data} />
