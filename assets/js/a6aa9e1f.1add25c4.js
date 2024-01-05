"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[3089],{6688:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(1529),r=a(7769);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8778:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var n=a(9496),l=a(567);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},4761:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(9496),l=a(5450);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function s(){const e=c();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},285:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(9496),l=a(5924),r=a(1529),o=a(6838),i=a(8532),c=a(8579);const s={backToTopButton:"backToTopButton_ntye",backToTopButtonShow:"backToTopButtonShow_hf2P"};function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:o,cancelScroll:s}=(0,i.Ct)();return(0,i.RF)(((e,a)=>{let{scrollY:n}=e;const o=a?.scrollY;o&&(r.current?r.current=!1:n>=o?(s(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,c.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:a,scrollToTop:()=>o(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,s.backToTopButton,e&&s.backToTopButtonShow),type:"button",onClick:t})}},2493:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(9496),l=a(5924),r=a(5450),o=a(7053),i=a(6838),c=a(6688),s=a(8330),m=a(879),u=a(285),g=a(6358);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:i,permalink:c}=t,m="/"===c?a:i;return n.createElement(n.Fragment,null,n.createElement(o.d,{title:m,description:l}),n.createElement(s.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(g.Z,null,n.createElement(m.Z,{items:a}),n.createElement(c.Z,{metadata:t}),n.createElement(u.Z,null))}function h(e){return n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage)},n.createElement(d,e),n.createElement(p,e))}},7416:(e,t,a)=>{a.d(t,{Z:()=>A});var n=a(9496),l=a(5924),r=a(8778),o=a(8444);function i(e){let{children:t,className:a}=e;const{frontMatter:l,assets:i}=(0,r.C)(),{withBaseUrl:c}=(0,o.C)(),s=i.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&n.createElement("meta",{itemProp:"image",content:c(s,{absolute:!0})}),t)}var c=a(4883);const s={title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:i,title:m}=a,u=o?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(s.title,t),itemProp:"headline"},o?m:n.createElement(c.Z,{itemProp:"url",to:i},m))}var u=a(1529),g=a(4761);const d={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return n.createElement(n.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:i,readingTime:c}=a;return n.createElement("div",{className:(0,l.Z)(d.container,"margin-vert--md",t)},n.createElement(h,{date:o,formattedDate:i}),void 0!==c&&n.createElement(n.Fragment,null,n.createElement(E,null),n.createElement(p,{readingTime:c})))}function f(e){return e.href?n.createElement(c.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:i,imageURL:c,email:s}=t,m=i||s&&`mailto:${s}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},c&&n.createElement(f,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(f,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function Z(e){let{className:t}=e;const{metadata:{authors:a},assets:o,isBlogPostPage:i}=(0,r.C)();if(!i)return null;if(0===a.length)return null;const c=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",c?P.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!c&&"col col--6",c?P.imageOnlyAuthorCol:P.authorCol),key:t},n.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function T(){return n.createElement("header",null,n.createElement(m,null),n.createElement(b,null),n.createElement(Z,null))}var k=a(6476),_=a(9289);function N(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return n.createElement("div",{id:o?k.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(_.Z,null,t))}var y=a(3598),w=a(9085),C=a(8957);function B(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return n.createElement(c.Z,(0,C.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(B,null))}const R={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function x(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:c}=e,s=!t&&c,m=a.length>0;return m||s||i?n.createElement("footer",{className:(0,l.Z)("row",t&&R.blogPostFooterDetailsFull),style:{marginTop:"1em"}},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":s})},n.createElement(w.Z,{tags:a})),t&&i&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(y.Z,{editUrl:i})),s&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(F,{blogPostTitle:o,to:e.permalink}))):null}function A(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--lg"}();return n.createElement(i,{className:(0,l.Z)(o,"mimicry-wrap",a)},n.createElement(T,null),n.createElement(N,null,t),n.createElement(x,null))}},879:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(8778),r=a(7416);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},6358:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(5924),r=a(5671);const o={myContainer:"myContainer_pGZb"};function i(e){let{children:t,...a}=e;return n.createElement(r.Z,a,n.createElement("div",null,n.createElement("div",{className:(0,l.Z)(o.myContainer,"margin-vert--lg")},n.createElement("main",null,t))))}},7769:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(5924),r=a(4883);const o={myLink:"myLink_uxiv"};function i(e){const{permalink:t,title:a,subLabel:i,isNext:c}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev","mimicry-button hover-active",o.myLink),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},2541:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(5924),r=a(4883);const o={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};function i(e){let{permalink:t,label:a,count:i,className:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(c,o.tag,i?o.tagWithCount:o.tagRegular,"mimicry-button hover-active")},a,i&&n.createElement("span",null,`\uff08${i}\uff09`))}}}]);