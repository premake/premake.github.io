"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,4608],{85642:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(67294),o=a(3905),l=a(46291),c=a(81287),i=a(86010),r=a(32822),s=a(93783),d=a(55537),m=a(87462);const u=e=>n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var b=a(95999),p=a(39960),h=a(13919),E=a(90541);const f={menuLinkText:"menuLinkText_OKON"},k=(e,t)=>"link"===e.type?(0,r.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>k(e,t))),v=(0,n.memo)((function(e){let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(g,(0,m.Z)({key:t,item:e},a)))))}));function g(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(_,(0,m.Z)({item:t},a)):n.createElement(C,(0,m.Z)({item:t},a))}function _(e){let{item:t,onItemClick:a,activePath:o,level:l,...c}=e;const{items:s,label:d,collapsible:u,className:b}=t,p=k(t,o),{collapsed:h,setCollapsed:E,toggleCollapsed:g}=(0,r.uR)({initialState:()=>!!u&&(!p&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:o}=e;const l=(0,r.D9)(t);(0,n.useEffect)((()=>{t&&!l&&a&&o(!1)}),[t,l,a,o])}({isActive:p,collapsed:h,setCollapsed:E}),n.createElement("li",{className:(0,i.Z)(r.kM.docs.docSidebarItemCategory,r.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":h},b)},n.createElement("a",(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":u,"menu__link--active":u&&p,[f.menuLinkText]:!u}),onClick:u?e=>{e.preventDefault(),g()}:void 0,href:u?"#":void 0},c),d),n.createElement(r.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.createElement(v,{items:s,tabIndex:h?-1:0,onItemClick:a,activePath:o,level:l+1})))}function C(e){let{item:t,onItemClick:a,activePath:o,level:l,...c}=e;const{href:s,label:d,className:u}=t,b=k(t,o);return n.createElement("li",{className:(0,i.Z)(r.kM.docs.docSidebarItemLink,r.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:d},n.createElement(p.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:a},c),(0,h.Z)(s)?d:n.createElement("span",null,d,n.createElement(E.Z,null))))}const S={sidebar:"sidebar_a3j0",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_VlPv",sidebarHidden:"sidebarHidden_OqfG",sidebarLogo:"sidebarLogo_hmkv",menu:"menu_cyFh",menuWithAnnouncementBar:"menuWithAnnouncementBar_+O1J",collapseSidebarButton:"collapseSidebarButton_eoK2",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_e+kA",sidebarMenuIcon:"sidebarMenuIcon_iZzd",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_6kU2"};function N(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},n.createElement(u,{className:S.collapseSidebarButtonIcon}))}function I(e){let{path:t,sidebar:a,onCollapse:o,isHidden:l}=e;const c=function(){const{isActive:e}=(0,r.nT)(),[t,a]=(0,n.useState)(e);return(0,r.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:m}=(0,r.LU)();return n.createElement("div",{className:(0,i.Z)(S.sidebar,{[S.sidebarWithHideableNavbar]:s,[S.sidebarHidden]:l})},s&&n.createElement(d.Z,{tabIndex:-1,className:S.sidebarLogo}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",S.menu,{[S.menuWithAnnouncementBar]:c})},n.createElement("ul",{className:(0,i.Z)(r.kM.docs.docSidebarMenu,"menu__list")},n.createElement(v,{items:a,activePath:t,level:1}))),m&&n.createElement(N,{onClick:o}))}const Z=e=>{let{toggleSidebar:t,sidebar:a,path:o}=e;return n.createElement("ul",{className:(0,i.Z)(r.kM.docs.docSidebarMenu,"menu__list")},n.createElement(v,{items:a,activePath:o,onItemClick:()=>t(),level:1}))};function T(e){return n.createElement(r.Cv,{component:Z,props:e})}const M=n.memo(I),w=n.memo(T);function B(e){const t=(0,s.Z)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(M,e),o&&n.createElement(w,e))}var L=a(67707),y=a(24608);const A="backToTopButton_i9tI",x="backToTopButtonShow_wCmF",F=!1;function H(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=F?(window.scrollTo({top:0,behavior:"smooth"}),()=>{}):function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const P=function(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:l}=H();return(0,r.RF)(((e,n)=>{let{scrollY:o}=e;const c=n?.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const i=o<c;if(i||l(),o<300)t(!1);else if(i){const e=document.documentElement.scrollHeight;o+window.innerHeight<e&&t(!0)}else t(!1)})),(0,r.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",r.kM.common.backToTopButton,A,{[x]:e}),type:"button",onClick:()=>o()})};var R=a(16550);const W={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};var D=a(12859);function z(e){let{currentDocRoute:t,versionMetadata:a,children:l}=e;const{pluginId:s,version:d}=a,m=t.sidebar,p=m?a.docsSidebars[m]:void 0,[h,E]=(0,n.useState)(!1),[f,k]=(0,n.useState)(!1),v=(0,n.useCallback)((()=>{f&&k(!1),E((e=>!e))}),[f]);return n.createElement(c.Z,{wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsDocPage,searchMetadatas:{version:d,tag:(0,r.os)(s,d)}},n.createElement("div",{className:W.docPage},n.createElement(P,null),p&&n.createElement("aside",{className:(0,i.Z)(W.docSidebarContainer,{[W.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(W.docSidebarContainer)&&h&&k(!0)}},n.createElement(B,{key:m,sidebar:p,path:t.path,onCollapse:v,isHidden:f}),f&&n.createElement("div",{className:W.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},n.createElement(u,{className:W.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(W.docMainContainer,{[W.docMainContainerEnhanced]:h||!p})},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",W.docItemWrapper,{[W.docItemWrapperEnhanced]:h})},n.createElement(o.Zo,{components:L.Z},l)))))}const O=function(e){const{route:{routes:t},versionMetadata:a,location:o}=e,c=t.find((e=>(0,R.LX)(o.pathname,e)));return c?n.createElement(n.Fragment,null,n.createElement(D.Z,null,n.createElement("html",{className:a.className})),n.createElement(z,{currentDocRoute:c,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a}))):n.createElement(y.default,null)}},24608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),o=a(81287),l=a(95999);const c=function(){return n.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);