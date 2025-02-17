"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5640],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var i=r(96540);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},29797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(74848),n=r(28453);const s={},a=void 0,l={id:"targetdir",title:"targetdir",description:"Sets the destination directory for the compiled binary target.",source:"@site/docs/targetdir.md",sourceDirName:".",slug:"/targetdir",permalink:"/docs/targetdir",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/targetdir.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1631875623e3,frontMatter:{},sidebar:"docs",previous:{title:"tailcalls",permalink:"/docs/tailcalls"},next:{title:"targetextension",permalink:"/docs/targetextension"}},o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Sets the destination directory for the compiled binary target."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'targetdir ("path")\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By default, the generated project files will place their compiled output in the same directory as the script. The ",(0,i.jsx)(t.code,{children:"targetdir"})," function allows you to change this location."]}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"path"})," is the file system path to the directory where the compiled target file should be stored. It is specified relative to the currently executing script file."]}),"\n",(0,i.jsx)(t.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,i.jsx)(t.p,{children:"Project configurations."}),"\n",(0,i.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(t.p,{children:"Premake 4.0 or later."}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"This project separates its compiled output by configuration type."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'project "MyProject"\n\n  filter { "configurations:Debug" }\n    targetdir "bin/debug"\n\n  filter { "configurations:Release" }\n    targetdir "bin/release"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/targetname",children:"targetname"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/targetextension",children:"targetextension"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/targetprefix",children:"targetprefix"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/targetsuffix",children:"targetsuffix"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);