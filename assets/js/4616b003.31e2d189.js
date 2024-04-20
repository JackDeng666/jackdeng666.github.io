"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[5609],{4464:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>R,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var s=n(3274),o=n(9128);const c={id:"install-drone",sidebar_label:"\u5b89\u88c5 drone \u7684 server \u548c runner",title:"\u5b89\u88c5 drone \u7684 server \u548c runner"},i=void 0,d={id:"ci-cd/install-drone",title:"\u5b89\u88c5 drone \u7684 server \u548c runner",description:"\u5b89\u88c5 Drone Server",source:"@site/docs/ci-cd/01-install-drone.md",sourceDirName:"ci-cd",slug:"/ci-cd/install-drone",permalink:"/docs/ci-cd/install-drone",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"install-drone",sidebar_label:"\u5b89\u88c5 drone \u7684 server \u548c runner",title:"\u5b89\u88c5 drone \u7684 server \u548c runner"},sidebar:"ciCd",previous:{title:"\u4ecb\u7ecd\u548c\u51c6\u5907\u5de5\u4f5c",permalink:"/docs/ci-cd"},next:{title:"\u521d\u6b65\u5b9e\u8df5 CICD",permalink:"/docs/ci-cd/practice-ci-cd"}},l={},t=[{value:"\u5b89\u88c5 Drone Server",id:"\u5b89\u88c5-drone-server",level:2},{value:"<code>docker-compose.yml</code> \u6587\u4ef6\u793a\u4f8b",id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b",level:3},{value:"\u53d8\u91cf\u8bf4\u660e",id:"\u53d8\u91cf\u8bf4\u660e",level:3},{value:"\u5b89\u88c5 Drone Runner",id:"\u5b89\u88c5-drone-runner",level:2},{value:"<code>docker-compose.yml</code> \u6587\u4ef6\u793a\u4f8b",id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b-1",level:3},{value:"\u53d8\u91cf\u8bf4\u660e",id:"\u53d8\u91cf\u8bf4\u660e-1",level:3}];function a(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u5b89\u88c5-drone-server",children:"\u5b89\u88c5 Drone Server"}),"\n",(0,s.jsx)(r.p,{children:"\u76f4\u63a5\u5728\u670d\u52a1\u5668\u4e0a\u901a\u8fc7 docker \u542f\u52a8 Drone Server\u3002"}),"\n",(0,s.jsxs)(r.h3,{id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b",children:[(0,s.jsx)(r.code,{children:"docker-compose.yml"})," \u6587\u4ef6\u793a\u4f8b"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:"version: '3'\r\n\r\nservices:\r\n  drone:\r\n    image: drone/drone:2\r\n    container_name: drone-server\r\n    volumes:\r\n      - /data/drone:/data\r\n    restart: always\r\n    ports:\r\n      - 1688:80\r\n    environment:\r\n      - DRONE_GITEA_SERVER={Gitea\u7684URL\u5730\u5740}\r\n      - DRONE_GITEA_CLIENT_ID={Gitea\u5ba2\u6237\u7aefID}\r\n      - DRONE_GITEA_CLIENT_SECRET={Gitea\u5ba2\u6237\u7aef\u79d8\u94a5}\r\n      - DRONE_RPC_SECRET={\u4e0edrone runner\u901a\u4fe1\u7684\u79d8\u94a5}\r\n      - DRONE_SERVER_HOST={drone server\u7684url\u5730\u5740}\r\n      - DRONE_SERVER_PROTO=http\r\n      - DRONE_TLS_AUTOCERT=false\r\n      - DRONE_USER_CREATE=username:{Gitea\u7684\u8d85\u7ba1\u7528\u6237\u540d},admin:true\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u53d8\u91cf\u8bf4\u660e",children:"\u53d8\u91cf\u8bf4\u660e"}),"\n",(0,s.jsx)(r.p,{children:"Drone Server \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 Docker \u5bb9\u5668\uff0c\u4f7f\u7528 SQLite \u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u652f\u6301\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u52a8\u6001\u8bbe\u5b9a\u8fd0\u884c\u53c2\u6570\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"DRONE_GITEA_CLIENT_ID Gitea OAuth \u5ba2\u6237\u7aef ID"}),"\n",(0,s.jsx)(r.li,{children:"DRONE_GITEA_CLIENT_SECRET Gitea OAuth \u5ba2\u6237\u7aef\u5bc6\u94a5"}),"\n",(0,s.jsxs)(r.li,{children:["DRONE_GITEA_SERVER Gitea \u670d\u52a1\u5668\u5730\u5740\uff0c\u4f8b\u5982 ",(0,s.jsx)(r.code,{children:"http://git.xxx.com"}),"\u3002\u6ce8\u610f\u586b\u5199\u51c6\u786e\u7684 http(s) \u534f\u8bae\uff0c\u5426\u5219\u60a8\u4f1a\u770b\u5230\u6765\u81ea Gitea \u7684\u9519\u8bef\u62a5\u544a\uff1aunsupported protocol scheme\u3002"]}),"\n",(0,s.jsx)(r.li,{children:"DRONE_RPC_SECRET \u5171\u4eab\u5bc6\u94a5\u3002\u8fd9\u4e2a\u5bc6\u94a5\u7528\u4e8e\u9a8c\u8bc1 Drone Server \u548c Runner \u4e4b\u95f4\u7684 RPC \u8fde\u63a5\u3002\u56e0\u6b64\uff0c\u5728 Server \u548c Runner \u4e0a\u90fd\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u94a5\u3002"}),"\n",(0,s.jsxs)(r.li,{children:["DRONE_SERVER_HOST \u60a8\u8bbf\u95ee Drone \u65f6\u6240\u7528\u7684\u57df\u540d\u6216 IP \u5730\u5740\u3002\u5982\u679c\u4f7f\u7528 IP \u5730\u5740\uff0c\u8fd8\u5e94\u8be5\u5305\u542b\u7aef\u53e3\u3002 \u4f8b\u5982 ",(0,s.jsx)(r.code,{children:"http://ci.xxx.com"}),"\u3002"]}),"\n",(0,s.jsx)(r.li,{children:"DRONE_SERVER_PROTO \u8bbe\u7f6e\u670d\u52a1\u5668\u7684\u534f\u8bae\uff0c\u4f7f\u7528\uff1ahttp \u6216 https\u3002 \u5982\u679c\u60a8\u5df2\u7ecf\u914d\u7f6e ssl \u6216 acme\uff0c\u6b64\u5b57\u6bb5\u9ed8\u8ba4\u4e3a https\u3002"}),"\n",(0,s.jsxs)(r.li,{children:["DRONE_USER_CREATE \u6307\u5b9a\u67d0\u4e2a\u7528\u6237\u4e3a\u7ba1\u7406\u5458\uff0c\u4f8b\u5982\uff1a",(0,s.jsx)(r.code,{children:"username:john,admin:true"}),"\u3002\u53c2\u8003\u6587\u6863 ",(0,s.jsx)(r.a,{href:"https://docs.drone.io/server/user/admin/",children:"Administrators"}),"\uff0c\u7ba1\u7406\u5458\u6709\u6743\u7ba1\u7406\u5176\u4ed6\u5e10\u6237\u3001\u7f16\u8f91\u4ed3\u5e93\u5e93\u8be6\u7ec6\u4fe1\u606f\u3001\u7f16\u8f91\u4ed3\u5e93\u4fe1\u4efb\u6807\u5fd7\u3001\u8bbf\u95ee\u53d7\u9650\u5236\u7684 API\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u5b89\u88c5-drone-runner",children:"\u5b89\u88c5 Drone Runner"}),"\n",(0,s.jsx)(r.p,{children:"\u5728\u51c6\u5907\u7528\u6765\u8dd1 CI \u7684\u672c\u5730\u673a\u5668\u5b89\u88c5 Drone Runner\u3002"}),"\n",(0,s.jsxs)(r.h3,{id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b-1",children:[(0,s.jsx)(r.code,{children:"docker-compose.yml"})," \u6587\u4ef6\u793a\u4f8b"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:"version: '3'\r\n\r\nservices:\r\n  drone-runner:\r\n    image: drone/drone-runner-docker:1\r\n    container_name: drone-runner\r\n    restart: always\r\n    ports:\r\n      - 3222:3000\r\n    volumes:\r\n      - /var/run/docker.sock:/var/run/docker.sock\r\n    environment:\r\n      - DRONE_RPC_PROTO=http\r\n      - DRONE_RPC_HOST={drone server\u7684url\u5730\u5740}\r\n      - DRONE_RPC_SECRET={\u4e0edrone server\u901a\u4fe1\u7684\u79d8\u94a5}\r\n      - DRONE_LIMIT_TRUSTED=false\r\n      - DRONE_RUNNER_CAPACITY=2\r\n      - DRONE_RUNNER_NAME=drone-cli\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u53d8\u91cf\u8bf4\u660e-1",children:"\u53d8\u91cf\u8bf4\u660e"}),"\n",(0,s.jsx)(r.p,{children:"Drone Server \u7ba1\u7406 CI/CD \u7cfb\u7edf\u7684\u8c03\u5ea6\uff0c\u800c Drone Runner \u5219\u662f CI/CD \u6d41\u6c34\u7ebf\u7684\u6267\u884c\u8005\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"DRONE_RPC_HOST \u586b\u5199 Drone Server \u7684\u4e3b\u673a\u540d\uff08\u4ee5\u53ca\u53ef\u9009\u586b\u7684\u7aef\u53e3\u53f7\uff09\u3002\u57fa\u4e8e PRC \u534f\u8bae\u8fde\u63a5 Runner \u4e0e Server\uff0c\u63a5\u6536\u6d41\u6c34\u7ebf\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(r.li,{children:"DRONE_RPC_PROTO \u4f20\u8f93\u534f\u8bae\uff1ahttp \u6216 https"}),"\n",(0,s.jsx)(r.li,{children:"DRONE_RPC_SECRET \u4e0e Drone Server \u5171\u4eab\u7684\u5bc6\u94a5"}),"\n",(0,s.jsx)(r.li,{children:"DRONE_RUNNER_CAPACITY Runner \u53ef\u4ee5\u5e76\u53d1\u6267\u884c\u7684\u6d41\u6c34\u7ebf\u6570\u91cf\uff0c\u9ed8\u8ba4\uff1a2"}),"\n",(0,s.jsx)(r.li,{children:"DRONE_RUNNER_NAME \u81ea\u5b9a\u4e49 Runner \u540d\u79f0"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u68c0\u67e5 Drone Runner \u662f\u5426\u548c Drone Server \u8fde\u901a\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"docker logs drone-runner\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u663e\u793a\u4e0b\u65b9\u5185\u5bb9\u5373\u8868\u793a\u8fde\u63a5\u6210\u529f\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"starting the server\r\nsuccessfully pinged the remote server\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6b64\u65f6\u53ef\u4ee5\u767b\u5f55 Drone \u7f51\u9875\u9762\u677f\uff0c\u4f8b\u5982 ",(0,s.jsx)(r.code,{children:"http://ci.xxx.com"}),"\uff0c\u70b9\u51fb continue \u8df3\u8f6c\u5230 Gitea \u6388\u6743\u9875\u9762\uff0c\u70b9\u51fb\u5e94\u7528\u6388\u6743\uff0c\u7136\u540e\u586b\u5199\u4e00\u4e0b\u6ce8\u518c\u4fe1\u606f\u5373\u53ef\u767b\u5f55\u4e0a\u53bb\u4e86\u3002"]})]})}function R(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9128:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var s=n(9474);const o={},c=s.createContext(o);function i(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);