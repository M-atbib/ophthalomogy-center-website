<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Snippet } from 'svelte';
	import type { MarkComponentProps } from '@portabletext/svelte';
	let { portableText, children }: { portableText: MarkComponentProps; children?: Snippet } =
		$props();
	const value = $derived(portableText.value as { href?: string } | undefined);
	const href = $derived(
		value?.href && /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(value.href)
			? value.href
			: undefined
	);
</script>

{#if href?.startsWith('/')}
	<a href={resolve(...([href] as Parameters<typeof resolve>))}>{@render children?.()}</a>
{:else if href?.startsWith('#')}
	<a href={`#${href.slice(1)}`}>{@render children?.()}</a>
{:else if href}
	<a {href} rel="external">{@render children?.()}</a>
{:else}
	{@render children?.()}
{/if}
