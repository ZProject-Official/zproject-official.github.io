"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[2086],{3464:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=s(4848),i=s(8453);const c={sidebar_position:7},o="Checkbox",r={id:"zUI/Items/checkbox",title:"Checkbox",description:"Les checkboxes dans zUI permettent aux utilisateurs de s\xe9lectionner ou d\xe9s\xe9lectionner des options, offrant ainsi un moyen interactif pour g\xe9rer les \xe9tats binaires dans vos menus. Vous pouvez ajouter des checkboxes \xe0 vos menus en utilisant la fonction zUI:AddCheckbox. Voici comment les cr\xe9er et les personnaliser.",source:"@site/docs/zUI/Items/checkbox.md",sourceDirName:"zUI/Items",slug:"/zUI/Items/checkbox",permalink:"/docs/zUI/Items/checkbox",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Liste",permalink:"/docs/zUI/Items/list"},next:{title:"Th\xe8me",permalink:"/docs/zUI/theme"}},l={},d=[{value:"Fonction <code>AddCheckbox</code>",id:"fonction-addcheckbox",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple de Cr\xe9ation de Checkbox",id:"exemple-de-cr\xe9ation-de-checkbox",level:3},{value:"Explication",id:"explication",level:3},{value:"Exemple Visuel",id:"exemple-visuel",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"checkbox",children:"Checkbox"})}),"\n",(0,t.jsxs)(n.p,{children:["Les checkboxes dans ",(0,t.jsx)(n.strong,{children:"zUI"})," permettent aux utilisateurs de s\xe9lectionner ou d\xe9s\xe9lectionner des options, offrant ainsi un moyen interactif pour g\xe9rer les \xe9tats binaires dans vos menus. Vous pouvez ajouter des checkboxes \xe0 vos menus en utilisant la fonction ",(0,t.jsx)(n.code,{children:"zUI:AddCheckbox"}),". Voici comment les cr\xe9er et les personnaliser."]}),"\n",(0,t.jsxs)(n.h2,{id:"fonction-addcheckbox",children:["Fonction ",(0,t.jsx)(n.code,{children:"AddCheckbox"})]}),"\n",(0,t.jsx)(n.p,{children:"La syntaxe pour ajouter une checkbox est la suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"zUI:AddCheckbox(Title, Description, State, Styles, Action)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Title"})," ",(0,t.jsx)(n.em,{children:"[string]"})," : Le texte qui s'affiche \xe0 c\xf4t\xe9 de la checkbox. C'est le titre de la checkbox."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"})," ",(0,t.jsx)(n.em,{children:"[string | nil]"})," : (Optionnel) Une br\xe8ve description ou un sous-titre pour la checkbox, affich\xe9 en dessous du titre."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"State"})," ",(0,t.jsx)(n.em,{children:"[boolean]"})," : L'\xe9tat initial de la checkbox (coch\xe9e ou d\xe9coch\xe9e)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Styles"})," ",(0,t.jsx)(n.em,{children:"[table]"})," : Un tableau optionnel pour personnaliser l'apparence de la checkbox."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Action"})," ",(0,t.jsx)(n.em,{children:"[function(onSelected, onHovered)]"})," : Action \xe0 ex\xe9cuter lorsque la checkbox est s\xe9lectionn\xe9e ou survol\xe9e. Cette fonction prend deux param\xe8tres :","\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onSelected"})," (vrai si la checkbox a \xe9t\xe9 s\xe9lectionn\xe9e)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onHovered"})," (vrai si la checkbox est survol\xe9e)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"exemple-de-cr\xe9ation-de-checkbox",children:"Exemple de Cr\xe9ation de Checkbox"}),"\n",(0,t.jsxs)(n.p,{children:["Voici un exemple illustrant la cr\xe9ation d'une checkbox avec ",(0,t.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local CheckboxState = false\r\n\r\nMenu:SetItems(function(Items)\r\n    Items:AddCheckbox(\r\n        "Titre", -- Title\r\n        "Description", -- Description\r\n        CheckboxState, -- \xc9tat initial\r\n        {}, -- Styles (aucun style sp\xe9cifique pour cet exemple)\r\n        function(onSelected, onHovered)\r\n            if onSelected then\r\n                -- Inverse l\'\xe9tat de la checkbox lorsqu\'elle est s\xe9lectionn\xe9e\r\n                CheckboxState = not CheckboxState\r\n                print("Checkbox \xe9tat : " .. tostring(CheckboxState))\r\n            end\r\n        end\r\n    )\r\nend)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"explication",children:"Explication"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Title"}),' : "Titre" est le texte affich\xe9 \xe0 c\xf4t\xe9 de la checkbox.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),' : "Description" fournit une br\xe8ve explication ou un sous-titre pour la checkbox.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"State"})," : ",(0,t.jsx)(n.code,{children:"CheckboxState"})," d\xe9termine si la checkbox est initialement coch\xe9e ou non."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Styles"})," : Vous pouvez personnaliser l'apparence de la checkbox en ajoutant des \xe9l\xe9ments dans le tableau ",(0,t.jsx)(n.code,{children:"Styles"}),". Pour cet exemple, aucun style sp\xe9cifique n'est utilis\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Action"})," : La fonction sp\xe9cifi\xe9e dans ",(0,t.jsx)(n.code,{children:"Action"})," s'ex\xe9cute lorsque la checkbox est s\xe9lectionn\xe9e. Ici, elle inverse l'\xe9tat de la checkbox et affiche l'\xe9tat actuel dans la console."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"exemple-visuel",children:"Exemple Visuel"}),"\n",(0,t.jsxs)(n.p,{children:["Voici \xe0 quoi peut ressembler une checkbox dans l'interface utilisateur de ",(0,t.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8107).A+"",width:"1500",height:"500"})}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,t.jsxs)(n.p,{children:["Pour cr\xe9er une checkbox dans ",(0,t.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Utilisez ",(0,t.jsx)(n.code,{children:"zUI:AddCheckbox"})," pour ajouter la checkbox \xe0 un menu."]}),"\n",(0,t.jsx)(n.li,{children:"Sp\xe9cifiez le titre, la description, l'\xe9tat initial, les styles et l'action \xe0 ex\xe9cuter."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Les checkboxes sont des \xe9l\xe9ments interactifs utiles pour g\xe9rer des choix binaires dans vos menus, offrant une exp\xe9rience utilisateur fluide et intuitive."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8107:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/checkbox-69b81f38802cfb5accad346d4560b203.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(6540);const i={},c=t.createContext(i);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);