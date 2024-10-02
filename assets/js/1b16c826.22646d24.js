"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[602],{5690:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(4848),t=r(8453);const i={sidebar_position:2},a="S\xe9parateur",l={id:"zUI/Items/separator",title:"S\xe9parateur",description:"Les s\xe9parateurs dans zUI sont des \xe9l\xe9ments visuels utilis\xe9s pour diviser et organiser les \xe9l\xe9ments dans un menu. Ils aident \xe0 am\xe9liorer la lisibilit\xe9 et \xe0 structurer l'interface utilisateur. Vous pouvez ajouter des s\xe9parateurs \xe0 vos menus en utilisant la fonction zUI:AddSeparator. Voici comment les cr\xe9er et les personnaliser.",source:"@site/docs/zUI/Items/separator.md",sourceDirName:"zUI/Items",slug:"/zUI/Items/separator",permalink:"/docs/zUI/Items/separator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zUI/Items/separator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/zUI/Items/features"},next:{title:"Ligne",permalink:"/docs/zUI/Items/line"}},o={},d=[{value:"Fonction <code>AddSeparator</code>",id:"fonction-addseparator",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple de Cr\xe9ation de S\xe9parateur",id:"exemple-de-cr\xe9ation-de-s\xe9parateur",level:3},{value:"Explication",id:"explication",level:3},{value:"Exemple Visuel",id:"exemple-visuel",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function c(e){const s={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"s\xe9parateur",children:"S\xe9parateur"})}),"\n",(0,n.jsxs)(s.p,{children:["Les s\xe9parateurs dans ",(0,n.jsx)(s.strong,{children:"zUI"})," sont des \xe9l\xe9ments visuels utilis\xe9s pour diviser et organiser les \xe9l\xe9ments dans un menu. Ils aident \xe0 am\xe9liorer la lisibilit\xe9 et \xe0 structurer l'interface utilisateur. Vous pouvez ajouter des s\xe9parateurs \xe0 vos menus en utilisant la fonction ",(0,n.jsx)(s.code,{children:"zUI:AddSeparator"}),". Voici comment les cr\xe9er et les personnaliser."]}),"\n",(0,n.jsxs)(s.h2,{id:"fonction-addseparator",children:["Fonction ",(0,n.jsx)(s.code,{children:"AddSeparator"})]}),"\n",(0,n.jsx)(s.p,{children:"La syntaxe pour ajouter un s\xe9parateur est la suivante :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"zUI:AddSeparator(Title, Position)\n"})}),"\n",(0,n.jsx)(s.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Title"})," ",(0,n.jsx)(s.em,{children:"[string]"})," : Le texte qui s'affiche sur le s\xe9parateur. C'est le titre du s\xe9parateur."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Position"})," ",(0,n.jsx)(s.em,{children:"[string]"})," : (Optionnel) La position du s\xe9parateur dans le menu. Peut \xeatre ",(0,n.jsx)(s.code,{children:'"left"'}),", ",(0,n.jsx)(s.code,{children:'"center"'}),", ou ",(0,n.jsx)(s.code,{children:'"right"'}),". Par d\xe9faut, il est centr\xe9."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"exemple-de-cr\xe9ation-de-s\xe9parateur",children:"Exemple de Cr\xe9ation de S\xe9parateur"}),"\n",(0,n.jsxs)(s.p,{children:["Voici un exemple illustrant la cr\xe9ation d'un s\xe9parateur avec ",(0,n.jsx)(s.strong,{children:"zUI"})," :"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'Menu:SetItems(function(Items)\r\n    Items:AddSeparator(\r\n        "S\xe9parateur de Section", -- Title\r\n        "center" -- Position (facultatif, ici centr\xe9)\r\n    )\r\nend)\n'})}),"\n",(0,n.jsx)(s.h3,{id:"explication",children:"Explication"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Title"}),' : "S\xe9parateur de Section" est le texte affich\xe9 sur le s\xe9parateur. Il aide \xe0 identifier ou \xe0 nommer des sections dans le menu.']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Position"})," : La position du s\xe9parateur dans le menu. Les options disponibles sont :","\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'"left"'})," : Positionne le s\xe9parateur \xe0 gauche."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'"center"'})," : Positionne le s\xe9parateur au centre (valeur par d\xe9faut)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'"right"'})," : Positionne le s\xe9parateur \xe0 droite."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"exemple-visuel",children:"Exemple Visuel"}),"\n",(0,n.jsxs)(s.p,{children:["Voici \xe0 quoi peut ressembler un s\xe9parateur dans l'interface utilisateur de ",(0,n.jsx)(s.strong,{children:"zUI"})," :"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(1334).A+"",width:"1500",height:"500"})}),"\n",(0,n.jsx)(s.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,n.jsxs)(s.p,{children:["Pour cr\xe9er un s\xe9parateur dans ",(0,n.jsx)(s.strong,{children:"zUI"})," :"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Utilisez ",(0,n.jsx)(s.code,{children:"zUI:AddSeparator"})," pour ajouter le s\xe9parateur \xe0 un menu."]}),"\n",(0,n.jsx)(s.li,{children:"Sp\xe9cifiez le titre et, si d\xe9sir\xe9, la position du s\xe9parateur."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Les s\xe9parateurs sont essentiels pour organiser les \xe9l\xe9ments dans vos menus NUI et am\xe9liorer l'exp\xe9rience utilisateur en rendant les menus plus clairs et structur\xe9s."})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1334:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/separator-3bae6d4f84753e92db90854fc5ce23ee.png"},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>l});var n=r(6540);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);