"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[3249],{1286:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(9474),s=n(5490);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>r(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=i(r,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===m)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var d=n(856),u=n(3274);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(d.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:d,...h}=e;const p=(0,s.p)(),b=c??p.tableOfContents.minHeadingLevel,v=d??p.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:o(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:v});return m((0,a.useMemo)((()=>{if(r&&i)return{linkClassName:r,linkActiveClassName:i,minHeadingLevel:b,maxHeadingLevel:v}}),[r,i,b,v])),(0,u.jsx)(g,{toc:x,className:n,linkClassName:r,...h})}},231:(e,t,n)=>{n.d(t,{e:()=>i,i:()=>r});var a=n(9474),s=n(9680),o=n(3274);const l=a.createContext(null);function r(e){let{children:t,content:n,isBlogPostPage:s=!1}=e;const r=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:s});return(0,o.jsx)(l.Provider,{value:r,children:t})}function i(){const e=(0,a.useContext)(l);if(null===e)throw new s.dV("BlogPostProvider");return e}},7373:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(9474),s=n(6624);const o=["zero","one","two","few","many","other"];function l(e){return o.filter((t=>e.includes(t)))}const r={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),r}}),[e])}function c(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return a[Math.min(o,a.length-1)]}(n,t,e)}}},569:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(9474),s=n(8835),o=n(443),l=n(8123),r=n(9943),i=n(4346);const c={backToTopButton:"backToTopButton_ntye",backToTopButtonShow:"backToTopButtonShow_hf2P"};var m=n(3274);function d(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,s]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:l,cancelScroll:c}=(0,r.gk)();return(0,r.Mq)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(o.current?o.current=!1:a>=l?(c(),s(!1)):a<t?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,i.$)((e=>{e.location.hash&&(o.current=!0,s(!1))})),{shown:n,scrollToTop:()=>l(0)}}({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,o.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.A)("clean-btn",l.G.common.backToTopButton,c.backToTopButton,e&&c.backToTopButtonShow),type:"button",onClick:t})}},5969:(e,t,n)=>{n.d(t,{A:()=>B});n(9474);var a=n(8835),s=n(231),o=n(9787),l=n(3274);function r(e){let{children:t,className:n}=e;const{frontMatter:a,assets:r}=(0,s.e)(),{withBaseUrl:i}=(0,o.h)(),c=r.image??a.image;return(0,l.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[c&&(0,l.jsx)("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t]})}var i=n(856);const c={title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:o}=(0,s.e)(),{permalink:r,title:m}=n,d=o?"h1":"h2";return(0,l.jsx)(d,{className:(0,a.A)(c.title,t),itemProp:"headline",children:o?m:(0,l.jsx)(i.A,{itemProp:"url",to:r,children:m})})}var d=n(443),u=n(7373);const h={container:"container_iJTo"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,l.jsx)(l.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,l.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function b(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function v(e){let{className:t}=e;const{metadata:n}=(0,s.e)(),{date:o,formattedDate:r,readingTime:i}=n;return(0,l.jsxs)("div",{className:(0,a.A)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(p,{date:o,formattedDate:r}),void 0!==i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{}),(0,l.jsx)(g,{readingTime:i})]})]})}function x(e){return e.href?(0,l.jsx)(i.A,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function f(e){let{author:t,className:n}=e;const{name:s,title:o,url:r,imageURL:i,email:c}=t,m=r||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",n),children:[i&&(0,l.jsx)(x,{href:m,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:i,alt:s})}),s&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(x,{href:m,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:s})})}),o&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:o})]})]})}const j={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:o,isBlogPostPage:r}=(0,s.e)();if(!r)return null;if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",i?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,l.jsx)("div",{className:(0,a.A)(!i&&"col col--6",i?j.imageOnlyAuthorCol:j.authorCol),children:(0,l.jsx)(f,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(m,{}),(0,l.jsx)(v,{}),(0,l.jsx)(A,{})]})}var _=n(7481),k=n(9538);function L(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,s.e)();return(0,l.jsx)("div",{id:o?_.blogPostContainerID:void 0,className:(0,a.A)("markdown",n),itemProp:"articleBody",children:(0,l.jsx)(k.A,{children:t})})}var P=n(6960),T=n(4051);function y(){return(0,l.jsx)("b",{children:(0,l.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function C(e){const{blogPostTitle:t,...n}=e;return(0,l.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,l.jsx)(y,{})})}const w={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function I(){const{metadata:e,isBlogPostPage:t}=(0,s.e)(),{tags:n,title:o,editUrl:r,hasTruncateMarker:i}=e,c=!t&&i,m=n.length>0;return m||c||r?(0,l.jsxs)("footer",{className:(0,a.A)("row",t&&w.blogPostFooterDetailsFull),style:{marginTop:"1em"},children:[m&&(0,l.jsx)("div",{className:(0,a.A)("col",{"col--9":c}),children:(0,l.jsx)(T.A,{tags:n})}),t&&r&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(P.A,{editUrl:r})}),c&&(0,l.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,l.jsx)(C,{blogPostTitle:o,to:e.permalink})})]}):null}function B(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,s.e)();return e?void 0:"margin-bottom--lg"}();return(0,l.jsxs)(r,{className:(0,a.A)(o,"mimicry-wrap",n),children:[(0,l.jsx)(N,{}),(0,l.jsx)(L,{children:t}),(0,l.jsx)(I,{})]})}},7660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});n(9474);var a=n(8835),s=n(9531),o=n(8123),l=n(231),r=n(4359),i=n(2529),c=n(856),m=n(1590),d=n(443);const u={sidebar:"sidebar_me8e",sidebarItemTitle:"sidebarItemTitle_MDMA",sidebarItemList:"sidebarItemList_t5AC",sidebarItem:"sidebarItem_PSMt",sidebarItemLink:"sidebarItemLink_nW7C",sidebarItemLinkActive:"sidebarItemLinkActive_hG8J",backButton:"backButton_Rxyd"};var h=n(3274);function g(e){let{sidebar:t}=e;const{isBlogPostPage:n}=(0,l.e)();return(0,h.jsx)("aside",{className:"col col--2",children:(0,h.jsxs)("nav",{className:(0,a.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,d.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[n&&(0,h.jsx)("div",{className:(0,a.A)(u.backButton,"mimicry-button"),onClick:()=>{window.history.back()},children:(0,h.jsx)(m.In,{icon:"ri:arrow-go-back-line"})}),(0,h.jsx)(c.A,{href:"/blog",className:(0,a.A)(u.sidebarItemTitle,"margin-bottom--sm"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.A)(u.sidebarItemList,"clean-list"),children:t.items.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=n(5972);function b(e){let{sidebar:t}=e;return(0,h.jsx)("ul",{className:"menu__list",children:t.items.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function v(e){return(0,h.jsx)(p.GX,{component:b,props:e})}function x(e){let{sidebar:t}=e;const n=(0,i.l)();return t?.items.length?"mobile"===n?(0,h.jsx)(v,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:n,children:s,...o}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.A,{...o,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(x,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.A)("col",{"col--8":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"http://schema.org/Blog",children:s}),n&&(0,h.jsx)("div",{className:"col col--2",children:n})]})})})}var j=n(5969),A=n(4931);function N(e){const{nextItem:t,prevItem:n}=e;return(0,h.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,h.jsx)(A.A,{...n,subLabel:(0,h.jsx)(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,h.jsx)(A.A,{...t,subLabel:(0,h.jsx)(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function _(){const{assets:e,metadata:t}=(0,l.e)(),{title:n,description:a,date:o,tags:r,authors:i,frontMatter:c}=t,{keywords:m}=c,d=e.image??c.image;return(0,h.jsxs)(s.be,{title:n,description:a,keywords:m,image:d,children:[(0,h.jsx)("meta",{property:"og:type",content:"article"}),(0,h.jsx)("meta",{property:"article:published_time",content:o}),i.some((e=>e.url))&&(0,h.jsx)("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,h.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var k=n(569),L=n(9177);function P(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,l.e)(),{nextItem:o,prevItem:r,frontMatter:i}=a,{hide_table_of_contents:c,toc_min_heading_level:m,toc_max_heading_level:d}=i;return(0,h.jsxs)(f,{sidebar:t,toc:!c&&s.length>0?(0,h.jsx)(L.A,{toc:s,minHeadingLevel:m,maxHeadingLevel:d}):void 0,children:[(0,h.jsx)(j.A,{children:n}),(o||r)&&(0,h.jsx)("div",{className:"margin-bottom--md",children:(0,h.jsx)(N,{nextItem:o,prevItem:r})}),(0,h.jsx)(k.A,{})]})}function T(e){const t=e.content;return(0,h.jsx)(l.i,{content:e.content,isBlogPostPage:!0,children:(0,h.jsxs)(s.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,h.jsx)(_,{}),(0,h.jsx)(P,{sidebar:e.sidebar,children:(0,h.jsx)(t,{})})]})})}},4931:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(8835),s=n(856);const o={myLink:"myLink_uxiv"};var l=n(3274);function r(e){const{permalink:t,title:n,subLabel:r,isNext:i}=e;return(0,l.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev","mimicry-button hover-active",o.myLink),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}},9177:(e,t,n)=>{n.d(t,{A:()=>c});n(9474);var a=n(8835),s=n(1286);const o={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var l=n(3274);const r="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.A)(o.tableOfContents,"thin-scrollbar","mimicry-wrap sunken",t),style:{padding:"1em 0"},children:(0,l.jsx)(s.A,{...n,linkClassName:r,linkActiveClassName:i})})}},7279:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(8835),s=n(856);const o={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var l=n(3274);function r(e){let{permalink:t,label:n,count:r,className:i}=e;return(0,l.jsxs)(s.A,{href:t,className:(0,a.A)(i,o.tag,r?o.tagWithCount:o.tagRegular,"mimicry-button hover-active"),children:[n,r&&(0,l.jsx)("span",{children:`\uff08${r}\uff09`})]})}}}]);