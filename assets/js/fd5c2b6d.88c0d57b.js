"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[472],{9506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=t(5893),s=t(1151);const i={description:"Quick join to plugNmeet using PHP",sidebar_position:1},a="Quick join using PHP",r={id:"tutorials/quick_php",title:"Quick join using PHP",description:"Quick join to plugNmeet using PHP",source:"@site/docs/tutorials/quick_php.md",sourceDirName:"tutorials",slug:"/tutorials/quick_php",permalink:"/docs/tutorials/quick_php",draft:!1,unlisted:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/edit/main/docs/tutorials/quick_php.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Quick join to plugNmeet using PHP",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scalable/Distributed setup",permalink:"/docs/developer-guide/scalable-setup"},next:{title:"Introduction",permalink:"/docs/api/intro"}},l={},u=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"quick-join-using-php",children:"Quick join using PHP"}),"\n",(0,o.jsx)(n.p,{children:"In this section you'll learn how to generate join token for joining a session using PHP. The flow will be like this:"}),"\n",(0,o.jsx)("img",{src:"/img/tutorials/quick_join_flow.png",width:"400",alt:"quick_join_flow.png",loading:"lazy"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Step one to download ",(0,o.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-sdk-php/releases",children:"plugNmeet-sdk-php"})," library"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["We'll use ",(0,o.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-sdk-php/blob/main/examples/plugNmeetConnect.php",children:"plugNmeetConnect.php"})," class."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a file ",(0,o.jsx)(n.code,{children:"quickJoin.php"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-PHP",children:'require __DIR__ . "/plugNmeetConnect.php";\n\n$config = new stdClass();\n$config->plugnmeet_server_url = "http://localhost:8080";\n$config->plugnmeet_api_key = "plugnmeet";\n$config->plugnmeet_secret = "zumyyYWqv7KR2kUqvYdq4z4sXg7XTBD2ljT6";\n\n$connect = new plugNmeetConnect($config);\n\n$roomId = "room01"; // must be unique. You can also use $connect->getUUID();\n$max_participants = 0; // value 0 means no limit (unlimited)\n$user_full_name = "Your name";\n$userId = "Your-Unique-User-Id"; // must be unique for each user.\n\n$roomMetadata = array(\n    "room_features" => array(\n        "allow_webcams" => true,\n        "mute_on_start" => false,\n        "allow_screen_share" => true,\n        "allow_recording" => true,\n        "allow_rtmp" => true,\n        "allow_view_other_webcams" => true,\n        "allow_view_other_users_list" => true,\n        "admin_only_webcams" => false,\n    ),\n    "chat_features" => array(\n        "allow_chat" => true,\n        "allow_file_upload" => true\n    ),\n    "shared_note_pad_features" => array(\n        "allowed_shared_note_pad" => false\n    ),\n    "whiteboard_features" => array(\n        "allowed_whiteboard" => false\n    ),\n    "default_lock_settings" => array(\n        "lock_microphone" => false,\n        "lock_webcam" => false,\n        "lock_screen_sharing" => true,\n        "lock_chat" => false,\n        "lock_chat_send_message" => false,\n        "lock_chat_file_share" => false,\n    )\n);\n$isRoomActive = false;\n$output = new stdClass();\n$output->status = false;\n\ntry {\n    $res = $connect->isRoomActive($roomId);\n    $isRoomActive = $res->getStatus();\n    $output->status = true;\n    $output->msg = $res->getResponseMsg();\n} catch (Exception $e) {\n    $output->msg = $e->getMessage();\n}\n\nif (!$isRoomActive && $output->status) {\n    try {\n        $create = $connect->createRoom($roomId, "Test room", "Welcome to room", $max_participants, "", $roomMetadata);\n\n        $isRoomActive = $create->getStatus();\n        $output->status = $create->getStatus();\n        $output->msg = $create->getResponseMsg();\n    } catch (Exception $e) {\n        $output->msg = $e->getMessage();\n    }\n}\n\nif ($isRoomActive && $output->status) {\n    try {\n        $join = $connect->getJoinToken($roomId, $user_full_name, $userId, true);\n\n        $output->url = $config->plugnmeet_server_url . "?access_token=" . $join->getToken();\n        $output->status = $join->getStatus();\n        $output->msg = $join->getResponseMsg();\n    } catch (Exception $e) {\n        $output->msg = $e->getMessage();\n    }\n}\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["When we'll get value of ",(0,o.jsx)(n.code,{children:"$output->url"})," that time we can redirect user like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-PHP",children:'header("Location: " . $output->url);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can also build plugNmeet client interface by using ",(0,o.jsx)(n.a,{href:"/docs/api/get-client-files",children:"getClientFiles"})," API. You'll be able to customize the page more freely and won't need to use iFrame. Have a look an example of ",(0,o.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-sdk-php/blob/main/examples/conference.php",children:"conference.php"})," file."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(7294);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);