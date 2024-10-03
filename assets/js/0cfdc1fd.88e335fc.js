"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4368],{91912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=r(74848),i=r(28453);const s={},a=void 0,c={id:"os.targetarch",title:"os.targetarch",description:"Returns the id of the architecture currently being targeted.",source:"@site/docs/os.targetarch.md",sourceDirName:".",slug:"/os.targetarch",permalink:"/docs/os.targetarch",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.targetarch.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727462851e3,frontMatter:{},sidebar:"docs",previous:{title:"os.target",permalink:"/docs/os.target"},next:{title:"os.touchfile",permalink:"/docs/os.touchfile"}},l={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Returns the id of the architecture currently being targeted.\nSee ",(0,n.jsx)(t.a,{href:"/docs/architecture",children:"architecture"})," for a complete list of architecture identifiers."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"id = os.targetarch()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will return ",(0,n.jsx)(t.code,{children:"nil"})," by default instead of returning the architecture for the current running\nsystem due to backwards compatibility."]}),"\n",(0,n.jsxs)(t.p,{children:["A target architecture can be set either via setting ",(0,n.jsx)(t.a,{href:"/docs/_TARGET_ARCH",children:"_TARGET_ARCH"})," or\nby passing an architecture via the ",(0,n.jsx)(t.code,{children:"--arch"})," command line option (which has the most priority)."]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:"None."}),"\n",(0,n.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,n.jsxs)(t.p,{children:["An architecture identifier; see ",(0,n.jsx)(t.a,{href:"/docs/architecture",children:"architecture()"})," for a complete list of identifiers."]}),"\n",(0,n.jsx)(t.p,{children:"Note that this function returns the architecture for the OS that Premake is generating files for, which is not necessarily the same as the architecture for the OS that Premake is currently running on."}),"\n",(0,n.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,n.jsx)(t.p,{children:"Premake 5.0.0 beta 3 or later."}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'print(os.targetarch())\n-- "x86_64"\nend\n'})}),"\n",(0,n.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/_TARGET_ARCH",children:"_TARGET_ARCH"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/os.hostarch",children:"os.hostarch"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/architecture",children:"architecture"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);