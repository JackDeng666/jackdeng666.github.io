"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[7509],{7570:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var a=n(3274),t=n(9128);const d={slug:"array-to-tree-structure",date:new Date("2021-11-15T00:00:00.000Z"),title:"\u6570\u7ec4\u8f6c\u6811\u5f62\u7ed3\u6784\uff0c\u83b7\u53d6\u6811\u7ed3\u6784\u6570\u636e\u4fe1\u606f",authors:["jack"],tags:["js","\u524d\u7aef"]},l=void 0,i={permalink:"/blog/array-to-tree-structure",source:"@site/blog/\u6570\u7ec4\u8f6c\u6811\u5f62\u7ed3\u6784.md",title:"\u6570\u7ec4\u8f6c\u6811\u5f62\u7ed3\u6784\uff0c\u83b7\u53d6\u6811\u7ed3\u6784\u6570\u636e\u4fe1\u606f",description:"js \u5b9e\u73b0\u6570\u7ec4\u8f6c\u6811\u5f62\u7ed3\u6784\u7684\u5404\u79cd\u51fd\u6570\uff0c\u5b9e\u73b0\u901a\u8fc7\u539f\u6570\u7ec4\u83b7\u53d6\u6811\u7ed3\u6784\u6570\u636e\u4fe1\u606f\u3002",date:"2021-11-15T00:00:00.000Z",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],readingTime:4.225,hasTruncateMarker:!0,authors:[{name:"Jack Deng",title:"Typescript \u5168\u6808\u5f00\u53d1\u8005",url:"https://github.com/jackdeng666",imageURL:"https://github.com/jackdeng666.png",key:"jack"}],frontMatter:{slug:"array-to-tree-structure",date:"2021-11-15T00:00:00.000Z",title:"\u6570\u7ec4\u8f6c\u6811\u5f62\u7ed3\u6784\uff0c\u83b7\u53d6\u6811\u7ed3\u6784\u6570\u636e\u4fe1\u606f",authors:["jack"],tags:["js","\u524d\u7aef"]},unlisted:!1,prevItem:{title:"\u5c01\u88c5 vue \u7ec4\u4ef6\u5e76\u53d1\u5e03\u5230 npm",permalink:"/blog/publish-vue-components-to-npm"}},s={authorsImageUrls:[void 0]},o=[{value:"\u8f93\u5165\u8f93\u51fa\u7684\u6548\u679c",id:"\u8f93\u5165\u8f93\u51fa\u7684\u6548\u679c",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784 v1",id:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784-v1",level:3},{value:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784 v2",id:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784-v2",level:3},{value:"\u987a\u4fbf\u83b7\u53d6\u6811\u7ed3\u6784\u5c42\u6570",id:"\u987a\u4fbf\u83b7\u53d6\u6811\u7ed3\u6784\u5c42\u6570",level:3},{value:"\u6839\u636e id \u83b7\u53d6\u6574\u4e2a\u6811\u9875\u7684\u4fe1\u606f",id:"\u6839\u636e-id-\u83b7\u53d6\u6574\u4e2a\u6811\u9875\u7684\u4fe1\u606f",level:3},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:2}];function c(r){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...r.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"js \u5b9e\u73b0\u6570\u7ec4\u8f6c\u6811\u5f62\u7ed3\u6784\u7684\u5404\u79cd\u51fd\u6570\uff0c\u5b9e\u73b0\u901a\u8fc7\u539f\u6570\u7ec4\u83b7\u53d6\u6811\u7ed3\u6784\u6570\u636e\u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8f93\u5165\u8f93\u51fa\u7684\u6548\u679c",children:"\u8f93\u5165\u8f93\u51fa\u7684\u6548\u679c"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"let arr = [\r\n  { id: 1, parentId: 0, name: '\u5e7f\u4e1c\u7701' },\r\n  { id: 2, parentId: 1, name: '\u5e7f\u5dde\u5e02' },\r\n  { id: 3, parentId: 1, name: '\u6df1\u5733\u5e02' },\r\n  { id: 4, parentId: 2, name: '\u8354\u6e7e\u533a' },\r\n  { id: 5, parentId: 2, name: '\u8d8a\u79c0\u533a' },\r\n  { id: 6, parentId: 3, name: '\u5357\u5c71\u533a' },\r\n  { id: 7, parentId: 3, name: '\u5b9d\u5b89\u533a' }\r\n]\r\n\r\nconst { toTreeV1, toTreeV2, toTreeHasLayer, getTreeInfoById } =\r\n  createTreeFns(arr)\r\n\r\n// let treeData = toTreeV1(0)\r\n// let treeData = toTreeV2(0)\r\nlet treeData = toTreeHasLayer(0)\r\nconsole.log(JSON.stringify(treeData, null, 2))\r\n\r\nconsole.log(getTreeInfoById(4, 'name'))\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:'{\r\n  "arr": [\r\n    {\r\n      "id": 1,\r\n      "parentId": 0,\r\n      "name": "\u5e7f\u4e1c\u7701",\r\n      "layer": 1,\r\n      "children": [\r\n        {\r\n          "id": 2,\r\n          "parentId": 1,\r\n          "name": "\u5e7f\u5dde\u5e02",\r\n          "layer": 2,\r\n          "children": [\r\n            {\r\n              "id": 4,\r\n              "parentId": 2,\r\n              "name": "\u8354\u6e7e\u533a",\r\n              "layer": 3,\r\n              "children": []\r\n            },\r\n            {\r\n              "id": 5,\r\n              "parentId": 2,\r\n              "name": "\u8d8a\u79c0\u533a",\r\n              "layer": 3,\r\n              "children": []\r\n            }\r\n          ]\r\n        },\r\n        {\r\n          "id": 3,\r\n          "parentId": 1,\r\n          "name": "\u6df1\u5733\u5e02",\r\n          "layer": 2,\r\n          "children": [\r\n            {\r\n              "id": 6,\r\n              "parentId": 3,\r\n              "name": "\u5357\u5c71\u533a",\r\n              "layer": 3,\r\n              "children": []\r\n            },\r\n            {\r\n              "id": 7,\r\n              "parentId": 3,\r\n              "name": "\u5b9d\u5b89\u533a",\r\n              "layer": 3,\r\n              "children": []\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  "layerNum": 3\r\n}\r\n[ \'\u5e7f\u4e1c\u7701\', \'\u5e7f\u5dde\u5e02\', \'\u8354\u6e7e\u533a\' ]\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,a.jsx)(e.p,{children:"\u5148\u521b\u5efa\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u5230\u65f6\u5019\u8fd4\u56de\u5404\u79cd\u64cd\u4f5c\u65b9\u6cd5\uff0c\u9ad8\u9636\u51fd\u6570\u63a5\u6536\u6570\u7ec4\u548c\u6570\u7ec4\u5143\u7d20\u91cc id \u7684\u5b57\u6bb5\u548c parentId \u7684\u5b57\u6bb5\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"function createTreeFns(array = [], idField = 'id', parentIdFiled = 'parentId') {\r\n  return {}\r\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784-v1",children:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784 v1"}),"\n",(0,a.jsx)(e.p,{children:"\u5b9e\u73b0\u4e00\u4e2a toTreeV1 \u51fd\u6570\uff0c\u8fd9\u4e2a\u5b9e\u73b0\u6bd4\u8f83\u597d\u7406\u89e3"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"function createTreeFns(array = [], idField = 'id', parentIdFiled = 'parentId') {\r\n  function toTreeV1(parentId) {\r\n    const res = []\r\n    array.forEach((el) => {\r\n      if (el[parentIdFiled] === parentId) {\r\n        el.children = toTreeV1(el[idField])\r\n        res.push(el)\r\n      }\r\n    })\r\n    return res\r\n  }\r\n\r\n  return {\r\n    toTreeV1\r\n  }\r\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784-v2",children:"\u6570\u7ec4\u8f6c\u6811\u7ed3\u6784 v2"}),"\n",(0,a.jsx)(e.p,{children:"\u5b9e\u73b0\u4e00\u4e2a toTreeV2 \u51fd\u6570\uff0c\u8fd9\u4e2a\u5b9e\u73b0\u4ee3\u7801\u8f83\u5c11"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"function createTreeFns(array = [], idField = 'id', parentIdFiled = 'parentId') {\r\n  function toTreeV2(parentId) {\r\n    return array\r\n      .filter((el) => el[parentIdFiled] === parentId)\r\n      .map((el) => ({ ...el, children: toTreeV2(el[idField]) }))\r\n  }\r\n\r\n  return {\r\n    toTreeV2\r\n  }\r\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u987a\u4fbf\u83b7\u53d6\u6811\u7ed3\u6784\u5c42\u6570",children:"\u987a\u4fbf\u83b7\u53d6\u6811\u7ed3\u6784\u5c42\u6570"}),"\n",(0,a.jsx)(e.p,{children:"\u987a\u4fbf\u83b7\u53d6\u6811\u7ed3\u6784\u5c42\u6570"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"function createTreeFns(array = [], idField = 'id', parentIdFiled = 'parentId') {\r\n  function toTreeHasLayer(parentId) {\r\n    let layerNum = 0\r\n    function arrayToTree(parentId, layer) {\r\n      const res = []\r\n      array.forEach((el) => {\r\n        if (el[parentIdFiled] === parentId) {\r\n          el.layer = layer\r\n          el.children = arrayToTree(el[idField], layer + 1)\r\n          if (el.children.length) {\r\n            layerNum++\r\n          }\r\n          res.push(el)\r\n        }\r\n      })\r\n      return res\r\n    }\r\n    return {\r\n      arr: arrayToTree(parentId, 1),\r\n      layerNum\r\n    }\r\n  }\r\n\r\n  return {\r\n    toTreeHasLayer\r\n  }\r\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u6839\u636e-id-\u83b7\u53d6\u6574\u4e2a\u6811\u9875\u7684\u4fe1\u606f",children:"\u6839\u636e id \u83b7\u53d6\u6574\u4e2a\u6811\u9875\u7684\u4fe1\u606f"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"function createTreeFns(array = [], idField = 'id', parentIdFiled = 'parentId') {\r\n  function getTreeInfoById(id, infoField) {\r\n    let res = []\r\n    let data = array.find((el) => el[idField] === id)\r\n    if (data) {\r\n      res.unshift(data[infoField])\r\n      if (data[parentIdFiled]) {\r\n        res.unshift(...getTreeInfoById(data[parentIdFiled], infoField))\r\n      }\r\n    }\r\n    return res\r\n  }\r\n\r\n  return {\r\n    getTreeInfoById\r\n  }\r\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u5b8c\u6574\u4ee3\u7801",children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"function createTreeFns(array = [], idField = 'id', parentIdFiled = 'parentId') {\r\n  function toTreeV1(parentId) {\r\n    const res = []\r\n    array.forEach((el) => {\r\n      if (el[parentIdFiled] === parentId) {\r\n        el.children = toTreeV1(el[idField])\r\n        res.push(el)\r\n      }\r\n    })\r\n    return res\r\n  }\r\n\r\n  function toTreeV2(parentId) {\r\n    return array\r\n      .filter((el) => el[parentIdFiled] === parentId)\r\n      .map((el) => ({ ...el, children: toTreeV2(el[idField]) }))\r\n  }\r\n\r\n  function toTreeHasLayer(parentId) {\r\n    let layerNum = 0\r\n    function arrayToTree(parentId, layer) {\r\n      const res = []\r\n      array.forEach((el) => {\r\n        if (el[parentIdFiled] === parentId) {\r\n          el.layer = layer\r\n          el.children = arrayToTree(el[idField], layer + 1)\r\n          if (el.children.length) {\r\n            layerNum++\r\n          }\r\n          res.push(el)\r\n        }\r\n      })\r\n      return res\r\n    }\r\n    return {\r\n      arr: arrayToTree(parentId, 1),\r\n      layerNum\r\n    }\r\n  }\r\n\r\n  function getTreeInfoById(id, infoField) {\r\n    let res = []\r\n    let data = array.find((el) => el[idField] === id)\r\n    if (data) {\r\n      res.unshift(data[infoField])\r\n      if (data[parentIdFiled]) {\r\n        res.unshift(...getTreeInfoById(data[parentIdFiled], infoField))\r\n      }\r\n    }\r\n    return res\r\n  }\r\n\r\n  return {\r\n    toTreeV1,\r\n    toTreeV2,\r\n    toTreeHasLayer,\r\n    getTreeInfoById\r\n  }\r\n}\r\n\r\nlet arr = [\r\n  { id: 1, parentId: 0, name: '\u5e7f\u4e1c\u7701' },\r\n  { id: 2, parentId: 1, name: '\u5e7f\u5dde\u5e02' },\r\n  { id: 3, parentId: 1, name: '\u6df1\u5733\u5e02' },\r\n  { id: 4, parentId: 2, name: '\u8354\u6e7e\u533a' },\r\n  { id: 5, parentId: 2, name: '\u8d8a\u79c0\u533a' },\r\n  { id: 6, parentId: 3, name: '\u5357\u5c71\u533a' },\r\n  { id: 7, parentId: 3, name: '\u5b9d\u5b89\u533a' }\r\n]\r\n\r\nconst { toTreeV1, toTreeV2, toTreeHasLayer, getTreeInfoById } =\r\n  createTreeFns(arr)\r\n\r\n// let treeData = toTreeV1(0)\r\n// let treeData = toTreeV2(0)\r\nlet treeData = toTreeHasLayer(0)\r\nconsole.log(JSON.stringify(treeData, null, 2))\r\n\r\nconsole.log(getTreeInfoById(4, 'name'))\n"})})]})}function p(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,a.jsx)(e,{...r,children:(0,a.jsx)(c,{...r})}):c(r)}},9128:(r,e,n)=>{n.d(e,{R:()=>l,x:()=>i});var a=n(9474);const t={},d=a.createContext(t);function l(r){const e=a.useContext(d);return a.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function i(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:l(r.components),a.createElement(d.Provider,{value:e},r.children)}}}]);