---
sidebar_position: 1
---

# Séparateur

Les séparateurs dans **zUI** sont des éléments visuels utilisés pour diviser et organiser les éléments dans un menu. Ils aident à améliorer la lisibilité et à structurer l'interface utilisateur. Vous pouvez ajouter des séparateurs à vos menus en utilisant la fonction `zUI:AddSeparator`. Voici comment les créer et les personnaliser.

## Fonction `AddSeparator`

La syntaxe pour ajouter un séparateur est la suivante :

```lua
zUI:AddSeparator(Title, Position)
```

### Paramètres

- **Title** _[string]_ : Le texte qui s'affiche sur le séparateur. C'est le titre du séparateur.
- **Position** _[string]_ : (Optionnel) La position du séparateur dans le menu. Peut être `"left"`, `"center"`, ou `"right"`. Par défaut, il est centré.

### Exemple de Création de Séparateur

Voici un exemple illustrant la création d'un séparateur avec **zUI** :

```lua
Menu:SetItems(function(Items)
    Items:AddSeparator(
        "Séparateur de Section", -- Title
        "center" -- Position (facultatif, ici centré)
    )
end)
```

### Explication

1. **Title** : "Séparateur de Section" est le texte affiché sur le séparateur. Il aide à identifier ou à nommer des sections dans le menu.
2. **Position** : La position du séparateur dans le menu. Les options disponibles sont :
   > - `"left"` : Positionne le séparateur à gauche.
   > - `"center"` : Positionne le séparateur au centre (valeur par défaut).
   > - `"right"` : Positionne le séparateur à droite.

### Exemple Visuel

Voici à quoi peut ressembler un séparateur dans l'interface utilisateur de **zUI** :

![](./img/separator.png)

## Résumé

Pour créer un séparateur dans **zUI** :

1. Utilisez `zUI:AddSeparator` pour ajouter le séparateur à un menu.
2. Spécifiez le titre et, si désiré, la position du séparateur.

Les séparateurs sont essentiels pour organiser les éléments dans vos menus NUI et améliorer l'expérience utilisateur en rendant les menus plus clairs et structurés.
