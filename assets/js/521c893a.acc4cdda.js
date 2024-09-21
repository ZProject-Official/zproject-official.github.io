"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[715],{8747:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(4848),l=s(8453);const r={sidebar_position:3},t="Ligne",o={id:"zUI/Items/line",title:"Ligne",description:"Les lignes dans zUI sont des \xe9l\xe9ments visuels utilis\xe9s pour ajouter des s\xe9parations horizontales dans vos menus. Elles peuvent \xeatre utilis\xe9es pour s\xe9parer visuellement les diff\xe9rentes sections ou pour am\xe9liorer l'organisation de l'interface utilisateur. Vous pouvez ajouter des lignes \xe0 vos menus en utilisant la fonction zUI:AddLine. Voici comment les cr\xe9er et les personnaliser.",source:"@site/docs/zUI/Items/line.md",sourceDirName:"zUI/Items",slug:"/zUI/Items/line",permalink:"/docs/zUI/Items/line",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zUI/Items/line.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"S\xe9parateur",permalink:"/docs/zUI/Items/separator"},next:{title:"Bouton",permalink:"/docs/zUI/Items/button"}},a={},d=[{value:"Fonction <code>AddLine</code>",id:"fonction-addline",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple de Cr\xe9ation de Ligne",id:"exemple-de-cr\xe9ation-de-ligne",level:3},{value:"Explication",id:"explication",level:3},{value:"Exemple Visuel",id:"exemple-visuel",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function u(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ligne",children:"Ligne"})}),"\n",(0,i.jsxs)(n.p,{children:["Les lignes dans ",(0,i.jsx)(n.strong,{children:"zUI"})," sont des \xe9l\xe9ments visuels utilis\xe9s pour ajouter des s\xe9parations horizontales dans vos menus. Elles peuvent \xeatre utilis\xe9es pour s\xe9parer visuellement les diff\xe9rentes sections ou pour am\xe9liorer l'organisation de l'interface utilisateur. Vous pouvez ajouter des lignes \xe0 vos menus en utilisant la fonction ",(0,i.jsx)(n.code,{children:"zUI:AddLine"}),". Voici comment les cr\xe9er et les personnaliser."]}),"\n",(0,i.jsxs)(n.h2,{id:"fonction-addline",children:["Fonction ",(0,i.jsx)(n.code,{children:"AddLine"})]}),"\n",(0,i.jsx)(n.p,{children:"La syntaxe pour ajouter une ligne est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"zUI:AddLine(Colors)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Colors"})," ",(0,i.jsx)(n.em,{children:"[table | nil]"})," : (Optionnel) Un tableau de couleurs pour personnaliser l'apparence de la ligne. Si aucune couleur n'est sp\xe9cifi\xe9e, la ligne utilise les couleurs par d\xe9faut."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-de-cr\xe9ation-de-ligne",children:"Exemple de Cr\xe9ation de Ligne"}),"\n",(0,i.jsxs)(n.p,{children:["Voici un exemple illustrant la cr\xe9ation d'une ligne avec ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'Menu:SetItems(function(Items)\r\n    Items:AddLine(\r\n        { "#ff0000", "#00ff00", "#0000ff" } -- Colors (couleurs de la ligne)\r\n    )\r\nend)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"explication",children:"Explication"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Colors"})," : Un tableau de couleurs pour personnaliser l'apparence de la ligne. Chaque couleur est d\xe9finie en format hexad\xe9cimal.","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Exemple : ",(0,i.jsx)(n.code,{children:'{ "#ff0000", "#00ff00", "#0000ff" }'})," pour une ligne avec des d\xe9grad\xe9s de rouge, vert et bleu."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-visuel",children:"Exemple Visuel"}),"\n",(0,i.jsxs)(n.p,{children:["Voici \xe0 quoi peut ressembler une ligne dans l'interface utilisateur de ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2031).A+"",width:"1500",height:"500"})}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["Pour cr\xe9er une ligne dans ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilisez ",(0,i.jsx)(n.code,{children:"zUI:AddLine"})," pour ajouter la ligne \xe0 un menu."]}),"\n",(0,i.jsx)(n.li,{children:"Sp\xe9cifiez les couleurs souhait\xe9es pour personnaliser l'apparence de la ligne."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Les lignes sont utiles pour am\xe9liorer la lisibilit\xe9 de vos menus et offrir une s\xe9paration claire entre les diff\xe9rents \xe9l\xe9ments, rendant l'interface plus organis\xe9e et attrayante."})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2031:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/line-2fad1c5dd9d1531990d1fc4e0c2a5139.png"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(6540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);