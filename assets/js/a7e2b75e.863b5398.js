"use strict";(self.webpackChunkz_documentation=self.webpackChunkz_documentation||[]).push([[317],{7073:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=i(4848),t=i(8453);const r={sidebar_position:1},s="ShowHelpNotification",l={id:"zUI/Fonctions/showHelpNotification",title:"ShowHelpNotification",description:"La fonction ShowHelpNotification est utile dans le cas o\xf9 vous devriez indiquer au joueur sur quelle touche il devra appuyer pour interagir avec votre script.",source:"@site/docs/zUI/Fonctions/showHelpNotification.md",sourceDirName:"zUI/Fonctions",slug:"/zUI/Fonctions/showHelpNotification",permalink:"/docs/zUI/Fonctions/showHelpNotification",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zUI/Fonctions/showHelpNotification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Fonctions",permalink:"/docs/category/fonctions"},next:{title:"AlertInput",permalink:"/docs/zUI/Fonctions/alertInput"}},c={},a=[{value:"Fonction <code>ShowHelpNotification</code>",id:"fonction-showhelpnotification",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:3},{value:"Aper\xe7u de l&#39;exemple",id:"aper\xe7u-de-lexemple",level:3},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"showhelpnotification",children:"ShowHelpNotification"})}),"\n",(0,o.jsxs)(n.p,{children:["La fonction ",(0,o.jsx)(n.strong,{children:"ShowHelpNotification"})," est utile dans le cas o\xf9 vous devriez indiquer au joueur sur quelle touche il devra appuyer pour interagir avec votre script."]}),"\n",(0,o.jsxs)(n.h2,{id:"fonction-showhelpnotification",children:["Fonction ",(0,o.jsx)(n.code,{children:"ShowHelpNotification"})]}),"\n",(0,o.jsx)(n.p,{children:"La syntaxe pour afficher une notification d'aide est la suivante :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"zUI.ShowHelpNotification(Key, Description, Coords)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Key"})," ",(0,o.jsx)(n.em,{children:"[string]"})," : Lettres \xe0 afficher dans le compartiment de la touche."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"})," ",(0,o.jsx)(n.em,{children:"[string]"})," : Description de l'action qui va \xeatre effectu\xe9e."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Coords"})," ",(0,o.jsx)(n.em,{children:"[vector3 | nil]"})," : Coordonn\xe9es o\xf9 va \xeatre affich\xe9e la notification (si vous la voulez en 3D)."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,o.jsxs)(n.p,{children:["Voici un exemple d'utilisation de la ",(0,o.jsx)(n.strong,{children:"Notification d'aide"})," en ",(0,o.jsx)(n.strong,{children:"3D"})," :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'Citizen.CreateThread(function()\r\n    local Delay = 500\r\n    while true do\r\n        Citizen.Wait(Delay)\r\n        local playerCoords = GetEntityCoords(PlayerPedId())\r\n        local Coords = vector3(0, 0, 0)\r\n        if #(playerCoords - Coords) < 5.0 then\r\n            Delay = 0\r\n            zUI.ShowHelpNotification("E", "Appuyez pour interagir", Coords)\r\n        end\r\n    end\r\nend)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Voici un exemple d'utilisation de la ",(0,o.jsx)(n.strong,{children:"Notification d'aide"})," en ",(0,o.jsx)(n.strong,{children:"2D"})," :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'Citizen.CreateThread(function()\r\n    local Delay = 500\r\n    while true do\r\n        Citizen.Wait(Delay)\r\n        local playerCoords = GetEntityCoords(PlayerPedId())\r\n        local Coords = vector3(0, 0, 0)\r\n        if #(playerCoords - Coords) < 5.0 then\r\n            Delay = 0\r\n            zUI.ShowHelpNotification("E", "Appuyez pour interagir")\r\n        end\r\n    end\r\nend)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"aper\xe7u-de-lexemple",children:"Aper\xe7u de l'exemple"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3D"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(5858).A+"",width:"1919",height:"1079"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"2D"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(3573).A+"",width:"1919",height:"1079"})}),"\n",(0,o.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,o.jsxs)(n.p,{children:["Pour afficher une notification d'aide dans ",(0,o.jsx)(n.strong,{children:"zUI"})," :"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Utilisez ",(0,o.jsx)(n.code,{children:"zUI.ShowHelpNotification"})," pour appeler la fonction qui affiche l'interface."]}),"\n",(0,o.jsx)(n.li,{children:"Sp\xe9cifiez la touche et la description."}),"\n",(0,o.jsx)(n.li,{children:"Optionnellement, sp\xe9cifiez les coordonn\xe9es dans le cas o\xf9 elle doit \xeatre en 3D."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3573:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/helpNotif2d-d9c76828e36bf32d8d1c524c33b12ee3.png"},5858:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/helpNotif3d-a15de2c8fae59b914ee5ed89b68d7345.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(6540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);