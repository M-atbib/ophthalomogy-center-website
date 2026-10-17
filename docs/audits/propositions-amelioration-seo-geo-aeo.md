# Propositions d'amélioration SEO, GEO et AEO

**Site :** `https://dramalophtalmo.ma`  
**Date :** 17 octobre 2026 (UTC)  
**Base :** [audit SEO, GEO et AEO](seo-geo-aeo-audit.md) et [rapport PageSpeed Insights partagé](https://pagespeed.web.dev/analysis/https-dramalophtalmo-ma/hmdqvisz2b?form_factor=desktop) du 16 octobre 2026.  
**Statut :** proposition uniquement. Aucun correctif, commit, push ou déploiement n'a été fait.

## 1. Objectif et règles

L'objectif est de rendre les pages fiables, faciles à explorer et rapides, puis de mieux expliquer chaque sujet médical. Le site a déjà une bonne base : les 133 routes statiques testées renvoient 200, une canonical correcte et du contenu dans le HTML initial. Il faut conserver ces points.

La priorité P1 traite les défauts importants. P2 traite les améliorations à impact modéré. S, M et L indiquent un effort petit, moyen et grand. Ces priorités restent à ajuster avec Google Search Console, Bing Webmaster Tools et les données de patients ou de trafic. Ne pas inventer de données médicales, d'avis, d'auteurs, de dates de mise à jour ou de résultats SEO.

## 2. Ordre de travail proposé

| Lot | Priorité | Travail proposé | Pourquoi | Effort | Condition de réussite |
|---|---|---|---|---|---|
| A | P1 | Rétablir HTTPS sur `www` et vérifier la redirection vers l'apex | Le certificat `www` a expiré le 7 mars 2026 ; la redirection est bloquée par TLS | S/M | Le certificat est valide ; `www` redirige de façon permanente vers l'apex ; l'URL finale répond 200 |
| B | P1 | Corriger les deux liens internes vers 404 | Un bouton d'accueil et un lien de pied de page coupent le parcours | S | Aucun lien interne testé ne mène à `/addresser-patient` ou `/maladie-oeil` en 404 |
| C | P1 | Relire les 11 pages avec `[Nom de Clinique]` | Un placeholder dans des consignes médicales nuit à la confiance | S/M | Aucun placeholder dans le HTML public ; le texte de remplacement est validé par le centre |
| D | P1 | Réduire fortement le poids des images de l'accueil | Le test PageSpeed a transféré environ 27 000 Kio, surtout la galerie ; LCP de laboratoire très élevé | M | Galerie optimisée et variantes adaptées ; poids total et LCP améliorés sur plusieurs nouveaux tests comparables |
| E | P1 | Décider du sort des trois paires d'articles au texte identique | Deux URL auto-canoniques portent la même réponse | M | Une URL de référence claire par contenu exact, sans casser les liens utiles ; les pages d'intention différente restent distinctes |
| F | P1 | Rendre visibles l'expertise et la relecture médicale réelles | Les pages de santé testées donnent peu d'informations sur leur auteur ou leur validation | M | Profils et responsabilités vérifiés ; sources pour les chiffres et conseils sensibles ; aucune qualité inventée |
| G | P2 | Donner aux articles Sanity leurs propres balises SEO et les ajouter au sitemap | L'article public est décrit par son slug et manque au sitemap | M | Title, description, OG, canonical et JSON-LD cohérents avec le contenu ; articles actifs publiés présents dans le sitemap |
| H | P2 | Corriger `lastmod`, les descriptions et les titles prioritaires | Date de sitemap inexacte et 131 descriptions génériques | M | `lastmod` exact ou absent ; descriptions utiles ; titles contrôlés sur les pages importantes |
| I | P2 | Corriger la hiérarchie des titres et le texte alt erroné | Un H1 manque, l'article CMS en a trois, 49 pages sautent H2 ; trois alt de blépharite sont faux | S/M | Un H1 principal par page ; niveaux H2/H3 cohérents ; alt corrects |
| J | P2 | Améliorer les hubs et les réponses directes selon les besoins des patients | Plusieurs hubs courts donnent surtout une liste de liens | M | Aperçus utiles et validés, sans FAQ automatique ni texte ajouté pour remplir la page |

## 3. Détail des propositions

### A. Certificat et redirections du domaine

Le certificat de `https://www.dramalophtalmo.ma/` a expiré le 7 mars 2026. Le serveur répond 307 vers l'apex seulement si la vérification du certificat est désactivée. Vérifier dans Vercel la configuration du domaine et du DNS, puis renouveler le certificat. Après cela, choisir une redirection permanente 301 ou 308 de `www` vers `https://dramalophtalmo.ma/`. Vérifier l'accueil et quelques chemins profonds, sans chaîne de redirections. Ne pas changer les canonicals des pages apex qui fonctionnent déjà.

**Vérification :** certificat valide, `www` → apex permanent, HTTP → HTTPS, URL finale 200, canonical finale identique à l'URL choisie. [Aide Vercel sur les domaines](https://vercel.com/docs/domains/troubleshooting).

### B. Liens internes cassés

`src/routes/+page.svelte:250` pointe vers `/addresser-patient` ; la route réelle est `/adresser-patient`. `src/lib/components/layout/Footer.svelte:16` pointe vers `/maladie-oeil`, qui n'existe pas. Choisir pour ce second lien une destination utile : une vraie page de hub si elle est créée, ou une page de maladie déjà disponible. Il ne faut pas créer un hub vide uniquement pour éliminer la 404.

**Vérification :** suivre les deux liens depuis le HTML public ; ils mènent à une page 200 pertinente. Relancer un contrôle des liens internes sur les 133 URL statiques et l'article CMS connu.

### C. Relecture du contenu médical et confiance

Une recherche du code trouve 19 occurrences de `[Nom de Clinique]` sur 11 pages publiques. Remplacer ces passages après validation par le centre. Vérifier aussi les phrases « Clinique ou Centre Hospitalier », les promesses de soins et les données chiffrées. La page cataracte cite environ 700 000 opérations en France sans source visible ; décider si ce chiffre est nécessaire à un patient à Salé et, si oui, donner une source et son contexte.

Ajouter sur `/a-propos` une présentation factuelle des praticiens et de leur rôle, uniquement avec des informations confirmées. Pour les conseils à enjeu médical, indiquer qui les a rédigés ou relus et la date réelle de dernière relecture. Ajouter des références utiles aux affirmations médicales qui en ont besoin. La signature, la date et les qualifications doivent être vraies et visibles avant d'être reprises dans des données structurées.

**Vérification :** recherche du placeholder dans le code et le HTML public = 0 ; liste des pages relues et approuvées par le centre ; aucun auteur ou diplôme fictif. [Guide Google sur le contenu utile et fiable](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

### D. Images et vitesse

Le rapport PageSpeed partagé donne, sur l'accueil, **75/100 ordinateur** et **64/100 mobile** en performance. Il mesure **LCP 17,9 s et 113,5 s** sur cette exécution, **27 053 et 27 027 Kio** de transfert total, et estime une économie d'images de **26 136 et 25 800 Kio**. Les grandes images de la galerie représentent plusieurs mégaoctets chacune. Il s'agit d'un seul test de laboratoire ; PageSpeed ne dispose pas d'assez de données CrUX réelles. Ne pas présenter ces temps comme l'expérience de tous les visiteurs.

Commencer par la galerie de l'accueil : fournir des fichiers à la taille réellement affichée, des formats efficaces et plusieurs variantes selon la largeur de l'écran. Préserver la qualité nécessaire aux images médicales ; une illustration diagnostique peut demander plus de détail qu'une photo décorative. Charger les images hors écran à la demande, sans retarder les images visibles dès l'ouverture. L'image hero de `src/routes/+page.svelte:66-71` porte aujourd'hui `loading="lazy"` : la tester avec un chargement prioritaire, puis comparer le résultat. Le test PageSpeed signale aussi des images sans dimensions. Ajouter `width` et `height` ou un ratio réservé, ainsi que `srcset`/`sizes` quand plusieurs tailles sont disponibles. Les composants partagés `ArticleImage.svelte`, `OpeningImageSection.svelte` et `EyeDiseasePage.svelte` sont des points de changement utiles.

Ne pas choisir une nouvelle dépendance d'image avant d'avoir vérifié son intérêt dans SvelteKit/Vercel et son coût de maintenance. Des variantes créées pendant le build ou des fichiers optimisés connus peuvent suffire.

**Vérification :** mesurer le poids transféré et LCP sur ordinateur et mobile avec plusieurs tests comparables ; contrôler visuellement les images médicales ; vérifier qu'aucune illustration n'est coupée ; suivre CLS et INP quand des données terrain seront disponibles. [Conseils web.dev sur le LCP](https://web.dev/articles/optimize-lcp) et [sur le lazy loading](https://web.dev/articles/browser-level-image-lazy-loading).

### E. Pages très proches et canonicals

L'audit a confirmé trois paires au texte principal identique : `chalazion_orgelet`, `infections_sous_lentilles` et l'article sur le strabisme de l'enfant. Chaque URL est aujourd'hui sa propre canonical. Pour chaque paire, choisir avec l'équipe médicale si les deux chemins servent réellement des besoins distincts. Si le contenu et l'intention sont les mêmes, garder une URL principale et faire suivre l'autre par une redirection permanente appropriée, ou une canonical vers la principale si la seconde doit rester accessible. Mettre à jour les liens internes et le sitemap en accord avec la décision.

Six autres paires partagent le title et la description mais ont des textes différents ou partiellement communs. Ne pas les fusionner automatiquement. D'abord comparer leurs réponses, les publics et les requêtes dans Search Console. Si deux pages répondent à des questions différentes, conserver les deux et clarifier leurs titles, descriptions, introductions et liens.

**Vérification :** une canonical cohérente pour chaque contenu retenu ; sa cible répond 200 sans redirection ; sitemap et liens internes pointent vers la bonne URL ; aucune page utile n'est supprimée par erreur.

### F. Articles Sanity : SEO et sitemap

Le loader `src/routes/actualites/[slug]/+page.server.ts` connaît le titre, le sous-titre, l'image et la date publiée. Le SEO commun dans `src/routes/+layout.svelte` utilise seulement le chemin. Définir un seul contrat de métadonnées pour les routes CMS afin que le composant SEO commun reçoive les champs de l'article, sans générer deux titles ou deux canonicals. Employer une description éditoriale propre à l'article. Donner `og:type=article` et l'image de l'article si elle est autorisée et disponible.

Un JSON-LD `Article` ou `BlogPosting` est justifié pour ces pages. Il peut contenir le titre, l'image, `datePublished` et, si elle existe vraiment, `dateModified` et un auteur identifié. Les données doivent correspondre au texte visible. Le contenu PortableText ne doit pas produire de nouveaux H1 après le H1 de la page.

Le sitemap doit inclure les slugs **actifs et publiés**, obtenus du CMS. Prévoir le comportement si Sanity est temporairement indisponible ; ne pas rendre le sitemap entier inutilisable à cause d'une lecture CMS ratée. Exclure les brouillons et articles archivés. Une URL d'article publiée et connue est `/actualites/nouveaux-equipements-diagnostic-2025`.

**Vérification :** sur un article réel, une seule canonical, un title qui reprend le vrai titre, une description spécifique, une image sociale valide, un seul H1, un JSON-LD valide et cohérent ; URL présente une fois dans le sitemap ; article inactif absent et renvoyant 404. [Guide Google des données Article](https://developers.google.com/search/docs/appearance/structured-data/article).

### G. Sitemap, snippets et structure HTML

`src/lib/seo.ts:210-219` écrit la date courante comme `lastmod` pour toutes les pages. Remplacer par une vraie date de changement important, ou retirer cette balise pour les pages sans date fiable. Ne pas utiliser la date de génération du sitemap comme date d'édition. Les valeurs `changefreq` et `priority` actuelles ne remplacent pas un bon inventaire d'URL.

Les 131 descriptions génériques peuvent être améliorées par type de page. Commencer par accueil, contact, hubs importants, traitements et articles CMS. Chaque description doit dire en peu de mots ce que la page apporte. Pour les titles, les 73 titres de plus de 60 caractères sont des candidats à vérifier, pas 73 erreurs certaines. La coupure dépend de l'écran ; faire passer le sujet important au début, sans suffixe long systématique. Utiliser les requêtes de Search Console quand elles seront disponibles pour choisir les pages à traiter.

Donner un H1 à la page blépharite. Dans PortableText, éviter qu'un titre de section soit un autre H1. Le composant `Title.svelte` relie parfois une taille visuelle (`sub1`) à H3 ; distinguer le style du niveau HTML pour garder un plan H1 → H2 → H3 cohérent. Corriger aussi les trois alt qui parlent d'une capsulotomie YAG sur la page blépharite.

**Vérification :** XML valide ; `lastmod` exact ou absent ; un H1 pertinent par page ; titres secondaires logiques ; descriptions non répétées sur les pages traitées ; alt exacts ; aucune régression sur les 133 URL statiques.

### H. AEO et GEO sans promesse de citation

Sur les hubs qui en ont besoin, répondre d'abord à la question principale en quelques phrases claires, puis proposer les liens vers les détails. Faire valider les réponses médicales. Les questions fréquentes doivent venir de vrais besoins des patients ; les afficher dans la page avant toute éventuelle donnée structurée. Il n'y a pas de justification pour ajouter automatiquement `FAQPage`, `Course`, `VideoObject` ou `llms.txt` partout. Les éléments déjà utiles — HTML serveur, adresse, contact, groupes de sujets et liens — doivent rester cohérents.

Les sources et les profils vérifiés rendent les faits plus faciles à contrôler pour tous les lecteurs, y compris les moteurs de réponse. Cela peut aider la compréhension du site ; **aucune citation IA n'est garantie**. Il n'existe pas de score officiel AEO ou GEO à viser.

## 4. Mesure avant et après

| Vérification | État de départ connu | Résultat attendu après travaux |
|---|---|---|
| HTTPS `www` | Certificat expiré ; 307 visible seulement sans contrôle TLS | Certificat valide ; redirection permanente ; page finale 200 |
| Liens internes | Deux liens publics testés vers 404 | Aucun lien interne vers ces deux 404 |
| Placeholders | 11 pages publiques, 19 occurrences dans le code | Aucun placeholder visible ; contenu validé |
| Routes statiques | 133/133 répondent 200, canonical correcte, JSON-LD analysable | Conserver 133/133 et contrôler les nouvelles routes |
| Article CMS connu | 200, hors sitemap, SEO basé sur slug | Article publié dans le sitemap, SEO lié au contenu, un H1 |
| Sitemap `lastmod` | Même date de requête pour 133 URL | Dates vérifiées ou absence de `lastmod` |
| PageSpeed accueil | Laboratoire du 16 octobre : 75/100 ordinateur, 64/100 mobile ; ~27 000 Kio | Refaire plusieurs tests comparables ; poids et LCP nettement réduits, sans régression visuelle |
| Données terrain | CrUX : données insuffisantes | Suivre LCP, INP et CLS si des données deviennent disponibles |
| Search Console / Bing | Aucun accès pendant l'audit | Vérifier indexation, requêtes, sitemap, couverture et erreurs après déploiement |

Pour les Core Web Vitals, la [cible publiée par Google](https://web.dev/articles/vitals) est le 75e percentile de vrais visiteurs : LCP au plus 2,5 s, INP au plus 200 ms et CLS au plus 0,1. Ces valeurs ne sont **pas** des résultats mesurés pour ce site aujourd'hui. Le test Lighthouse unique sert à choisir les premières images à examiner ; il ne suffit pas pour juger la vitesse réelle.

## 5. Décisions à valider avant toute implémentation

1. **Contenu médical :** le centre confirme le nom, les profils, les qualifications, les dates de relecture et les sources utilisables.
2. **Copies exactes :** l'équipe choisit l'URL principale de chaque paire après examen du besoin patient. Les six paires seulement proches demandent une décision séparée.
3. **Images médicales :** un responsable vérifie que la compression et les recadrages gardent les détails utiles.
4. **Données de recherche :** si Search Console ou Bing Webmaster Tools deviennent accessibles, leurs chiffres servent à ordonner les pages à réécrire. Aucune position ou demande de recherche n'est inventée ici.

Cette proposition décrit les changements et leur contrôle. Elle ne modifie pas le site.
