"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610],{78665:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(86010),s=a(81287),n=a(39960);const m={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var i=a(95999);function c(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:m.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title))))))}const o=function(e){const{sidebar:t,toc:a,children:n,...m}=e,i=t&&t.items.length>0;return l.createElement(s.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(c,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},n),a&&l.createElement("div",{className:"col col--2"},a))))}},38561:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(67294),r=a(86010),s=a(3905),n=a(95999),m=a(39960),i=a(44996),c=a(32822),o=a(67707),d=a(86753);const g="blogPostTitle_d4p0",u="blogPostData_-Im+",p="blogPostDetailsFull_xD8n";var h=a(20062);const b="image_9q7L";const E=function(e){let{author:t}=e;const{name:a,title:r,url:s,imageURL:n}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},n&&l.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:s},l.createElement("img",{className:b,src:n,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(m.Z,{href:s,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},v={authorCol:"authorCol_8c0z"};function N(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)("col col--6",v.authorCol),key:t},l.createElement(E,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const f=function(e){const t=function(){const{selectMessage:e}=(0,c.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.C)(),{children:b,frontMatter:E,assets:v,metadata:f,truncated:Z,isBlogPostPage:k=!1}=e,{date:_,formattedDate:P,permalink:T,tags:w,readingTime:I,title:L,editUrl:y,authors:C}=f,M=v.image??E.image,U=!k&&Z,x=w.length>0;return l.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=k?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g,itemProp:"headline"},k?L:l.createElement(m.Z,{itemProp:"url",to:T},L)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:_,itemProp:"datePublished"},P),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(N,{authors:C,assets:v}))})(),M&&l.createElement("meta",{itemProp:"image",content:a(M,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(s.Zo,{components:o.Z},b)),(x||Z)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[p]:k})},x&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":U})},l.createElement(h.Z,{tags:w})),k&&y&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:y})),U&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":x})},l.createElement(m.Z,{to:f.permalink,"aria-label":`Read more about ${L}`},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(67294),r=a(39960),s=a(78665),n=a(38561),m=a(95999),i=a(32822);function c(e){const{metadata:t,items:a,sidebar:c}=e,{allTagsPath:o,name:d,count:g}=t,u=function(){const{selectMessage:e}=(0,i.c2)();return t=>e(t,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),p=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:u(g),tagName:d});return l.createElement(s.Z,{title:p,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,p),l.createElement(r.Z,{href:o},l.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))}},86753:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(95999),s=a(87462),n=a(86010);const m="iconEdit_mS5F",i=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(32822);function o(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},l.createElement(i,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),r=a(86010),s=a(39960);const n="tag_WK-t",m="tagRegular_LXbV",i="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return l.createElement(s.Z,{href:t,className:(0,r.Z)(n,{[m]:!c,[i]:c})},a,c&&l.createElement("span",null,c))}},20062:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),r=a(86010),s=a(95999),n=a(7774);const m={tags:"tags_NBRY",tag:"tag_F03v"};function i(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(m.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m.tag},l.createElement(n.Z,{name:t,permalink:a}))}))))}}}]);