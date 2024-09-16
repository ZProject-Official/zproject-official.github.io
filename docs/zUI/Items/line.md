---
sidebar_position: 2
---

# Ligne

Les lignes dans **zUI** sont des éléments visuels utilisés pour ajouter des séparations horizontales dans vos menus. Elles peuvent être utilisées pour séparer visuellement les différentes sections ou pour améliorer l'organisation de l'interface utilisateur. Vous pouvez ajouter des lignes à vos menus en utilisant la fonction `zUI:AddLine`. Voici comment les créer et les personnaliser.

## Fonction `AddLine`

La syntaxe pour ajouter une ligne est la suivante :

```lua
zUI:AddLine(Colors)
```

### Paramètres

- **Colors** _[table | nil]_ : (Optionnel) Un tableau de couleurs pour personnaliser l'apparence de la ligne. Si aucune couleur n'est spécifiée, la ligne utilise les couleurs par défaut.

### Exemple de Création de Ligne

Voici un exemple illustrant la création d'une ligne avec **zUI** :

```lua
Menu:SetItems(function(Items)
    Items:AddLine(
        { "#ff0000", "#00ff00", "#0000ff" } -- Colors (couleurs de la ligne)
    )
end)
```

### Explication

1. **Colors** : Un tableau de couleurs pour personnaliser l'apparence de la ligne. Chaque couleur est définie en format hexadécimal.
   > - Exemple : `{ "#ff0000", "#00ff00", "#0000ff" }` pour une ligne avec des dégradés de rouge, vert et bleu.

### Exemple Visuel

Voici à quoi peut ressembler une ligne dans l'interface utilisateur de **zUI** :

![](./img/line.png)

## Résumé

Pour créer une ligne dans **zUI** :

1. Utilisez `zUI:AddLine` pour ajouter la ligne à un menu.
2. Spécifiez les couleurs souhaitées pour personnaliser l'apparence de la ligne.

Les lignes sont utiles pour améliorer la lisibilité de vos menus et offrir une séparation claire entre les différents éléments, rendant l'interface plus organisée et attrayante.
