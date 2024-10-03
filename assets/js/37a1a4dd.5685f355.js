"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1244],{1844:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var l=s(74848),i=s(28453);const r={},d=void 0,a={id:"rebuildcommands",title:"rebuildcommands",description:"Specifies one or more shell commands to be executed to rebuild a Makefile project.",source:"@site/docs/rebuildcommands.md",sourceDirName:".",slug:"/rebuildcommands",permalink:"/docs/rebuildcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/rebuildcommands.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"propertydefinition",permalink:"/docs/propertydefinition"},next:{title:"remotedeploydir",permalink:"/docs/remotedeploydir"}},c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Specifies one or more shell commands to be executed to rebuild a ",(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile project"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'rebuildcommands { "commands" }\n'})}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"commands"})," specifies a list of one or more shell commands to be executed. The commands may use ",(0,l.jsx)(n.a,{href:"/docs/Tokens",children:"tokens"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile projects"})}),"\n",(0,l.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,l.jsx)(n.p,{children:"Premake 5.0 or later."}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:["Use a ",(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile project"})," to execute an external makefile."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n'})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/Custom-Build-Commands",children:"Custom Build Commands"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile Projects"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/buildcommands",children:"buildcommands"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/buildmessage",children:"buildmessage"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/buildoutputs",children:"buildoutputs"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/cleancommands",children:"cleancommands"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var l=s(96540);const i={},r=l.createContext(i);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);