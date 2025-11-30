import {
	Accessibility,
	Check,
	FolderLock,
	Mail,
	MapPin,
	Microscope,
	Phone,
	Siren,
	Stethoscope
} from '@lucide/svelte';
import {
	BlephariteHero,
	CataracteHero,
	ChirurgieRefactive,
	CorneeHero,
	EquipementEight,
	EquipementEighteen,
	EquipementEleven,
	EquipementFifteen,
	EquipementFive,
	EquipementFour,
	EquipementFourteen,
	EquipementNine,
	EquipementNineteen,
	EquipementOne,
	EquipementSeven,
	EquipementSeventeen,
	EquipementSix,
	EquipementSixteen,
	EquipementTen,
	EquipementThirteen,
	EquipementThree,
	EquipementTweleve,
	EquipementTwo,
	EsthetiqueEye,
	ExplorationsHero,
	GlaucomeHero,
	InfectionHero,
	KératocôneHero,
	LentillesHero,
	LunetteHero,
	PaupieresHero,
	PediatrieHero,
	RetineChirurgicale,
	RetineMedical,
	StrabologieHero
} from './assets';

export const listEyeDiseases = [
	{
		img: CataracteHero,
		diseases: 'Cataracte',
		href: '/maladie-oeil/cataracte',
		content: [
			"La cataracte est une maladie de l'oeil liée au vieillissement du cristallin. Elle est responsable d’une baisse de la vision. Cette maladie, de survenue souvent progressive, est la cause la plus fréquente de cécité dans le monde",
			'Son traitement consiste en une intervention chirurgicale, par phacoémulsification, avec mise en place d’un implant intra-oculaire.  L’intervention est indolore et réalisée sous anesthésie locale. La récupération visuelle est rapide en quelques jours.',
			'Nos ophtalmologues sont là pour vous prendre en charge de manière sécurisée et personnalisée.'
		],
		questions: [
			{
				question: "Cataracte : qu'est-ce que c'est ?",
				href: '/maladie-oeil/cataracte/cataracte_qu_est_ce_que_c_est'
			},
			{
				question: 'Comment se traite la cataracte ?',
				href: '/maladie-oeil/cataracte/comment_se_traite_la_cataracte'
			},
			{
				question: 'Les différents implants',
				href: '/maladie-oeil/cataracte/les_differents_implants'
			},
			{
				question: "Quel est le parcours d'un patient opéré de la cataracte ?",
				href: '/maladie-oeil/cataracte/quel_est_le_parcours_d_un_patient_opere_de_la_cataracte'
			},
			{
				question: 'Quels sont les risques de la chirurgie de la cataracte ?',
				href: '/maladie-oeil/cataracte/quels_sont_les_risques_de_la_chirurgie_de_la_cataracte'
			},
			{
				question: 'Quelles sont les règles à suivre après une chirurgie de cataracte ? ',
				href: '/maladie-oeil/cataracte/quelles_sont_les_regles_a_suivre_apres_une_chirurgie_de_cataracte'
			},
			{
				question: '“Cataracte secondaire“, opacification capsulaire postérieure et laser YAG',
				href: '/maladie-oeil/cataracte/cataracte_secondaire_opacification_capsulaire_posterieure_et_laser_yag'
			}
		]
	},
	{
		img: ChirurgieRefactive,
		diseases: 'Chirurgie réfractive',
		href: '/maladie-oeil/chirurgie-refractive',
		content: [
			'La chirurgie réfractive comprend l’ensemble des opérations, notamment au laser, permettant de ne plus porter de lunettes ou de lentilles.',
			'Tous les défauts visuels sont corrigeables (myopie, hypermétropie, astigmatisme et presbytie) et ce, de manière efficace et durable.',
			'Nos ophtalmologues mettent en oeuvre différentes techniques dont le LASIK, la PKR, le SMILE, ainsi que la chirurgie par implants. L’intervention est indolore ; elle est réalisée sous anesthésie locale. La récupération visuelle est rapide en quelques jours.'
		],
		questions: [
			{
				question: "Les bonnes raisons de bénéficier d'une chirurgie réfractive",
				href: '/maladie-oeil/chirurgie-refractive/les_bonnes_raisons_de_beneficier_d_une_chirurgie_refractive'
			},
			{
				question: 'Êtes-vous un bon candidat à une chirurgie réfractive ?',
				href: '/maladie-oeil/chirurgie-refractive/etes_vous_un_bon_candidat_a_une_chirurgie_refractive'
			},
			{
				question: 'Techniques opératoires : chirurgie laser',
				href: '/maladie-oeil/chirurgie-refractive/techniques_operatoires_chirurgie_laser'
			},
			{
				question: 'Techniques opératoires : chirurgie implantaire',
				href: '/maladie-oeil/chirurgie-refractive/techniques_operatoires_chirurgie_implantaire'
			},
			{
				question: 'En route vers une nouvelle vue sans lunettes !',
				href: '/maladie-oeil/chirurgie-refractive/en_route_vers_une_nouvelle_vue_sans_lunettes'
			},
			{
				question: 'Quelles sont les règles à respecter après une chirurgie réfractive laser ?',
				href: '/maladie-oeil/chirurgie-refractive/quelles_sont_les_regles_a_respecter_apres_une_chirurgie_refractive_laser'
			}
		]
	},
	{
		img: RetineMedical,
		diseases: 'Rétine médicale',
		href: '/maladie-oeil/retine-medicale',
		content: [
			'De nombreuses maladies rétiniennes peuvent altérer votre vision, comme la DMLA, la rétinopathie diabétique, l’œdème maculaire ou les occlusions veineuses.',
			'Longtemps inaccessibles à un traitement, des solutions thérapeutiques existent désormais. La prise en charge repose avant tout sur des dépistages réguliers, mais également sur des traitements ophtalmologiques spécifiques, tels que les injections intra-vitréennes ou le laser.'
		],
		questions: [
			{
				question: "Dégénérescence maculaire liée à l'âge (DMLA) : qu'est-ce que c'est ?",
				href: '/maladie-oeil/retine-medicale/degenerescence_maculaire_liee_a_l_age_dmla_qu_est_ce_que_c_est'
			},
			{
				question: 'Diabète et rétine',
				href: '/maladie-oeil/retine-medicale/diabete_et_retine'
			},
			{
				question: 'Occlusions vasculaires rétiniennes',
				href: '/maladie-oeil/retine-medicale/occlusions_vasculaires_retiniennes'
			},
			{
				question: 'Naevus, mélanome et autres tumeurs de la rétine',
				href: '/maladie-oeil/retine-medicale/naevus_melanome_et_autres_tumeurs_de_la_retine'
			},
			{
				question: 'Injections intra-vitréennes (IVT) : comment ça se passe?',
				href: '/maladie-oeil/retine-medicale/injections_intra_vitreennes_ivt_comment_ca_se_passe_page'
			},
			{
				question:
					"Quelles sont les recommandations après avoir bénéficié d'une injection intra-vitréenne ?",
				href: '/maladie-oeil/retine-medicale/quelles_sont_les_recommandations_apres_avoir_beneficie_d_une_injection_intra_vitree'
			},
			{
				question: "Angiographie rétinienne : qu'est-ce que c'est ?",
				href: '/maladie-oeil/retine-medicale/angiographie_retinienne_qu_est_ce_que_c_est'
			}
		]
	},
	{
		img: RetineChirurgicale,
		diseases: 'Rétine chirurgicale',
		href: '/maladie-oeil/retine-chirurgicale',
		content: [
			"Les actes opératoires concernant la partie postérieure de l'oeil sont assurés par des chirurgiens vitréo-rétiniens.",
			'Les maladies traitées et les interventions peuvent toucher le vitré (hémorragie intra-vitréenne, corps flottants...), la rétine périphérique (décollement de rétine, déchirures...) ou la macula (trou maculaire, membrane épi-rétinienne...). La plupart de ces maladies peuvent entraîner une baisse de vision sévère. Certaines nécessitent une prise en charge en urgence.',
			"Les interventions plus complexes (luxation d'implant ou de cristallin, traumatismes lourds, corps étranger intra-oculaire...) font l'objet d'un véritable savoir-faire de l'équipe des rétinologues du [Nom de Clinique]."
		],
		questions: [
			{
				question: 'Corps flottants',
				href: '/maladie-oeil/retine-chirurgicale/corps_flottants'
			},
			{
				question: 'Décollement du vitré',
				href: '/maladie-oeil/retine-chirurgicale/decollement_du_vitre'
			},
			{
				question: 'Déchirures de la rétine et lésions rhegmatogènes',
				href: '/maladie-oeil/retine-chirurgicale/dechirures_de_la_retine_et_lesions_rhegmatogenes'
			},
			{
				question: 'Décollement de rétine',
				href: '/maladie-oeil/retine-chirurgicale/decollement_de_retine'
			},
			{
				question: 'Membrane épi-rétinienne',
				href: '/maladie-oeil/retine-chirurgicale/membrane_epi_retinienne'
			},
			{
				question: 'Trou maculaire',
				href: '/maladie-oeil/retine-chirurgicale/trou_maculaire'
			},
			{
				question: 'Hémorragie du vitré',
				href: '/maladie-oeil/retine-chirurgicale/hemorragie_du_vitre'
			},
			{
				question: 'Hématome maculaire',
				href: '/maladie-oeil/retine-chirurgicale/hematome_maculaire'
			},
			{
				question: "Luxation postérieure du cristallin ou d'implant de cataracte",
				href: '/maladie-oeil/retine-chirurgicale/luxation_posterieure_du_cristallin_ou_d_implant_de_cataracte'
			},
			{
				question: 'Chirurgie de la rétine : comment ça se passe?',
				href: '/maladie-oeil/retine-chirurgicale/chirurgie_de_la_retine_comment_ca_se_passe'
			},
			{
				question: 'Conseils après chirurgie de rétine',
				href: '/maladie-oeil/retine-chirurgicale/conseils_apres_chirurgie_de_retine'
			}
		]
	},
	{
		img: PaupieresHero,
		diseases: 'Paupières et Voies Lacrymales',
		href: '/maladie-oeil/paupieres-et-voies-lacrymales',
		content: [
			"Les paupières assurent la protection de l'oeil. Pour diverses raisons (relâchement lié à l'âge, traumatisme, anomalie congénitale...) elles peuvent être mal positionnées et se retourner, entraînant un inconfort et un désagrément esthétique.",
			'Les larmes sont en partie sécrétées par la glande lacrymale principale et sont résorbées par les voies lacrymales. L’inadéquation entre la sécrétion, l’écoulement puis le drainage des larmes est responsable du larmoiement. Au décours du bilan médical, un traitement vous sera proposé, selon le dysfonctionnement détecté de votre système lacrymal. Des soins de paupières à la chirurgie (dacryocystorhinostomie), en passant par les sondes, de multiples solutions sont disponibles.'
		],
		questions: [
			{
				question: 'Paupières qui tombent : dermatochalasis et ptosis',
				href: '/maladie-oeil/paupieres-et-voies-lacrymales/paupieres_qui_tombent_dermatochalasis_et_ptosis'
			},
			{
				question: 'Paupières qui se retournent : ectropion et entropion',
				href: '/maladie-oeil/paupieres-et-voies-lacrymales/paupieres_qui_se_retournent_ectropion_et_entropion'
			},
			{
				question: 'Tumeurs des paupières',
				href: '/maladie-oeil/paupieres-et-voies-lacrymales/tumeurs_des_paupieres'
			},
			{
				question: "Pathologies des voies lacrymales de l'adulte",
				href: '/maladie-oeil/paupieres-et-voies-lacrymales/pathologies_des_voies_lacrymales_de_l_adulte'
			},
			{
				question: "Pathologies des voies lacrymales de l'enfant",
				href: '/maladie-oeil/paupieres-et-voies-lacrymales/pathologies_des_voies_lacrymales_de_l_enfant'
			},
			{
				question: 'Conseils après chirurgie de paupière',
				href: '/maladie-oeil/paupieres-et-voies-lacrymales/conseils_apres_chirurgie_de_paupiere'
			}
		]
	},
	{
		img: EsthetiqueEye,
		diseases: 'Chirurgie et médecine esthétique du regard',
		href: '/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard',
		content: [
			'Sous l’effet du temps, le vieillissement des tissus se traduit par un relâchement des paupières et une aggravation de vos rides',
			"Regard fatigué, rides marquées, poches sous les yeux, pommettes effacées...  Rien n'est inéluctable et des solutions préventives, médicales voire chirurgicales, existent.",
			'Un plan de traitement personnalisé (injections de Botox® / toxine botulique, d’acide hyaluronique, une lipostructure ou une blépharoplastie) saura rajeunir votre visage et renverra une image naturelle et éclatante.'
		],
		questions: [
			{
				question: 'Injections de toxine botulique (Botox®)',
				href: '/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/injections_de_toxine_botulique_botox'
			},
			{
				question: "Injections d'acide hyaluronique et comblement",
				href: '/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/injections_d_acide_hyaluronique_et_comblement'
			},
			{
				question: 'Chirurgie esthétique du regard',
				href: '/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/chirurgie_esthetique_du_regard'
			},
			{
				question:
					'Pourquoi choisir votre ophtalmologiste pour les soins esthétiques de votre visage ?',
				href: '/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/pourquoi_choisir_votre_ophtalmologiste_pour_les_soins_esthetiques_de_votre_visage'
			}
		]
	},
	{
		img: GlaucomeHero,
		diseases: 'Glaucome',
		href: '/maladie-oeil/glaucome',
		content: [
			'Le glaucome se caractérise souvent par une augmentation de la pression oculaire, qui altère le nerf optique et entraîne une diminution du champ visuel.',
			'Pathologie fréquente (4% de la population française) mais souvent silencieuse et asymptomatique, un dépistage est réalisé par votre ophtalmologiste. ',
			'Une fois le diagnostic posé, de nombreux traitements existent (collyres, laser ou chirurgie). Une prise en charge des facteurs de risque indirects sera également envisagée (apnée du sommeil, hypotension artérielle…). Une surveillance régulière est indispensable.'
		],
		questions: [
			{
				question: "Glaucome chronique : qu'est-ce que c'est ?",
				href: '/maladie-oeil/glaucome/glaucome_chronique_qu_est_ce_que_c_est'
			},
			{
				question: 'Glaucome aigu',
				href: '/maladie-oeil/glaucome/glaucome_aigu'
			},
			{
				question: 'Collyres anti-glaucomateux',
				href: '/maladie-oeil/glaucome/collyres_anti_glaucomateux'
			},
			{
				question: 'Laser et glaucome',
				href: '/maladie-oeil/glaucome/laser_et_glaucome'
			},
			{
				question: 'Chirurgie du glaucome',
				href: '/maladie-oeil/glaucome/chirurgie_du_glaucome'
			}
		]
	},

	{
		img: ExplorationsHero,
		diseases: 'Explorations et aptitudes',
		href: '/maladie-oeil/explorations-et-aptitudes',
		content: [
			"Il existe de nombreuses maladies rares en Ophtalmologie. Ces maladies peuvent toucher la macula ou la rétine et être responsables d'une baisse de vision progressive, souvent sévère.",
			"Parfois, l'oeil est intact, mais le nerf optique est touché : on parle alors de neuropathie optique. Elle peut être liée à une inflammation, une ischémie, une tumeur, une consommation excessive d'alcool...",
			"Il est important de réaliser les examens de dépistage et de suivi adéquats (dossier MDPH, aptitude à la conduite automobile...) afin de suivre l'évolution de ces maladies et de bénéficier des aides possibles."
		],
		questions: [
			{
				question: 'Handicap visuel',
				href: '/maladie-oeil/explorations-et-aptitudes/handicap_visuel'
			},
			{
				question: 'Neuropathies optiques',
				href: '/maladie-oeil/explorations-et-aptitudes/neuropathies_optiques'
			},
			{
				question: 'Rétinopathies héréditaires',
				href: '/maladie-oeil/explorations-et-aptitudes/retinopathies_hereditaires'
			},
			{
				question: 'Dossier MDPH',
				href: '/maladie-oeil/explorations-et-aptitudes/dossier_mdph'
			},
			{
				question: 'Conduite automobile et aptitude visuelle',
				href: '/maladie-oeil/explorations-et-aptitudes/conduite_automobile_et_aptitude_visuelle'
			},
			{
				question: 'Basse vision : nos conseils',
				href: '/maladie-oeil/explorations-et-aptitudes/basse_vision_nos_conseils'
			}
		]
	},
	{
		img: PediatrieHero,
		diseases: 'Ophtalmo-pédiatrie',
		href: '/maladie-oeil/ophtalmo-pediatrie',
		content: [
			'À la naissance, le système visuel est immature et son développement se poursuit durant les premières années de la vie. Tout obstacle à sa maturation (strabisme, hypermétropie, astigmatisme…) peut compromettre la bonne vision de l’enfant pour le reste de sa vie. ',
			'Un dépistage systématique par un ophtalmologiste est primordial, même si l’enfant ne se plaint de rien.',
			'Le traitement comprend le port de lunettes, ou encore la rééducation d’amblyopie avec un cache. '
		],
		questions: [
			{
				question: "Amblyopie : le syndrome de l'œil “paresseux“",
				href: '/maladie-oeil/ophtalmo-pediatrie/amblyopie_le_syndrome_de_l_oeil_paresseux'
			},
			{
				question: "Doit-on s'inquiéter devant un strabisme chez l'enfant ?",
				href: '/maladie-oeil/ophtalmo-pediatrie/doit_on_s_inquieter_devant_un_strabisme_chez_l_enfant'
			},
			{
				question: "Faut-il emmener son enfant chez l'ophtamologiste ?",
				href: '/maladie-oeil/ophtalmo-pediatrie/faut_il_emmener_son_enfant_chez_l_ophtamologiste'
			},
			{
				question: "Occlusion par application de caches sur l'oeil - Rééducation de l'amblyopie",
				href: '/maladie-oeil/ophtalmo-pediatrie/occlusion_par_application_de_caches_sur_l_oeil_reeducation_de_l_amblyopie'
			},
			{
				question: 'Cycloplégie : atropine et cyclopentolate',
				href: '/maladie-oeil/ophtalmo-pediatrie/cycloplegie_atropine_et_cyclopentolate'
			},
			{
				question: 'Comment bien choisir les lunettes de votre enfant ?',
				href: '/maladie-oeil/ophtalmo-pediatrie/comment_bien_choisir_les_lunettes_de_votre_enfant'
			}
		]
	},
	{
		img: StrabologieHero,
		diseases: 'Strabologie - chirurgie du strabisme',
		href: '/maladie-oeil/strabologie-chirurgie-du-strabisme',
		content: [
			'Le strabisme est un défaut de parallélisme du regard : les yeux “louchent“. Chez l’enfant, il est souvent le témoin d’une mauvaise vision.',
			"Certains signes doivent vous alerter et il est important de consulter rapidement afin qu'une solution médicale ou chirurgicale vous soit proposée."
		],
		questions: [
			{
				question: "Doit-on s'inquiéter devant un strabisme chez l'enfant ?",
				href: '/maladie-oeil/strabologie-chirurgie-du-strabisme/doit_on_s_inquieter_devant_un_strabisme_chez_l_enfant'
			},
			{
				question: 'Principes de la chirurgie du strabisme',
				href: '/maladie-oeil/strabologie-chirurgie-du-strabisme/principes_de_la_chirurgie_du_strabisme'
			},
			{
				question: 'Chirurgie du strabisme : comment ça se passe ?',
				href: '/maladie-oeil/strabologie-chirurgie-du-strabisme/chirurgie_du_strabisme_comment_ca_se_passe'
			}
		]
	},
	{
		img: KératocôneHero,
		diseases: 'Kératocône',
		href: '/maladie-oeil/keratocone',
		content: [
			'Le kératocône est une déformation de la cornée , qui peut survenir dès l’adolescence. D’évolution lente, il entraîne une baisse progressive de la vision, liée à un astigmatisme évolutif, une déformation de la perception des objets et une sensibilité accrue à la lumière ainsi qu’un éblouissement.',
			'Le traitement comprend le recours aux lentilles rigides, le crosslinking, les anneaux cornéens, voire la greffe de cornée. Un suivi régulier est évidemment indispensable.'
		],
		questions: [
			{
				question: "Qu'est-ce qu'un kératocône ?",
				href: '/maladie-oeil/keratocone/qu_est_ce_qu_un_keratocone'
			},
			{
				question: 'Comment se traite un kératocône ?',
				href: '/maladie-oeil/keratocone/comment_se_traite_un_keratocone'
			}
		]
	},
	{
		img: CorneeHero,
		diseases: 'Cornée et greffes',
		href: '/maladie-oeil/cornee-et-greffes',
		content: [
			"La cornée est un tissu transparent laissant pénétrer la lumière à l’intérieur de l’œil. C'est sa transparence qui permet la vision. Toute déformation, œdème ou opacité de la cornée est responsable d’une baisse de vue.",
			'De nombreux traitements sont disponibles pour traiter les pathologies cornéennes, dont la greffe, ou kératoplastie.'
		],
		questions: [
			{
				question: 'Cornéa guttata et dystrophie de Fuchs',
				href: '/maladie-oeil/cornee-et-greffes/cornea_guttata_et_dystrophie_de_fuchs'
			},
			{
				question: 'Différents types de greffes de cornée',
				href: '/maladie-oeil/cornee-et-greffes/differents_types_de_greffes_de_cornee'
			}
		]
	},
	{
		img: BlephariteHero,
		diseases: 'Blépharite, sécheresse, surface oculaire',
		href: '/maladie-oeil/blepharite-secheresse-surface-oculaire',
		content: [
			'La blépharite est une inflammation chronique du bord libre des paupières, responsable d’une sécheresse oculaire par hyperévaporation des larmes.',
			'Elle entraîne une sensation de grain de sable sous la paupière, de corps étranger, de brûlure oculaire ou un larmoiement, qui survient surtout dehors, en extérieur. Elle peut aussi se compliquer de chalazions.',
			"Le traitement repose sur les soins des paupières, réalisés régulièrement. Ils sont nécessaires à long terme et souvent associés à l'instillation de larmes artificielles."
		],
		questions: [
			{
				question: 'Blépharite',
				href: '/maladie-oeil/blepharite-secheresse-surface-oculaire/blepharite'
			},
			{
				question: 'Sécheresse oculaire',
				href: '/maladie-oeil/blepharite-secheresse-surface-oculaire/secheresse_oculaire'
			},
			{
				question: 'Chalazion, Orgelet',
				href: '/maladie-oeil/blepharite-secheresse-surface-oculaire/chalazion_orgelet'
			},
			{
				question: 'Ptérygion, pingecula',
				href: '/maladie-oeil/blepharite-secheresse-surface-oculaire/pterygion_pingecula'
			},
			{
				question: 'Comment réaliser les soins et massages des paupières ?',
				href: '/maladie-oeil/blepharite-secheresse-surface-oculaire/comment_realiser_les_soins_et_massages_des_paupieres'
			},
			{
				question: 'Que faire en cas de sécheresse oculaire ?',
				href: '/maladie-oeil/blepharite-secheresse-surface-oculaire/que_faire_en_cas_de_secheresse_oculaire'
			}
		]
	},
	{
		img: InfectionHero,
		diseases: 'Urgences et Infections',
		href: '/maladie-oeil/urgences-et-infections',
		content: [
			'Les urgences ophtalmologiques concernent de nombreuses maladies oculaires. Souvent bénignes et gênantes, mais parfois graves, voire cécitantes, il est important de ne pas les minimiser ou les méconnaître.',
			"En cas de douleur, de rougeur oculaire, de baisse de vue brutale, de vision double, ou si vous suspectez la présence d'un corps étranger oculaire, [Nom de Clinique] vous recevra dans les meilleurs délais et mettra tout en œuvre pour préserver votre bonne santé visuelle.",
			"Pour savoir comment rencontrer nos ophtalmologues en urgence, rendez-vous sur notre page dédiée aux modalités de consultations d'urgences ophtalmologiques."
		],
		questions: [
			{
				question: "Conjonctivite infectieuse : qu'est-ce que c'est ?",
				href: '/maladie-oeil/urgences-et-infections/conjonctivite_infectieuse_qu_est_ce_que_c_est'
			},
			{
				question: 'Conjonctivite allergique',
				href: '/maladie-oeil/urgences-et-infections/conjonctivite_allergique'
			},
			{
				question: 'Hémorragie sous-conjonctivale',
				href: '/maladie-oeil/urgences-et-infections/hemorragie_sous_conjonctivale'
			},
			{
				question: 'Hémorragies intra-oculaires',
				href: '/maladie-oeil/urgences-et-infections/hemorragies_intra_oculaires'
			},
			{
				question: 'Infections sous lentilles',
				href: '/maladie-oeil/urgences-et-infections/infections_sous_lentilles'
			},
			{
				question: 'Uvéite',
				href: '/maladie-oeil/urgences-et-infections/uveite'
			},
			{
				question: 'Chalazion, Orgelet',
				href: '/maladie-oeil/urgences-et-infections/chalazion_orgelet'
			},
			{
				question: 'Corps étrangers oculaires',
				href: '/maladie-oeil/urgences-et-infections/corps_etrangers_oculaires'
			},
			{
				question: 'Traumatismes oculaires',
				href: '/maladie-oeil/urgences-et-infections/traumatismes_oculaires'
			},
			{
				question: 'Herpès oculaire',
				href: '/maladie-oeil/urgences-et-infections/herpes_oculaire'
			},
			{
				question: 'Glaucome aigu',
				href: '/maladie-oeil/urgences-et-infections/glaucome_aigu'
			},
			{
				question: 'Baisse de vision : que faire ?',
				href: '/maladie-oeil/urgences-et-infections/baisse_de_vision_que_faire'
			},
			{
				question: 'Oeil rouge et douloureux : que faire ?',
				href: '/maladie-oeil/urgences-et-infections/oeil_rouge_et_douloureux_que_faire'
			},
			{
				question: 'Corps flottants, éclairs lumineux : que faire ?',
				href: '/maladie-oeil/urgences-et-infections/corps_flottants_eclairs_lumineux_que_faire'
			},
			{
				question: 'Que faire en cas de conjonctivite infectieuse et contagieuse ?',
				href: '/maladie-oeil/urgences-et-infections/que_faire_en_cas_de_conjonctivite_infectieuse_et_contagieuse'
			}
		]
	},
	{
		img: LentillesHero,
		diseases: 'Lentilles - Contactologie',
		href: '/maladie-oeil/lentilles-contactologie',
		content: [
			'Qu’elles soient rigides ou souples, les lentilles de contact sont une alternative au port de lunettes. La quasi totalité des défauts visuels (myopie, hypermétropie, astigmatisme et presbytie) sont corrigeables en lentilles.',
			'En l’absence de contre-indication (sécheresse oculaire) une adaptation est possible. Il sera indispensable de respecter les règles d’utilisation et d’hygiène lors de l’utilisation de vos lentilles.'
		],
		questions: [
			{
				question: 'Infections sous lentilles',
				href: '/maladie-oeil/lentilles-contactologie/infections_sous_lentilles'
			},
			{
				question: 'Orthokératologie',
				href: '/maladie-oeil/lentilles-contactologie/orthokeratologie'
			},
			{
				question: 'Les différents types de lentilles',
				href: '/maladie-oeil/lentilles-contactologie/les_differents_types_de_lentilles'
			},
			{
				question: 'Comment mettre et entretenir vos lentilles ?',
				href: '/maladie-oeil/lentilles-contactologie/comment_mettre_et_entretenir_vos_lentilles'
			}
		]
	},
	{
		img: LunetteHero,
		diseases: 'Lunettes',
		href: '/maladie-oeil/lunettes',
		content: [
			"Le choix et la prescription de la meilleure correction optique est la base du métier d'ophtalmologiste. Les lunettes permettent de corriger les défauts géométriques de l'oeil : myopie, hypermétropie et astigmatisme. Passé 40 ans, la vision de près baisse, c'est la presbytie.",
			"Votre médecin est le seul professionnel en mesure de dépister d'éventuelles maladies oculaires lors de cette prescription. ",
			'Nous mettons tout en oeuvre sur la plan pratique et technologique pour vous apporter le plus grand confort visuel.'
		],
		questions: [
			{
				question: 'Myopie, Hypermétropie, Astigmatisme',
				href: '/maladie-oeil/lunettes/myopie_hypermetropie_astigmatisme'
			},
			{
				question: "Presbytie : qu'est-ce que c'est ?",
				href: '/maladie-oeil/lunettes/presbytie_qu_est_ce_que_c_est'
			},
			{
				question: "Emmétropie : l'oeil parfait",
				href: '/maladie-oeil/lunettes/emmetropie_l_oeil_parfait'
			},
			{
				question: 'Comment lire votre ordonnance de lunettes ?',
				href: '/maladie-oeil/lunettes/comment_lire_votre_ordonnance_de_lunettes'
			},
			{
				question: 'Comment bien choisir vos lunettes ?',
				href: '/maladie-oeil/lunettes/comment_bien_choisir_vos_lunettes'
			},
			{
				question: 'Comment bien entretenir vos lunettes ?',
				href: '/maladie-oeil/lunettes/comment_bien_entretenir_vos_lunettes'
			}
		]
	}
];

export type EyeDisease = (typeof listEyeDiseases)[number];

export const getEyeDiseaseBySlug = (slug: string) =>
	listEyeDiseases.find((disease) => disease.href === `/maladie-oeil/${slug}`);

export const contactItems = [
	{
		icon: Phone,
		title: 'Appelez-nous',
		lines: ['05 37 810 828', '06 66 82 42 47']
	},
	{
		icon: Mail,
		title: 'Envoyez-nous un e-mail',
		lines: ['dr.amalalouan@gmail.com'],
		link: 'mailto:dr.amalalouan@gmail.com'
	},
	{
		icon: MapPin,
		title: 'Visitez-nous',
		lines: ['Imm.67,APPT 1 Lot Al Andalouss, Avenue Abderrahim Bouaabid, Hay Essalam Salé']
	}
];

export const ourEngagements = [
	{
		icon: Stethoscope,
		title: 'Des médecins sélectionnés et à votre écoute'
	},
	{
		icon: Accessibility,
		title: 'Des soins accessibles et à tout âge'
	},
	{
		icon: Siren,
		title: "Un accueil d'urgence"
	},
	{
		icon: Microscope,
		title: 'Du matériel récent, diversifié et performant'
	},
	{
		icon: Check,
		title: 'Une solution à chacun de vos problèmes'
	},
	{
		icon: FolderLock,
		title: 'Votre dossier médical sécurisé et confidentiel'
	}
];

export const equipement = {
	firstSection: {
		title: 'Équipements dédiés à la chirurgie',
		text: "Le [Nom de Clinique] est une équipe ophtalmologique orientée vers la chirurgie de l'oeil. Pour permettre les actes chirurgicaux les plus complexes, nous avon équipé nos blocs opératoires des dernières technologies.",
		subTitle: 'Phacoémulsificateur, vitréotome',
		subText:
			"La plupart des interventions ophtalmologiques sont des chirurgies dites 'endoculaires'. Elles nécessitent l'utilisation d'instruments de micro-chirurgie, dont la précision est extrême.",
		machineOne: 'Phacoémulsificateur',
		machineOneText: [
			"C'est l'appareil qui est utilisé pour la chirurgie de cataracte. Il permet d'aller délivrer, à l'intérieur du sac cristallinien, de l'énergie, sous la forme d'ultrasons, pour fragmenter les protéines du cristallin à aspirer. Par ailleurs, il injecte, en continu, de l'eau stérile à l'intérieur du globe oculaire, afin de maintenir sa forme et une pression suffisante tout au long de l'intervention.",
			'Service utilisant le plus cet équipement :',
			'Cataracte'
		],
		machineTwo: 'Vitréotome',
		machineTwoText: [
			"Cette machine est utilisée par les chirurgiens vitréo-rétiniens, par exemple pour la réalisation d'une vitrectomie ou d'une chirurgie de décollement de rétine. Comme le phacoémulsificateur, le vitréotome maintient le volume oculaire en y injectant de l'eau  stérile, à pression constante. Sa spécificité réside dans la découpe et l'aspiration du gel vitréen, dont la texture particulière nécessite une technologie de pointe.",
			'Service utilisant le plus cet équipement :',
			'Rétine chirurgicale'
		],
		sectionImage: EquipementOne
	},
	secondSection: {
		title: 'Équipements dédiés à la consultation',
		equipements: [
			{
				image: EquipementTwo,
				title: 'Réfractomètre automatique',
				text: "Cet appareil permet de mesurer les paramètres géométriques de votre oeil et de votre cornée. Il permet d'obtenir des données dites “objectives“ de réfraction, qui serviront de base à votre examen de vue (réfraction “subjective“). Il est souvent couplé à un tonomètre à air, qui permet de mesurer la pression à l’intérieur de votre œil. Les appareils les plus récents peuvent également mesurer l'épaisseur de la cornée (“pachymétrie“)."
			},
			{
				image: EquipementThree,
				title: 'Fronto-focomètre',
				text: 'Cet équipement permet de mesurer la puissance des lunettes que vous portez.'
			},
			{
				image: EquipementFour,
				title: 'Unité de réfraction',
				text: "Une fois les mesures effectuées, il est temps d’examiner votre vue. Pour cela, des verres correcteurs sont placés, via un réfracteur, devant vos yeux, par l'examinateur. La puissance des verres est modifiée selon un protocole précis, tout en vous présentant des lettres de taille différente (appelées “optotypes“). L'objectif est de définir vos besoins réfractifs, via différents tests (méthode du brouillard, cylinde de Jackson, test rouge-vert, équilibre bi-oculaire) et de mesurer votre acuité visuelle corrigée. C'est grâce à cela que l'ophtalmologiste pourra prescrire une correction adaptée."
			},
			{
				image: EquipementFive,
				title: 'Lampe à fente',
				text: "C’est l’appareil le plus utile de votre ophtalmologiste. C'est grâce à cette lampe que votre médecin pourra examiner votre oeil, aidé, parfois de verres d'examen grossissants, comme pour réaliser le fond d'oeil ou une gonioscopie. La lampe à fente projette un faisceau lumineux dont la taille, l'orientation et la couleur peuvent varier en fonction des investigations cliniques menées par votre médecin"
			},
			{
				image: EquipementSix,
				title: 'Verres d’examen',
				text: [
					"Ces verres sont indispensables à l'analyse de certaines parties de l'oeil, en lampe à fente. Ils peuvent aussi être utiles lors du traitement de la rétine au laser ou pour la réalisation d'une iridotomie périphérique, par exemple",
					'Il existe deux types de verre en Ophtalmologie:',
					'Les verres non contact, qui sont simplement interposés sur le trajet lumineux, entre la lampe à fente et votre oeil. Leur caractéristiques précises varient surtout en fonction du grossissement induit.',
					'Les verres contact, qui sont posés sur la surface oculaire après, bien sûr, instillation de collyres anesthésiants.'
				]
			},

			{
				image: EquipementSeven,
				title: 'Topographe cornéen',
				text: [
					"Le topographe permet de mesurer de manière très précise l’épaisseur et les courbures de la cornée. Il permet de dépister des maladies comme le kératocône et recherche d'éventuelles contre-indications à la réalisation d'une chirurgie réfractive.",
					'Services utilisant le plus cet équipement :',
					'Kératocône',
					'Lentilles - Contactologie',
					'Chirurgie réfractive'
				]
			},
			{
				image: EquipementEight,
				title: 'OCT - Tomographie à Cohérence Optique',
				text: [
					"Cet appareil, apparu en 2005 dans les cabinets d'Ophtalmologie, constitue une avancée technologique majeure dans l'exploration de nombreuses pathologies oculaires, au premier desquelles la DMLA, les complications rétiniennes du diabète ou encore le glaucome. L'OCT est un examen d'imagerie réalisé dans le cadre d'une consultation. Il permet d'obtenir des clichés en coupe et d'explorer la rétine comme si elle était vue au microscope, dans toute son épaisseur. Des innovations constantes repoussent son champ d'utilisation, aussi bien pour l'analyse géométrique des régions antérieures de l'oeil (cornée, angle irido-cornéen, iris...) que pour la surveillance post-opératoire de nombreux patients.",
					'Services utilisant le plus cet équipement :',
					'Rétine médicale',
					'Rétine chirurgicale',
					'Glaucome'
				]
			},
			{
				image: EquipementNine,
				title: "Angiographie rétinienne (fluorescéinique, vert d'indocyanine)",
				text: [
					"Il s'agit, là encore, d'un examen d'imagerie de la rétine et, donc du fond d'oeil. Pour diagnostiquer certains troubles de la vascularisation, la présence d'une pathologie inflammatoire ou des complications oculaires du diabète, il est parfois nécessaire d'injecter un produit colorant dans votre circulation sanguine, via une perfusion intra-veineuse. Ce colorant va circuler jusqu'aux vaisseaux sanguins rétiniens et être observé grâce à l'angiographe. On peut alors détecter un défaut de perfusion sanguine (ischémie rétininenne, occlusion artérielle ou veineuse...), la présence de vaisseaux anormaux (néo-vaisseaux, membrane néo-vasculaire...) ou d'une inflammation (vascularite, choroïdite, rétinite...) et instaurer le traitement le plus adapté.",
					'Service utilisant le plus cet équipement :',
					'Rétine médicale'
				]
			},
			{
				image: EquipementTen,
				title: 'Biométrie oculaire',
				text: [
					"Au cours d'une chirurgie de cataracte, le cristallin opacifié est remplacé par une lentille correctrice, placé à l'intérieur de votre oeil. La biométrie permet de calculer, avant l'intervention, la puissance optique de cette lentille. Ainsi, la lumière prendra la direction la plus précise jusqu'à votre rétine.",
					'Service utilisant le plus cet équipement :',
					'Cataracte'
				]
			},
			{
				image: EquipementEleven,
				title: 'Champ visuel - Périmétrie oculaire',
				text: [
					"La réalisation d’une périmétrie sert à évaluer votre champ de vision. Cet examen permet de diagnostiquer et de suivre l'évolution de pathologies comme le glaucome. Son utilisation permet également un bilan de certaines affection neurologiques, comme c'est le cas après certaines formes d'AVC ou de sclérose en plaques. ",
					'Service utilisant le plus cet équipement :',
					'Glaucome'
				]
			},
			{
				image: EquipementTweleve,
				title: 'Pachymètre',
				text: "Cet appareil permet de mesurer l’épaisseur de votre cornée, en son centre. Nous disposons de plusieurs technologies permettant cette mesure : pachymétrie optique, pachymétrie ultrasonore... La pachymétrie est intégrée aux autoréfractomètres les plus récents, ainsi qu'aux topographes cornéens."
			},
			{
				image: EquipementThirteen,
				title: 'Rétinographe',
				text: [
					"C’est un équipement qui réalise des photographies de votre rétine, au fond de l'oeil. C'est outil indispensable au diagnostic des maladies rétiniennes. La surveillance d'une rétinopathie diabétique est l'exemple typique de son utilisation quotidienne, puisque la réalisation de clichés réguliers permet de suivre, dans la durée, l'apparition de nouvelles lésions et l'évolution des troubles.",
					'Services utilisant le plus cet équipement :',
					'Rétine médicale',
					'Rétine  chirurgicale'
				]
			},
			{
				image: EquipementFourteen,
				title: 'Échographie oculaire',
				text: [
					"L’échographie a également sa place dans le domaine de l'Ophtalmologie. Ses usages sont nombreux:",
					"Lorsque la rétine n'est pas accessible à l'examen du fond d'oeil (en cas d'hémorragie intra-vitréenne ou de cataracte très dense), elle permet de s'assurer de l'absence de décollement de rétine.",
					'Elle permet de réaliser une biométrie oculaire, lorsque le biomètre “classique“ est pris à défaut.',
					"L'échographie est l'un des outils les plus performants pour le diagnostic des tumeurs oculaires",
					"L'UBM (échographie très haute fréquence) permet d'explorer les structures antérieures de l'oeil, comme l'iris, l'angle irido-cornéen et les corps ciliaires. C'est un outil particulièrement apprécié des glaucomatologues.",
					'Services utilisant le plus cet équipement :',
					'Cataracte',
					'Glaucome',
					'Rétine chirurgicale'
				]
			},
			{
				image: EquipementFifteen,
				title: 'Laser YAG',
				text: [
					"Le laser YAG permet de découper la capsule à l’arrière de votre implant lorsque cette dernière s’est opacifiée, à la suite d’une chirurgie de cataracte. Il est également utilisé pour réaliser une iridotomie périphérique (trou dans l'iris), essentiellement sur les yeux à risque de glaucome aigü ou présentant un angle irido-cornéen fermable. Son utilisation se fait dans le cadre d'une consultation dédiée, mais ne nécessite ni hospitalisation, ni passage au bloc opératoire. Les procédures sont très courtes et parfaitement indolores.",
					'Services utilisant le plus cet équipement :',
					'Cataracte',
					'Glaucome'
				]
			},
			{
				image: EquipementSixteen,
				title: "Laser photocoagulateur à l'Argon",
				text: [
					'Le laser photocoagulateur permet de « brûler », en un point précis, la structure oculaire visée, afin de la traiter. Il peut servir à rouvrir l’angle entre l’iris et la cornée en faisant un trou dans votre iris, il peut traiter les rétinopathies diabétiques sévères avant qu’elles ne se compliquent, il peut éviter qu’un décollement de rétine ne survienne en traitant une déchirure de la rétine…',
					'Services utilisant le plus cet équipement :',
					'Glaucome',
					'Rétine médicale',
					'Rétine chirurgicale'
				]
			},
			{
				image: EquipementSeventeen,
				title: 'Microscope spéculaire',
				text: [
					"Cet appareil mesure la densité de cellules endothéliales cornéennes et peut analyser leur forme. Cela permet, dans des cas précis, d'évaluer le risque, pour votre cornée, d’une chirurgie de cataracte.",
					'Services utilisant le plus cet équipement :',
					'Greffe de cornée',
					'Cataracte'
				]
			},
			{
				image: EquipementEighteen,
				title: 'Instruments de microchirurgie',
				text: 'L’équipe du [Nom de Clinique] dispose des meilleurs équipements pour réaliser vos interventions. Le matériel au bloc opératoire est très diversifié et adapté à chaque situation chirurgicale.'
			},
			{
				image: EquipementNineteen,
				title: 'Microscopes opératoires',
				text: "L'Ophtalmologie est une spécialité micro-chirurgicale ; c'est-à-dire que toutes les interventions sont réalisées sous microscope opératoire. Il s'agit de microscopes très puissants. Ils sont indispensables pour assurer à votre chirurgien une précision optimale dans ses gestes à l'intérieur de l'oeil."
			}
		]
	}
};
