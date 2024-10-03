"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9003],{45223:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(74848),t=r(28453);const a={},i=void 0,l={id:"os.rename",title:"os.rename",description:"Rename file system files or directories.",source:"@site/docs/os.rename.md",sourceDirName:".",slug:"/os.rename",permalink:"/docs/os.rename",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.rename.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1726914544e3,frontMatter:{},sidebar:"docs",previous:{title:"os.remove",permalink:"/docs/os.remove"},next:{title:"os.rmdir",permalink:"/docs/os.rmdir"}},o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"See Also",id:"see-also",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Rename file system files or directories."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'os.rename("path", "newpath")\n'})}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"path"})," is the file system path to be renamed.\n",(0,n.jsx)(s.code,{children:"newpath"})," is the renamed file system path."]}),"\n",(0,n.jsx)(s.h3,{id:"return-value",children:"Return Value"}),"\n",(0,n.jsx)(s.p,{children:"True if successful, otherwise nil and an error message."}),"\n",(0,n.jsx)(s.h3,{id:"availability",children:"Availability"}),"\n",(0,n.jsx)(s.p,{children:"Premake 5.0 or later."}),"\n",(0,n.jsx)(s.h3,{id:"see-also",children:"See Also"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/os.rmdir",children:"os.rmdir"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/os.matchfiles",children:"os.matchfiles"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'local ok, err = os.rename{"file.bak", "file.log"}\nif not ok then\n\terror(err)\nend\n'})})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var n=r(96540);const t={},a=n.createContext(t);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);