"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9914],{96863:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(74848),s=r(28453);const i={title:"Migrating from Premake 4.x"},c="Function name changes",d={id:"Migrating-From-4.x",title:"Migrating from Premake 4.x",description:"The function workspace replaces solution. The latter still works, but the former is preferred.",source:"@site/docs/Migrating-From-4.x.md",sourceDirName:".",slug:"/Migrating-From-4.x",permalink:"/docs/Migrating-From-4.x",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Migrating-From-4.x.md",tags:[],version:"current",lastUpdatedBy:"Sam Surtees",lastUpdatedAt:1634784339e3,frontMatter:{title:"Migrating from Premake 4.x"}},o={},l=[];function h(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"function-name-changes",children:"Function name changes"})}),"\n",(0,t.jsxs)(n.p,{children:["The function ",(0,t.jsx)(n.a,{href:"/docs/workspace",children:(0,t.jsx)(n.code,{children:"workspace"})})," replaces ",(0,t.jsx)(n.code,{children:"solution"}),". The latter still works, but the former is preferred."]}),"\n",(0,t.jsxs)(n.p,{children:["The function ",(0,t.jsx)(n.a,{href:"/docs/filter",children:(0,t.jsx)(n.code,{children:"filter"})})," replaces the ",(0,t.jsx)(n.code,{children:"configuration"})," function for specifying the current configuration. It provides a more powerful interface for selecting which configuration is current, making it easy to specify flags for different actions, files, etc. The ",(0,t.jsx)(n.code,{children:"configurations"})," setting at the workspace level still sets the available configurations."]}),"\n",(0,t.jsx)(n.h1,{id:"flag-changes",children:"Flag changes"}),"\n",(0,t.jsxs)(n.p,{children:["Many of the old ",(0,t.jsx)(n.a,{href:"/docs/flags",children:(0,t.jsx)(n.code,{children:"flags"})})," have become full-fledged functions. This should be a comprehensive list of such changes."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Old flags"}),(0,t.jsx)(n.th,{children:"New Function"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"EnableSSE"}),", ",(0,t.jsx)(n.code,{children:"EnableSSE2"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/vectorextensions",children:(0,t.jsx)(n.code,{children:"vectorextensions"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"ExtraWarnings"}),", ",(0,t.jsx)(n.code,{children:"NoWarnings"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/warnings",children:(0,t.jsx)(n.code,{children:"warnings"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"FloatFast"}),", ",(0,t.jsx)(n.code,{children:"FloatStrict"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/floatingpoint",children:(0,t.jsx)(n.code,{children:"floatingpoint"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Managed"}),", ",(0,t.jsx)(n.code,{children:"Unsafe"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/clr",children:(0,t.jsx)(n.code,{children:"clr"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"NativeWChar"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/nativewchar",children:(0,t.jsx)(n.code,{children:"nativewchar"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"NoEditAndContinue"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/editandcontinue",children:(0,t.jsx)(n.code,{children:"editandcontinue"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"NoRTTI"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/rtti",children:(0,t.jsx)(n.code,{children:"rtti"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"OptimizeSize"}),", ",(0,t.jsx)(n.code,{children:"OptimizeSpeed"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/optimize",children:(0,t.jsx)(n.code,{children:"optimize"})})})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var t=r(96540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);