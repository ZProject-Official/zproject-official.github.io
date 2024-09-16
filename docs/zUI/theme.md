---
sidebar_position: 5
---

# Thème

Le fichier `theme.json` vous permet de personnaliser l'apparence de **zUI** en ajustant divers paramètres du menu. Vous pouvez modifier la position, les couleurs, les styles et plus encore pour adapter l'interface à vos besoins spécifiques.

## Exemple de Fichier `theme.json`

Bien entendu ! Voici la section mise à jour avec les types de paramètres et les différentes possibilités pour chaque option :

---

# Theme

Le fichier `theme.json` vous permet de personnaliser l'apparence de la bibliothèque **zUI** en ajustant divers paramètres. Voici les options disponibles et leurs significations :

## Paramètres du `theme.json`

### Paramètres de Position

- **position** _[string]_ : Détermine la position du menu sur l'écran.
  - `"left"` : Positionne le menu à gauche de l'écran.
  - `"right"` : Positionne le menu à droite de l'écran.

### Paramètres de Couleur

- **colors** _[object]_ : Définir les couleurs de fond et secondaires du menu.
  - **background** _[string]_ : Couleur de fond du menu. Utilisez une couleur.
  - **secondary** _[string]_ : Couleur secondaire du menu. Utilisez une couleur.

### Paramètres de Texte

- **stringUpper** _[boolean]_ : Active ou désactive les lettres majuscules dans le texte du menu.

  - `true` : Texte en majuscules.
  - `false` : Texte en minuscules.

- **counter** _[boolean]_ : Affiche ou non un compteur d'items dans le menu.

  - `true` : Affiche le compteur.
  - `false` : Ne pas afficher le compteur.

- **banner** _[string]_ : Couleur ou lien d'une image pour la bannière du menu.

### Indicateur de Touches

- **controlsIndicator** _[boolean]_ : Affiche ou non un indicateur de contrôle.
  - `true` : Affiche l'indicateur.
  - `false` : Ne pas afficher l'indicateur.

### Paramètres de Coins

- **corners** _[object]_ : Paramètres pour les coins du menu.
  - **rounded** _[boolean]_ : Active ou désactive les coins arrondis.
    - `true` : Coins arrondis.
    - `false` : Coins non arrondis.
  - **radius** _[string]_ : Définit le rayon des coins arrondis. Valeur entre `0` et `100` (petite valeur conseillé).

### Paramètres de Perspective

- **perspective** _[boolean]_ : Active ou désactive l'effet de perspective 3D.
  - `true` : Activer la perspective 3D.
  - `false` : Désactiver la perspective 3D.

### Paramètres des Items

- **items** _[object]_ : Paramètres spécifiques aux items du menu.
  - **defaultColor** _[string]_ : Couleur par défaut des items. Utilisez une couleur en format hexadécimal.
  - **hoverStyle** _[string]_ : Style d'affichage des items lorsqu'ils sont survolés.
    - `"complete"` : Style complet.
    - `"rod"` : Style en barre.
    - `"neon"` : Style néon.
    - `"lien"` : Lien vers une image.
  - **line** _[object]_ : Paramètres pour les lignes dans le menu.
    - **rounded** _[boolean]_ : Active ou désactive l'arrondi des lignes.
      - `true` : Lignes arrondies.
      - `false` : Lignes non arrondies.

## Exemple de `theme.json`

Voici un exemple complet de fichier `theme.json` :

```json
{
  "position": "left",
  "colors": {
    "background": "rgba(18, 18, 18, 0.5)",
    "secondary": "#121212"
  },
  "stringUpper": false,
  "counter": true,
  "banner": "#faad2c",
  "controlsIndicator": true,
  "corners": {
    "rounded": true,
    "radius": "0.5"
  },
  "perspective": true,
  "items": {
    "defaultColor": "#faad2c",
    "hoverStyle": "neon",
    "line": {
      "rounded": true
    }
  }
}
```

Ce fichier vous permet de personnaliser l'apparence de vos menus **zUI** selon vos préférences.

---

### Application du Thème

Pour appliquer ces paramètres, placez votre fichier `theme.json` dans le répertoire approprié de votre projet **zUI**. Les changements seront reflétés immédiatement dans l'interface utilisateur du menu.

## Résumé

Le fichier `theme.json` vous permet de personnaliser l'apparence de **zUI** en ajustant des éléments clés comme la couleur, la position, et les styles. Utilisez-le pour créer une interface qui correspond parfaitement à vos préférences visuelles et fonctionnelles.

## Information complémentaire

Désormais, vous pouvez **partager votre thème personnalisé** dans le salon dédié sur notre [Serveur Discord Support](https://discord.gg/zproject), permettant ainsi à d'autres utilisateurs de l'adopter. **Devenez créateur de thème et gagnez l'appréciation de la communauté** !
