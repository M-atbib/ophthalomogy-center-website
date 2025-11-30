<script lang="ts">
	import { Section, Text, Title } from '$lib';
	import Card from '$lib/components/general/Card.svelte';
	import type { EyeDisease } from '$lib/content';
	import { MoveRight } from '@lucide/svelte';

	export let disease: EyeDisease | undefined;
</script>

{#if disease}
	<Section spacing="comfortable" width="wide">
		<div class="flex flex-col gap-10 lg:flex-row lg:items-center">
			<div class="lg:w-5/12">
				<Title level="h1" class="mb-4">{disease.diseases}</Title>
				{#each disease.content as content}
					<Text variant="body-lg" tone="muted" class="text-pretty">
						{content}
					</Text>
				{/each}
			</div>
			<figure
				class="border-light-grey/60 bg-primary-background rounded-4xl mx-auto w-full overflow-hidden border shadow-sm lg:w-7/12"
			>
				<img
					src={disease.img}
					alt={`Illustration pour ${disease.diseases}`}
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</figure>
		</div>
	</Section>

	<Section spacing="tight" width="wide">
		<Title level="h3" class="mb-4">Maladies traitées</Title>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
			{#each disease.questions as question}
				<Card variant="accent" class="h-full" radius="md">
					<Text>{question.question}</Text>
					<a
						href={question.href}
						class="text-cta flex h-full items-end justify-end gap-2 font-semibold"
					>
						En savoir plus
						<MoveRight class="size-5" aria-hidden="true" />
					</a>
				</Card>
			{/each}
		</div>
	</Section>
{:else}
	<Section spacing="comfortable" width="wide">
		<Title level="h1" class="text-pretty">Maladie introuvable</Title>
		<Text variant="body-lg" tone="muted">La ressource demandée n'est pas disponible.</Text>
	</Section>
{/if}
