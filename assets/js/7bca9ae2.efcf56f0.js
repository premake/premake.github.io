"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1711],{87682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(74848),l=a(28453);const r={},s=void 0,i={id:"table/table.flatten",title:"table.flatten",description:"Flattens a hierarchy of arrays into a single array containing all of the values.",source:"@site/docs/table/table.flatten.md",sourceDirName:"table",slug:"/table/table.flatten",permalink:"/docs/table/table.flatten",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table/table.flatten.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"table.filterempty",permalink:"/docs/table/table.filterempty"},next:{title:"table.fold",permalink:"/docs/table/table.fold"}},o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Flattens a hierarchy of arrays into a single array containing all of the values."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"table.flatten(arr)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arr"})," is an table containing indexed values, which may themselves also contain indexed values."]}),"\n",(0,n.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,n.jsx)(t.p,{children:"A new array containing all of the elements, nested or otherwise."}),"\n",(0,n.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,n.jsx)(t.p,{children:"Premake 5.0 or later."}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- returns { "A", "B", "C", "D" }\nflat = table.flatten { "A", { "B", "C", { "D" } } }\n'})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var n=a(96540);const l={},r=n.createContext(l);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);