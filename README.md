# Kotech Engineering — Site web

Site vitrine pour **Kotech Engineering**, cabinet de conseil IA.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- CSS du prototype Claude Design (sans Tailwind)
- Déploiement cible : [Vercel](https://vercel.com/)

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Déploiement Vercel

1. Pousser le repo sur GitHub
2. Importer le projet dans Vercel
3. Framework preset : **Next.js** (auto-détecté)
4. Déployer

Ou via CLI :

```bash
npx vercel
```

## Contenu source

Le design provient du handoff `site-kotech/` (export Claude Design). Les assets logo sont dans `public/assets/`.

## Prochaines étapes possibles

- Pages légales (mentions, RGPD)
- Blog / publications réelles
- Formulaire de contact (Resend, Formspree…)
- Photo fondateur
- Lien LinkedIn réel
