"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[9605],{2868:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(4848),t=n(8453);const o={sidebar_position:6},l="DisplayPulsingNotification",c={id:"zUI/Fonctions/pulsing",title:"DisplayPulsingNotification",description:"La fonction DisplayPulsingNotification permet d'afficher une notification pulsante associ\xe9e \xe0 une touche, avec une description et des coordonn\xe9es pr\xe9cises sur l'\xe9cran. Elle est id\xe9ale pour indiquer \xe0 l'utilisateur qu'une action est disponible \xe0 un emplacement sp\xe9cifique dans le monde du jeu.",source:"@site/docs/zUI/Fonctions/pulsing.md",sourceDirName:"zUI/Fonctions",slug:"/zUI/Fonctions/pulsing",permalink:"/docs/zUI/Fonctions/pulsing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ShowHelpNotification",permalink:"/docs/zUI/Fonctions/showHelpNotification"},next:{title:"SendNotification",permalink:"/docs/zUI/Fonctions/notifications"}},r={},a=[{value:"Fonction <code>DisplayPulsingNotification</code>",id:"fonction-displaypulsingnotification",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:3},{value:"Aper\xe7u de l&#39;exemple",id:"aper\xe7u-de-lexemple",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:3}];function d(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"displaypulsingnotification",children:"DisplayPulsingNotification"})}),"\n",(0,s.jsxs)(i.p,{children:["La fonction ",(0,s.jsx)(i.strong,{children:"DisplayPulsingNotification"})," permet d'afficher une notification pulsante associ\xe9e \xe0 une touche, avec une description et des coordonn\xe9es pr\xe9cises sur l'\xe9cran. Elle est id\xe9ale pour indiquer \xe0 l'utilisateur qu'une action est disponible \xe0 un emplacement sp\xe9cifique dans le monde du jeu."]}),"\n",(0,s.jsxs)(i.h2,{id:"fonction-displaypulsingnotification",children:["Fonction ",(0,s.jsx)(i.code,{children:"DisplayPulsingNotification"})]}),"\n",(0,s.jsx)(i.p,{children:"La syntaxe pour afficher la notification pulsante est la suivante :"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"zUI.DisplayPulsingNotification(key, description, coords, styles)\n"})}),"\n",(0,s.jsx)(i.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"key"})," ",(0,s.jsx)(i.em,{children:"[string]"}),' : La touche associ\xe9e \xe0 l\'action d\xe9crite dans la notification (par exemple, "E", "F", etc.).']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"description"})," ",(0,s.jsx)(i.em,{children:"[string]"})," : La description de l'action que l'utilisateur doit accomplir."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"coords"})," ",(0,s.jsx)(i.em,{children:"[vector3]"})," : Les coordonn\xe9es du monde o\xf9 la notification sera affich\xe9e."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"styles"})," ",(0,s.jsx)(i.em,{children:"[table]"})," : Un tableau contenant les styles pour personnaliser l'apparence de la notification. Les options disponibles sont :","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Color"})," ",(0,s.jsx)(i.em,{children:"[string]"})," : La couleur de la notification."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"IsDisabled"})," ",(0,s.jsx)(i.em,{children:"[boolean]"}),' : Si la notification doit \xeatre d\xe9sactiv\xe9e (valeur "true" ou "false").']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Scale"})," ",(0,s.jsx)(i.em,{children:"[number]"})," : L'\xe9chelle de la notification (par exemple, la taille de la notification)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,s.jsxs)(i.p,{children:["Voici un exemple d'utilisation de la fonction ",(0,s.jsx)(i.strong,{children:"DisplayPulsingNotification"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'Citizen.CreateThread(function()\r\n    while true do\r\n        Wait(0)\r\n        if #(coords - GetEntityCoords(PlayerPedId())) < 3 then\r\n            zUI.DisplayPulsingNotification("E", "Int\xe9ragir", coords, {})\r\n        end\r\n    end\r\nend)\n'})}),"\n",(0,s.jsx)(i.h3,{id:"aper\xe7u-de-lexemple",children:"Aper\xe7u de l'exemple"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(50).A+"",width:"302",height:"432"})}),"\n",(0,s.jsx)(i.h3,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,s.jsxs)(i.p,{children:["Pour utiliser la fonction ",(0,s.jsx)(i.strong,{children:"DisplayPulsingNotification"})," :"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Appelez la fonction ",(0,s.jsx)(i.code,{children:"zUI.DisplayPulsingNotification"})," pour afficher la notification pulsante."]}),"\n",(0,s.jsx)(i.li,{children:"Sp\xe9cifiez la touche, la description de l'action, les coordonn\xe9es de la notification et les styles."}),"\n",(0,s.jsx)(i.li,{children:"La notification sera affich\xe9e \xe0 l'emplacement sp\xe9cifi\xe9 avec les param\xe8tres fournis. Elle pulssera et indiquera \xe0 l'utilisateur l'action \xe0 accomplir."}),"\n"]}),"\n",(0,s.jsx)(i.hr,{})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pulsing-be4e5279c3290fd538253b0c9e6fd713.png"},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var s=n(6540);const t={},o=s.createContext(t);function l(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);