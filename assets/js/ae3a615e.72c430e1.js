"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4160],{38879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(74848),r=n(28453);const i={},a=void 0,l={id:"string.explode",title:"string.explode",description:"Returns an array of strings, each of which is a substring formed by splitting on the provided pattern.",source:"@site/docs/string.explode.md",sourceDirName:".",slug:"/string.explode",permalink:"/docs/string.explode",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/string.explode.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355e3,frontMatter:{},sidebar:"docs",previous:{title:"string.escapepattern",permalink:"/docs/string.escapepattern"},next:{title:"string.findlast",permalink:"/docs/string.findlast"}},o={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Examples",id:"examples",level:3},{value:"Availability",id:"availability",level:3},{value:"See Also",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Returns an array of strings, each of which is a substring formed by splitting on the provided pattern."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'parts = string.explode("str", "pattern")\n'})}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"str"})," is the string to be split. ",(0,s.jsx)(t.em,{children:"pattern"})," is the separator pattern at which to split; it may use Lua's pattern matching syntax."]}),"\n",(0,s.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(t.p,{children:"A list of substrings."}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'e = "a\\nmulti\\nline\\nstring\\n"\n> for k,v in next, string.explode(e, "\\n") do print(k, v) end\n1\ta\n2\tmulti\n3\tline\n4\tstring\n5\n'})}),"\n",(0,s.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,s.jsx)(t.p,{children:"Premake 4.0 or later."}),"\n",(0,s.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/string.startswith",children:"string.startswith"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);