"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[6629],{2611:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const l={sidebar_position:1},o="Pulsing Notification",a={id:"zUI/Notifications/pulsing",title:"Pulsing Notification",description:"Les notifications pulsatiles dans zUI permettent d'afficher des messages visuels qui attirent l'attention de l'utilisateur gr\xe2ce \xe0 un effet pulsant. Cela peut \xeatre utilis\xe9 pour signaler des \xe9v\xe9nements importants ou attirer l'attention sur un \xe9l\xe9ment sp\xe9cifique.",source:"@site/docs/zUI/Notifications/pulsing.md",sourceDirName:"zUI/Notifications",slug:"/zUI/Notifications/pulsing",permalink:"/docs/zUI/Notifications/pulsing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/docs/category/notifications"},next:{title:"Notifications",permalink:"/docs/zUI/Notifications/notif"}},r={},c=[{value:"Fonction <code>DisplayPulsingNotification</code>",id:"fonction-displaypulsingnotification",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function d(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"pulsing-notification",children:"Pulsing Notification"})}),"\n",(0,t.jsxs)(e.p,{children:["Les notifications pulsatiles dans ",(0,t.jsx)(e.strong,{children:"zUI"})," permettent d'afficher des messages visuels qui attirent l'attention de l'utilisateur gr\xe2ce \xe0 un effet pulsant. Cela peut \xeatre utilis\xe9 pour signaler des \xe9v\xe9nements importants ou attirer l'attention sur un \xe9l\xe9ment sp\xe9cifique."]}),"\n",(0,t.jsxs)(e.h2,{id:"fonction-displaypulsingnotification",children:["Fonction ",(0,t.jsx)(e.code,{children:"DisplayPulsingNotification"})]}),"\n",(0,t.jsx)(e.p,{children:"La syntaxe pour afficher une notification pulsante est la suivante :"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lua",children:"zUI.DisplayPulsingNotification(key, description, coords, styles)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"key"})," ",(0,t.jsx)(e.em,{children:"[string]"})," : La cl\xe9 unique associ\xe9e \xe0 la notification. Elle peut \xeatre utilis\xe9e pour identifier et r\xe9f\xe9rencer la notification dans le code."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"description"})," ",(0,t.jsx)(e.em,{children:"[string]"})," : Le texte d\xe9crivant l'action ou l'\xe9v\xe9nement signal\xe9 par la notification."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"coords"})," ",(0,t.jsx)(e.em,{children:"[vector3]"})," : Les coordonn\xe9es 3D o\xf9 la notification sera affich\xe9e."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"styles"})," ",(0,t.jsx)(e.em,{children:"[table]"})," : Un tableau d\xe9finissant les styles de la notification. Il peut inclure les propri\xe9t\xe9s suivantes :","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Color"})," ",(0,t.jsx)(e.em,{children:"[string]"})," : La couleur de la notification (en format hexad\xe9cimal ou autre format valide)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"IsDisabled"})," ",(0,t.jsx)(e.em,{children:"[boolean]"})," : Indique si la notification doit \xeatre d\xe9sactiv\xe9e ou non (par d\xe9faut, ",(0,t.jsx)(e.code,{children:"false"}),")."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Scale"})," ",(0,t.jsx)(e.em,{children:"[number]"})," : La taille de la notification (par d\xe9faut, ",(0,t.jsx)(e.code,{children:"1"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,t.jsxs)(e.p,{children:["Voici un exemple d'utilisation de ",(0,t.jsx)(e.code,{children:"DisplayPulsingNotification"})," :"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lua",children:'zUI.DisplayPulsingNotification("", "Voici un exemple de notification pulsante", vector3(100.0, 200.0, 300.0), { Color = "#FF0000", IsDisabled = false, Scale = 1.5 })\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:n(3619).A+"",width:"2559",height:"1439"})}),"\n",(0,t.jsx)(e.p,{children:"Cela affichera une notification pulsante rouge \xe0 l'emplacement sp\xe9cifi\xe9 avec une taille de 1.5."}),"\n",(0,t.jsx)(e.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,t.jsxs)(e.p,{children:["Pour utiliser la fonction ",(0,t.jsx)(e.strong,{children:"DisplayPulsingNotification"})," dans ",(0,t.jsx)(e.strong,{children:"zUI"})," :"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Utilisez ",(0,t.jsx)(e.code,{children:"zUI.DisplayPulsingNotification"})," pour afficher une notification pulsante \xe0 un emplacement sp\xe9cifique."]}),"\n",(0,t.jsx)(e.li,{children:"Personnalisez le texte, la couleur, l'\xe9chelle et l'\xe9tat de la notification gr\xe2ce aux param\xe8tres de style."}),"\n",(0,t.jsx)(e.li,{children:"Cette fonction permet d'attirer l'attention de l'utilisateur sur des \xe9v\xe9nements ou des \xe9l\xe9ments importants dans votre application."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Les notifications pulsatiles sont id\xe9ales pour signaler des actions ou des alertes dans des environnements interactifs."})]})}function u(i={}){const{wrapper:e}={...(0,s.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},3619:(i,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/pulsing-6d323abfa02f0ca94e84b84f254bda62.png"},8453:(i,e,n)=>{n.d(e,{R:()=>o,x:()=>a});var t=n(6540);const s={},l=t.createContext(s);function o(i){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:o(i.components),t.createElement(l.Provider,{value:e},i.children)}}}]);