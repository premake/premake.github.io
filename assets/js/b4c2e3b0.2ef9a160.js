"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7828],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}},34743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const o={},l=void 0,a={id:"linkoptions",title:"linkoptions",description:"Passes arguments directly to the linker command line without translation.",source:"@site/docs/linkoptions.md",sourceDirName:".",slug:"/linkoptions",permalink:"/docs/linkoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/linkoptions.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1631875623e3,frontMatter:{},sidebar:"docs",previous:{title:"linkgroups",permalink:"/docs/linkgroups"},next:{title:"links",permalink:"/docs/links"}},r={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Passes arguments directly to the linker command line without translation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'linkoptions { "options" }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"options"})," is a list of linker flags and options, specific to a particular linker."]}),"\n",(0,i.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,i.jsx)(n.p,{children:"Project configurations."}),"\n",(0,i.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(n.p,{children:"Premake 4.0 or later."}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"pkg-config"})," style configuration when building on Linux with GCC. Build options are always linker specific and should be targeted to a particular toolset."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'filter { "system:linux", "action:gmake" }\n  linkoptions { "`wx-config --libs`" }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);