"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7436],{28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>a});var o=r(96540);const t={},n=o.createContext(t);function l(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(n.Provider,{value:s},e.children)}},56948:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=r(74848),t=r(28453);const n={},l=void 0,a={id:"os/os.remove",title:"os.remove",description:"Remove files from the file system.",source:"@site/docs/os/os.remove.md",sourceDirName:"os",slug:"/os/os.remove",permalink:"/docs/os/os.remove",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os/os.remove.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"os.realpath",permalink:"/docs/os/os.realpath"},next:{title:"os.rename",permalink:"/docs/os/os.rename"}},i={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"See Also",id:"see-also",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Remove files from the file system."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-lua",children:'os.remove("path", ...)\n'})}),"\n",(0,o.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"path"})," is the file system path to be removed. Wildcard matches are supported, see ",(0,o.jsx)(s.a,{href:"/docs/os/os.matchfiles",children:"os.matchfiles"})," for examples."]}),"\n",(0,o.jsx)(s.h3,{id:"return-value",children:"Return Value"}),"\n",(0,o.jsx)(s.p,{children:"True if successful, otherwise nil and an error message."}),"\n",(0,o.jsx)(s.h3,{id:"availability",children:"Availability"}),"\n",(0,o.jsx)(s.p,{children:"Premake 5.0 or later."}),"\n",(0,o.jsx)(s.h3,{id:"see-also",children:"See Also"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/os/os.rmdir",children:"os.rmdir"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/os/os.matchfiles",children:"os.matchfiles"})}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-lua",children:'local ok, err = os.remove{"**.bak", "**.log"}\nif not ok then\n\terror(err)\nend\n'})})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);