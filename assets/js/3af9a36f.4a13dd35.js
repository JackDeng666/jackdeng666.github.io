"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[3928],{4327:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var t=n(3274),i=n(9128);const r={slug:"docusaurus-to-github-pages",date:"2023-9-18",title:"\u4f7f\u7528 ssg \u6846\u67b6 docusaurus \u751f\u6210\u7ad9\u70b9\u5e76\u90e8\u7f72\u5230 GithubPages",authors:["jack"],tags:["docusaurus","react","\u524d\u7aef"]},a=void 0,u={permalink:"/blog/docusaurus-to-github-pages",source:"@site/blog/\u4f7f\u7528docusaurus\u90e8\u7f72\u5230GithubPages/\u4f7f\u7528docusaurus\u90e8\u7f72\u5230GithubPages.md",title:"\u4f7f\u7528 ssg \u6846\u67b6 docusaurus \u751f\u6210\u7ad9\u70b9\u5e76\u90e8\u7f72\u5230 GithubPages",description:"docusaurus \u662f\u4e00\u4e2a react \u7684 ssg \u6846\u67b6\uff0c\u53ef\u4ee5\u751f\u6210\u9759\u6001\u535a\u5ba2\uff0c\u56e0\u6b64\u53ef\u4ee5\u90e8\u7f72\u5230\u8bb8\u591a\u514d\u8d39\u7684\u9759\u6001\u6587\u4ef6\u6258\u7ba1\u670d\u52a1\u4e0a\uff0c\u5982 Github Pages\uff0cVercel\u3002",date:"2023-09-18T00:00:00.000Z",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"react",permalink:"/blog/tags/react"},{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],readingTime:1.76,hasTruncateMarker:!0,authors:[{name:"Jack Deng",title:"Typescript \u5168\u6808\u5f00\u53d1\u8005",url:"https://github.com/jackdeng666",imageURL:"https://github.com/jackdeng666.png",key:"jack"}],frontMatter:{slug:"docusaurus-to-github-pages",date:"2023-9-18",title:"\u4f7f\u7528 ssg \u6846\u67b6 docusaurus \u751f\u6210\u7ad9\u70b9\u5e76\u90e8\u7f72\u5230 GithubPages",authors:["jack"],tags:["docusaurus","react","\u524d\u7aef"]},unlisted:!1,prevItem:{title:"\u57281panel\u4e2d\u4f7f\u7528cloudflare\u7684API\u7533\u8bf7Let's Encrypt\u7684\u6cdb\u57dfssl\u8bc1\u4e66",permalink:"/blog/1panel-get-universal-domain-ssl-certificate"},nextItem:{title:"linux \u67e5\u770b\u3001\u6e05\u7406\u5185\u5b58",permalink:"/blog/linux-caches"}},c={authorsImageUrls:[void 0]},l=[{value:"github \u4ed3\u5e93\u51c6\u5907",id:"github-\u4ed3\u5e93\u51c6\u5907",level:2},{value:"1. github \u521b\u5efa\u4ed3\u5e93",id:"1-github-\u521b\u5efa\u4ed3\u5e93",level:3},{value:"2. \u628a docusaurus \u9879\u76ee\u63a8\u9001\u5230\u4ed3\u5e93",id:"2-\u628a-docusaurus-\u9879\u76ee\u63a8\u9001\u5230\u4ed3\u5e93",level:3},{value:"3. \u65b0\u5efa\u5206\u652f gh-pages",id:"3-\u65b0\u5efa\u5206\u652f-gh-pages",level:3},{value:"4. \u8bbe\u7f6e\u90e8\u7f72\u5206\u652f",id:"4-\u8bbe\u7f6e\u90e8\u7f72\u5206\u652f",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"1. \u4fee\u6539 docusaurus.config.js",id:"1-\u4fee\u6539-docusaurusconfigjs",level:3},{value:"2. \u90e8\u7f72\u68c0\u67e5",id:"2-\u90e8\u7f72\u68c0\u67e5",level:3},{value:"3. \u6267\u884c\u90e8\u7f72",id:"3-\u6267\u884c\u90e8\u7f72",level:3}];function g(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"docusaurus \u662f\u4e00\u4e2a react \u7684 ssg \u6846\u67b6\uff0c\u53ef\u4ee5\u751f\u6210\u9759\u6001\u535a\u5ba2\uff0c\u56e0\u6b64\u53ef\u4ee5\u90e8\u7f72\u5230\u8bb8\u591a\u514d\u8d39\u7684\u9759\u6001\u6587\u4ef6\u6258\u7ba1\u670d\u52a1\u4e0a\uff0c\u5982 Github Pages\uff0cVercel\u3002\r\n\u5e76\u4e14 docusaurus \u81ea\u5e26\u81ea\u52a8\u63a8\u9001 githubpages\uff0c\u6240\u4ee5\u8fd9\u91cc\u7528 GithubPages \u90e8\u7f72\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"github-\u4ed3\u5e93\u51c6\u5907",children:"github \u4ed3\u5e93\u51c6\u5907"}),"\n",(0,t.jsx)(s.h3,{id:"1-github-\u521b\u5efa\u4ed3\u5e93",children:"1. github \u521b\u5efa\u4ed3\u5e93"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(3779).A+"",width:"1125",height:"1104"})}),"\n",(0,t.jsx)(s.h3,{id:"2-\u628a-docusaurus-\u9879\u76ee\u63a8\u9001\u5230\u4ed3\u5e93",children:"2. \u628a docusaurus \u9879\u76ee\u63a8\u9001\u5230\u4ed3\u5e93"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'git init\r\ngit add .\r\ngit commit -m "first commit"\r\ngit branch -M main\r\ngit remote add origin git@github.com:JackDeng666/JackDeng666.github.io.git\r\ngit push -u origin main\n'})}),"\n",(0,t.jsx)(s.h3,{id:"3-\u65b0\u5efa\u5206\u652f-gh-pages",children:"3. \u65b0\u5efa\u5206\u652f gh-pages"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(1800).A+"",width:"548",height:"409"})}),"\n",(0,t.jsx)(s.h3,{id:"4-\u8bbe\u7f6e\u90e8\u7f72\u5206\u652f",children:"4. \u8bbe\u7f6e\u90e8\u7f72\u5206\u652f"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(3841).A+"",width:"1694",height:"1071"})}),"\n",(0,t.jsxs)(s.p,{children:["\u56e0\u4e3a\u4ed3\u5e93\u547d\u540d\u4e3a \u7528\u6237\u540d.github.io\uff0c\u5373\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(s.a,{href:"https://%E7%94%A8%E6%88%B7.github.io",children:"https://\u7528\u6237.github.io"})," \u7684\u6839\u76ee\u5f55\uff0c\u8bbf\u95ee\u5230\u5f53\u524d\u9879\u76ee\u7684 readme.md \u6587\u4ef6\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679c\u9879\u76ee\u540d\u79f0\u4e0d\u662f \u7528\u6237\u540d.github.io, \u90a3\u5c06\u901a\u8fc7 ",(0,t.jsx)(s.a,{href:"https://%E7%94%A8%E6%88%B7.github.io/%E5%85%B6%E4%BB%96%E5%90%8D%E7%A7%B0",children:"https://\u7528\u6237.github.io/\u5176\u4ed6\u540d\u79f0"})," \u8bbf\u95ee\u5230 Github Pages\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u90e8\u7f72",children:"\u90e8\u7f72"}),"\n",(0,t.jsx)(s.h3,{id:"1-\u4fee\u6539-docusaurusconfigjs",children:"1. \u4fee\u6539 docusaurus.config.js"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const config = {\r\n  ...\r\n  url: 'https://JackDeng666.github.io',\r\n  baseUrl: '/',\r\n\r\n  organizationName: 'JackDeng666', // \u586b\u5199\u7528\u6237\u540d\r\n  projectName: 'JackDeng666.github.io', // \u586b\u5199\u9879\u76ee\u540d\r\n  deploymentBranch: 'gh-pages', // \u586b\u5199\u5206\u652f\u4e3agh-pages\r\n  ...\r\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"2-\u90e8\u7f72\u68c0\u67e5",children:"2. \u90e8\u7f72\u68c0\u67e5"}),"\n",(0,t.jsx)(s.p,{children:"\u89c2\u5bdf package.json"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="package.json"',children:'{\r\n  ...\r\n  "scripts": {\r\n    "docusaurus": "docusaurus",\r\n    "start": "docusaurus start",\r\n    "build": "docusaurus build",\r\n    "swizzle": "docusaurus swizzle",\r\n    "deploy": "docusaurus deploy",\r\n    "clear": "docusaurus clear",\r\n    "serve": "docusaurus serve",\r\n    ...\r\n  },\r\n  ...\r\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"\u5728\u672c\u5730\u5148\u6253\u5305\uff0c\u90e8\u7f72\u68c0\u67e5\uff0c\u4f1a\u53d1\u73b0\u8bb8\u591a\u95ee\u9898\uff0c\u81ea\u884c\u89e3\u51b3\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"npm run build\r\nnpm run serve\n"})}),"\n",(0,t.jsx)(s.h3,{id:"3-\u6267\u884c\u90e8\u7f72",children:"3. \u6267\u884c\u90e8\u7f72"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"npm run deploy\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u7b49\u90a3\u4e48\u4e00\u4f1a\u4f1a\uff08\u4e00\u822c 1-2min\uff09\uff0c\u6d4f\u89c8\u5668\u8f93\u5165 ",(0,t.jsx)(s.a,{href:"https://%E7%94%A8%E6%88%B7%E5%90%8D.github.io/",children:"https://\u7528\u6237\u540d.github.io/"})," \u7f51\u5740\u5c31\u53ef\u4ee5\u770b\u5230\u6548\u679c\u4e86\uff0c\u5982",(0,t.jsx)(s.a,{href:"https://JackDeng666.github.io",children:"\u6211\u7684\u5730\u5740"}),"\u3002"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},3779:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/img1-6b542496e48d02ef6716ac6992226b9e.png"},1800:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/img2-91225e5a7a802e6f4f8bd44216c60888.png"},3841:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/img3-0c4dc5758e906e5c30b641b6bddb972e.png"},9128:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>u});var t=n(9474);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);