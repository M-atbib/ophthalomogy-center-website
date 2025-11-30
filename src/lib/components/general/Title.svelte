<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type TitleLevel = 'h1' | 'h2' | 'h3' | 'sub1' | 'sub2' | 'sub3';
	type TitleTone = 'default' | 'muted' | 'contrast' | 'cta' | 'accent';
	type TitleAlign = 'left' | 'center' | 'right';
	type TitleWeight = 'medium' | 'semibold' | 'bold' | 'black';
	type Tracking = 'tight' | 'normal' | 'wide';

	const defaultTagByLevel: Record<TitleLevel, keyof HTMLElementTagNameMap> = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		sub1: 'h3',
		sub2: 'h4',
		sub3: 'h5'
	};

	type TitleProps = HTMLAttributes<HTMLElement> & {
		level?: TitleLevel;
		tone?: TitleTone;
		align?: TitleAlign;
		weight?: TitleWeight;
		tracking?: Tracking;
		uppercase?: boolean;
		balance?: boolean;
		as?: keyof HTMLElementTagNameMap;
		class?: string;
		children?: Snippet;
	};

	let {
		level = 'h2',
		tone = 'default',
		align = 'left',
		weight = 'bold',
		tracking = 'tight',
		uppercase = false,
		balance = true,
		as,
		class: classFromParent = '',
		children,
		...forwarded
	}: TitleProps = $props();

	const levelClasses: Record<TitleLevel, string> = {
		h1: 'text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]',
		h2: 'text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl',
		h3: 'text-2xl leading-snug tracking-tight sm:text-3xl',
		sub1: 'text-2xl leading-snug sm:text-[26px]',
		sub2: 'text-xl leading-snug sm:text-2xl',
		sub3: 'text-lg leading-snug sm:text-xl'
	};

	const toneClasses: Record<TitleTone, string> = {
		default: 'text-primary',
		muted: 'text-secondary',
		contrast: 'text-primary-background',
		cta: 'text-cta',
		accent: 'text-accent-one'
	};

	const alignClasses: Record<TitleAlign, string> = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};

	const weightClasses: Record<TitleWeight, string> = {
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold',
		black: 'font-black'
	};

	const trackingClasses: Record<Tracking, string> = {
		tight: 'tracking-tight',
		normal: 'tracking-normal',
		wide: 'tracking-wide'
	};

	const Tag = as ?? defaultTagByLevel[level];
</script>

<svelte:element
	this={Tag}
	{...forwarded}
class={`m-0 mb-4 ${levelClasses[level]} ${toneClasses[tone]} ${alignClasses[align]} ${weightClasses[weight]} ${trackingClasses[tracking]} ${
		uppercase ? 'uppercase tracking-[0.18em]' : ''
	} ${balance ? 'text-balance' : ''} ${classFromParent}`}
>
	{@render children?.()}
</svelte:element>
