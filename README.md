# Transformeur IA

## Structure du projet

```
/
├── index.html          ← point d'entrée HTML (optimisé)
├── vite.config.ts      ← config Vite avec chunk splitting
├── vercel.json         ← cache headers Vercel (1 an pour les assets)
├── package.json
├── tsconfig.json
├── .env.example
└── src/
    ├── main.tsx        ← bootstrap React
    ├── App.tsx         ← composant principal (optimisé)
    └── index.css       ← styles globaux (optimisé)
```

## Déploiement local

**Prérequis :** Node.js 18+

```bash
npm install
npm run dev
```

## Déploiement sur Vercel

1. Push ce repo sur GitHub
2. Importer le repo sur vercel.com
3. Framework preset : **Vite**
4. Build command : `npm run build`
5. Output directory : `dist`
6. (Optionnel) Ajouter `GEMINI_API_KEY` dans les variables d'environnement Vercel

Le fichier `vercel.json` gère automatiquement les cache headers — rien d'autre à configurer.
