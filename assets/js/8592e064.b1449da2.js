"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[2266],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=i(r),k=o,g=s["".concat(l,".").concat(k)]||s[k]||u[k]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=k;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:o,c[1]=d;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var n=r(8957),o=(r(9496),r(9613));const a={id:"debian",sidebar_label:"debian",title:"debian \u4e0b\u8f7d\u5b89\u88c5 docker"},c=void 0,d={unversionedId:"docker/download/debian",id:"docker/download/debian",title:"debian \u4e0b\u8f7d\u5b89\u88c5 docker",description:"\u5b98\u65b9\u4e0b\u8f7d\u8d44\u6599",source:"@site/docs/docker/02-download/02-debian.md",sourceDirName:"docker/02-download",slug:"/docker/download/debian",permalink:"/docs/docker/download/debian",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"debian",sidebar_label:"debian",title:"debian \u4e0b\u8f7d\u5b89\u88c5 docker"},sidebar:"docker",previous:{title:"windows",permalink:"/docs/docker/download/windows"},next:{title:"\u955c\u50cf",permalink:"/docs/docker/command/docker-image"}},l={},i=[{value:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5378\u8f7d\u6240\u6709\u51b2\u7a81\u7684\u8f6f\u4ef6\u5305\uff1a",id:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5378\u8f7d\u6240\u6709\u51b2\u7a81\u7684\u8f6f\u4ef6\u5305",level:3},{value:"\u4f7f\u7528 Apt \u5b58\u50a8\u5e93\u5b89\u88c5",id:"\u4f7f\u7528-apt-\u5b58\u50a8\u5e93\u5b89\u88c5",level:3},{value:"1. \u8bbe\u7f6e Docker \u7684 Apt \u5b58\u50a8\u5e93\u3002",id:"1-\u8bbe\u7f6e-docker-\u7684-apt-\u5b58\u50a8\u5e93",level:4},{value:"2. \u5b89\u88c5\u6700\u65b0 Docker \u8f6f\u4ef6\u5305\u3002",id:"2-\u5b89\u88c5\u6700\u65b0-docker-\u8f6f\u4ef6\u5305",level:4},{value:"3. \u901a\u8fc7\u8fd0\u884c\u6620\u50cf\u9a8c\u8bc1\u5b89\u88c5\u662f\u5426\u6210\u529f\u3002",id:"3-\u901a\u8fc7\u8fd0\u884c\u6620\u50cf\u9a8c\u8bc1\u5b89\u88c5\u662f\u5426\u6210\u529f",level:4}],p={toc:i},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/debian/"},"\u5b98\u65b9\u4e0b\u8f7d\u8d44\u6599")),(0,o.kt)("h3",{id:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5378\u8f7d\u6240\u6709\u51b2\u7a81\u7684\u8f6f\u4ef6\u5305"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5378\u8f7d\u6240\u6709\u51b2\u7a81\u7684\u8f6f\u4ef6\u5305\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528-apt-\u5b58\u50a8\u5e93\u5b89\u88c5"},"\u4f7f\u7528 Apt \u5b58\u50a8\u5e93\u5b89\u88c5"),(0,o.kt)("p",null,"\u5728\u65b0\u4e3b\u673a\u4e0a\u9996\u6b21\u5b89\u88c5 Docker \u5f15\u64ce\u4e4b\u524d\uff0c\u60a8\u9700\u8981 \u9700\u8981\u8bbe\u7f6e Docker Apt \u4ed3\u5e93\u3002\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u5b89\u88c5\u548c\u66f4\u65b0 \u5b58\u50a8\u5e93\u4e2d\u7684 Docker\u3002"),(0,o.kt)("h4",{id:"1-\u8bbe\u7f6e-docker-\u7684-apt-\u5b58\u50a8\u5e93"},"1. \u8bbe\u7f6e Docker \u7684 Apt \u5b58\u50a8\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Add Docker\'s official GPG key:\nsudo apt-get update\nsudo apt-get install ca-certificates curl gnupg\nsudo install -m 0755 -d /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\nsudo chmod a+r /etc/apt/keyrings/docker.gpg\n\n# Add the repository to Apt sources:\necho \\\n  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \\\n  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\n')),(0,o.kt)("h4",{id:"2-\u5b89\u88c5\u6700\u65b0-docker-\u8f6f\u4ef6\u5305"},"2. \u5b89\u88c5\u6700\u65b0 Docker \u8f6f\u4ef6\u5305\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n")),(0,o.kt)("h4",{id:"3-\u901a\u8fc7\u8fd0\u884c\u6620\u50cf\u9a8c\u8bc1\u5b89\u88c5\u662f\u5426\u6210\u529f"},"3. \u901a\u8fc7\u8fd0\u884c\u6620\u50cf\u9a8c\u8bc1\u5b89\u88c5\u662f\u5426\u6210\u529f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run hello-world\n")))}u.isMDXComponent=!0}}]);