---
sidebar_position: 2
---

# Installation

**zUI** est une bibliothèque avancée qui s'intègre directement dans une resource existante sur votre serveur FiveM. Suivez les étapes ci-dessous pour l'installer correctement et vous assurer qu'elle fonctionne de manière optimale.

## 1. Télécharger zUI

Vous avez deux options pour télécharger **zUI** :

- **Via GitHub Releases** : Allez sur la page des [Releases GitHub](https://github.com/ZProject-Official/zUI/releases) et téléchargez la dernière version stable.
- **Via le Répertoire GitHub** : Téléchargez directement le code source sous forme de `.zip` ou clonez le répertoire avec :

```bash
git clone https://github.com/ZProject-Official/zUI.git
```

**Si vous avez téléchargé le `.zip` du dépôt**

> Si vous avez téléchargé le `.zip` du dépôt, vous devrez installer [Node.js](https://nodejs.org) pour pouvoir compiler la partie **React** de la bibliothèque.

## 2. Ajouter zUI à votre Resource

Une fois **zUI** téléchargé, déplacez-le dans le dossier de votre resource sur votre serveur **FiveM**. Assurez-vous que la structure des fichiers est correctement organisée.

Ensuite, vous devrez adapter le fichier `fxmanifest.lua` de votre resource pour inclure **zUI**. Voici un exemple :

```lua
fx_version 'cerulean'
game 'gta5'

-- Assurez-vous que zUI est chargé avant votre script
ui_page "web/build/index.html"

files {
    "theme.json",
    "web/build/index.html",
    "web/build/**/*"
}

client_scripts {
    -- Fichiers zUI
    "init.lua",
    "menu.lua",
    "methods/*.lua",
    "functions/*.lua",
    "items/*.lua",
    -- Vos fichiers
    "script.lua"
}

server_scripts {
    -- Gestion de la version
    "version.lua",
}
```

Cette configuration garantit que **zUI** est chargé avant votre script principal, afin de permettre son utilisation dans vos menus.

## 3. Installer les Dépendances

Avant de compiler la partie **React**, vous devez installer les dépendances nécessaires dans le répertoire **web**. Voici les étapes :

```bash
cd zUI/web
npm install
```

Cette commande installera toutes les dépendances nécessaires au fonctionnement de la partie **React** de **zUI**.

## 4. Compiler la Partie React

Après avoir installé les dépendances, vous devez compiler l'interface utilisateur basée sur **React**. Utilisez la commande suivante pour compiler le projet :

```bash
npm run build
```

Cela créera les fichiers compilés dans le dossier `web/build`, qui seront utilisés pour afficher les menus NUI dans **FiveM**.

## 5. Lancer la Resource

Une fois le build terminé et le **fxmanifest** correctement configuré, vous pouvez démarrer la resource sur votre serveur. Utilisez la commande suivante dans la console du serveur :

```bash
ensure yourScript
```

Cela lancera **votre script avec zUI** et vous pourrez commencer à l'utiliser dans vos scripts Lua.

---

## 6. Résumé des Étapes d'Installation

1. **Téléchargez** la release GitHub ou le `.zip` du répertoire.
2. **Déplacez** le dossier dans votre resource sur le serveur FiveM.
3. **Installez** les dépendances dans le répertoire `web` avec `npm install`.
4. **Compilez** la partie **React** avec `npm run build`.
5. **Ajoutez** les références à **zUI** dans votre `fxmanifest.lua`.
6. **Lancez** la resource avec `ensure zUI`.

---

## 7. En Cas de Problème

Si vous rencontrez des problèmes lors de l'installation ou de la configuration, plusieurs solutions s'offrent à vous :

- **Rejoignez notre serveur Discord** pour obtenir de l'aide : [Discord Support](https://discord.gg/zproject).
- **Regardez notre vidéo d'installation** pour un guide complet et visuel sur la procédure à suivre : [Voir le guide vidéo](https://www.youtube.com/lien_vers_la_video).

---

Vous êtes maintenant prêt à utiliser **zUI** pour créer des menus NUI élégants et optimisés sur votre serveur FiveM !
