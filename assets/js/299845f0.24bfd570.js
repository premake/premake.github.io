"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[580],{13580:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=s(74848),r=s(28453);const i={},t=void 0,c={id:"workspace",title:"workspace",description:"Creates a new workspace.",source:"@site/docs/workspace.md",sourceDirName:".",slug:"/workspace",permalink:"/docs/workspace",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/workspace.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"warnings",permalink:"/docs/warnings"},next:{title:"xcodebuildresources",permalink:"/docs/xcodebuildresources"}},o={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Creates a new workspace."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'workspace ("name")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Workspaces are the top-level objects in a Premake build script, and are synonymous with a Visual Studio solution. Each workspace contains one or more projects, which in turn contain the settings to generate a single binary target."}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"name"})," is a unique name for the workspace. If a workspace with the given name already exists, it is made active and returned."]}),"\n",(0,a.jsx)(n.p,{children:"If no name is given, the current workspace scope is returned, and also made active."}),"\n",(0,a.jsx)(n.p,{children:'If "*" is used, the "root" configuration scope, which applies to all workspaces, is selected and nil is returned.'}),"\n",(0,a.jsxs)(n.p,{children:["By default, the project name will be used as the file name of the generated project file; be careful with spaces and special characters. You can override this default with the ",(0,a.jsx)(n.a,{href:"/docs/filename",children:"filename"})," call."]}),"\n",(0,a.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,a.jsx)(n.p,{children:"Premake 4.0 or later."}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:'Create a new workspace named "MyWorkspace", with debug and release build configurations.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n'})}),"\n",(0,a.jsx)(n.h3,{id:"see-also",children:"See Also"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/project",children:"project"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/group",children:"group"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/configuration",children:"configuration"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/location",children:"location"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/filename",children:"filename"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var a=s(96540);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);