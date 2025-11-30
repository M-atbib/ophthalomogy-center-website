<script lang="ts">
	import type { Snippet } from 'svelte';

	type ChatBubbleProps = {
		children?: Snippet;
		label?: string;
	};

	let { children, label = 'Message envoyé' }: ChatBubbleProps = $props();
</script>

<div class="flex w-full justify-end">
	<div
		class="relative max-w-[min(90vw,28rem)] rounded-3xl rounded-br-sm bg-accent-one px-4 py-3 text-sm leading-6 text-primary-background shadow-sm sm:px-6 sm:py-4 sm:text-base sm:leading-7 after:absolute after:-right-2 after:top-4 after:h-4 after:w-4 after:rotate-45 after:rounded-sm after:bg-accent-one after:shadow-sm after:content-[''] sm:after:-right-3 sm:after:top-5 sm:after:h-5 sm:after:w-5"
		role="status"
		aria-label={label}
	>
		{@render children?.()}
	</div>
</div>
