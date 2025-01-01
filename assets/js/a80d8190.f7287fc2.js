"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2678],{20978:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=l(74848),i=l(28453);const s={},r=void 0,a={id:"linker",title:"linker",description:"Specifies the linker.",source:"@site/docs/linker.md",sourceDirName:".",slug:"/linker",permalink:"/docs/linker",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/linker.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727635129e3,frontMatter:{},sidebar:"docs",previous:{title:"linkbuildoutputs",permalink:"/docs/linkbuildoutputs"},next:{title:"linkerfatalwarnings",permalink:"/docs/linkerfatalwarnings"}},c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Specifies the linker."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'linker("value")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"value"})," string, one of:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Default"})," - uses the toolset platform default linker."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LLD"})," - uses LLVM's LLD linker (supported on ",(0,t.jsx)(n.code,{children:"gcc"})," and ",(0,t.jsx)(n.code,{children:"clang"})," toolsets)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"config"})," scope."]}),"\n",(0,t.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,t.jsx)(n.p,{children:"Premake 5.0 beta 3 or later."}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Sets ",(0,t.jsx)(n.code,{children:"LLD"})," as the linker."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'filter { "toolset:clang" }\n   linker { "LLD" }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>a});var t=l(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);