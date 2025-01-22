"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8601],{98887:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=i(74848),t=i(28453);const s={},a=void 0,o={id:"display",title:"display",description:"Text to display for rule or property definition",source:"@site/docs/display.md",sourceDirName:".",slug:"/display",permalink:"/docs/display",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/display.md",tags:[],version:"current",lastUpdatedBy:"Jarod42",lastUpdatedAt:1736609566e3,frontMatter:{},sidebar:"docs",previous:{title:"disablewarnings",permalink:"/docs/disablewarnings"},next:{title:"documentationfile",permalink:"/docs/documentationfile"}},r={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Text to display for rule or property definition"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'display "value"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value"})," - Text shown for the rule or property definition."]}),"\n",(0,l.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"rule"})," scope."]}),"\n",(0,l.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,l.jsx)(n.p,{children:"Premake 5.0.0 alpha 12 or later."}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'rule "myrule"\n  display "My custom rule"\n  fileextension ".in"\n\n  propertydefinition {\n    name = "myoption",\n    display = "My option",\n    description = "Select the option to use",\n    values = { [0] = "option1", [1] = "option2"},\n    value = 1\n  }\n\n  buildmessage \'custom rule: {copy} %{file.relpath} %{file.basename}\'\n  buildoutputs { "%{sln.location}/%{file.basename}" }\n  buildcommands { "MyScript {myoption} %[%{!file.abspath}] %[%{!sln.location}/%{file.basename}]" }\n'})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/Custom-Rules",children:"Custom Rules"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var l=i(96540);const t={},s=l.createContext(t);function a(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);