<script lang="ts">
	import { Button, Section, Text, Title } from '$lib';
	import { doctorProfile } from '$lib/doctor-profile';
	import { cabinet, cabinetAddress } from '$lib/cabinet';
	import DoctorProfileCard from '$lib/components/general/DoctorProfileCard.svelte';
	import CabinetGallery from '$lib/components/general/CabinetGallery.svelte';
	import { ArrowRight, MapPin, Phone } from '@lucide/svelte';

	const phone = cabinet.phones[0];
</script>

<Section spacing="comfortable" width="wide">
	<nav aria-label="Fil d’Ariane" class="mb-8 text-sm text-secondary">
		<a href="/" class="underline underline-offset-4">Accueil</a>
		<span aria-hidden="true" class="mx-2">/</span>
		<span aria-current="page">À propos</span>
	</nav>
	<div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
		<div class="space-y-5">
			<Text variant="eyebrow" tone="cta">À propos du cabinet</Text>
			<Title level="h1">{doctorProfile.name}, {doctorProfile.profession.toLowerCase()} à {doctorProfile.location}</Title>
			<Text variant="body-lg" tone="muted">
				Retrouvez les coordonnées du Cabinet du Dr Amal Alouan et les informations utiles pour
				préparer votre visite.
			</Text>
			{#if doctorProfile.fullBio}
				<Text tone="muted">{doctorProfile.fullBio}</Text>
			{/if}
			<div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
				<Button href="/contactez-nous" size="lg">Prendre rendez-vous</Button>
				<Button href={phone.href} variant="outline" size="lg"><Phone class="size-5" aria-hidden="true" /> Appeler le cabinet</Button>
			</div>
		</div>
		<DoctorProfileCard showLink={false} />
	</div>
</Section>

{#if doctorProfile.approach}
	<Section variant="muted" spacing="comfortable" width="wide" aria-labelledby="approach-title">
		<Title level="h2" id="approach-title">Approche professionnelle</Title>
		<Text tone="muted" class="max-w-3xl">{doctorProfile.approach}</Text>
	</Section>
{/if}

{#if doctorProfile.timeline.length > 0}
	<Section spacing="comfortable" width="wide" aria-labelledby="timeline-title">
		<Title level="h2" id="timeline-title">Parcours professionnel</Title>
		<ol class="mt-8 space-y-7 border-l-2 border-cta/30 pl-6 sm:pl-8">
			{#each doctorProfile.timeline as event (`${event.date}-${event.title}`)}
				<li class="relative">
					<span class="absolute -left-[31px] top-2 size-3 rounded-full bg-cta sm:-left-[39px]" aria-hidden="true"></span>
					<p class="text-sm font-semibold text-cta">{event.date}</p>
					<h3 class="mt-1 text-xl font-semibold text-primary">{event.title}</h3>
					{#if event.institution}<p class="text-secondary">{event.institution}</p>{/if}
					{#if event.detail}<p class="mt-2 text-secondary">{event.detail}</p>{/if}
				</li>
			{/each}
		</ol>
	</Section>
{/if}

{#if doctorProfile.degrees.length > 0 || doctorProfile.training.length > 0}
	<Section variant="muted" spacing="comfortable" width="wide">
		<div class="grid gap-10 lg:grid-cols-2">
			{#if doctorProfile.degrees.length > 0}
				<div>
					<Title level="h2">Diplômes et qualifications</Title>
					<ul class="mt-6 space-y-5">
						{#each doctorProfile.degrees as degree (`${degree.title}-${degree.institution ?? ''}`)}
							<li class="rounded-xl bg-white p-5"><p class="font-semibold text-primary">{degree.title}</p>{#if degree.institution}<p class="text-secondary">{degree.institution}</p>{/if}{#if degree.date}<p class="text-sm text-secondary">{degree.date}</p>{/if}</li>
						{/each}
					</ul>
				</div>
			{/if}
			{#if doctorProfile.training.length > 0}
				<div>
					<Title level="h2">Formations complémentaires</Title>
					<ul class="mt-6 space-y-5">
						{#each doctorProfile.training as item (`${item.title}-${item.institution ?? ''}`)}
							<li class="rounded-xl bg-white p-5"><p class="font-semibold text-primary">{item.title}</p>{#if item.institution}<p class="text-secondary">{item.institution}</p>{/if}{#if item.date}<p class="text-sm text-secondary">{item.date}</p>{/if}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</Section>
{/if}

{#if doctorProfile.activities.length > 0}
	<Section spacing="comfortable" width="wide" aria-labelledby="activities-title">
		<Title level="h2" id="activities-title">Activités médicales confirmées</Title>
		<ul class="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{#each doctorProfile.activities as activity (activity.href)}
				<li><a href={activity.href} class="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-light-grey/60 px-5 py-3 font-medium text-primary hover:border-cta"><span>{activity.label}</span><ArrowRight class="size-4 shrink-0 text-cta" aria-hidden="true" /></a></li>
			{/each}
		</ul>
	</Section>
{/if}

<CabinetGallery />

<Section variant="muted" spacing="comfortable" width="wide" aria-labelledby="visit-title">
	<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
		<div class="space-y-4">
			<Text variant="eyebrow" tone="cta">Venir au cabinet</Text>
			<Title level="h2" id="visit-title">Informations pratiques</Title>
			<p class="flex items-start gap-3 text-secondary"><MapPin class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /> <span>{cabinetAddress}</span></p>
			<p class="flex items-start gap-3 text-secondary"><Phone class="mt-1 size-5 shrink-0 text-cta" aria-hidden="true" /> <a href={phone.href} class="underline underline-offset-4">{phone.label}</a></p>
		</div>
		<div class="rounded-2xl border border-light-grey/60 bg-white p-6 sm:p-8">
			<h3 class="mb-3 text-xl font-semibold text-primary">Préparer votre visite</h3>
			<p class="mb-5 text-secondary">Consultez les moyens de contact et les informations d’accès avant de venir.</p>
			<Button href="/contactez-nous">Contacter le cabinet</Button>
		</div>
	</div>
</Section>
