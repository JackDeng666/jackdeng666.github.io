"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[95],{6036:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=s(3274),c=s(9128);const o={id:"duplex-transform",sidebar_label:"\u53cc\u5de5\u548c\u8f6c\u6362\u6d41",title:"\u53cc\u5de5\u548c\u8f6c\u6362\u6d41"},t=void 0,l={id:"nodejs/stream/duplex-transform",title:"\u53cc\u5de5\u548c\u8f6c\u6362\u6d41",description:"\u672c\u7bc7\u6765\u770b\u4e00\u4e0b\u53cc\u5de5\u6d41\u548c\u8f6c\u6362\u6d41\u3002",source:"@site/docs/nodejs/10-stream/04-duplex-transform.md",sourceDirName:"nodejs/10-stream",slug:"/nodejs/stream/duplex-transform",permalink:"/docs/nodejs/stream/duplex-transform",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"duplex-transform",sidebar_label:"\u53cc\u5de5\u548c\u8f6c\u6362\u6d41",title:"\u53cc\u5de5\u548c\u8f6c\u6362\u6d41"},sidebar:"nodejs",previous:{title:"\u53ef\u5199\u6d41",permalink:"/docs/nodejs/stream/writeable"},next:{title:"\u6587\u4ef6\u53ef\u8bfb\u6d41",permalink:"/docs/nodejs/stream/file-readable"}},d={},i=[{value:"Duplex",id:"duplex",level:3},{value:"Transform",id:"transform",level:3}];function a(n){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u672c\u7bc7\u6765\u770b\u4e00\u4e0b\u53cc\u5de5\u6d41\u548c\u8f6c\u6362\u6d41\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"duplex",children:"Duplex"}),"\n",(0,r.jsxs)(e.p,{children:["\u5b83\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u540c\u65f6\u5b9e\u73b0\u4e86 ",(0,r.jsx)(e.code,{children:"Readable"})," \u4e0e ",(0,r.jsx)(e.code,{children:"Writeable"})," \u7684\u6d41\uff0c\u5728\u7ba1\u9053\u64cd\u4f5c\u4e2d\uff0c\u5b83\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u4e0a\u6e38\u6765\u751f\u4ea7\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u53bb\u4f5c\u4e3a\u4e0b\u6e38\u6765\u6d88\u8d39\u6570\u636e\uff0c\u77e5\u9053\u4e86\u53ef\u8bfb\u53ef\u5199\u64cd\u4f5c\u4e4b\u540e\uff0c\u8fd9\u4e2a\u5e94\u8be5\u662f\u5f88\u597d\u7406\u89e3\u7684\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u8981\u53bb\u81ea\u5df1\u5b9a\u4e49\u4e00\u4e2a\u53cc\u5de5\u6d41\uff0c\u5c31\u8981\u5b8c\u6210\u4ee5\u4e0b\u4e00\u4e9b\u6838\u5fc3\u7684\u6b65\u9aa4\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u7ee7\u627f ",(0,r.jsx)(e.code,{children:"Duplex"})," \u7c7b"]}),"\n",(0,r.jsxs)(e.li,{children:["\u91cd\u5199 ",(0,r.jsx)(e.code,{children:"_read"})," \u65b9\u6cd5\uff0c\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"push"})," \u751f\u4ea7\u6570\u636e"]}),"\n",(0,r.jsxs)(e.li,{children:["\u91cd\u5199 ",(0,r.jsx)(e.code,{children:"_write"})," \u65b9\u6cd5\uff0c\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"write"})," \u6d88\u8d39\u6570\u636e"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const { Duplex } = require('stream')\n\n// \u6a21\u62df\u5e95\u5c42\u6570\u636e\nconst source = ['a', 'b', 'c']\n\nclass MyDuplex extends Duplex {\n  constructor(source, options) {\n    super(options)\n    this.source = source\n  }\n\n  _read() {\n    const data = this.source.shift() || null\n    this.push(data)\n  }\n\n  _write(chunk, encoding, callback) {\n    console.log('_write \u6570\u636e:', chunk.toString())\n    process.nextTick(callback)\n  }\n}\n\nconst myDuplex = new MyDuplex(source)\n\nmyDuplex.on('data', chunk => {\n  console.log('on data:', chunk.toString())\n})\n\nmyDuplex.write('\u6d4b\u8bd5\u6570\u636e', 'utf-8', () => {\n  console.log('\u6d4b\u8bd5\u6570\u636e\u5199\u5165')\n})\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4ece\u4ee3\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u53cc\u5de5\u6d41\u7684\u4f7f\u7528\u7279\u70b9\uff0c\u5c31\u662f\u65e2\u53ef\u4ee5\u76d1\u542c ",(0,r.jsx)(e.code,{children:"readable"}),"\u3001 ",(0,r.jsx)(e.code,{children:"data"})," \u4e8b\u4ef6\u6765\u8bfb\u53d6\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u53bb\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"write"})," \u65b9\u6cd5\u53bb\u5199\u5165\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"transform",children:"Transform"}),"\n",(0,r.jsxs)(e.p,{children:["\u6211\u4eec\u518d\u6765\u53bb\u770b\u4e00\u4e0b\u8f6c\u6362\u6d41\uff0c\u5176\u5b9e\u5b83\u672c\u8d28\u4e0a\u4e5f\u662f\u4e00\u4e2a\u53cc\u5de5\u6d41\uff0c\u5b83\u4eec\u7684\u533a\u522b\u5c31\u662f\uff0c\u6bd4\u5982\u8bf4 ",(0,r.jsx)(e.code,{children:"Duplex"})," \u91cc\u8fb9\u7684\u8bfb\u548c\u5199\u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u5b83\u7684\u8bfb\u64cd\u4f5c\u6240\u521b\u5efa\u7684\u6570\u636e\u662f\u4e0d\u80fd\u591f\u88ab\u5199\u64cd\u4f5c\u6765\uff0c\u76f4\u63a5\u5f53\u505a\u6570\u636e\u6e90\u53bb\u4f7f\u7528\u7684\uff0c\u4f46\u662f\u5728 ",(0,r.jsx)(e.code,{children:"Transform"})," \u5f53\u4e2d\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u5c31\u662f\u53ef\u4ee5\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u8f6c\u6362\u6d41\u7684\u5e95\u5c42\u662f\u5c06\u8bfb\u5199\u64cd\u4f5c\u8fdb\u884c\u4e86\u8054\u901a\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u8f6c\u6362\u6d41\u8fd8\u53ef\u4ee5\u53bb\u5bf9\u6570\u636e\u6267\u884c\u76f8\u5e94\u7684\u8f6c\u6362\u64cd\u4f5c\uff0c\u8fd9\u91cc\u7684\u76f8\u5e94\u5c31\u662f\u7531\u6211\u4eec\u81ea\u5df1\u6765\u5b9a\u4e49\u5b9e\u8df5\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u8981\u53bb\u81ea\u5df1\u5b9a\u4e49\u4e00\u4e2a\u8f6c\u6362\u6d41\uff0c\u8981\u5b8c\u6210\u4ee5\u4e0b\u6838\u5fc3\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u7ee7\u627f ",(0,r.jsx)(e.code,{children:"Transform"})," \u7c7b"]}),"\n",(0,r.jsxs)(e.li,{children:["\u91cd\u5199 ",(0,r.jsx)(e.code,{children:"_transform"})," \u65b9\u6cd5\uff0c\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"push"})," \u548c ",(0,r.jsx)(e.code,{children:"callback"})]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const { Transform } = require('stream')\n\nclass MyTransform extends Transform {\n  constructor(opts) {\n    super(opts)\n  }\n\n  _transform(chunk, encoding, callback) {\n    console.log('_transform:', chunk.toString())\n    this.push(chunk.toString().toUpperCase())\n    callback(null)\n  }\n}\n\nconst myTransform = new MyTransform()\nmyTransform.pipe(process.stdout)\n\nmyTransform.write('a')\nmyTransform.write('b')\nsetTimeout(() => {\n  myTransform.write('c')\n}, 1000)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u5728 ",(0,r.jsx)(e.code,{children:"_transform"})," \u7684\u5185\u90e8\u53ef\u4ee5\u53bb\u8c03\u7528\u4e86\u5185\u90e8\u7684 ",(0,r.jsx)(e.code,{children:"push"})," \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u5c31\u4f1a\u628a\u6570\u636e\u53bb\u4ea4\u7ed9\u53ef\u8bfb\u6d41\uff0c\u5f53\u7136\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u6211\u4eec\u8fd8\u53ef\u4ee5\u53bb\u5bf9\u5f53\u524d\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5de5\uff0c\u4f8b\u5982\u6211\u4eec\u5f53\u524d\u4ee3\u7801\u91cc\u9762\u5c31\u662f\u628a ",(0,r.jsx)(e.code,{children:"chunk"})," \u7684\u5185\u5bb9\u8f6c\u4e3a\u5927\u5199\u4e4b\u540e\uff0c\u518d\u53bb\u6267\u884c ",(0,r.jsx)(e.code,{children:"callback"}),"\uff0c\u505a\u5b8c\u8fd9\u4e9b\u4e2a\u64cd\u4f5c\u4e4b\u540e\u3002\u6211\u4eec\u53c8\u53bb\u5b9e\u4f8b\u5316\u4e86\u4e00\u4e2a\u8f6c\u6362\u6d41\u5bf9\u8c61\uff0c\u7136\u540e\u53c8\u8ba9\u5b83\u53bb\u8c03\u4e86 ",(0,r.jsx)(e.code,{children:"pipe"})," \u65b9\u6cd5\uff0c\u628a\u8f6c\u6362\u6d41\u901a\u8fc7\u7ba1\u9053\u4f20\u7ed9\u4e86 ",(0,r.jsx)(e.code,{children:"process.stdout"})," \u8fd9\u4e2a\u53ef\u5199\u6d41\uff0c\u56e0\u4e3a\u5b83\u672c\u8eab\u662f\u53cc\u5de5\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u6765\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"write"})," \u65b9\u6cd5\u6765\u6267\u884c\u6570\u636e\u7684\u5199\u5165\u64cd\u4f5c\uff0c\u53ef\u4ee5\u770b\u5230\u8f93\u51fa\uff0c\u6bcf\u5199\u5b8c\u4e00\u6b21\u6570\u636e\uff0c\u6807\u51c6\u8f93\u51fa\u5c31\u4f1a\u8f93\u51fa\u4e00\u4e2a\u7ecf\u8fc7\u8f6c\u6362\u7684\u6570\u636e\u3002"]})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},9128:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>l});var r=s(9474);const c={},o=r.createContext(c);function t(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);