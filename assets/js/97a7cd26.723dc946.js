"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5950],{34440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(74848),r=t(28453);const i={},o=void 0,a={id:"os/os.getversion",title:"os.getversion",description:"Retrieve version information for the host operating system.",source:"@site/docs/os/os.getversion.md",sourceDirName:"os",slug:"/os/os.getversion",permalink:"/docs/os/os.getversion",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os/os.getversion.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"os.getSystemTags",permalink:"/docs/os/os.getSystemTags"},next:{title:"os.host",permalink:"/docs/os/os.host"}},l={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Retrieve version information for the host operating system."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"sysinfo = os.getversion()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"None."}),"\n",(0,s.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"A table, containing the following key-value pairs:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"majorversion"}),(0,s.jsx)(n.td,{children:"The major version number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"minorversion"}),(0,s.jsx)(n.td,{children:"The minor version number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"revision"}),(0,s.jsx)(n.td,{children:"The bug fix release or service pack number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"A human-readable description of the OS version"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"On platforms where this function has not been implemented, it will return zero for all version numbers, and the platform name as the description."}),"\n",(0,s.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,s.jsx)(n.p,{children:"Premake 4.4 or later."}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local ver = os.getversion()\nprint(string.format(" %d.%d.%d (%s)",\n   ver.majorversion, ver.minorversion, ver.revision,\n   ver.description))\n\n-- On Windows XP: "5.1.3 (Windows XP)"\n-- On OS X,: "10.6.6 (Mac OS X Snow Leopard)"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);