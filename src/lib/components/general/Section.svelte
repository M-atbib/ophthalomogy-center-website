<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type SectionVariant = 'default' | 'muted' | 'contrast' | 'dark';
	type SectionSpacing = 'tight' | 'comfortable' | 'relaxed';
	type SectionWidth = 'default' | 'wide' | 'full';
	type DividerOption = 'none' | 'top' | 'bottom' | 'both';
	type SectionAlign = 'left' | 'center';

	type SectionProps = HTMLAttributes<HTMLElement> & {
		as?: keyof HTMLElementTagNameMap;
		variant?: SectionVariant;
		spacing?: SectionSpacing;
		width?: SectionWidth;
		divider?: DividerOption;
		contain?: boolean;
		align?: SectionAlign;
		class?: string;
		children?: Snippet;
	};

	let {
		as = 'section',
		variant = 'default',
		spacing = 'comfortable',
		width = 'default',
		divider = 'none',
		contain = true,
		align = 'left',
		class: classFromParent = '',
		children,
		...forwarded
	}: SectionProps = $props();

	const variantClasses: Record<SectionVariant, string> = {
		default: 'bg-primary-background text-primary',
		muted: 'bg-sections-background text-primary',
		contrast: 'bg-primary text-primary-background',
		dark: 'bg-card text-primary-background'
	};

	const spacingClasses: Record<SectionSpacing, string> = {
		tight: 'py-10 sm:py-12 lg:py-14',
		comfortable: 'py-12 sm:py-20 lg:py-24',
		relaxed: 'py-14 sm:py-28 lg:py-32'
	};

	const dividerClasses: Record<DividerOption, string> = {
		none: '',
		top: 'border-t border-light-grey/50',
		bottom: 'border-b border-light-grey/50',
		both: 'border-y border-light-grey/50'
	};

	const widthClasses: Record<SectionWidth, string> = {
		default: 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8',
		wide: 'mx-auto w-full max-w-[85%] px-4 sm:px-8 lg:px-10',
		full: 'w-full max-w-[95%] px-4 sm:px-8 lg:px-10'
	};

	const alignClasses: Record<SectionAlign, string> = {
		left: 'text-left',
		center: 'text-center'
	};
</script>

<svelte:element
	this={as}
	{...forwarded}
	class={`${variantClasses[variant]} ${spacingClasses[spacing]} ${dividerClasses[divider]} ${classFromParent}`}
>
	{#if contain}
		<div class={`${widthClasses[width]}  ${alignClasses[align]}`}>
			{@render children?.()}
		</div>
	{:else}
		<div class={` ${alignClasses[align]}`}>
			{@render children?.()}
		</div>
	{/if}
</svelte:element>
