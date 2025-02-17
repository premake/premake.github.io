"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8180],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}},69838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(74848),s=t(28453);const r={},o=void 0,l={id:"newoption",title:"newoption",description:"Registers a new command-line option. For more information, see Command Line Arguments.",source:"@site/docs/newoption.md",sourceDirName:".",slug:"/newoption",permalink:"/docs/newoption",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/newoption.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355e3,frontMatter:{},sidebar:"docs",previous:{title:"newaction",permalink:"/docs/newaction"},next:{title:"nuget",permalink:"/docs/nuget"}},d={},a=[{value:"Parameters",id:"parameters",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Registers a new command-line option. For more information, see ",(0,i.jsx)(n.a,{href:"/docs/Command-Line-Arguments",children:"Command Line Arguments"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"newoption { description }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"description"})," is a table describing the new option. It may contain the following fields:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"trigger"}),(0,i.jsxs)(n.td,{children:["What the user would type on the command line to select the option, e.g. ",(0,i.jsx)(n.code,{children:"--name"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"description"}),(0,i.jsx)(n.td,{children:"A short description of the option, to be displayed in the help text."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"value"}),(0,i.jsx)(n.td,{children:"Optional. If the option needs a value, provides a hint to the user what type of data is expected."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"allowed"}),(0,i.jsx)(n.td,{children:"Optional. A list of key-value pairs listing the allowed values for the option."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"default"}),(0,i.jsx)(n.td,{children:"Optional. Sets the default for this option if not specified on the commandline."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"category"}),(0,i.jsxs)(n.td,{children:["Optional. Places the option under a separate header when the user passes ",(0,i.jsx)(n.code,{children:"--help"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(n.p,{children:"Premake 4.0 and later."}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Register a new option to select a rendering API for a 3D application."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'newoption {\n   trigger     = "gfxapi",\n   value       = "API",\n   description = "Choose a particular 3D API for rendering",\n   default     = "opengl",\n   category    = "Build Options",\n   allowed = {\n      { "opengl",    "OpenGL" },\n      { "direct3d",  "Direct3D (Windows only)" },\n      { "software",  "Software Renderer" }\n   }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/Command-Line-Arguments",children:"Command Line Arguments"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);