"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[233],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(a),u=l,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(g,r(r({ref:e},d),{},{components:a})):n.createElement(g,r({ref:e},d))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7477:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(7462),l=a(3366),o=(a(7294),a(3905)),r=["components"],i={description:"plugNmeet user guide for moodle platform",sidebar_position:5},s="Moodle Integration",p={unversionedId:"User Guide/Moodle Integration",id:"User Guide/Moodle Integration",title:"Moodle Integration",description:"plugNmeet user guide for moodle platform",source:"@site/docs/User Guide/Moodle Integration.md",sourceDirName:"User Guide",slug:"/User Guide/Moodle Integration",permalink:"/docs/User Guide/Moodle Integration",editUrl:"https://github.com/mynaparrot/plugNmeet-docs/docs/User Guide/Moodle Integration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"plugNmeet user guide for moodle platform",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"WordPress Integration",permalink:"/docs/User Guide/WordPress Integration"},next:{title:"Joomla Integration",permalink:"/docs/User Guide/Joomla Integration"}},d={},c=[{value:"Installing plugNmeet for Moodle",id:"installing-plugnmeet-for-moodle",level:2},{value:"Add a plugNmeet activity in a Moodle course",id:"add-a-plugnmeet-activity-in-a-moodle-course",level:2}],m={toc:c};function u(t){var e=t.components,i=(0,l.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"moodle-integration"},"Moodle Integration"),(0,o.kt)("p",null,"With this tutorial, you will be able to know how to install and use ",(0,o.kt)("strong",{parentName:"p"},"plugNmeet")," in ",(0,o.kt)("strong",{parentName:"p"},"Moodle"),"."),(0,o.kt)("h2",{id:"installing-plugnmeet-for-moodle"},"Installing plugNmeet for Moodle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, you have to download the ",(0,o.kt)("strong",{parentName:"li"},"PlugNmeet")," Zip file from this link: ",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"li",href:"https://github.com/mynaparrot/plugNmeet-Moodle/releases"},"https://github.com/mynaparrot/plugNmeet-Moodle/releases"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-1.png",src:a(1559).Z,width:"1170",height:"567"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"After we have the file already downloaded, we go to the section of our ",(0,o.kt)("strong",{parentName:"li"},"Moodle")," where we can install Plugins.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-2.png",src:a(9489).Z,width:"1165",height:"634"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Click on "',(0,o.kt)("strong",{parentName:"li"},"choose a file"),'" and select the downloaded file to finally click on "',(0,o.kt)("strong",{parentName:"li"},"Install plugin from the ZIP file"),'".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-3.png",src:a(2249).Z,width:"1129",height:"572"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'We expect you to load and squeeze in "',(0,o.kt)("strong",{parentName:"li"},"Continue"),'" in the following steps until a page with the title "',(0,o.kt)("strong",{parentName:"li"},"Plugins check"),'" appears.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-4.png",src:a(9822).Z,width:"1073",height:"353"}),"\n",(0,o.kt)("img",{alt:"Moodle-5.png",src:a(2961).Z,width:"905",height:"699"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Click on the "',(0,o.kt)("strong",{parentName:"li"},"Upgrade Moodle database now"),'" button.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-6.png",src:a(3345).Z,width:"1022",height:"565"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Select "',(0,o.kt)("strong",{parentName:"li"},"Continue"),'"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-7.png",src:a(7531).Z,width:"1095",height:"490"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},'At the plugin configuration page, you can configure server API information and some of global customization options. You can upload your logs, enable and disable some features. After that, click on "',(0,o.kt)("strong",{parentName:"li"},"Save changes"),'"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-8.png",src:a(6530).Z,width:"907",height:"687"})),(0,o.kt)("h2",{id:"add-a-plugnmeet-activity-in-a-moodle-course"},"Add a plugNmeet activity in a Moodle course"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'In order to use PlugNmeet for a course in Moodle, we must activate the course editing mode with the "',(0,o.kt)("strong",{parentName:"li"},"Turn editing on"),'" button.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-9.png",src:a(6269).Z,width:"947",height:"467"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"We place ourselves in a Topic and select the option to add ",(0,o.kt)("strong",{parentName:"li"},"activity or resource"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-10.png",src:a(8091).Z,width:"958",height:"516"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"We select PlugNmeet, as it will allow us to create a conference room in the chosen Topic.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-11.png",src:a(1317).Z,width:"830",height:"425"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"We write the title and description of the conference that will be held in this room, as well as we can select in a box if we want the description of the course to be displayed on the course page.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-12.png",src:a(5951).Z,width:"844",height:"378"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"We write the welcome message that will appear as the first message in the conference chat.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-13.png",src:a(9727).Z,width:"806",height:"201"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'We choose the maximum number of participants who can enter the room. In case you want it to be unlimited, you place "',(0,o.kt)("strong",{parentName:"li"},"0"),'".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-14.png",src:a(1156).Z,width:"790",height:"123"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"room features"),'". Next, we will explain each point:')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow webcams"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Allows you to use a camera. / No: No camera can be used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mute on start"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: All people are silenced when entering the room. / No: Everyone will be with their microphone on from the moment they enter the room.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow screen share"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Screen sharing is allowed. / No: Screen sharing is not allowed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow recording"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: The meeting can be recorded. / No: Unable to record.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow rtmp"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Live broadcasts are allowed. For example, on Youtube or Facebook. / No: Unable to perform transmissions.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow view other webcams"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: The webcams of all participants can be viewed. / No: It will only be possible to view the webcams between the participant and moderator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow view other users list"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: You can view the list of participating users. / No: You can't see who is on the list of participants.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"admin only webcams"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Only the moderator has their webcam active. / No: No one can have their webcam active.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-15.png",src:a(557).Z,width:"515",height:"513"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"chat features"),'". Next, we will explain each point:')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow chat"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Allows you to use the chat. / No: Unable to use chat.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow file upload"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Files can be uploaded in the chat. / No: You can't upload files in the chat.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-16.png",src:a(1784).Z,width:"707",height:"259"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"shared notepad features"),'" and "',(0,o.kt)("strong",{parentName:"li"},"whiteboard features"),'". Next, we will explain each point:')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow shared notepad"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: It is allowed to use the notepad or notepad. / No: You cannot use the notepad or notebook.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allow whiteboard"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: The whiteboard can be used. / No: The whiteboard cannot be used.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-17.png",src:a(117).Z,width:"879",height:"301"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"default lock settings"),'". These settings will only affect the participants, that is, those who are moderators will still have access to everything, but the others will not.')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lock microphone"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: The microphone cannot be used. / No: The microphone can be used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lock webcam"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Unable to use webcam. / No: The webcam can be used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lock screen sharing"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Unable to share screen. / No: Screen sharing can be shared.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lock chat"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Unable to use chat. / No: Chat can be used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lock chat send message"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Unable to send messages in chat. / No: You can send messages in the chat.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lock chat file share"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes: Unable to upload a file in chat. / No: You can upload a file in the chat.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-18.png",src:a(3165).Z,width:"756",height:"470"})),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"Grade"),"\" section. Below, we'll explain each point for you to decide how to set it up.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grade > Type"),(0,o.kt)("td",{parentName:"tr",align:null},"You will choose the type of qualification.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grade > Maximun grade"),(0,o.kt)("td",{parentName:"tr",align:null},"You will choose what the maximum grade is.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grade category"),(0,o.kt)("td",{parentName:"tr",align:null},"You will choose the rating category.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grade to pass"),(0,o.kt)("td",{parentName:"tr",align:null},"You will choose what the grade is to pass the course.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-19.png",src:a(9147).Z,width:"837",height:"356"})),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"Common module settings"),"\" section. Below, we'll explain each point for you to decide how to set it up.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Availability"),(0,o.kt)("td",{parentName:"tr",align:null},"-If 'Show on course page' is selected , the activity is displayed for students. -If the other option \"Hide from students\" is chosen, the activity or resource is only. available to users with permission to view hidden activities (default, users with the role of teacher).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ID number"),(0,o.kt)("td",{parentName:"tr",align:null},"It is an identity number of the activity; it is optional to fill it out or not.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-20.png",src:a(8359).Z,width:"778",height:"222"})),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"Restrict access"),"\" section. Below, we'll explain each point for you to decide how to set it up. In this section the objective is to restrict the access of the room based on certain criteria that you will decide.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-21.png",src:a(2658).Z,width:"599",height:"188"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Date"),(0,o.kt)("td",{parentName:"tr",align:null},"Prevent access to (or from) a specific date and time.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grade"),(0,o.kt)("td",{parentName:"tr",align:null},"It requires students to achieve a specific qualification.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User profile"),(0,o.kt)("td",{parentName:"tr",align:null},"Control field-based access within the student's profile.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Restriction set"),(0,o.kt)("td",{parentName:"tr",align:null},"A set of combined constraints can be added.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-22.png",src:a(1389).Z,width:"853",height:"491"})),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},'We customize the "',(0,o.kt)("strong",{parentName:"li"},"Activity completion"),'" section. Next, we will explain each point so that you can decide how to configure it.')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Completion tracking"),(0,o.kt)("td",{parentName:"tr",align:null},"If enabled, the completion of the activity will be tracked, either manually or automatically.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Expect completed on"),(0,o.kt)("td",{parentName:"tr",align:null},"The date on which the activity is expected to be completed is chosen")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-23.png",src:a(9192).Z,width:"820",height:"185"})),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},'In the "',(0,o.kt)("strong",{parentName:"li"},"Tags"),'" section, we choose if we want to add a tag for the activity.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-24.png",src:a(3457).Z,width:"806",height:"237"})),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},'In the "',(0,o.kt)("strong",{parentName:"li"},"Competencies"),'" section, we choose which competencies are carried with the course and what is needed to complete the activity. In this example it has been placed that they attach evidence.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-25.png",src:a(861).Z,width:"781",height:"236"})),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},'Finally, we click on "',(0,o.kt)("strong",{parentName:"li"},"Save and display"),'".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-26.png",src:a(5963).Z,width:"619",height:"91"})),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},'The next page will appear and click on "',(0,o.kt)("strong",{parentName:"li"},"Join"),"\". And you're done!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Moodle-27.png",src:a(8475).Z,width:"950",height:"443"})))}u.isMDXComponent=!0},1559:function(t,e,a){e.Z=a.p+"assets/images/Moodle-1-6517fd4408e556e0634f8bf9ae96f1ce.png"},8091:function(t,e,a){e.Z=a.p+"assets/images/Moodle-10-8fa31e365ff35505c14afebd9dbe0245.png"},1317:function(t,e,a){e.Z=a.p+"assets/images/Moodle-11-aa16ea45d88bb0dbebbef8261355e08b.png"},5951:function(t,e,a){e.Z=a.p+"assets/images/Moodle-12-0d08ccd07e9615adebf38176c12bea98.png"},9727:function(t,e,a){e.Z=a.p+"assets/images/Moodle-13-ff86e44236ab55e13fd898ced819c262.png"},1156:function(t,e,a){e.Z=a.p+"assets/images/Moodle-14-e1f46cea48089fb419e90d425bc86661.png"},557:function(t,e,a){e.Z=a.p+"assets/images/Moodle-15-101f325db08411374911a830c59bae8c.png"},1784:function(t,e,a){e.Z=a.p+"assets/images/Moodle-16-f770de39364f8e1a35d1d15c056008cb.png"},117:function(t,e,a){e.Z=a.p+"assets/images/Moodle-17-1c478197eb18ca0508e78ef54396545c.png"},3165:function(t,e,a){e.Z=a.p+"assets/images/Moodle-18-4160afc71d2449ef2c3cd4ba8c7cddb2.png"},9147:function(t,e,a){e.Z=a.p+"assets/images/Moodle-19-6f7d05735b231273b70de7dafb4da59d.png"},9489:function(t,e,a){e.Z=a.p+"assets/images/Moodle-2-2599251c4796f2f91ffb75dbd66f694c.png"},8359:function(t,e,a){e.Z=a.p+"assets/images/Moodle-20-15a0526b3b317d5f71e8a5714b5ecd30.png"},2658:function(t,e,a){e.Z=a.p+"assets/images/Moodle-21-984080a9989d44695b12882dae855085.png"},1389:function(t,e,a){e.Z=a.p+"assets/images/Moodle-22-d0ec25d98e0c830d7cff35746fa3c770.png"},9192:function(t,e,a){e.Z=a.p+"assets/images/Moodle-23-d535e89bec77e2c449a9e134f720e520.png"},3457:function(t,e,a){e.Z=a.p+"assets/images/Moodle-24-38705739e32307846b7ee47d40040661.png"},861:function(t,e,a){e.Z=a.p+"assets/images/Moodle-25-da1c828ff9b38fcb00fe05c209f8f27b.png"},5963:function(t,e,a){e.Z=a.p+"assets/images/Moodle-26-5c3c2c0b3289d6457ee8b328d6f53960.png"},8475:function(t,e,a){e.Z=a.p+"assets/images/Moodle-27-a595a25886de9b7321cf97278647f653.png"},2249:function(t,e,a){e.Z=a.p+"assets/images/Moodle-3-e65984d3423af95652b7078dd85f0d01.png"},9822:function(t,e,a){e.Z=a.p+"assets/images/Moodle-4-cd501df4b6dddb61d2801f4fb10b7685.png"},2961:function(t,e,a){e.Z=a.p+"assets/images/Moodle-5-8706604cf00b1c73f9b3222996e01c74.png"},3345:function(t,e,a){e.Z=a.p+"assets/images/Moodle-6-bca284965a0ce4d9bfe2ce44bfe38b44.png"},7531:function(t,e,a){e.Z=a.p+"assets/images/Moodle-7-465ff82f071cfcc13575998f6b32a7fb.png"},6530:function(t,e,a){e.Z=a.p+"assets/images/Moodle-8-c241850e31cfa77276e2a1a85bb54aa8.png"},6269:function(t,e,a){e.Z=a.p+"assets/images/Moodle-9-da708cb2c6e499b9a88645ae4d587989.png"}}]);