<script lang="ts">
	import { Button, Section, Text, Title } from '$lib';
	import { doctorProfile } from '$lib/doctor-profile';
	import { cabinet, cabinetAddress } from '$lib/cabinet';
	import DoctorJourney from '$lib/components/general/DoctorJourney.svelte';
	import Breadcrumb from '$lib/components/general/Breadcrumb.svelte';
	import CabinetGallery from '$lib/components/general/CabinetGallery.svelte';
	import AmalPhoto from '$lib/assets/images/amal.webp';
	import AmalPhotoSmall from '$lib/assets/images/amal-w480.webp';
	import { MapPin, Phone } from '@lucide/svelte';

	const phone = cabinet.phones[0];
</script>

<Section spacing="tight" width="default" variant="muted" class="about-hero">
	<Breadcrumb current="À propos" />
	<div class="hero-layout">
		<header class="hero-intro">
			<Text variant="eyebrow" tone="cta" weight="semibold" class="!text-cta-ink">Le parcours du médecin</Text>
			<Title level="h1" class="hero-title mt-5">
				{doctorProfile.name},<span class="block text-cta-ink"> une expertise dédiée à votre vision.</span>
			</Title>
			<p class="hero-lead">Ophtalmologue à Salé, elle associe la rigueur d’une formation hospitalière à une attention personnelle portée à chaque patient.</p>
			<p class="hero-support">Son parcours, construit à Rabat, Boujdour et Salé, nourrit une pratique qui va de la consultation générale aux examens spécialisés.</p>
		</header>
		<figure class="hero-photo">
			<img
				src={AmalPhoto}
				srcset={`${AmalPhotoSmall} 480w, ${AmalPhoto} 960w`}
				sizes="(min-width: 1024px) 42vw, (min-width: 768px) 70vw, 100vw"
				width="960"
				height="1280"
				alt="Dr Amal Alouan lors d'une activité ophtalmologique"
				loading="eager"
				fetchpriority="high"
				decoding="async"
			/>
		</figure>
		<dl class="hero-credentials">
			<div><dt>Rabat</dt><dd>Doctorat en médecine en 2008</dd></div>
			<div><dt>2015</dt><dd>Diplôme de spécialiste en ophtalmologie</dd></div>
			<div><dt>Depuis 2017</dt><dd>Cabinet privé à Hay Essalam, Salé</dd></div>
		</dl>
	</div>
</Section>

<DoctorJourney />

<CabinetGallery />

<Section variant="muted" spacing="comfortable" width="wide" aria-labelledby="visit-title">
	<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
		<div class="space-y-4">
			<Text variant="eyebrow" tone="cta">Venir au cabinet</Text>
			<Title level="h2" id="visit-title">Informations pratiques</Title>
			<p class="flex items-start gap-3 text-secondary"><MapPin class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /> <span>{cabinetAddress}</span></p>
			<p class="flex items-start gap-3 text-secondary"><Phone class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /> <a data-gtm="click_phone" href={phone.href} class="underline underline-offset-4">{phone.label}</a></p>
		</div>
		<div class="rounded-2xl border border-light-grey/60 bg-white p-6 sm:p-8">
			<h3 class="mb-3 text-xl font-semibold text-primary">Préparer votre visite</h3>
			<p class="mb-5 text-secondary">Consultez les moyens de contact et les informations d’accès avant de venir.</p>
			<Button href="/contactez-nous">Contacter le cabinet</Button>
		</div>
	</div>
</Section>

<style>
	.hero-layout {
		display: grid;
		grid-template-areas: 'intro' 'photo' 'credentials';
		gap: 1.75rem;
		align-items: center;
	}
	.hero-intro { grid-area: intro; }
	:global(.hero-title) { max-width: 20ch; font-size: clamp(2.3rem, 4.5vw, 3.8rem); line-height: 1.08; }
	:global(.hero-title span) { max-width: 14ch; margin-top: .18em; font-size: .8em; line-height: 1.15; }
	.hero-lead { max-width: 36rem; margin-top: 1.75rem; font-size: clamp(1.08rem, 1.8vw, 1.28rem); line-height: 1.6; color: #333; }
	.hero-support { max-width: 35rem; margin-top: .9rem; line-height: 1.7; color: #666; }
	.hero-photo { grid-area: photo; position: relative; margin: 0; width: 100%; max-width: 35rem; }
	.hero-photo::before { content: ''; position: absolute; inset: -1rem -1rem 1rem 1rem; border: 1px solid #9fc6c4; border-radius: 1.15rem; pointer-events: none; }
	.hero-photo img { position: relative; display: block; width: 100%; height: auto; aspect-ratio: 3 / 4; object-fit: cover; object-position: center; border-radius: 1rem; }
	.hero-credentials { grid-area: credentials; display: grid; gap: 1rem; max-width: 38rem; padding-top: 1.1rem; border-top: 1px solid #b8d4d0; }
	.hero-credentials > div { display: grid; grid-template-columns: 7.25rem 1fr; gap: .8rem; align-items: baseline; }
	.hero-credentials dt { color: #0f6978; font-size: .8rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
	.hero-credentials dd { margin: 0; color: #333; font-size: .93rem; line-height: 1.5; }
	@media (min-width: 1024px) {
		.hero-layout { grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr); grid-template-areas: 'intro photo' 'credentials photo'; column-gap: clamp(3rem, 5vw, 6rem); row-gap: 1.8rem; }
		.hero-photo { justify-self: end; }
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		.hero-photo { max-width: 31rem; margin-inline: auto; }
	}
	@media (max-width: 639px) {
		.hero-photo::before { inset: -.6rem -.5rem .6rem .5rem; }
		.hero-credentials > div { grid-template-columns: 6.5rem 1fr; }
	}
	@media (prefers-reduced-motion: no-preference) {
		.hero-intro { animation: hero-enter .7s ease-out both; }
		.hero-photo { animation: hero-enter .85s .12s ease-out both; }
		.hero-credentials { animation: hero-enter .7s .22s ease-out both; }
		@keyframes hero-enter { from { opacity: .75; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
	}
</style>
