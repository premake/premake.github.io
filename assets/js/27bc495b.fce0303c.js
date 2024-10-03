"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1971],{12820:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var l=n(74848),i=n(28453);const t={},s=void 0,a={id:"externalincludedirs",title:"externalincludedirs",description:"Specifies the include file search paths for the compiler, treating headers included from these paths as external.",source:"@site/docs/externalincludedirs.md",sourceDirName:".",slug:"/externalincludedirs",permalink:"/docs/externalincludedirs",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/externalincludedirs.md",tags:[],version:"current",lastUpdatedBy:"Chad Engler",lastUpdatedAt:1641227504e3,frontMatter:{},sidebar:"docs",previous:{title:"externalanglebrackets",permalink:"/docs/externalanglebrackets"},next:{title:"externalproject",permalink:"/docs/externalproject"}},c={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.p,{children:"Specifies the include file search paths for the compiler, treating headers included from these paths as external."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-lua",children:'externalincludedirs { "paths" }\n'})}),"\n",(0,l.jsxs)(r.p,{children:['For Visual Studio, these paths are placed in the "VC++ Directories" properties panel. For GCC and Clang, they are preceded with the ',(0,l.jsx)(r.code,{children:"-isystem"})," flag, rather than ",(0,l.jsx)(r.code,{children:"-I"}),". For toolsets which do not support the concept of external include directories, they are treated as a normal include directory."]}),"\n",(0,l.jsxs)(r.p,{children:["Include files located via an external include directory are treated specially, see ",(0,l.jsx)(r.a,{href:"/docs/externalwarnings",children:"externalwarnings"}),"."]}),"\n",(0,l.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"paths"})," specifies a list of include file search directories. Paths should be specified relative to the currently running script file."]}),"\n",(0,l.jsx)(r.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,l.jsx)(r.p,{children:"Project configurations."}),"\n",(0,l.jsx)(r.h3,{id:"availability",children:"Availability"}),"\n",(0,l.jsx)(r.p,{children:"Premake 5.0 or later."}),"\n",(0,l.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.p,{children:"Define two external include file search paths."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-lua",children:'externalincludedirs { "../lua/include", "../zlib" }\n'})}),"\n",(0,l.jsx)(r.p,{children:"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-lua",children:'externalincludedirs { "../includes/**" }\n'})}),"\n",(0,l.jsx)(r.h3,{id:"see-also",children:"See Also"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/externalanglebrackets",children:"externalanglebrackets"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/externalwarnings",children:"externalwarnings"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/includedirs",children:"includedirs"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var l=n(96540);const i={},t=l.createContext(i);function s(e){const r=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(t.Provider,{value:r},e.children)}}}]);