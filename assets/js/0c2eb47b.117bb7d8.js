"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[550],{7606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(4848),r=t(8453);const s={sidebar_position:2},o="AlertInput",l={id:"zUI/Fonctions/alertInput",title:"AlertInput",description:"La fonction AlertInput est utile lorsque vous devez demander une confirmation au joueur.",source:"@site/docs/zUI/Fonctions/alertInput.md",sourceDirName:"zUI/Fonctions",slug:"/zUI/Fonctions/alertInput",permalink:"/docs/zUI/Fonctions/alertInput",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zUI/Fonctions/alertInput.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ShowHelpNotification",permalink:"/docs/zUI/Fonctions/showHelpNotification"},next:{title:"KeyboardInput",permalink:"/docs/zUI/Fonctions/keyboardInput"}},c={},d=[{value:"Fonction <code>AlertInput</code>",id:"fonction-alertinput",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:3},{value:"Aper\xe7u de l&#39;exemple",id:"aper\xe7u-de-lexemple",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:3}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"alertinput",children:"AlertInput"})}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.strong,{children:"AlertInput"})," est utile lorsque vous devez demander une confirmation au joueur."]}),"\n",(0,i.jsxs)(n.h2,{id:"fonction-alertinput",children:["Fonction ",(0,i.jsx)(n.code,{children:"AlertInput"})]}),"\n",(0,i.jsx)(n.p,{children:"La syntaxe pour utiliser la fonction d'alerte est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"zUI.AlertInput(Title, Subtitle, Description)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Cette fonction renvoie un bool\xe9en."}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Title"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Le titre de l'alerte."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Subtitle"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : Le sous-titre de l'alerte."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"})," ",(0,i.jsx)(n.em,{children:"[string]"})," : La description ou question \xe0 afficher \xe0 l'utilisateur."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,i.jsxs)(n.p,{children:["Voici un exemple d'utilisation de la fonction ",(0,i.jsx)(n.strong,{children:"AlertInput"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'    Items:AddButton("Titre", "Description", {}, function(onSelected)\r\n        if onSelected then\r\n            local confirmation = zUI.AlertInput("Question", "Bannissement", "\xcates-vous s\xfbr de vouloir bannir John ?")\r\n            if confirmation then\r\n                print("John Doe a \xe9t\xe9 banni !")\r\n            end\r\n        end\r\n    end)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"aper\xe7u-de-lexemple",children:"Aper\xe7u de l'exemple"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(2414).A+"",width:"1919",height:"1079"})}),"\n",(0,i.jsx)(n.h3,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["Pour utiliser l'alerte dans ",(0,i.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilisez ",(0,i.jsx)(n.code,{children:"zUI.AlertInput"})," pour afficher l'interface d'alerte."]}),"\n",(0,i.jsx)(n.li,{children:"Sp\xe9cifiez le titre, le sous-titre et la description."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2414:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/alertInput-579d342878aa16def3517e5369c3c407.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);