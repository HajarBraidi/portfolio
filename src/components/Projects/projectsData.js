// ====== MES PROJETS ======
// Les captures de chaque projet sont dans src/Assets/Projects/<dossier>/
// (1.jpg = image de couverture). Pour ajouter une capture, dépose
// simplement un nouveau fichier (ex. 7.jpg) dans le dossier du projet.
// Les rapports / présentations sont dans public/docs/.

const ctx = require.context("../../Assets/Projects", true, /\.(jpe?g|png)$/);

function imagesOf(folder) {
  return ctx
    .keys()
    .filter((k) => k.startsWith(`./${folder}/`))
    .sort((a, b) => parseInt(a.split("/")[2]) - parseInt(b.split("/")[2]))
    .map((k) => ctx(k));
}

const projects = [
  {
    folder: "snrt",
    title: "SNRT Intelligent Archive",
    subtitle: "Système RAG multimodal de recherche documentaire et audio",
    context: "Stage · SNRT · 2026",
    description:
      "Plateforme de recherche intelligente dans les archives audio et documentaires de la SNRT (arabe, français). Pipeline d'ingestion automatique : extraction de texte (Apache Tika), transcription Whisper, classification parole/musique (YAMNet) et enrichissement par LLM local (Ollama). Double indexation plein texte (Solr) et sémantique (ChromaDB), assistant conversationnel RAG, tableau de bord et supervision de 12 microservices. Tout s'exécute en local pour garantir la confidentialité des données.",
    tech: ["Python", "FastAPI", "React", "MongoDB", "Solr", "ChromaDB", "Ollama", "Whisper", "Docker", "CI/CD"],
    ghLink: "https://github.com/HajarBraidi/projet-rag-stage-SNRT",
    docs: [{ type: "report", href: "/docs/snrt-rapport.pdf" }],
  },
  {
    folder: "retino",
    title: "Détection de Rétinopathie Diabétique",
    subtitle: "Deep Learning · classification ordinale d'images de fond d'œil",
    context: "Projet Applied AI · ENSIAS",
    description:
      "Classification automatique de la sévérité de la rétinopathie diabétique (5 grades) sur le dataset APTOS 2019. Approche ordinale multilabel, comparaison de 4 CNN pré-entraînés (DenseNet121, EfficientNetB3, InceptionV3, ResNet50), optimisation des seuils, Test-Time Augmentation et ensemble pondéré. Meilleur QWK : 0,88 et AUC moyenne : 0,91. Interface de diagnostic développée avec Gradio.",
    tech: ["Python", "TensorFlow", "Keras", "Transfer Learning", "Gradio"],
    ghLink: "https://github.com/HajarBraidi/retinopathie-diabetique",
    docs: [
      { type: "report", href: "/docs/retinopathie-rapport.pdf" },
      { type: "slides", href: "/docs/retinopathie-presentation.pdf" },
    ],
  },
  {
    folder: "observ",
    title: "Observabilité DevOps pour les systèmes de santé",
    subtitle: "Experimental Study on the Impact of Observability in DevOps Pipelines",
    context: "Projet de groupe · ENSIAS",
    description:
      "Étude expérimentale sur un serveur de santé HAPI FHIR (Spring Boot) comparant 4 niveaux d'observabilité : sans monitoring, logs, logs + métriques, observabilité complète. Des incidents sont simulés avec k6 (erreurs HTTP 500, latence élevée, disque plein) et mesurés par MTTD et MTTR. Exemple : un disque plein est détecté en 5,4 s avec l'observabilité complète, contre 12,2 s sans monitoring.",
    tech: ["Docker", "Spring Boot", "HAPI FHIR", "Prometheus", "Grafana", "Loki", "Tempo", "k6"],
    ghLink: "https://github.com/HajarBraidi/Devops-hapi-fhir-jpaserver",
    docs: [
      { type: "slides", href: "/docs/observabilite-presentation.pdf" },
      { type: "guide", href: "/docs/observabilite-guide.pdf" },
    ],
  },
  {
    folder: "ragnews",
    title: "News RAG Maroc",
    subtitle: "Pipeline RAG temps réel avec data streaming",
    context: "Projet en binôme · ENSIAS",
    description:
      "Assistant qui répond aux questions sur l'actualité marocaine en citant ses sources. Collecte RSS toutes les 5 minutes (Le Matin, Aujourd'hui le Maroc, La Nouvelle Tribune), streaming via Kafka, stockage PostgreSQL + pgvector, embeddings multilingues (multilingual-e5-small) et génération avec Gemma 3 via Ollama. Les réponses arrivent en streaming (SSE). Le tout est conteneurisé avec Docker.",
    tech: ["Kafka", "PostgreSQL", "pgvector", "FastAPI", "Ollama", "Docker"],
    ghLink: "https://github.com/Ayataaki/rss-rag",
    docs: [{ type: "slides", href: "/docs/rag-streaming-presentation.pdf" }],
  },
  {
    folder: "maalem",
    title: "Maalem",
    subtitle: "Application mobile de mise en relation artisans / particuliers",
    context: "PFA 2A · ENSIAS",
    description:
      "Application Android qui met en relation artisans et particuliers au Maroc : carte des artisans, filtres par spécialité et par ville, demandes de service avec photo, offres, messagerie et avis. Un modèle d'IA embarqué (MobileNetV2 sous TensorFlow Lite) reconnaît le type de panne à partir d'une photo : 96,1 % d'exactitude pour un modèle de moins de 2,5 Mo.",
    tech: ["Kotlin", "Android", "Firebase", "TensorFlow Lite", "MobileNetV2"],
    ghLink: "https://github.com/HajarBraidi/maalem",
    docs: [
      { type: "report", href: "/docs/maalem-rapport.pdf" },
      { type: "slides", href: "/docs/maalem-presentation.pdf" },
    ],
  },
  {
    folder: "urbalert",
    title: "UrbAlert",
    subtitle: "Plateforme de signalement et de suivi des problèmes urbains",
    context: "Projet J2EE · ENSIAS",
    description:
      "Application web de signalement des problèmes urbains (déchets, éclairage, voirie, espaces verts). Les citoyens signalent un problème avec photo et suivent son traitement, et les agents municipaux gèrent les statuts depuis un tableau de bord. Architecture en couches (DAO, Servlets/JSP, pattern Singleton), base MySQL conteneurisée avec Docker et schéma versionné avec Flyway.",
    tech: ["Java", "Jakarta EE", "JSP / Servlets", "MySQL", "Flyway", "Docker", "Bootstrap"],
    ghLink:
      "https://github.com/HajarBraidi/Plateforme-de-signalement-et-suivi-des-probl-mes-urbains",
    docs: [],
  },
  {
    folder: "ritafer",
    title: "RitaFer Interactive",
    subtitle: "Plateforme de vente et de gestion de matériaux de construction",
    context: "Stage 1A · RitaFer · 2025",
    description:
      "Système web qui relie clients, fournisseurs et administrateur pour la vente de matériaux de construction : catalogue par catégories, commandes, génération de bons de commande en PDF, statistiques de ventes pour les fournisseurs, gestion des utilisateurs et des produits côté administrateur.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "jsPDF"],
    ghLink: "https://github.com/HajarBraidi/RitaFer",
    docs: [
      { type: "report", href: "/docs/ritafer-rapport.pdf" },
      { type: "slides", href: "/docs/ritafer-presentation.pdf" },
    ],
  },
].map((p) => ({ ...p, images: imagesOf(p.folder) }));

export default projects;
