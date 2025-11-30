<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type TextVariant = 'body' | 'body-lg' | 'body-sm' | 'caption' | 'eyebrow';
	type TextTone = 'default' | 'muted' | 'contrast' | 'cta' | 'accent';
	type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
	type TextAlign = 'left' | 'center' | 'right' | 'justify';
	type Tracking = 'tight' | 'normal' | 'wide';

	type TextProps = HTMLAttributes<HTMLElement> & {
		as?: keyof HTMLElementTagNameMap;
		variant?: TextVariant;
		tone?: TextTone;
		weight?: TextWeight;
		align?: TextAlign;
		uppercase?: boolean;
		truncate?: boolean;
		balance?: boolean;
		tracking?: Tracking;
		children?: Snippet;
		class?: string;
	};

	let {
		as = 'p',
		variant = 'body',
		tone = 'default',
		weight = 'regular',
		align = 'left',
		uppercase = false,
		truncate = false,
		balance = false,
		tracking = 'normal',
		class: classFromParent = '',
		children,
		...forwarded
	}: TextProps = $props();

	const variantClasses: Record<TextVariant, string> = {
		body: 'text-base leading-[1.55] sm:text-lg sm:leading-[1.6] mb-3',
		'body-lg': 'text-lg leading-[1.5] sm:text-xl sm:leading-[1.4]',
		'body-sm': 'text-sm leading-[1.45] sm:text-base sm:leading-[1.5]',
		caption: 'text-xs leading-4 sm:text-sm sm:leading-5',
		eyebrow: 'text-xs leading-4 tracking-[0.3em] uppercase sm:text-sm sm:leading-5'
	};

	const toneClasses: Record<TextTone, string> = {
		default: 'text-primary',
		muted: 'text-secondary',
		contrast: 'text-primary-background',
		cta: 'text-cta',
		accent: 'text-accent-one'
	};

	const weightClasses: Record<TextWeight, string> = {
		regular: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	};

	const alignClasses: Record<TextAlign, string> = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
		justify: 'text-justify'
	};

	const trackingClasses: Record<Tracking, string> = {
		tight: 'tracking-tight',
		normal: 'tracking-normal',
		wide: 'tracking-wide'
	};
</script>

{#if variant === 'eyebrow'}
	<svelte:element
		this={as}
		{...forwarded}
		class={`m-0 ${variantClasses[variant]} ${toneClasses[tone]} ${weightClasses[weight]} ${alignClasses[align]} ${truncate ? 'truncate' : ''} ${balance ? 'text-balance' : ''} ${classFromParent}`}
	>
		{@render children?.()}
	</svelte:element>
{:else}
	<svelte:element
		this={as}
		{...forwarded}
		class={`m-0 ${variantClasses[variant]} ${toneClasses[tone]} ${weightClasses[weight]} ${alignClasses[align]} ${trackingClasses[tracking]} ${
			uppercase ? 'tracking-[0.18em] uppercase' : ''
		} ${truncate ? 'truncate' : ''} ${balance ? 'text-balance' : ''} ${classFromParent}`}
	>
		{@render children?.()}
	</svelte:element>
{/if}
