<script lang="ts">
	import { Button, Card, Map, Section, Text, Title } from '$lib';
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';
	import DoctorProfileCard from '$lib/components/general/DoctorProfileCard.svelte';
	import CabinetGallery from '$lib/components/general/CabinetGallery.svelte';
	import { doctorProfile } from '$lib/doctor-profile';
	import { cabinet, cabinetAddress, cabinetMapUrl } from '$lib/cabinet';
	import { ArrowRight, Droplets, Eye, Gauge, MapPin, Phone, ScanEye } from '@lucide/svelte';
	import hero from '$lib/assets/images/home-hero-male.webp';

	const phone = cabinet.phones[0];
	const address = cabinetAddress;
	const directionsUrl = cabinetMapUrl;

	// These are links to information, not a claim that every listed treatment is offered at the cabinet.
	const medicalTopics = [
		{ title: 'Cataracte', href: '/maladie-oeil/cataracte', description: 'Comprendre la cataracte et les questions liées à sa prise en charge.', icon: Eye },
		{ title: 'Glaucome', href: '/maladie-oeil/glaucome', description: 'Lire les informations sur le glaucome et son suivi.', icon: Gauge },
		{ title: 'Rétine médicale', href: '/maladie-oeil/retine-medicale', description: 'Découvrir les maladies de la rétine et les examens associés.', icon: ScanEye },
		{ title: 'Sécheresse oculaire', href: '/maladie-oeil/blepharite-secheresse-surface-oculaire', description: 'Trouver les pages sur la surface de l’œil et la sécheresse.', icon: Droplets }
	];

	const adviceLinks = [
		{ title: 'Conseils thérapeutiques', href: '/conseils/conseils-therapeutiques' },
		{ title: 'Lunettes et lentilles', href: '/conseils/conseils-lunettes-et-lentilles' },
		{ title: 'Après des soins ou une chirurgie', href: '/conseils/conseils-apres-soins-et-chirurgie-oculaire' },
		{ title: 'Actualités du cabinet', href: '/actualites' }
	];

</script>

<Section spacing="comfortable" width="wide" class="overflow-hidden">
	<div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
		<div class="space-y-6">
			<Text variant="eyebrow" tone="cta">Cabinet d’ophtalmologie · Salé</Text>
			<Title level="h1" class="max-w-3xl text-pretty">
				Dr Amal Alouan, ophtalmologue à Salé
			</Title>
			<Text variant="body-lg" tone="muted" class="max-w-2xl text-pretty">
				À Salé, près de Rabat, retrouvez l’adresse du cabinet, les informations sur la santé des yeux
				et les moyens de nous contacter.
			</Text>
			<div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
				<Button href="/contactez-nous" size="lg" class="w-full sm:w-auto">Prendre rendez-vous</Button>
				<Button href={phone.href} variant="outline" size="lg" class="w-full sm:w-auto">
					<Phone class="size-5" aria-hidden="true" /> Appeler le cabinet
				</Button>
			</div>
			<p class="text-sm text-secondary">{address}</p>
		</div>
		<div class="overflow-hidden rounded-3xl bg-sections-background shadow-sm">
			<ResponsiveImage
				src={hero}
				imageKey="home-hero-male"
				alt="Patient portant une monture d’essai pendant un examen de la vue"
				sizes="(max-width: 1023px) 100vw, 45vw"
				loading="eager"
				fetchpriority="high"
				class="h-auto w-full object-cover"
			/>
		</div>
	</div>
</Section>

<Section variant="muted" spacing="comfortable" width="wide" aria-labelledby="medical-topics">
	<div class="mb-9 max-w-3xl space-y-3">
		<Text variant="eyebrow" tone="cta">Informations médicales</Text>
		<Title level="h2" id="medical-topics">Explorer les sujets de santé oculaire</Title>
		<Text tone="muted">Choisissez un sujet pour lire les informations et les conseils déjà disponibles sur le site.</Text>
	</div>
	<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
		{#each medicalTopics as topic (topic.href)}
			<Card variant="surface" padding="md" elevation="none" class="h-full">
				<span class="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-cta/10 text-cta">
					<topic.icon class="size-6" aria-hidden="true" />
				</span>
				<h3 class="text-xl font-semibold text-primary">{topic.title}</h3>
				<p class="flex-1 text-sm leading-relaxed text-secondary">{topic.description}</p>
				<a href={topic.href} class="inline-flex min-h-11 items-center gap-2 font-semibold text-cta underline-offset-4 hover:underline focus-visible:underline">
					Lire les informations <ArrowRight class="size-4" aria-hidden="true" />
				</a>
			</Card>
		{/each}
	</div>
</Section>

<Section spacing="comfortable" width="wide" aria-labelledby="doctor-title">
	<div class="grid gap-8 rounded-3xl border border-light-grey/60 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center">
		<div class="space-y-4">
			<Text variant="eyebrow" tone="cta">Le cabinet</Text>
			<Title level="h2" id="doctor-title">Rencontrer Dr Amal Alouan</Title>
			<Text tone="muted">{doctorProfile.name} est {doctorProfile.profession.toLowerCase()} à {doctorProfile.location}. Retrouvez sa présentation et les informations pratiques du cabinet.</Text>
			{#if doctorProfile.shortBio}
				<Text tone="muted">{doctorProfile.shortBio}</Text>
			{/if}
			<Button href="/a-propos" variant="outline" class="w-fit">Découvrir la présentation <ArrowRight class="size-4" aria-hidden="true" /></Button>
		</div>
		<DoctorProfileCard />
	</div>
</Section>

<Section variant="muted" spacing="comfortable" width="wide" aria-labelledby="visit-title">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
		<div class="space-y-5">
			<Text variant="eyebrow" tone="cta">Informations pratiques</Text>
			<Title level="h2" id="visit-title">Trouver le cabinet à Salé</Title>
			<div class="space-y-4 text-secondary">
				<p class="flex items-start gap-3"><MapPin class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /> <span>{address}</span></p>
				<p class="flex items-start gap-3"><Phone class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /> <a href={phone.href} class="underline underline-offset-4">{phone.label}</a></p>
			</div>
			<div class="flex flex-wrap gap-3">
				<Button href={directionsUrl} target="_blank" rel="noopener noreferrer" variant="outline">Itinéraire Google Maps</Button>
				<Button href="/contactez-nous" variant="ghost">Contact et rendez-vous</Button>
			</div>
			<a href="/adresser-patient" class="inline-flex min-h-11 items-center gap-2 font-semibold text-cta underline underline-offset-4">Informations pour adresser un patient <ArrowRight class="size-4" aria-hidden="true" /></a>
		</div>
		<Map title="Carte du Cabinet du Dr Amal Alouan à Salé" />
	</div>
</Section>

<CabinetGallery />

<Section variant="muted" spacing="comfortable" width="wide" aria-labelledby="advice-title">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
		<div class="space-y-4">
			<Text variant="eyebrow" tone="cta">Conseils aux patients</Text>
			<Title level="h2" id="advice-title">Lire les conseils pratiques</Title>
			<Text tone="muted">Des pages du site expliquent les gestes et les étapes à connaître avant ou après certains soins.</Text>
		</div>
		<ul class="grid gap-3">
			{#each adviceLinks as advice (advice.href)}
				<li><a href={advice.href} class="flex min-h-14 items-center justify-between gap-4 rounded-xl border border-light-grey/60 bg-white px-5 py-3 font-medium text-primary transition hover:border-cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"><span>{advice.title}</span><ArrowRight class="size-5 shrink-0 text-cta" aria-hidden="true" /></a></li>
			{/each}
		</ul>
	</div>
</Section>

<Section spacing="comfortable" width="wide" aria-labelledby="contact-title">
	<div class="rounded-3xl bg-primary p-7 text-primary-background sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
		<div class="mb-6 max-w-2xl space-y-3 lg:mb-0">
			<Title level="h2" id="contact-title" tone="contrast">Une question avant votre visite ?</Title>
			<p class="text-primary-background/90">Retrouvez les moyens de contacter le cabinet et de demander un rendez-vous.</p>
		</div>
		<Button href="/contactez-nous" size="lg" class="w-full shrink-0 sm:w-auto">Contacter le cabinet</Button>
	</div>
</Section>
