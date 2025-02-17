"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1720],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},36315:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=i(74848),s=i(28453);const r={},a=void 0,d={id:"kind",title:"kind",description:"Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library.",source:"@site/docs/kind.md",sourceDirName:".",slug:"/kind",permalink:"/docs/kind",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/kind.md",tags:[],version:"current",lastUpdatedBy:"Nick Clark",lastUpdatedAt:1735617731e3,frontMatter:{},sidebar:"docs",previous:{title:"justmycode",permalink:"/docs/justmycode"},next:{title:"language",permalink:"/docs/language"}},l={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'kind ("kind")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kind"})," is one of the following string identifiers:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ConsoleApp"}),(0,t.jsx)(n.td,{children:"A console or command-line application."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WindowedApp"}),(0,t.jsx)(n.td,{children:"An application which runs in a desktop window. This distinction does not apply on Linux, but is important on Windows and Mac OS X."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SharedLib"}),(0,t.jsx)(n.td,{children:"A shared library or DLL."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"StaticLib"}),(0,t.jsx)(n.td,{children:"A static library."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Makefile"}),(0,t.jsxs)(n.td,{children:["A special configuration type which calls out to one or more external commands. The actual type of binary created is unspecified. See ",(0,t.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile Projects"})," for more information."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Utility"}),(0,t.jsx)(n.td,{children:"A configuration which contains only custom build rules."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"A configuration which is not included in the build. Useful for projects containing only web pages, header files, or support documentation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Packaging"}),(0,t.jsxs)(n.td,{children:["A configuration type to create .androidproj files, which build the apk in an Android application under Visual Studio. ",(0,t.jsxs)(n.em,{children:["Note, this was previously ",(0,t.jsx)(n.code,{children:"AndroidProj"}),"."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SharedItems"}),(0,t.jsx)(n.td,{children:"A special configuration type which doesn't contain any build settings of its own, instead using the build settings of any projects that link it."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,t.jsx)(n.p,{children:"Project configurations."}),"\n",(0,t.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Makefile"})," kind is available in Premake 5.0 and later, and are supported for Visual Studio and Codelite.\nThe ",(0,t.jsx)(n.strong,{children:"None"})," kind is available in Premake 5.0 and later, and are supported for gmakelegacy, gmake, Codelite and Visual Studio.\nThe ",(0,t.jsx)(n.strong,{children:"Utility"})," kind is only available for Visual Studio, Codelite and gmake, as well as very limited support in gmakelegacy.\nThe ",(0,t.jsx)(n.strong,{children:"SharedItems"})," kind is only available for Visual Studio 2013 and later."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Set the project to build a command-line executable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'kind "ConsoleApp"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Set the project to build a shared library (DLL)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'kind "SharedLib"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Build either a static or a shared library, depending on the selected build configuration."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "DebugLib", "DebugDLL", "ReleaseLib", "ReleaseDLL" }\n\nproject "MyProject"\n\n   filter "*Lib"\n      kind "StaticLib"\n\n   filter "*DLL"\n      kind "SharedLib"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"See Also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile Projects"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);