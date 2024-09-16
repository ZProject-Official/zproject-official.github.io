---
sidebar_position: 4
---

# Bouton Lien

Les boutons lien dans **zUI** sont des éléments interactifs qui redirigent les utilisateurs vers une URL lorsqu'ils sont cliqués. Ils sont utiles pour ajouter des liens externes ou des pages web à vos menus. Vous pouvez ajouter des boutons lien à vos menus en utilisant la fonction `zUI:AddLinkButton`. Voici comment les créer et les personnaliser.

## Fonction `AddLinkButton`

La syntaxe pour ajouter un bouton lien est la suivante :

```lua
zUI:AddLinkButton(Title, Description, Styles, Link)
```

### Paramètres

- **Title** _[string]_ : Le texte qui s'affiche sur le bouton. C'est le titre du bouton.
- **Description** _[string]_ : (Optionnel) Une brève description ou un sous-titre pour le bouton, affiché en dessous du titre.
- **Styles** _[table]_ : Un tableau pour personnaliser l'apparence du bouton.
- **Link** _[string]_ : L'URL vers laquelle le bouton doit rediriger lorsqu'il est cliqué.

### Exemple de Création de Bouton Lien

Voici un exemple illustrant la création d'un bouton lien avec **zUI** :

```lua
Menu:SetItems(function(Items)
    Items:AddLinkButton(
        "Visiter notre site", -- Title
        "Cliquez ici pour accéder à notre site web", -- Description
        { Color = "#00aaff" }, -- Styles
        "https://www.example.com" -- Link
    )
end)
```

### Explication

1. **Title** : "Visiter notre site" est le texte affiché sur le bouton.
2. **Description** : "Cliquez ici pour accéder à notre site web" fournit une brève description du bouton.
3. **Styles** : Propriétés de style à ajouter au bouton.
   > - **IsDisabled** _[boolean]_ : Détermine si le bouton est désactivé.
   > - **Color** _[string]_ : Définit la couleur du bouton.
4. **Link** : L'URL spécifiée dans `Link` est celle vers laquelle le bouton redirigera lorsqu'il est cliqué. Ici, il redirige vers "https://www.example.com".

### Exemple Visuel

Voici à quoi peut ressembler un bouton lien dans l'interface utilisateur de **zUI** :

![](./img/linkbutton.png)

## Résumé

Pour créer un bouton lien dans **zUI** :

1. Utilisez `zUI:AddLinkButton` pour ajouter le bouton à un menu.
2. Spécifiez le titre, la description, les styles et l'URL de redirection.
3. Le bouton redirigera automatiquement l'utilisateur vers l'URL spécifiée lorsqu'il est cliqué.

Les boutons lien sont utiles pour intégrer des ressources externes ou fournir des informations supplémentaires via des liens directs. Utilisez-les pour enrichir l'interaction de vos menus NUI avec des redirections vers des sites ou des pages web spécifiques.
