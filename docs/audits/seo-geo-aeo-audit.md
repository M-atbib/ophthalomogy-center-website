# Audit SEO, GEO et AEO

**Site :** `https://dramalophtalmo.ma`  
**Dépôt :** `ophthalomogy-center-website`  
**Date de l'audit :** 17 octobre 2026 (UTC)  
**Branche Git :** `docs/seo-geo-aeo-audit`, basée sur `origin/main` au commit `27e8b9744c23690e85659a0dc1f4008895b0c731`  
**Périmètre :** lecture du code et requêtes publiques GET/HEAD. Aucun correctif, build, commit, push ou déploiement.

**Statuts :** **Confirmé** signifie que le code ou une réponse publique prouve le constat. **Risque potentiel** signifie qu'un problème est plausible, mais que son effet n'est pas mesuré. **Non vérifié** signifie que les données ou les accès manquent. Les priorités sont des jugements d'audit, pas des notes officielles : P0 bloque fortement l'exploration ou l'indexation ; P1 est important ; P2 est modéré ; P3 est secondaire.

## 1. Résumé exécutif

La base technique est bonne. SvelteKit envoie le contenu et les balises SEO dans le HTML initial. Le fichier `robots.txt` autorise l'exploration. Le sitemap XML contient 133 URL statiques uniques. Les 133 URL ont répondu HTTP 200 pendant l'audit. Chacune avait une seule URL canonique conforme au sitemap, une meta description, `index, follow` et un JSON-LD analysable. Les liens internes permettent d'atteindre les 133 pages statiques.

Les risques principaux sont le certificat TLS expiré du sous-domaine `www`, deux liens internes vers des 404, trois paires d'articles médicaux au texte identique et le texte `[Nom de Clinique]` visible sur 11 pages médicales. L'article du CMS testé utilise son slug pour le title et la description au lieu de son vrai titre ; il manque aussi au sitemap. Les images sont lourdes.

Le [rapport PageSpeed Insights fourni](https://pagespeed.web.dev/analysis/https-dramalophtalmo-ma/hmdqvisz2b?form_factor=desktop), daté du **16 octobre 2026 à 14:32 UTC**, donne une note de performance **75/100 sur ordinateur** et **64/100 sur mobile** pour l'accueil. Dans ce test de laboratoire unique, le LCP est de **17,9 s** sur ordinateur et **113,5 s** sur mobile ; le transfert total est d'environ **27 000 Kio**. Ces chiffres ne décrivent pas la vitesse habituelle des visiteurs. PageSpeed indique qu'il n'a pas assez de données réelles CrUX pour cette page. La note Lighthouse SEO est 100/100 dans ce test, mais elle ne couvre ni la qualité médicale, ni toutes les URL, ni l'indexation réelle.

Il n'y a **aucun problème P0 confirmé**. Le tableau central contient **13 problèmes confirmés** et **3 risques potentiels**. Les données de Search Console, Bing Webmaster Tools, trafic, positions et citations par les moteurs IA ne sont pas disponibles. L'audit ne prétend pas qu'une page est indexée, classée ou citée.

## 2. Architecture et inventaire des routes

### Fonctionnement du site

- `package.json` utilise Svelte 5, SvelteKit 2, Vite 7 et `@sveltejs/adapter-vercel`. `svelte.config.js` utilise cet adaptateur. Aucun `vercel.json` n'est présent.
- `src/routes/+layout.svelte` place un composant `Seo`, la navigation, le pied de page et Vercel Analytics autour des pages. `src/lib/seo.ts` construit les titles, descriptions, canonicals, breadcrumbs, JSON-LD et la liste du sitemap.
- Le dossier `src/routes` contient 134 fichiers `+page.svelte` : **133 routes statiques** et le template dynamique `/actualites/[slug]`. Aucun export `ssr`, `csr` ou `prerender` ne change le rendu par défaut. [SvelteKit rend les pages sur le serveur par défaut](https://svelte.dev/tutorial/kit/introducing-sveltekit), puis permet la navigation et l'hydratation dans le navigateur. Le HTML initial testé contient le contenu principal et les balises SEO, y compris pour l'article CMS. La révision exacte déployée sur Vercel n'était pas visible.
- Seules `/actualites` et `/actualites/[slug]` utilisent `+page.server.ts`. Ces loaders lisent les articles actifs et publiés dans Sanity. Le loader dynamique renvoie 404 si l'article manque ou n'est pas actif, et 500 si la lecture du CMS échoue. Aucune route privée ou de connexion n'a été trouvée. Aucun formulaire ni acte métier n'a été déclenché.
- `static/robots.txt` définit les règles d'exploration. `src/routes/sitemap.xml/+server.ts` sert le XML produit par `buildSitemapXml()` dans `src/lib/seo.ts`. La liste statique vient de `import.meta.glob('/src/routes/**/+page.svelte')`. Le code exclut `[slug]`.
- Le site a un seul ensemble d'URL en français. `src/app.html:2` utilise `lang="fr-MA"` ; `src/lib/seo.ts:29-36` utilise la même langue et la locale sociale `fr_MA`. Aucune arborescence localisée ni besoin de `hreflang` ne ressort du code.

### Types de pages publiques

Le nombre comprend la page d'accueil de chaque famille. Toutes les 133 pages statiques utilisent le composant SEO commun : une canonical sur elles-mêmes, `index, follow`, Open Graph, Twitter et un graphe JSON-LD avec `MedicalOrganization`, `WebSite`, `WebPage` et `BreadcrumbList`. Leur contenu a été vu dans le HTML initial. L'article dynamique reçoit aussi ce graphe générique.

| Famille de routes | Pages statiques | Template principal | Données propres |
|---|---:|---|---|
| `/` | 1 | `src/routes/+page.svelte` | Aucune |
| `/a-propos`, `/adresser-patient`, `/contactez-nous`, `/equipement`, `/urgences` | 5 | Un `+page.svelte` par route | Aucune |
| `/actualites` | 1 | Liste des articles `+page.svelte` | Sanity via `+page.server.ts` |
| `/actualites/[slug]` | Dynamique ; une URL publique trouvée | Article PortableText `+page.svelte` | Sanity via `+page.server.ts` |
| `/conseils` | 1 | Hub de conseils `+page.svelte` | Aucune |
| `/conseils/conseils-apres-soins-et-chirurgie-oculaire` | 4 | Page de famille et trois conseils | Aucune |
| `/conseils/conseils-lunettes-et-lentilles` | 6 | Page de famille et cinq conseils | Aucune |
| `/conseils/conseils-therapeutiques` | 4 | Page de famille et trois conseils | Aucune |
| `/maladie-oeil/blepharite-secheresse-surface-oculaire` | 7 | Hub `EyeDiseasePage` et articles | Aucune |
| `/maladie-oeil/cataracte` | 8 | Même modèle de hub et articles | Aucune |
| `/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard` | 5 | Même modèle | Aucune |
| `/maladie-oeil/chirurgie-refractive` | 7 | Même modèle | Aucune |
| `/maladie-oeil/cornee-et-greffes` | 3 | Même modèle | Aucune |
| `/maladie-oeil/explorations-et-aptitudes` | 6 | Même modèle | Aucune |
| `/maladie-oeil/glaucome` | 6 | Même modèle | Aucune |
| `/maladie-oeil/keratocone` | 3 | Même modèle | Aucune |
| `/maladie-oeil/lentilles-contactologie` | 5 | Même modèle | Aucune |
| `/maladie-oeil/lunettes` | 7 | Même modèle | Aucune |
| `/maladie-oeil/ophtalmo-pediatrie` | 7 | Même modèle | Aucune |
| `/maladie-oeil/paupieres-et-voies-lacrymales` | 7 | Même modèle | Aucune |
| `/maladie-oeil/retine-chirurgicale` | 12 | Même modèle | Aucune |
| `/maladie-oeil/retine-medicale` | 8 | Même modèle | Aucune |
| `/maladie-oeil/strabologie-chirurgie-du-strabisme` | 4 | Même modèle | Aucune |
| `/maladie-oeil/urgences-et-infections` | 16 | Même modèle | Aucune |

Les 16 hubs de maladies utilisent `src/lib/components/disease/EyeDiseasePage.svelte` et les données de `src/lib/content.ts`. De nombreux articles utilisent `DiseaseArticleLayout.svelte`, `ArticleImage.svelte` ou `OpeningImageSection.svelte` ; d'autres ont leur propre balisage. La liste complète ci-dessous vient du code. Elle ne signifie pas que tous les slugs possibles du CMS ont été testés.

### Liste complète des routes statiques

**Pages générales (7)**

- `/`
- `/a-propos`
- `/actualites`
- `/adresser-patient`
- `/contactez-nous`
- `/equipement`
- `/urgences`

**Conseils : /conseils (1)**

- `/conseils`

**Conseils : /conseils/conseils-apres-soins-et-chirurgie-oculaire (4)**

- `/conseils/conseils-apres-soins-et-chirurgie-oculaire`
- `/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_recommandations_après_avoir_rbénéficié_d_une_injection_intra-vitréenne`
- `/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_règles_à_respecter_après_une_chirurgie_réfractive_laser`
- `/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_règles_à_suivre_après_une_chirurgie_de_cataracte`

**Conseils : /conseils/conseils-lunettes-et-lentilles (6)**

- `/conseils/conseils-lunettes-et-lentilles`
- `/conseils/conseils-lunettes-et-lentilles/comment_bien_choisir_les_lunettes_de_votre_enfant`
- `/conseils/conseils-lunettes-et-lentilles/comment_bien_choisir_vos_lunettes`
- `/conseils/conseils-lunettes-et-lentilles/comment_bien_entretenir_vos_lunettes`
- `/conseils/conseils-lunettes-et-lentilles/comment_lire_votre_ordonnance_de_lunettes`
- `/conseils/conseils-lunettes-et-lentilles/comment_mettre_et_entretenir_vos_lentilles`

**Conseils : /conseils/conseils-therapeutiques (4)**

- `/conseils/conseils-therapeutiques`
- `/conseils/conseils-therapeutiques/comment-mettre-vos-collyres`
- `/conseils/conseils-therapeutiques/comment_réaliser_les_soins_et_massages_des_paupières`
- `/conseils/conseils-therapeutiques/que_faire_en_cas_de_sécheresse_oculaire`

**Maladies : /maladie-oeil/blepharite-secheresse-surface-oculaire (7)**

- `/maladie-oeil/blepharite-secheresse-surface-oculaire`
- `/maladie-oeil/blepharite-secheresse-surface-oculaire/blepharite`
- `/maladie-oeil/blepharite-secheresse-surface-oculaire/chalazion_orgelet`
- `/maladie-oeil/blepharite-secheresse-surface-oculaire/comment_realiser_les_soins_et_massages_des_paupieres`
- `/maladie-oeil/blepharite-secheresse-surface-oculaire/pterygion_pingecula`
- `/maladie-oeil/blepharite-secheresse-surface-oculaire/que_faire_en_cas_de_secheresse_oculaire`
- `/maladie-oeil/blepharite-secheresse-surface-oculaire/secheresse_oculaire`

**Maladies : /maladie-oeil/cataracte (8)**

- `/maladie-oeil/cataracte`
- `/maladie-oeil/cataracte/cataracte_qu_est_ce_que_c_est`
- `/maladie-oeil/cataracte/cataracte_secondaire_opacification_capsulaire_posterieure_et_laser_yag`
- `/maladie-oeil/cataracte/comment_se_traite_la_cataracte`
- `/maladie-oeil/cataracte/les_differents_implants`
- `/maladie-oeil/cataracte/quel_est_le_parcours_d_un_patient_opere_de_la_cataracte`
- `/maladie-oeil/cataracte/quelles_sont_les_regles_a_suivre_apres_une_chirurgie_de_cataracte`
- `/maladie-oeil/cataracte/quels_sont_les_risques_de_la_chirurgie_de_la_cataracte`

**Maladies : /maladie-oeil/chirurgie-et-medecine-esthetique-du-regard (5)**

- `/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard`
- `/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/chirurgie_esthetique_du_regard`
- `/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/injections_d_acide_hyaluronique_et_comblement`
- `/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/injections_de_toxine_botulique_botox`
- `/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard/pourquoi_choisir_votre_ophtalmologiste_pour_les_soins_esthetiques_de_votre_visage`

**Maladies : /maladie-oeil/chirurgie-refractive (7)**

- `/maladie-oeil/chirurgie-refractive`
- `/maladie-oeil/chirurgie-refractive/en_route_vers_une_nouvelle_vue_sans_lunettes`
- `/maladie-oeil/chirurgie-refractive/etes_vous_un_bon_candidat_a_une_chirurgie_refractive`
- `/maladie-oeil/chirurgie-refractive/les_bonnes_raisons_de_beneficier_d_une_chirurgie_refractive`
- `/maladie-oeil/chirurgie-refractive/quelles_sont_les_regles_a_respecter_apres_une_chirurgie_refractive_laser`
- `/maladie-oeil/chirurgie-refractive/techniques_operatoires_chirurgie_implantaire`
- `/maladie-oeil/chirurgie-refractive/techniques_operatoires_chirurgie_laser`

**Maladies : /maladie-oeil/cornee-et-greffes (3)**

- `/maladie-oeil/cornee-et-greffes`
- `/maladie-oeil/cornee-et-greffes/cornea_guttata_et_dystrophie_de_fuchs`
- `/maladie-oeil/cornee-et-greffes/differents_types_de_greffes_de_cornee`

**Maladies : /maladie-oeil/explorations-et-aptitudes (6)**

- `/maladie-oeil/explorations-et-aptitudes`
- `/maladie-oeil/explorations-et-aptitudes/basse_vision_nos_conseils`
- `/maladie-oeil/explorations-et-aptitudes/conduite_automobile_et_aptitude_visuelle`
- `/maladie-oeil/explorations-et-aptitudes/handicap_visuel`
- `/maladie-oeil/explorations-et-aptitudes/neuropathies_optiques`
- `/maladie-oeil/explorations-et-aptitudes/retinopathies_hereditaires`

**Maladies : /maladie-oeil/glaucome (6)**

- `/maladie-oeil/glaucome`
- `/maladie-oeil/glaucome/chirurgie_du_glaucome`
- `/maladie-oeil/glaucome/collyres_anti_glaucomateux`
- `/maladie-oeil/glaucome/glaucome_aigu`
- `/maladie-oeil/glaucome/glaucome_chronique_qu_est_ce_que_c_est`
- `/maladie-oeil/glaucome/laser_et_glaucome`

**Maladies : /maladie-oeil/keratocone (3)**

- `/maladie-oeil/keratocone`
- `/maladie-oeil/keratocone/comment_se_traite_un_keratocone`
- `/maladie-oeil/keratocone/qu_est_ce_qu_un_keratocone`

**Maladies : /maladie-oeil/lentilles-contactologie (5)**

- `/maladie-oeil/lentilles-contactologie`
- `/maladie-oeil/lentilles-contactologie/comment_mettre_et_entretenir_vos_lentilles`
- `/maladie-oeil/lentilles-contactologie/infections_sous_lentilles`
- `/maladie-oeil/lentilles-contactologie/les_differents_types_de_lentilles`
- `/maladie-oeil/lentilles-contactologie/orthokeratologie`

**Maladies : /maladie-oeil/lunettes (7)**

- `/maladie-oeil/lunettes`
- `/maladie-oeil/lunettes/comment_bien_choisir_vos_lunettes`
- `/maladie-oeil/lunettes/comment_bien_entretenir_vos_lunettes`
- `/maladie-oeil/lunettes/comment_lire_votre_ordonnance_de_lunettes`
- `/maladie-oeil/lunettes/emmetropie_l_oeil_parfait`
- `/maladie-oeil/lunettes/myopie_hypermetropie_astigmatisme`
- `/maladie-oeil/lunettes/presbytie_qu_est_ce_que_c_est`

**Maladies : /maladie-oeil/ophtalmo-pediatrie (7)**

- `/maladie-oeil/ophtalmo-pediatrie`
- `/maladie-oeil/ophtalmo-pediatrie/amblyopie_le_syndrome_de_l_oeil_paresseux`
- `/maladie-oeil/ophtalmo-pediatrie/comment_bien_choisir_les_lunettes_de_votre_enfant`
- `/maladie-oeil/ophtalmo-pediatrie/cycloplegie_atropine_et_cyclopentolate`
- `/maladie-oeil/ophtalmo-pediatrie/doit_on_s_inquieter_devant_un_strabisme_chez_l_enfant`
- `/maladie-oeil/ophtalmo-pediatrie/faut_il_emmener_son_enfant_chez_l_ophtamologiste`
- `/maladie-oeil/ophtalmo-pediatrie/occlusion_par_application_de_caches_sur_l_oeil_reeducation_de_l_amblyopie`

**Maladies : /maladie-oeil/paupieres-et-voies-lacrymales (7)**

- `/maladie-oeil/paupieres-et-voies-lacrymales`
- `/maladie-oeil/paupieres-et-voies-lacrymales/conseils_apres_chirurgie_de_paupiere`
- `/maladie-oeil/paupieres-et-voies-lacrymales/pathologies_des_voies_lacrymales_de_l_adulte`
- `/maladie-oeil/paupieres-et-voies-lacrymales/pathologies_des_voies_lacrymales_de_l_enfant`
- `/maladie-oeil/paupieres-et-voies-lacrymales/paupieres_qui_se_retournent_ectropion_et_entropion`
- `/maladie-oeil/paupieres-et-voies-lacrymales/paupieres_qui_tombent_dermatochalasis_et_ptosis`
- `/maladie-oeil/paupieres-et-voies-lacrymales/tumeurs_des_paupieres`

**Maladies : /maladie-oeil/retine-chirurgicale (12)**

- `/maladie-oeil/retine-chirurgicale`
- `/maladie-oeil/retine-chirurgicale/chirurgie_de_la_retine_comment_ca_se_passe`
- `/maladie-oeil/retine-chirurgicale/conseils_apres_chirurgie_de_retine`
- `/maladie-oeil/retine-chirurgicale/corps_flottants`
- `/maladie-oeil/retine-chirurgicale/dechirures_de_la_retine_et_lesions_rhegmatogenes`
- `/maladie-oeil/retine-chirurgicale/decollement_de_retine`
- `/maladie-oeil/retine-chirurgicale/decollement_du_vitre`
- `/maladie-oeil/retine-chirurgicale/hematome_maculaire`
- `/maladie-oeil/retine-chirurgicale/hemorragie_du_vitre`
- `/maladie-oeil/retine-chirurgicale/luxation_posterieure_du_cristallin_ou_d_implant_de_cataracte`
- `/maladie-oeil/retine-chirurgicale/membrane_epi_retinienne`
- `/maladie-oeil/retine-chirurgicale/trou_maculaire`

**Maladies : /maladie-oeil/retine-medicale (8)**

- `/maladie-oeil/retine-medicale`
- `/maladie-oeil/retine-medicale/angiographie_retinienne_qu_est_ce_que_c_est`
- `/maladie-oeil/retine-medicale/degenerescence_maculaire_liee_a_l_age_dmla_qu_est_ce_que_c_est`
- `/maladie-oeil/retine-medicale/diabete_et_retine`
- `/maladie-oeil/retine-medicale/injections_intra_vitreennes_ivt_comment_ca_se_passe_page`
- `/maladie-oeil/retine-medicale/naevus_melanome_et_autres_tumeurs_de_la_retine`
- `/maladie-oeil/retine-medicale/occlusions_vasculaires_retiniennes`
- `/maladie-oeil/retine-medicale/quelles_sont_les_recommandations_apres_avoir_beneficie_d_une_injection_intra_vitree`

**Maladies : /maladie-oeil/strabologie-chirurgie-du-strabisme (4)**

- `/maladie-oeil/strabologie-chirurgie-du-strabisme`
- `/maladie-oeil/strabologie-chirurgie-du-strabisme/chirurgie_du_strabisme_comment_ca_se_passe`
- `/maladie-oeil/strabologie-chirurgie-du-strabisme/doit_on_s_inquieter_devant_un_strabisme_chez_l_enfant`
- `/maladie-oeil/strabologie-chirurgie-du-strabisme/principes_de_la_chirurgie_du_strabisme`

**Maladies : /maladie-oeil/urgences-et-infections (16)**

- `/maladie-oeil/urgences-et-infections`
- `/maladie-oeil/urgences-et-infections/baisse_de_vision_que_faire`
- `/maladie-oeil/urgences-et-infections/chalazion_orgelet`
- `/maladie-oeil/urgences-et-infections/conjonctivite_allergique`
- `/maladie-oeil/urgences-et-infections/conjonctivite_infectieuse_qu_est_ce_que_c_est`
- `/maladie-oeil/urgences-et-infections/corps_etrangers_oculaires`
- `/maladie-oeil/urgences-et-infections/corps_flottants_eclairs_lumineux_que_faire`
- `/maladie-oeil/urgences-et-infections/glaucome_aigu`
- `/maladie-oeil/urgences-et-infections/hemorragie_sous_conjonctivale`
- `/maladie-oeil/urgences-et-infections/hemorragies_intra_oculaires`
- `/maladie-oeil/urgences-et-infections/herpes_oculaire`
- `/maladie-oeil/urgences-et-infections/infections_sous_lentilles`
- `/maladie-oeil/urgences-et-infections/oeil_rouge_et_douloureux_que_faire`
- `/maladie-oeil/urgences-et-infections/que_faire_en_cas_de_conjonctivite_infectieuse_et_contagieuse`
- `/maladie-oeil/urgences-et-infections/traumatismes_oculaires`
- `/maladie-oeil/urgences-et-infections/uveite`

## 3. Points positifs

- **Confirmé :** le sitemap est un XML valide avec 133 URL uniques. Il correspond exactement aux 133 routes statiques ; elles répondent toutes 200. Voir `src/lib/seo.ts:53,108` et `src/routes/sitemap.xml/+server.ts:1-11`.
- **Confirmé :** chaque page statique a une canonical correcte et unique, une description et `index, follow`. Le composant commun ajoute Open Graph et Twitter (`src/lib/components/seo/Seo.svelte:20-40`).
- **Confirmé :** les 133 pages statiques livrent leur contenu et leur JSON-LD dans le HTML initial. Les 133 scripts JSON-LD sont des JSON valides. L'article CMS testé livre aussi son corps dans le HTML initial.
- **Confirmé :** les identifiants JSON-LD du centre et du site sont stables. Le graphe donne l'adresse, les téléphones et les breadcrumbs. Il ne contient pas de faux avis ou de fausses notes (`src/lib/seo.ts:146-205`).
- **Confirmé :** HTTP apex passe vers HTTPS en 308. Une URL avec slash final passe vers la version sans slash en 308. Un paramètre de requête testé garde la canonical propre. Sitemap et canonical utilisent la même forme d'URL.
- **Confirmé :** chaque route statique du sitemap reçoit un lien interne depuis une autre page testée. `robots.txt` autorise l'exploration et indique le sitemap. La langue HTML `fr-MA` correspond au contenu français.
- **Confirmé :** les 206 images du contenu principal des 133 pages statiques ont un attribut `alt`. Huit `alt` sont vides ; cela peut être juste pour une image décorative. La justesse du texte doit être vérifiée image par image (voir I16).

## 4. Audit SEO technique

### Exploration, indexation et HTTP

**Confirmé :** `GET /robots.txt` renvoie 200 et autorise tous les user agents. `GET /sitemap.xml` renvoie 200 avec le type XML. Ses 133 chemins uniques correspondent aux 133 pages statiques. Les 133 pages renvoient 200, `index, follow` et une canonical égale à l'URL du sitemap. Cela ne prouve pas leur indexation par Google ou Bing.

**Confirmé :** `/actualites/nouveaux-equipements-diagnostic-2025` renvoie 200 et reçoit un lien depuis `/actualites`, mais manque au sitemap. `src/lib/seo.ts:101-104` exclut les routes dynamiques. D'autres slugs CMS peuvent exister ; un seul a été trouvé dans la liste publique. Sa canonical est correcte.

**Confirmé :** le lien d'accueil `/addresser-patient` et le lien du pied de page `/maladie-oeil` renvoient 404. La bonne route d'adressage est `/adresser-patient`. Une URL inconnue de contrôle renvoie aussi une vraie 404. Le HTML 404 possède les balises communes `index, follow` et self-canonical, mais le statut HTTP 404 reste le signal principal : ce n'est pas un P0 à lui seul.

**Confirmé :** `http://dramalophtalmo.ma/` redirige en 308 vers HTTPS. `/a-propos/` redirige en 308 vers `/a-propos`. `/a-propos?test=1` renvoie 200 avec canonical `/a-propos`. HTTPS sur `www` échoue à la vérification TLS. Son certificat a expiré le **7 mars 2026**. Sans contrôle du certificat, le serveur répond 307 vers le domaine apex. Un visiteur ou robot qui commence sur HTTPS `www` peut échouer avant cette redirection. Le certificat apex fonctionnait dans ces tests.

**Confirmé :** le sitemap donne la même date `<lastmod>` à chaque URL. Elle vient de `new Date()` lors de la requête (`src/lib/seo.ts:210-219`). La réponse observée donnait `2026-10-17T16:02:28.982Z` aux 133 entrées. Ce n'est pas une date de dernière modification du contenu vérifiée. [Google demande une date de changement significatif et exacte](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

**Non vérifié :** couverture réelle dans Google/Bing, journaux des robots, toutes les variantes d'URL, pagination et paramètres de recherche ou de filtres. Aucune route de recherche, filtre ou pagination n'a été trouvée dans le code. Aucune route privée indexée n'est prouvée.

### Titles, descriptions, réseaux sociaux et HTML

**Confirmé :** title, description, robots, canonical, balises sociales et JSON-LD passent par le même code (`src/routes/+layout.svelte:15-20`, `src/lib/components/seo/Seo.svelte:20-40`). Cela évite des balises absentes sur les nouvelles pages statiques. Mais **131 des 133** pages statiques testées ont une description qui commence par `Informations sur ...`. Beaucoup de titles viennent du dernier segment de l'URL, suivi d'un suffixe long (`src/lib/seo.ts:125-132,232-233`).

**Risque potentiel :** **73 des 133** titles statiques dépassent 60 caractères et 21 dépassent 80 caractères. Un title long peut être coupé dans les résultats, mais 60 caractères n'est pas une limite Google officielle. [Google adapte l'affichage à la largeur de l'appareil](https://developers.google.com/search/docs/appearance/title-link). Un title de conseil sur les injections atteint 117 caractères. La coupure réelle n'a pas été mesurée.

**Confirmé :** le H1 de l'article CMS est « Nouveaux équipements pour un diagnostic plus précis », mais son title est « Nouveaux equipements diagnostic 2025 | Centre d'ophtalmologie Salé ». Sa description vient du slug. Son Open Graph est de type `website` et son image sociale est l'image par défaut du site, alors qu'une image d'article existe. Le layout ne reçoit pas les champs SEO de l'article Sanity.

**Confirmé :** `/maladie-oeil/blepharite-secheresse-surface-oculaire/blepharite` n'a aucun H1. La page commence par du texte, puis des composants `Title` sans niveau qui deviennent des H2 (`src/routes/maladie-oeil/blepharite-secheresse-surface-oculaire/blepharite/+page.svelte:13-24`, `src/lib/components/general/Title.svelte:11-18`). L'article CMS testé a trois H1 : le titre de page et deux titres PortableText. Sur 49 pages statiques, les deux premiers titres sont H1 puis H3. Le style `sub1` produit H3 (`src/lib/components/general/Title.svelte:15`). Ce constat porte sur la structure, pas sur une perte de classement prouvée.

### Images et performance

**Confirmé dans le code et dans les réponses :** l'image principale de l'accueil porte `loading="lazy"` (`src/routes/+page.svelte:66-71`) et pèse 336 511 octets. Une page de conseils charge une image PNG de **12 815 214 octets** avec `loading="eager"`. Une page de traitement contient des PNG de **9 947 584** et **11 492 348 octets**. Le dépôt contient 173 images PNG. Les 206 images principales des 133 pages statiques n'ont ni `width`/`height` HTML, ni `srcset`. Le CSS peut réserver de la place pour certaines images : un problème de CLS sur tout le site n'est pas confirmé. [web.dev déconseille le lazy loading pour une image visible dès l'ouverture](https://web.dev/articles/browser-level-image-lazy-loading).

**Confirmé par un test de laboratoire, sans données terrain :** le rapport PageSpeed fourni mesure, sur l'accueil, **LCP 17,9 s, FCP 0,4 s, TBT 30 ms, CLS 0,026** sur ordinateur ; **LCP 113,5 s, FCP 4,3 s, TBT 0 ms, CLS environ 0** sur mobile. Lighthouse donne 75/100 et 64/100 en performance. Son audit « Improve image delivery » estime une économie de **26 136 Kio** sur ordinateur et **25 800 Kio** sur mobile ; le transfert total est de **27 053 Kio** et **27 027 Kio**. Les grandes images de galerie y dominent les octets transférés. Ce test unique ne permet pas d'affirmer que chaque visiteur connaît ces temps. Le rapport dit qu'il n'y a pas assez de données CrUX réelles pour cette page.

**Risque potentiel :** `src/app.css:1` charge les polices Google via `@import`. Le coût des polices et les décalages visuels réels demandent une mesure navigateur ou terrain. Aucun build local n'a été lancé, car cela créerait d'autres fichiers dans le projet.

### Données structurées

**Confirmé :** les 133 pages statiques ont chacune un script JSON-LD qui passe l'analyse JSON. Chaque graphe contient `MedicalOrganization`, `WebSite`, `WebPage` et `BreadcrumbList`. L'article CMS testé a le même graphe générique ; il n'a pas de nœud `Article` ou `BlogPosting`, alors que le titre, la date publiée et l'image viennent de Sanity (`src/routes/actualites/[slug]/+page.server.ts:6-18`). [Le guide Article de Google](https://developers.google.com/search/docs/appearance/structured-data/article) décrit l'usage du titre, de l'image, des dates et d'un vrai auteur. Toute propriété ajoutée doit être visible et vérifiée.

**Non vérifié :** validation sémantique complète Schema.org et éligibilité aux résultats enrichis Google. Un JSON syntaxiquement valide ne prouve pas ces points. Aucune FAQ en données structurées n'a été trouvée. Il n'est pas justifié d'en ajouter partout : une FAQ doit répondre à de vraies questions visibles, et [Google limite l'affichage enrichi des FAQ aux sites gouvernementaux et de santé reconnus comme autoritaires](https://developers.google.com/search/blog/2023/08/howto-faq-changes). Aucune page de cours ou de vidéo n'a été trouvée ; `Course` et `VideoObject` ne sont donc pas proposés. Un nœud `Person` pour le médecin ne doit utiliser que des informations réelles et visibles.

## 5. Audit SEO sémantique et contenu

**Confirmé :** les maladies et conseils forment des groupes de sujets clairs, avec des questions qui mènent vers les pages détaillées (`src/lib/components/disease/EyeDiseasePage.svelte:34-65`). Certaines pages commencent par une réponse directe, comme la définition de la cataracte. Chaque page statique a au moins un lien entrant interne dans le HTML testé.

**Confirmé :** neuf paires ont le même title et la même description générée. Trois paires ont aussi exactement le même texte principal dans le HTML public : `chalazion_orgelet` dans deux groupes, `infections_sous_lentilles` dans deux groupes, et l'article sur le strabisme de l'enfant en pédiatrie et strabologie. Chaque URL a sa propre canonical. Les six autres paires ont des contenus plus ou moins proches ; il ne faut pas les fusionner sans vérifier l'intention de recherche et le sens médical. Les neuf sujets concernés sont : choisir les lunettes d'un enfant, choisir ses lunettes, entretenir ses lunettes, lire une ordonnance de lunettes, utiliser les lentilles, chalazion/orgelet, glaucome aigu, infections sous lentilles et strabisme de l'enfant.

**Confirmé :** `[Nom de Clinique]` est visible sur **11 pages médicales statiques**. Une recherche dans les fichiers trouve **19 occurrences**, en comptant les valeurs coupées par des retours à la ligne. Exemples : consignes après cataracte (`src/routes/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_règles_à_suivre_après_une_chirurgie_de_cataracte/+page.svelte:14,121`), conseils après injection rétinienne et page d'urgence sur l'œil rouge douloureux. Ce texte nuit clairement à la confiance dans un conseil patient. D'autres passages parlent de manière générique de « Clinique ou Centre Hospitalier » et demandent une relecture locale.

**Confirmé sur les pages testées :** `/a-propos` décrit une équipe sans donner dans son contenu principal le profil ni les qualifications d'un praticien nommé (`src/routes/a-propos/+page.svelte:1-72`). L'article CMS public donne une date, mais pas de signature. La définition de la cataracte donne un chiffre sur les opérations en France sans source visible (`src/routes/maladie-oeil/cataracte/cataracte_qu_est_ce_que_c_est/+page.svelte:41`). L'audit ne dit pas que toutes les pages médicales manquent de sources. Sur la santé, l'identité du responsable et l'appui des faits comptent ; [Google conseille de rendre clair qui a créé le contenu](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

**Risque potentiel :** 19 pages statiques ont moins de 150 mots dans `<main>`, surtout des hubs de sujets. Un hub court n'est pas forcément faible : ses cartes et ses liens peuvent suffire à son rôle. Des pages comme `/conseils`, `/maladie-oeil/keratocone` et `/maladie-oeil/cornee-et-greffes` pourraient répondre plus directement à une question patient avant la liste, si la demande réelle le justifie. Aucun volume de recherche, classement, trafic ou taux de conversion n'était accessible.

## 6. Audit AEO

**Points favorables confirmés :** plusieurs pages médicales détaillées utilisent une question en H1 ou en intertitre et donnent une explication dans le HTML initial. Les hubs de maladies montrent les questions près de leurs liens. Cela aide à trouver une réponse précise.

**Points à améliorer :** l'absence de H1 sur une page, les H1 répétés dans l'article CMS et les 49 passages directs de H1 à H3 rendent certaines réponses moins claires. Les 131 descriptions génériques n'expliquent pas la réponse propre à chaque page. Des hubs listent les liens avant de donner un aperçu direct. Il ne s'agit pas d'un score AEO officiel. Une réponse courte et validée médicalement est utile seulement si elle sert le patient. Une FAQ visible peut aider lorsqu'une vraie question reste sans réponse ; un ajout automatique de FAQPage partout n'est pas justifié.

## 7. Audit GEO

**Points favorables confirmés :** le texte public est dans le HTML du serveur, `robots.txt` autorise l'exploration, les canonicals sont claires et l'organisation possède un identifiant JSON-LD stable avec adresse et contact. Les groupes de sujets et les liens internes montrent les relations entre maladies et conseils.

**Obstacles :** le certificat `www` expiré bloque un hôte avant la redirection. Les articles identiques et `[Nom de Clinique]` affaiblissent la clarté de la source. L'article CMS a une identité SEO générique. Sur les contenus de santé testés, l'expertise nommée et les sources de certains faits sont faibles ou absentes. Le template des conseils n'affiche pas de date de relecture médicale. Ces constats ne prouvent pas qu'un moteur IA cite ou ignore le site. Il n'existe ici aucun score GEO officiel ; aucune correction ne garantit une citation par ChatGPT, Google AI Overviews, Gemini ou Perplexity.

## 8. Audit par type de page

| Type de page | Échantillon ou périmètre | Résultat confirmé | Principal point à suivre |
|---|---|---|---|
| Accueil | `/` | HTML serveur, title local, canonical, JSON-LD, 200 | Image hero en lazy loading ; bouton d'adressage vers 404 ; galerie lourde |
| À propos et services | `/a-propos`, `/equipement`, `/urgences`, `/adresser-patient`, `/contactez-nous` | 200 et balises SEO communes | Aucun profil de médecin nommé sur À propos ; descriptions surtout génériques |
| Liste d'actualités | `/actualites` | 200, un article CMS public lié, liste dans le HTML serveur | Description générique ; liste courte, sans que cela soit une erreur en soi |
| Article CMS | `/actualites/nouveaux-equipements-diagnostic-2025` | 200, corps dans le HTML serveur, self-canonical | Hors sitemap ; SEO basé sur slug ; trois H1 ; pas d'Article JSON-LD ni de signature |
| Hub et familles de conseils | `/conseils` et trois familles ; quatre pages statiques | 200 ; cartes et liens | Certaines introductions courtes ; sauts de niveaux de titres |
| Conseils détaillés | 11 pages statiques | 200 ; plusieurs consignes concrètes | Des placeholders ; des titles répétés ; des médias lourds |
| Hubs de maladies | 16 pages sous `/maladie-oeil` | 200 ; composant `EyeDiseasePage` et liens par question | Souvent H1 puis H3 ; aperçu court sur certains hubs |
| Articles sur les maladies | 95 pages statiques dans 16 familles | 200 ; articles écrits ou layout partagé | Un H1 manquant ; trois paires de texte identique ; placeholders sur certaines pages |
| URL techniques | `robots.txt`, `sitemap.xml`, variantes HTTP/slash/404 testées | Robots et sitemap valides ; redirections apex et slash attendues | TLS `www` ; `lastmod` inexact ; deux liens internes 404 |

Les 133 URL statiques ont été vérifiées pour le statut HTTP, le title, la description, la balise robots, la canonical, le nombre de H1, la syntaxe JSON-LD, les images et les liens dans le HTML initial. La liste des routes est en section 2. **Une seule URL d'article CMS** a été trouvée et testée. L'audit ne prétend pas couvrir tous les slugs actuels ou futurs du CMS.

## 9. Tableau central des problèmes

**Total : 13 confirmés, 3 risques potentiels, aucun P0.** L'impact décrit est plausible, sauf quand une mesure de laboratoire est précisée ; il ne représente pas une perte de trafic mesurée. Effort : S petit, M moyen, L grand. Les recommandations ci-dessous ne sont pas implémentées.

| ID | Catégorie | Problème | Statut | URL ou fichier | Preuve | Impact estimé | Priorité | Effort | Recommandation |
|---|---|---|---|---|---|---|---|---|---|
| I01 | SEO | Certificat HTTPS `www` expiré ; sa redirection est inaccessible avec un contrôle TLS normal | Confirmé | `https://www.dramalophtalmo.ma/` | Échec TLS ; fin de validité le 2026-03-07 à 18:48:52 UTC ; HEAD sans contrôle montre 307 vers apex | Échec possible pour visiteurs et robots arrivant par `www` | P1 | S/M | Renouveler et vérifier le certificat, puis utiliser une redirection permanente vers l'apex |
| I02 | SEO | Deux liens internes aboutissent à 404 | Confirmé | `src/routes/+page.svelte:250` ; `src/lib/components/layout/Footer.svelte:16` | GET `/addresser-patient` = 404 ; GET `/maladie-oeil` = 404 ; `/adresser-patient` existe | Parcours coupés depuis l'accueil et le pied de page | P1 | S | Pointer vers des pages pertinentes qui répondent 200 |
| I03 | SEO | Trois paires ont le même texte principal mais deux self-canonicals ; neuf paires partagent title et description | Confirmé | Exemple : `src/routes/maladie-oeil/lentilles-contactologie/infections_sous_lentilles/+page.svelte:8-18` et `src/routes/maladie-oeil/urgences-et-infections/infections_sous_lentilles/+page.svelte:8-18` ; `src/lib/seo.ts:125-132` | Texte principal identique pour trois paires ; canonical différente pour chaque URL | Choix d'une URL par le moteur et possible partage des signaux | P1 | M | Choisir une URL de référence pour les copies exactes après examen médical ; différencier les intentions distinctes |
| I04 | GEO | `[Nom de Clinique]` reste publié dans des conseils médicaux | Confirmé | Exemple : `src/routes/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_règles_à_suivre_après_une_chirurgie_de_cataracte/+page.svelte:14,121` | Visible sur 11 pages ; 19 occurrences dans les fichiers de routes | Baisse de confiance dans les consignes patients | P1 | S/M | Faire relire les pages et employer le vrai nom vérifié ou une formule neutre |
| I05 | SEO | L'article CMS utilise le slug, la description et l'image par défaut, `og:type=website`, sans JSON-LD `Article` | Confirmé | `src/routes/+layout.svelte:17` ; `src/lib/seo.ts:125-205` ; `src/lib/components/seo/Seo.svelte:26-33` | H1 public « Nouveaux équipements… » ; title « Nouveaux equipements diagnostic 2025… » ; JSON-LD générique | Identité de page et partage moins clairs | P2 | M | Construire le SEO depuis Sanity ; n'ajouter Article qu'avec des faits visibles et vérifiés |
| I06 | SEO | L'article CMS public manque au sitemap | Confirmé | `src/lib/seo.ts:101-104` ; `/actualites/nouveaux-equipements-diagnostic-2025` | Sitemap limité aux 133 routes statiques ; article 200 lié depuis la liste | Découverte possiblement plus lente | P2 | M | Ajouter les URL des articles actifs publiés après lecture sûre de Sanity |
| I07 | SEO | `lastmod` du sitemap indique la date de la requête pour toutes les pages | Confirmé | `src/lib/seo.ts:210-219` | Les 133 entrées avaient `2026-10-17T16:02:28.982Z` ; `new Date()` est appelé pour l'ensemble | Signal de mise à jour peu fiable | P2 | M | Employer la vraie date d'un changement important ou omettre `lastmod` |
| I08 | SEO | La plupart des meta descriptions viennent du même modèle générique | Confirmé | `src/lib/seo.ts:131,232-233` | 131 des 133 descriptions statiques commencent par `Informations sur ...` | Extrait de recherche peu précis | P2 | M | Rédiger des résumés propres aux pages prioritaires, liés à leur réponse visible |
| I09 | SEO | Beaucoup de titles risquent d'être coupés dans les résultats | Risque potentiel | `src/lib/seo.ts:129-130` | 73/133 titles dépassent 60 caractères ; 21 dépassent 80 ; affichage Google non mesuré | Mots utiles possiblement masqués | P2 | M | Examiner les résultats importants, puis raccourcir si le sujet principal disparaît |
| I10 | SEO/AEO | Une page médicale n'a pas de H1 ; l'article CMS testé en a trois | Confirmé | `src/routes/maladie-oeil/blepharite-secheresse-surface-oculaire/blepharite/+page.svelte:13-24` ; `src/routes/actualites/[slug]/+page.svelte:25-59` | HTML initial : 0 H1 sur la blépharite ; 3 H1 sur l'article CMS | Sujet et ordre des sections moins nets | P2 | S/M | Donner un H1 principal par page ; placer les titres CMS de section en dessous |
| I11 | SEO/AEO | De nombreuses pages passent directement de H1 à H3 | Confirmé | `src/lib/components/general/Title.svelte:11-18` ; exemple `src/routes/a-propos/+page.svelte:22-40` | 49/133 pages statiques ont H1 puis H3 | Plan du document moins clair | P2 | M | Employer les niveaux pour la structure et le CSS pour la taille visuelle |
| I12 | SEO | L'accueil charge beaucoup d'images ; le test PageSpeed montre un LCP très lent | Confirmé, test de laboratoire | `src/routes/+page.svelte:66-71` ; [rapport PageSpeed du 16 octobre 2026](https://pagespeed.web.dev/analysis/https-dramalophtalmo-ma/hmdqvisz2b?form_factor=desktop) | Performance 75 ordinateur / 64 mobile ; LCP 17,9 s / 113,5 s ; environ 27 000 Kio transférés ; économie d'images estimée à 26 136 / 25 800 Kio | Vitesse de laboratoire faible ; effet réel non mesuré | P1 | M | Compresser et adapter d'abord la galerie ; tester ensuite le hero et mesurer à nouveau |
| I13 | SEO | Images sans dimensions HTML et sans sources responsives | Risque potentiel | `src/lib/components/disease/ArticleImage.svelte:18-20` ; `src/lib/components/disease/EyeDiseasePage.svelte:23-30` | 206 images de contenu sans `width`, `height`, `srcset` ; PageSpeed signale des images sans taille ; CLS accueil mesuré faible dans ce test | Décalages possibles sur d'autres pages et transfert excessif sur petits écrans | P2 | M/L | Tester les décalages par template ; ajouter tailles et variantes adaptées |
| I14 | GEO/AEO | Les pages de santé testées donnent peu de responsabilité médicale nommée ou de sources | Confirmé sur échantillon | `src/routes/a-propos/+page.svelte:1-72` ; `src/routes/actualites/[slug]/+page.svelte:21-59` ; `src/routes/maladie-oeil/cataracte/cataracte_qu_est_ce_que_c_est/+page.svelte:41` | À propos sans profil nommé ; article CMS sans signature ; chiffre médical sans source visible | Faits et expertise plus difficiles à vérifier | P1 | M | Ajouter uniquement des rôles, dates de relecture et sources réels et vérifiés |
| I15 | AEO | Certains hubs donnent peu de réponse directe avant leurs liens | Risque potentiel | `/conseils`, `/maladie-oeil/keratocone`, `/maladie-oeil/cornee-et-greffes` | 19 pages statiques ont moins de 150 mots dans `<main>`, surtout des hubs ; leur fonction de liste peut suffire | Question patient parfois sans réponse sur le hub | P2 | M | Vérifier l'intention et ajouter un bref aperçu médical validé quand il est utile |
| I16 | SEO | Les images de blépharite ont un alt sur une procédure YAG sans rapport | Confirmé | `src/routes/maladie-oeil/blepharite-secheresse-surface-oculaire/blepharite/+page.svelte:35,70,119` | Trois `alt` disent « capsulotomie au laser YAG » sur une page blépharite | Mauvais contexte pour lecteurs et recherche d'images | P2 | S | Décrire justement l'image, ou utiliser un alt vide si elle est décorative |

## 10. Quick wins

Ce sont des possibilités ciblées, **non réalisées dans cet audit**.

- Corriger les deux liens internes qui renvoient 404 (I02).
- Corriger le certificat `www` et vérifier sa redirection finale (I01).
- Retirer les placeholders des 11 pages après validation éditoriale (I04).
- Donner un H1 à la page blépharite et corriger ses alt erronés (I10, I16).
- Ne plus annoncer une nouvelle date `lastmod` pour des pages inchangées (I07).
- Préparer des images de galerie bien plus légères et refaire un test PageSpeed (I12).

## 11. Limites et vérifications restantes

- **Non vérifié :** Google Search Console et Bing Webmaster Tools ne sont pas connectés. Leurs rapports d'indexation, de sitemap, de requêtes, de clics, de classement et d'erreurs de crawl peuvent changer les priorités.
- **Non vérifié :** données terrain LCP, INP et CLS. Le rapport PageSpeed fourni contient un test Lighthouse ponctuel, pas assez de données CrUX réelles. Ses LCP extrêmes doivent être reproduits après les corrections avant toute conclusion sur la vitesse habituelle. Aucun score Lighthouse local n'a été produit.
- **Non vérifié :** comparaison dans un navigateur après hydratation. Le HTML initial testé contient déjà les textes et balises SEO ; aucun besoin de JavaScript pour ces contenus n'a été vu. Les changements réservés au navigateur restent à tester.
- **Non vérifié :** Rich Results Test de Google et validation Schema.org complète. L'audit a vérifié la syntaxe JSON, pas l'éligibilité à toutes les fonctionnalités.
- **Non vérifié :** inventaire complet Sanity. Une URL d'article liée depuis `/actualites` a été testée ; tous les autres slugs possibles ne sont pas connus. Seules des requêtes GET et HEAD ont été envoyées.
- **Non vérifié :** toutes les variantes d'URL, backlinks, données Google Business Profile, trafic et citations IA. Un échantillon de HTTP/HTTPS, slash, paramètre, 404, apex et `www` a été testé.
- **Limite code/production :** l'identifiant du commit déployé n'était pas disponible. Le comportement observé correspond aux mécanismes du code examiné sur les points testés, mais une comparaison complète des versions est impossible. Aucun build local n'a été lancé afin de ne pas créer de fichiers hors du rapport.

## 12. Conclusion

Le site statique est explorable, rendu côté serveur et relié par des liens internes. Son code SEO commun donne aux pages statiques une canonical correcte et un JSON-LD syntaxiquement valide. Les défauts confirmés les plus urgents sont le certificat `www`, deux liens cassés, les copies exactes de textes médicaux et les placeholders du nom de clinique. L'article CMS a besoin d'une identité SEO propre et d'une entrée au sitemap. Le rapport PageSpeed fourni ajoute une preuve de performance faible **en laboratoire** sur l'accueil, surtout pour les images ; la vitesse réelle reste inconnue. Aucun résultat de classement, de trafic ou de citation IA n'est affirmé. Aucune correction n'a été faite pendant cet audit.
