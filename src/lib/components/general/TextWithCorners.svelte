<script lang="ts">
	import type { Snippet } from 'svelte';

	type TextWithCornersProps = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className }: TextWithCornersProps = $props();
</script>

<figure class="text-accent-one relative w-full {className} my-12">
	<div
		class="  text-accent-one relative rounded-3xl px-4 py-4 text-base font-medium leading-relaxed sm:px-5 sm:py-5 sm:text-lg"
	>
		<p class="text-pretty text-center text-xl">{@render children?.()}</p>

		<span
			class="border-accent-one pointer-events-none absolute -right-2 -top-2 h-8 w-8 border-r-2 border-t-2 sm:-right-3 sm:-top-3 sm:h-10 sm:w-10"
			aria-hidden="true"
		></span>
		<span
			class="border-accent-one pointer-events-none absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 sm:-bottom-3 sm:-left-3 sm:h-10 sm:w-10"
			aria-hidden="true"
		></span>
	</div>
</figure>
