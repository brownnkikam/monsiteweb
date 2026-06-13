# Portfolio – Brown Nkikam Kwanjoh
Site portfolio d'Architecte Enterprise IT. HTML/CSS/JS pur, aucune dépendance, déployable sur n'importe quel serveur.

## Structure des fichiers

```
portfolio/
├── index.html          ← Point d'entrée unique (SPA)
├── css/
│   └── style.css       ← Tous les styles
├── js/
│   └── app.js          ← Routeur SPA + interactions
├── .htaccess           ← Config Apache (SPA routing)
├── nginx.conf          ← Config Nginx (SPA routing)
├── _redirects          ← Config Netlify (SPA routing)
└── README.md
```

## Déploiement

### Option 1 — Netlify (recommandé, gratuit)
1. Zipper le dossier `portfolio/`
2. Aller sur [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
3. Glisser-déposer le zip → C'est en ligne !
> Le fichier `_redirects` gère automatiquement le routage SPA.

### Option 2 — Serveur Apache (mutualisé / VPS)
1. Uploader tous les fichiers dans `public_html/` ou `www/`
2. Le fichier `.htaccess` est déjà configuré pour le routage SPA
3. Vérifier que `mod_rewrite` est activé sur le serveur

### Option 3 — Serveur Nginx (VPS)
1. Uploader les fichiers dans `/var/www/portfolio/`
2. Copier le contenu de `nginx.conf` dans votre bloc `server {}`
3. Recharger Nginx : `sudo nginx -s reload`

### Option 4 — GitHub Pages
1. Créer un repo GitHub et y pousser les fichiers
2. Settings → Pages → Source: main branch
3. ⚠️ Le routage SPA ne fonctionne pas nativement sur GitHub Pages.
   Solution : renommer `index.html` en `404.html` (workaround courant)

### Option 5 — Vercel
1. `npm i -g vercel` puis `vercel` dans le dossier
2. Ou connecter le repo GitHub directement sur vercel.com

## Personnalisation
Toutes les données (nom, email, téléphone, expériences) sont dans `index.html`.
Les couleurs sont dans les variables CSS au début de `css/style.css` (`:root { ... }`).

## Aucune dépendance
- Pas de framework JS (React, Vue…)
- Pas de build nécessaire
- Seule dépendance externe : Google Fonts Inter (CDN)
