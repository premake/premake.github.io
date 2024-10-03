"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9132],{86608:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var i=s(74848),a=s(28453);const l={},r=void 0,t={id:"disablewarnings",title:"disablewarnings",description:"Disables specific compiler warnings.",source:"@site/docs/disablewarnings.md",sourceDirName:".",slug:"/disablewarnings",permalink:"/docs/disablewarnings",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/disablewarnings.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355e3,frontMatter:{},sidebar:"docs",previous:{title:"deprecatedfeatures",permalink:"/docs/deprecatedfeatures"},next:{title:"display",permalink:"/docs/display"}},d={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Disables specific compiler warnings."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'disablewarnings { "warnings" }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"warnings"})," is a list of warnings to disable."]}),"\n",(0,i.jsx)(n.p,{children:"For Visual Studio, the MSC warning number should be used to specify the warning. On other compilers, the warning should be identified by name."}),"\n",(0,i.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,i.jsx)(n.p,{children:"Project configurations."}),"\n",(0,i.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(n.p,{children:"Premake 5.0 or later."}),"\n",(0,i.jsxs)(n.p,{children:["Xcode project generation does not yet support ",(0,i.jsx)(n.code,{children:"disablewarnings"}),". As a workaround, you can use [[xcodebuildsettings]] like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'xcodebuildsettings {\n    WARNING_CFLAGS = "-Wall -Wextra " ..\n        "-Wno-missing-field-initializers " ..\n        "-Wno-unknown-pragmas " ..\n        "-Wno-unused-parameter " ..\n        "-Wno-unused-local-typedef " ..\n        "-Wno-missing-braces " ..\n        "-Wno-microsoft-anon-tag "\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Disable the GCC warning about using old-style C casts (",(0,i.jsx)(n.code,{children:"-Wno-old-style-cast"})," command line argument):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'filter "options:cc=gcc"\n  disablewarnings "old-style-cast"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/enablewarnings",children:"enablewarnings"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fatalwarnings",children:"fatalwarnings"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(96540);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);