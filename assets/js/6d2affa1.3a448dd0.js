"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2452],{1800:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(74848),n=i(28453);const o={},r=void 0,a={id:"os/os.findlib",title:"os.findlib",description:"Scan the well-known system locations looking for a library file.",source:"@site/docs/os/os.findlib.md",sourceDirName:"os",slug:"/os/os.findlib",permalink:"/docs/os/os.findlib",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os/os.findlib.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"os.findheader",permalink:"/docs/os/os.findheader"},next:{title:"os.get",permalink:"/docs/os/os.get"}},l={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Scan the well-known system locations looking for a library file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'p = os.findlib("libname" [, additionalpaths])\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This function does not work to locate system libraries on macOS 11 or later; it may still be used to locate user libraries. From ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/macos-release-notes/macos-big-sur-11_0_1-release-notes",children:"the release notes"}),":"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"New in macOS Big Sur 11.0.1, the system ships with a built-in dynamic linker cache of all system-provided libraries. As part of this change, copies of dynamic libraries are no longer present on the filesystem. Code that attempts to check for dynamic library presence by looking for a file at a path or enumerating a directory will fail."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"libname"})," is name of the library to locate. It may be specified with (",(0,s.jsx)(t.code,{children:"libX11.so"}),") or without (",(0,s.jsx)(t.code,{children:"X11"}),") system-specific decorations."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"additionalpaths"})," is a string or a table of one or more additional search path."]}),"\n",(0,s.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(t.p,{children:"The path containing the library file, if found. Otherwise, nil."}),"\n",(0,s.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,s.jsx)(t.p,{children:"Premake 4.0 or later. Non-macOS host systems only."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(96540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);