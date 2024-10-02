"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[904],{9133:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(4848),t=r(8453);const s={sidebar_position:3},d="RenderSprite",o={id:"zUI/Fonctions/renderSprite",title:"RenderSprite",description:"La fonction RenderSprite permet d'afficher une image sous un menu sp\xe9cifique dans l'interface utilisateur.",source:"@site/docs/zUI/Fonctions/renderSprite.md",sourceDirName:"zUI/Fonctions",slug:"/zUI/Fonctions/renderSprite",permalink:"/docs/zUI/Fonctions/renderSprite",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zUI/Fonctions/renderSprite.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"KeyboardInput",permalink:"/docs/zUI/Fonctions/keyboardInput"},next:{title:"M\xe9thodes",permalink:"/docs/category/m\xe9thodes"}},a={},l=[{value:"Fonction <code>RenderSprite</code>",id:"fonction-rendersprite",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:3},{value:"Aper\xe7u de l&#39;exemple",id:"aper\xe7u-de-lexemple",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"rendersprite",children:"RenderSprite"})}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.strong,{children:"RenderSprite"})," permet d'afficher une image sous un menu sp\xe9cifique dans l'interface utilisateur."]}),"\n",(0,i.jsxs)(n.h2,{id:"fonction-rendersprite",children:["Fonction ",(0,i.jsx)(n.code,{children:"RenderSprite"})]}),"\n",(0,i.jsx)(n.p,{children:"La syntaxe pour utiliser la fonction d'affichage d'image est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"zUI.RenderSprite(Image)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Le lien vers l'image \xe0 afficher dans l'interface."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,i.jsxs)(n.p,{children:["Voici un exemple d'utilisation de la fonction ",(0,i.jsx)(n.strong,{children:"RenderSprite"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'    Items:AddButton("Afficher Image", "Survolez pour afficher une image", {}, function(onHovered)\r\n        if onHovered then\r\n            zUI.RenderSprite(**Image**)\r\n        end\r\n    end)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"aper\xe7u-de-lexemple",children:"Aper\xe7u de l'exemple"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(6640).A+"",width:"2559",height:"1439"})}),"\n",(0,i.jsx)(n.h3,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["Pour utiliser l'affichage d'image dans ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilisez ",(0,i.jsx)(n.code,{children:"zUI.RenderSprite"})," pour afficher une image sous le menu lors du survol."]}),"\n",(0,i.jsx)(n.li,{children:"Sp\xe9cifiez le lien de l'image \xe0 afficher dans les param\xe8tres."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Cela vous permet d'ajouter des \xe9l\xe9ments visuels interactifs qui apparaissent lors du survol de l'interface utilisateur dans ",(0,i.jsx)(n.strong,{children:"zUI"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6640:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/renderSprite-175d9a77bdc32e7c177a45c45bc58451.png"},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);