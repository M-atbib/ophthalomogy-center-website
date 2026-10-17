# Suivi SEO local et national — Cabinet du Dr Amal Alouan

## Objectif

Priorité aux patients de Salé et Rabat. Les pages médicales existantes peuvent aussi répondre aux recherches faites ailleurs au Maroc. Aucune position dans Google ou Bing n'est garantie.

## Changements préparés dans le site

- Une seule source définit le nom, l'adresse, les téléphones et l'e-mail affichés sur le site et dans les données structurées : `src/lib/cabinet.ts`.
- L'accueil et la page contact situent le cabinet à Salé, près de Rabat. La page contact donne les moyens de prendre rendez-vous et l'itinéraire.
- Les dossiers médicaux mènent vers les conseils et la page contact. La page des conseils relie des dossiers existants. Cela aide à découvrir les articles sans créer de pages de ville artificielles.
- Les URL canoniques, le sitemap et le rendu serveur déjà présents doivent être conservés.

## Fiches locales à traiter avec le propriétaire des comptes

1. **Google Business Profile** : vérifier que la fiche du cabinet est revendiquée, que son nom officiel, sa catégorie, son adresse, ses deux téléphones, son site et ses horaires réels sont exacts. Ajouter uniquement des activités confirmées et des photos réelles du cabinet. Comparer l'adresse caractère par caractère avec `src/lib/cabinet.ts` avant de modifier la fiche ou le site.
2. **Bing Places for Business** : revendiquer ou contrôler la fiche du même cabinet. Utiliser les mêmes informations vérifiées. Vérifier le lien vers le site et la position sur la carte.
3. **Google Search Console et Bing Webmaster Tools** : confirmer la propriété du domaine choisi, soumettre le sitemap après déploiement autorisé, puis relever les pages indexées, les requêtes et les clics. Ne pas supposer qu'une page est indexée parce qu'elle est dans le sitemap.
4. **Avis** : confirmer sur la fiche officielle la note, le nombre d'avis et l'URL exacte avant toute communication nouvelle. Ne pas ajouter de note ou d'avis aux données structurées. Faire relire le texte public selon les règles de communication médicale.

Ces actions exigent l'accès aux comptes concernés et ne sont pas effectuées dans ce dépôt.

## Développement national fondé sur des données

- Relever dans Search Console et Bing Webmaster Tools les requêtes et pages déjà vues au Maroc : cataracte, glaucome, rétine, sécheresse oculaire et autres sujets réellement couverts par les pages actuelles.
- Classer les pages selon leur intention : information médicale, conseil pratique, présentation du cabinet ou prise de rendez-vous. Améliorer d'abord les pages utiles qui ont des impressions ou des questions récurrentes de patients.
- Faire vérifier par le Dr Amal les faits médicaux, les qualifications, les activités exercées et les dates de relecture avant d'ajouter une signature, une activité ou une nouvelle affirmation.
- Examiner les contenus proches avant toute fusion ou redirection. Ne créer une nouvelle page que si elle répond à un besoin distinct et vérifié. Ne pas multiplier les pages « ophtalmologue + ville ».
- Comparer les résultats avant et après sur une période suffisante : impressions, clics, requêtes, pages indexées et demandes de rendez-vous. Noter les dates et distinguer les données des hypothèses.

## Points à valider

- L'orthographe officielle de l'adresse et le numéro principal du cabinet.
- La catégorie, les horaires, les activités et les liens exacts des fiches Google et Bing.
- Les faits biographiques et médicaux à publier. Aucun diplôme, auteur ou service nouveau ne doit être déduit des anciens articles.
- Les chiffres et le lien des avis Google déjà affichés dans la carte de présentation.

## Sources officielles

- [Google Business Profile : facteurs et entretien de la fiche locale](https://support.google.com/business/answer/7091?hl=fr)
- [Google Search Central : contenu utile et fiable](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr)
- [Bing Places for Business : informations de la fiche](https://www.bing.com/forbusiness/help/modernExperience?setlang=fr)
- [Bing Webmaster Tools : indexation](https://www.bing.com/webmasters/help/why-is-my-site-not-in-the-index-2141dfab)
