"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1193],{9815:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=s(74848),l=s(28453);const o={},a=void 0,d={id:"buildcommands",title:"buildcommands",description:"Specifies one or more shell commands to be executed to build a project or file.",source:"@site/docs/buildcommands.md",sourceDirName:".",slug:"/buildcommands",permalink:"/docs/buildcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildcommands.md",tags:[],version:"current",lastUpdatedBy:"Joris Dauphin",lastUpdatedAt:1709146228e3,frontMatter:{},sidebar:"docs",previous:{title:"buildaction",permalink:"/docs/buildaction"},next:{title:"buildcustomizations",permalink:"/docs/buildcustomizations"}},c={},r=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Specifies one or more shell commands to be executed to build a project or file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'buildcommands { "commands" }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"commands"})," specifies a list of one or more shell commands to be executed. The commands may use ",(0,i.jsx)(n.a,{href:"/docs/Tokens",children:"tokens"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,i.jsx)(n.p,{children:"Makefile projects and per-file custom build commands."}),"\n",(0,i.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(n.p,{children:"Premake 5.0 or later."}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"/docs/Custom-Build-Commands",children:"per-file custom build commands"})," to compile all Lua files in a project to C:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"filter 'files:**.lua'\n   -- A message to display while this build step is running (optional)\n   buildmessage 'Compiling %[%{file.relpath}]'\n\n   -- One or more commands to run (required)\n   buildcommands {\n      'luac -o \"%[%{!cfg.objdir}/%{file.basename}.out]\" \"%[%{file.relpath}]\"'\n   }\n\n   -- One or more outputs resulting from the build (required)\n   buildoutputs { '%{cfg.objdir}/%{file.basename}.c' }\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use a ",(0,i.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile project"})," to execute an external makefile."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'workspace "Workspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/Tokens",children:"Tokens"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/Custom-Build-Commands",children:"Custom Build Commands"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile Projects"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/buildinputs",children:"buildinputs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/buildmessage",children:"buildmessage"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/buildoutputs",children:"buildoutputs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/cleancommands",children:"cleancommands"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/rebuildcommands",children:"rebuildcommands"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var i=s(96540);const l={},o=i.createContext(l);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);