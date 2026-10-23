<script lang="ts">
	import { resolve } from '$app/paths';
	import { Instagram, Mail, MapPin, Phone } from '@lucide/svelte';
	import { cabinet, cabinetAddress, cabinetMapUrl } from '$lib/cabinet';

	import type { ArticleLanguage } from '$lib/types/blog';
	let { language = 'fr' }: { language?: ArticleLanguage } = $props();
	const ar = $derived(language === 'ar');

	const frenchLinks = [
		{ label: 'Accueil', href: '/' },
		{ label: 'À propos', href: '/a-propos' },
		{ label: 'Cataracte', href: '/maladie-oeil/cataracte' },
		{ label: 'Glaucome', href: '/maladie-oeil/glaucome' },
		{ label: 'Conseils', href: '/conseils' },
		{ label: 'Articles', href: '/articles' },
		{ label: 'Contact', href: '/contactez-nous' }
	];

	const arabicLabels: Record<string, string> = {
		Accueil: 'الرئيسية',
		'À propos': 'عن الطبيبة',
		'Santé des yeux': 'صحة العيون',
		Conseils: 'نصائح',
		Articles: 'المقالات',
		Contact: 'اتصل بنا',
		Cataracte: 'الساد',
		Glaucome: 'الزرق'
	};
	const links = $derived(
		frenchLinks.map((item) => ({
			...item,
			label: ar ? arabicLabels[item.label] : item.label,
			href: ar && item.href === '/articles' ? '/ar/articles' : item.href
		}))
	);

	const address = cabinetAddress;
	const directionsUrl = cabinetMapUrl;
</script>

<footer class="border-t border-light-grey/60 bg-sections-background py-12 text-primary">
	<div class="site-container grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
		<div class="space-y-5">
			<a
				href={resolve('/')}
				class="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
				aria-label={ar
					? 'الصفحة الرئيسية لعيادة الدكتورة أمل علوان'
					: 'Accueil du Cabinet du Dr Amal Alouan'}
			>
				<img
					src="/brand/logo-full.png"
					alt="Cabinet du Dr Amal Alouan"
					width="1200"
					height="400"
					class="h-auto w-full max-w-[260px] object-contain"
					loading="lazy"
				/>
			</a>
			<p class="max-w-sm text-sm leading-relaxed text-secondary">
				{ar
					? 'معلومات عيادة الدكتورة أمل علوان بسلا.'
					: 'Informations du Cabinet du Dr Amal Alouan à Salé.'}
			</p>
			<a
				href="https://www.instagram.com/dramalalouan/"
				target="_blank"
				rel="external noopener noreferrer"
				aria-label={ar ? 'إنستغرام العيادة (نافذة جديدة)' : 'Instagram du cabinet (nouvel onglet)'}
				class="inline-flex size-11 items-center justify-center rounded-full border border-cta text-cta hover:bg-cta hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
				><Instagram class="size-5" aria-hidden="true" /></a
			>
		</div>

		<div>
			<h2 class="mb-2 text-xl font-semibold">{ar ? 'صفحات مفيدة' : 'Pages utiles'}</h2>
			<ul class="grid gap-x-4 sm:grid-cols-2 md:grid-cols-1">
				{#each links as link (link.href)}
					<li>
						<a
							href={resolve(...([link.href] as Parameters<typeof resolve>))}
							class="flex min-h-8 items-center text-secondary underline-offset-4 hover:text-cta hover:underline focus-visible:underline"
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h2 class="mb-5 text-xl font-semibold">
				{ar ? 'التواصل مع العيادة' : 'Contacter le cabinet'}
			</h2>
			<ul class="space-y-4 text-secondary">
				<li class="flex items-start gap-3">
					<Phone class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" />
					<div>
						{#each cabinet.phones as phone (phone.href)}<a
								dir="ltr"
								href={`tel:${phone.international}`}
								class="block underline underline-offset-4">{phone.label}</a
							>{/each}
					</div>
				</li>
				<li class="flex items-start gap-3">
					<Mail class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /><a
						href={`mailto:${cabinet.email}`}
						class="break-all underline underline-offset-4">{cabinet.email}</a
					>
				</li>
				<li class="flex items-start gap-3">
					<MapPin class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /><a
						href={directionsUrl}
						target="_blank"
						rel="external noopener noreferrer"
						class="underline underline-offset-4"
						><span lang="fr" dir="ltr">{address}</span><span class="sr-only">
							{ar
								? '(يفتح خرائط Google في نافذة جديدة)'
								: '(ouvre Google Maps dans un nouvel onglet)'}</span
						></a
					>
				</li>
			</ul>
		</div>
	</div>
	<div class="site-container mt-10 text-sm text-secondary">
		<p class="border-t border-light-grey/70 pt-5">
			© {new Date().getFullYear()}
			{ar ? 'عيادة الدكتورة أمل علوان' : 'Cabinet du Dr Amal Alouan'}
		</p>
	</div>
</footer>
