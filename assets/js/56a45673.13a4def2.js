"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7382],{65403:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=i(74848),a=i(28453);const t={},s=void 0,l={id:"linkerfatalwarnings",title:"linkerfatalwarnings",description:"Specifies specific linker warnings that should be interpreted as errors.",source:"@site/docs/linkerfatalwarnings.md",sourceDirName:".",slug:"/linkerfatalwarnings",permalink:"/docs/linkerfatalwarnings",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/linkerfatalwarnings.md",tags:[],version:"current",lastUpdatedBy:"Emilio L\xf3pez",lastUpdatedAt:1735311264e3,frontMatter:{},sidebar:"docs",previous:{title:"linker",permalink:"/docs/linker"},next:{title:"linkgroups",permalink:"/docs/linkgroups"}},o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"| Value   | Description                   |",id:"-value----description-------------------",level:2},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Specifies specific linker warnings that should be interpreted as errors."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'linkerfatalwarnings { "warnings" }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"warnings"})," is a list of warnings to interpret as errors."]}),"\n",(0,r.jsx)(n.p,{children:"For Visual Studio, the MSC warning number should be used to specify the warning. On other compilers, the warning should be identified by name."}),"\n",(0,r.jsx)(n.p,{children:"In addition, Premake provides a special value to turn on all linker warnings."}),"\n",(0,r.jsx)(n.h2,{id:"-value----description-------------------",children:"| Value   | Description                   |"}),"\n",(0,r.jsx)(n.p,{children:"| All | Treat all linker warnings as errors   |"}),"\n",(0,r.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,r.jsx)(n.p,{children:"Project configurations."}),"\n",(0,r.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,r.jsxs)(n.p,{children:["Premake 5.0 or later. Special value ",(0,r.jsx)(n.code,{children:"All"})," available since Premake 5.0-beta5 or later."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'filter { "toolset:msc" }\n\tfatalwarnings { "4044" } -- unrecognized option \'option\'; ignored\n\nfilter {}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(96540);const a={},t=r.createContext(a);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);