"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[2864],{8533:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=s(4848),t=s(8453);const l={sidebar_position:6},r="Liste",o={id:"zUI/Items/list",title:"Liste",description:"Les listes dans zUI permettent aux utilisateurs de s\xe9lectionner parmi plusieurs options. Elles sont id\xe9ales pour offrir des choix dynamiques ou pour afficher des \xe9l\xe9ments dans vos menus. Vous pouvez ajouter des listes \xe0 vos menus en utilisant la fonction zUI:AddList. Voici comment les cr\xe9er et les personnaliser.",source:"@site/docs/zUI/Items/list.md",sourceDirName:"zUI/Items",slug:"/zUI/Items/list",permalink:"/docs/zUI/Items/list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Bouton Lien",permalink:"/docs/zUI/Items/linkButton"},next:{title:"Checkbox",permalink:"/docs/zUI/Items/checkbox"}},d={},c=[{value:"Fonction <code>AddList</code>",id:"fonction-addlist",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple de Cr\xe9ation de Liste",id:"exemple-de-cr\xe9ation-de-liste",level:3},{value:"Explication",id:"explication",level:3},{value:"Exemple Visuel",id:"exemple-visuel",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"liste",children:"Liste"})}),"\n",(0,i.jsxs)(n.p,{children:["Les listes dans ",(0,i.jsx)(n.strong,{children:"zUI"})," permettent aux utilisateurs de s\xe9lectionner parmi plusieurs options. Elles sont id\xe9ales pour offrir des choix dynamiques ou pour afficher des \xe9l\xe9ments dans vos menus. Vous pouvez ajouter des listes \xe0 vos menus en utilisant la fonction ",(0,i.jsx)(n.code,{children:"zUI:AddList"}),". Voici comment les cr\xe9er et les personnaliser."]}),"\n",(0,i.jsxs)(n.h2,{id:"fonction-addlist",children:["Fonction ",(0,i.jsx)(n.code,{children:"AddList"})]}),"\n",(0,i.jsx)(n.p,{children:"La syntaxe pour ajouter une liste est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"zUI:AddList(Title, Description, Items, Styles, Action)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Title"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Le texte qui s'affiche en haut de la liste. C'est le titre de la liste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : (Optionnel) Une br\xe8ve description ou un sous-titre pour la liste, affich\xe9 en dessous du titre."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Items"})," ",(0,i.jsx)(n.em,{children:"[table]"})," : Un tableau des \xe9l\xe9ments disponibles dans la liste. Chaque \xe9l\xe9ment est une option que l'utilisateur peut s\xe9lectionner."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Styles"})," ",(0,i.jsx)(n.em,{children:"[table]"})," : Un tableau pour personnaliser l'apparence de la liste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Action"})," ",(0,i.jsx)(n.em,{children:"[function(onSelected, onHovered, onListChange, index)]"})," : Action \xe0 ex\xe9cuter lorsque l'utilisateur interagit avec la liste. Cette fonction prend quatre param\xe8tres :","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onSelected"})," (vrai si un \xe9l\xe9ment de la liste est s\xe9lectionn\xe9)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onHovered"})," (vrai si un \xe9l\xe9ment de la liste est survol\xe9)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onListChange"})," (vrai si la liste a \xe9t\xe9 modifi\xe9e)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"index"})," (index de l'\xe9l\xe9ment s\xe9lectionn\xe9 dans la liste)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-de-cr\xe9ation-de-liste",children:"Exemple de Cr\xe9ation de Liste"}),"\n",(0,i.jsxs)(n.p,{children:["Voici un exemple illustrant la cr\xe9ation d'une liste avec ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local currentIndex = 0\r\nMenu:SetItems(function(Items)\r\n    Items:AddList(\r\n        "Choisissez une couleur", -- Title\r\n        "S\xe9lectionnez votre couleur pr\xe9f\xe9r\xe9e", -- Description\r\n        currentIndex, -- Index Actuel\r\n        { "Rouge", "Vert", "Bleu" }, -- Items\r\n        { RightLabel = "\u2192", Color = "#ffffff" }, -- Styles\r\n        function(onSelected, onHovered, onListChange, index)\r\n            if onSelected then\r\n                print("Couleur s\xe9lectionn\xe9e : " .. ListItems[index])\r\n            end\r\n            if onListChange then\r\n                currentIndex = index\r\n            end\r\n        end -- Action\r\n    )\r\nend)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"explication",children:"Explication"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Title"}),' : "Choisissez une couleur" est le texte affich\xe9 en haut de la liste.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),' : "S\xe9lectionnez votre couleur pr\xe9f\xe9r\xe9e" fournit une br\xe8ve description de la liste.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Items"})," : ",(0,i.jsx)(n.code,{children:'{ "Rouge", "Vert", "Bleu" }'})," est un tableau des options disponibles dans la liste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Styles"})," : Propri\xe9t\xe9s de style \xe0 ajouter \xe0 la liste.","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IsDisabled"})," ",(0,i.jsx)(n.em,{children:"[boolean]"})," : D\xe9termine si la liste est d\xe9sactiv\xe9e."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Color"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : D\xe9finit la couleur de la liste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RightLabel"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Ajoute un texte \xe0 droite de la liste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RightBadge"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Ajoute un badge \xe0 droite de la liste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LeftBadge"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Ajoute un badge \xe0 gauche de la liste."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Action"})," : La fonction sp\xe9cifi\xe9e dans ",(0,i.jsx)(n.code,{children:"Action"})," s'ex\xe9cute lorsque l'utilisateur interagit avec la liste. Ici, elle affiche la couleur s\xe9lectionn\xe9e dans la console."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-visuel",children:"Exemple Visuel"}),"\n",(0,i.jsxs)(n.p,{children:["Voici \xe0 quoi peut ressembler une liste dans l'interface utilisateur de ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(685).A+"",width:"1500",height:"500"})}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["Pour cr\xe9er une liste dans ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilisez ",(0,i.jsx)(n.code,{children:"zUI:AddList"})," pour ajouter la liste \xe0 un menu."]}),"\n",(0,i.jsx)(n.li,{children:"Sp\xe9cifiez le titre, la description, les \xe9l\xe9ments de la liste et les styles."}),"\n",(0,i.jsx)(n.li,{children:"D\xe9finissez l'action \xe0 ex\xe9cuter lorsqu'un utilisateur interagit avec la liste."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Les listes offrent une mani\xe8re efficace et \xe9l\xe9gante de pr\xe9senter des options multiples \xe0 vos utilisateurs. Utilisez-les pour am\xe9liorer l'interaction et la fonctionnalit\xe9 de vos menus NUI."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},685:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/list-5c198f5799ce013895f1646eee1ccc2b.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(6540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);