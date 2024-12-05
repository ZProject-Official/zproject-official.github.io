"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[5753],{9158:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=n(4848),s=n(8453);const o={sidebar_position:3},l="Help Notification",r={id:"zUI/Notifications/helpNotif",title:"Help Notification",description:"Les notifications d'aide dans zUI sont des messages visuels destin\xe9s \xe0 fournir des instructions ou des informations suppl\xe9mentaires \xe0 l'utilisateur, g\xe9n\xe9ralement sous la forme d'une notification pulsante. Elles sont utiles pour guider l'utilisateur \xe0 travers des actions sp\xe9cifiques.",source:"@site/docs/zUI/Notifications/helpNotif.md",sourceDirName:"zUI/Notifications",slug:"/zUI/Notifications/helpNotif",permalink:"/docs/zUI/Notifications/helpNotif",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/docs/zUI/Notifications/notif"},next:{title:"Modal",permalink:"/docs/zUI/modal"}},a={},c=[{value:"Fonction <code>ShowHelpNotification</code>",id:"fonction-showhelpnotification",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function d(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"help-notification",children:"Help Notification"})}),"\n",(0,t.jsxs)(i.p,{children:["Les notifications d'aide dans ",(0,t.jsx)(i.strong,{children:"zUI"})," sont des messages visuels destin\xe9s \xe0 fournir des instructions ou des informations suppl\xe9mentaires \xe0 l'utilisateur, g\xe9n\xe9ralement sous la forme d'une notification pulsante. Elles sont utiles pour guider l'utilisateur \xe0 travers des actions sp\xe9cifiques."]}),"\n",(0,t.jsxs)(i.h2,{id:"fonction-showhelpnotification",children:["Fonction ",(0,t.jsx)(i.code,{children:"ShowHelpNotification"})]}),"\n",(0,t.jsx)(i.p,{children:"La syntaxe pour afficher une notification d'aide est la suivante :"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:"zUI.ShowHelpNotification(content, styles)\n"})}),"\n",(0,t.jsx)(i.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"content"})," ",(0,t.jsx)(i.em,{children:"[string]"}),' : Le texte affich\xe9 dans la notification, g\xe9n\xe9ralement une instruction ou un conseil (par exemple, "Appuyer sur E pour interagir").']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"styles"})," ",(0,t.jsx)(i.em,{children:"[table]"})," : Un tableau d\xe9finissant les styles de la notification. Il peut inclure les \xe9l\xe9ments suivants :","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Color"})," ",(0,t.jsx)(i.em,{children:"[string]"})," : La couleur de la notification (en format hexad\xe9cimal ou autre format valide)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,t.jsxs)(i.p,{children:["Voici un exemple d'utilisation de ",(0,t.jsx)(i.code,{children:"ShowHelpNotification"})," :"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'zUI.ShowHelpNotification("Appuyer sur E pour interagir", { Color = "#faad2c" })\n'})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(5624).A+"",width:"2559",height:"1439"})}),"\n",(0,t.jsx)(i.p,{children:'Cela affichera une notification pulsante de couleur orange (#faad2c) avec le texte "Appuyer sur E pour interagir".'}),"\n",(0,t.jsx)(i.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,t.jsxs)(i.p,{children:["Pour utiliser la fonction ",(0,t.jsx)(i.strong,{children:"ShowHelpNotification"})," dans ",(0,t.jsx)(i.strong,{children:"zUI"})," :"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Utilisez ",(0,t.jsx)(i.code,{children:"zUI.ShowHelpNotification"})," pour afficher une notification d'aide."]}),"\n",(0,t.jsx)(i.li,{children:"Personnalisez le texte de la notification pour donner des instructions ou des informations \xe0 l'utilisateur."}),"\n",(0,t.jsx)(i.li,{children:"Ajustez les styles de la notification en modifiant la couleur pour l'adapter \xe0 votre interface."}),"\n",(0,t.jsx)(i.li,{children:"Ces notifications sont id\xe9ales pour guider l'utilisateur dans des actions sp\xe9cifiques ou fournir des conseils utiles dans votre application."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Les notifications d'aide permettent d'am\xe9liorer l'exp\xe9rience utilisateur en fournissant des informations contextuelles importantes de mani\xe8re visuelle et claire."})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5624:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/helpNotif-b4b261302a760d127bae34d8d6b77722.png"},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>r});var t=n(6540);const s={},o=t.createContext(s);function l(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);