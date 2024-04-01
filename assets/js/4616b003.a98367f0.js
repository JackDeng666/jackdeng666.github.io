"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[7510],{9613:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>E});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,E=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?t.createElement(E,a(a({ref:r},s),{},{components:n})):t.createElement(E,a({ref:r},s))}));function E(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1860:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=n(8957),o=(n(9496),n(9613));const l={id:"install-drone",sidebar_label:"\u5b89\u88c5 drone \u7684 server \u548c runner",title:"\u5b89\u88c5 drone \u7684 server \u548c runner"},a=void 0,i={unversionedId:"ci-cd/install-drone",id:"ci-cd/install-drone",title:"\u5b89\u88c5 drone \u7684 server \u548c runner",description:"\u5b89\u88c5 Drone Server",source:"@site/docs/ci-cd/01-install-drone.md",sourceDirName:"ci-cd",slug:"/ci-cd/install-drone",permalink:"/docs/ci-cd/install-drone",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"install-drone",sidebar_label:"\u5b89\u88c5 drone \u7684 server \u548c runner",title:"\u5b89\u88c5 drone \u7684 server \u548c runner"},sidebar:"ciCd",previous:{title:"\u4ecb\u7ecd\u548c\u51c6\u5907\u5de5\u4f5c",permalink:"/docs/ci-cd"},next:{title:"\u521d\u6b65\u5b9e\u8df5 CICD",permalink:"/docs/ci-cd/practice-ci-cd"}},c={},u=[{value:"\u5b89\u88c5 Drone Server",id:"\u5b89\u88c5-drone-server",level:2},{value:"<code>docker-compose.yml</code> \u6587\u4ef6\u793a\u4f8b",id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b",level:3},{value:"\u53d8\u91cf\u8bf4\u660e",id:"\u53d8\u91cf\u8bf4\u660e",level:3},{value:"\u5b89\u88c5 Drone Runner",id:"\u5b89\u88c5-drone-runner",level:2},{value:"<code>docker-compose.yml</code> \u6587\u4ef6\u793a\u4f8b",id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b-1",level:3},{value:"\u53d8\u91cf\u8bf4\u660e",id:"\u53d8\u91cf\u8bf4\u660e-1",level:3}],s={toc:u},d="wrapper";function p(e){let{components:r,...n}=e;return(0,o.kt)(d,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5-drone-server"},"\u5b89\u88c5 Drone Server"),(0,o.kt)("p",null,"\u76f4\u63a5\u5728\u670d\u52a1\u5668\u4e0a\u901a\u8fc7 docker \u542f\u52a8 Drone Server\u3002"),(0,o.kt)("h3",{id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b"},(0,o.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")," \u6587\u4ef6\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\n\nservices:\n  drone:\n    image: drone/drone:2\n    container_name: drone-server\n    volumes:\n      - /data/drone:/data\n    restart: always\n    ports:\n      - 1688:80\n    environment:\n      - DRONE_GITEA_SERVER={Gitea\u7684URL\u5730\u5740}\n      - DRONE_GITEA_CLIENT_ID={Gitea\u5ba2\u6237\u7aefID}\n      - DRONE_GITEA_CLIENT_SECRET={Gitea\u5ba2\u6237\u7aef\u79d8\u94a5}\n      - DRONE_RPC_SECRET={\u4e0edrone runner\u901a\u4fe1\u7684\u79d8\u94a5}\n      - DRONE_SERVER_HOST={drone server\u7684url\u5730\u5740}\n      - DRONE_SERVER_PROTO=http\n      - DRONE_TLS_AUTOCERT=false\n      - DRONE_USER_CREATE=username:{Gitea\u7684\u8d85\u7ba1\u7528\u6237\u540d},admin:true\n")),(0,o.kt)("h3",{id:"\u53d8\u91cf\u8bf4\u660e"},"\u53d8\u91cf\u8bf4\u660e"),(0,o.kt)("p",null,"Drone Server \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 Docker \u5bb9\u5668\uff0c\u4f7f\u7528 SQLite \u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u652f\u6301\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u52a8\u6001\u8bbe\u5b9a\u8fd0\u884c\u53c2\u6570\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DRONE_GITEA_CLIENT_ID Gitea OAuth \u5ba2\u6237\u7aef ID"),(0,o.kt)("li",{parentName:"ul"},"DRONE_GITEA_CLIENT_SECRET Gitea OAuth \u5ba2\u6237\u7aef\u5bc6\u94a5"),(0,o.kt)("li",{parentName:"ul"},"DRONE_GITEA_SERVER Gitea \u670d\u52a1\u5668\u5730\u5740\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"http://git.xxx.com"),"\u3002\u6ce8\u610f\u586b\u5199\u51c6\u786e\u7684 http(s) \u534f\u8bae\uff0c\u5426\u5219\u60a8\u4f1a\u770b\u5230\u6765\u81ea Gitea \u7684\u9519\u8bef\u62a5\u544a\uff1aunsupported protocol scheme\u3002"),(0,o.kt)("li",{parentName:"ul"},"DRONE_RPC_SECRET \u5171\u4eab\u5bc6\u94a5\u3002\u8fd9\u4e2a\u5bc6\u94a5\u7528\u4e8e\u9a8c\u8bc1 Drone Server \u548c Runner \u4e4b\u95f4\u7684 RPC \u8fde\u63a5\u3002\u56e0\u6b64\uff0c\u5728 Server \u548c Runner \u4e0a\u90fd\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u94a5\u3002"),(0,o.kt)("li",{parentName:"ul"},"DRONE_SERVER_HOST \u60a8\u8bbf\u95ee Drone \u65f6\u6240\u7528\u7684\u57df\u540d\u6216 IP \u5730\u5740\u3002\u5982\u679c\u4f7f\u7528 IP \u5730\u5740\uff0c\u8fd8\u5e94\u8be5\u5305\u542b\u7aef\u53e3\u3002 \u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"http://ci.xxx.com"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"DRONE_SERVER_PROTO \u8bbe\u7f6e\u670d\u52a1\u5668\u7684\u534f\u8bae\uff0c\u4f7f\u7528\uff1ahttp \u6216 https\u3002 \u5982\u679c\u60a8\u5df2\u7ecf\u914d\u7f6e ssl \u6216 acme\uff0c\u6b64\u5b57\u6bb5\u9ed8\u8ba4\u4e3a https\u3002"),(0,o.kt)("li",{parentName:"ul"},"DRONE_USER_CREATE \u6307\u5b9a\u67d0\u4e2a\u7528\u6237\u4e3a\u7ba1\u7406\u5458\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"username:john,admin:true"),"\u3002\u53c2\u8003\u6587\u6863 ",(0,o.kt)("a",{parentName:"li",href:"https://docs.drone.io/server/user/admin/"},"Administrators"),"\uff0c\u7ba1\u7406\u5458\u6709\u6743\u7ba1\u7406\u5176\u4ed6\u5e10\u6237\u3001\u7f16\u8f91\u4ed3\u5e93\u5e93\u8be6\u7ec6\u4fe1\u606f\u3001\u7f16\u8f91\u4ed3\u5e93\u4fe1\u4efb\u6807\u5fd7\u3001\u8bbf\u95ee\u53d7\u9650\u5236\u7684 API\u3002")),(0,o.kt)("h2",{id:"\u5b89\u88c5-drone-runner"},"\u5b89\u88c5 Drone Runner"),(0,o.kt)("p",null,"\u5728\u51c6\u5907\u7528\u6765\u8dd1 CI \u7684\u672c\u5730\u673a\u5668\u5b89\u88c5 Drone Runner\u3002"),(0,o.kt)("h3",{id:"docker-composeyml-\u6587\u4ef6\u793a\u4f8b-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")," \u6587\u4ef6\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\n\nservices:\n  drone-runner:\n    image: drone/drone-runner-docker:1\n    container_name: drone-runner\n    restart: always\n    ports:\n      - 3222:3000\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - DRONE_RPC_PROTO=http\n      - DRONE_RPC_HOST={drone server\u7684url\u5730\u5740}\n      - DRONE_RPC_SECRET={\u4e0edrone server\u901a\u4fe1\u7684\u79d8\u94a5}\n      - DRONE_LIMIT_TRUSTED=false\n      - DRONE_RUNNER_CAPACITY=2\n      - DRONE_RUNNER_NAME=drone-cli\n")),(0,o.kt)("h3",{id:"\u53d8\u91cf\u8bf4\u660e-1"},"\u53d8\u91cf\u8bf4\u660e"),(0,o.kt)("p",null,"Drone Server \u7ba1\u7406 CI/CD \u7cfb\u7edf\u7684\u8c03\u5ea6\uff0c\u800c Drone Runner \u5219\u662f CI/CD \u6d41\u6c34\u7ebf\u7684\u6267\u884c\u8005\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DRONE_RPC_HOST \u586b\u5199 Drone Server \u7684\u4e3b\u673a\u540d\uff08\u4ee5\u53ca\u53ef\u9009\u586b\u7684\u7aef\u53e3\u53f7\uff09\u3002\u57fa\u4e8e PRC \u534f\u8bae\u8fde\u63a5 Runner \u4e0e Server\uff0c\u63a5\u6536\u6d41\u6c34\u7ebf\u4efb\u52a1\u3002"),(0,o.kt)("li",{parentName:"ul"},"DRONE_RPC_PROTO \u4f20\u8f93\u534f\u8bae\uff1ahttp \u6216 https"),(0,o.kt)("li",{parentName:"ul"},"DRONE_RPC_SECRET \u4e0e Drone Server \u5171\u4eab\u7684\u5bc6\u94a5"),(0,o.kt)("li",{parentName:"ul"},"DRONE_RUNNER_CAPACITY Runner \u53ef\u4ee5\u5e76\u53d1\u6267\u884c\u7684\u6d41\u6c34\u7ebf\u6570\u91cf\uff0c\u9ed8\u8ba4\uff1a2"),(0,o.kt)("li",{parentName:"ul"},"DRONE_RUNNER_NAME \u81ea\u5b9a\u4e49 Runner \u540d\u79f0")),(0,o.kt)("p",null,"\u68c0\u67e5 Drone Runner \u662f\u5426\u548c Drone Server \u8fde\u901a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs drone-runner\n")),(0,o.kt)("p",null,"\u663e\u793a\u4e0b\u65b9\u5185\u5bb9\u5373\u8868\u793a\u8fde\u63a5\u6210\u529f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"starting the server\nsuccessfully pinged the remote server\n")),(0,o.kt)("p",null,"\u6b64\u65f6\u53ef\u4ee5\u767b\u5f55 Drone \u7f51\u9875\u9762\u677f\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://ci.xxx.com"),"\uff0c\u70b9\u51fb continue \u8df3\u8f6c\u5230 Gitea \u6388\u6743\u9875\u9762\uff0c\u70b9\u51fb\u5e94\u7528\u6388\u6743\uff0c\u7136\u540e\u586b\u5199\u4e00\u4e0b\u6ce8\u518c\u4fe1\u606f\u5373\u53ef\u767b\u5f55\u4e0a\u53bb\u4e86\u3002"))}p.isMDXComponent=!0}}]);