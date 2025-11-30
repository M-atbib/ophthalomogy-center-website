<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
	type ButtonTone = 'primary' | 'secondary' | 'cta' | 'muted' | 'dark';
	type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
	type ButtonWeight = 'medium' | 'semibold' | 'bold';

	type ButtonProps = Partial<HTMLButtonAttributes> &
		Partial<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			tone?: ButtonTone;
			size?: ButtonSize;
			weight?: ButtonWeight;
			fullWidth?: boolean;
			loading?: boolean;
			children?: Snippet;
			class?: string;
		};

	let {
		variant = 'solid',
		tone = 'cta',
		size = 'md',
		weight = 'semibold',
		fullWidth = false,
		loading = false,
		href,
		rel,
		target,
		type = 'button',
		disabled = false,
		tabindex: tabIndex,
		class: classFromParent = '',
		children,
		...forwarded
	}: ButtonProps = $props();

	const sizeClasses: Record<ButtonSize, string> = {
		sm: 'h-10 px-4 text-sm sm:h-9',
		md: 'h-11 px-5 text-base sm:px-6',
		lg: 'h-12 px-6 text-base sm:px-8 sm:text-lg',
		xl: 'h-14 px-8 text-lg sm:px-10 sm:text-xl'
	};

	const weightClasses: Record<ButtonWeight, string> = {
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	};

	const solidToneClasses: Record<ButtonTone, string> = {
		primary: 'bg-primary text-primary-background hover:bg-primary/90 focus-visible:ring-primary/30',
		secondary:
			'bg-secondary text-primary-background hover:bg-secondary/90 focus-visible:ring-secondary/30',
		cta: 'bg-cta text-primary-background hover:bg-cta/90 focus-visible:ring-cta/40',
		muted: 'bg-light-grey text-primary hover:bg-light-grey/80 focus-visible:ring-light-grey/70',
		dark: 'bg-card text-primary-background hover:bg-card/90 focus-visible:ring-card/40'
	};

	const outlineToneClasses: Record<ButtonTone, string> = {
		primary: 'border border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary/30',
		secondary:
			'border border-secondary text-secondary hover:bg-secondary/10 focus-visible:ring-secondary/30',
		cta: 'border border-cta text-cta hover:bg-cta/10 focus-visible:ring-cta/30',
		muted:
			'border border-light-grey text-primary hover:bg-light-grey/30 focus-visible:ring-light-grey/60',
		dark: 'border border-card text-card hover:bg-card/10 focus-visible:ring-card/30'
	};

	const ghostToneClasses: Record<ButtonTone, string> = {
		primary: 'text-primary hover:bg-primary/10 focus-visible:ring-primary/30',
		secondary: 'text-secondary hover:bg-secondary/10 focus-visible:ring-secondary/30',
		cta: 'text-cta hover:bg-cta/10 focus-visible:ring-cta/30',
		muted: 'text-light-grey hover:bg-light-grey/20 focus-visible:ring-light-grey/40',
		dark: 'text-card hover:bg-card/10 focus-visible:ring-card/30'
	};

	const linkToneClasses: Record<ButtonTone, string> = {
		primary: 'text-primary hover:text-primary/80 focus-visible:ring-primary/30',
		secondary: 'text-secondary hover:text-secondary/80 focus-visible:ring-secondary/30',
		cta: 'text-cta hover:text-cta/80 focus-visible:ring-cta/30',
		muted: 'text-light-grey hover:text-light-grey/80 focus-visible:ring-light-grey/40',
		dark: 'text-card hover:text-card/80 focus-visible:ring-card/30'
	};

	const variantClasses: Record<ButtonVariant, string> = {
		solid: solidToneClasses[tone],
		outline: outlineToneClasses[tone],
		ghost: ghostToneClasses[tone],
		link: linkToneClasses[tone]
	};

	const Tag = href ? 'a' : 'button';
	const isDisabled = disabled || loading;
</script>

<svelte:element
	this={Tag}
	{...forwarded}
	class={`inline-flex items-center justify-center gap-2 rounded-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses[size]} ${weightClasses[weight]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${loading ? 'pointer-events-none' : ''} ${classFromParent}`}
	{href}
	rel={Tag === 'a' ? rel : undefined}
	target={Tag === 'a' ? target : undefined}
	type={Tag === 'button' ? type : undefined}
	disabled={Tag === 'button' ? isDisabled : undefined}
	aria-disabled={Tag === 'a' ? isDisabled : undefined}
	aria-busy={loading || undefined}
	tabindex={tabIndex}
>
	{#if loading}
		<span
			class="inline-flex h-4 w-4 animate-spin rounded-md border-2 border-transparent border-t-current"
			aria-hidden="true"
		></span>
	{/if}
	{@render children?.()}
</svelte:element>
