"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>s});var i=n(96540);const o={},t=i.createContext(o);function a(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:r},e.children)}},94457:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var i=n(74848),o=n(28453);const t={},a=void 0,s={id:"objdir",title:"objdir",description:"Sets the directory where object and other intermediate files should be placed when building a project.",source:"@site/docs/objdir.md",sourceDirName:".",slug:"/objdir",permalink:"/docs/objdir",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/objdir.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"nugetsource",permalink:"/docs/nugetsource"},next:{title:"omitframepointer",permalink:"/docs/omitframepointer"}},c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Sets the directory where object and other intermediate files should be placed when building a project."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lua",children:'objdir ("path")\n'})}),"\n",(0,i.jsxs)(r.p,{children:['By default, intermediate files will be stored in a directory named "obj" in the same directory as the project. The ',(0,i.jsx)(r.code,{children:"objdir"})," function allows you to change this location."]}),"\n",(0,i.jsx)(r.p,{children:'To avoid conflicts between build configurations, Premake will ensure that each intermediate directory is unique by appending one or more of the build configuration name, platform name, or project name. You may use the "!" prefix to prevent this behavior, and allow overlapping intermediate directories. See the examples below for more information.'}),"\n",(0,i.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"path"})," is the directory where the object and intermediate files should be stored, specified relative to the currently executing script file. ",(0,i.jsx)(r.a,{href:"/docs/Tokens",children:"Tokens"})," maybe be used."]}),"\n",(0,i.jsx)(r.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,i.jsx)(r.p,{children:"Project configurations."}),"\n",(0,i.jsx)(r.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(r.p,{children:'Premake 4.0 or later. The "!" prefix was introduced in Premake 5.0.'}),"\n",(0,i.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(r.p,{children:['Use a directory named "obj" (the default) for intermediate files. Actual directories will be ',(0,i.jsx)(r.code,{children:"obj/Debug"})," and ",(0,i.jsx)(r.code,{children:"obj/Release"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   objdir "obj"\n'})}),"\n",(0,i.jsxs)(r.p,{children:['Use a directory named "obj" (the default) for intermediate files. Actual directories will be ',(0,i.jsx)(r.code,{children:"obj/Debug/x32"}),", ",(0,i.jsx)(r.code,{children:"obj/Debug/x64"}),", ",(0,i.jsx)(r.code,{children:"obj/Release/x32"}),", and ",(0,i.jsx)(r.code,{children:"obj/Release/x64"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   platforms { "x32", "x64" }\n\nproject "MyProject"\n   objdir "obj"\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Use tokens to reformat the path. Since the end result is unique, Premake will not append any extra directories. Actual directories will be ",(0,i.jsx)(r.code,{children:"obj/x32_Debug"}),", ",(0,i.jsx)(r.code,{children:"obj/x64_Debug"}),", ",(0,i.jsx)(r.code,{children:"obj/x32_Release"}),", and ",(0,i.jsx)(r.code,{children:"obj/x64_Release"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   platforms { "x32", "x64" }\n\nproject "MyProject"\n   objdir "obj/%{cfg.platform}_%{cfg.buildcfg}"\n'})}),"\n",(0,i.jsx)(r.p,{children:'Use the "!" prefix to force a specific directory using Visual Studio\'s provided environment variables instead of Premake tokens.'}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   platforms { "x32", "x64" }\n\nproject "MyProject"\n   objdir "!obj/$(Platform)_$(Configuration)"\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);