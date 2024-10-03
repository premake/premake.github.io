"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6687],{33596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(74848),r=n(28453);const l={},s=void 0,i={id:"table.fold",title:"table.fold",description:"Merge two lists into an array of objects containing pairs of values, one from each list.",source:"@site/docs/table.fold.md",sourceDirName:".",slug:"/table.fold",permalink:"/docs/table.fold",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table.fold.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"table.flatten",permalink:"/docs/table.flatten"},next:{title:"table.foreachi",permalink:"/docs/table.foreachi"}},o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Merge two lists into an array of objects containing pairs of values, one from each list."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",children:"table.fold(arr1, arr2)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"arr1"})," and ",(0,a.jsx)(t.code,{children:"arr2"})," are tables containing indexed values."]}),"\n",(0,a.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(t.p,{children:"A new array of objects containing the corresponding elements from each list."}),"\n",(0,a.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,a.jsx)(t.p,{children:"Premake 5.0 or later."}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",children:'-- returns { {"A","X"}, {"B","Y"}, {"C","Z"} }\ntable.fold({ "A", "B", "C" }, { "X", "Y", "Z" })\n\n-- returns { {"A","X"}, {"B","Y"}, {"C"} }\ntable.fold({ "A", "B", "C" }, { "X", "Y" })\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);