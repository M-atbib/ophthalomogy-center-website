<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type CardVariant = 'surface' | 'muted' | 'dark' | 'accent' | 'translucent';
	type CardPadding = 'none' | 'sm' | 'md' | 'lg';
	type CardElevation = 'none' | 'sm' | 'md';
	type CardRadius = 'sm' | 'md' | 'lg' | 'xl';
	type CardAlign = 'start' | 'center' | 'end';

	type CardProps = HTMLAttributes<HTMLElement> & {
		as?: keyof HTMLElementTagNameMap;
		variant?: CardVariant;
		padding?: CardPadding;
		elevation?: CardElevation;
		radius?: CardRadius;
		align?: CardAlign;
		interactive?: boolean;
		class?: string;
		children?: Snippet;
	};

	let {
		as = 'article',
		variant = 'surface',
		padding = 'md',
		elevation = 'sm',
		radius = 'xl',
		align = 'start',
		interactive = false,
		class: classFromParent = '',
		children,
		...forwarded
	}: CardProps = $props();

	const variantClasses: Record<CardVariant, string> = {
		surface: 'bg-primary-background text-primary border border-light-grey/60',
		muted: 'bg-sections-background text-primary border border-light-grey/40',
		dark: 'bg-card text-primary-background border border-card/40',
		accent: 'bg-white text-primary-background border border-cta/60',
		translucent: 'bg-primary-background/80 text-primary border border-white/40 backdrop-blur-xl'
	};

	const paddingClasses: Record<CardPadding, string> = {
		none: 'p-0',
		sm: 'p-4 sm:p-5',
		md: 'p-5 sm:p-6',
		lg: 'p-6 sm:p-8'
	};

	const elevationClasses: Record<CardElevation, string> = {
		none: 'shadow-none',
		sm: 'shadow-[var(--shadow-sm)]',
		md: 'shadow-[var(--shadow-md)]'
	};

	const radiusClasses: Record<CardRadius, string> = {
		sm: 'rounded-lg',
		md: 'rounded-xl',
		lg: 'rounded-2xl',
		xl: 'rounded-[28px]'
	};

	const alignClasses: Record<CardAlign, string> = {
		start: 'text-left',
		center: 'text-center',
		end: 'text-right'
	};
</script>

<svelte:element
	this={as}
	{...forwarded}
	class={`flex w-full flex-col gap-3 sm:gap-4 ${variantClasses[variant]} ${paddingClasses[padding]} ${elevationClasses[elevation]} ${radiusClasses[radius]} ${alignClasses[align]} ${
		interactive
			? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-md'
			: ''
	} ${classFromParent}`}
>
	{@render children?.()}
</svelte:element>
