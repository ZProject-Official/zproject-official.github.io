"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[6866],{2290:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=r(4848),i=r(8453);const l={sidebar_position:2},t="Installation",o={id:"zSleep/instal",title:"Installation",description:"Ce guide d'installation de zSleep s'adresse aux administrateurs de serveurs FiveM et d\xe9taille les \xe9tapes n\xe9cessaires pour installer et configurer le script selon vos besoins.",source:"@site/docs/zSleep/instal.md",sourceDirName:"zSleep",slug:"/zSleep/instal",permalink:"/docs/zSleep/instal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/zSleep/intro"}},a={},c=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"\xc9tape 1 : T\xe9l\xe9charger zSleep",id:"\xe9tape-1--t\xe9l\xe9charger-zsleep",level:3},{value:"\xc9tape 2 : Configurer la Base de Donn\xe9es",id:"\xe9tape-2--configurer-la-base-de-donn\xe9es",level:3},{value:"\xc9tape 3 : Configurer le Script",id:"\xe9tape-3--configurer-le-script",level:3},{value:"\xc9tape 4 : D\xe9marrer le Script",id:"\xe9tape-4--d\xe9marrer-le-script",level:3},{value:"\xc9tape 5 : V\xe9rifications et Tests",id:"\xe9tape-5--v\xe9rifications-et-tests",level:3},{value:"Support",id:"support",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,s.jsxs)(n.p,{children:["Ce guide d'installation de ",(0,s.jsx)(n.strong,{children:"zSleep"})," s'adresse aux administrateurs de serveurs FiveM et d\xe9taille les \xe9tapes n\xe9cessaires pour installer et configurer le script selon vos besoins."]}),"\n",(0,s.jsx)(n.h3,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Un serveur FiveM op\xe9rationnel."}),"\n",(0,s.jsx)(n.li,{children:"Acc\xe8s \xe0 la base de donn\xe9es MySQL de votre serveur."}),"\n",(0,s.jsxs)(n.li,{children:["Connaissances de base en configuration de scripts et \xe9dition de fichiers ",(0,s.jsx)(n.code,{children:".lua"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\xe9tape-1--t\xe9l\xe9charger-zsleep",children:"\xc9tape 1 : T\xe9l\xe9charger zSleep"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Obtenez le script zSleep via le lien fourni apr\xe8s votre achat."}),"\n",(0,s.jsxs)(n.li,{children:["Extrayez le fichier ",(0,s.jsx)(n.code,{children:".zip"})," t\xe9l\xe9charg\xe9."]}),"\n",(0,s.jsxs)(n.li,{children:["Copiez le dossier ",(0,s.jsx)(n.code,{children:"zSleep"})," dans le r\xe9pertoire ",(0,s.jsx)(n.code,{children:"resources"})," de votre serveur FiveM.","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f Assurez-vous qu'il d\xe9marre apr\xe8s ",(0,s.jsx)(n.strong,{children:"oxmysql"})," mais avant votre ",(0,s.jsx)(n.strong,{children:"multicharacter"})," (si applicable)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\xe9tape-2--configurer-la-base-de-donn\xe9es",children:"\xc9tape 2 : Configurer la Base de Donn\xe9es"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ouvrez le fichier ",(0,s.jsx)(n.code,{children:".sql"})," situ\xe9 dans le dossier ",(0,s.jsx)(n.code,{children:"zSleep"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Connectez-vous \xe0 votre base de donn\xe9es MySQL (via un outil comme phpMyAdmin ou tout autre client SQL)."}),"\n",(0,s.jsxs)(n.li,{children:["Importez le fichier ",(0,s.jsx)(n.code,{children:".sql"})," afin de cr\xe9er les tables n\xe9cessaires au bon fonctionnement de zSleep :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Important"})," : V\xe9rifiez que la base de donn\xe9es est bien li\xe9e \xe0 votre serveur dans le ",(0,s.jsx)(n.code,{children:"server.cfg"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\xe9tape-3--configurer-le-script",children:"\xc9tape 3 : Configurer le Script"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Acc\xe9dez au fichier ",(0,s.jsx)(n.code,{children:"config.lua"})," dans le dossier ",(0,s.jsx)(n.code,{children:"zSleep"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Adaptez la configuration selon vos besoins :"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local Config <const> = {\r\n    Framework = "esx", -- esx ou qbcore\r\n    Locale = "fr",\r\n    LogoutEvent = "",\r\n    Carry = {\r\n        isEnabled = true,\r\n        commandName = "carry",\r\n        targetEvent = "",\r\n        key = "RCONTROL",\r\n        maxRadius = 5\r\n    },\r\n    Animations = {\r\n        ["sleeping"] = {\r\n            dictionnary = "timetable@tracy@sleep@",\r\n            animation = "idle_c"\r\n        },\r\n        ["gettingUp"] = {\r\n            dictionnary = "get_up@sat_on_floor@to_stand",\r\n            animation = "getup_0"\r\n        },\r\n        ["sleepingInCar"] = {\r\n            dictionnary = "random@car_sleeping",\r\n            animation = "sleeping_idle"\r\n        }\r\n    },\r\n    Peds = {\r\n        alpha = true,\r\n        invincible = true,\r\n        collision = false\r\n    },\r\n    SendNotification = function(message)\r\n        local ESX = exports["es_extended"]:getSharedObject()\r\n        ESX.ShowNotification(message)\r\n    end\r\n}\r\n\r\n_ENV.Config = Config\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\xc9v\xe9nement de d\xe9connexion"})," : Si un script multicharacter g\xe8re les changements de personnages sans d\xe9connexion, configurez l'\xe9v\xe9nement pour que zSleep le prenne en compte."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Personnalisation de la Section ",(0,s.jsx)(n.code,{children:"Carry"})]})," : Ajustez cette section pour configurer la commande de transport, la touche associ\xe9e, le target (le cas \xe9ch\xe9ant) et le rayon selon vos pr\xe9f\xe9rences."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modifications des Animations"})," : Pour personnaliser les animations, remplacez les dictionnaires et noms d'animations dans la section ",(0,s.jsx)(n.code,{children:"Animations"}),". Assurez-vous que les animations sont adapt\xe9es au contexte du script."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R\xe9glages des Peds"})," : Modifiez les param\xe8tres de la section ",(0,s.jsx)(n.code,{children:"Peds"})," pour ajuster la visibilit\xe9, l'invincibilit\xe9 et la collision des Peds selon vos besoins, garantissant une meilleure interaction joueur-Ped."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Configuration de la Langue"})," : Modifiez la valeur de ",(0,s.jsx)(n.code,{children:"Locale"})," pour choisir la langue du script et proposer une exp\xe9rience utilisateur personnalis\xe9e."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\xe9tape-4--d\xe9marrer-le-script",children:"\xc9tape 4 : D\xe9marrer le Script"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ouvrez le fichier ",(0,s.jsx)(n.code,{children:"server.cfg"})," de votre serveur FiveM."]}),"\n",(0,s.jsx)(n.li,{children:"Ajoutez la ligne suivante pour activer zSleep :"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ensure zSleep\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Red\xe9marrez votre serveur pour appliquer les changements."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\xe9tape-5--v\xe9rifications-et-tests",children:"\xc9tape 5 : V\xe9rifications et Tests"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Connectez-vous \xe0 votre serveur FiveM."}),"\n",(0,s.jsxs)(n.li,{children:["Testez la commande ",(0,s.jsx)(n.code,{children:"/carry"})," (ou celle que vous avez configur\xe9e) pour valider le bon fonctionnement du script."]}),"\n",(0,s.jsx)(n.li,{children:"V\xe9rifiez les animations de sommeil, de r\xe9veil et les reconnexions apr\xe8s d\xe9connexion."}),"\n",(0,s.jsxs)(n.li,{children:["En cas d'erreurs ou de messages dans la console, examinez la configuration du fichier ",(0,s.jsx)(n.code,{children:"config.lua"})," et les d\xe9pendances n\xe9cessaires."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"support",children:"Support"}),"\n",(0,s.jsxs)(n.p,{children:["Pour toute question ou aide technique, rejoignez-nous sur notre ",(0,s.jsx)(n.a,{href:"https://discord.gg/zproject",children:"serveur Discord"}),". Notre \xe9quipe est disponible pour vous aider avec l'installation et la configuration de zSleep."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Ce guide vous permet de configurer et int\xe9grer rapidement ",(0,s.jsx)(n.strong,{children:"zSleep"})," \xe0 votre serveur FiveM, offrant une exp\xe9rience immersive de sommeil \xe0 vos joueurs."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(6540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);