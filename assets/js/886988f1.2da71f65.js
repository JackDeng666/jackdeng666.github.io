"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[4787],{3084:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var s=o(3274),t=o(9128);const d={id:"nodejs-event-driven",sidebar_label:"nodejs \u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784",title:"nodejs \u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784"},i=void 0,r={id:"nodejs/nodejs-event-driven",title:"nodejs \u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784",description:"\u672c\u7bc7\u6587\u7ae0\u6211\u4eec\u6765\u8bf4\u4e00\u8bf4 nodejs \u7684\u53e6\u5916\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u7279\u70b9\uff0c\u4e5f\u5c31\u662f\u4e8b\u4ef6\u9a71\u52a8\u3002",source:"@site/docs/nodejs/03-nodejs-event-driven.md",sourceDirName:"nodejs",slug:"/nodejs/nodejs-event-driven",permalink:"/docs/nodejs/nodejs-event-driven",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"nodejs-event-driven",sidebar_label:"nodejs \u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784",title:"nodejs \u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784"},sidebar:"nodejs",previous:{title:"nodejs \u5f02\u6b65 IO",permalink:"/docs/nodejs/nodejs-asynchronous-io"},next:{title:"nodejs \u5355\u7ebf\u7a0b",permalink:"/docs/nodejs/nodejs-single-threaded"}},c={},l=[];function j(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u672c\u7bc7\u6587\u7ae0\u6211\u4eec\u6765\u8bf4\u4e00\u8bf4 nodejs \u7684\u53e6\u5916\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u7279\u70b9\uff0c\u4e5f\u5c31\u662f\u4e8b\u4ef6\u9a71\u52a8\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u6211\u4eec\u9700\u8981\u77e5\u9053\u4e8b\u4ef6\u9a71\u52a8\u7684\u67b6\u6784\uff0c\u5b83\u5176\u5b9e\u5c31\u662f\u5efa\u7acb\u5728\u8f6f\u4ef6\u5f00\u53d1\u4e4b\u4e0a\u7684\u4e00\u79cd\u901a\u7528\u7684\u6a21\u5f0f\uff0c\u90a3\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\uff0c\u6211\u4eec\u8fd9\u91cc\u4e5f\u53bb\u5c06\u5b83\u8ddf\u65e5\u5e38\u6240\u8bf4\u7684\u53d1\u5e03\u8ba2\u9605\uff0c\u6216\u8005\u8bf4\u89c2\u5bdf\u8005\u6a21\u5f0f\u53bb\u8fdb\u884c\u7c7b\u6bd4\uff0c\u4f46\u662f\u6211\u4eec\u4e5f\u8981\u5f3a\u8c03\u4e00\u4e0b\uff0c\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u8fd9\u4e09\u8005\u5176\u5b9e\u5e76\u4e0d\u662f\u4e00\u56de\u4e8b\uff0c\u90a3\u53ea\u4e0d\u8fc7\u4ed6\u4eec\u5728\u4f7f\u7528\u7684\u65f6\u5019\u90fd\u4f1a\u6709\u4e00\u4e2a\u5171\u540c\u7684\u7279\u5f81\uff0c\u90a3\u5c31\u662f\u53d1\u5e03\u8005\u6765\u5e7f\u64ad\u6d88\u606f\uff0c\u800c\u5176\u4ed6\u7684\u8ba2\u9605\u8005\u5c31\u53ef\u4ee5\u53bb\u76d1\u542c\u5230\u4e4b\u524d\u6240\u8ba2\u9605\u7684\u6d88\u606f\uff0c\u4ece\u800c\u5728\u8ba2\u9605\u7684\u4e8b\u4ef6\u53d1\u751f\u4e4b\u540e\u518d\u53bb\u6267\u884c\u76f8\u5e94\u7684\u5904\u7406\u7a0b\u5e8f\uff0c\u90a3\u77e5\u9053\u4e86\u4e8b\u4ef6\u9a71\u52a8\u8fd9\u6837\u7684\u4e00\u4e2a\u5927\u4f53\u7684\u6a21\u5f0f\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u6765\u518d\u5177\u4f53\u7684\u53bb\u8bf4\u4e00\u4e0b\u5728 nodejs \u4e2d\u7684\u4e8b\u4ef6\u9a71\u52a8\u7684\u4e00\u4e2a\u5177\u4f53\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(1464).A+"",width:"973",height:"537"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8fd9\u4e4b\u524d\u6211\u4eec\u53bb\u4ecb\u7ecd \u5f02\u6b65 io \u7684\u65f6\u5019\uff0c\u6211\u4eec\u8bf4\u8fc7 nodejs \u662f\u8bde\u751f\u4e4b\u521d\u7684\u76ee\u7684\uff0c\u5c31\u662f\u4e3a\u4e86\u53bb\u5b9e\u73b0\u9ad8\u6027\u80fd\u7684 web \u670d\u52a1\uff0c\u800c\u5b83\u5b9e\u73b0\u9ad8\u6027\u80fd\u7684\u4e00\u4e2a\u4e3b\u8981\u8868\u73b0\u624b\u6bb5\uff0c\u5c31\u662f\u62e5\u6709\u4e86\u4e00\u5957\u5355\u7ebf\u7a0b\u4e0b\u7684\u4e00\u4e2a\u5f02\u6b65\u975e\u963b\u585e\u7684 io \u673a\u5236\uff0c\u4f46\u662f\u4e5f\u6b63\u662f\u8fd9\u4e2a\u5f02\u6b65\u975e\u963b\u585e\u7684 io \u5b9e\u73b0\uff0c\u8ba9\u6211\u4eec\u5728\u53bb\u7f16\u5199 nodejs \u4ee3\u7801\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5c31\u4f1a\u53bb\u7f16\u5199\u5f88\u591a\u7684\u5f02\u6b65\u4ee3\u7801\uff0c\u800c\u7531\u4e8e\u53c8\u662f\u975e\u963b\u585e\u7684\uff0c\u56e0\u6b64\u7a0b\u5e8f\u4ee3\u7801\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e1a\u52a1\u5c42\u4ed6\u62ff\u5230\u7684\u5e76\u4e0d\u662f\u6700\u7ec8\u7684\u76ee\u6807\u6570\u636e\uff0c\u6240\u4ee5\u7b49\u5230\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u90a3\u5e95\u5c42\u7684 libuv \u5e93\u5c31\u5f00\u59cb\u53bb\u5de5\u4f5c\u4e86\uff0c\u90a3\u6211\u4eec\u4e5f\u53ef\u4ee5\u8ba4\u4e3a\u5728\u8fd9\u4e2a libuv \u5e93\u91cc\u8fb9\uff0c\u5176\u5b9e\u5c31\u6709\u4e24\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u5185\u5bb9\uff0c\u4e00\u4e2a\u5c31\u662f event loop\uff08\u4e8b\u4ef6\u5faa\u73af\uff09\uff0c\u8fd8\u6709\u4e00\u4e2a\u5c31\u662f event queen\uff08\u4e8b\u4ef6\u961f\u5217\uff09\uff0c\u5c31\u50cf\u6211\u4eec\u56fe\u4e2d\u770b\u5230\u7684\u8fd9\u6837\uff0c\u5f53\u7136\u8fd9\u91cc\u6211\u4eec\u8fd8\u662f\u4ee5 io \u64cd\u4f5c\u4e3a\u4f8b\uff0c\u56e0\u4e3a\u5728 node \u5f53\u4e2d\uff0c\u90a3\u540c\u6837\u4e5f\u5b58\u5728\u7740\u5f88\u591a\u975e io \u7684\u5f02\u6b65\u64cd\u4f5c\uff0c\u6bd4\u5982\u6211\u4eec\u6700\u5e38\u89c1\u7684 setTimeout\uff0c\u90a3\u5f53 libuv \u5e93\u63a5\u6536\u5230\u4e86\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u8bf7\u6c42\u4e4b\u540e\uff0c\u591a\u8def\u5206\u89e3\u5668\u5c31\u4f1a\u53bb\u8fdb\u884c\u5de5\u4f5c\uff0c\u9996\u5148\u4ed6\u4f1a\u53bb\u627e\u5230\u5f53\u524d\u5e73\u53f0\u73af\u5883\u4e0b\u53ef\u7528\u7684 io \u5904\u7406\u63a5\u53e3\uff0c\u7136\u540e\u5728\u7b49\u5f85\u7740 io \u64cd\u4f5c\u7ed3\u675f\u4e4b\u540e\uff0c\u5c06\u76f8\u5e94\u7684\u4e8b\u4ef6\u53bb\u901a\u8fc7\u4e8b\u4ef6\u5faa\u73af\u4e5f\u597d\uff0c\u6216\u8005\u5176\u4ed6\u7684\u65b9\u5f0f\u6dfb\u52a0\u5230\u6211\u4eec\u7684\u8fd9\u4e2a\u4e8b\u4ef6\u961f\u5217\u5f53\u4e2d\uff0c\u90a3\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u4e8b\u4ef6\u5faa\u73af\u662f\u4e00\u76f4\u5de5\u4f5c\u7684\uff0c\u6700\u540e\u4ed6\u4f1a\u6309\u7167\u4e00\u5b9a\u7684\u987a\u5e8f\u518d\u4ece\u4e8b\u4ef6\u961f\u5217\u4e2d\u53bb\u53d6\u51fa\u76f8\u5e94\u7684\u4e8b\u4ef6\uff0c\u7136\u540e\u518d\u4ea4\u7ed9\u4e3b\u7ebf\u7a0b\u6765\u8fdb\u884c\u6267\u884c\uff0c\u90a3\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u4e8b\u4ef6\u9a71\u52a8\u7684\u4f53\u73b0\u5c31\u662f\u6709\u4eba\u53d1\u5e03\u4e86\u4e8b\u4ef6\uff0c\u7136\u540e\u8ba2\u9605\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u4eba\u5728\u5c06\u6765\u53bb\u63a5\u6536\u5230\u5177\u4f53\u7684\u4e8b\u4ef6\uff0c\u6d88\u606f\u53d1\u5e03\u4e4b\u540e\uff0c\u5c31\u4f1a\u53bb\u6267\u884c\u8ba2\u9605\u65f6\u6240\u6ce8\u518c\u7684\u5904\u7406\u7a0b\u5e8f\uff0c\u90a3\u8fd9\u6837\u7684\u67b6\u6784\u5c31\u5f88\u597d\u7684\u53bb\u89e3\u51b3\u4e86\u5728 node \u5c55\u793a\u5f53\u4e2d\uff0c\u7531\u5f02\u6b65\u975e\u963b\u585e\u64cd\u4f5c\u6240\u5e26\u6765\u7684\u8fd9\u6837\u4e00\u4e2a\u6570\u636e\u6700\u7ec8\u83b7\u53d6\u7684\u95ee\u9898\uff0c\u90a3\u5177\u4f53\u7684\u4ee3\u7801\u5b9e\u73b0\u7684\u5c31\u662f\u5728 nodejs \u4e2d\u5b83\u5185\u7f6e\u4e86\u4e00\u4e2a events \u6a21\u5757\uff0c\u90a3\u63a5\u4e0b\u6765\u8fd9\u91cc\u6211\u4eec\u5c31\u4f1a\u53bb\u901a\u8fc7\u4ee3\u7801\u7684\u65b9\u5f0f\u6765\u5feb\u901f\u7684\u6f14\u793a\u4e00\u4e0b\uff0c\u5728 node \u4e2d\u8fd9\u79cd\u57fa\u4e8e\u4e8b\u4ef6\u7684\u64cd\u4f5c\u884c\u4e3a\uff0c\u90a3\u81f3\u4e8e\u5b83\u7684\u6e90\u7801\u5b9e\u73b0\u548c\u5e94\u7528\u7684\u4e00\u4e9b\u7ec6\u8282\uff0c\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u518d\u53bb\u8fdb\u884c\u5177\u4f53\u7684\u8bf4\u660e\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const EventEmitter = require('events')\n\nconst myEvent = new EventEmitter()\n\nmyEvent.on('event1', (...ars) => {\n  console.log('\u4e8b\u4ef61\u6267\u884c\u4e86\uff1a ', ars)\n})\n\nmyEvent.on('event1', (...ars) => {\n  console.log('\u4e8b\u4ef61\u53c8\u6267\u884c\u4e86\uff1a ', ars)\n})\n\nsetTimeout(() => {\n  myEvent.emit('event1', '\u6570\u636e1', '\u6570\u636e2')\n}, 2000)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6574\u4e2a\u903b\u8f91\u5462\u5176\u5b9e\u975e\u5e38\u7b80\u5355\uff0c\u4e3b\u8981\u7684\u6838\u5fc3\u601d\u60f3\u5c31\u662f\u8bf4\u660e\u4e00\u4e0b\u6211\u4eec nodejs \u91c7\u7528\u4e86\u4e8b\u4ef6\u9a71\u52a8\u7684\u67b6\u6784\uff0c\u800c\u5177\u4f53\u7684\u8868\u73b0\u5c31\u5728\u8fd9\u91cc\u8fb9\uff0c\u6211\u4eec\u6709\u4e00\u4e2a events \u8fd9\u6837\u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u5b83\u662f\u5185\u7f6e\u7684\u6838\u5fc3\u7684\uff0c\u5df2\u7ecf\u63d0\u4f9b\u597d\u4e86\uff0c\u6211\u4eec\u53ea\u8981\u53bb\u7528\u5c31\u884c\u4e86\uff0c\u8ddf\u5e38\u89c1\u7684\u53d1\u5e03\u8ba2\u9605\u5dee\u4e0d\u591a\uff0c\u90a3\u5728\u8fd9\u4e00\u5757\u7684\u8bdd\u5c31\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"new EventEmitter()"}),"\u8fd9\u6837\u7684\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u7136\u540e\u901a\u8fc7 on \u548c emit \u4e00\u4e2a\u5f62\u5f0f\u6765\u8ba2\u9605\u4e8b\u4ef6\u3001\u89e6\u53d1\u4e8b\u4ef6\uff0c\u7136\u540e\u8fd9\u4e2a\u4e8b\u4ef6\u89e6\u53d1\u4e4b\u540e\uff0c\u90a3\u8fd9\u4e2a\u65f6\u5019\u7684\u56de\u8c03\u51fd\u6570\u5b83\u5c31\u4f1a\u53bb\u88ab\u6267\u884c\u5230\uff0c\u6211\u4eec\u5176\u5b9e\u53ea\u9700\u8981\u53bb\u77e5\u9053\u6709\u4e00\u4e2a\u53d1\u5e03\u8005\uff0c\u7136\u540e\u4ed6\u5c31\u53ef\u4ee5\u53bb\u6709\u591a\u4e2a\u6216\u8005\u8bf4\u4e00\u4e2a\u8ba2\u9605\u8005\uff0c\u90a3\u5f53\u6211\u4eec\u8fd9\u4e2a\u4ee3\u7801\u4ece\u4e0a\u5f80\u4e0b\u540c\u6b65\u7684\u4ee3\u7801\u4f1a\u5148\u53bb\u6267\u884c\uff0c\u7b49\u5230\u8fd9\u4e9b\u4e2a\u6240\u6709\u7684\u540c\u6b65\u4ee3\u7801\u90fd\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u4e24\u79d2\u540e\u56de\u53bb\u51fa\u53d1\u4e8b\u4ef6\uff0c\u90a3\u8fd9\u4e2a\u65f6\u5019\u5c31\u4f1a\u6309\u7167\u6211\u4eec\u6ce8\u518c\u7684\u987a\u5e8f\u6765\u6267\u884c\u76f8\u5e94\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u90a3\u4ee5\u4e0a\u8fd9\u4e9b\u5c31\u662f\u5173\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u7684\u5177\u4f53\u5185\u5bb9\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u5e76\u6ca1\u6709\u53bb\u8fc7\u591a\u7684\u8ba8\u8bba\uff0c\u5728\u6211\u4eec\u8fd9\u4e2a\u4e8b\u4ef6\u5faa\u73af\u5f53\u4e2d\u4e0d\u540c\u7c7b\u578b\u7684\u4e8b\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff0c\u53ea\u662f\u53bb\u5148\u8bf4\u660e\u4e00\u4e0b\uff0c\u5728\u5b9e\u73b0\u5f02\u6b65 io \u7684\u524d\u63d0\u4e0b\uff0c\u7136\u540e\u6211\u4eec\u518d\u914d\u5408\u7684\u4e8b\u4ef6\u9a71\u52a8\u7684\u64cd\u4f5c\uff0c\u90a3 nodejs \u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u53bb\u8fdb\u884c\u5f02\u6b65\u7f16\u7a0b\u4e86\uff0c\u90a3\u5e76\u4e14\u8fd8\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u62ff\u5230\u6211\u4eec\u8fd9\u4e2a\u5f02\u6b65\u7f16\u7a0b\u5b83\u8fd4\u56de\u7684\u6267\u884c\u7ed3\u679c\uff0c\u90a3\u8fd9\u4e9b\u7279\u70b9\u4e5f\u5c31\u4e3a nodejs \u53bb\u5b9e\u73b0\u9ad8\u6027\u80fd\u7684 web \u670d\u52a1\u53bb\u63d0\u4f9b\u4e86\u4e00\u4e2a\u524d\u63d0\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},1464:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/04-fc432cbd625a3e87c8cb0d761a269291.png"},9128:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var s=o(9474);const t={},d=s.createContext(t);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);