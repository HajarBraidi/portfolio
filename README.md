# Portfolio - Hajar Braidi

Code source de mon portfolio personnel, en ligne sur [hajar-braidi.vercel.app](https://hajar-braidi.vercel.app/).

Élève ingénieure en Data and Software Sciences à l'ENSIAS (Rabat), je présente sur ce site mon parcours, mes compétences, mes projets et mon CV.

## Contenu du site

- **Accueil** : présentation rapide
- **À propos** : parcours, compétences techniques et outils utilisés, activité GitHub
- **Projets** : fiches détaillées avec description, technologies, captures d'écran, lien GitHub, rapports et présentations en PDF
- **CV** : affichage et téléchargement du CV en PDF

Projets présentés : SNRT Intelligent Archive, détection de la rétinopathie diabétique, observabilité DevOps pour les systèmes de santé, News RAG Maroc, Maalem, UrbAlert et RitaFer Interactive.

## Technologies

- React 17
- React Router
- React Bootstrap et Bootstrap 5
- react-pdf (affichage du CV)
- Déploiement sur Vercel

## Ajouter ou modifier un projet

- Les informations des projets se trouvent dans `src/components/Projects/projectsData.js`.
- Les captures d'écran vont dans `src/Assets/Projects/<dossier-du-projet>/` (le fichier `1.jpg` sert d'image de couverture).
- Les rapports et présentations en PDF vont dans `public/docs/`.

## Lancer le projet en local

Prérequis : Node.js et npm.

```bash
git clone https://github.com/HajarBraidi/portfolio.git
cd portfolio
npm install
npm start
```

Le site est ensuite disponible sur `http://localhost:3000`.

Pour générer la version de production :

```bash
npm run build
```

## Contact

- Email : hajarbraidi89@gmail.com
- LinkedIn : [linkedin.com/in/hajar-braidi](https://www.linkedin.com/in/hajar-braidi/)
- GitHub : [github.com/HajarBraidi](https://github.com/HajarBraidi)

## Crédits

Ce site est construit à partir du modèle open source de [Soumyajit Behera](https://github.com/soumyajit4419/Portfolio), adapté et personnalisé avec mon propre contenu.
