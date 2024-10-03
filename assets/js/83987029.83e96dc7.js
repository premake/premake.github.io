"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3281],{76172:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(74848),a=s(28453);const i={},n=void 0,c={id:"os.matchdirs",title:"os.matchdirs",description:"Perform a wildcard match to locate one or more directories.",source:"@site/docs/os.matchdirs.md",sourceDirName:".",slug:"/os.matchdirs",permalink:"/docs/os.matchdirs",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.matchdirs.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"os.locate",permalink:"/docs/os.locate"},next:{title:"os.matchfiles",permalink:"/docs/os.matchfiles"}},l={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Perform a wildcard match to locate one or more directories."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'matches = os.matchdirs("pattern")\n'})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"pattern"})," is the file system path to search. It may contain single (non-recursive) or double (recursive) asterisk wildcard patterns."]}),"\n",(0,r.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(t.p,{children:"A list of directories which match the specified pattern. May be empty."}),"\n",(0,r.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,r.jsx)(t.p,{children:"Premake 4.0 or later."}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'matches = os.matchdirs("src/*")      -- non-recursive match\nmatches = os.matchdirs("src/**")     -- recursive match\n\nmatches = os.matchdirs("src/test*")  -- may also match partial names\n'})}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/os.matchfiles",children:"os.matchfiles"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var r=s(96540);const a={},i=r.createContext(a);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);