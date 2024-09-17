---
sidebar_position: 2
---

# AlertInput

La fonction **AlertInput** est utile lorsque vous devez demander une confirmation au joueur.

## Fonction `AlertInput`

La syntaxe pour utiliser la fonction d'alerte est la suivante :

```lua
zUI.AlertInput(Title, Subtitle, Description)
```

Cette fonction renvoie un booléen.

### Paramètres

- **Title** _[string]_ : Le titre de l'alerte.
- **Subtitle** _[string]_ : Le sous-titre de l'alerte.
- **Description** _[string]_ : La description ou question à afficher à l'utilisateur.

### Exemple d'utilisation

Voici un exemple d'utilisation de la fonction **AlertInput** :

```lua
    Items:AddButton("Titre", "Description", {}, function(onSelected)
        if onSelected then
            local confirmation = zUI.AlertInput("Question", "Bannissement", "Êtes-vous sûr de vouloir bannir John ?")
            if confirmation then
                print("John Doe a été banni !")
            end
        end
    end)
```

### Aperçu de l'exemple

![](./img/alertInput.png)

### Résumé

Pour utiliser l'alerte dans **zUI** :

1. Utilisez `zUI.AlertInput` pour afficher l'interface d'alerte.
2. Spécifiez le titre, le sous-titre et la description.
