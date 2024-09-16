"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[121],{7201:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=s(4848),t=s(8453);const o={sidebar_position:4},r="Bouton Lien",l={id:"zUI/Items/linkButton",title:"Bouton Lien",description:"Les boutons lien dans zUI sont des \xe9l\xe9ments interactifs qui redirigent les utilisateurs vers une URL lorsqu'ils sont cliqu\xe9s. Ils sont utiles pour ajouter des liens externes ou des pages web \xe0 vos menus. Vous pouvez ajouter des boutons lien \xe0 vos menus en utilisant la fonction zUI:AddLinkButton. Voici comment les cr\xe9er et les personnaliser.",source:"@site/docs/zUI/Items/linkButton.md",sourceDirName:"zUI/Items",slug:"/zUI/Items/linkButton",permalink:"/docs/zUI/Items/linkButton",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zUI/Items/linkButton.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bouton",permalink:"/docs/zUI/Items/button"},next:{title:"Liste",permalink:"/docs/zUI/Items/list"}},u={},d=[{value:"Fonction <code>AddLinkButton</code>",id:"fonction-addlinkbutton",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple de Cr\xe9ation de Bouton Lien",id:"exemple-de-cr\xe9ation-de-bouton-lien",level:3},{value:"Explication",id:"explication",level:3},{value:"Exemple Visuel",id:"exemple-visuel",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"bouton-lien",children:"Bouton Lien"})}),"\n",(0,i.jsxs)(n.p,{children:["Les boutons lien dans ",(0,i.jsx)(n.strong,{children:"zUI"})," sont des \xe9l\xe9ments interactifs qui redirigent les utilisateurs vers une URL lorsqu'ils sont cliqu\xe9s. Ils sont utiles pour ajouter des liens externes ou des pages web \xe0 vos menus. Vous pouvez ajouter des boutons lien \xe0 vos menus en utilisant la fonction ",(0,i.jsx)(n.code,{children:"zUI:AddLinkButton"}),". Voici comment les cr\xe9er et les personnaliser."]}),"\n",(0,i.jsxs)(n.h2,{id:"fonction-addlinkbutton",children:["Fonction ",(0,i.jsx)(n.code,{children:"AddLinkButton"})]}),"\n",(0,i.jsx)(n.p,{children:"La syntaxe pour ajouter un bouton lien est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"zUI:AddLinkButton(Title, Description, Styles, Link)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Title"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Le texte qui s'affiche sur le bouton. C'est le titre du bouton."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : (Optionnel) Une br\xe8ve description ou un sous-titre pour le bouton, affich\xe9 en dessous du titre."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Styles"})," ",(0,i.jsx)(n.em,{children:"[table]"})," : Un tableau pour personnaliser l'apparence du bouton."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Link"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : L'URL vers laquelle le bouton doit rediriger lorsqu'il est cliqu\xe9."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-de-cr\xe9ation-de-bouton-lien",children:"Exemple de Cr\xe9ation de Bouton Lien"}),"\n",(0,i.jsxs)(n.p,{children:["Voici un exemple illustrant la cr\xe9ation d'un bouton lien avec ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'Menu:SetItems(function(Items)\r\n    Items:AddLinkButton(\r\n        "Visiter notre site", -- Title\r\n        "Cliquez ici pour acc\xe9der \xe0 notre site web", -- Description\r\n        { Color = "#00aaff" }, -- Styles\r\n        "https://www.example.com" -- Link\r\n    )\r\nend)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"explication",children:"Explication"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Title"}),' : "Visiter notre site" est le texte affich\xe9 sur le bouton.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),' : "Cliquez ici pour acc\xe9der \xe0 notre site web" fournit une br\xe8ve description du bouton.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Styles"})," : Propri\xe9t\xe9s de style \xe0 ajouter au bouton.","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IsDisabled"})," ",(0,i.jsx)(n.em,{children:"[boolean]"})," : D\xe9termine si le bouton est d\xe9sactiv\xe9."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Color"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : D\xe9finit la couleur du bouton."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Link"})," : L'URL sp\xe9cifi\xe9e dans ",(0,i.jsx)(n.code,{children:"Link"})," est celle vers laquelle le bouton redirigera lorsqu'il est cliqu\xe9. Ici, il redirige vers \"",(0,i.jsx)(n.a,{href:"https://www.example.com",children:"https://www.example.com"}),'".']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-visuel",children:"Exemple Visuel"}),"\n",(0,i.jsxs)(n.p,{children:["Voici \xe0 quoi peut ressembler un bouton lien dans l'interface utilisateur de ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3112).A+"",width:"1500",height:"500"})}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["Pour cr\xe9er un bouton lien dans ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilisez ",(0,i.jsx)(n.code,{children:"zUI:AddLinkButton"})," pour ajouter le bouton \xe0 un menu."]}),"\n",(0,i.jsx)(n.li,{children:"Sp\xe9cifiez le titre, la description, les styles et l'URL de redirection."}),"\n",(0,i.jsx)(n.li,{children:"Le bouton redirigera automatiquement l'utilisateur vers l'URL sp\xe9cifi\xe9e lorsqu'il est cliqu\xe9."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Les boutons lien sont utiles pour int\xe9grer des ressources externes ou fournir des informations suppl\xe9mentaires via des liens directs. Utilisez-les pour enrichir l'interaction de vos menus NUI avec des redirections vers des sites ou des pages web sp\xe9cifiques."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3112:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/linkbutton-bf491c0137e239df7f46228091f6fa5e.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);