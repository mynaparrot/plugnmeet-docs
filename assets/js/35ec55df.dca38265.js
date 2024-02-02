"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[721],{707:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(5893),r=s(1151);const i={description:"plugNmeet join room using API",sidebar_position:2},d="Join room",l={id:"api/room/join",title:"Join room",description:"plugNmeet join room using API",source:"@site/docs/api/room/join.md",sourceDirName:"api/room",slug:"/api/room/join",permalink:"/docs/api/room/join",draft:!1,unlisted:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/edit/main/docs/api/room/join.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"plugNmeet join room using API",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create room",permalink:"/docs/api/room/create"},next:{title:"Room Status (active/inactive)",permalink:"/docs/api/room/is-active"}},o={},c=[{value:"Request parameters",id:"request-parameters",level:2},{value:"User info",id:"user-info",level:3},{value:"User metadata",id:"user-metadata",level:3},{value:"<strong>Example</strong>",id:"example",level:3},{value:"Response",id:"response",level:2},{value:"Custom design",id:"custom-design",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"join-room",children:"Join room"}),"\n",(0,n.jsxs)(t.p,{children:["End point: ",(0,n.jsx)(t.code,{children:"/room/getJoinToken"})]}),"\n",(0,n.jsx)(t.h2,{id:"request-parameters",children:"Request parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"room_id"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{children:"Room Id that you created before to join."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#user-info",children:"user_info"})}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"user-info",children:"User info"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"User full name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"user_id"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"User unique ID. Should be unquie for every user."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_admin"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"If true then user will be treated as an admin for this room."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_hidden"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"If true then user will be invisible in the room."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#user-metadata",children:"user_metadata"})}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"user-metadata",children:"User metadata"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"profile_pic"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Profile avatar"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"preferred_lang"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["You can set a preferred language to force the plugNmeet-client to use it. Please see the list of values ",(0,n.jsx)(t.a,{href:"https://github.com/mynaparrot/plugNmeet-client/blob/main/src/helpers/languages.ts",children:"here"}),". Example: es-ES, bn-BD, de-DE etc"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/api/room/create#default-lock-settings",children:"lock_settings"})}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Lock settings"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:(0,n.jsx)(t.strong,{children:"Example"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "room_id": "room01",\n  "user_info": {\n    "name": "Your name",\n    "user_id": "Your-Unique-User-Id",\n    "is_admin": true,\n    "is_hidden": false,\n    "user_metadata": {\n      "profile_pic": "https://profile.pic/im.jpg",\n      "lock_settings": {\n        "lock_microphone": false,\n        "lock_webcam": false,\n        "lock_screen_sharing": true,\n        "lock_chat": false,\n        "lock_chat_send_message": false,\n        "lock_chat_file_share": false\n      }\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Position"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"status"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The status of the request"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"msg"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Response message"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"token"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Join token"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["When you'll receive token during that time you can pass that token to plugNmeet-client by GET/search value of ",(0,n.jsx)(t.code,{children:"access_token"})," or cookie name ",(0,n.jsx)(t.code,{children:"pnm_access_token"}),". If you've setup it with plugNmeet-server then:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://Your-Plug-N-Meet-Server.com/?access_token=<TOKEN HERE>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you are using ",(0,n.jsx)(t.a,{href:"https://github.com/mynaparrot/plugNmeet-client",children:"plugNmeet-client"})," build static files in somewhere else then you'll require to pass token like that too. For example you've uploaded build static files inside ",(0,n.jsx)(t.code,{children:"conference"})," directory. In this case:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://Your-Domain.com/conference/?access_token=<TOKEN HERE>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," You may alternatively use the ",(0,n.jsx)(t.a,{href:"/docs/api/get-client-files",children:"getClientFiles"})," API call to get all of the CSS and JS files needed to display the interface manually. This way, you can embed the ",(0,n.jsx)(t.code,{children:"plugNmeet-client"})," anywhere without worrying about static build files."]}),"\n",(0,n.jsx)(t.h2,{id:"custom-design",children:"Custom design"}),"\n",(0,n.jsxs)(t.p,{children:["It's possible to add extra query parameter ",(0,n.jsx)(t.code,{children:"custom_design"})," with the join link. This way you can use seperate design for indivisual user. The value of ",(0,n.jsx)(t.code,{children:"custom_design"})," will need to be ",(0,n.jsx)(t.strong,{children:"url encoded json value"}),". You can view supported parameters from ",(0,n.jsx)(t.a,{href:"/docs/developer-guide/design-customisation#design-parameters",children:"design-parameters"}),". Example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://Your-Domain.com/conference/?access_token=<TOKEN HERE>&custom_design=%7B%22primary_color%22%3A%22%23004D90%22%2C%22secondary_color%22%3A%22%2324AEF7%22%7D\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>d});var n=s(7294);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);