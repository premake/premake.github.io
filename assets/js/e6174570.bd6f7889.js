"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4174],{80919:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(74848),i=s(28453);const r={},o=void 0,a={id:"os.host",title:"os.host",description:"Identify the currently executing operating system.",source:"@site/docs/os.host.md",sourceDirName:".",slug:"/os.host",permalink:"/docs/os.host",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.host.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"os.getversion",permalink:"/docs/os.getversion"},next:{title:"os.hostarch",permalink:"/docs/os.hostarch"}},l={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Identify the currently executing operating system."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"id = os.host()\n"})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:"None."}),"\n",(0,n.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,n.jsxs)(t.p,{children:["An operating system identifier; see ",(0,n.jsx)(t.a,{href:"/docs/system",children:"system()"})," for a complete list of identifiers."]}),"\n",(0,n.jsx)(t.p,{children:'Note that this function returns the OS that Premake is currently running on, which is not necessarily the same as the OS that Premake is generating files for. If you are running on Mac OS X and generating Visual Studio project files, the identifier is "macosx".'}),"\n",(0,n.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,n.jsx)(t.p,{children:"Premake 5.0.0 alpha 12 or later."}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'if os.host() == "windows" then\n   -- do something Windows-specific\nend\n'})}),"\n",(0,n.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/os.get",children:"os.get"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);