"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[7383],{4497:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var s=r(3274),c=r(9128);const d={id:"practice-ci-cd",sidebar_label:"\u521d\u6b65\u5b9e\u8df5\u81ea\u52a8\u5316\u90e8\u7f72\u7eaf\u524d\u7aef\u9879\u76ee",title:"\u521d\u6b65\u5b9e\u8df5\u81ea\u52a8\u5316\u90e8\u7f72\u7eaf\u524d\u7aef\u9879\u76ee"},i=void 0,t={id:"ci-cd/practice-ci-cd",title:"\u521d\u6b65\u5b9e\u8df5\u81ea\u52a8\u5316\u90e8\u7f72\u7eaf\u524d\u7aef\u9879\u76ee",description:"drone \u7684\u6d41\u6c34\u7ebf\u662f\u57fa\u4e8e.drone.yml \u6587\u4ef6\u914d\u7f6e\u53bb\u6267\u884c\u7684\uff0c\u672c\u7bc7\u6211\u4eec\u5c06\u4f1a\u5b9e\u8df5\u7f16\u5199\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5b9e\u73b0\u76f4\u63a5\u901a\u8fc7\u6253\u5305\u4ea7\u7269\u4f20\u8f93\u5230\u670d\u52a1\u5668\u53bb\u90e8\u7f72\u524d\u7aef\u9879\u76ee\u7684 CICD\u3002",source:"@site/docs/ci-cd/02-practice-ci-cd.md",sourceDirName:"ci-cd",slug:"/ci-cd/practice-ci-cd",permalink:"/docs/ci-cd/practice-ci-cd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"practice-ci-cd",sidebar_label:"\u521d\u6b65\u5b9e\u8df5\u81ea\u52a8\u5316\u90e8\u7f72\u7eaf\u524d\u7aef\u9879\u76ee",title:"\u521d\u6b65\u5b9e\u8df5\u81ea\u52a8\u5316\u90e8\u7f72\u7eaf\u524d\u7aef\u9879\u76ee"},sidebar:"ciCd",previous:{title:"\u5b89\u88c5 drone \u7684 server \u548c runner",permalink:"/docs/ci-cd/install-drone"},next:{title:"\u5b9e\u8df5\u81ea\u52a8\u5316\u90e8\u7f72 docker \u5bb9\u5668",permalink:"/docs/ci-cd/ci-cd-by-docker"}},o={},l=[{value:"\u9879\u76ee\u521b\u5efa",id:"\u9879\u76ee\u521b\u5efa",level:3},{value:"\u6fc0\u6d3b\u4ed3\u5e93",id:"\u6fc0\u6d3b\u4ed3\u5e93",level:3},{value:"CI \u64cd\u4f5c",id:"ci-\u64cd\u4f5c",level:3},{value:"CD \u64cd\u4f5c",id:"cd-\u64cd\u4f5c",level:3},{value:"\u6dfb\u52a0\u6253\u5305\u7f13\u5b58",id:"\u6dfb\u52a0\u6253\u5305\u7f13\u5b58",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["drone \u7684\u6d41\u6c34\u7ebf\u662f\u57fa\u4e8e",(0,s.jsx)(n.code,{children:".drone.yml"})," \u6587\u4ef6\u914d\u7f6e\u53bb\u6267\u884c\u7684\uff0c\u672c\u7bc7\u6211\u4eec\u5c06\u4f1a\u5b9e\u8df5\u7f16\u5199\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5b9e\u73b0\u76f4\u63a5\u901a\u8fc7\u6253\u5305\u4ea7\u7269\u4f20\u8f93\u5230\u670d\u52a1\u5668\u53bb\u90e8\u7f72\u524d\u7aef\u9879\u76ee\u7684 CICD\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u9879\u76ee\u521b\u5efa",children:"\u9879\u76ee\u521b\u5efa"}),"\n",(0,s.jsx)(n.p,{children:"\u6253\u5f00\u4ee3\u7801\u4ed3\u5e93\uff0c\u521b\u5efa\u597d\u4e00\u4e2a\u9879\u76ee\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u524d\u7aef\u9879\u76ee\uff0c\u6700\u540e\u63a8\u9001\u5230\u4ee3\u7801\u4ed3\u5e93\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u65f6\u5019\u5728 drone \u670d\u52a1\u91cc\u662f\u770b\u4e0d\u5230\u8fd9\u4e2a\u9879\u76ee\u7684\uff0c\u9700\u8981\u70b9\u51fb\u4e00\u4e0b ",(0,s.jsx)(n.code,{children:"sync"})," \u540c\u6b65\u4e00\u4e0b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(2896).A+"",width:"2352",height:"1136"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6fc0\u6d3b\u4ed3\u5e93",children:"\u6fc0\u6d3b\u4ed3\u5e93"}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u6b65\u597d\u540e\u4ed3\u5e93\u5217\u8868\u4f1a\u51fa\u73b0\u521a\u521a\u65b0\u589e\u7684\u9879\u76ee\uff0c\u70b9\u51fb\u8fdb\u5165\u6211\u4eec\u9700\u8981\u8fdb\u884c CICD \u5904\u7406\u7684\u4ed3\u5e93\uff0c\u70b9\u51fb ",(0,s.jsx)(n.code,{children:"Settings"})," --\x3e ",(0,s.jsx)(n.code,{children:"ACTIVATE REPOSITORY"}),"\uff0c\u7136\u540e\u53ef\u4ee5\u770b\u5230\u63d0\u793a\u6fc0\u6d3b\u6210\u529f\uff0c\u5e76\u4e14 ",(0,s.jsx)(n.code,{children:"Settings"})," \u9875\u9762\u4f1a\u51fa\u73b0\u5f88\u591a\u9009\u9879\uff0c\u6309\u5982\u4e0b\u914d\u7f6e\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(6715).A+"",width:"1976",height:"1234"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u8981\u628a",(0,s.jsx)(n.code,{children:"Trusted"}),"\u914d\u7f6e\u4e0a\uff0c\u540e\u9762",(0,s.jsx)(n.a,{href:"#%E6%B7%BB%E5%8A%A0%E6%89%93%E5%8C%85%E7%BC%93%E5%AD%98",children:"\u6dfb\u52a0\u6253\u5305\u7f13\u5b58"}),"\u4f1a\u7528\u5230\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"ci-\u64cd\u4f5c",children:"CI \u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0\u4e00\u4efd",(0,s.jsx)(n.code,{children:".drone.yml"}),"\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"kind: pipeline\r\ntype: docker\r\nname: CICD\r\n\r\nsteps:\r\n  - name: build\r\n    image: node:18-alpine\r\n    commands:\r\n      - npm install\r\n      - npm run build:${DRONE_BRANCH}\r\n\r\ntrigger:\r\n  branch:\r\n    - test\r\n    - main\r\n  event:\r\n    - push\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\u57fa\u4e8e docker \u7684 pipeline\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u6253\u5305\u7684 ",(0,s.jsx)(n.code,{children:"step"}),"\uff0c\u57fa\u4e8e ",(0,s.jsx)(n.code,{children:"node:18-alpine"})," \u955c\u50cf\u53bb\u6253\u4e0b\u8f7d\u5e76\u6253\u5305\u6211\u4eec\u7684\u9879\u76ee\uff0c",(0,s.jsx)(n.code,{children:"${DRONE_BRANCH}"}),"\u662f\u6d41\u6c34\u7ebf\u89e6\u53d1\u65f6\u7684\u5206\u652f\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u8fd9\u4e2a\u53bb\u533a\u5206\u6267\u884c\u4e0d\u540c\u7684\u6253\u5305\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"trigger"})," \u914d\u7f6e\u90a3\u91cc\u8868\u793a\uff0c\u6211\u4eec\u8981\u5728 test \u548c main \u5206\u652f\u88ab push \u4ee3\u7801\u65f6\uff0c\u624d\u4f1a\u6267\u884c\u6211\u4eec\u7684 pipeline\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5199\u597d\u540e\u6b64\u65f6\u53ef\u4ee5\u628a\u4ee3\u7801\u63a8\u9001\u5230\u4ee3\u7801\u4ed3\u5e93\u7b80\u5355\u5730\u6d4b\u8bd5\u4e00\u4e0b\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u65f6\u53ef\u4ee5\u5728 drone server \u4e0a\u770b\u5230\u4ed3\u5e93\u7684",(0,s.jsx)(n.code,{children:"Builds"}),"\u9009\u9879\u91cc\u591a\u4e86\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"EXECUTIONS"}),"\uff0c\u70b9\u51fb\u8fdb\u53bb\uff0c\u53ef\u4ee5\u770b\u5230 runner \u6b63\u5728\u8fd0\u884c\u6d41\u6c34\u7ebf\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(6210).A+"",width:"1668",height:"1160"})}),"\n",(0,s.jsx)(n.h3,{id:"cd-\u64cd\u4f5c",children:"CD \u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u524d\u7aef\u9879\u76ee\u7684\u90e8\u7f72\uff0c\u6211\u4eec\u53ea\u9700\u8981\u628a\u6253\u5305\u51fa\u6765\u7684\u4ea7\u7269\u76f4\u63a5\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u73af\u5883\u5373\u53ef\uff0c\u53ef\u4ee5\u57fa\u4e8e ",(0,s.jsx)(n.code,{children:"appleboy/drone-scp"})," \u8fd9\u4e2a drone \u63d2\u4ef6\u53bb\u4f20\u8f93\u6587\u4ef6\uff0c\u5728 ",(0,s.jsx)(n.code,{children:".drone.yml"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"step"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\r\nsteps:\r\n  - name: build\r\n    # ...\r\n  - name: deploy:test\r\n    image: appleboy/drone-scp\r\n    depends_on: [build]\r\n    settings:\r\n      host:\r\n        from_secret: test_server_host\r\n      username:\r\n        from_secret: test_server_username\r\n      key:\r\n        from_secret: test_server_key\r\n      port:\r\n        from_secret: test_server_port\r\n      source: ./dist/*\r\n      target: /opt/1panel/apps/openresty/openresty/www/sites/test.xxx.com/index\r\n      strip_components: 1\r\n      rm: true\r\n    when:\r\n      branch: test\r\n# ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"settings"})," \u91cc\u7684\u914d\u7f6e\u662f\u9700\u8981\u4f20\u7ed9 ",(0,s.jsx)(n.code,{children:"appleboy/drone-scp"})," \u955c\u50cf\u4f7f\u7528\u7684\uff0c",(0,s.jsx)(n.code,{children:"source"})," \u586b\u5199\u672c\u5730\u6253\u5305\u597d\u7684\u8981\u4f20\u8f93\u7684\u6587\u4ef6\uff0c",(0,s.jsx)(n.code,{children:"target"})," \u586b\u5199\u670d\u52a1\u4e2d\u7684\u6587\u4ef6\u5939\u8def\u5f84\uff0c\u8fd9\u91cc\u6267\u884c\u65f6\u4f1a\u81ea\u52a8\u767b\u5f55\u670d\u52a1\u5668\u5e76\u628a\u6253\u5305\u540e",(0,s.jsx)(n.code,{children:"dist"}),"\u91cc\u7684\u6587\u4ef6\u90fd\u4f20\u8f93\u5230\u6307\u5b9a\u7684",(0,s.jsx)(n.code,{children:"target"}),"\u6587\u4ef6\uff0c\u8fd8\u6709",(0,s.jsx)(n.code,{children:"strip_components"}),"\u3001 ",(0,s.jsx)(n.code,{children:"rm"}),"\u7b49\u53c2\u6570\uff0c\u5177\u4f53\u8fd9\u91cc\u7684\u53c2\u6570\u90fd\u6709\u4e9b\u4ec0\u4e48\u4f5c\u7528\uff0c\u53bb\u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://plugins.drone.io/plugins/scp",children:"drone-scp \u6587\u6863"})," \u5373\u53ef\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u914d\u7f6e\u91cc\u7684 ",(0,s.jsx)(n.code,{children:"when.branch"})," \u53ef\u4ee5\u770b\u5230\u6307\u5b9a\u4e86",(0,s.jsx)(n.code,{children:"test"}),"\uff0c\u8fd9\u8868\u660e\u8fd9\u4e2a\u90e8\u7f72\u64cd\u4f5c\u53ea\u6709\u662f test \u5206\u652f\u7684\u4ee3\u7801\u63d0\u4ea4\u4e86\u624d\u4f1a\u89e6\u53d1\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u533a\u5206\u4e0d\u540c\u7684\u73af\u5883\u53bb\u90e8\u7f72\u4e86\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd8\u6709\u914d\u7f6e\u91cc\u7684 ",(0,s.jsx)(n.code,{children:"host"}),"\u3001",(0,s.jsx)(n.code,{children:"username"}),"\u3001",(0,s.jsx)(n.code,{children:"key"}),"\u3001 ",(0,s.jsx)(n.code,{children:"port"})," \u8fd9\u91cc\u767b\u5f55\u670d\u52a1\u5668\u9700\u8981\u7528\u5230\u7684\u654f\u611f\u6570\u636e\u90fd\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"from_secret"})," \u53bb\u8bfb\u53d6\uff0c\u8fd9\u91cc\u654f\u611f\u6570\u636e\u4e0d\u80fd\u76f4\u63a5\u660e\u6587\u5199\u5728",(0,s.jsx)(n.code,{children:".drone.yml"}),"\u6587\u4ef6\u4e2d\uff0c\u9664\u975e\u53ea\u6709\u81ea\u5df1\u4e00\u4e2a\u4eba\u7ef4\u62a4\u8fd9\u4e2a\u9879\u76ee\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"from_secret"})," \u4ece drone server \u53bb\u8bfb\u53d6\u914d\u7f6e\u597d\u7684\u5b57\u7b26\u4e32\uff0c\u63a5\u4e0b\u6765\u53bb\u914d\u7f6e\u4e00\u4e0b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u70b9\u51fb ",(0,s.jsx)(n.code,{children:"Settings"})," --\x3e ",(0,s.jsx)(n.code,{children:"Secrets"})," --\x3e ",(0,s.jsx)(n.code,{children:"NEW SECRET"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(7933).A+"",width:"1660",height:"1201"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f9d\u6b21\u914d\u7f6e\u597d\u5bf9\u5e94\u7684 4 \u4e2a\u53d8\u91cf\u540e\uff0c\u628a\u4ee3\u7801\u63d0\u4ea4\u5230 test \u5206\u652f\uff0c\u7136\u540e\u63a8\u9001\u5230\u4ee3\u7801\u4ed3\u5e93\u6d4b\u8bd5\u4e00\u4e0b\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(6804).A+"",width:"1736",height:"1155"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u6ca1\u6709\u62a5\u9519\u5373\u53ef\uff0c\u81ea\u884c\u68c0\u67e5\u4f60\u5bf9\u5e94\u7684\u670d\u52a1\u662f\u5426\u66f4\u65b0\uff0c\u8fd9\u91cc\u7684",(0,s.jsx)(n.code,{children:"target"}),"\u6587\u4ef6\u5939\u5728\u6211\u7684\u670d\u52a1\u5df2\u7ecf\u6dfb\u52a0\u597d nginx \u7684\u4ee3\u7406\u4e86\uff0c\u53ea\u8981\u6587\u4ef6\u66f4\u65b0\uff0c\u90a3\u4e48\u91cd\u65b0\u8bbf\u95ee\u5c31\u4f1a\u751f\u6548\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6dfb\u52a0\u6253\u5305\u7f13\u5b58",children:"\u6dfb\u52a0\u6253\u5305\u7f13\u5b58"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u65f6\u5019\u4f60\u4f1a\u53d1\u73b0\u6709\u4e2a\u95ee\u9898\uff0c\u6253\u5305\u7684\u64cd\u4f5c\u662f\u5728\u4e00\u4e2a docker \u5bb9\u5668\u91cc\u9762\u8fdb\u884c\uff0c\u8fd9\u6837\u6bcf\u6b21\u8fdb\u884c\u4efb\u4f55\u66f4\u65b0\u90fd\u8981\u91cd\u65b0\u4e0b\u8f7d ",(0,s.jsx)(n.code,{children:"node_modules"})," \u4f9d\u8d56\uff0c\u592a\u6d6a\u8d39\u8d44\u6e90\u4e86\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u901a\u8fc7\u6dfb\u52a0\u5bbf\u4e3b\u673a\u7684\u6302\u8f7d\u5377\u53bb\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\r\n# \u58f0\u660e\u5bbf\u4e3b\u673a \u6620\u5c04\u5230 drone \u6267\u884c\u5668\u7684\u6570\u636e\u5377\r\nvolumes:\r\n  - name: node_modules # \u6570\u636e\u5377\u540d\u79f0\r\n    host:\r\n      path: /home/drone/test/cache/node_modules # \u5bbf\u4e3b\u673a\u7684\u7edd\u5bf9\u8def\u5f84\r\n\r\nsteps:\r\n  - name: build\r\n    image: node:18-alpine\r\n    volumes:\r\n      - name: node_modules # \u6570\u636e\u5377\u540d\u79f0\r\n        path: /drone/src/node_modules # \u5bb9\u5668\u5185\u7684\u7edd\u5bf9\u8def\u5f84\r\n    commands:\r\n      - npm install\r\n      - npm run build:${DRONE_BRANCH}\r\n# ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["drone runner \u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"volumes"})," \u662f\u9700\u8981\u8fd9\u4e2a\u9879\u76ee\u914d\u7f6e\u597d\u6743\u9650\u7684\uff0c\u8fd9\u5c31\u662f\u524d\u9762\u914d\u7f6e\u4e86 ",(0,s.jsx)(n.code,{children:"Trusted"})," \u7684\u4f5c\u7528\uff0c\u5426\u5219 build \u65f6\u8fd0\u884c\u65f6\u4f1a\u62a5 ",(0,s.jsx)(n.code,{children:"untrusted repositories cannot mount host volumes"})," \u7684\u9519\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u76f4\u63a5\u63d0\u4ea4\u4ee3\u7801\u6253\u5305\u4e00\u6b21\uff0c\u8fd9\u4e00\u6b21\u4f60\u4f1a\u770b\u5230\u6253\u5305\u7684\u65f6\u95f4\u5e76\u6ca1\u6709\u51cf\u5c11\uff0c\u56e0\u4e3a\u8fd9\u662f\u7b2c\u4e00\u6b21\u6302\u8f7d",(0,s.jsx)(n.code,{children:"volumes"}),"\uff0c\u4e0b\u4e00\u6b21\u6253\u5305\u5c31\u6709 ",(0,s.jsx)(n.code,{children:"node_modules"})," \u7684\u7f13\u5b58\u4e86\uff0c\u968f\u4fbf\u63d0\u4ea4\u70b9\u4ee3\u7801\u518d\u6d4b\u8bd5\u4e00\u4e0b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(8271).A+"",width:"1702",height:"1137"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u65f6\u95f4\u53ea\u7528\u4e86 9s\uff0c\u6bd4\u4e4b\u524d\u51cf\u5c11\u5f88\u591a\u4e86\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2896:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/01-584db3d0cfb214461250682be054b5b8.png"},6715:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/02-f7357b0cc7a13e32b75ccb2349b2ac48.png"},6210:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/03-6c09ff6dbd665aca0cc09c261d5017f1.png"},7933:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/04-60ce69aadcfdbfab7e6371addabbc099.png"},6804:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/05-c5cdf4cba0a118c77926a7090230e479.png"},8271:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/06-e5aee98059fb7c224fb1a24ad3ec1f36.png"},9128:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var s=r(9474);const c={},d=s.createContext(c);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);