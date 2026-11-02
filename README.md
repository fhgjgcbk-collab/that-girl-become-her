# THAT GIRL — Become Her (starter 0.1)

Première base de l'interface : accueil, navigation mobile, humeur, défi du jour et aperçu des rubriques.

## Ce qui fonctionne déjà
- Interface responsive pensée d'abord pour téléphone.
- Navigation entre les cinq espaces.
- Sélection d'humeur (temporaire).
- Défi du jour que l'on peut marquer comme terminé (temporaire).
- Programme 30 jours présenté en quatre phases.

## Ce qui n'est PAS encore connecté
Aucun compte, aucune base de données, aucune sauvegarde de journal et aucune coach IA. Les interactions sont une démonstration locale et se réinitialisent au rechargement. Ne saisis pas d'informations intimes dans cette maquette.

## Déploiement gratuit pour tester sur iPhone
1. Sur iPhone, ouvre GitHub dans Safari et crée un compte si nécessaire.
2. Crée un nouveau dépôt public nommé `that-girl-become-her`.
3. Décompresse cette archive dans l'app Fichiers. Dans le dépôt GitHub, utilise **Add file > Upload files** et ajoute les dossiers/fichiers contenus dans le projet (pas le dossier ZIP).
4. Sur Vercel, crée un compte avec GitHub, importe le dépôt et garde les réglages Next.js par défaut.
5. Lance le déploiement. Vercel fournit une adresse `https://...vercel.app`.
6. Ouvre cette adresse sur ton iPhone. Dans Safari : bouton Partager > Sur l'écran d'accueil.

Tu peux aussi faire le déploiement depuis un ordinateur si l'import de nombreux fichiers est plus confortable. Les offres gratuites et leurs limites peuvent évoluer.

## En local (si tu utilises ton ThinkPad)
```bash
npm install
npm run dev
```
Puis ouvre http://localhost:3000.

## Prochaine étape
Après ton premier test visuel, nous corrigerons ensemble l'interface avant d'ajouter l'authentification et la base Supabase.
