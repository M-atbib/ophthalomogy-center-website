<script lang="ts">
	import { Button, Section, Text, Title } from '$lib';
	import { ArrowUpRight } from '@lucide/svelte';

	type Milestone = { date: string; title: string; description: string; current?: boolean };
	type Specialty = { title: string; description: string; href?: string };

	const milestones: Milestone[] = [
		{
			date: '2008',
			title: 'Doctorat en médecine à Rabat',
			description:
				'Après des études à la Faculté de médecine et de pharmacie de Rabat de 2000 à 2007, elle obtient son doctorat en médecine en 2008.'
		},
		{
			date: '2009–2015',
			title: 'Formation spécialisée en ophtalmologie',
			description:
				'Résidanat à l’Hôpital des spécialités de Rabat de 2009 à 2014, puis obtention du diplôme de spécialiste en ophtalmologie en 2015.'
		},
		{
			date: '2015–2017',
			title: 'Pratique hospitalière à Boujdour',
			description: 'Elle exerce comme ophtalmologue à l’Hôpital provincial de Boujdour.'
		},
		{
			date: '2016',
			title: 'Expérience en clinique à Salé',
			description: 'Elle exerce à la Clinique ophtalmologique Cheikh Maouelainin.'
		},
		{
			date: 'Depuis 2017',
			title: 'Cabinet privé à Salé',
			description:
				'À Hay Essalam, elle accueille ses patients pour des consultations et une prise en charge ophtalmologique.',
			current: true
		}
	];

	const specialties: Specialty[] = [
		{
			title: 'Ophtalmologie générale',
			description: 'Consultations et évaluation de la santé visuelle.'
		},
		{
			title: 'Ophtalmologie pédiatrique',
			description: 'Évaluation des troubles visuels et des problèmes oculaires chez l’enfant.',
			href: '/maladie-oeil/ophtalmo-pediatrie'
		},
		{
			title: 'Chirurgie de la cataracte',
			description: 'Compétences en phacoémulsification et dans les techniques du segment antérieur.',
			href: '/maladie-oeil/cataracte'
		},
		{
			title: 'Chirurgie réfractive',
			description: 'Compétences dans la correction chirurgicale de certains défauts visuels.',
			href: '/maladie-oeil/chirurgie-refractive'
		},
		{
			title: 'Lentilles de contact',
			description: 'Connaissances relatives à l’adaptation et au suivi des lentilles.',
			href: '/maladie-oeil/lentilles-contactologie'
		},
		{
			title: 'Examens spécialisés',
			description: 'Compétences en imagerie OCT, angiographie rétinienne et lasers ophtalmologiques.'
		}
	];

	const researchTopics = ['Pathologies rétiniennes', 'Inflammations oculaires et uvéites', 'Affections ophtalmologiques rares'];
</script>

<Section spacing="relaxed" width="default" aria-labelledby="training-title" class="journey-section">
	<div class="journey-layout">
		<header class="journey-heading">
			<Text variant="eyebrow" tone="cta" weight="semibold" class="!text-cta-ink">Formation &amp; expérience</Text>
			<Title level="h2" id="training-title" class="mt-5">Un parcours forgé par la pratique</Title>
			<p>De Rabat à Boujdour et Salé, sa formation et ses expériences cliniques se complètent depuis plus d’une décennie.</p>
			<span class="journey-heading-rule" aria-hidden="true"></span>
		</header>
		<ol class="timeline" aria-label="Étapes du parcours professionnel">
			{#each milestones as milestone, index (milestone.date)}
				<li class:current={milestone.current} class="milestone">
					<span class="milestone-marker" aria-hidden="true"></span>
					<div class="milestone-inner">
						<p class="milestone-date">{milestone.date}</p>
						<div class="milestone-copy">
							<span class="milestone-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
							<h3>{milestone.title}</h3>
							<p>{milestone.description}</p>
							{#if milestone.current}<span class="current-label">Activité actuelle</span>{/if}
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</Section>

<Section variant="muted" spacing="relaxed" width="default" aria-labelledby="expertise-title" class="expertise-section">
	<div class="expertise-layout">
		<header class="expertise-heading">
			<Text variant="eyebrow" tone="cta" weight="semibold" class="!text-cta-ink">Expertise médicale</Text>
			<Title level="h2" id="expertise-title" class="mt-5">Une pratique attentive aux différents besoins visuels</Title>
			<p>Son expérience hospitalière et sa pratique en cabinet lui permettent d’aborder des besoins variés, de la consultation générale aux examens spécialisés.</p>
		</header>
		<ol class="specialty-list" aria-label="Domaines de compétence">
			{#each specialties as specialty, index (specialty.title)}
				<li class="specialty-row">
					<span class="specialty-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
					<div>
						<h3>
							{#if specialty.href}
								<a href={specialty.href}>{specialty.title}<ArrowUpRight class="link-arrow" aria-hidden="true" /></a>
							{:else}
								{specialty.title}
							{/if}
						</h3>
						<p>{specialty.description}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
	<p class="scope-note">Ces domaines décrivent ses compétences. Les actes et équipements disponibles au cabinet sont à confirmer lors de la prise de contact.</p>

	<div class="research-panel" aria-labelledby="research-title">
		<div class="research-main">
			<div class="research-copy">
				<p class="research-eyebrow">Engagement scientifique</p>
				<h3 id="research-title">La recherche prolonge l’expérience clinique</h3>
				<p>Elle a contribué à plusieurs publications sur les maladies de la rétine, les inflammations de l’œil et des affections rares. Ses travaux figurent notamment dans le <em>Pan African Medical Journal</em>, le <em>Journal Français d’Ophtalmologie</em> et <em>QJM</em>.</p>
				<div class="publication-links">
					<a href="https://pubmed.ncbi.nlm.nih.gov/26185546/">Uvéite antérieure révélatrice d’une sarcoïdose <ArrowUpRight class="link-arrow" aria-hidden="true" /></a>
					<a href="https://pubmed.ncbi.nlm.nih.gov/25913440/">Toxoplasmose oculaire acquise <ArrowUpRight class="link-arrow" aria-hidden="true" /></a>
				</div>
			</div>
			<div class="research-themes">
				<p>Thèmes de recherche</p>
				<ul>
					{#each researchTopics as topic (topic)}<li>{topic}</li>{/each}
				</ul>
			</div>
		</div>
		<div class="research-contact">
			<p>Votre santé visuelle mérite une attention adaptée. Le cabinet vous accueille à Salé.</p>
			<div>
				<Button data-gtm="click_appointment" href="https://docs.google.com/forms/d/e/1FAIpQLSdAIASA4P_Y4BXSHUcBpThsUTXYiBT6ApY8iJzV-FdCl_USIw/viewform" target="_blank" rel="noreferrer" class="!bg-white !text-cta-ink hover:!bg-sections-background">Prendre rendez-vous</Button>
				<a href="/contactez-nous" class="contact-link">Contacter le cabinet <ArrowUpRight class="link-arrow" aria-hidden="true" /></a>
			</div>
		</div>
	</div>
</Section>

<style>
	.journey-layout { display: grid; gap: 3rem; }
	.journey-heading { max-width: 34rem; }
	.journey-heading p, .expertise-heading p { max-width: 34rem; margin-top: 1rem; color: #666; font-size: 1.07rem; line-height: 1.7; }
	.journey-heading-rule { display: block; width: 4rem; height: 2px; margin-top: 2rem; background: #168595; }
	.timeline { position: relative; margin: 0; padding: 0; list-style: none; }
	.timeline::before, .timeline::after { content: ''; position: absolute; top: 0; bottom: 0; left: 6px; width: 2px; transform-origin: top; }
	.timeline::before { background: #d4e9e6; }
	.timeline::after { background: #168595; }
	.milestone { position: relative; padding-left: 2.6rem; }
	.milestone-marker { position: absolute; z-index: 1; top: 1.7rem; left: 0; width: 14px; height: 14px; border: 2px solid #168595; border-radius: 50%; background: #fff; transition: background-color .3s ease, box-shadow .3s ease; }
	.milestone:hover .milestone-marker, .milestone.current .milestone-marker { background: #168595; box-shadow: 0 0 0 5px #e6f2ef; }
	.milestone-inner { display: grid; gap: .7rem; padding: 1.45rem 0 1.6rem; border-bottom: 1px solid #dedede; }
	.milestone:last-child .milestone-inner { border-bottom: 0; }
	.milestone-date { margin: 0; color: #0f6978; font-size: .85rem; font-weight: 750; letter-spacing: .06em; text-transform: uppercase; }
	.milestone-copy { position: relative; }
	.milestone-index { display: none; }
	.milestone-copy h3 { margin: 0; color: #333; font-size: clamp(1.15rem, 1.7vw, 1.4rem); font-weight: 650; line-height: 1.35; }
	.milestone-copy p { max-width: 38rem; margin: .55rem 0 0; color: #666; line-height: 1.65; }
	.milestone.current .milestone-inner { margin: .45rem 0 0 -.9rem; padding: 1.25rem 1rem 1.35rem; border: 0; border-radius: .75rem; background: #e6f2ef; }
	.current-label { display: inline-block; margin-top: .8rem; color: #0f6978; font-size: .75rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
	.expertise-layout { display: grid; gap: 2.5rem; }
	.expertise-heading { max-width: 33rem; }
	.specialty-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 2.4rem; margin: 0; padding: 0; list-style: none; }
	.specialty-row { display: grid; grid-template-columns: 2rem minmax(0,1fr); gap: .9rem; padding: 1.35rem .4rem 1.35rem 0; border-top: 1px solid #bdd5d2; transition: background-color .25s ease, padding-left .25s ease; }
	.specialty-row:hover { padding-left: .35rem; background: #ffffff70; }
	.specialty-number { padding-top: .13rem; color: #0f6978; font-size: .75rem; font-weight: 700; }
	.specialty-row h3 { margin: 0; color: #333; font-size: 1.08rem; font-weight: 650; line-height: 1.4; }
	.specialty-row h3 a { color: inherit; text-decoration: none; text-underline-offset: .2em; }
	.specialty-row h3 a:hover { color: #0f6978; text-decoration: underline; }
	.specialty-row h3 a:focus-visible, .publication-links a:focus-visible, .contact-link:focus-visible { outline: 2px solid currentColor; outline-offset: 4px; border-radius: 2px; }
	:global(.link-arrow) { display: inline-block; width: .95rem; height: .95rem; margin-left: .2rem; vertical-align: -.1rem; }
	.specialty-row p { margin: .4rem 0 0; color: #666; font-size: .94rem; line-height: 1.55; }
	.scope-note { max-width: 54rem; margin: 2rem 0 0; color: #666; font-size: .85rem; line-height: 1.6; }
	.research-panel { margin-top: clamp(3rem, 6vw, 5rem); padding: clamp(1.6rem, 4vw, 3.2rem); border-radius: 1rem; background: #164953; color: #fff; }
	.research-main { display: grid; gap: 2.5rem; }
	.research-eyebrow { margin: 0 0 1rem; color: #bce4df; font-size: .75rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
	.research-copy h3 { max-width: 32rem; margin: 0; font-size: clamp(1.65rem, 2.7vw, 2.35rem); font-weight: 650; line-height: 1.2; }
	.research-copy > p:not(.research-eyebrow) { max-width: 37rem; margin: 1rem 0 0; color: #e1eeeb; line-height: 1.65; }
	.publication-links { display: flex; flex-wrap: wrap; gap: .55rem 1.5rem; margin-top: 1.2rem; }
	.publication-links a { color: #fff; font-size: .83rem; line-height: 1.5; text-decoration: underline; text-decoration-color: #a8d6d1; text-underline-offset: 4px; }
	.publication-links a:hover, .contact-link:hover { color: #cbe9e5; }
	.research-themes { align-self: center; border-top: 1px solid #ffffff55; }
	.research-themes > p { margin: 1.2rem 0 .6rem; color: #bce4df; font-size: .78rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
	.research-themes ul { margin: 0; padding: 0; list-style: none; }
	.research-themes li { padding: .8rem 0; border-bottom: 1px solid #ffffff35; font-size: 1.04rem; line-height: 1.45; }
	.research-contact { display: grid; gap: 1.2rem; align-items: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #ffffff55; }
	.research-contact p { max-width: 29rem; margin: 0; font-size: 1.03rem; line-height: 1.5; }
	.research-contact > div { display: flex; flex-wrap: wrap; gap: .7rem 1.3rem; align-items: center; }
	.contact-link { display: inline-flex; min-height: 44px; align-items: center; gap: .25rem; color: #fff; font-size: .92rem; font-weight: 650; text-decoration: underline; text-underline-offset: 4px; }
	@media (min-width: 768px) {
		.milestone-inner { grid-template-columns: 7.5rem minmax(0,1fr); gap: 1.1rem; }
		.research-main { grid-template-columns: minmax(0,1.25fr) minmax(0,.75fr); gap: 3rem; }
		.research-contact { grid-template-columns: minmax(0,1fr) auto; }
	}
	@media (min-width: 1024px) {
		.journey-layout, .expertise-layout { grid-template-columns: minmax(0,.42fr) minmax(0,.58fr); gap: clamp(3rem, 6vw, 6rem); }
		.journey-heading, .expertise-heading { position: sticky; top: 7rem; align-self: start; }
		.milestone-index { display: block; position: absolute; right: 0; top: -.1rem; color: #bbd5d2; font-size: 1.15rem; font-weight: 700; }
		.milestone-copy h3 { max-width: calc(100% - 2rem); }
		.specialty-list { grid-template-columns: 1fr; }
	}
	@media (max-width: 639px) {
		.specialty-list { grid-template-columns: 1fr; }
		.research-panel { margin-inline: -.25rem; }
	}
	@media (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: view()) {
			.timeline::after { animation: line-progress linear both; animation-timeline: view(block); animation-range: entry 12% exit 65%; }
			.milestone-inner { animation: row-reveal linear both; animation-timeline: view(block); animation-range: entry 0% cover 24%; }
		}
		@keyframes line-progress { from { transform: scaleY(0); } to { transform: scaleY(1); } }
		@keyframes row-reveal { from { opacity: .78; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
	}
</style>
