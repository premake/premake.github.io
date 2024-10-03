"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7206],{955:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(74848),n=r(28453);const s={},c=void 0,a={id:"pchheader",title:"pchheader",description:"Specifies the #include form of the precompiled header file name.",source:"@site/docs/pchheader.md",sourceDirName:".",slug:"/pchheader",permalink:"/docs/pchheader",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/pchheader.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"optimize",permalink:"/docs/optimize"},next:{title:"pchsource",permalink:"/docs/pchsource"}},l={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"See Also",id:"see-also",level:2}];function o(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Specifies the #include form of the precompiled header file name."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'pchheader ("name.h")\n'})}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/docs/Precompiled-Headers",children:"Precompiled Headers"})," for more information."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"name.h"})," is the name of the precompiled header, as it is specified in the #include statements of the project source code. If your source code includes the header like this:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'#include "myproject.h"\n'})}),"\n",(0,t.jsx)(i.p,{children:"...specify the header in your script like this, even if the file itself is located on a different path relative to the project (and presumably found at compile time via the include file search paths):"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'pchheader "myproject.h"\n'})}),"\n",(0,t.jsx)(i.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,t.jsx)(i.p,{children:"Project configurations."}),"\n",(0,t.jsx)(i.h3,{id:"availability",children:"Availability"}),"\n",(0,t.jsx)(i.p,{children:"Premake 4.0 and up."}),"\n",(0,t.jsx)(i.h2,{id:"see-also",children:"See Also"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/Precompiled-Headers",children:"Precompiled Headers"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/pchsource",children:"pchsource"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>c,x:()=>a});var t=r(96540);const n={},s=t.createContext(n);function c(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);