"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[941],{9884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var s=t(5893),r=t(1151);const l={description:"plugNmeet Scalable/Distributed setup",sidebar_position:4},o="Scalable/Distributed setup",i={id:"developer-guide/scalable-setup",title:"Scalable/Distributed setup",description:"plugNmeet Scalable/Distributed setup",source:"@site/docs/developer-guide/scalable-setup.md",sourceDirName:"developer-guide",slug:"/developer-guide/scalable-setup",permalink:"/docs/developer-guide/scalable-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/mynaparrot/plugNmeet-docs/tree/main/docs/docs/developer-guide/scalable-setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"plugNmeet Scalable/Distributed setup",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Design Customisation",permalink:"/docs/developer-guide/design-customisation"},next:{title:"Quick join using PHP",permalink:"/docs/tutorials/quick_php"}},c={},a=[{value:"Servers",id:"servers",level:2},{value:"OS",id:"os",level:2},{value:"Setup docker",id:"setup-docker",level:2},{value:"Font installation",id:"font-installation",level:2},{value:"Setup livekit",id:"setup-livekit",level:2},{value:"Setup plugNmeet-etherpad",id:"setup-plugnmeet-etherpad",level:2},{value:"Setup plugNmeet-server",id:"setup-plugnmeet-server",level:2},{value:"Setup plugNmeet-recorder",id:"setup-plugnmeet-recorder",level:2},{value:"Setup HAProxy",id:"setup-haproxy",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"scalabledistributed-setup",children:"Scalable/Distributed setup"}),"\n",(0,s.jsx)(n.p,{children:"plugNmeet allows you to install its components on multiple servers. We'll go over it in this article."}),"\n",(0,s.jsx)(n.h2,{id:"servers",children:"Servers"}),"\n",(0,s.jsx)(n.p,{children:"I'm assuming we've following servers. You can have any number based on your requirements. For the services of Redis, MariaDB, and NFS, we will use a third-party provider. If you'd like, you can set up your own, but we won't go into that setup in this article."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Component"}),(0,s.jsx)(n.th,{children:"IPs"}),(0,s.jsx)(n.th,{children:"Ports"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Domain"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-server",children:"plugNmeet-server"})}),(0,s.jsxs)(n.td,{children:["100.100.100.1",(0,s.jsx)("br",{}),"100.100.100.2"]}),(0,s.jsx)(n.td,{children:"8080/tcp"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"plugnmeet.example.com"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["We'll use 2 servers for plugNmeet. Ports open only for HAProxy,",(0,s.jsx)(n.strong,{children:"not public"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://github.com/livekit/livekit",children:"livekit"})}),(0,s.jsxs)(n.td,{children:["100.100.100.10",(0,s.jsx)("br",{})," 100.100.100.11",(0,s.jsx)("br",{})," 100.100.100.12"]}),(0,s.jsxs)(n.td,{children:["7880/tcp",(0,s.jsx)("br",{}),"7881/tcp",(0,s.jsx)("br",{}),"5349/tcp",(0,s.jsx)("br",{}),"50000-60000/udp"]}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["livekit.example.com",(0,s.jsx)("br",{}),"turn.example.com"]}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["We'll use 3 servers for livekit. 7880/tcp & 5349/tcp open only for HAProxy, ",(0,s.jsx)(n.strong,{children:"not public"}),". 7881/tcp & 50000-60000/udp ",(0,s.jsx)(n.strong,{children:"open for public"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-recorder",children:"plugNmeet-recorder"})}),(0,s.jsxs)(n.td,{children:["100.100.100.20",(0,s.jsx)("br",{})," 100.100.100.21 ",(0,s.jsx)("br",{}),"100.100.100.22"]}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"n/a"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"We'll use 3 servers for recorder. Recorder doesn't need any port."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-etherpad",children:"plugNmeet-etherpad"})}),(0,s.jsx)(n.td,{children:"100.100.100.30"}),(0,s.jsx)(n.td,{children:"9001/tcp"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ether.example.com"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"We'll use 1 servers for etherpad. 9001/tcp open only for HAProxy, not public."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"HAProxy"}),(0,s.jsx)(n.td,{children:"100.100.100.35"}),(0,s.jsxs)(n.td,{children:["80/tcp",(0,s.jsx)("br",{}),"443/tcp"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"n/a"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"We'll install HAProxy in one server. Both ports are open for public"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Mariadb"}),(0,s.jsx)(n.td,{children:"100.100.100.40"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"n/a"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"We've a Mariadb cluster from provider"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Redis"}),(0,s.jsx)(n.td,{children:"100.100.100.50"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"n/a"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"We've a Redis cluster from provider"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"NFS"}),(0,s.jsx)(n.td,{children:"100.100.100.60"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"n/a"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"We've a NFS storage from provider"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"os",children:"OS"}),"\n",(0,s.jsx)(n.p,{children:"We'll use Ubuntu for all of above servers."}),"\n",(0,s.jsx)(n.h2,{id:"setup-docker",children:"Setup docker"}),"\n",(0,s.jsxs)(n.p,{children:["We'll use docker for ",(0,s.jsx)(n.code,{children:"plugNmeet-server"}),", ",(0,s.jsx)(n.code,{children:"livekit"})," and ",(0,s.jsx)(n.code,{children:"plugNmeet-etherpad"}),". So, we can install docker for all of those servers"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo apt update && sudo apt -y install ca-certificates curl gnupg lsb-release\n\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n\necho \\\n    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n    $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list >/dev/null\n\nsudo apt update && sudo apt -y install docker-ce docker-ce-cli containerd.io docker-compose\n'})}),"\n",(0,s.jsx)(n.h2,{id:"font-installation",children:"Font installation"}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"plugNmeet-server"})," and ",(0,s.jsx)(n.code,{children:"plugNmeet-etherpad"})," servers"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update && apt -y install --no-install-recommends \\\n    fonts-arkpandora \\\n    fonts-crosextra-carlito \\\n    fonts-crosextra-caladea \\\n    fonts-noto \\\n    fonts-noto-cjk \\\n    fonts-noto-core \\\n    fonts-noto-mono \\\n    fonts-noto-ui-core \\\n    fonts-liberation \\\n    fonts-dejavu \\\n    fonts-dejavu-extra \\\n    fonts-liberation \\\n    fonts-liberation2 \\\n    fonts-linuxlibertine \\\n    fonts-sil-gentium \\\n    fonts-sil-gentium-basic \\\n    fontconfig\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup-livekit",children:"Setup livekit"}),"\n",(0,s.jsxs)(n.p,{children:["Login to ",(0,s.jsx)(n.code,{children:"livekit"})," server & follow:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /opt/plugNmeet\ncd /opt/plugNmeet\ntouch docker-compose.yaml\ntouch livekit.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"docker-compose.yaml"})," & add:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'version: "3"\nservices:\n  livekit:\n    image: livekit/livekit-server\n    restart: always\n    network_mode: "host"\n    volumes:\n      - .:/app\n      - /etc/ssl/certs/:/etc/ssl/certs/:ro\n    command: --config "/app/livekit.yaml" --node-ip PUBLIC_IP\n    healthcheck:\n      test: wget --no-verbose --tries=5 --spider http://localhost:7880 || kill 1\n      interval: 20s\n      timeout: 1s\n      retries: 5\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Change ",(0,s.jsx)(n.code,{children:"PUBLIC_IP"})," with the public IP of this server."]}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"livekit.yaml"})," & add:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'port: 7880\nrtc:\n  port_range_start: 50000\n  port_range_end: 60000\n  tcp_port: 7881\n  use_external_ip: true\nredis:\n  address: 100.100.100.50:6379\n  password: "my-pass"\n  db: 0\nroom:\n  auto_create: false\nkeys:\n  LIVEKIT_API_KEY: LIVEKIT_SECRET\nwebhook:\n  api_key: LIVEKIT_API_KEY\n  urls:\n    - "https://plugnmeet.example.com/webhook"\nturn:\n  enabled: true\n  udp_port: 443\n  tls_port: 5349\n  external_tls: true\n  domain: turn.example.com\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"LIVEKIT_API_KEY"}),", ",(0,s.jsx)(n.code,{children:"LIVEKIT_SECRET"}),", ",(0,s.jsx)(n.code,{children:"turn.example.com"}),", ",(0,s.jsx)(n.code,{children:"plugnmeet.example.com"}),", ",(0,s.jsx)(n.code,{children:"redis"})," with correct info. You can generate ",(0,s.jsx)(n.code,{children:"LIVEKIT_SECRET"})," by:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 36 | head -n 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure you're using same information to ",(0,s.jsx)(n.strong,{children:"all of your livekit server"}),".\nStart docker:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup-plugnmeet-etherpad",children:"Setup plugNmeet-etherpad"}),"\n",(0,s.jsxs)(n.p,{children:["Login to ",(0,s.jsx)(n.code,{children:"etherpad"})," server & follow:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /opt/plugNmeet/etherpad\nsudo mkdir -p /opt/plugNmeet/redis-data\nsudo chmod 777 /opt/plugNmeet/redis-data\ncd /opt/plugNmeet\nwget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install-files/settings.json -O etherpad/settings.json\ntouch etherpad/APIKEY.txt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"docker-compose.yaml"})," & add:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'version: "3"\nservices:\n  redis:\n    image: redis:6\n    restart: always\n    network_mode: "host"\n    volumes:\n      - ./redis-data:/data\n    healthcheck:\n      test: "redis-cli ping || kill 1"\n      interval: 10s\n      timeout: 1s\n      retries: 5\n  etherpad:\n    image: mynaparrot/plugnmeet-etherpad\n    restart: always\n    network_mode: "host"\n    volumes:\n      - ./etherpad/APIKEY.txt:/opt/etherpad-lite/APIKEY.txt\n      - ./etherpad/settings.json:/opt/etherpad-lite/settings.json\n      - /usr/share/fonts/:/usr/share/fonts/:ro\n      - /etc/fonts/:/etc/fonts/:ro\n      - /usr/share/fontconfig/:/usr/share/fontconfig/:ro\n      - /var/cache/fontconfig/:/var/cache/fontconfig/:ro\n    depends_on:\n      - redis\n    healthcheck:\n      test: curl -f --retry 5 --retry-delay 3 "http://localhost:9001/api" || kill 1\n      interval: 20s\n      timeout: 1s\n      retries: 5\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"etherpad/APIKEY.txt"})," & replace ",(0,s.jsx)(n.code,{children:"ETHERPAD_API"})," with correct key. You can generate key by:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 80 | head -n 1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start docker:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup-plugnmeet-server",children:"Setup plugNmeet-server"}),"\n",(0,s.jsxs)(n.p,{children:["Login to ",(0,s.jsx)(n.code,{children:"plugNmeet-server"})," server & follow:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo update && sudo apt install --no-install-recommends -y wget libreoffice mupdf-tools\nsudo mkdir -p /opt/plugNmeet/recording_files\ncd /opt/plugNmeet\ntouch docker-compose.yaml\ntouch config.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-client",children:"plugNmeet-client"})," configuration. Replace ",(0,s.jsx)(n.code,{children:"plugnmeet.example.com"})," with correct domain."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/mynaparrot/plugNmeet-client/releases/latest/download/client.zip -O client.zip\nunzip client.zip\ncp client/dist/assets/config_sample.js client/dist/assets/config.js\n\nsed -i \"s/window.PLUG_N_MEET_SERVER_URL.*/window.PLUG_N_MEET_SERVER_URL = 'https:\\/\\/plugnmeet.example.com'\\;/g\" \\\n    client/dist/assets/config.js\n\nrm client.zip\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"docker-compose.yaml"})," & write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'version: "3"\nservices:\n  plugnmeet:\n    image: mynaparrot/plugnmeet-server\n    restart: always\n    network_mode: "host"\n    volumes:\n      - .:/app\n      - /etc/ssl/certs/:/etc/ssl/certs/:ro\n      - /usr/share/fonts/:/usr/share/fonts/:ro\n      - /etc/fonts/:/etc/fonts/:ro\n      - /usr/share/fontconfig/:/usr/share/fontconfig/:ro\n      - /var/cache/fontconfig/:/var/cache/fontconfig/:ro\n    command: --config "/app/config.yaml"\n    healthcheck:\n      test: wget --no-verbose --tries=5 --spider http://localhost:8080 || kill 1\n      interval: 20s\n      timeout: 1s\n      retries: 5\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"config.yaml"}),". Latest contents can be found from either ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/mynaparrot/plugNmeet-server/main/config_sample.yaml",children:"here"})," or ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install-files/config.yaml",children:"here"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'client:\n  port: 8080\n  debug: false\n  path: "/app/client/dist"\n  ## this will require during authentication. Use random secret.\n  # openssl rand -hex 32\n  # OR\n  # cat /dev/urandom | tr -dc \'a-zA-Z0-9\' | fold -w 36 | head -n 1\n  api_key: PLUG_N_MEET_API_KEY\n  secret: PLUG_N_MEET_SECRET\n  webhook_conf:\n    # enable webhook. This will post response for different events\n    enable: false\n    # set url bellow. This will be use as global.\n    # this is optional\n    url: ""\n    # During create room you can set custom hook URL too.\n    # if you set enable_for_per_meeting: true\n    # then extra post response will send in that address too\n    enable_for_per_meeting: false\n  prometheus:\n    enable: false\n    metrics_path: "/metrics"\n  proxy_header: "X-Forwarded-For"\nlog_settings:\n  log_file: "/app/log/plugNmeet.log"\n  # maxsize of log file in MB\n  maxsize: 20\n  maxbackups: 4\n  # max age of log before rotate in days\n  maxage: 2\nlivekit_info:\n  host: "https://livekit.example.com"\n  api_key: LIVEKIT_API_KEY\n  secret: LIVEKIT_SECRET\n  # value in minutes. Default 10 minutes. Client will renew token automatically\n  token_validity: 10m\nredis_info:\n  address: 100.100.100.50:6379\n  password: "my-pass"\n  db: 0\nmysql_info:\n  host: 100.100.100.40\n  port: 3306\n  username: "root"\n  password: "DB_ROOT_PASSWORD"\n  db: "plugnmeet"\n  prefix: "pnm_"\nupload_file_settings:\n  path: "/app/upload"\n  # file size in MB. Default 50MB\n  max_size: 50\n  # By default, files will be deleted as soon as the session will be finish.\n  # You can set it true to disable deleting files.\n  keep_forever: false\n  allowed_types:\n    - "jpg"\n    - "png"\n    - "jpeg"\n    - "svg"\n    - "pdf"\n    - "docx"\n    - "txt"\n    - "xlsx"\n    - "pptx"\n    - "zip"\n    - "mp4"\n    - "webm"\n    - "mp3"\nrecorder_info:\n  # this value should be same as recorder\'s copy_to_dir path\n  recording_files_path: "/app/recording_files"\n  token_validity: 30m\nshared_notepad:\n  enabled: true\n  # multiple hosts can be added here\n  # server will be selected based on load\n  # the value of id should be unique\n  etherpad_hosts:\n    -\n      id: "node_01"\n      host: "https://ether.example.com"\n      api_key: "ETHERPAD_API"\nlti_info:\n  v1_tool_url: https://plugnmeet.example.com/lti/v1\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"PLUG_N_MEET_API_KEY"}),", ",(0,s.jsx)(n.code,{children:"PLUG_N_MEET_SECRET"}),",",(0,s.jsx)(n.code,{children:"LIVEKIT_API_KEY"}),", ",(0,s.jsx)(n.code,{children:"LIVEKIT_SECRET"}),", ",(0,s.jsx)(n.code,{children:"turn.example.com"}),", ",(0,s.jsx)(n.code,{children:"plugnmeet.example.com"}),", ",(0,s.jsx)(n.code,{children:"redis"}),", ",(0,s.jsx)(n.code,{children:"ether.example.com"}),", ",(0,s.jsx)(n.code,{children:"ETHERPAD_API"}),", ",(0,s.jsx)(n.code,{children:"mysql_info"})," with correct info. You can generate ",(0,s.jsx)(n.code,{children:"PLUG_N_MEET_SECRET"})," by:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 36 | head -n 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure you're using same information to ",(0,s.jsx)(n.strong,{children:"all of your plugNmeet server"}),".\nStart docker:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We'll mount ",(0,s.jsx)(n.code,{children:"NFS"})," server into ",(0,s.jsx)(n.code,{children:"/opt/plugNmeet/recording_files"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install nfs-common\nsudo mount 100.100.100.60:/recording_files /opt/plugNmeet/recording_files\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To make it permanent by adding in ",(0,s.jsx)(n.code,{children:"/etc/fstab"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"100.100.100.60:/recording_files    /opt/plugNmeet/recording_files   nfs4    noauto  0  0\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup-plugnmeet-recorder",children:"Setup plugNmeet-recorder"}),"\n",(0,s.jsxs)(n.p,{children:["Login to ",(0,s.jsx)(n.code,{children:"plugNmeet-recorder"})," server & follow:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'mkdir -p /opt/plugNmeet/\ncd /opt/plugNmeet\n\ncurl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add\necho "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >/etc/apt/sources.list.d/google-chrome.list\n\n## prepare nodejs\ncurl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -\n\n## install require software\nsudo apt update && sudo apt -y install nodejs xvfb google-chrome-stable ffmpeg unzip\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install-files/plugnmeet-recorder.service -O /etc/systemd/system/plugnmeet-recorder.service\nwget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install-files/plugnmeet-recorder@main.service -O /etc/systemd/system/plugnmeet-recorder@main.service\nwget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install-files/plugnmeet-recorder@websocket.service -O /etc/systemd/system/plugnmeet-recorder@websocket.service\n\nsystemctl daemon-reload\nsystemctl enable plugnmeet-recorder\nsystemctl enable plugnmeet-recorder@main\nsystemctl enable plugnmeet-recorder@websocket\n\nwget https://github.com/mynaparrot/plugNmeet-recorder/releases/latest/download/recorder.zip -O recorder.zip\nunzip recorder.zip\n\ncp recorder/config_sample.yaml recorder/config.yaml\nnpm install --ignore-scripts --production -C recorder\nrm recorder.zip\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now open ",(0,s.jsx)(n.code,{children:"recorder/config.yaml"})," & replace ",(0,s.jsx)(n.code,{children:"PLUG_N_MEET_SERVER_DOMAIN"}),", ",(0,s.jsx)(n.code,{children:"PLUG_N_MEET_API_KEY"}),", ",(0,s.jsx)(n.code,{children:"PLUG_N_MEET_SECRET"})," & ",(0,s.jsx)(n.code,{children:"redis"})," info. Make sure you're using same info as above setups into all recording servers."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Note: Make sure ",(0,s.jsx)(n.code,{children:"id"})," and ",(0,s.jsx)(n.code,{children:"sub_path"})," info is unique for each server."]})," For example: server 1 ",(0,s.jsx)(n.code,{children:"node_01"}),"; server 2 ",(0,s.jsx)(n.code,{children:"node_02"}),"; server 3 ",(0,s.jsx)(n.code,{children:"node_03"})," ....."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WEBSOCKET_AUTH_TOKEN"})," can be generate by:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 10 | head -n 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We'll mount ",(0,s.jsx)(n.code,{children:"NFS"})," server into ",(0,s.jsx)(n.code,{children:"/opt/plugNmeet/recording_files"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install nfs-common\nsudo mount 100.100.100.60:/recording_files /opt/plugNmeet/recording_files\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To make it permanent by adding in ",(0,s.jsx)(n.code,{children:"/etc/fstab"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"100.100.100.60:/recording_files    /opt/plugNmeet/recording_files   nfs4    noauto  0  0\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now start server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl start plugnmeet-recorder\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup-haproxy",children:"Setup HAProxy"}),"\n",(0,s.jsx)(n.p,{children:"Login to your HAProxy server & follow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt update && apt install -y --no-install-recommends software-properties-common\nadd-apt-repository ppa:vbernat/haproxy-2.6 -y\napt -y update && apt install -y haproxy\nservice haproxy stop\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp /etc/haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg_bk\nmkdir -p /etc/haproxy/ssl\nwget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install-files/haproxy_lets_encrypt.cfg -O /etc/haproxy/haproxy.cfg\nservice haproxy start\n"})}),"\n",(0,s.jsx)(n.p,{children:"Configure lets encrypt. Make sure replace with correct info:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt install -y snapd\n\nsnap install core\nsnap refresh core\nsnap install --classic certbot\nln -s /snap/bin/certbot /usr/bin/certbot\n\ncertbot certonly --standalone -d PLUG_N_MEET_SERVER_DOMAIN -d TURN_SERVER_DOMAIN \\\n-d ETHERPAD_SERVER_DOMAIN -d LIVEKIT_SERVER_DOMAIN \\\n--non-interactive --agree-tos --email YOUR_EMAIL \\\n--http-01-port=9080\n\nln -s /etc/letsencrypt/live/PLUG_N_MEET_SERVER_DOMAIN/fullchain.pem /etc/haproxy/ssl/PLUG_N_MEET_SERVER_DOMAIN.pem\nln -s /etc/letsencrypt/live/PLUG_N_MEET_SERVER_DOMAIN/privkey.pem /etc/haproxy/ssl/PLUG_N_MEET_SERVER_DOMAIN.pem.key\n\nopenssl dhparam -out /etc/haproxy/dhparams-2048.pem 2048\nwget https://raw.githubusercontent.com/mynaparrot/plugNmeet-install/main/install-files/001-restart-haproxy -O /etc/letsencrypt/renewal-hooks/post/001-restart-haproxy\nchmod +x /etc/letsencrypt/renewal-hooks/post/001-restart-haproxy\n\nservice haproxy stop\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now edit ",(0,s.jsx)(n.code,{children:"/etc/haproxy/haproxy.cfg"})," as bellow:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"global\n\tlog /dev/log\tlocal0\n\tlog /dev/log\tlocal1 notice\n\tchroot /var/lib/haproxy\n\tstats socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners\n\tstats timeout 30s\n\tuser haproxy\n\tgroup haproxy\n\tdaemon\n\n\t# Default SSL material locations\n\tca-base /etc/ssl/certs\n\tcrt-base /etc/ssl/private\n\tssl-dh-param-file /etc/haproxy/dhparams-2048.pem\n\n\t# See: https://ssl-config.mozilla.org/#server=haproxy&server-version=2.0.3&config=intermediate\n    ssl-default-bind-ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384\n    ssl-default-bind-ciphersuites TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256\n    ssl-default-bind-options ssl-min-ver TLSv1.2 no-tls-tickets\n\ndefaults\n\tlog\tglobal\n\tmode\thttp\n\t#option\thttplog\n\toption\tdontlognull\n    timeout connect 5000\n    timeout client  50000\n    timeout server  50000\n    default-server init-addr last,libc,none\n\terrorfile 400 /etc/haproxy/errors/400.http\n\terrorfile 403 /etc/haproxy/errors/403.http\n\terrorfile 408 /etc/haproxy/errors/408.http\n\terrorfile 500 /etc/haproxy/errors/500.http\n\terrorfile 502 /etc/haproxy/errors/502.http\n\terrorfile 503 /etc/haproxy/errors/503.http\n\terrorfile 504 /etc/haproxy/errors/504.http\n\nfrontend frontend-http\n    bind :80\n    mode http\n\n    # ACL for detecting Let's Encrypt validation requests\n    acl is_certbot path_beg /.well-known/acme-challenge/\n    use_backend backend-certbot if is_certbot\n\n    ## without acme-challenge we'll redirect to https\n    ## because our service won't work on non-ssl\n    http-request redirect scheme https if ! is_certbot\n\n    ## by default it will be certbot server\n    default_backend backend-certbot\n\nbackend backend-certbot\n    mode http\n    server certbot 127.0.0.1:9080\n\nfrontend ft_ssl\n    mode tcp\n\n    # HAProxy will take the fitting certificate from the available ones\n    bind *:443 ssl crt /etc/haproxy/ssl/\n\n    tcp-request inspect-delay 5s\n    tcp-request content accept if { req_ssl_hello_type 1 }\n\n    # Pass TURN requests to LiveKit Turn server\n    # LiveKit expects unencrypted traffic on tls_port,\n    # and still advertise tls_port as a TURN/TLS candidate.\n    use_backend bk_livekit_turn  if { ssl_fc_sni -i TURN_SERVER_DOMAIN }\n    use_backend bk_livekit  if { ssl_fc_sni -i LIVEKIT_SERVER_DOMAIN }\n    use_backend bk_etherpad  if { ssl_fc_sni -i ETHERPAD_SERVER_DOMAIN }\n\n    ## default will be bk_plugnmeet_server\n    default_backend bk_plugnmeet_server\n\nbackend bk_livekit_turn\n    mode tcp\n\n    server s1 100.100.100.10:5349 check\n    server s2 100.100.100.11:5349 check\n    server s3 100.100.100.12:5349 check\n\nbackend bk_plugnmeet_server\n    mode http\n    option forwardfor\n\n    # Pass the requests to plugnmeet-server\n    server s1 100.100.100.1:8080 check\n    server s2 100.100.100.2:8080 check\n\nbackend bk_livekit_api\n    mode http\n    option forwardfor\n\n    # Pass the requests to the LiveKit HTTP API\n    server s1 100.100.100.10:7880 check\n    server s2 100.100.100.11:7880 check\n    server s3 100.100.100.12:7880 check\n\nbackend bk_etherpad\n    mode http\n    option forwardfor\n\n    # Pass the requests to etherpad\n    server s1 100.100.100.30:9001 check\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"TURN_SERVER_DOMAIN"}),", ",(0,s.jsx)(n.code,{children:"LIVEKIT_SERVER_DOMAIN"}),", ",(0,s.jsx)(n.code,{children:"ETHERPAD_SERVER_DOMAIN"})," with correct information"]}),"\n",(0,s.jsx)(n.p,{children:"Now start haproxy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"service start haproxy\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now using ",(0,s.jsx)(n.a,{href:"https://github.com/mynaparrot/plugNmeet-client",children:"client"})," you should be able to connect with ",(0,s.jsx)(n.code,{children:"plugNmeet"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(7294);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);