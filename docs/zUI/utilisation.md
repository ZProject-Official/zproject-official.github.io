---
sidebar_position: 3
---

# Utilisation

Dans cette section, nous allons explorer comment utiliser **zUI** pour créer et gérer des menus NUI dans **FiveM**. Vous apprendrez à créer des menus et des sous-menus, à ajouter des éléments, et à gérer leur visibilité.

## Création d'un Menu

Pour créer un menu avec **zUI**, utilisez la fonction `zUI.CreateMenu`. Voici la syntaxe générale :

```lua
local Menu = zUI.CreateMenu(Title, Subtitle, Banner, Key, Description)
```

### Paramètres

- **Title** _[string]_ : (Optionnel) Le titre du menu qui s'affiche en haut.
- **Subtitle** _[string]_ : (Optionnel) Le sous-titre du menu, affiché juste en dessous du titre.
- **Banner** _[string]_ : (Optionnel) Une URL vers une image qui sera utilisée comme bannière en haut du menu.
- **Key** _[string]_ : (Optionnel) La touche qui, si définie, permettra d'ouvrir le menu.
- **Description** _[string]_ : (Optionnel) Une description textuelle du menu qui peut être affichée à des fins d'information.

#### Exemple

```lua
local Menu = zUI.CreateMenu("Mon Menu", "Sous-Titre", "https://example.com/banner.png", "F1", "Description de mon menu")
```

## Création d'un Sous-Menu

Pour créer un sous-menu, utilisez la fonction `zUI.CreateSubMenu`. Voici la syntaxe :

```lua
local SubMenu = zUI.CreateSubMenu(Parent, Title, Subtitle, Banner)
```

### Paramètres

- **Parent** _[zUI Instance]_ : Le menu principal auquel ce sous-menu sera rattaché.
- **Title** _[string]_ : (Optionnel) Le titre du sous-menu.
- **Subtitle** _[string]_ : (Optionnel) Le sous-titre du sous-menu.
- **Banner** _[string]_ : (Optionnel) Une URL vers une image pour la bannière du sous-menu.

#### Exemple

```lua
local SubMenu = zUI.CreateSubMenu(Menu, "Mon Sous-Menu", "Sous-Titre", "https://example.com/submenu_banner.png")
```

## Ajout d'Items au Menu

Pour ajouter des éléments à votre menu, utilisez la méthode `SetItems`. Vous devez définir une fonction qui spécifie les éléments à ajouter au menu. Voici comment vous pouvez le faire :

```lua
Menu:SetItems(function(Items)
    Items:AddSeparator("Voici comment ajouter un item :)")
end)
```

### Types d'Items

- **Séparateur** `AddSeparator` : Ajoute un séparateur visuel.
- **Ligne** `AddLine` : Ajoute une ligne colorée.
- **Bouton** `AddButton` : Ajoute un bouton cliquable.
- **Bouton Lien** `AddLinkButton` : Ajoute un bouton qui redirige vers un certain lien.
- **Checkbox** `AddCheckbox` : Ajoute une checkbox que l'utilisateur peut cocher ou décocher.
- **Liste** `AddList` : Ajoute une liste déroulante avec des options.

## Gestion de la Visibilité du Menu

Si vous avez défini une touche (`Key`) lors de la création du menu, vous pouvez simplement appuyer sur cette touche pour ouvrir ou fermer le menu.

Si vous n'avez pas défini de touche, vous pouvez contrôler la visibilité du menu en utilisant la méthode suivante :

```lua
Menu:SetVisible(not Menu:IsVisible())
```

Cette commande permet d'inverser l'état actuel de visibilité du menu : si le menu est ouvert, il sera fermé, et inversement.

---

Avec ces informations, vous êtes maintenant prêt à créer et gérer des menus interactifs dans **FiveM** en utilisant **zUI**. N'hésitez pas à explorer toutes les fonctionnalités offertes pour personnaliser vos menus selon vos besoins.
